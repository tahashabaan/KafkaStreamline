import { Router, Request, Response, NextFunction } from 'express';


import { ProductService } from '../services/productService';
import { productRepository } from '../repository/productRepository';
import { producer } from '../services/producer';
import { error } from 'console';


const router = Router();


// const productService = new ProductService(new productRepository());

router.get('/product', (req, res) => {
    res.send('Product Route');
});


router.route('/product')
.post(  
   async (req:Request, res:Response, next:NextFunction) => {
    // const producer =
    const products = [
        { title: 'Product 1', price: 100, quantity: 10, description: 'Description 1', image: 'image1.jpg' },
        { title: 'Product 2', price: 200, quantity: 20, description: 'Description 2', image: 'image2.jpg' },
        { title: 'Product 3', price: 300, quantity: 30, description: 'Description 3', image: 'image3.jpg' },
        { title: 'Product 4', price: 400, quantity: 40, description: 'Description 4', image: 'image4.jpg' },
        // Add more products here
      ];
    
        //    const product =   productService.createProduct(products);

              async function sendProductsInParallel() {
                await producer.connect();
              
                // Use Promise.all to send all products in parallel
                await Promise.all(products.map(product => {
                    producer.send({
                        topic: 'products',
                        messages: [
                            {
                                value: JSON.stringify(product),
                            },
                        ],
                    });

                }));
              
                 producer.disconnect();
              }

              sendProductsInParallel().catch(
                (error:any) => {
                    console.log(error);
              })

              res.status(201).json({
                status: 'success',
                data: products
              });
       }

)


export default router;