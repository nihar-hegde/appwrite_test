"use client";
import React, { useState } from "react";
import { ImageUpload } from "./ImageUploader";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductSchema } from "@/lib/validators";
import { useUploadThing } from "@/lib/uploadthing";
import { LoaderCircle } from "lucide-react";
import { addProductToDbAction } from "@/lib/actions/product.action";
import { useRouter } from "next/navigation";

export const AddProductForm = () => {
  const router = useRouter();
  const [formImages, setFormImages] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      product_name: "",
      description: "",
      price: "",
      imageUrl: "",
      image_key: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ProductSchema>) => {
    try {
      let imageUrl: string[] = [];
      let image_key: string[] = [];
      const uploadedImageData = await startUpload(formImages);
      uploadedImageData?.map((item) => {
        imageUrl.push(item.url);
        image_key.push(item.key);
      });
      const newData = { ...data, imageUrl, image_key };
      const addToDb = await addProductToDbAction(newData);
      if (addToDb) {
        console.log(addToDb);
        router.push("/admin/user/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="product_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <ImageUpload images={formImages} setImages={setFormImages} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};
