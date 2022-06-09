import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Title_Section from './components/Title_Section';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Title_Section />
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);