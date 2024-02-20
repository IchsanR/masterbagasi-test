export interface ProductResponse {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  weight?: number;
  quantity: number;
  totalPrice?: number;
}

export interface State {
  pageViews: string;
}

export interface ProductWarehouse {
  id: number,
  title: string,
  price: number,
  weight: number,
  quantity: number,
  totalWeight?: number,
  totalPrice?: number;
}
