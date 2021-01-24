import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import axios from '../../partials/axios';
import Header from "../../partials/header";
import Footer from "../../partials/footer";

const SigninForm = (props) => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        
        try{
            const res = await axios.post(
                '/api/accounts/signin',
                { ...formDataObj},
            );
            console.log(res.data)
            if(res.data.success){
                props.history.push("/");

            } else {
                props.history.push("/accounts/signin");
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <Form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" placeholder="Enter email" 
                    name="email"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password(<a href="/accounts/password_reset">password forgot?</a>)</Form.Label>
                <Form.Control 
                    type="password" placeholder="Password" autoComplete="off"
                    name="password"
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check 
                    type="checkbox" label="Remember Me" 
                    name="remember_me"
                />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Sign in
            </Button>
        </Form>
    );
}

const Signin = (props) => {
    return (
        <div>
            <Header/>
            <br/>
            <h1 className="text-center">Signin</h1>
            <br/>
            <SigninForm history={props.history}/>

            <Footer/>
        </div>
    );
}

export default withRouter(Signin);