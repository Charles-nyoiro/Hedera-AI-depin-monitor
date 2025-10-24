import React, { useState } from "react";

export default function App() {
  const [deviceId, setDeviceId] = useState("node‑1");
  const [cpu, setCpu] = useState(20);
  const [temp, setTemp] = useState(50);
  const [response, setResponse] = useState(null);

  const sendMetrics = async () => {
    const metrics = { deviceId, cpu: Number(cpu), temperature: Number(temp), uptime: 12345 };
    const res = await fetch("/api/metrics", {
      method: "POST",
      headers: { "Content‑Type": "application/json" },
      body: JSON.stringify(metrics)
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>DePIN Node Monitor</h1>
      <div>
        <label>Device ID: <input value={deviceId} onChange={e=>setDeviceId(e.target.value)} /></label><br/>
        <label>CPU %: <input value={cpu} onChange={e=>setCpu(e.target.value)} /></label><br/>
        <label>Temperature °C: <input value={temp} onChange={e=>setTemp(e.target.value)} /></label><br/>
        <button onClick={sendMetrics}>Send Metrics & Log</button>
      </div>
      {response && (
        <div style={{ marginTop: 20 }}>
          <h2>AI Report</h2>
          <p>{response.report.summary}</p>
          <h3>Hedera TX Info</h3>
          <pre>{JSON.stringify(response.txInfo, null, 2)}</pre>
          <h3>Topic ID</h3>
          <pre>{response.topicId}</pre>
        </div>
      )}
    </div>
  );
}
