import { ObjProxyArg } from "ts-object-path";

import { DataLayer, updateDataLayer } from "./data-layer";

const updateDataLayerUnsafely = <T>(proxy: ObjProxyArg<DataLayer, T>, context: Partial<T>): void => {
    updateDataLayer(proxy, context);
    throw Error("this method is unsafe");
};

const updateDataLayerSafely = <T>(proxy: ObjProxyArg<DataLayer, T>, context: Partial<T>): void => {
    try {
        updateDataLayerUnsafely(proxy, context);
    } catch (e) {
        console.error(e);
    }
};

it("error handling", () => {
    expect(() => updateDataLayerUnsafely((dl) => dl.page.pageName, "blah")).toThrowError();
    expect(() => updateDataLayerSafely((dl) => dl.page.pageName, "blah")).not.toThrowError();
});
