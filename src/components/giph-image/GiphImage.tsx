import { GiphImageModel } from "./GiphImageModel";

export default function GiphImage(props: { model: GiphImageModel }) {
    return (
        <img
            id={props.model.giph.id}
            src={props.model.giph.url}
            width={props.model.giph.width}
            height={props.model.giph.height}
            loading="lazy"
            alt=""
        />
    );
}
