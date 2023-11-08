import { makeAutoObservable } from "mobx";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { callbackNotSetUpAsyncVoid, callbackNotSetUpVoid } from "../../helpers/event-helpers";
import { GiphInfoModel } from "../giph-info/GiphInfoModel";
import { GiphStatusBarModel } from "../giph-status-bar/GiphStatusBarModel";
import { GiphTitleBarModel } from "../giph-title-bar/GiphTitleBarModel";

export class GiphDetailsPageModel{
    public giph: DetailedGiphInfo | null = null;
    public infoModel: GiphInfoModel;
    public isLoading = false;
    public onCopyGiph = (giph: DetailedGiphInfo) => callbackNotSetUpAsyncVoid();
    public onSaveGiph = (giph: DetailedGiphInfo) => callbackNotSetUpAsyncVoid();
    public onShowGiphSearch = () => callbackNotSetUpVoid();
    public statusBarModel: GiphStatusBarModel;
    public titleBarModel: GiphTitleBarModel;

    constructor() {
        makeAutoObservable(this);

        this.titleBarModel = new GiphTitleBarModel();
this.infoModel = new GiphInfoModel();
        this.statusBarModel = new GiphStatusBarModel();
    }

    public async copy(giph: DetailedGiphInfo): Promise<void>
    {
        await this.onCopyGiph(giph);
    }

    public async save(giph: DetailedGiphInfo): Promise<void>
    {
        this.isLoading = true;
        
        await this.onSaveGiph(giph);
        
        this.isLoading = false;
    }

    public showGiphSearch()
    {
        this.onShowGiphSearch();
    }
}