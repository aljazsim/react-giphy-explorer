import "./GiphSearchBox.scss";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { ArrowPathIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GiphSearchBoxModel } from "./GiphSearchBoxModel";

export const GiphSearchBox = observer((props: { model: GiphSearchBoxModel }) => {
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        props.model.onFocus = () => selectAll();
    });

    function selectAll() {
        input?.current?.focus();
        input?.current?.select();
    }

    return (
        <div className={"flex flex-row grow flex-wrap justify-center items-stretch search-box p-3" + (props.model.isLoading ? " search-box-disabled" : "")}>
            <div className="flex flex-col grow items-stretch">
                <input
                    type="text"
                    max-length="50"
                    className="flex grow search-input"
                    placeholder="Search Giphs"
                    value={props.model.searchKeywords}
                    disabled={props.model.isLoading}
                    onKeyUp={(e) => e.key === "Enter" && props.model.searchKeywords.length > 0 && props.model.searchGiphs(props.model.searchKeywords)}
                    onFocus={() => selectAll()}
                    onChange={(e) => props.model.updateSearchKeywords(e.currentTarget.value)}
                    ref={input}
                />
            </div>

            <div className="flex flex-row flex-wrap items-center search-box-buttons">
                {/* search button */}
                <button
                    type="button"
                    className="btn btn-info"
                    disabled={props.model.isLoading || props.model.searchKeywords.length === 0}
                    onClick={() => props.model.searchGiphs(input.current?.value ?? "")}>
                    <MagnifyingGlassIcon className="h-6 w-6 me-2" />
                    <span>Search</span>
                </button>

                {/* search history button (disabled) */}
                {(props.model.isLoading || props.model.searchKeywordHistory.length === 0) && (
                    <button
                        type="button"
                        className="btn btn-info"
                        disabled>
                        <ArrowPathIcon className="h-6 w-6 me-2" />
                        <span>Search History</span>
                    </button>
                )}

                {/* search history button (enabled) */}
                {!props.model.isLoading && props.model.searchKeywordHistory.length > 0 && (
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-info">
                            <ArrowPathIcon className="h-6 w-6 me-2" />
                            <span>Search History</span>
                        </label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-zinc-200 rounded-box w-52 mt-2">
                            {/* search history items */}
                            {props.model.searchKeywordHistory.map((searchHistoryItem) => (
                                <li
                                    key={searchHistoryItem}
                                    className="hand bold-on-hover">
                                    <div
                                        className="flex flex-row gap-1"
                                        onClick={() => props.model.searchGiphs(searchHistoryItem)}>
                                        <MagnifyingGlassIcon className="h-6 w-6" />
                                        <span>{searchHistoryItem}</span>
                                    </div>
                                </li>
                            ))}
                            {/* clear search */}
                            <li className="hand bold-on-hover">
                                <div
                                    className="flex flex-row gap-1"
                                    onClick={() => props.model.clearSearchHistory()}>
                                    <XMarkIcon className="h-6 w-6" />
                                    <span>Clear Search History</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}

                {/* clear search button */}
                <button
                    className="btn btn-info text-bright text-capitalize px-4"
                    disabled={props.model.isLoading || props.model.searchKeywords.length === 0}
                    type="button"
                    onClick={() => props.model.clearGiphs()}>
                    <XMarkIcon className="h-6 w-6 me-2" />
                    Clear
                </button>
            </div>
        </div>
    );
});
