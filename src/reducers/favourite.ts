import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavouriteAction {
    id: number;
}

export interface FavouriteList {
    id: string[];
}
const initialState: FavouriteList = {
    id: [],
};

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.id.push(action.payload);
        },
    },
});

const { actions, reducer } = favouriteSlice;

export const { addFavourite } = actions;

export default reducer;
