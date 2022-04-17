import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
