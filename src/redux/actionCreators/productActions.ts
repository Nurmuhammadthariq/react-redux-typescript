import api from '../../services/api';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const listProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PRODUCTS_LIST_REQUEST,
    });
    try {
      const { data } = await api.get(
        'https://fakestoreapi.com/products?limit=5'
      );

      dispatch({
        type: ActionType.PRODUCTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.PRODUCTS_LIST_FAIL,
        payload: 'error',
      });
    }
  };
};
