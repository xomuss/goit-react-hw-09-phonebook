import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth/auth-reducers';
import contacts from './phonebook/phonebook-reduser';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const rootReduser = combineReducers({
  auth: persistReducer(persistConfig, auth),
  contacts,
});

const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export default { store, persistor };
