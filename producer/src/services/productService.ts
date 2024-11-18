import { Product } from '../entity/product';
import {productRepository} from '../repository/productRepository';

export class ProductService{
    constructor(
        private productRepository: productRepository
    ){
        console.log('ProductService constructor');
    }

    getProducts(){
        console.log('ProductService getProducts');
    }

    getProductById(id: number){
        console.log('ProductService getProductById');
    }

    createProduct(product: Product){
        
        const productData = this.productRepository.createProduct(product);
        console.log('ProductService createProduct', productData );
    }

    updateProduct(product: any){
        console.log('ProductService updateProduct');
    }

    deleteProduct(id: number){
        console.log('ProductService deleteProduct');
    }
}