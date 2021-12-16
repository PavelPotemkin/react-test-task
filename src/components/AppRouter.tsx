import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(route =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    key={route.path}
                    component={route.component}
                />
            )}
            <Redirect to={RouteNames.MAIN}/>
        </Switch>
    );
};

export default AppRouter;



