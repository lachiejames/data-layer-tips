import { ObjProxyArg, set } from "ts-object-path";

export interface PageData {
    pageName: string;

    pageUrl: string;
}

export interface ProductInfo {
    name: string;

    price: number;
}

export interface UserData {
    checkoutStatus: "start" | "in progress" | "complete";
}

export interface DataLayer {
    page: PageData;

    productInfo: ProductInfo[];

    user: UserData;
}

export const initDataLayer = (): DataLayer => {
    return {
        page: {
            pageName: "",
            pageUrl: "",
        },
        productInfo: [
            {
                name: "",
                price: 0,
            },
        ],
        user: {
            checkoutStatus: "start",
        },
    };
};

const globalDataLayer = initDataLayer();

export const updateDataLayer = <T>(proxy: ObjProxyArg<DataLayer, T>, context: Partial<T>): void => {
    set(globalDataLayer, proxy, context);
};
