import { getRepository } from 'typeorm';
import { Product } from '../entity/product'; // Adjust the path as necessary

import connectdb from "../database";



export class productRepository{
    private db: any;
    constructor(){
        this.db = connectdb;
    }

    getProducts(){
        try{





        }catch(err:any){

        }
    }

    getProductById(id: number){
        console.log('productRepository getProductById');
    }

    async createProduct(product: Product): Promise<Product>{

        const productRepository = getRepository(Product);
        const newProduct = productRepository.create(product);
        return await productRepository.save(newProduct);

    }

    updateProduct(product: any){
        console.log('productRepository updateProduct');
    }

    deleteProduct(id: number){
        console.log('productRepository deleteProduct');
    }
}