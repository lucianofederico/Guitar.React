// STORE CREATION
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { carrito } from "./carrito"
import { user } from "./user"

export const store = configureStore( {
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat( logger ),
   reducer: {
      cart: carrito,
      user: user
   }
 } )