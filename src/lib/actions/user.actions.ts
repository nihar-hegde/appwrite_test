"use server";
import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";

interface SignInParams {
  email: string;
  password: string;
}
export const getUserInfo = async ({ userId }: { userId: string }) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USER_COLLECTION_ID!,
      [Query.equal("userId", [userId])],
    );

    return JSON.parse(JSON.stringify(user.documents[0]));
  } catch (error) {
    console.log(error);
  }
};

export const signInAction = async (signInData: SignInParams) => {
  const { email, password } = signInData;
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const signUpAction = async ({ password, ...userData }: SignUpParams) => {
  const { email, name } = userData;
  try {
    const { account, database } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      name,
    );

    const newUser = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USER_COLLECTION_ID!,
      ID.unique(),
      {
        ...userData,
        userId: newUserAccount.$id,
      },
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const resopnse = await account.get();
    return resopnse;
  } catch (error) {
    return null;
  }
}

export const logoutAction = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
};
