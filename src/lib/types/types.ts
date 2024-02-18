interface Rating {
  rate?: number,
  count?: number;
}

export interface ProductResponse {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating?: Rating;
}