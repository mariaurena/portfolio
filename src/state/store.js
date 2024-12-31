import { configureStore } from '@reduxjs/toolkit'
// import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import idReducer from './idSlice'

// Configuración de persistencia
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, idReducer)

// Configura el store con el reducer persistido
export const store = configureStore({
  reducer: {
    id: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production', // Habilita Redux DevTools solo en desarrollo
})

export const persistor = persistStore(store)
