import { SingleProduct } from "@/components/admin/SingleProduct";
import { getProductDetailsById } from "@/lib/actions/product.action";
import React from "react";

const SingpleProductPage = async ({ params }: { params: { id: string } }) => {
  const getProductDetails = await getProductDetailsById(params.id);
  console.log(getProductDetails);
  return (
    <div className="flex items-center justify-center p-20">
      <SingleProduct product={getProductDetails} />
    </div>
  );
};

export default SingpleProductPage;
