import { makeAutoObservable, runInAction } from "mobx";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { PagedList } from "../../common/pagedList";

export class GiphSearchPageModel {
    public giphs: BasicGiphInfo[] = [];
    public isLoading: boolean = false;
    public onGetGiphs = async (searchKeywords: string, page: number, pageSize: number) => new PagedList<BasicGiphInfo>(0, [], 0, 0, 0);
    public onSelectGiph = (giph: BasicGiphInfo | null) => {};
    public page = 1;
    public pageSize = 10;
    public searchHistory = [];
    public searchKeywords = "";
    public totalGiphCount = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public clear(): void {
        this.onGetGiphs("", 1, this.pageSize);
    }

    public clearSearchHistory(): void {
        this.searchHistory = [];
    }

    public async loadMore(): Promise<void> {
        await this.getGiphs(this.searchKeywords, this.page + 1, this.pageSize);
    }

    public async search(searchKeywords: string): Promise<void> {
        await this.getGiphs(searchKeywords, 1, this.pageSize);
    }

    public select(giph: BasicGiphInfo): void {
        this.onSelectGiph(giph);
    }

    private async getGiphs(searchKeywords: string, page: number, pageSize: number) {
        this.isLoading = true;

        const result = await this.onGetGiphs(searchKeywords, page, pageSize);

        runInAction(() => {
            this.giphs = result.items;
            this.page = result.page;
            this.pageSize = result.pageSize;
            this.totalGiphCount = result.totalItemCount;

            this.isLoading = false;
        });
    }
}
