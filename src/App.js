
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/home';
import QuotesAndJokes from './pages/quotes-and-jokes/quotes-and-jokes';
import BreathingExercises from './pages/breathing-exercises/breathing-exercises';
import Music from './pages/music/music';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/exercises' element={<BreathingExercises/>}></Route>
        <Route path='/music' element={<Music/>}></Route>
        <Route path='/quotes' element={<QuotesAndJokes/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
