import { callbackNotSetUp } from "../../helpers/event-helpers";

export class GiphTitleBarModel {
    public isLoading = false;
    public onGoBack = () => callbackNotSetUp();
    public title: string | null = null;
    public userAvatarUrl: string | null = null;

    public goBack(): void {
        this.onGoBack();
    }
}
