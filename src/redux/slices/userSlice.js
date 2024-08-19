import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {

        addUser: (state, action) => {
            state.push(action.payload);
        },

        updateUser: (state, action) => {
            const { id, updatedFields } = action.payload;
            const index = state.findIndex(user => user.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedFields };
            }
        },

        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        },
    },
});

export const {
    addUser,
    updateUser,
    deleteUser
} = userSlice.actions;
export default userSlice.reducer;
