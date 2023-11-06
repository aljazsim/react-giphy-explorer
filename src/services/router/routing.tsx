import { ReactNode } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { GiphSearchPage } from "../../components/giph-search-page/GiphSearchPage";
import { giphSearchPageModel } from "../../dependency-injection";

function createRoute(path: string, element: ReactNode): RouteObject {
    return { path: path, element: element };
}

export const giphIdParameter = ":giphId";

export const catchAllRoute = "/*";
export const defaultRoute = "/";
export const giphDetailsRoute = `/details/${giphIdParameter}`;
export const giphSearchRoute = "/search";

export const router = createBrowserRouter([
    createRoute(defaultRoute, <GiphSearchPage model={giphSearchPageModel} />),
    createRoute(giphSearchRoute, <GiphSearchPage model={giphSearchPageModel} />)
    // { path: giphDetailsRoute, name: giphDetailsRouteName, component: GiphDetails },
    // { path: catchAllRoute, redirect: giphSearchRoute }
]);
