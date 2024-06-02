import { SignInForm } from "@/components/auth/SignInForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent className="w-96">
          <SignInForm />
        </CardContent>
        <CardFooter>
          <div>
            Don't have an account?{" "}
            <Link
              href={"/auth/signup"}
              className="hover:underline font-semibold"
            >
              Sign-Up
            </Link>{" "}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
