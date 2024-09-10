import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

    useEffect(() => {
        document.title = "UnityServe-SignUp" ;
        // eslint-disable-next-line
    }, [])

    const [credentials, setCredentials] = useState({ name: "", college: "", email: "", password: "" ,cpassword:""})
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, college, email, password } = credentials
        const response = await fetch("http://localhost:8000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, college, email, password })
        })
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem("userInfo",JSON.stringify(json.user));
            localStorage.setItem('token', json.authtoken)
            navigate('/')
            props.showAlert("Account Created Successfully", "success")
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
                        <h1 className="display-5 loginbox_content_heading">SIGN UP</h1>
                        <p className="lead loginbox_content_text">Hey! Please use your College ID</p>
                    </div>
                    <div className="loginbox_form">
                        <form onSubmit={handleSubmit}>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">Username</p>
                                <input type="text" name="name" id="college" placeholder="YOUR NAME" className="inputbox" onChange={onChange} />
                            </div>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">College</p>
                                <input type="text" name="college" id="college" placeholder="COLLEGE NAME" className="inputbox" onChange={onChange} />
                            </div>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">Email ID</p>
                                <input type="email" name="email" id="email" placeholder="COLLEGE EMAIL ID" className="inputbox" onChange={onChange} />
                            </div>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">Password</p>
                                <input type="password" name="password" id="password" placeholder="PASSWORD" className="inputbox" onChange={onChange} minLength={5} required />
                            </div>
                            <div className="loginbox_form_username my-4">
                                <p className="loginbox_form_boxheading">Confirm Password</p>
                                <input type="password" name="cpassword" id="password" placeholder="PASSWORD" className="inputbox" onChange={onChange} minLength={5} required />
                            </div>
                            <button type="submit" className="btn btn-outline-info text-xs my-1" id="start_button_login">SIGN UP</button>
                        </form>
                    </div>
                    <div className="signup_prompt my-1">
                        <p>Already have an account? <a href="loginpage.html" className="signup_button">LOG IN</a></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup