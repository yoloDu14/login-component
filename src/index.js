import React from "react";
import ReactDOM from "react-dom";
import Authentication from "./lib/Authentification";
import Provider from "react-redux/es/components/Provider";
import {authentication} from "./lib/reducer/authenticationReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {};

export const rootReducer = combineReducers({
    authentication
});

const middleware = [thunkMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
ReactDOM.render(
    <Provider store={store}><Authentication /></Provider>, document.getElementById("root"));


