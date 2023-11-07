import Enumerable from "linq";
import { makeAutoObservable } from "mobx";

export class GiphSearchBoxModel {
    public canClearGiphs = false;
    public canSearchGiphs = false;
    public canShowSearchGiphHistory = false;
    public isLoading = false;
    public onClearGiphs = () => {};
    public onSearchGiphs = (searchKeywords: string) => {};
    public searchKeywordHistory: string[] = [];
    public searchKeywords = "";

    constructor() {
        makeAutoObservable(this);
    }

    public clearGiphs(): void {
        this.onClearGiphs();
    }

    public clearSearchHistory() {
        debugger;
        this.searchKeywordHistory = [];
        this.canShowSearchGiphHistory = false;
    }

    public searchGiphs(searchKeywords: string): void {
        debugger;
        this.addSearchKeywordHistory(searchKeywords);
        this.onSearchGiphs(searchKeywords);
    }

    private addSearchKeywordHistory(searchKeyword: string) {
        this.searchKeywordHistory.push(searchKeyword);
        this.searchKeywordHistory = Enumerable.from(this.searchKeywordHistory)
            .where(sk => sk != null && sk !== "")
            .orderBy(sk => sk.toLowerCase())
            .distinct()
            .toArray();
    }
}
