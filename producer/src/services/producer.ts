import { Kafka, Partitioners } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'products',
  brokers: ['localhost:9092'],
  // retry: {
  //   initialRetryTime: 30000, /// 3 seconds
  //   retries: 5
  // }
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

async function connectProducer() {
  await producer.connect();
  console.log('Kafka producer connected');
}

connectProducer().catch(console.error);

export { producer };

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