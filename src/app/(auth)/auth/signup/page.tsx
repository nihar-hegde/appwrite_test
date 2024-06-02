import { SignUpForm } from "@/components/auth/SignUpForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="w-96">
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div>
            Already have an account?{" "}
            <Link
              href={"/auth/signin"}
              className="hover:underline font-semibold"
            >
              Sign-In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
