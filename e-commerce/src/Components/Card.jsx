import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { add_quantity_to_item , load_card_data, reduce_quantity_from_item , remove_item} from '../actions';
export function Card() {
    let dispatch = useDispatch()
    let card_data = useSelector(state => state.card);
    let products = useSelector(state => state.products);
    const [total_price, setTotalPrice] = useState();
    let user = useSelector(state => state.user);
    let current_card_data = card_data.filter(item => item.username == user)


    // Load the card data from the localStorage when the component mounts
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('card_data'));
        // const filtered_data = data.filter(item => item.username == user)
        if (data) {
          dispatch(load_card_data(data));
        }
      }, [dispatch ]);
    // Save the card data to the localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('card_data', JSON.stringify(card_data));
    }, [card_data , products]);


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
    } , [current_card_data])

  return (
    <div>{current_card_data.map((prod)=>{
        return (
            <div>
            <p>{prod.product.name}</p>
            <p>{prod.product.user_quantity}</p>
            <button onClick={() =>addQuantity(prod.product.id) } > + </button>
            <button onClick={() =>reduceQuantity(prod.product.id) } > - </button>
            <button onClick={() =>removeItem(prod.product.id) } > REMOVE  </button>
            </div>
        )
    })}
    <p> total : {total_price}</p>
    </div>
  )
}