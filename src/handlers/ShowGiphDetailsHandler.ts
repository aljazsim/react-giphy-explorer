import { BasicGiphInfo } from "../common/basicGiphInfo";
import { IRoutingManager } from "../services/router/IRoutingManager";

export class ShowGiphDetailsHandler {
    constructor(private readonly routingManager: IRoutingManager) {}

    public async handle(giph: BasicGiphInfo) {
        this.routingManager.goToGiphDetails(giph.id);
    }
}
