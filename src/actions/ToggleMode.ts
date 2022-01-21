import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface ModeState {
    isDark: boolean;
    currentTitle: string;
}

const initialState: ModeState = {
  isDark: false,
  currentTitle: '',
};


export const mode = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setDark:(state) => {
        state.isDark = !state.isDark;
    },
    setCurrentTitle: (state, action) => {
      state.currentTitle = action.payload;
    }
  },
  
});

export const { setDark, setCurrentTitle } = mode.actions;

export const getMode = (state: RootState) => state.mode.isDark;
export const getCurrentTitle = (state: RootState) => state.mode.currentTitle;


export default mode.reducer;
