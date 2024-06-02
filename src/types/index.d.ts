declare type SignUpParams = {
  name: string;
  username: string;
  email: string;
  password: string;
};

declare type Product = {
  product_name: string;
  description: string;
  imageUrl: string[]; // Replace 'any' with a more specific type if known (e.g., string[])
  price: string; // Consider using 'number' if the price is numerical
  image_key: string[]; // Replace 'any' with a more specific type if known (e.g., string[])
  $id: string;
  $createdAt: string; // Consider using 'Date' if you need to work with dates
  $updatedAt: string; // Consider using 'Date' if you need to work with dates
};

declare interface SingleProductProps {
  product: Product;
}

declare interface ProductTableProps {
  products: Product[];
}
