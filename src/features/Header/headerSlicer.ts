import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    numberNavigation: number
}

const initialState: InitialState = { 
    numberNavigation: 0 
};

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        setHeader(state, action: PayloadAction<number>) {
            state.numberNavigation = action.payload;
        },
    },
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;