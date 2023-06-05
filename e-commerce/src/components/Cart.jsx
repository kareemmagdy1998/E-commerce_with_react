import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { add_quantity_to_item , load_card_data, reduce_quantity_from_item , remove_item} from '../actions';
export function Cart() {
    let dispatch = useDispatch()
    let card_data = useSelector(state => state.card);
    let products = useSelector(state => state.products);
    const [total_price, setTotalPrice] = useState();
    let user = useSelector(state => state.user);
    let current_card_data = card_data.filter(item => item.username.email == user.email)


    useEffect(() => {
      console.log("HELLO CURRENT USER NAME  " + user.name)
        const data = JSON.parse(localStorage.getItem('card_data'));
        if (data) {
          dispatch(load_card_data(data));
        }
      }, [dispatch ]);
    useEffect(() => {
        localStorage.setItem('card_data', JSON.stringify(card_data));
    }, [current_card_data , products]);


    let addQuantity = (id) =>
    {
        dispatch(add_quantity_to_item(id)); 
        setTotalPrice(calculateTotalPrice);
    }
    let reduceQuantity = (id) =>
    {
        dispatch(reduce_quantity_from_item(id));
        setTotalPrice(calculateTotalPrice);
    }
    let removeItem = (id) => {
        dispatch(remove_item(id));
        setTotalPrice(calculateTotalPrice);
    }
    let calculateTotalPrice = ()=> {
    let totalPrice =0 ;
    current_card_data.forEach( prod => 
            {
            totalPrice += prod.product.price * prod.product.user_quantity;
            }
            )
     return totalPrice;        
    }
    console.log(current_card_data)

    useEffect(() =>
    {   
        setTotalPrice(calculateTotalPrice);
    } , [card_data])

  return (
  
    <div className="container d-flex justify-content-between  align-items-center vh-100 flex-wrap">
    { 
    current_card_data.map((prod)=>{
        return (    
          <div className="container d-flex justify-content-between  align-items-center vh-100 col-4">

        <Card className="mb-3" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8-200x300.jpg "
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title>{prod.product.name}</Card.Title>
            <Card.Title>Price:{prod.product.price}$</Card.Title>
            <Button  onClick={() =>reduceQuantity(prod.product.id)} variant="primary">-</Button>
            <Button className="mx-5" variant="secondary">
            Quantity : {prod.product.user_quantity}
            </Button>
            <Button onClick={() =>addQuantity(prod.product.id) }variant="primary">+</Button>
            <Button   onClick={() =>removeItem(prod.product.id)} className="mt-3" variant="danger">
              <i  class="bi bi-trash3-fill"></i>
            </Button>
          </Card.Body>
        </Card>
       
        </div>

        )
    })}
     <br />
      <br />
    <div className="d-flex justify-content-center">
        <Button variant="primary">Total Price: {total_price} </Button>
      </div>
    </div>
  )
}