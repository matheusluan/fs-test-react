import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoinState {
    value: number;
}

const initialState: CoinState = {
    value: 20,
};

export const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => { })
            .addCase(
                incrementAsync.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.value += action.payload;
                }
            );
    },
});

export const incrementAsync = createAsyncThunk(
    "coin/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const { increment, decrement } = coinSlice.actions;

export default coinSlice.reducer;
