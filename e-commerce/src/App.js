import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddForm } from './Components/AddForm';
import { AllPlanets } from './Components/AllPlanets';
import { add_product } from './actions';
import { ProductReducer } from './reducers/products';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import { Product } from './Components/Product';
import { Card } from './Components/Card';

function App() {
  return (
      <div>
      <Routes>
        <Route path="adminpanel" element={<AllPlanets/>}/>
        <Route path="product/:id/edit" element={<AddForm/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="card" element={<Card/>}/>

      </Routes>
      </div>

  )

}

export default App;
