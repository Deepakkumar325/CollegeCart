import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

const Login = (props) => {

    useEffect(() => {
        document.title = "CollegeCart";
       
    }, [])

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        })
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            localStorage.setItem("userInfo", JSON.stringify(json.user));
            // console.log(JSON.stringify(json.user))
            localStorage.setItem('token', json.authtoken)
            navigate('/')
            props.showAlert("Logged in Successfully", "success")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>

            <div className="loginpage pb-5">
                <div className="container loginbox py-4">
                    <div className="loginbox_content">
                        <h1 className="display-5 loginbox_content_heading">LOGIN</h1>
                        <p className="lead loginbox_content_text">Login with your College ID</p>
                    </div>
                    <div className="loginbox_form">
                        <form onSubmit={handleSubmit}>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">Email ID</p>
                                <input type="email" name="email" id="email" placeholder="COLLEGE EMAIL ID" className="inputbox" onChange={onChange} value={credentials.email} />
                            </div>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">Password</p>
                                <input type="password" name="password" id="password" placeholder="PASSWORD" className="inputbox" onChange={onChange} value={credentials.password} />
                            </div>
                            <button type="submit" className="btn btn-outline-info text-xs my-1" id="start_button_login">LOGIN</button>
                        </form>
                    </div>
                    <div className="signup_prompt my-1">
                        <p>if you do not have account ?<Link to="/signup" className="signup_button">SIGN UP</Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login