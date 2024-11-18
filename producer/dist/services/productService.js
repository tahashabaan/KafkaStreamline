"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
        console.log('ProductService constructor');
    }
    getProducts() {
        console.log('ProductService getProducts');
    }
    getProductById(id) {
        console.log('ProductService getProductById');
    }
    createProduct(product) {
        const productData = this.productRepository.createProduct(product);
        console.log('ProductService createProduct', productData);
    }
    updateProduct(product) {
        console.log('ProductService updateProduct');
    }
    deleteProduct(id) {
        console.log('ProductService deleteProduct');
    }
}
exports.ProductService = ProductService;
