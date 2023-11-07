import Enumerable from "linq";

export function toLinq(array: any[]) {
    return Enumerable.from(array);
}
