import { DetailedGiphInfo } from "../common/detailedGiphInfo";
import { IGiphyApiClient } from "../services/api/IGiphyApiClient";

export class SaveGiphHandler {
    constructor(private readonly giphyApiClient: IGiphyApiClient) {}

    public async handle(giph: DetailedGiphInfo) {
        await this.giphyApiClient.downloadFile(giph.url, `${giph.title}.${giph.type}`);
    }
}
