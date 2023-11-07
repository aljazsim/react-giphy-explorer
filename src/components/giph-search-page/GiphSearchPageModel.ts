import { makeAutoObservable, runInAction } from "mobx";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { PagedList } from "../../common/pagedList";
import { toLinq } from "../../helpers/linq-helpers";
import { GiphImageModel } from "../giph-image/GiphImageModel";
import { GiphListModel } from "../giph-list/GiphListModel";
import { GiphSearchBoxModel } from "../giph-search-box/GiphSearchBoxModel";

export class GiphSearchPageModel {
    public readonly listModel: GiphListModel;
    public readonly searchBoxModel: GiphSearchBoxModel;

    public onGetGiphs = async (searchKeywords: string, page: number, pageSize: number) => new PagedList<BasicGiphInfo>(0, [], 0, 0, 0);
    public onSelectGiph = (giph: BasicGiphInfo | null) => {};
    public page = 1;
    public pageSize = 10;

    constructor() {
        makeAutoObservable(this);

        this.searchBoxModel = new GiphSearchBoxModel();
        this.searchBoxModel.onClearGiphs = () => this.clearGiphs();
        this.searchBoxModel.onSearchGiphs = searchKeywords => this.searchGiphs(searchKeywords);

        this.listModel = new GiphListModel();
        this.listModel.onLoadMoreGiphs = () => this.loadMoreGiphs();
        this.listModel.onSelectGiphs = giph => this.selectGiphs(giph);
    }

    public clearGiphs(): void {
        this.getGiphs("", 1, this.pageSize);
    }

    public async loadMoreGiphs(): Promise<void> {
        await this.getGiphs(this.searchBoxModel.searchKeywords, this.page + 1, this.pageSize);
    }

    public async searchGiphs(searchKeywords: string): Promise<void> {
        await this.getGiphs(searchKeywords, 1, this.pageSize);
    }

    public selectGiphs(giph: BasicGiphInfo): void {
        this.onSelectGiph(giph);
    }

    private async getGiphs(searchKeywords: string, page: number, pageSize: number) {
        this.searchBoxModel.isLoading = true;
        this.listModel.isLoading = true;

        const result = await this.onGetGiphs(searchKeywords, page, pageSize);
        const giphModels = toLinq(result.items)
            .select(g => new GiphImageModel(g))
            .toArray();

        runInAction(() => {
            this.page = result.page;
            this.pageSize = result.pageSize;

            this.searchBoxModel.isLoading = false;
            this.searchBoxModel.canClearGiphs = result.items.length > 0;
            this.searchBoxModel.canSearchGiphs = true;
            this.searchBoxModel.canShowSearchGiphHistory = this.searchBoxModel.searchKeywordHistory.length > 0;

            this.listModel.isLoading = false;
            this.listModel.giphModels = page === 1 ? giphModels : this.listModel.giphModels.concat(giphModels);
            this.listModel.canLoadMore = result.totalItemCount > this.listModel.giphModels.length;
        });
    }
}
