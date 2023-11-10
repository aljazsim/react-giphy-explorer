import { DetailedGiphInfo } from "../common/detailedGiphInfo";

export class CopyGiphHandler {
    public handle(giph: DetailedGiphInfo) {
        navigator.clipboard.writeText(giph.url);
    }
}
