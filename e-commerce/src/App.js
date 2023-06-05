import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AddForm } from "./components/AddForm";
import { AllPlanets } from "./components/AllPlanets";
import { add_product } from "./actions";
import { ProductReducer } from "./reducers/products";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Product } from "./components/Product";
import { CartPage } from "./components/CartPage";
import { MyNav } from "./components/MyNav";
import { Slider } from "./components/Slider";

function App() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  // console.log(counter)
  return (
    <div>
      {/* <AddForm />
        <button onClick={()=> dispatch(add_product({name:"qewqwe" , price:"prrr"}))}> Add </button>
        <h1>Products List</h1>
      <ul>
        {products.map(product => (
          <li>
            {product.name}: {product.price}
          </li>
        ))}
      </ul> */}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <AllPlanets/> */}
      {/* <Product></Product>
      <Footer></Footer> */}
      <MyNav></MyNav>
      <Slider></Slider>
      {/* <CartPage></CartPage> */}
    </div>
  );
}

export default App;
