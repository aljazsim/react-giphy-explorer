import { IGiphyApiClient } from "../services/api/IGiphyApiClient";

export class GetGiphsHandler {
    constructor(private readonly giphyApiClient: IGiphyApiClient) {}

    public async handle(searchKeywords: string, page: number, pageSize: number) {
        return await this.giphyApiClient.getGiphs(searchKeywords, page, pageSize);
    }
}
