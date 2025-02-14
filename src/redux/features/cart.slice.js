import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:  [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, {payload})=>{
      let index = state.value.findIndex(({id})=> id === payload.id)
      if(index < 0){
        state.value.push({...payload, amount: 1})
      }
    },
    amountIncrement: (state, {payload})=>{
      let index = state.value.findIndex(({id})=> id === payload.id)
      state.value = state.value.map((item, inx) => index === inx ? {...item, amount: item.amount + 1} : item)
    },
    amountDecrement: (state, {payload})=>{
      let index = state.value.findIndex(({id})=> id === payload.id)
      state.value = state.value.map((item, inx) => index === inx ? {...item, amount: item.amount - 1} : item)
    },
    removeFromCart: ()=>{},
    clearCart: ()=>{},
  },
})

export const { addToCart,amountDecrement,amountIncrement,clearCart,removeFromCart } = cartSlice.actions

export default cartSlice.reducer