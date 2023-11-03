import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { IRoutingManager } from "./IRoutingManager";

export class RoutingManager implements IRoutingManager {
    public getGiphDetailsParams(): { giphId: string } {
        return { giphId: "xxx" };
    }

    public goToGiphDetails(giph: BasicGiphInfo): void {}

    public goToGiphSearch(): void {}

    public isGiphDetailsRouteActive(): boolean {
        return false;
    }

    public isGiphSearchRouteActive(): boolean {
        return true;
    }
}

// import { IRoutingManager } from "./IRoutingManager";
// import { giphDetailsRouteName, giphSearchRouteName } from "./routing";
// import { Router, useRoute } from "vue-router";

// export class RoutingManager implements IRoutingManager
// {
//     constructor(private readonly router: Router)
//     {
//     }

//     public getGiphDetailsParams(): { giphId: string }
//     {
//         if (this.isGiphDetailsRouteActive())
//         {
//             return {
//                 giphId: this.router.currentRoute.value.params.giphId as string
//             };
//         }
//         else
//         {
//             return null;
//         }
//     }

//     public goToGiphDetails(giph: BasicGiphInfo): void
//     {
//         this.router.push({ name: giphDetailsRouteName, params: { giphId: giph.id } });
//     }

//     public goToGiphSearch(): void
//     {
//         this.router.push({ name: giphSearchRouteName });
//     }

//     public isGiphDetailsRouteActive(): boolean
//     {
//         return useRoute()?.name === giphDetailsRouteName;
//     }

//     public isGiphSearchRouteActive(): boolean
//     {
//         return useRoute()?.name === giphSearchRouteName;
//     }
// }
