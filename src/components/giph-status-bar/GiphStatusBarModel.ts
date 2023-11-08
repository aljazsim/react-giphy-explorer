import { callbackNotSetUpVoid } from "../../helpers/event-helpers";

export class GiphStatusBarModel{
    public isLoading = false;
    public onGoBack = () => callbackNotSetUpVoid();

    public goBack()
    {
        this.onGoBack();
    }
}
