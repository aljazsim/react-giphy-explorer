import "./GiphTitleBar.scss";
import { observer } from "mobx-react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { GiphTitleBarModel } from "./GiphTitleBarModel";

export const GiphTitleBar = observer((props: { model: GiphTitleBarModel }) => {
    return (
        <div className={"flex justify-between items-center title-bar p-3" + (props.model.isLoading ? "title-bar-disabled" : "")}>
            <ArrowLeftIcon
                className="hand grow-on-hover"
                onClick={() => props.model.goBack()}></ArrowLeftIcon>

            <span className="text-center fw-bold mx-4">{props.model.title}</span>

            {props.model.userAvatarUrl && (
                <img
                    src={props.model.userAvatarUrl ?? ""}
                    alt=""
                    height="30"
                />
            )}
            {!props.model.userAvatarUrl && <span v-else>&nbsp;</span>}
        </div>
    );
});
