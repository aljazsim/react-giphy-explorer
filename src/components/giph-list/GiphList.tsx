import { PhotoIcon } from "@heroicons/react/24/solid";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import GiphImage from "../giph-image/GiphImage";

interface IGiphList {
    canLoadMore: boolean;
    giphs: BasicGiphInfo[];
    isLoading: boolean;
    onLoadMore: () => void;
    onSelect: (giph: BasicGiphInfo) => void;
}

export default function GiphList(props: IGiphList) {
    function onScroll(target: HTMLDivElement): void {
        const { scrollTop, offsetHeight, scrollHeight } = target;

        if (scrollTop + offsetHeight >= scrollHeight) {
            if (!props.isLoading) {
                props.onLoadMore();
            }
        }
    }

    return (
        <div className={"flex grow flex-col my-4 giph-list " + (props.isLoading ? "giph-list-disabled" : "")}>
            {/* scrolling wrapper */}
            <div
                className="flex grow flex-col p-4 me-2 my-2 overflow-auto giph-list-scroll"
                onScroll={e => onScroll(e.target as HTMLDivElement)}>
                {/* giph images */}
                <div className="flex flex-row flex-wrap justify-evenly giph-image-container">
                    {props.giphs.map(giph => (
                        // giph image
                        <div
                            style={{ width: giph.width + "px", height: giph.height + "px" }}
                            className="flex grow giph-image hand fadein-animation grow-on-hover"
                            onClick={() => props.onSelect(giph)}>
                            <GiphImage
                                giph={giph}
                                isLoading={props.isLoading}></GiphImage>
                        </div>
                    ))}
                </div>

                {/* empty placeholder */}
                {(!props.isLoading && props.giphs?.length === 0) || (
                    <div className="flex flex-fill flex-col justify-center align-center my-2 light-gray">
                        <span className="giphy-explorer text-center text-wrap fw-bold mb-4">giphy explorer</span>
                        <PhotoIcon></PhotoIcon>
                    </div>
                )}
            </div>
        </div>
    );
}
