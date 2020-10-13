import React from 'react';
import {Route, BroswerRouter} from 'react-router-dom';

import Home from './pages/Home';
import Form from './pages/Cadastro';

function Routes(){
    return (
        <BrowserRouter>
            <Route component={Home} path="/"/>
            <Route component={Form} path="/Cadastro" />
        </BrowserRouter>
    )
}
 
export default Routes;