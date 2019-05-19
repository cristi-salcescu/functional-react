import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Shop from './shop/App';
import Checkout from './checkout/CheckoutContainer';
import ThankYou from './checkout/ThankYou';

export default function Router(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/thankyou' component={ThankYou} />
        </Switch>
    </BrowserRouter>
    );
}