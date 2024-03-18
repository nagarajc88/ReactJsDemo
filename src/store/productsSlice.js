import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: []
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts(state, action){
            state.data = action.payload;
        }
    }
});
export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
export function getProducts(){
    return function getProductsThunk(dispatch){
        return axios("https://fakestoreapi.com/products").then((results)=>{
            dispatch(fetchProducts(results.data));
        })
    }
}