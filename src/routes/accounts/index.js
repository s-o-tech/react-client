import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../../pages/accounts/signin';
import Logout from '../../pages/accounts/logout';

const Accounts = (props) =>{
    return (
        <div>
            <Switch>
                <Route exact path="/accounts/signin" component={Signin} />
                <Route exact path="/accounts/logout" component={Logout} />
                <Route render={() => <p>not found! I'm in /accounts.</p>} />
            </Switch>
        </div>
    );  
}

export default Accounts;