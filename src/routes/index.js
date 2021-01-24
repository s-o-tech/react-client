import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Default from './default';
import Accounts from './accounts/index';

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/accounts" component={Accounts} />
                <Route path="/" component={Default} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;