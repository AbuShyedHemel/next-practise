export type GetProductDetails = {
  id: string;
  title: string;
  description: string;
  price: string | number;
  discountPercentage: string | number;
  rating: string | number;
  stock: string | number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
