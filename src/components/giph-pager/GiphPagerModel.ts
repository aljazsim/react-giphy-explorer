import { makeAutoObservable } from "mobx";

export class GiphPagerModel {
    public isLoading = false;
    public itemCount = 0;
    public totalItemCount = 0;

    constructor() {
        makeAutoObservable(this);
    }
}
