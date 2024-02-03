import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products : localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: [
    
    ]
})