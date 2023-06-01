import React from "react";
import { Card, Button } from "react-bootstrap";
export function Product() {
  return (
    <div>
      <div className="container d-flex justify-content-between  align-items-center vh-100">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8-400x600.jpg"
          />
          <Card.Body className="text-center">
            <Card.Title>Monstera</Card.Title>
            <Card.Title>Price:$100</Card.Title>
            <Button variant="secondary">Add To Cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-14-400x600.jpg"
          />
          <Card.Body className="text-center">
            <Card.Title>Ficus</Card.Title>
            <Card.Title>Price:$200</Card.Title>
            <Button variant="secondary">Add To Cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-7-400x600.jpg"
          />
          <Card.Body className="text-center">
            <Card.Title>Pothos</Card.Title>
            <Card.Title>Price:$300</Card.Title>
            <Button variant="secondary">Add To Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
