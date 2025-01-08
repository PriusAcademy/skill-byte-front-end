import { configureStore } from '@reduxjs/toolkit'
import learnerReducer from './features/learner-slice'

export const store = configureStore({
  reducer: {
    learner : learnerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store