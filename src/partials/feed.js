import React from 'react';
import Pagination from './pagination';
import GravatarUrl from './gravatar';

const Micropost = (props) => {
    if(!props.microposts || !props.current_user){
        return null;
    }
    let posts = [];
    for(let micropost of props.microposts){
        let deleteBtn = null;
        if(props.current_user.id === micropost.user.id){
            deleteBtn = (
                <form action="/microposts/delete" method="post">
                    <input type="hidden" name="post_id" value={micropost.id} />
                    <button class="btn btn-sm btn-primary" type="submit">delete</button>
                </form>
            );
        }

        posts.push(
            <li id={`micropost-${micropost.id}`}>
                <a class="nav-link" href={`/users/${micropost.user.id}`}>
                    <img class="gravatar" src={`${GravatarUrl(micropost.user, 50)}`}/>
                </a>
                <span class="user">
                    <a class="nav-link" href={`/users/${micropost.user.id}`}>
                        {micropost.user.name}
                    </a>
                </span>
                <span class="content">
                    {micropost.content}
                </span>
                <br />
                <span class="timestamp">
                    Posted {micropost.created_at} ago.
                </span>
                {deleteBtn}
            </li>
        );
    }
    return (
        <ol className="microposts">
            {posts}
        </ol>
    );
}



const Feed = (props) => {
    // const current_user = {
    //     id:1
    // };
    // const pagination = {
    //     currentPage : 1,
    //     lastPage : 8
    // };
    // const microposts = [
    //     {
    //         id:1,
    //         content:"abcdefghijklmn",
    //         created_at:100,
    //         user:{
    //             name:"test1",
    //             id:1,
    //             email:"test11@aaaa.com"
    //         }
    //     },
    //     {
    //         id:2,
    //         content:"opqrstu",
    //         created_at:200,
    //         user:{
    //             name:"test2",
    //             id:2,
    //             email:"test22@bbbb.com"
    //         }
    //     },
    //     {
    //         id:3,
    //         content:"vwxyz",
    //         created_at:300,
    //         user:{
    //             name:"test3",
    //             id:3,
    //             email:"test33@ccc.com"
    //         }
    //     }
    // ]

    return (
        <div>
            <Micropost
                {...props}
                // microposts={microposts}
                // current_user={current_user}
            />
            <Pagination 
                {...props}
                // pagination={pagination}
            />
        </div>
    
    );
}
export default Feed;