import { makeAutoObservable } from "mobx";
import { callbackNotSetUpVoid } from "../../helpers/event-helpers";

export class GiphStatusBarModel {
    public isLoading = false;
    public onGoBack = () => callbackNotSetUpVoid();

    constructor() {
        makeAutoObservable(this);
    }

    public goBack() {
        this.onGoBack();
    }
}
