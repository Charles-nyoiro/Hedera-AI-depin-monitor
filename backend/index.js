import express from "express";
import bodyParser from "body-parser";
import { evaluateNode } from "./aiProcessor.js";
import { createTopic, submitMessage } from "./hederaClient.js";

const app = express();
app.use(bodyParser.json());

let topicId;
(async ()=> {
  topicId = await createTopic();
  console.log("Hedera topic created:", topicId);
})();

app.post("/api/metrics", async (req, res) => {
  const metrics = req.body;
  const report = evaluateNode(metrics);
  const txInfo = await submitMessage(topicId, report);
  res.json({ report, txInfo, topicId });
});

app.listen(3001, ()=> console.log("Backend listening on port 3001"));
