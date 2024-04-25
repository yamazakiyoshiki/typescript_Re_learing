"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const product_model_1 = require("./product.model");
const products = [
    { title: '商品1', price: 100 },
    { title: '商品2', price: 200 },
];
const loadedProducts = (0, class_transformer_1.plainToInstance)(product_model_1.Product1, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map