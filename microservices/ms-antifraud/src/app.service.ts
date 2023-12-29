import { Inject, Injectable } from '@nestjs/common';
import { StatusEnum, TransactionDto } from './models/Transaction.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ValidationDto } from './models/validation.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANTIFRAUD_MICROSERVICE')
    private readonly antifraudClient: ClientKafka,
  ) {}

  getTransaction(transaction: TransactionDto) {
    const status = this.validateTransaction(transaction);
    this.sendStatus(transaction.id, status);
  }

  validateTransaction(transaction: TransactionDto): StatusEnum {
    return transaction.value > 1000 ? StatusEnum.REJECTED : StatusEnum.APPROVED;
  }

  sendStatus(id: string, status: StatusEnum) {
    console.log(id, status);
    const validation: ValidationDto = {
      id: id,
      status: status,
    };
    this.antifraudClient.emit('validations-topic', JSON.stringify(validation));
  }
}
