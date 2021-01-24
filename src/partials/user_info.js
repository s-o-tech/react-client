import React from 'react';
import GravatarUrl from './gravatar';

const UserInfo = (props) =>{
    if(!props.user){
        return null;
    }
    return (
        <div>
            <a className="nav-link" href={`/users/${props.user.id}`}>
                <img className="gravatar" src={GravatarUrl(props.user, 50)} />
            </a>
            <h1>{props.user.name}</h1>
            <span>
                <a className="nav-link" href={`/users/${props.user.id}`}>view my profile</a>
            </span>
            <span>{props.user.post_count} microposts</span>
        </div>
    );
}
export default UserInfo;