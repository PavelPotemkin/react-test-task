import Main from "../pages/Main";
import Detail from "../pages/Detail";
import React from "react";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    MAIN = '/',
    DETAIL = '/detail'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, exact: true, component: Main},
    {path: RouteNames.DETAIL, exact: true, component: Detail}
]

