import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { IRoutingManager } from "./IRoutingManager";
import { giphDetailsRoute, giphIdParameter, giphSearchRoute, router } from "./routing";

export class RoutingManager implements IRoutingManager {
    public getGiphDetailsParams(): { giphId: string } | null {
        debugger;
        if (this.isGiphDetailsRouteActive()) {
            return { giphId: "???" };
        } else {
            return null;
        }
    }

    public goToGiphDetails(giph: BasicGiphInfo): void {
        router.navigate(giphDetailsRoute.replace(giphIdParameter, giph.id));
    }

    public goToGiphSearch(): void {
        router.navigate(giphSearchRoute);
    }

    public isGiphDetailsRouteActive(): boolean {
        return router.state.matches.find(r => r.route.path === giphDetailsRoute) !== undefined;
    }

    public isGiphSearchRouteActive(): boolean {
        return router.state.matches.find(r => r.route.path === giphSearchRoute) !== undefined;
    }
}
