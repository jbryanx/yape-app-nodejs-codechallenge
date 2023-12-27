# Yape Challenge Code

## Overview
This project ensures secure financial transactions by seamlessly integrating an anti-fraud microservice. This solution validates every transaction, providing real-time status updates for enhanced security and transparency in the financial operations.

## Architecture
Microservices architecture, where a financial transaction triggers validation through an anti-fraud microservice, seamlessly updating its status based on a defined rule set. Transactions exceeding 1000 are automatically rejected, ensuring a dynamic and secure system with statuses of pending, approved, or rejected.

### Transactions Microservice
- createTransaction(transactionDetails):  Initiates a new financial transaction with the provided details.
- updateTransactionStatus(transactionId, newStatus): Updates the status of a transaction based on the result of anti-fraud validation.
- getTransactionStatus(transactionId): Retrieves the current status of a given transaction.

### Anti-fraud Microservice
- validateTransaction(transactionDetails): Performs anti-fraud checks on the transaction.

## Tech stack
- Server: NodeJS v.16.17.0
- Programming language: Typescript v4
- Framework: ExpressJS
- DB: PostgreSql
- ORM: TypeORM
- MS communications: Apache Kafka
- Logging: Log4js
- Unit testing: Jest

### Enviroment vars
- server=localhost // DB server path
- port=5432 // DB server port
- database=bd1 // DB name
- username=postgres // DB username
- password=postgres // DB password
- antifraud=https://localhost:9999 // antifraud path

### Logs
Using log4js for each microservice, communications and persistance.

## Optionals
To address the high-volume scenarios with a significant amount of concurrent reads and writes for transaction data, especially when utilizing GraphQL, you can employ the following strategies:

### Database Sharding:
Distribute the transaction data across multiple database servers based on a shard key (e.g., transaction ID, user ID). This allows for parallel reads and writes, improving overall throughput.

### Caching:
Implement caching mechanisms, both at the GraphQL layer and the database layer, to reduce the load on the database for frequently accessed data. Consider using in-memory caches or distributed caching solutions.

### GraphQL Batch Processing:
Leverage GraphQL batch processing techniques to efficiently fetch and process multiple requests in a single database query. Tools like DataLoader can help in batching and caching requests to optimize database interactions.

### Indexes and Database Optimization:
Ensure that the database is properly indexed based on the common query patterns in your GraphQL schema. Optimize database queries and schema design to minimize the impact of high read and write volumes.

### Read Replicas:
Set up read replicas of the database to handle read-intensive operations. This allows for horizontal scaling of read operations, distributing the load across multiple replica servers.

### Asynchronous Processing:
For operations that do not require real-time responses, consider using asynchronous processing. Offload time-consuming tasks, such as sending notifications or performing background validations, to separate worker processes or queues.

### Load Balancing:
Employ load balancing techniques at both the GraphQL layer and the database layer to distribute incoming requests evenly across multiple servers. This helps prevent bottlenecks and ensures better resource utilization.

### Connection Pooling:
Use connection pooling to manage database connections efficiently. This helps avoid the overhead of opening and closing connections for each transaction, improving the overall performance of the system.

### Caching at the GraphQL Layer:
Implement result caching at the GraphQL layer to store and reuse the results of frequently executed queries. This can significantly reduce the load on the underlying systems.

### Optimistic Updates:
Implement optimistic updates in the GraphQL layer, allowing the client to assume the success of a mutation while the actual update is being processed in the background. This enhances the perceived performance for users.
