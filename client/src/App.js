import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {useSelector, useDispatch} from 'react-redux';
import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {ToastContainer} from "react-toastify";

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <ToastContainer/>
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route exact path="/checkout" component={CheckoutPage}/>
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? (
                            <Redirect to="/"/>
                        ) : (
                            <SignInAndSignUpPage/>
                        )
                    }
                />
            </Switch>
        </div>
    );
};

export default App;
