import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getAllProduct , getProduct  } from '../API/api_controller'
import {  useDispatch, useSelector } from 'react-redux';
import { get_products , add_to_card, add_quantity, reduce_quantity, load_card_data, add_quantity_to_item  } from '../actions';
import { useNavigate } from "react-router-dom";

export function Product() {
  let navigator = useNavigate()
  let dispatch = useDispatch();
  let products = useSelector(state => state.products);
  let card_data = useSelector(state => state.card);
  let stateuser = useSelector(state => state.user);
  let user = JSON.parse(localStorage.getItem('token'));

  const fetchProducts =  async () => {
      const products = await getAllProduct();
      return products
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      data.map((item)=>
      {
        item.user_quantity = 1;
        return item;
      })
      dispatch(get_products(data));
    };
    fetchData(); 
  }, [dispatch]);


 // Load the card data from the localStorage when the component mounts
 useEffect(() => {
  const data = JSON.parse(localStorage.getItem('card_data'));
  if (data) {
    dispatch(load_card_data(data));
  }
}, [dispatch]);
// Save the card data to the localStorage whenever it changes
useEffect(() => {
  localStorage.setItem('card_data', JSON.stringify(card_data));
}, [card_data]);

  let add = (product) => { 
    let existing_item = card_data.find((item)=> item.product.id === product.id && JSON.stringify(item.username) === JSON.stringify(user));
    if (existing_item) {

      dispatch(add_quantity_to_item(product.id , product.user_quantity))
    }
    else {
     
      dispatch(add_to_card(product , user));
    }
  }


  let getCard = () => { 
    navigator('/cart')
  }

  let addQuantity = (id) => {
    dispatch(add_quantity(id));
  }

  let reduceQuantity = (id) => {
    dispatch(reduce_quantity(id));
  }

  return (
    <div className="container d-flex justify-content-between  align-items-center vh-100 flex-wrap">
      {
        products.map((product) => {
          return (
            <div className="container d-flex justify-content-between  align-items-center vh-100 col-4">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8-400x600.jpg"
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Title>Price:{product.price}$</Card.Title>
                  <Card.Title >  {product.quantity > 0 ? "In Stock" : "Not Available"} </Card.Title>
                  <Card.Title>
                    <button className="btn btn-primary" onClick={() => addQuantity(product.id)}> + </button>
                    {product.user_quantity}
                    <button className=" btn  btn-danger" onClick={() => reduceQuantity(product.id)}> - </button>
                  </Card.Title>
                  {user && <Button variant="secondary" onClick={() => add(product)}>Add To Cart</Button>}
                </Card.Body>
              </Card>
            </div>
          );
        })
      }
      <Button variant="secondary" onClick={() => getCard()}>Go To Cart</Button>
    </div>
  );
}