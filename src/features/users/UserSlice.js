import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
    id:1,
    name:"Hardy",
    email:"Hardy@gmail.com"
    },
    {
      id:2,
      name:"Hardy",
      email:"Hardy@gmail.com"
      },
    
];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
 
  },

})

// Action creators are generated for each case reducer function
export const { addUser} = userSlice.actions

export default userSlice.reducer