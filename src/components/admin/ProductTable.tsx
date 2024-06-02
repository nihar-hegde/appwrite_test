import { AddProductProps } from "@/lib/actions/product.action";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Product Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>View Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.product_name}>
              <TableCell>{item.product_name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Link
                  className={buttonVariants()}
                  href={`/admin/user/singleProduct/${item.$id}`}
                >
                  View Product
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
