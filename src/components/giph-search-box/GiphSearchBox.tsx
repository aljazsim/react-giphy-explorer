import "./GiphSearchBox.scss";
import { useMemo, useRef } from "react";
import { ArrowPathIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface IGiphySearchBox {
    hasItems: boolean;
    isLoading: boolean;
    onClear: () => void;
    onClearSearchHistory: () => void;
    onSearch: (searchKeywords: string) => void;
    searchHistory: string[];
    searchKeywords: string;
}

export default function GiphSearchBox(props: IGiphySearchBox) {
    const input = useRef<HTMLInputElement>(null);
    const canClear = useMemo(() => !props.isLoading && props.hasItems, [props.isLoading, props.hasItems]);
    const canSearch = useMemo(() => !props.isLoading && (input.current?.value?.length ?? 0) > 0, [props.isLoading]);
    const canSeeSearchHistory = useMemo(() => !props.isLoading && props.searchHistory.length > 0, [props.isLoading, props.searchHistory.length]);

    function onClear(): void {
        props.onClear();
    }

    function onClearSearchHistory() {
        props.onClearSearchHistory();
    }

    function onSearch(searchKeywords: string): void {
        if (searchKeywords?.length > 0) {
            props.onSearch(searchKeywords);
        }
    }

    function selectAll() {
        input?.current?.focus();
        input?.current?.select();
    }

    return (
        <div className={"flex flex-row grow flex-wrap justify-center items-stretch search-box p-3" + (props.isLoading ? "search-box-disabled" : "")}>
            <div className="flex flex-col grow items-stretch">
                <input
                    type="text"
                    max-length="50"
                    className="flex grow search-input"
                    placeholder="Search Giphs"
                    v-model="model"
                    disabled={props.isLoading}
                    onKeyUp={e => e.key === "Enter" && onSearch(e.currentTarget.value)}
                    onFocus={_ => selectAll()}
                    ref={input}
                />
            </div>

            <div className="flex flex-row flex-wrap search-box-buttons">
                {/* search button */}
                <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!canSearch}
                    onClick={_ => onSearch(input.current?.value ?? "")}>
                    <MagnifyingGlassIcon className="h-6 w-6 text-blue-500 me-2" />
                    <span>Search</span>
                </button>

                {/* search history button */}
                <div className="dropdown">
                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={!canSeeSearchHistory}>
                        <ArrowPathIcon className="h-6 w-6 text-blue-500 me-2" />
                        <span>Search</span>
                    </button>

                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {props.searchHistory.map(searchHistoryItem => (
                            <li
                                key={searchHistoryItem}
                                className="hand bold-on-hover"
                                onClick={_ => onSearch(searchHistoryItem)}>
                                <div className="flex flex-row gap-1">
                                    <MagnifyingGlassIcon className="h-6 w-6 text-blue-500 me-2" />
                                    {searchHistoryItem}
                                </div>
                            </li>
                        ))}
                        <li className="hand bold-on-hover">
                            <div className="flex flex-row gap-1">
                                <XMarkIcon className="h-6 w-6 text-blue-500 me-2" />
                                Clear history
                            </div>
                        </li>
                    </ul>
                </div>

                {/* clear search bbutton */}
                <button
                    className="btn btn-danger text-bright text-capitalize px-4"
                    disabled={!canClear}
                    type="button"
                    onClick={_ => onClear()}>
                    <XMarkIcon className="h-6 w-6 text-blue-500 me-2" />
                    Clear
                </button>
            </div>
        </div>
    );
}
