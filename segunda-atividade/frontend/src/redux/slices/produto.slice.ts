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
                nome: "Café Constantino em grãos 500g",
                preco: 46.70,
                estoque: 19,
                createdAt: "",
                updatedAt: "",
            },
            {
                id: "2",
                nome: "Café Santa Monica em grãos 1 Kg",
                preco: 83.90,
                estoque: 8,
                createdAt: "",
                updatedAt: "",
            },
            {
                id: "3",
                nome: "Café Baggio Aromas Caramelo moído 250 g",
                preco: 33.90,
                estoque: 13,
                createdAt: "",
                updatedAt: "",
            },
            {
                id: "4",
                nome: "Café Illy moído Brasil 125 g",
                preco: 29.00,
                estoque: 26,
                createdAt: "",
                updatedAt: "",
            },
            {
                id: "5",
                nome: "Café do Ponto Torrado em Grãos 1 kg",
                preco: 64.90,
                estoque: 34,
                createdAt: "",
                updatedAt: "",
            },
            {
                id: "6",
                nome: "Café Especial Mogiana 250g",
                preco: 30.40,
                estoque: 6,
                createdAt: "",
                updatedAt: "",
            },
        ]
  },
    reducers: {},
});

export const { reducer: produtoReducer } = produtoSlice;
export default produtoSlice;
