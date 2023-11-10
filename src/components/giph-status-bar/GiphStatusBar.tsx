import "./GiphStatusBar.scss";
import { observer } from "mobx-react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { GiphStatusBarModel } from "./GiphStatusBarModel";

export const GiphStatusBar = observer((props: { model: GiphStatusBarModel }) => {
    return (
        <div className={"flex flex-row grow justify-between items-center status-bar p-3" + (props.model.isLoading ? "status-bar-disabled" : "")}>
            {/* arrow left */}
            <ArrowLeftIcon
                className="h-6 w-6 me-2 hand grow-on-hover"
                onClick={() => props.model.goBack()}></ArrowLeftIcon>

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
