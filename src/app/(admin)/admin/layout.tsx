import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    return redirect("/auth/signin");
  }
  return <div>{children}</div>;
};

export default AdminLayout;
