import { IRoutingManager } from "../services/router/IRoutingManager";

export class ShowGiphSearchHandler {
    constructor(private readonly routingManager: IRoutingManager) {}

    public handle() {
        this.routingManager.goToGiphSearch();
    }
}
