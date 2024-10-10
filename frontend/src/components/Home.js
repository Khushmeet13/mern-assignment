import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../redux/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);  
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); 

  console.log(currentUser);  
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {currentUser ? currentUser.name : 'Guest'}!</p>
      <ul>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
             
            </li>
          ))
        ) : (
          <li>No users found</li> 
        )}
      </ul>
    </div>
  );
};

export default Home;
