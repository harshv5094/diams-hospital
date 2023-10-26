import { configureStore } from '@reduxjs/toolkit'
import { patientsReducer } from '../features/patientsReducer'
import { wardsReducer } from '../features/wardReducer'

export default configureStore({
  reducer: {
    patients: patientsReducer.reducer,
    wards: wardsReducer.reducer
  }
})
