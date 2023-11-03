import { useRef } from "react";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { PagedList } from "../../common/pagedList";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { IStateManager } from "../../services/state/IStateManager";
import GiphList from "../giph-list/GiphList";
import GiphSearchBox from "../giph-search-box/GiphSearchBox";
import Layout from "../layout/Layout";

interface IGiphySearchPage {
    giphs: PagedList<BasicGiphInfo>;
    isLoading: boolean;
    onSearch: (searchKeywords: string, page: number, pageSize: number) => Promise<void>;
    routingManager: IRoutingManager;
    stateManager: IStateManager;
}

export default function GiphSearchPage(props: IGiphySearchPage) {
    const itemCount = useRef(props.stateManager.state.giphs.items?.length);
    const searchHistory = useRef(props.stateManager.state.giphs.searchHistory);
    const searchKeywords = useRef(props.stateManager.state.giphs.search);
    const totalItemCount = useRef(props.stateManager.state.giphs.totalItemCount);

    function componentDidMount(): void {
        window.addEventListener("keydown", onKeyDown);
    }

    function onClear(): void {
        props.stateManager.setIsLoading(true);
        props.stateManager.setGiphs([], 0, 1, props.stateManager.state.giphs.pageSize, 0, "");
        props.stateManager.setIsLoading(false);
    }

    function onClearSearchHistory(): void {
        props.stateManager.clearSearchHistory();
    }

    async function onLoadMore(): Promise<void> {
        // props.stateManager.setIsLoading(true);
        // const searchKeywords = props.stateManager.state.giphs.search;
        // const page = props.stateManager.state.giphs.page + 1;
        // const pageSize = props.stateManager.state.giphs.pageSize;
        // const giphs = await props.onSearch(searchKeywords, page, pageSize);
        // const items = props.stateManager.state.giphs.items.concat(giphs.items);
        // props.stateManager.setGiphs(items, giphs.totalItemCount, page, giphs.pageSize, giphs.pageCount, searchKeywords);
        // props.stateManager.setIsLoading(false);
    }

    async function onSearch(searchKeywords: string): Promise<void> {
        const page = 1;
        const pageSize = props.stateManager.state.giphs.pageSize;

        await props.onSearch(searchKeywords, page, pageSize);
    }

    function onSelect(giph: BasicGiphInfo): void {
        props.stateManager.selectGiph(null);
        props.routingManager.goToGiphDetails(giph);
    }

    function componentWillUnmount(): void {
        window.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(event: KeyboardEvent): void {
        if (event.key === "Escape") {
            onClear();
        }
    }

    return (
        <Layout
            content={
                <>
                    {/* search box */}
                    <div className="flex">
                        <GiphSearchBox
                            isLoading={props.isLoading}
                            searchKeywords={searchKeywords.current}
                            searchHistory={searchHistory.current}
                            hasItems={itemCount.current > 0}
                            onSearch={(searchKeywords: string) => onSearch(searchKeywords)}
                            onClearSearchHistory={() => onClearSearchHistory()}
                            onClear={() => onClear()}></GiphSearchBox>
                    </div>

                    {/* list */}
                    <div className="flex flex-col grow mt-2">
                        <GiphList
                            canLoadMore={itemCount.current < totalItemCount.current}
                            giphs={props.giphs.items}
                            isLoading={props.isLoading}
                            onLoadMore={() => onLoadMore()}
                            onSelect={(selectedGiph: BasicGiphInfo) => onSelect(selectedGiph)}></GiphList>
                    </div>

                    {/* pager */}
                    <div className="flex mt-2">{/* <giph-pager :isLoading="isLoading" :itemCount="itemCount" :totalItemCount="totalItemCount" ref="statusBar"></giph-pager> */}</div>
                </>
            }></Layout>
    );
}
