import { Product } from '../reducers/index';
export enum ActionType {
  PRODUCTS_LIST_REQUEST = 'PRODUCTS_LIST_REQUEST',
  PRODUCTS_LIST_SUCCESS = 'PRODUCTS_LIST_SUCCESS',
  PRODUCTS_LIST_FAIL = 'PRODUCTS_LIST_FAIL',
}

interface actionPending {
  type: ActionType.PRODUCTS_LIST_REQUEST;
}

interface actionSuccess {
  type: ActionType.PRODUCTS_LIST_SUCCESS;
  payload: Product[];
}

interface actionFail {
  type: ActionType.PRODUCTS_LIST_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
