import React, { useEffect, useState } from 'react'
import {  Table } from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Switch, Route, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import  '../Styles/forms.css';
import { getAllProduct , getProduct , deleteProduct , add , update  } from '../API/api_controller'
import {  useDispatch, useSelector } from 'react-redux';
import { get_products , delete_product } from '../actions';
import NotAuthorized from './NotAuthorized';



export function AllPlanets() {
  let navigator = useNavigate()
  let dispatch = useDispatch();
  let products = useSelector(state => state.products);
  let user = useSelector(state => state.user)
  let user_role = JSON.parse(localStorage.getItem('token'));
  console.log(user_role + "asdasd ")
  const fetchProducts =  async () => {
      const products = await getAllProduct(); 
      return products 
  };


  let del = async (id) => {
    await deleteProduct(id);
  }


  let delete_Product = async (id) => {
    await del(id);
    dispatch(delete_product(id));
  }
    
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchProducts();
        dispatch(get_products(data));
      };
      fetchData();
	}, [dispatch]);



  let goToAdd = () => {
    navigator('/product/0/edit')
  }
if(user_role.role){
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
										<i  onClick={()=>delete_Product(product.id)} className=' text-danger mx-1 bi bi-trash3-fill'></i>
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
    <btn className='btn btn-primary' onClick={goToAdd}>Add Product</btn>
    </div>
  )
}
else {
  return(<div><NotAuthorized/></div>)
}
}
