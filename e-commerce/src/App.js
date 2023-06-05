import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddForm } from './components/AddForm';
import { AllPlanets } from './components/AllPlanets';
import { add_product } from './actions';
import { ProductReducer } from './reducers/products';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import { Product } from './components/Product';
import { Card } from './components/Card';
import { Login } from './components/Login';
import {Signup} from './components/Signup';
import { CartPage } from "./components/CartPage";
import { MyNav } from "./components/MyNav";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import {Home} from "./pages/Home"

function App() {
  return (
      <div>
        < MyNav />
      <Routes>
        <Route path="adminpanel" element={<AllPlanets/>}/>
        <Route path="product/:id/edit" element={<AddForm/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="card" element={<Card/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/nav' element={<MyNav />}/>
        <Route path='/' element={<Home />}/>



      </Routes>
      <Footer />
      </div>

  );
}

export default App;
