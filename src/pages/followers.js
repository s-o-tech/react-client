import React, {useState, useEffect} from 'react';

import axios from '../partials/axios';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Stats from '../partials/stats';
import UserInfo from '../partials/user_info';

const FollowerList = (props) => {
    if(!props.followers){
        return null;
    }
    let followerlists = [];
    for(let follower of props.followers){
        followerlists.push(
            <li>
                <a className="nav-link" href={`/users/${follower.follower_id}`}>
                    {follower.name}
                </a>
            </li>
        )
    }
    return (
        <ul>
            <h2>Followers</h2>
            {followerlists}
        </ul>
    )
}

const Followers = (props) =>{
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
                        <FollowerList {...props}/>
                    </main>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
export default Followers;