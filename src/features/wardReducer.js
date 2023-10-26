import { createSlice } from '@reduxjs/toolkit'

export const wardsReducer = createSlice({
  name: 'wards',
  initialState: {
    wards: [],
    state: 'idle',
    error: null
  },
  reducers: {}
})

export default wardsReducer.reducer
