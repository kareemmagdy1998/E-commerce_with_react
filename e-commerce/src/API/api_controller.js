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
};

export let add =  async (product) => {

    try {
         await axios.post("http://localhost:3005/products",product);
    } catch (error) {
        console.log(error);
    }
};



export let update=  async (id , product) => {

    try {
         await axios.put(`http://localhost:3005/products/${[id]}`,product);
    } catch (error) {
        console.log(error);
    }
};



export let getProduct = async (id) => {
    let response = await axios.get(`http://localhost:3005/products/${id}`);
    return response.data;
};




export let register =  async (user) => {

    try {
         await axios.post("http://localhost:3005/users",user);
    }
    catch (error) {
         console.log(error);
    }
};



export let getAllUsers = async () => {
    try {
        let response = await axios.get("http://localhost:3005/users");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};




 export function userExists(users, attribute, formValues) {

    return users.some(item => item.hasOwnProperty(attribute) && item[attribute] === formValues[attribute]);
    
  };


  export function userLogin(users, attr1,attr2, formValues) {

    return users.some(item => item.hasOwnProperty(attr1)&&item.hasOwnProperty(attr2) && item[attr1] === formValues[attr1]&&item[attr2] === formValues[attr2]);
    
  };


  export function loggedUser(users, attr1,attr2, formValues) {

    return users.find(item => item.hasOwnProperty(attr1)&&item.hasOwnProperty(attr2) && item[attr1] === formValues[attr1]&&item[attr2] === formValues[attr2]);
    
  };





