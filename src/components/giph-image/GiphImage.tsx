import "./GiphImage.scss";
import { BasicGiphInfo } from "../../common/basicGiphInfo";

interface iGiphImage {
    isLoading: boolean;
    giph: BasicGiphInfo;
}

export default function GiphImage(props: iGiphImage) {
    let complete = false;

    return (
        <img
            id={props.giph.id}
            src={props.giph.url}
            width={props.giph.width}
            height={props.giph.height}
            loading="lazy"
            alt=""
        />
    );
}
