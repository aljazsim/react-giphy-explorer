import { observer } from "mobx-react";
import { useEffect } from "react";
import { GiphList } from "../giph-list/GiphList";
import { GiphPager } from "../giph-pager/GiphPager";
import { GiphSearchBox } from "../giph-search-box/GiphSearchBox";
import Layout from "../layout/Layout";
import { GiphSearchPageModel } from "./GiphSearchPageModel";

export const GiphSearchPage = observer((props: { model: GiphSearchPageModel }) => {
    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);

        return function () {
            window.removeEventListener("keydown", onKeyDown);
        };
    });

    function onKeyDown(event: KeyboardEvent): void {
        if (event.key === "Escape") {
            props.model.clearGiphs();

            event.preventDefault();
            event.stopPropagation();
        } else if (event.key.toUpperCase() === "F" && event.ctrlKey) {
            props.model.searchBoxModel.focus();

            event.preventDefault();
            event.stopPropagation();
        }
    }

    return (
        <Layout
            content={
                <>
                    {/* search box */}
                    <div className="flex">
                        <GiphSearchBox model={props.model.searchBoxModel}></GiphSearchBox>
                    </div>

                    {/* list */}
                    <div className="flex flex-col grow mt-2">
                        <GiphList model={props.model.listModel}></GiphList>
                    </div>

                    {/* pager */}
                    <div className="flex mt-2">
                        <GiphPager model={props.model.pagerModel}></GiphPager>
                    </div>
                </>
            }></Layout>
    );
});
