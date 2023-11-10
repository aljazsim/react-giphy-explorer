import { makeAutoObservable } from "mobx";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { GiphImageModel } from "../giph-image/GiphImageModel";

export class GiphListModel {
    public canLoadMore = false;
    public giphModels: GiphImageModel[] = [];
    public isLoading = false;
    public onLoadMoreGiphs = () => {};
    public onSelectGiphs = (giph: BasicGiphInfo) => {};

    constructor() {
        makeAutoObservable(this);
    }
}
