import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buyitem = (props) => {
  const { product } = props;

// useNavigate
 const navigate = useNavigate();

  const handleProduct = () => {
    navigate(`/product/${product.Product_Name}`, {
      state: { product },
    });
  }


  return (
    <>

      <div className='col-md-3 my-3'>

        <div className="product_box card-cover overflow-hidden rounded-4 mx-3">
          <div className="d-flex flex-column h-100 px-5 pt-4 text-shadow-1 text-center" id="innercard">
            <h4 className="display-7 lh-1 fw-bold py-2 fs-5">{product.Product_Name}</h4>
            <img src={product.image} alt="" className="product_image" />
            <p className="services_box_text lead height-cus">{product.Description}</p>
            <p className="services_box_text mt-3">Seller: {product.Owner_Name}</p>
            <p className="services_box_text fs-4">Rs. {product.Amount}</p>
            {product.Options === "SELL" ? (
              <button type="button" className="btn btn-outline-info text-xs" id="buy_button" onClick={handleProduct}>
                Buy Now
              </button>
            ) : (
              
              <button type="button" className="btn btn-outline-info text-xs" id="buy_button" onClick={handleProduct}>

                {product.Options}
      
              </button>
      
      )}
      
          </div>
        </div>
      </div>


    </>
  );
}

export default Buyitem;
