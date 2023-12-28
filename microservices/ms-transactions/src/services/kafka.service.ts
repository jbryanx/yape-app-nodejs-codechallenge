import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.clientID ? process.env.clientID : 'yape-kafka',
        brokers: [
          process.env.kafkaServer ? process.env.kafkaServer : 'localhost:9092',
        ],
      },
      consumer: {
        groupId: process.env.groupId
          ? process.env.groupId
          : 'yape-kafka-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf(
      process.env.topic ? process.env.topic : 'transactions-topic',
    );
    await this.client.connect();
  }

  sendMessage(message: string) {
    return this.client
      .send('transactions-topic', message)
      .subscribe((m) => console.log('Message: ' + m));
  }
}
