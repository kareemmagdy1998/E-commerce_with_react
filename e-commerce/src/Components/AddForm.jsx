import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import "../Styles/forms.css";
import { useDispatch } from "react-redux";
import { add_product } from "../actions";
import { add, getProduct , update } from "../API/api_controller";
import { useNavigate, useParams } from "react-router-dom";
import NotAuthorized from './NotAuthorized';

let user_role = JSON.parse(localStorage.getItem('token'));
const schema = yup.object().shape({
  name: yup.string().required("Plant name is required"),
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .positive("Quantity must be positive"),
  description: yup.string(),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be positive"),
});

export function AddForm() {
  const [header , setHeader] = useState("");
  const [btn , setBtn] = useState("");
  let {id} = useParams();
  let dispatch = useDispatch();
  let navigator = useNavigate();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ name, quantity, description, price }, { abortEarly: false });
      let plant = { name: name, quantity: quantity , description: description, price : price };
      if (id == 0)
      {
      await add(plant)
      dispatch(add_product(plant));
      console.log('add' + plant)

      navigator('/adminpanel')
      }
      else {
        await update(id, plant)
        navigator('/adminpanel')
      }      
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };
  let set_plant = async () => { 
    let product = await getProduct(id);
    setName(product.name);
    setQuantity(product.quantity);
    setDescription(product.description);
    setPrice(product.price);
    
}

  useEffect(() => {
    if (id != 0) {
      setHeader("Edit Plant");
      setBtn("Edit");
      set_plant();
    }
    else{
      setHeader("Add New Plant");
      setBtn("Add");
    }
  }, []);
  if (user_role !== null && user_role.role){
  return (
   
    <div className="d-flex justify-content-center align-content-center container w-100 ">
      <div className="admin-form ">
        <Form className="w-100 py-3" onSubmit={handleSubmit}>
          <fieldset>
            <legend class="text-center">
              {" "}
              <b>{header}</b>
            </legend>
            <Form.Group className="mb-3 flex  " controlId="name">
              <Form.Label>Plant Name</Form.Label>
              <Form.Control
                className=""
                type="text"
                placeholder="Enter Plant Name"
                value={name}
                onChange={handleNameChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="qunatity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter The Quantity"
                value={quantity}
                onChange={handleQuantityChange}
                isInvalid={!!errors.quantity}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity}
              </Form.Control.Feedback>
            </Form.Group>
            <label for="description">Description:</label>
            <textarea
              id="description"
              name="description"
              class="form-control mb-3"
              rows="3"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter The Price"
                value={price}
                onChange={handlePriceChange}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button
                className="w-25 btn btn-primary mx-auto"
                variant="primary"
                type="submit"
              >
                {btn}
              </Button>
            </div>
          </fieldset>
        </Form>
      </div>
    </div>
  );
    }
    else {
     
        return(<div><NotAuthorized/></div>)

     
    }
}