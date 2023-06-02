import { Button, Form } from 'react-bootstrap';
import React from 'react'
import  '../Styles/forms.css';
export  function AddForm() {
  return (
    <div className='d-flex justify-content-center align-content-center container w-100 '>
    <div className='admin-form '>
        <Form className='w-100 py-3'>
        <fieldset>
    <legend class="text-center"> <b>Add New Plant</b></legend>
      <Form.Group className="mb-3 flex  " controlId="name">
        <Form.Label>Plant Name</Form.Label>
        <Form.Control className= '' type="text" placeholder="Enter Plant Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="qunatity">
        <Form.Label>Qunatity</Form.Label>
        <Form.Control type="number" placeholder="Enter The Quantity" />
      </Form.Group>
      <label for="description">Description:</label>
      <textarea id="description" name="description" class="form-control mb-3" rows="3"></textarea>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter The Price" />
      </Form.Group>
      <div className='text-center'>
      <Button className='w-25 btn btn-primary mx-auto' variant="primary" type="submit">
        Add
      </Button>
      </div>
      </fieldset>
    </Form>
    </div>
    </div>
  )
}
