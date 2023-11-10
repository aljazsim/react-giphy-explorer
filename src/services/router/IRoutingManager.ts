export interface IRoutingManager {
    getGiphDetailsParams(): { giphId: string } | null;
    goToGiphDetails(giphId: string): void;
    goToGiphSearch(): void;
    isGiphDetailsRouteActive(): boolean;
    isGiphSearchRouteActive(): boolean;
}
