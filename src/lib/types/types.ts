export interface ProductResponse {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  weight?: number;
}

export interface State {
  pageViews: string;
}
