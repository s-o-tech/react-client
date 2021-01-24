import React from 'react';

const Stats = (props) =>{
    if(!props.user){
        return null;
    }
    return (
        <div className="stats">
            <a className="nav-link" href={"/users/" + user.id + "/following"}>
                <strong id="following" className="stat">
                    {user.following_count}
                </strong>
                following
            </a>
            <a className="nav-link" href="/users/<%= user.id; %>/followers">
                <strong id="followers" className="stat">
                    {user.follower_count}
                </strong>
                followers
            </a>
        </div>
    );
}
export default Stats;