import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false,
    },
    reducers: {
        ShowLoading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        SetPortfloioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) =>{
            state.reloadData = action.payload;
        }
    },
});

export const { ShowLoading, HideLoading, SetPortfloioData, ReloadData } = rootSlice.actions;
export default rootSlice.reducer;