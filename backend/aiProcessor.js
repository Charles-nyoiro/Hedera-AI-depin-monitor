export function evaluateNode(metrics) {
  let status = "healthy";
  if(metrics.temperature > 75 || metrics.cpu > 90) status = "alert";
  const summary = status === "alert"
    ? `Device ${metrics.deviceId} is at risk (temp ${metrics.temperature}°C, CPU ${metrics.cpu}%).`
    : `Device ${metrics.deviceId} is operating normally.`;
  return { deviceId: metrics.deviceId, status, summary, timestamp: new Date().toISOString() };
}
