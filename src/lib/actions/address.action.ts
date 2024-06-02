"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { AddressType } from "../validators";

export const AddAddressAction = async (data: AddressType) => {
  try {
    const { database } = await createAdminClient();
    console.log(typeof data.pincode);
    const newAddress = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_ADDRESS_COLLECTION_ID!,
      ID.unique(),
      {
        ...data,
      },
    );
    return newAddress;
  } catch (error) {
    console.log(error);
  }
};
