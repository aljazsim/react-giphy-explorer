import { BasicGiphInfo } from "../../common/basicGiphInfo";

export interface IRoutingManager {
    getGiphDetailsParams(): { giphId: string } | null;
    goToGiphDetails(giph: BasicGiphInfo): void;
    goToGiphSearch(): void;
    isGiphDetailsRouteActive(): boolean;
    isGiphSearchRouteActive(): boolean;
}
