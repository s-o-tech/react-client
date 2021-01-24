import React, {useState, useEffect} from 'react';

import axios from '../partials/axios';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Feed from '../partials/feed';
import Stats from '../partials/stats';
import UserInfo from '../partials/user_info';

const Relation = (props) => {
    if(!props.relationship || !props.user){
        return null;
    }
    let relation;
    if(props.relationship === null){
        relation = (
            <form action="/relationship" method="post">
                <input type="hidden" name="followed_id" value={props.user.id} />
                <button class="btn btn-primary btn-sm btn-block" type="submit">Follow</button>
            </form>
        )
    } else {
        relation = (
            <form action="/relationship/delete" method="post">
                <input type="hidden" name="followed_id" value={props.user.id} />
                <input type="hidden" name="relationship_id" value={props.relationship.id} />
                <button class="btn btn-primary btn-sm btn-block" type="submit">UnFollow</button>
            </form>
        )
    }
    return(
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
                {relation}
                <Feed {...props} />
            </main>
        </div>
    )
}

const Profile = (props) =>{
    const current_user = {id:1};
    const [resp,setResp] = useState({});

    useEffect(() => {
        if(!Object.keys(resp).length) {
            getResp();
        }
    },[]);
    const getResp = async() => {
        try{
            const res = await axios.get('/api/profile');
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
            <Relation {...resp}/>

            <Footer/>
        </div>
    );
}
export default Profile;