import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
        state.value += action.payload
    },
    dec:(state)=>{
        state.value -= 1
    },
    reset:(state)=>{
        state.value = 0
    }
  },
})

export const { increment, dec, reset } = counterSlice.actions

export default counterSlice.reducer

