import React from 'react'
import axios from "axios";

export function Api() {

  let  product={
        "name": "updated",
        "price": "10000",
        "quantity":"200"
    };

    let getAllProduct = async () => {
		try {
			let response = await axios.get("http://localhost:3005/products");
            console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

<<<<<<< HEAD
    let deleteProduct =  async () => {

        try {
             await axios.delete(`http://localhost:3005/products/${2}`);
=======
    let deleteProduct =  async (id) => {

        try {
             await axios.delete(`http://localhost:3005/products/${id}`);
>>>>>>> cd4e0d2e58921fde36322f1d36bf185144e0362c
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
    let add =  async () => {
=======
    let add =  async (product) => {
>>>>>>> cd4e0d2e58921fde36322f1d36bf185144e0362c

        try {
             await axios.post("http://localhost:3005/products",product);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
    let update=  async () => {

        try {
             await axios.put(`http://localhost:3005/products/${5}`,product);
=======
    let update=  async (product) => {

        try {
             await axios.put(`http://localhost:3005/products/${[product.id]}`,product);
>>>>>>> cd4e0d2e58921fde36322f1d36bf185144e0362c
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
    let getProduct = async () => {
		let response = await axios.get(`http://localhost:3005/products/${1}`);
=======
    let getProduct = async (id) => {
		let response = await axios.get(`http://localhost:3005/products/${id}`);
>>>>>>> cd4e0d2e58921fde36322f1d36bf185144e0362c
		console.log(response.data);
	};



  return (
    <div>
        <button onClick={getAllProduct}>show</button>
        <button onClick={deleteProduct}> delete</button>
        <button onClick={add}> add</button>
        <button onClick={update}> update</button>
        <button onClick={getProduct}> get product</button>
    </div>
  )
}
