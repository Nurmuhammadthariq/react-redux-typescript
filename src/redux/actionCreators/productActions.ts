import api from '../../services/api';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const listProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PRODUCTS_LIST_REQUEST,
    });
    try {
      const { data } = await api.get('products');
      console.log(data);
      dispatch({
        type: ActionType.PRODUCTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {}
  };
};
