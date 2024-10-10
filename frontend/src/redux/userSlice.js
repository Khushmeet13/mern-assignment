import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('http://localhost:5000/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  });

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await fetch(`/api/users/${id}`, { method: 'DELETE' });
  return id;
});

export const loginUser = createAsyncThunk('users/loginUser', async ({ email, password }) => {
    const response = await fetch('http://localhost:5000/api/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed'); 
    }
  
    return response.json();
  });
  
  const userSlice = createSlice({
    name: 'users',
    initialState: {
            currentUser: null, 
            users: [], 
            status: null,
  },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.fulfilled, (state, action) => {
          state.currentUser = action.payload;  
          state.status = 'loggedIn';
        })
        .addCase(loginUser.rejected, (state) => {
          state.status = 'loginFailed';  
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            return state.filter(user => user.id !== action.payload);
          })
    },
  });
  

export default userSlice.reducer;
