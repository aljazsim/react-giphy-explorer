import "./App.scss";
import { useState } from "react";
import { BasicGiphInfo } from "./common/basicGiphInfo";
import { PagedList } from "./common/pagedList";
import GiphSearchPage from "./components/giph-search-page/GiphSearchPage";
import { GiphyApiClient } from "./services/api/GiphyApiClient";
import { RoutingManager } from "./services/router/RoutingManager";
import { StateManager } from "./services/state/stateManager";

function App() {
    const giphyApiClient = new GiphyApiClient("http://api.giphy.com/v1", "");
    const routingManager = new RoutingManager();
    const stateManager = new StateManager();

    const [giphs, setGiphs] = useState(new PagedList<BasicGiphInfo>(0, [], 0, 0, 0));
    const [isLoading, setIsLoading] = useState(false);

    async function onSearch(searchKeywords: string, page: number, pageSize: number) {
        setIsLoading(true);

        stateManager.setIsLoading(true);

        setGiphs(await giphyApiClient.searchGiphs(searchKeywords, page, pageSize));

        stateManager.setGiphs(giphs.items, giphs.totalItemCount, giphs.page, giphs.pageSize, giphs.pageCount, searchKeywords);
        stateManager.setIsLoading(false);

        setIsLoading(false);
    }

    return (
        <GiphSearchPage
            routingManager={routingManager}
            stateManager={stateManager}
            isLoading={stateManager.state.isLoading}
            giphs={giphs}
            onSearch={async (searchKeywords: string, page: number, pageSize: number) => onSearch(searchKeywords, page, pageSize)}></GiphSearchPage>
    );
}

export default App;
