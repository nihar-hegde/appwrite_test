"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      setLoading(true);
      const loggedOut = await logoutAction();
      if (loggedOut) {
        setLoading(false);
        router.push("/auth/signin");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant={"destructive"} onClick={handleLogout}>
        {loading ? <LoaderCircle className="animate-spin" /> : "Logout"}
      </Button>
    </div>
  );
};
