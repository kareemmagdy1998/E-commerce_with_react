import React from "react";
import { Card, Button } from "react-bootstrap";
export function CartPage() {
  return (
    <div>
      <div className="container d-flex justify-content-between">
        <Card className="mb-3" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8-200x300.jpg "
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title>Monstera</Card.Title>
            <Card.Title>Price:$100</Card.Title>
            <Button variant="primary">-</Button>
            <Button className="mx-5" variant="secondary">
              Quantity
            </Button>
            <Button variant="primary">+</Button>
            <Button className="mt-3" variant="danger">
              <i class="bi bi-trash3-fill"></i>
            </Button>
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-14-200x300.jpg"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title>Ficus</Card.Title>
            <Card.Title>Price:$200</Card.Title>
            <Button variant="primary">-</Button>
            <Button className="mx-5" variant="secondary">
              Quantity
            </Button>
            <Button variant="primary">+</Button>
            <Button className="mt-3" variant="danger">
              <i class="bi bi-trash3-fill"></i>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-7-200x300.jpg"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title>Pothos</Card.Title>
            <Card.Title>Price:$300</Card.Title>
            <Button variant="primary">-</Button>
            <Button className="mx-5" variant="secondary">
              Quantity
            </Button>
            <Button variant="primary">+</Button>
            <Button className="mt-3" variant="danger">
              <i class="bi bi-trash3-fill"></i>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Button variant="primary">Total Price:</Button>
      </div>
    </div>
  );
}
