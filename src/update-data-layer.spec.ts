import { updateDataLayer } from "./data-layer";

it("use types", () => {
    updateDataLayer((dl) => dl.productInfo[0].price, 20.49);    // Valid
    // updateDataLayer((dl) => dl.productInfo[0].price, "$20.49"); // TypeError
});
