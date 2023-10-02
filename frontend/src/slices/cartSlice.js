import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils'

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' }

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x._id === item._id)

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        )

        // state.cartItems = state.cartItems.map((x) => {
        //   if (x._id === existItem._id) {
        //     item.qty = item.qty + existItem.qty
        //     return item
        //   } else {
        //     return x
        //   }
        // })
      } else {
        //state is immutable -make a copy and add item
        state.cartItems = [...state.cartItems, item]
      }
      return updateCart(state)
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)
      return updateCart(state)
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      return updateCart(state)
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
      return updateCart(state)
    },
    clearCartItems: (state, action) => {
      state.cartItems = []
      localStorage.setItem('cart', JSON.stringify(state))
      return updateCart(state)
    },
    resetCart: (state) => (state = initialState),
  },
})

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart,
} = cardSlice.actions

export default cardSlice.reducer
