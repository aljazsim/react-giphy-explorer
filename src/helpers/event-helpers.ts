export function callbackNotSetUpVoid() {
    throw new Error("Callback not set up");
}

export function callbackNotSetUp<T>(): T {
    throw new Error("Callback not set up");
}

export function callbackNotSetUpAsyncVoid(): Promise<void> {
    throw new Error("Callback not set up");
}

export function callbackNotSetUpAsync<T>(): Promise<T> {
    throw new Error("Callback not set up");
}
