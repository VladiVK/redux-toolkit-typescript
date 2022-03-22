import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../public/models/IUser';
import { fetchUsersActionCreator } from './ActionCreators';

type UsersState = {
  users: IUser[];
  isLoading: boolean;
  error: string;
};
const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  // это поле аналогично switch...
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.users = action.payload;
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchUsersActionCreator.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsersActionCreator.fulfilled.type]: (
      state,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsersActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
