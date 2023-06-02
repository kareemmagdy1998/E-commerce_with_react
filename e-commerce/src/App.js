import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AddForm } from './Components/AddForm';
import { AllPlanets } from './Components/AllPlanets';
import { add_product } from './actions';
import { ProductReducer } from './reducers/products';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';

function App() {
  let dispatch = useDispatch();
  let products = useSelector(state => state.products);
  // console.log(counter)
  return (
      <div>
        {/* <AddForm /> */}
        <button onClick={()=> dispatch(add_product({name:"qewqwe" , price:"prrr"}))}> Add </button>
        <h1>Products List</h1>
      <ul>
        {products.map(product => (
          <li>
            {product.name}: {product.price}
          </li>
        ))}
      </ul>
      </div>


  );
}

export default App;
