import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === cartItem.id);

      if(existingItem){
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...cartItem, quantity: 1});
      }
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if(cartItem)
        cartItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if(cartItem.quantity > 1)
        cartItem.quantity -= 1;
      else 
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
  }
});

export const { addItems, removeItems, clearCart,increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;