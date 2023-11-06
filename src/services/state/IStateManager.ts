import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { State } from "./state";

export interface IStateManager {
    get state(): State;

    clearSearchHistory(): void;
    selectGiph(giph: DetailedGiphInfo | null): void;
    setGiphs(items: BasicGiphInfo[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string): void;
    setIsLoading(isLoading: boolean): void;
}
