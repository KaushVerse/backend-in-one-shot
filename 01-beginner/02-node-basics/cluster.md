# 🧠 Cluster in Node.js – Multi‑Core Scaling Deep Dive

> **Goal:** Samajhna ki Node.js apps **single core se aage kaise scale** karti hain,
> `cluster` module kaise kaam karta hai,
> aur production me **CPU utilization + reliability** kaise improve hoti hai.

---

## 🧩 The Core Problem

Node.js:

* JS runs on **single thread**
* Modern servers = **multiple CPU cores**

❓ Question:

> Ek core par kyun chale jab 8 available hain? 🤔

---

## 💡 What is `cluster`?

**cluster** Node.js ka built‑in module hai jo:

* Multiple **processes** spawn karta hai
* Har process apna:

  * Event loop
  * V8 instance
  * Memory space

📌 Simple line:

> **cluster = one Node app × many CPU cores** 💥

---

## 🧠 Cluster Architecture

```
          Load Balancer (OS / Node)
                   ↓
        ┌──────────┬──────────┐
        │          │          │
     Worker 1   Worker 2   Worker 3
     (PID)      (PID)      (PID)
```

* Master (Primary) process
* Multiple worker processes

---

## 🚀 Basic Cluster Example

```js
const cluster = require('cluster');
const os = require('os');

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;
  console.log(`Primary ${process.pid} running`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', worker => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  require('./server');
}
```

📌 Har worker ek alag Node process hai

---

## ⚖️ Load Balancing in Cluster

Node.js cluster uses:

* **Round‑robin** (default on Linux)
* OS‑level scheduling (some platforms)

👉 Incoming requests distribute ho jaate hain

---

## 🧠 Memory Model (Very Important ⚠️)

❌ Workers **memory share nahi karte**

```
Worker 1 Heap ❌ Worker 2 Heap
```

📌 Shared state = Redis / DB / IPC

---

## 🔄 Inter‑Process Communication (IPC)

```js
process.send({ type: 'ready' });
```

* Message passing
* Serialization cost

---

## 🧵 Cluster vs Worker Threads

| Cluster            | Worker Threads       |
| ------------------ | -------------------- |
| Multiple processes | Same process         |
| Separate memory    | Shared possible      |
| Safer isolation    | Faster communication |
| Heavy              | Lightweight          |

👉 CPU scaling → Cluster
👉 Parallel compute → Workers

---

## 🚨 When NOT to Use Cluster

❌ Small apps
❌ Memory‑heavy stateful apps
❌ Apps without load

---

## ⚡ When TO Use Cluster

✅ HTTP servers
✅ REST APIs
✅ WebSockets (with sticky sessions)

---

## 🔥 Cluster + Load Balancer (Real World)

Typical setup:

```
Nginx / ALB
     ↓
Clustered Node App
```

🔥 Production‑grade scaling

---

## 🛑 Common Mistakes

❌ Sharing in‑memory cache
❌ Not handling worker crashes
❌ Too many workers (context switching)

---

## 🧠 Interview Gold ✨

> **Cluster uses processes, not threads**

> **Each worker has its own event loop**

> **State must be externalized**

---

## 📌 TL;DR

* Node uses one core by default
* Cluster forks multiple processes
* Great for horizontal CPU scaling
* Needs external state management