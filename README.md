# Instructions to Start Zookeeper and Kafka with Kafka Producer and Consumer Services

Follow the steps below to set up and run Zookeeper, Kafka, Kafka Producer, and Kafka Consumer services using Docker containers.

## Step 1: Start Zookeeper Container

```bash
docker run -p 2181:2181 zookeeper
```

This command starts a Zookeeper container and exposes port 2181.

## Step 2: Start Kafka Container

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

Replace `<PRIVATE_IP>` with the actual private IP address of your machine. This command starts a Kafka container, exposes port 9092, and sets up necessary environment variables.

## Step 3: Configure the node application

Install all the packegs

```bash
npm install
```

Then replace `<PRIVATE_IP>` with the actual private IP address of your machine in the client.js file

```bash
brokers: ["<PRIVATE_IP>:9092"]
```

## Step 4: Start the Producer Service

```bash
npm run produce
```

This command starts the Kafka Producer service.

## Step 5: Start the Consumer Service

```bash
npm run consume --usergrp="USER-GROUP"
```

Replace `"USER-GROUP"` with the user group you want to assign. This command starts the Kafka Consumer service.

Make sure to install Node.js and npm dependencies before running the producer and consumer services.

That's it! You have successfully started Zookeeper, Kafka, Kafka Producer, and Kafka Consumer services.
```

Make sure to replace `<PRIVATE_IP>` and `"USER-GROUP"` with the appropriate values before running the commands.