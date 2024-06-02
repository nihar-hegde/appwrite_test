import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await getLoggedInUser();
  if (loggedIn) {
    return redirect("/");
  }
  return <div>{children}</div>;
}