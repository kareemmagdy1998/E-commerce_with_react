import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-image"></div>
      <div className="not-found-text">
        <h1>Oops! Page Not Found</h1>
        <p>We're sorry, the page you requested could not be found.</p>
        <Button variant="primary" as={Link} to="/products">Go Back Home</Button>
      </div>
    </div>
  );
}