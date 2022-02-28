import { combineReducers } from 'redux';
import productListReducer from './index';

const reducers = combineReducers({
  products: productListReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
