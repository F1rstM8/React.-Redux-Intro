import UserCard from "./components/UserCard";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";

function App() {
  return (
    <main className="app-main">
      <UserCard />
      <WeatherCard />
    </main>
  );
}

export default App;
