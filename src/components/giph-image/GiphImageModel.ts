import { makeAutoObservable } from "mobx";
import { BasicGiphInfo } from "../../common/basicGiphInfo";

export class GiphImageModel {
    public isLoading = false;
    public isLoadingComplete = false;

    constructor(public readonly giph: BasicGiphInfo) {
        makeAutoObservable(this);
    }
}
