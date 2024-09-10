import React, { useContext, useState } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
import ProductContext from '../context/products/ProductContext'
import Alert from './Alert'

const MyProductItem = (props) => {

    const { product } = props;

    const context = useContext(ProductContext)
    const { deleteProduct } = context

    const [alert, setalert] = useState(null);

    const showAlert = (message, type) => {
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setalert(null);
        }, 2000);
    }

    const handleDelete = () => {
        const userConfirmation = window.confirm("Do you want to Continue? - Delete Product from MarketPlace ");
        if (userConfirmation) {
            deleteProduct(product._id)
            showAlert("Deleted SuccessFully", "success")
        }
    }

    return (
        <>
            <Alert alert={alert} sideAlert="sideAlert" />
            <div className='col-md-3 my-3'>
                <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                    {/* <div className="d-flex flex-column h-100 px-5 pt-4 text-shadow-1 text-center" id="innercard2"> */}
                    <div className="d-flex flex-column h-100 px-5 pt-4 text-shadow-1 text-center" id="innercard">
                        <h4 className="display-7 lh-1 fw-bold py-2 fs-5">{product.Product_Name}</h4>
                        <img src={product.image} alt="" className="product_image" />
                        <p className="services_box_text lead height-cus ">{product.Description}</p>
                        <p className="services_box_text fs-4 mt-2">Rs. {product.Amount}</p>
                        <p className="services_box_text">Option: {product.Options}</p>
                        {/* <button type="button" className="btn btn-outline-info text-xs " id="buy_button" onClick={handleUpdate}>UPDATE AMOUNT</button> */}
                        <button type="button" className="btn btn-outline-info text-xs " id="buy_button" onClick={handleDelete}>DELETE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProductItem