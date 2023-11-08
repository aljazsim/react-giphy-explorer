import "./GiphStatusBar.scss";
import { observer } from "mobx-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { GiphStatusBarModel } from "./GiphStatusBarModel";

export const GiphStatusBar = observer((props: { model: GiphStatusBarModel }) => {
    return (
        <div className={"flex justify-between items-center status-bar p-3" + (props.model.isLoading ? "status-bar-disabled" : "")}>
            <ArrowRightIcon
                className="hand grow-on-hover"
                onClick={() => props.model.goBack()}></ArrowRightIcon>

            <div className="flex flex-row flex-wrap justify-center mx-4">
                <span className="text-center">giphy explorer</span>
                <span className="text-center mx-2">|</span>
                <span className="text-center">
                    <a href="https://vuejs.org/">Vue.js</a> masterclass
                </span>
                <span className="text-center mx-2">|</span>
                <span className="text-center">
                    By <a href="https://github.com/aljazsim">Aljaz Simonic</a> 2022
                </span>
                <span className="text-center mx-2">|</span>
                <span className="text-center">
                    Powered by <a href="https://giphy.com/">Giphy</a>
                </span>
            </div>
        </div>
    );
});
