import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index';

const App = (props) =>{
    return (
        <Routes/>
    );
}


ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);