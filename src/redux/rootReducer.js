import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/userReducer';
import productsReducer from './Products/productsReducer';
import cartReducer from './Cart/cartReducer';
import ordersReducer from './Orders/orderReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData']
};

export default persistReducer(configStorage, rootReducer);
