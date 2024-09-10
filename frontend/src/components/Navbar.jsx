import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'



const Navbar = (props) => {

    let location = useLocation();
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        
        navigate('/login')

        props.showAlert("Logged out Successfully", "success")
    }

    const [showButtons, setShowButtons] = useState(true)

    useEffect(() => {
        if (location.pathname === '/marketplace'
            || location.pathname === '/marketplace/sell'
            || location.pathname === '/marketplace/rent'
            || location.pathname === '/marketplace/donate'
            || location.pathname === '/marketplace/request'
            || location.pathname === '/myproducts'
            || location.pathname === '/login'
            || location.pathname === 'signup'
        ) {
            setShowButtons(false);

        } else {

            setShowButtons(true);
            
        }
    }, [location.pathname]);

    const token = localStorage.getItem('token')

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>
            <nav className="navbar navbar-expand-lg py-2">
                <div className="navbar_everything container-fluid mx-5">
                    <img src="./img/logo_nobg.png" alt="" id="navbar_logo" className=" rounded-full pt-1" />
                    <h2 className="name_nav pt-1 mx-3">CollegeCart</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav ms-auto mx-2">
                            <li className="nav-item px-2">
                                <Link className="nav-link" aria-current="page" to="/" id={`${location.pathname === "/" ? "current" : ""}`}>HOME</Link>
                            </li>
                            {
                                showButtons &&
                                <>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#vision">VISION</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#team">THE TEAM</a>
                                    </li>
                                </>
                            }
                            {
                                token &&
                                <li className="nav-item px-2">
                                    <Link className="nav-link" aria-current="page" to="/myproducts" id={`${location.pathname === "/myproducts" ? "current" : ""}`}>MY PRODUCTS</Link>
                                </li>
                            }
                            <li className="nav-item px-2">
                                {
                                    !token ?
                                        <Link className="nav-link" to="/login" id={`${location.pathname === "/login" ? "current" : ""}`} style={{ Cursor: "not-allowed" }}>MARKETPLACE</Link>
                                        :
                                        <Link className="nav-link" to="/marketplace" id={`${(location.pathname === "/marketplace") ? "current" : ""}`} style={{ Cursor: "pointer" }}>MARKETPLACE</Link>
                                }
                            </li>
                            <div className="nav-item mx-2">
                                {
                                    !token ?
                                        <form className="d-flex" role="search">
                                            <Link className="btn btn-outline-info text-xs" id="start_button" to="/login" role="button">Login</Link>
                                        </form>
                                        :
                                        <button className="btn btn-outline-info text-xs" id="start_button" onClick={handleLogout}>Logout</button>
                                }
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar