import { BasicGiphInfo } from "../common/basicGiphInfo";
import { PagedList } from "../common/pagedList";
import { IGiphyApiClient } from "../services/api/IGiphyApiClient";

export class GetGiphsHandler {
    constructor(private readonly giphyApiClient: IGiphyApiClient) {}

    public async handle(searchKeywords: string, page: number, pageSize: number) {
        if ((searchKeywords?.length ?? 0) > 0) {
            return await this.giphyApiClient.getGiphs(searchKeywords, page, pageSize);
        } else {
            return new PagedList<BasicGiphInfo>(0, [], 1, pageSize, 1);
        }
    }
}
