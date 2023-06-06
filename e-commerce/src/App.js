import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { AddForm } from './components/AddForm';
import { AllPlanets } from './components/AllPlanets';
import { Product } from './components/Product';
import {  Cart } from './components/Cart';
import { Login } from './components/Login';
import {Signup} from './components/Signup';
import { CartPage } from "./components/CartPage";
import { MyNav } from "./components/MyNav";
import { useAuth} from './custom hooks/hooks';
import { log_out } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import NotAuthorized from './components/NotAuthorized';
import {Footer} from './components/Footer';
import { Home} from './pages/Home';
import {Slider} from './components/Slider';
import NotFound from './components/NotFound';

function App() {
  const requireAuth = useAuth();
  // const requireAdmin = adminAuth();
  let dispatch = useDispatch();
  let navigator = useNavigate();
  let logout = ()=>
  {
    dispatch(log_out());
    localStorage.removeItem('token'); 
    navigator('/login')
  }
  
    return (
      <div>
        < MyNav />
      <Routes>
        <Route path="adminpanel" element={<AllPlanets/>}/>
        <Route path="product/:id/edit" element={<AddForm/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="card" element={<Cart/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/nav' element={<MyNav />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/slider' element={<Slider />}/>
        <Route path='*' element={<NotFound/>}/>



      </Routes>
      <Footer />
      </div>

  );
}

export default App;
