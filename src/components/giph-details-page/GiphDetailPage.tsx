import { observer } from "mobx-react";
import { GiphInfo } from "../giph-info/GiphInfo";
import { GiphStatusBar } from "../giph-status-bar/GiphStatusBar";
import { GiphTitleBar } from "../giph-title-bar/GiphTitleBar";
import Layout from "../layout/Layout";
import { GiphDetailsPageModel } from "./GiphDetailsPageModel";

export const GiphDetailsPage = observer((props: { model: GiphDetailsPageModel }) => {
    return (
        <Layout
            content={
                <>
                    <div className="flex">
                        <GiphTitleBar model={props.model.titleBarModel}></GiphTitleBar>
                    </div>

                    <div className="flex flex-col grow mt-2">
                        <GiphInfo model={props.model.infoModel}></GiphInfo>
                    </div>

                    <div className="flex mt-2">
                        <GiphStatusBar model={props.model.titleBarModel}></GiphStatusBar>
                    </div>
                </>
            }></Layout>
    );
});
