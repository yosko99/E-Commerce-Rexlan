import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-dark text-center text-white">
        <div className="container p-2 pb-0">
            <section className="mb-1">
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                    <i className="fab fa-google"></i>
                </Link>
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                    <i className="fab fa-linkedin"></i>
                </Link>
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                    <i className="fab fa-github"></i>
                </Link>
            </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'black' }}>
            © 2022 Copyright:
            <Link className="text-white ps-2" to="/" >Ecommerce point</Link>
        </div>
    </footer>
  );
};

export default Footer;
