import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TopbarContainer from '../containers/TopbarContainer';
import { mockProducts } from '../assets/mockProducts';
import { Carousel } from 'react-bootstrap';

export default function DetailsPage() {
  const { id } = useParams();
  const product = mockProducts.products.find(
    (prod) => prod.id === parseInt(id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <TopbarContainer />

      <div className="container mt-5">
        <div className="row">
          {/* Carousel pentru imagini produs */}
          <div className="col-md-6">
            <Carousel>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Product Image ${index + 1}`}
                  ></img>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Detalii produs */}
          <div className="col-md-6">
            <div className="card border-0">
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.description}</p>
                <h4 className="text-primary">${product.price}</h4>

                {/* Butoane */}
                <div className="mt-4">
                  <Link to="/" className="btn btn-secondary me-3">
                    Back to Home
                  </Link>
                  <button className="btn btn-primary">Add to favorites</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
