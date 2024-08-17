interface Image {
  public_id: string;
  secure_url: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  images: Image[];
  price: number;
  priceAfterDiscount?: number;
  stock?: number;
  sold?: number;
  rateCount?: number;
  rateAverage?: number;
  category: string; // assuming ObjectId is represented as a string
  subCategory: string; // assuming ObjectId is represented as a string
  brand: string; // assuming ObjectId is represented as a string
  createdBy?: string; // assuming ObjectId is represented as a string
  updatedBy?: string; // assuming ObjectId is represented as a string
}
