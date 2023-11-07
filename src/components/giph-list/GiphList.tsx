import { observer } from "mobx-react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import GiphImage from "../giph-image/GiphImage";
import { GiphListModel } from "./GiphListModel";

export const GiphList = observer((props: { model: GiphListModel }) => {
    function onScroll(target: HTMLDivElement): void {
        const { scrollTop, offsetHeight, scrollHeight } = target;

        if (scrollTop + offsetHeight >= scrollHeight) {
            if (!props.model.isLoading) {
                props.model.onLoadMoreGiphs();
            }
        }
    }

    return (
        <div className={"flex grow flex-col my-4 giph-list " + (props.model.isLoading ? "giph-list-disabled" : "")}>
            {/* scrolling wrapper */}
            <div
                className="flex grow flex-col p-4 me-2 my-2 overflow-auto giph-list-scroll"
                onScroll={e => onScroll(e.target as HTMLDivElement)}>
                {/* giph images */}
                <div className="flex flex-row flex-wrap justify-evenly giph-image-container">
                    {props.model.giphModels.map(giphModel => (
                        // giph image
                        <div
                            key={giphModel.giph.id}
                            style={{ width: giphModel.giph.width + "px", height: giphModel.giph.height + "px" }}
                            className="flex grow giph-image hand fadein-animation grow-on-hover"
                            onClick={() => props.model.onSelectGiphs(giphModel.giph)}>
                            <GiphImage model={giphModel}></GiphImage>
                        </div>
                    ))}
                </div>

                {/* empty placeholder */}
                {(!props.model.isLoading && props.model.giphModels.length === 0) || (
                    <div className="flex flex-fill flex-col justify-center align-center my-2 light-gray">
                        <span className="giphy-explorer text-center text-wrap fw-bold mb-4">giphy explorer</span>
                        <PhotoIcon></PhotoIcon>
                    </div>
                )}
            </div>
        </div>
    );
});
