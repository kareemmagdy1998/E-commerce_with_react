import React, { useEffect, useState } from 'react'
import {  Table } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
// import {deleteProduct, getProducts} from '../Product API/product-api'
import  '../Styles/forms.css';
import { getAllProduct , getProduct , deleteProduct , add , update  } from '../API/api_controller'
import { ProductReducer , init_state } from '../reducers/products';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import { get_products } from '../actions';

export function AllPlanets() {
  // let navigator = useNavigate()
  let dispatch = useDispatch();
  let products = useSelector(state => state.products);
  console.log(getAllProduct())
  const fetchProducts =  async () => {
    try {
      const products = await getAllProduct();
      dispatch({ type: "get_products", payload: products });
    } catch (error) {
      dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error.message });
    }
  };
    
    useEffect(() => {
		dispatch(fetchProducts());
	}, []);
//   let del = async (id) => {
//       await deleteProduct(id);
//       window.location.reload();
    // }
  return (
    <div className='container text-center p-5'>
    <Table striped bordered hover variant="success" >
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map((product) =>{
            return(
                <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price} $</td>
      <td>{product.quantity}</td>
      <td>
              <div className='d-flex justify-content-center align-items-center '>
										<NavLink to={`/product/${product.id}/edit`}>
											<i className=' text-success  mx-1 bi bi-pencil-square'></i>
										</NavLink>
										<i  className=' text-danger mx-1 bi bi-trash3-fill'></i>
										<NavLink to={`/product/${product.id}`}>
											<i className=' text-dark mx-1 bi bi-eye-fill'></i>
										</NavLink>
                    </div>
				</td>
        </tr>
            )
        })
    }
    
  </tbody>
</Table>
    </div>
  )
}
