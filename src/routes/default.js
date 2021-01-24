import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/index';
import Userlist from '../pages/userlist';

const Default = (props) =>{
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/userlist" component={Userlist} />
                <Route render={() => <p>not found!.</p>} />
            </Switch>
        </div>
    );  
}

export default Default;