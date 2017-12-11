import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./../scripts/components/pages/LandingPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path={"/"} exact={true} component={LandingPage} />
                {/* <Route path="/about" component={AboutMe}/>
                <Route path="/features" component={Features}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/> */}
                {/* <Route component={Main} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
