import { GiphSearchPageModel } from "./components/giph-search-page/GiphSearchPageModel";
import { GetGiphsHandler } from "./handlers/getGiphsHandler";
import { GiphyApiClient } from "./services/api/GiphyApiClient";
import { RoutingManager } from "./services/router/RoutingManager";
import { StateManager } from "./services/state/stateManager";

// services
const giphyApiClient = new GiphyApiClient("http://api.giphy.com/v1", "");
const routingManager = new RoutingManager();
const stateManager = new StateManager();

// models
export const giphSearchPageModel = new GiphSearchPageModel();

// communication hub
giphSearchPageModel.onGetGiphs = (searchKeywords, page, pageSize) => new GetGiphsHandler(giphyApiClient).handle(searchKeywords, page, pageSize);
