import React from "react";
import {Route, Switch} from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import ProcessPage from "../pages/ProcessPage";
import PreviewPage from "../pages/PreviewPage";

const Routes = () => {
    return(
        <main style={{textAlign: "center"}}>
            <Switch>
                <Route exact key="/" path="/" component={IndexPage} />;
                <Route exact key="/" path="/process" component={ProcessPage} />;
                <Route exact key="/" path="/preview" component={PreviewPage} />;
            </Switch>
        </main>
    )
};

export default Routes;