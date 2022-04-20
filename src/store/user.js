import { createAction, createReducer } from "@reduxjs/toolkit"

export const setUser = createAction( "User" )

export const user = createReducer( null, { 
   [ setUser ]: ( state, action ) => action.payload
} )