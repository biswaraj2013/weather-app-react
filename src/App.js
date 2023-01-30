import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import FirstScreen from './Components/FirstScreen';
import WeatherContainer from './Components/WeatherContainer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<FirstScreen />} />
        <Route path='weather-container' element={<WeatherContainer />} />
      </Routes>
    </>
  );
}

export default App;
