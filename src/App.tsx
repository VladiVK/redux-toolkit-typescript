import React, { useEffect } from 'react';
import PostsContainer from './components/PostsContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsersActionCreator } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/userSlice';

// import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsersActionCreator());
  }, []);
  return (
    <div>
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}

      <PostsContainer />
    </div>
  );
}

export default App;
