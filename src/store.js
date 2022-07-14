import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './features/users/UserSlice'

export const store = configureStore({
  reducer: {
    users:UsersReducer
  },
})