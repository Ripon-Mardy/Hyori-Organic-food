export interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;

  image: any;
  gallery?: any[];

  shortDescription: string;
  description: string;

  category: string;
  brand: string;
  tags: string[];

  price: number;
  discountPrice?: number;
  discountPercentage?: number;

  stock: number;
  sold: number;

  unit: string;

  rating: number;
  totalReviews: number;

  featured: boolean;
  bestSeller: boolean;
  trending: boolean;

  isNew: boolean;
  isSale: boolean;
  isStock: boolean;

  createdAt: string;
}
