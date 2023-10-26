import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPatients = createAsyncThunk(
  'FETCH_PATIENT_INFORMATION',
  async () => {
    const response = await axios.get(
      'https://daims-hospital-api.harshv1741.repl.co/patients'
    )
    return response.data
  }
)

export const addPatient = createAsyncThunk(
  'ADD_PATIENT_INFORMATION',
  async patientData => {
    const response = await axios.post(
      'https://daims-hospital-api.harshv1741.repl.co/patients',
      patientData
    )
    return response.data
  }
)

export const updatePatient = createAsyncThunk(
  'UPDATE_PATIENT_INFORMATION',
  async ({ id, patientData }) => {
    const response = await axios.put(
      `https://daims-hospital-api.harshv1741.repl.co/patients/${id}`,
      patientData
    )
    return response.data
  }
)

export const deletePatient = createAsyncThunk(
  'DELETE_PATIENT_INFORMATION',
  async id => {
    const response = await axios.put(
      `https://daims-hospital-api.harshv1741.repl.co/patients/${id}`
    )
    return response.data
  }
)

export const patientsReducer = createSlice({
  name: 'patients',
  initialState: {
    patients: [],
    status: 'idle',
    error: null
  },
  reducers: {
    [fetchPatients.pending]: state => {
      state.status = 'loading'
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.status = 'success'
      state.patients = action.payload.record
    },
    [fetchPatients.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [addPatient.pending]: state => {
      state.status = 'loading'
    },
    [addPatient.fulfilled]: (state, action) => {
      state.status = 'success'
      state.patients.push(action.payload.record)
    },
    [addPatient.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updatePatient.pending]: state => {
      state.status = 'loading'
    },
    [updatePatient.fulfilled]: (state, action) => {
      state.status = 'success'
      const index = state.patients.findIndex(
        x => x._id === action.payload.record._id
      )

      if (index !== -1) {
        state.patients[index] = action.payload.record
      }
    },
    [updatePatient.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [deletePatient.pending]: state => {
      state.status = 'loading'
    },
    [deletePatient.fulfilled]: (state, action) => {
      state.status = 'success'
      state.patients = state.patients.filter(
        x => x._id !== action.payload.record._id
      )
    },
    [deletePatient.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})

export default patientsReducer.reducer
