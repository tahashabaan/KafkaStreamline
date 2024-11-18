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
exports.producer = void 0;
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: 'product-producer',
    brokers: ['localhost:9092'],
    retry: {
        initialRetryTime: 30000, /// 3 seconds
        retries: 5
    }
});
const producer = kafka.producer({
    createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner
});
exports.producer = producer;
function connectProducer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield producer.connect();
        console.log('Kafka producer connected');
    });
}
connectProducer().catch(console.error);
// import { Kafka } from 'kafkajs';
// export class KafkaService {
//     private clientId: string;
//     private brokers: string[];
//     private kafka: Kafka;
//     constructor(clientId: string, brokers: string[]){
//         this.clientId =clientId || 'product-service';
//         this.brokers = brokers  || ['localhost:9092'];
//         this.kafka = new Kafka({
//             clientId: this.clientId,
//             brokers: this.brokers
//         });
//     }
//    public producer(){
//         return {
//             connect: async() => {
//                 await this.kafka.producer().connect();
//             },
//             send: (
//                    topic:string='product',
//                    message: any  = 'Hello KafkaJS user!') => {
//                 this.kafka.producer().send({
//                     topic ,
//                     messages: [
//                         { value: JSON.stringify(message) },
//                     ],
//                 });
//             },
//             disconnect: () => {
//                 this.kafka.producer().disconnect();
//             }
//         }
//     }
//     logger(){
//         return {
//             info: (message:string) => {
//                 console.log(message);
//             }
//         }
//     }
//    kafak(){
// //         import { Kafka } from "kafkajs";
// // import * as dotenv from 'dotenv';
// // dotenv.config();
// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092']
// })
// // docker exec -it [container_Id] /opt/bitnami/kafka/bin/kafka-topics.sh --create  --replication-factor 1 --partitions 1 --topic test
// const producer = kafka.producer()
// const run = async () => {
//     await producer.connect()
//     await producer.send({
//         topic: 'test-topic',
//         messages: [
//             { value: 'Hello KafkaJS user!' },
//         ],
//     })
//     kafka.logger().info('Message sent successfully');
//     console.log('Message sent successfully');
//     await producer.disconnect()
// }
// run().catch(console.error)
//        }
// }
