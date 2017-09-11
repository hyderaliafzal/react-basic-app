import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom'
import {Header} from "./components/Header";
import {Home} from "./components/Home";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={App}/>
            <Route path="/home2" component={Home}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
