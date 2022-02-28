export interface IProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

type ProductState = {
  products: IProduct[];
};

type ProductAction = {
  type: String;
  products: IProduct;
};

type DispatchType = (args: ProductAction) => ProductAction;
