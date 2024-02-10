import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteAllUsers: (state) => {
            state.users= [];
        },
        clearInput: (state) => {
            state.inputValue= '';


        },
    }
})

export const { changeInput, addUser, deleteAllUsers,clearInput } = usersSlice.actions

export default usersSlice.reducer