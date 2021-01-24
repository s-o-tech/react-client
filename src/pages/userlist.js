import React, {useState, useEffect} from 'react';

import Header from '../partials/header';
import Footer from '../partials/footer';
import Pagination from '../partials/pagination';
import axios from '../partials/axios';

const DeleteModal = (props) => {
    return (
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteModalLabel">削除確認</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        本当に<a id="deleteUser">user</a>を削除しますか？

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <form action="/users" method="post">
                            <input type="hidden" name="target" id="deleteTarget" />
                            <button type="submit" class="btn btn-primary" id="deleteButton">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Users = (props) => {
    let userlist = [];
    if(props.users){
        for(let user of props.users){
            userlist.push(
                <li>
                    <a class="nav-link" href={`/users/${user.id}`}>{user.name}</a>

                    {
                        (props.isAdmin)?
                            (
                                <a class="delete-confirm" data-toggle="modal" data-target="#deleteModal" data-whatever={`${user.id}`}>delete</a>
                            )
                            :
                            (
                                null
                            )
                    }
                </li>
            )
        }
    }
    return (
        <div class="container">
            <h1>All Users</h1>
            <ul class="users">
                {userlist}
            </ul>
            <DeleteModal/>
            <Pagination {...props} />
        </div>
    )
}

const Userlist = (props) =>{
    const current_user = {id:1};
    const [resp,setResp] = useState({});

    useEffect(() => {
        if(!Object.keys(resp).length) {
            getResp();
        }
    },[]);
    const getResp = async() => {
        try{
            const res = await axios.get('/api/userlist');
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
            <Users {...resp}/>

            <Footer/>
        </div>
    );
}
export default Userlist;