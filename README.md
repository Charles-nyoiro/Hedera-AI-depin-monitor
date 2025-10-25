# 🟣 Hedera Check-In dApp  
*A lightweight on-chain attendance system powered by the Hedera Consensus Service (HCS).*

---

## 🚀 Overview

**Hedera Check-In** is a simple decentralized application that lets users **“check in”** to an event or location, and stores each check-in as an immutable message on the **Hedera Hashgraph network**.

Each entry is recorded on a **Consensus Topic**, viewable via the **Hedera Mirror Node**, proving transparent and tamper-proof attendance.

---

## 🧠 Concept

- Instead of writing attendance to a private database, each check-in is published as a **Hedera Consensus Message (HCS)**.  
- The **Mirror Node** provides a public, timestamp-ordered log of every check-in.  
- Perfect for demos, event validation, or proof-of-presence applications.

---

## 🏗️ Architecture

# Hedera-AI-depin-monitor
The AI-Powered DePIN Node Monitor is a decentralized application (dApp) that uses Artificial Intelligence (AI) to analyze performance metrics from physical or edge devices (DePIN nodes) and stores the analysis immutably on Hedera.  This ensures transparent, tamper-proof infrastructure health monitoring.

---

## ⚙️ Tech Stack

| Layer | Tools Used |
|-------|-------------|
| Blockchain | Hedera Hashgraph (Testnet) |
| SDK | `@hashgraph/sdk` |
| Backend | Node.js + Express |
| Frontend | HTML + Vanilla JS |
| Hosting | Localhost or Vercel/Render (optional) |

---

## 🧩 Features

✅ Create a new Hedera Consensus Topic  
✅ Submit “check-in” messages with user names  
✅ View all check-ins from the Mirror Node API  
✅ Fully decentralized — no central database  
✅ Minimal & easy to understand for a 2-hour hackathon

---

## 🔧 Setup & Run

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/hedera-checkin.git
cd hedera-checkin

