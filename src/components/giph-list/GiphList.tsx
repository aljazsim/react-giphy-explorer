import "./GiphList.scss";
import { observer } from "mobx-react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import GiphImage from "../giph-image/GiphImage";
import { GiphListModel } from "./GiphListModel";

export const GiphList = observer((props: { model: GiphListModel }) => {
    function onScroll(target: HTMLDivElement): void {
        const buffer = 100;
        const { scrollTop, offsetHeight, scrollHeight } = target;

        if (scrollTop + offsetHeight >= scrollHeight - buffer) {
            if (!props.model.isLoading) {
                props.model.onLoadMoreGiphs();
            }
        }
    }

    return (
        <div className={"flex flex-col grow  my-4 giph-list " + (props.model.isLoading ? "giph-list-disabled" : "")}>
            {/* scrolling wrapper */}
            <div
                className="flex grow flex-col p-4 me-2 my-2 overflow-auto giph-list-scroll"
                onScroll={e => onScroll(e.target as HTMLDivElement)}>
                {/* giph images */}
                {props.model.giphModels.length > 0 && (
                    <div className="flex flex-row flex-wrap justify-evenly giph-image-container">
                        {props.model.giphModels.map(giphModel => (
                            // giph image
                            <div
                                key={giphModel.giph.id}
                                className="h-full w-full giph-image-wrapper hand fadein-animation grow-on-hover"
                                onClick={() => props.model.onSelectGiphs(giphModel.giph)}>
                                <GiphImage model={giphModel}></GiphImage>
                            </div>
                        ))}
                    </div>
                )}

                {/* empty placeholder */}
                {(props.model.isLoading || props.model.giphModels.length === 0) && (
                    <div className="flex flex-col grow justify-center items-center my-2 light-gray">
                        <span className="giphy-explorer text-center text-wrap fw-bold mb-4">giphy explorer</span>
                        <PhotoIcon className="giphy-explorer-image"></PhotoIcon>
                    </div>
                )}
            </div>
        </div>
    );
});
