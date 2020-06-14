import React from 'react';
import './css/default.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/services' component={Services}/>
        </BrowserRouter>

    );
}

export default App;
