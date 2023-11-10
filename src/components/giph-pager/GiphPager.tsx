import "./GiphPager.scss";
import { observer } from "mobx-react";
import { GiphPagerModel } from "./GiphPagerModel";

export const GiphPager = observer((props: { model: GiphPagerModel }) => {
    return (
        <div className={"flex flex-row grow justify-between items-center pager p-3 " + (props.model.isLoading ? "pager-disabled" : "")}>
            {/* pager */}
            {props.model.itemCount > 0 && props.model.totalItemCount > 0 && (
                <span className="text-center">
                    Displaying {props.model.itemCount} of {props.model.totalItemCount} giphs
                </span>
            )}

            {/* spacer */}
            <span>&nbsp;</span>

            {/* links */}
            <div className="flex flex-row flex-wrap justify-center mx-4">
                <span className="text-center">
                    <a href="https://github.com/aljazsim/react-giphy-explorer">Giphy Explorer</a>
                </span>
                <span className="text-center mx-2">|</span>
                <span className="text-center">
                    <a href="https://react.dev/">React</a>
                </span>
                <span className="text-center mx-2">|</span>
                <span className="text-center">
                    By <a href="https://github.com/aljazsim">Aljaz Simonic</a> 2023
                </span>
                <span className="text-center mx-2">|</span>
                <span className="text-center">
                    Powered by <a href="https://giphy.com/">Giphy</a>
                </span>
            </div>
        </div>
    );
});
