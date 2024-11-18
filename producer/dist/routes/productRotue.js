"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producer_1 = require("../services/producer");
const router = (0, express_1.Router)();
// const productService = new ProductService(new productRepository());
router.get('/product', (req, res) => {
    res.send('Product Route');
});
router.route('/product')
    .post((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const producer =
    const products = [
        { title: 'Product 1', price: 100, quantity: 10, description: 'Description 1', image: 'image1.jpg' },
        { title: 'Product 2', price: 200, quantity: 20, description: 'Description 2', image: 'image2.jpg' },
        { title: 'Product 3', price: 300, quantity: 30, description: 'Description 3', image: 'image3.jpg' },
        // Add more products here
    ];
    //    const product =   productService.createProduct(products);
    function sendProductsInParallel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield producer_1.producer.connect();
            // Use Promise.all to send all products in parallel
            yield Promise.all(products.map(product => {
                producer_1.producer.send({
                    topic: 'products',
                    messages: [
                        {
                            value: JSON.stringify(product),
                        },
                    ],
                });
            }));
            producer_1.producer.disconnect();
        });
    }
    sendProductsInParallel().catch((error) => {
        console.log(error);
    });
    res.status(201).json({
        status: 'success',
        data: products
    });
}));
exports.default = router;
