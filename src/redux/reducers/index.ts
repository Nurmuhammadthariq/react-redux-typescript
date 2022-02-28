import { Action, ActionType } from '../actionTypes/index';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productListReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.PRODUCTS_LIST_REQUEST:
      return {
        loading: true,
        products: [],
        error: null,
      };
    case ActionType.PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: null,
      };
    case ActionType.PRODUCTS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

export default productListReducer;
