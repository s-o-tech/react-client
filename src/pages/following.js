import React, {useState, useEffect} from 'react';

import axios from '../partials/axios';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Stats from '../partials/stats';
import UserInfo from '../partials/user_info';

const FollowList = (props) => {
    if(!props.following){
        return null;
    }
    let followlists = [];
    for(let follow of props.following){
        followlists.push(
            <li>
                <a className="nav-link" href={`/users/${follow.followed_id}`}>
                    {follow.name}
                </a>
            </li>
        )
    }
    return (
        <ul>
            <h2>Following</h2>
            {followlists}
        </ul>
    )
}

const Following = (props) =>{
    const current_user = {id:1};
    const [resp,setResp] = useState({});

    useEffect(() => {
        if(!Object.keys(resp).length) {
            getResp();
        }
    },[]);
    const getResp = async() => {
        try{
            const res = await axios.get('/api/');
            setResp({...res.data});
        } catch(err) {
            console.error(err);
        }
    }
    return (
        <div>
            <Header
                isAuth={false}
                current_user={current_user}
            />
            <div className="container">
                <div class="row">
                    <aside class="col-md-4">
                        <section class="user_info">
                            <UserInfo {...props}/>
                        </section>
                        <section class="stats">
                            <Stats {...props} />
                        </section>
                    </aside>
                    <main class="col-md-8">
                        <FollowList {...props}/>
                    </main>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
export default Following;