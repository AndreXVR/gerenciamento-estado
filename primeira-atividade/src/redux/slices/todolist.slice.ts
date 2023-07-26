import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
    name: string;
}

interface ItemState{
    items: Item[];
}

const initialState: ItemState = {
    items: [],
};

export const todolistSlice = createSlice({
    name: "todoListSlice",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => { 
            let toRemove = -1;
            for(let i=0; i < state.items.length; i++){
                if(state.items[i].name === action.payload){
                    toRemove = i;
                    break;
                }
            }
            if(toRemove ==0){
                state.items.shift();
            }else{
                state.items.splice(toRemove,toRemove);
            }
        }
    },
});

export const { addItem, removeItem} = todolistSlice.actions;
export default todolistSlice.reducer;

