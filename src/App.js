import logo from './logo.svg';
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Rest from './components/Rest';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route  path='/signup' element={<Signup/>}></Route>
        <Route  path='*' element={<Rest/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
