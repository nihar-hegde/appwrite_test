import { ProductTable } from "@/components/admin/ProductTable";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { buttonVariants } from "@/components/ui/button";
import { AddProductProps, getAllProducts } from "@/lib/actions/product.action";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const loggedIn = await getLoggedInUser();
  const allProducts = await getAllProducts();
  console.log(allProducts);

  return (
    <div className="flex flex-col items-center justify-center p-20 text-xl font-semibold">
      <div className="flex flex-col gap-4">
        <Link href={"/admin/user/addAddress"} className={buttonVariants()}>
          Add +
        </Link>

        <Link href={"/admin/user/addProducts"} className={buttonVariants()}>
          Add Product+
        </Link>
      </div>
      <div>
        {allProducts ? (
          <ProductTable products={allProducts} />
        ) : (
          <div>No products FOund</div>
        )}
      </div>

      <div className="mt-10">
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardPage;
