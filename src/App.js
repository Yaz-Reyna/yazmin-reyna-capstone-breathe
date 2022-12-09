
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/home';
import QuotesAndJokes from './pages/quotes-and-jokes/quotes-and-jokes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* <Route path='/exercises' element={<Exercises/>}></Route> */}
        {/* <Route path='/music' element={<Music/>}></Route> */}
        <Route path='/words' element={<QuotesAndJokes/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
