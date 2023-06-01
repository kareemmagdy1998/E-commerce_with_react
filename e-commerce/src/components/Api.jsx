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

    let deleteProduct =  async () => {

        try {
             await axios.delete(`http://localhost:3005/products/${2}`);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

    let add =  async () => {

        try {
             await axios.post("http://localhost:3005/products",product);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

    let update=  async () => {

        try {
             await axios.put(`http://localhost:3005/products/${5}`,product);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    }

    let getProduct = async () => {
		let response = await axios.get(`http://localhost:3005/products/${1}`);
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
