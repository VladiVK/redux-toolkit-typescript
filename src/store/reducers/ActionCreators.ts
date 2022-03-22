import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../public/models/IUser';
import { AppDispatch } from '../store';
import { userSlice } from './userSlice';

// export const fetchUsersActionCreator = () => {
//   return async function (dispatch: AppDispatch) {
//     try {
//       dispatch(userSlice.actions.usersFetching());

//       const response = await axios.get<IUser[]>(
//         'https://jsonplaceholder.typicode.com/users'
//       );

//       dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (err: any) {
//       console.log(err);
//       dispatch(userSlice.actions.usersFetchingError(err.message));
//     }
//   };
// };

// Альтернативный вариант !!!

export const fetchUsersActionCreator = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong.');
    }
  }
);
