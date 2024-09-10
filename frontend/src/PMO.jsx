import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]); // State to store products
    const [error, setError] = useState(null); // State to store any error
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        // Fetch products from the API
        axios.get('https://fakestoreapi.com/products/')
            .then(response => {
                setProducts(response.data); // Update the products state
                setLoading(false); // Set loading to false
            })
            .catch(error => {
                setError(error.message); // Set the error state
                setLoading(false); // Set loading to false
            });
    }, []); // Empty dependency array means this effect runs once on mount

    // Render the products or error message or a loading indicator
    if (loading) {
        return <p>Loading...</p>; // Loading state
    }

    if (error) {
        return <p>Error loading products: {error}</p>; // Error state
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
