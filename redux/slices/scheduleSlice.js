import { createSlice } from '@reduxjs/toolkit'

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    allSchedule:[
      {id:'1', date:'01-02-2023', time:'12:00',depart:'Port Elizabeth', dest:'Johannesburg', platform:2, train:'7M91'},
      {id:'2', date:'14-11-2022', time:'14:00',depart:'George',  dest:'Pretoria', platform:1, train:'1M86'},
      {id:'3', date:'01-02-2023', time:'12:00',depart:'Vereniging',  dest:'Johannesburg', platform:2, train:'7M91'},
      {id:'4', date:'14-11-2022', time:'14:00',depart:'George', dest:'Pretoria', platform:1, train:'1M86'},
      {id:'5', date:'01-02-2023', time:'12:00',depart:'Vereniging', dest:'Johannesburg', platform:2, train:'7M91'},
      {id:'6', date:'14-11-2022', time:'14:00',depart:'Port Elizabeth', dest:'Pretoria', platform:1, train:'1M86'},
    ]
  },
  reducers: {
    updateAllSchedule: (state,action) => {
      state.allSchedule = action.payload
    },
  }
})

export const { updateAllSchedule } = scheduleSlice.actions
export default scheduleSlice.reducer