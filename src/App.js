
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* <Route path='/exercises' element={<Exercises/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
