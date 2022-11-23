import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TokenState {
    value: String;
}

const initialState: TokenState = {
    value: "",
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        removeToken: (state) => {
            state.value = "";
        },
        saveToken: (state, action: PayloadAction<String>) => {
            state.value = action.payload
        },
    },
})

export const { removeToken, saveToken} = tokenSlice.actions
export default tokenSlice.reducer