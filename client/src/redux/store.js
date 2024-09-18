//create redux store
import { configureStore } from '@reduxjs/toolkit'
import userAuthorReducer from './slices/userAuthorSlice'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const persistconfig={
    key:'user-state',
    storage
}

const persistedUserAuthorReducer=persistReducer(persistconfig,userAuthorReducer)

export const store = configureStore({
    reducer:{
        userAuthorLoginReducer : persistedUserAuthorReducer
    }
})

export const persistor=persistStore(store);