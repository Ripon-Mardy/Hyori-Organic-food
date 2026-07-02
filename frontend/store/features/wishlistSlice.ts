import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/src/types/product.types";

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    toggleWishlist(state, action: PayloadAction<Product>) {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.items.push(action.payload);
      }
    },

    removeWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
