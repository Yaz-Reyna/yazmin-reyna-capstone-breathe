
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/home';
import WordsEncouragement from './pages/words-encouragement/words-encouragement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* <Route path='/exercises' element={<Exercises/>}></Route> */}
        {/* <Route path='/music' element={<Music/>}></Route> */}
        <Route path='/words' element={<WordsEncouragement/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
