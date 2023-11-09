import { makeAutoObservable } from "mobx";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { callbackNotSetUpVoid } from "../../helpers/event-helpers";
import { formatBytes } from "../../helpers/formatting-helpers";
import { GiphImageModel } from "../giph-image/GiphImageModel";

export class GiphInfoModel {
    public giph: DetailedGiphInfo | null = null;
    public giphModel: GiphImageModel | null = null;
    public isLoading = false;
    public onCopyGiph = (giph: DetailedGiphInfo) => callbackNotSetUpVoid();
    public onSaveGiph = (giph: DetailedGiphInfo) => callbackNotSetUpVoid();

    constructor() {
        makeAutoObservable(this);
    }

    public copy() {
        if (this.giph) {
            this.onCopyGiph(this.giph);
        }
    }

    public formatBytes(value: string | number): string {
        return formatBytes(value);
    }

    public save() {
        if (this.giph) {
            this.onSaveGiph(this.giph);
        }
    }
}
