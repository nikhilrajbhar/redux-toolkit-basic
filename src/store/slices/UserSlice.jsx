import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUsers: (state, action) => {
            state.push(action.payload);
        },
        removeUsers: (state, action) => {
            state.splice(action.payload, 1)
        },
        deleteUsers: (state, action) => {
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUsers, removeUsers } = userSlice.actions;
export default userSlice.reducer;
