import React, { useContext, useState, useEffect } from 'react'
import ProductContext from '../context/products/ProductContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Sell = (props) => {

    useEffect(() => {
        document.title = "UnityServe-Sell";
        // eslint-disable-next-line
    }, [])

    const [image, SetImage] = useState("")

    const convertToBase64 = (e) => {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            SetImage(reader.result)
        };
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }

    let navigate = useNavigate()

    const context = useContext(ProductContext);
    const { addProduct } = context

    const [product, setProduct] = useState({
        Product_Name: "",
        Description: "",
        Options: "",
        Owner_Name: "",
        College: "",
        Phone: "",
        Email: "",
        Instagram: "",
        Address: "",
        Amount: ""
    })

    const handleClick = (e) => {
        e.preventDefault()
        const userConfirmation = window.confirm("Do you want to Continue? - Add Product in MarketPlace ");

        if (userConfirmation) {

            addProduct(product.Product_Name,
                product.Description, image,
                product.Options,
                product.Owner_Name,
                product.College,
                product.Phone,
                product.Email,
                product.Instagram,
                product.Address,
                product.Amount
            )

            setProduct({
                Product_Name: "",
                Description: "",
                Options: "",
                Owner_Name: "",
                College: "",
                Phone: "",
                Email: "",
                Instagram: "",
                Address: "",
                Amount: ""
            })

            props.showAlert("Added Successfully", "success")
            navigate('/marketplace')
        }
    }

    const onchange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <>

            <div className="bgCover1 bg-fixed"></div>

            <nav className="navbar navbar-expand-lg mb-3">
                <div className="navbar_everything container-fluid mx-5">

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav ms-auto mx-2 me-3">
                            <li className="nav-item px-2" id="sec_nav-item">
                                <Link className="nav-link" aria-current="page" to="/marketplace">BUY/RENT...</Link>
                            </li>
                            <li className="nav-item px-1" id="sec_nav-item">
                                <Link className="nav-link" to="/marketplace/sell" id="current">SELL</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="sell_page container">
                <div className="sell_heading mb-4">
                    <h1>Sell on UnityServe</h1>
                    <p className="lead">Generate a post to sell a product/service</p>
                </div>
                <div className="sell_form mb-3">
                    <form onSubmit={handleClick} encType='multipart/form-data'>
                        <div className="product_section mx-2">
                            <div className="col">
                                <div className="sell_product_name my-4">
                                    <p className="lead">Product Name</p>
                                    <input
                                        type="text"
                                        name="Product_Name"
                                        id="product_name"
                                        placeholder="PRODUCT NAME"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.Product_Name}
                                        required
                                    />
                                </div>
                                <div className="sell_product_description my-4">
                                    <p className="lead">Provide brief Product Description</p>
                                    <textarea
                                        type="text"
                                        name="Description"
                                        placeholder="PRODUCT DESCRIPTION"
                                        maxLength="200"
                                        className="inputbox"
                                        id="product_description"
                                        onChange={onchange}
                                        value={product.Description}
                                        required
                                    />
                                </div>
                                <div className="sell_product_image my-4">
                                    <p className="lead">Upload Image</p>
                                    <input
                                        type="file"
                                        accept='.png, .jpg, .jpeg'
                                        alt="product image"
                                        className="inputbox"
                                        id="image_upload"
                                        onChange={convertToBase64}
                                    />
                                    {image === "" || image === null ? "" : <img width={30} height={30} src={image} style={{ margin: "0px 10px" }} alt='' />}
                                </div>
                                <div className="sell_product_name my-4">
                                    <label htmlFor="cars">Choose:</label>

                                    <select id="cars" name='Options' className='ms-3 px-1 py-1' onChange={onchange} value={product.Options}>
                                        <option value="">Select</option>
                                        <option value="SELL">SELL</option>
                                        <option value="REQUEST">REQUEST</option>
                                        <option value="DONATE">DONATE</option>
                                        <option value="RENT">RENT</option>
                                    </select>
                                    <p className='mt-2'>If Request/Donate : Amount=Rs. 0.0</p>
                                </div>
                            </div>
                        </div>
                        <div className="seller_section mx-3">
                            <div className="col">
                                <div className="seller_name my-4">
                                    <p className="lead">Your Name</p>
                                    <input
                                        type="text"
                                        name="Owner_Name"
                                        id=""
                                        placeholder="SELLER NAME"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.Owner_Name}
                                        required
                                    />
                                </div>
                                <div className="seller_college my-4">
                                    <p className="lead">College Name</p>
                                    <input
                                        type="text"
                                        name="College"
                                        id=""
                                        placeholder="COLLEGE NAME"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.College}
                                        required
                                    />
                                </div>
                                <div className="seller_contact my-4">
                                    <p className="lead">Phone Number</p>
                                    <input
                                        type="tel"
                                        name="Phone"
                                        id=""
                                        placeholder="(+91-XXXXXXXXXX)"
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        minLength="10"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.Phone}
                                        required
                                    />
                                </div>
                                <div className="seller_email my-4">
                                    <p className="lead">Your Email ID</p>
                                    <input
                                        type="email"
                                        name="Email"
                                        id=""
                                        placeholder="YOUR EMAIL ID"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.Email}
                                        required
                                    />
                                </div>
                                <div className="seller_instagram my-4">
                                    <p className="lead">Your Instagram (optional)</p>
                                    <input
                                        type="text"
                                        name="Instagram"
                                        id=""
                                        placeholder="INSTAGRAM @"
                                        pattern="^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.Instagram}
                                    />
                                </div>
                                <div className="seller_address my-4">
                                    <p className="lead">Your Address</p>
                                    <input
                                        type="text"
                                        name="Address"
                                        id=""
                                        placeholder="YOUR ADDRESS"
                                        className="inputbox"
                                        onChange={onchange}
                                        value={product.Address}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="submit mt-3">
                            <input
                                type="text"
                                name="Amount"
                                id=""
                                placeholder="Amount (Rs.)"
                                className="inputbox mx-2 Amount me-2"
                                onChange={onchange}
                                value={product.Amount}
                                required
                            />
                            <button type="submit" className="btn btn-outline-info text-xs my-1" id="submit_button">SELL</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Sell