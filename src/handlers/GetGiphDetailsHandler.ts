import { IGiphyApiClient } from "../services/api/IGiphyApiClient";

export class GetGiphDetailsHandler {
    constructor(private readonly giphyApiClient: IGiphyApiClient) {}

    public async handle(giphId: string) {
        return await this.giphyApiClient.getGiphDetails(giphId);
    }
}
