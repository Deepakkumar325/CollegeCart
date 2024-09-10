import React from 'react'

const Product = (props) => {

    const { product } = props;

    const openGmailCompose = () => {
        const recipient = `${product.Email}`;
        const mailtoLink = `mailto:${recipient}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>
            <div className="container">
                {/* <div className="container productpage_heading my-4">
                    <h1 className="display-4">PRODUCT PAGE</h1>
                </div> */}
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4 container-fluid">
                    <div className="col ms-3">
                        <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                            <div className="d-flex flex-column h-100 p-4 text-shadow-1 text-center justify-content-center align-items-center" id="innercard1">
                                <h4 className="display-7 lh-1 fw-bold py-2 mb-3 fs-1">{product.Product_Name}</h4>
                                <img src={product.image} alt="" className="product_image-cus" />
                                <p className="services_box_text lead mt-3 fs-5 ">{product.Description}</p>
                                {
                                    (product.Options === "SELL" || product.Options === "RENT") ? (
                                        <button className="amount-btn mt-4">Rs. {product.Amount}</button>
                                    ) : (
                                        (product.Options === "REQUEST" || product.Options === "DONATE") ? '' : ''
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="seller_box card-cover overflow-hidden rounded-4 mx-3 wh-owner ms-5 ">
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard1">
                                <h4 className="display-7 lh-1  py-2 fs-2">Seller Name : {product.Owner_Name}</h4>
                                <div className='social_box'>
                                    <p className="services_box_text lead fs-5 ">College : {product.College}</p>
                                    <a className="social_box_link lead fs-5" href={`https://api.whatsapp.com/send?phone=91${product.Phone}`} target='__blank'>Contact : {product.Phone}</a>
                                    <button className="social_button_link fs-5" onClick={openGmailCompose}>Email : {product.Email}</button>
                                    {product.Instagram &&
                                        <a className="social_box_link lead fs-5" href={`https://www.instagram.com/${product.Instagram}/`} target='__blank'>Instagram : ( {product.Instagram} )</a>
                                    }
                                </div>
                            </div>
                            <p className="services_box_text lead fs-5 text-white mt-3 text-center">To get in Touch with Seller - Contact Socials</p>
                            <div className='mt-4 buy-prod-page'>
                                {product.Options === "SELL" && <button type="button" className="btn btn-outline-info text-xs buy-prod-page" id="buy_button" disabled>BUY NOW</button>}
                                {product.Options === "RENT" && <button type="button" className="btn btn-outline-info text-xs buy-prod-page" id="buy_button" disabled>GET NOW</button>}
                                {product.Options === "DONATE" && <button type="button" className="btn btn-outline-info text-xs buy-prod-page" id="buy_button" disabled>GET NOW</button>}
                                {product.Options === "REQUEST" && <button type="button" className="btn btn-outline-info text-xs buy-prod-page" id="buy_button" disabled>FULFILL NOW</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product