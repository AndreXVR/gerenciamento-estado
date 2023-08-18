import { createSlice } from "@reduxjs/toolkit";

export interface Produto {
    id?: string;
    nome: string;
    preco: number;
    estoque: number;
    createdAt?: string;
    updatedAt?: string;
}

const produtoSlice = createSlice({
    name: "produtoSlice",
    
    initialState: { 
        produtos: [
            {
                id: "1",
                nome: "Arroz Tio João 1kg",
                preco: 5.99,
                estoque: 26,
                createdAt: "",
                updatedAt: "",
            },
        ]
  },
    reducers: {},
});

export const { reducer: produtoReducer } = produtoSlice;
export default produtoSlice;
