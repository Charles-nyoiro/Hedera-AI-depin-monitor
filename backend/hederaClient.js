import { Client, TopicCreateTransaction, TopicMessageSubmitTransaction } from "@hashgraph/sdk";

const operatorId = process.env.OPERATOR_ID;
const operatorKey = process.env.OPERATOR_KEY;

const client = Client.forTestnet();
client.setOperator(operatorId, operatorKey);

export async function createTopic() {
  const tx = await new TopicCreateTransaction().execute(client);
  const receipt = await tx.getReceipt(client);
  return receipt.topicId.toString();
}

export async function submitMessage(topicId, message) {
  const tx = await new TopicMessageSubmitTransaction({
    topicId,
    message: JSON.stringify(message)
  }).execute(client);
  const receipt = await tx.getReceipt(client);
  return { status: receipt.status.toString(), transactionId: tx.transactionId.toString() };
}
