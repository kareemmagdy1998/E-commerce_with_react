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

    let deleteProduct =  async (id) => {

        try {
             await axios.delete(`http://localhost:3005/products/${id}`);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

    let add =  async (product) => {

        try {
             await axios.post("http://localhost:3005/products",product);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

    let update=  async (product) => {

        try {
             await axios.put(`http://localhost:3005/products/${[product.id]}`,product);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

    let getProduct = async (id) => {
		let response = await axios.get(`http://localhost:3005/products/${id}`);
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
