import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  // locale: 'en'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // setLocale(state, action) {
    //   state.locale = action.payload
    // },
  },
});

const allActions = appSlice.actions

export const appActions = {
  // all reducer
  ...allActions,
  // all actions (might override reducer if needed)
}

export default appSlice.reducer;