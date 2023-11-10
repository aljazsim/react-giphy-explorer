import "./GiphInfo.scss";
import { observer } from "mobx-react";
import { BookmarkSquareIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import GiphImage from "../giph-image/GiphImage";
import { GiphInfoModel } from "./GiphInfoModel";

export const GiphInfo = observer((props: { model: GiphInfoModel }) => {
    return (
        <>
            <div className={"flex flex-col grow giph-info" + (props.model.isLoading ? "giph-info-disabled" : "")}>
                {/* scrolling wrapper */}
                <div className="flex flex-col grow items-stretch p-4 me-2 my-2 overflow-auto giph-info-scroll">
                    <table
                        cellPadding="8"
                        className="text-wrap">
                        <tbody>
                            {/* giph image */}
                            {props.model.giph && props.model.giph.url && props.model.giphModel && (
                                <tr>
                                    <td colSpan={2}>
                                        <div className="flex justify-center align-items-center">
                                            <div
                                                style={{ width: props.model.giph!.width + "px", height: props.model.giph!.height + "px" }}
                                                className="flex giph-image fadein-animation grow-on-hover">
                                                <GiphImage model={props.model.giphModel}></GiphImage>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}

                            {/* control buttons */}
                            {props.model.giph?.url && (
                                <tr>
                                    <td
                                        className="text-center"
                                        colSpan={2}>
                                        <button
                                            className="btn btn-info text-bright text-capitalize px-4"
                                            disabled={props.model.isLoading}
                                            type="button"
                                            onClick={() => props.model.save()}>
                                            <BookmarkSquareIcon className="h-6 w-6 me-2" />
                                            Save
                                        </button>

                                        <button
                                            className="btn btn-info text-bright text-capitalize px-4 ms-4"
                                            disabled={props.model.isLoading}
                                            type="button"
                                            onClick={() => props.model.copy()}>
                                            <DocumentDuplicateIcon className="h-6 w-6 me-2"></DocumentDuplicateIcon>
                                            Copy URL
                                        </button>
                                    </td>
                                </tr>
                            )}

                            {/* giph information */}
                            <tr>
                                <td
                                    colSpan={2}
                                    className="fw-bold pt-5">
                                    Giph information
                                </td>
                            </tr>

                            {/* giph title */}
                            {props.model.giph?.title && (
                                <tr>
                                    <td>Title:</td>
                                    <td>{props.model.giph?.title}</td>
                                </tr>
                            )}

                            {/* giph id */}
                            {props.model.giph?.id && (
                                <tr>
                                    <td>ID:</td>
                                    <td>{props.model.giph?.id}</td>
                                </tr>
                            )}

                            {/* giph dimensions */}
                            {props.model.giph?.width && props.model.giph?.height && (
                                <tr>
                                    <td>Dimensions:</td>
                                    <td>
                                        {props.model.giph?.width} x {props.model.giph?.height}
                                    </td>
                                </tr>
                            )}

                            {/* giph size */}
                            {props.model.giph?.size && (
                                <tr>
                                    <td>Size:</td>
                                    <td>{props.model.formatBytes(props.model.giph?.size ?? 0)}</td>
                                </tr>
                            )}

                            {/* giph created */}
                            {props.model.giph?.created && (
                                <tr>
                                    <td>Created:</td>
                                    <td>{props.model.giph?.created}</td>
                                </tr>
                            )}

                            {/* giph source */}
                            {props.model.giph?.source && (
                                <tr>
                                    <td>Source:</td>
                                    <td className="text-break">
                                        <a
                                            href={props.model.giph?.source}
                                            target="_blank"
                                            rel="noreferrer">
                                            {props.model.giph?.source}
                                        </a>
                                    </td>
                                </tr>
                            )}

                            {/* giph embeded url */}
                            {props.model.giph?.embedUrl && (
                                <tr>
                                    <td>Embed URL:</td>
                                    <td className="text-break">
                                        <a
                                            href={props.model.giph?.embedUrl}
                                            target="_blank"
                                            rel="noreferrer">
                                            {props.model.giph?.embedUrl}
                                        </a>
                                    </td>
                                </tr>
                            )}

                            {/* user information */}
                            {props.model.giph?.username && (
                                <tr>
                                    <td
                                        colSpan={2}
                                        className="fw-bold pt-5">
                                        User information
                                    </td>
                                </tr>
                            )}

                            {/* username */}
                            {props.model.giph?.username && (
                                <tr>
                                    <td>Username:</td>
                                    <td>{props.model.giph?.username}</td>
                                </tr>
                            )}

                            {/* user display name */}
                            {props.model.giph?.userDisplayName && (
                                <tr>
                                    <td>User display name:</td>
                                    <td>{props.model.giph?.userDisplayName}</td>
                                </tr>
                            )}

                            {/* user description */}
                            {props.model.giph?.userDescription && (
                                <tr>
                                    <td>User description:</td>
                                    <td>{props.model.giph?.userDescription}</td>
                                </tr>
                            )}

                            {/* user profile url */}
                            {props.model.giph?.userProfileUrl && (
                                <tr>
                                    <td>User profile URL:</td>
                                    <td className="text-break">
                                        <a
                                            href={props.model.giph?.userProfileUrl}
                                            target="_blank"
                                            rel="noreferrer">
                                            {props.model.giph?.userProfileUrl}
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
});
