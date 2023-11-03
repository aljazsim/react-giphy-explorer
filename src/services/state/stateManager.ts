import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { IStateManager } from "./IStateManager";
import { State } from "./state";

export class StateManager implements IStateManager {
    private readonly _state: State = {
        giphs: {
            items: [],
            selectedItem: null,
            totalItemCount: 0,
            page: 0,
            pageSize: 25,
            pageCount: 0,
            search: "",
            searchHistory: []
        },
        isLoading: false
    };

    public get state(): State {
        return this._state;
    }

    public clearSearchHistory(): void {
        this.state.giphs.searchHistory = [];
    }

    public selectGiph(giph: DetailedGiphInfo | null): void {
        this.state.giphs.selectedItem = giph;
    }

    public setGiphs(items: BasicGiphInfo[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string): void {
        this._state.giphs.items = items;
        this._state.giphs.totalItemCount = totalItemCount;
        this._state.giphs.page = page;
        this._state.giphs.pageSize = pageSize;
        this._state.giphs.pageCount = pageCount;
        this._state.giphs.searchHistory.push(search);
    }

    public setIsLoading(isLoading: boolean): void {
        this._state.isLoading = isLoading;
    }
}
