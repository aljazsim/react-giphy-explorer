import { matchPath } from "react-router-dom";
import { IRoutingManager } from "./IRoutingManager";
import { giphDetailsRoute, giphIdParameter, giphSearchRoute, router } from "./routing";

export class RoutingManager implements IRoutingManager {
    public getGiphDetailsParams(): { giphId: string } | null {
        if (this.isGiphDetailsRouteActive()) {
            return { giphId: matchPath({ path: giphDetailsRoute }, window.location.pathname)?.params.giphId! };
        } else {
            return null;
        }
    }

    public goToGiphDetails(giphId: string): void {
        router.navigate(giphDetailsRoute.replace(giphIdParameter, giphId));
    }

    public goToGiphSearch(): void {
        router.navigate(giphSearchRoute);
    }

    public isGiphDetailsRouteActive(): boolean {
        return router.state.matches.find((r) => r.route.path === giphDetailsRoute) !== undefined;
    }

    public isGiphSearchRouteActive(): boolean {
        return router.state.matches.find((r) => r.route.path === giphSearchRoute) !== undefined;
    }
}
