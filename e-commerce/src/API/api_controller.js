import axios from "axios";


export let getAllProduct = async () => {
    try {
        let response = await axios.get("http://localhost:3005/products");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export let deleteProduct =  async (id) => {

    try {
         await axios.delete(`http://localhost:3005/products/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export let add =  async (product) => {

    try {
         await axios.post("http://localhost:3005/products",product);
    } catch (error) {
        console.log(error);
    }
}

export let update=  async (product) => {

    try {
         await axios.put(`http://localhost:3005/products/${[product.id]}`,product);
    } catch (error) {
        console.log(error);
    }
}

export let getProduct = async (id) => {
    let response = await axios.get(`http://localhost:3005/products/${id}`);
    return response.data;
};

