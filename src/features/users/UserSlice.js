import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    addUser:(state,action)=>{
      state.push(action.payload);
    },

    editUser:(state,action)=>{
     const {id,name,email} = action.payload;
     const currentUser = state.find(user => user.id == id);
     if(currentUser){
      currentUser.name=name;
      currentUser.email=email;
     }
    },

    deleteUser:(state,action)=>{
      const {id}=action.payload;
      const currentUser = state.find(user => user.id == id);
      if(currentUser){
        return state.filter(user=> user.id !== id);
      }

    }
    


 
  },

})

// Action creators are generated for each case reducer function
export const { addUser,editUser,deleteUser} = userSlice.actions

export default userSlice.reducer