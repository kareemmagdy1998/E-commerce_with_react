import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export function NotAuthorized() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body text-center">
              <h1 className="card-title mb-4">Access Denied</h1>
              <p className="card-text mb-4">You are not authorized to access this page.</p>
              <Link to="/products" className="btn btn-primary mx-2">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}