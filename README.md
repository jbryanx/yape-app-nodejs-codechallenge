# Yape Challenge Code

## Overview
This project ensures secure financial transactions by seamlessly integrating an anti-fraud microservice. This solution validates every transaction, providing real-time status updates for enhanced security and transparency in the financial operations.

## Architecture
Microservices architecture, where a financial transaction triggers validation through an anti-fraud microservice, seamlessly updating its status based on a defined rule set. Transactions exceeding 1000 are automatically rejected, ensuring a dynamic and secure system with statuses of pending, approved, or rejected.
1. Transaction Microservice
- createTransaction(transactionDetails):  Initiates a new financial transaction with the provided details.
- updateTransaction(transactionId, newStatus): Updates the status of a transaction based on the result of anti-fraud validation.
- getTransactionStatus(transactionId): Retrieves the current status of a given transaction.
2. Antifraud Microservice
- validateTransaction(transactionDetails): Performs anti-fraud checks on the transaction.

## Tech Stack
- Server: NodeJS v.16.17.0
- Programming language: Typescript v4
- Framework: ExpressJS
- DB: PostgreSql
- ORM: TypeORM
- MS communications: Apache Kafka
- Logging: Log4js
- Unit testing: Jest

### ms-transaction-api
lorem ipsum dolor sit amet...

### ms-antifraud-api
lorem ipsum dolor sit amet...

### Enviroment vars
- server=localhost // DB server path
- port=5432 // DB server port
- database=bd1 // DB name
- username=postgres // DB username
- password=postgres // DB password
- antifraud=https://localhost:9999 // antifraud path

### Kafka
lorem ipsum dolor sit amet...

### Antifraud service
lorem ipsum dolor sit amet...

### Logs
lorem ipsum dolor sit amet...

#### Optionals
lorem ipsum dolor sit amet...
