import React from "react";
import {Route, Switch} from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import ListPage from "../pages/ListPage";

const Routes = () => {
    return(
        <main style={{textAlign: "center"}}>
            <Switch>
                <Route exact key="/" path="/" component={IndexPage} />;
                <Route exact key="/list" path="/list" component={ListPage} />;
            </Switch>
        </main>
    )
};

export default Routes;