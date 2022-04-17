import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Header from './Pages/Home/Shared/Header/Header';
import NotFound from './Pages/Home/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout/:checkoutId' element={<Checkout></Checkout>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
