import { makeAutoObservable } from "mobx";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { callbackNotSetUpAsync, callbackNotSetUpAsyncVoid, callbackNotSetUpVoid } from "../../helpers/event-helpers";
import { GiphImageModel } from "../giph-image/GiphImageModel";
import { GiphInfoModel } from "../giph-info/GiphInfoModel";
import { GiphStatusBarModel } from "../giph-status-bar/GiphStatusBarModel";
import { GiphTitleBarModel } from "../giph-title-bar/GiphTitleBarModel";

export class GiphDetailsPageModel {
    public infoModel: GiphInfoModel;
    public isLoading = false;
    public onCopyGiph = (giph: DetailedGiphInfo) => callbackNotSetUpVoid();
    public onGetGiphDetails = () => callbackNotSetUpAsync<DetailedGiphInfo | null>();
    public onSaveGiph = (giph: DetailedGiphInfo) => callbackNotSetUpAsyncVoid();
    public onShowGiphSearch = () => callbackNotSetUpVoid();
    public statusBarModel: GiphStatusBarModel;
    public titleBarModel: GiphTitleBarModel;

    constructor() {
        makeAutoObservable(this);

        this.titleBarModel = new GiphTitleBarModel();
        this.titleBarModel.goBack = () => this.onShowGiphSearch();

        this.infoModel = new GiphInfoModel();
        this.infoModel.onCopyGiph = (giph) => this.onCopyGiph(giph);
        this.infoModel.onSaveGiph = (giph) => this.onSaveGiph(giph);

        this.statusBarModel = new GiphStatusBarModel();
        this.statusBarModel.goBack = () => this.onShowGiphSearch();
    }

    public async activate() {
        const giph = await this.onGetGiphDetails();

        if (giph) {
            this.setGiph(giph);
        } else {
            this.onShowGiphSearch();
        }
    }

    public copyGiph(giph: DetailedGiphInfo) {
        this.onCopyGiph(giph);
    }

    public async saveGiph(giph: DetailedGiphInfo) {
        this.isLoading = true;

        await this.onSaveGiph(giph);

        this.isLoading = false;
    }

    public showGiphSearch() {
        this.onShowGiphSearch();
    }

    private setGiph(giph: DetailedGiphInfo) {
        this.titleBarModel.isLoading = false;
        this.titleBarModel.title = giph.title;
        this.titleBarModel.userAvatarUrl = giph.userAvatarUrl;

        this.infoModel.giph = giph;
        this.infoModel.giphModel = new GiphImageModel(giph);
        this.infoModel.isLoading = false;

        this.statusBarModel.isLoading = false;
    }
}
