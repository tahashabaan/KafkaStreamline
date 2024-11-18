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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("../entity/product"); // Adjust the path as necessary
const database_1 = __importDefault(require("../database"));
class productRepository {
    constructor() {
        this.db = database_1.default;
    }
    getProducts() {
        try {
        }
        catch (err) {
        }
    }
    getProductById(id) {
        console.log('productRepository getProductById');
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
            const newProduct = productRepository.create(product);
            return yield productRepository.save(newProduct);
        });
    }
    updateProduct(product) {
        console.log('productRepository updateProduct');
    }
    deleteProduct(id) {
        console.log('productRepository deleteProduct');
    }
}
exports.productRepository = productRepository;
