import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileAction {
    id: number;
}

export interface ProfileList {
    id: string[];
}
const initialState: ProfileList = {
    id: [],
};

const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        addProfile(state, action: PayloadAction<string>) {
            state.id.push(action.payload);
        },
    },
});

const { actions, reducer } = profileSlice;

export const { addProfile } = actions;

export default reducer;
