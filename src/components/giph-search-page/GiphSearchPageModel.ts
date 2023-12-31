import { makeAutoObservable, runInAction } from "mobx";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { PagedList } from "../../common/pagedList";
import { toLinq } from "../../helpers/linq-helpers";
import { GiphImageModel } from "../giph-image/GiphImageModel";
import { GiphListModel } from "../giph-list/GiphListModel";
import { GiphPagerModel } from "../giph-pager/GiphPagerModel";
import { GiphSearchBoxModel } from "../giph-search-box/GiphSearchBoxModel";

export class GiphSearchPageModel {
    public readonly listModel: GiphListModel;
    public readonly pagerModel: GiphPagerModel;
    public readonly searchBoxModel: GiphSearchBoxModel;

    public onGetGiphs = async (searchKeywords: string, page: number, pageSize: number) => new PagedList<BasicGiphInfo>(0, [], 0, 0, 0);
    public onSelectGiph = (giph: BasicGiphInfo) => {};
    public page = 1;
    public pageSize = 30;

    constructor() {
        makeAutoObservable(this);

        this.searchBoxModel = new GiphSearchBoxModel();
        this.searchBoxModel.onClearGiphs = () => this.clearGiphs();
        this.searchBoxModel.onSearchGiphs = (searchKeywords) => this.searchGiphs(searchKeywords);

        this.listModel = new GiphListModel();
        this.listModel.onLoadMoreGiphs = () => this.loadMoreGiphs();
        this.listModel.onSelectGiphs = (giph) => this.selectGiphs(giph);

        this.pagerModel = new GiphPagerModel();
    }

    public clearGiphs(): void {
        this.searchBoxModel.searchKeywords = "";
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
        this.pagerModel.isLoading = true;

        const result = await this.onGetGiphs(searchKeywords, page, pageSize);
        const giphModels = toLinq(result.items)
            .select((g) => new GiphImageModel(g))
            .toArray();

        runInAction(() => {
            this.page = result.page;
            this.pageSize = result.pageSize;

            this.searchBoxModel.isLoading = false;

            this.listModel.isLoading = false;
            this.listModel.giphModels = page === 1 ? giphModels : this.listModel.giphModels.concat(giphModels);
            this.listModel.canLoadMore = result.totalItemCount > this.listModel.giphModels.length;

            this.pagerModel.isLoading = false;
            this.pagerModel.itemCount = this.listModel.giphModels.length;
            this.pagerModel.totalItemCount = result.totalItemCount;
        });
    }
}
