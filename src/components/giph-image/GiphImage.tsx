import { GiphImageModel } from "./GiphImageModel";

export default function GiphImage(props: { model: GiphImageModel }) {
    return (
        <img
            id={props.model.giph.id}
            src={props.model.giph.url}
            loading="lazy"
            alt=""
            className="object-cover h-full w-full "
        />
    );
}
