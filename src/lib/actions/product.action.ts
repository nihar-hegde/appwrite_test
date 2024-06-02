"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { parseStringify } from "../utils";
import { revalidatePath } from "next/cache";

export interface AddProductProps {
  product_name: string;
  description: string;
  price: string;
  imageUrl: string[];
  image_key: string[];
}
export const addProductToDbAction = async (data: AddProductProps) => {
  try {
    const { database } = await createAdminClient();
    const newAddress = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCT_COLLECTION_ID!,
      ID.unique(),
      {
        product_name: data.product_name,
        description: data.description,
        price: data.price,
        imageUrl: data.imageUrl,
        image_key: data.image_key,
      },
    );
    revalidatePath("/admin/user/dashboard");
    return newAddress;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const { database } = await createAdminClient();

    const products = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCT_COLLECTION_ID!,
    );
    return parseStringify(products.documents);
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetailsById = async (id: string) => {
  try {
    const { database } = await createAdminClient();
    const products = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCT_COLLECTION_ID!,
      [Query.equal("$id", id)],
    );
    return parseStringify(products.documents);
  } catch (error) {
    console.log(error);
  }
};
