import {DataLayer,initDataLayer} from "./data-layer"


it("use types", () => {
    const dataLayer: DataLayer = initDataLayer();

    dataLayer.productInfo[0].price = 20.49; // Valid
    // dataLayer.productInfo[0].price = "$20.49"; // TypeError

    dataLayer.user.checkoutStatus = "in progress";
    // dataLayer.user.checkoutStatus = "progress" // TypeError
});
