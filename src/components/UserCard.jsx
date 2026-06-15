import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/userSlice';

const UserCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <article className="card">
      <header>
        <h2>{user.firstName} {user.lastName}</h2>
      </header>
      <p>Email: {user.email}</p>
      
      <button 
        className="action-btn fav-btn"
        onClick={() => dispatch(toggleFavourite())}
      >
        {user.isFavourite ? '❤️ Видалити з улюбленого' : '🤍 Додати в улюблене'}
      </button>
    </article>
  );
};

export default UserCard;