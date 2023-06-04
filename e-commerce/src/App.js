import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddForm } from './components/AddForm';
import { AllPlanets } from './components/AllPlanets';
import { add_product } from './actions';
import { ProductReducer } from './reducers/products';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import { Product } from './Components/Product';
import { Card } from './Components/Card';
import { Login } from './components/Login';
import {Signup} from './components/Signup';
import { Product } from "./components/Product";
import { CartPage } from "./components/CartPage";
import { MyNav } from "./components/MyNav";

function App() {
  return (
      <div>
      <Routes>
        <Route path="adminpanel" element={<AllPlanets/>}/>
        <Route path="product/:id/edit" element={<AddForm/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="card" element={<Card/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>

      </Routes>
      </div>

     
      

  
   
      // <MyNav></MyNav>

    //   <CartPage></CartPage>
    // </div>
  );
}

export default App;
