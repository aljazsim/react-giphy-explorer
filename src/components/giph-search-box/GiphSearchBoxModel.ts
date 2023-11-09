import Enumerable from "linq";
import { makeAutoObservable } from "mobx";

export class GiphSearchBoxModel {
    public canClearGiphs = false;
    public isLoading = false;
    public onClearGiphs = () => {};
    public onSearchGiphs = (searchKeywords: string) => {};
    public searchKeywordHistory: string[] = [];
    public searchKeywords = "";

    constructor() {
        makeAutoObservable(this);
    }

    public clearGiphs(): void {
        this.searchKeywords = "";
        this.onClearGiphs();
    }

    public clearSearchHistory() {
        this.searchKeywordHistory = [];
    }

    public searchGiphs(searchKeywords: string): void {
        this.addSearchKeywordHistory(searchKeywords);
        this.onSearchGiphs(searchKeywords);
        this.searchKeywords = searchKeywords;
    }

    private addSearchKeywordHistory(searchKeywords: string) {
        this.searchKeywordHistory.push(searchKeywords);
        this.searchKeywordHistory = Enumerable.from(this.searchKeywordHistory)
            .where(sk => sk != null && sk !== "")
            .orderBy(sk => sk.toLowerCase())
            .distinct()
            .toArray();
    }
}
