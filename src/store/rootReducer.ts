import { combineReducers } from '@reduxjs/toolkit';
import favourite from '../reducers/favourite';

const rootReducer = combineReducers({
    favourite,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
