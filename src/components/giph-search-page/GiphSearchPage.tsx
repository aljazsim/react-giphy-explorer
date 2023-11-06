import { observer } from "mobx-react";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import GiphList from "../giph-list/GiphList";
import GiphSearchBox from "../giph-search-box/GiphSearchBox";
import Layout from "../layout/Layout";
import { GiphSearchPageModel } from "./GiphSearchPageModel";

export const GiphSearchPage = observer((props: { model: GiphSearchPageModel }) => {
    function componentDidMount(): void {
        window.addEventListener("keydown", onKeyDown);
    }

    function componentWillUnmount(): void {
        window.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(event: KeyboardEvent): void {
        if (event.key === "Escape") {
            props.model.clear();
        }
    }

    return (
        <Layout
            content={
                <>
                    {/* search box */}
                    <div className="flex">
                        <GiphSearchBox
                            isLoading={props.model.isLoading}
                            searchKeywords={props.model.searchKeywords}
                            searchHistory={props.model.searchHistory}
                            hasItems={props.model.giphs.length > 0}
                            onSearch={(searchKeywords: string) => props.model.search(searchKeywords)}
                            onClearSearchHistory={() => props.model.clearSearchHistory()}
                            onClear={() => props.model.clear()}></GiphSearchBox>
                    </div>

                    {/* list */}
                    <div className="flex flex-col grow mt-2">
                        <GiphList
                            canLoadMore={props.model.giphs.length < props.model.totalGiphCount}
                            giphs={props.model.giphs}
                            isLoading={props.model.isLoading}
                            onLoadMore={() => props.model.loadMore()}
                            onSelect={(selectedGiph: BasicGiphInfo) => props.model.select(selectedGiph)}></GiphList>
                    </div>

                    {/* pager */}
                    <div className="flex mt-2">{/* <giph-pager :isLoading="isLoading" :itemCount="itemCount" :totalItemCount="totalItemCount" ref="statusBar"></giph-pager> */}</div>
                </>
            }></Layout>
    );
});
