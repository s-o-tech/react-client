import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import axios from '../../partials/axios';

const LogoutSubmit = async() => {
    let res;
    try{
        res = await axios.get(
            '/api/accounts/logout',
        );
        console.log(res.data);
    } catch(err) {
        console.error(err);
    }
    return res;
}


const Logout = (props) => {
    const res = LogoutSubmit();
    if(res.success){
        console.log("logout success");
        props.history.push("/");

    } else {
        console.log("logout failed")
        props.history.push("/");
    }
    return null;
}

export default withRouter(Logout);