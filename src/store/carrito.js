import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const initCart = createAsyncThunk( "INITCART" ,  ( args, thunk ) =>

   axios
   .get( `http://localhost:3001/api/carrito/show/${args.userId}` )
   .then( res => {
      if (res.data)
         return res.data

      if ( localStorage.getItem( "cart" ) )
         return JSON.parse( localStorage.getItem( "cart" )  )
   } )
)

export const addCart = createAsyncThunk( "ADDCART", ( args, thunk ) =>

    axios.post( "http://localhost:3001/api/carrito/add", args )
   .then( res => res.data ) 
)

export const updateCart =createAsyncThunk( "UPDATECART", ( args, thunk ) =>

   axios
   .put( `http://localhost:3001/api/carrito/update/${args.userId}/${args.productId}`, args )
   .then( res => res.data ) 
)

export const removeCart = createAsyncThunk( "REMOVECART", ( args, thunk ) =>

   axios
   .delete( `http://localhost:3001/api/carrito/delete/${args.userId}/${args.productId}` )
   .then( res => res.data ) 
)
      
export const carrito = createReducer( [], { 
   [ initCart.fulfilled ]: ( state, action ) => {
      localStorage.setItem( "cart", JSON.stringify( action.payload ) )
      return action.payload
   },
   
   [ addCart.fulfilled ]: ( state, action ) => {
      localStorage.setItem( "cart", JSON.stringify( [...state, action.payload] ) )
      return [...state, action.payload]
   },
   
   [ updateCart.fulfilled ]: ( state, action ) => {
      const { productId, cantidad } = action.payload
      const index = state.findIndex( elemento => elemento.productId === productId)
      state[index].cantidad = cantidad
      localStorage.setItem( "cart", JSON.stringify( state ) )
      return state
   },
   
   [ removeCart.fulfilled ]: ( state, action ) => {
      let { productId } = action.payload
      productId = parseInt(productId, 10)
      let newCart = [...state].filter( item => item.productId !== productId )
      localStorage.setItem( "cart", JSON.stringify( newCart ) )
      return newCart
   }
         
} )

//Guardar valor
//const dispatch = useDispatch()
//dispatch( setAlgo( "data" ) )

//Pedir valor
//useSelector( state => state.Algo )


// [{productId, cantidad},{productId, cantidad},{productId, cantidad}]