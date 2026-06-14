import UserCard from './components/UserCard';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <UserCard />
      <WeatherCard />
    </div>
  );
}

export default App;