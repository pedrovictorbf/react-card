import React from "react";


import { Route , BrowserRouter } from "react-router-dom";

import Card from '../components/Card'


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Card } path="/" exact />
        </BrowserRouter>
    )
}

export default Routes;