import React, { useEffect, useContext, useState } from 'react';
import ProductContext from '../context/products/ProductContext';
import MyProductItem from './MyProductItem';
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom';

const MyProducts = () => {
    const context = useContext(ProductContext);
    const { products, getUserProducts } = context;

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await getUserProducts();
            setLoading(false);
            document.title = "UnityServe-MyProducts";
        };
        fetchData();
        console.log(products)
        //eslint-disable-next-line
    }, []);

    const navigate = useNavigate()

    const handleAddProduct = () => {
        navigate('/marketplace/sell')
    }

    return (
        <div className='d-flex container flex-wrap'>
            {products.length === 0 ?
                <>
                    <div className='No-available-my-products'>
                        <h1 className='text-white text-center mb-3 fonts-fam me-1 ms-3'>You've Not Added any Products in MarketPlace Yet...</h1>
                        <p className='text-white text-center mb-3 fonts-fam me-1 ms-3'>Click To Add Your First Product</p>
                        <button className="btn btn-outline-info text-xs my-1" id="submit_button" onClick={handleAddProduct}>Add Product</button>
                        {loading && <Spinner />}
                    </div>
                </>
                : products.map(product => (
                    <MyProductItem key={product._id} product={product} />
                ))
            }
        </div>
    );
};

export default MyProducts;
