import React, { useState } from 'react'

import ProductContext from './ProductContext'

const ProductState = (props) => {

    const host = "http://localhost:8000";

    const ProductsInitial = []

    const [products, setProducts] = useState(ProductsInitial)

    

    // Get all products
const getProducts = async () => {
        //Api call
        const response = await fetch(`${host}/api/product/fetchallproducts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        })
        
        const json = await response.json()
        setProducts(json)
    }

    //Get user products
    const getUserProducts = async () => {

        // Api call
        const response = await fetch(`${host}/api/product/fetchuserproducts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        })
        const json = await response.json()
        // console.log(json)
        setProducts(json)
    }

    //Add a product 
    const addProduct = async (Product_Name, Description, image, Options, Owner_Name, College, Phone, Email, Instagram, Address, Amount) => {
        //Api call
        const response = await fetch(`${host}/api/product/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify({ Product_Name, Description, base64: image, Options, Owner_Name, College, Phone, Email, Instagram, Address, Amount })
        })
        const product = await response.json()
        setProducts(products.concat(product))
    }

    //Delete a product
    const deleteProduct = async (id) => {
        //Api call
        const response = await fetch(`${host}/api/product/deleteproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json()
        console.log(json); 

        const NewProducts = products.filter((product) => { return product._id !== id })

        setProducts(NewProducts);
    }

    //Update Product
    const updateProduct = async (id, Options, Amount) => {
       
        //Api call
        const response = await fetch(`${host}/api/product/updateproduct/:${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ Options, Amount })
        })

        const json = await response.json()
        console.log(json)

        const NewProducts = JSON.parse(JSON.stringify(products));

        for (let index = 0; index < NewProducts.length; index++) {
           
            const element = NewProducts[index]
           
            if (element._id === id) {

                NewProducts[index].Options = Options;
                NewProducts[index].Amount = Amount;

                break;
            }
        }

        setProducts(NewProducts);
    }

    //Search a product
    const searchproduct = async (Product_Name) => {
        const response = await fetch(`${host}/api/product/search?product=${encodeURIComponent(Product_Name)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        })
        const product = await response.json()
        setProducts(product)
    }

    return (

        <ProductContext.Provider value={
            {
                products,
                getProducts,
                getUserProducts,
                addProduct,
                deleteProduct,
                updateProduct,
                searchproduct
            }
        }>
            {props.children}
            
        </ProductContext.Provider>
    )
}

export default ProductState