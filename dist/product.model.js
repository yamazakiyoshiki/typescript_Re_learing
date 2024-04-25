"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product1 = void 0;
class Product1 {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getInformation() {
        return [this.title, `${this.price}円`];
    }
}
exports.Product1 = Product1;
//# sourceMappingURL=product.model.js.map