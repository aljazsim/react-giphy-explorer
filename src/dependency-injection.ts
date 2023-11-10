import { GiphDetailsPageModel } from "./components/giph-details-page/GiphDetailsPageModel";
import { GiphSearchPageModel } from "./components/giph-search-page/GiphSearchPageModel";
import { CopyGiphHandler } from "./handlers/CopyGiphHandler";
import { GetGiphDetailsHandler } from "./handlers/GetGiphDetailsHandler";
import { GetGiphsHandler } from "./handlers/GetGiphsHandler";
import { SaveGiphHandler } from "./handlers/SaveGiphHandler";
import { ShowGiphDetailsHandler } from "./handlers/ShowGiphDetailsHandler";
import { ShowGiphSearchHandler } from "./handlers/ShowGiphSearchHandler";
import { GiphyApiClient } from "./services/api/GiphyApiClient";
import { RoutingManager } from "./services/router/RoutingManager";

// services
const giphyApiClient = new GiphyApiClient("http://api.giphy.com/v1", "<INSERT-GIPHY-API-KEY>");
const routingManager = new RoutingManager();

// models
export const giphSearchPageModel = new GiphSearchPageModel();
export const giphDetailsPageModel = new GiphDetailsPageModel();

// communication hub
giphSearchPageModel.onGetGiphs = async (searchKeywords, page, pageSize) => await new GetGiphsHandler(giphyApiClient).handle(searchKeywords, page, pageSize);
giphSearchPageModel.onSelectGiph = (giph) => new ShowGiphDetailsHandler(routingManager).handle(giph);

giphDetailsPageModel.onGetGiphDetails = async () => await new GetGiphDetailsHandler(giphyApiClient).handle(routingManager.getGiphDetailsParams()?.giphId ?? "");
giphDetailsPageModel.onCopyGiph = (giph) => new CopyGiphHandler().handle(giph);
giphDetailsPageModel.onSaveGiph = async (giph) => await new SaveGiphHandler(giphyApiClient).handle(giph);
giphDetailsPageModel.onShowGiphSearch = () => new ShowGiphSearchHandler(routingManager).handle();
