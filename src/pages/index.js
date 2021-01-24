import React, {useState, useEffect} from 'react';

import Header from '../partials/header';
import Footer from '../partials/footer';
import MicropostForm from '../partials/micropost_form';
import Feed from '../partials/feed';
import UserInfo from '../partials/user_info';
import axios from '../partials/axios';

const IndexMessage = (props) => {
    if(!props.message){
        return null;
    }
    return (
        <div className="alert alert-primary">
            {props.message}
        </div>
    )
}

const IndexPage = (props) => {
    let authNode;
    if(!props.isAuth){
        authNode = (
            <div className="row">
                <aside className="col-md-4">
                    <section className="user_info">
                        <UserInfo {...props} />
                        {/* <%- include('../partials/user_info'); %> */}
                    </section>
                    <section className="stats">
                        {/* <%- include('../partials/stats'); %> */}
                    </section>
                    <section className="micropost_form">
                        <MicropostForm />
                        {/* <%- include('../partials/micropost_form'); %> */}
                    </section>
                </aside>
                <main className="col-md-8">
                    <h3>Micropost Feed</h3>
                    <Feed {...props} />
                    {/* <%- include('../partials/feed'); %> */}
                </main>
            </div>
        );
    } else {
        authNode = (
            <div className="center jumbotron">
                <h1>Welcome to the MicroPost App</h1>
                <a className="btn btn-lg btn-primary" href="/accounts/signup" role="button">Sign up now!</a>
            </div>
        )
    }
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <IndexMessage />
            {authNode}
        </div>
    )

}
const Index = (props) =>{
    const current_user = {id:1};
    const [resp,setResp] = useState({});

    useEffect(() => {
        if(!Object.keys(resp).length) {
            getResp();
        }
    },[]);
    const getResp = async() => {
        try{
            const res = await axios.get('/api');
            setResp({...res.data});
        } catch(err) {
            console.error(err);
        }
        console.log(resp)
    }
    return (
        <div>
            <Header
                isAuth={false}
                current_user={current_user}
            />
            <IndexPage {...resp}/>

            <Footer/>
        </div>
    );
}
export default Index;