import { Kafka, logLevel } from 'kafkajs';
import * as Models from './models/models'; // Adjust the path as necessary


// Replace with your Kafka broker, username, password, and topic
const kafkaBroker = 'kafka.callyour.ai:9095';
const username = 'llmservice_user';
const password = '22b389f67b25426775e74b2a00bcd91a';
const topic = 'streamingAnswerTopic';

// Initialize Kafka instance with SASL/PLAIN authentication
const kafka = new Kafka({
  clientId: 'test-producer',
  brokers: [kafkaBroker],
  sasl: {
    mechanism: 'plain', // SASL/PLAIN authentication
    username: username,
    password: password,
  },
  logLevel: logLevel.INFO,
});

const producer = kafka.producer();

// Create a StreamingAnswerPayload instance
const streamingAnswerPayload = new Models.StreamingAnswerPayload({
  id: 'b240c9c4-723e-4e4e-9361-6ef53342d5e2', // the same id when creating the the question
  timestamp: new Date().toISOString(),
  userId: '1bb02726-d0dc-47d3-b235-8e666e87c87b',
  message: 'This is a streaming answer message',
  agentId: '1bb02726-d0dc-47d3-b235-8e666e87c87b',
  language: new Models.Language({ locale: 'en-US', probability: 1.0 }),
  destination: Models.Destination.CHAT,
  destinationParams: new Models.DestinationParams({ }),
  targetFormat: Models.TargetFormat.RESERVED_TEXT,
  author: Models.MessageAuthor.AGENT,
  completed: true,
  additionalProperties: new Map<string, any>([['customProperty', 'customValue']])
});

// Marshal the instance to a JSON string
const messagePayload = streamingAnswerPayload.marshal();

const produceMessage = async (): Promise<void> => {
  await producer.connect();
  try {
    const messageResult = await producer.send({
      topic: topic,
      messages: [
        { value: messagePayload },
      ],
    });
    console.log('Message sent successfully:', messageResult);
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    await producer.disconnect();
  }
};

produceMessage().catch(console.error);
