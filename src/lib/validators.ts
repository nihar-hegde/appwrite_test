import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required .",
    })
    .min(3, { message: "Name must contain minimum of 3 charecters!" })
    .max(36, { message: "Name cannot contain more than 36 charecters!" }),
  username: z
    .string()
    .min(1, {
      message: "Username is required .",
    })
    .min(3, { message: "Username must contain minimum of 3 charecters!" })
    .max(36, { message: "Username cannot contain more than 36 charecters!" }),

  email: z.string().email(),
  password: z
    .string()
    .min(1, {
      message: "Password is required .",
    })
    .min(8, { message: "Password must contain minimum of 8 charecters!" })
    .max(36, { message: "Password cannot contain more than 36 charecters!" }),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required .",
  }),
});

export const AddressShema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  phone: z.string().min(1, { message: "Phone No. is Required!" }),
  address: z
    .string()
    .min(1, { message: "Address is Required!" })
    .max(50, { message: "Address can only contain max of 50 charecters!" }),
  city: z
    .string()
    .min(1, { message: "City is required!" })
    .max(50, { message: "city can only contain max of 36 charecters!" }),
  state: z
    .string()
    .min(1, { message: "State is required!" })
    .max(50, { message: "State can only contain max of 36 charecters!" }),
  pincode: z.coerce
    .number()
    .min(1, { message: "Pin COde is required!" })
    .min(5, { message: "Pin code must contain 6 numbers!" }),
});

export type AddressType = z.infer<typeof AddressShema>;

export const ProductSchema = z.object({
  product_name: z.string(),
  description: z.string(),
  price: z.string(),
  imageUrl: z.string(),
  image_key: z.string(),
});
export type ProductType = z.infer<typeof ProductSchema>;
