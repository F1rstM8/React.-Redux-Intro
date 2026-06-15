import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/userSlice';

const UserCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px', marginBottom: '1rem' }}>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      
      <button 
        onClick={() => dispatch(toggleFavourite())}
        style={{ cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        {user.isFavourite ? '❤️ Видалити з улюбленого' : '🤍 Додати в улюблене'}
      </button>
    </div>
  );
};

export default UserCard;