# 🚀 Node.js Runtime – Deep Dive

> **Goal:** Node.js runtime ko itna clearly samajhna ki tumhe pata ho
> *JavaScript ka code kaise execute hota hai, kaun kaam karta hai, aur performance kahan jeetti ya haarti hai.*

---

## 🧠 What is Node.js Runtime?

**Node.js Runtime** ek environment hai jo JavaScript ko **browser ke bahar** run karne deta hai.

🔹 Browser JS = DOM + Window APIs
🔹 Node.js JS = Server-side + System access

👉 Runtime = **Engine + APIs + Event Loop + System Glue**

---

## 🧩 High-Level Architecture

```
JavaScript Code
      ↓
V8 Engine (JS Execution)
      ↓
Node APIs (fs, http, timers)
      ↓
Libuv (Event Loop + Thread Pool)
      ↓
Operating System
```

Socho runtime ko ek **factory** jaise:

* JS = instructions
* V8 = worker
* Libuv = manager
* OS = machines

---

## ⚙️ Core Components Breakdown

### 🟡 1. V8 Engine

🧠 Google ka JavaScript engine

**Responsibilities:**

* JS code ko machine code me convert
* Memory allocate karta (Heap + Stack)
* Garbage Collection

📌 Important:

* V8 **sirf JS samajhta hai**
* fs, http, setTimeout → V8 ka part nahi

---

### 🟢 2. Node.js APIs

Node ke khud ke APIs jo browser me nahi milte:

* 📂 fs (file system)
* 🌐 http / https
* ⏱️ timers (setTimeout, setInterval)
* 🔐 crypto
* 🧵 worker_threads

⚠️ Ye APIs internally **C/C++** me likhi hoti hain

---

### 🔵 3. Libuv

Libuv = Node.js ka **backbone** 💪

**Kaam:**

* Event Loop chalana
* Async I/O handle karna
* Thread Pool manage karna

📌 Thread Pool size (default):

```
UV_THREADPOOL_SIZE = 4
```

Used for:

* fs
* crypto
* DNS
* compression

---

### 🔁 4. Event Loop

Event Loop decide karta hai:

> *Next kaunsa task execute hoga?*

**Phases:**

1. ⏲️ Timers
2. 📥 I/O callbacks
3. 💤 Idle / Prepare
4. 🔄 Poll
5. 🚀 Check (setImmediate)
6. ❌ Close callbacks

📌 Microtasks (higher priority):

* process.nextTick
* Promise.then

---

## 🧵 Single Threaded ≠ Single Worker

❌ Myth: Node.js single-threaded hai

✅ Reality:

* JS execution = single thread
* I/O = background threads

```
JS Thread → Event Loop
           ↘ Thread Pool (fs, crypto)
```

Isliye Node **fast** lagta hai 🔥

---

## 🚧 Blocking vs Non-Blocking (Runtime POV)

### 🔒 Blocking

```js
fs.readFileSync('data.txt');
```

❌ Event loop ruk jaata hai

### 🔓 Non-Blocking

```js
fs.readFile('data.txt', cb);
```

✅ Event loop free rehta hai

📌 Runtime ka golden rule:

> **Never block the event loop**

---

## 🧠 Memory Model

### 📦 Stack

* Function calls
* Primitive values

### 🗄️ Heap

* Objects
* Closures
* Arrays

### 🧹 Garbage Collector

* Unused memory clean karta
* Stop-the-world pauses possible

---

## ⚡ How Async Code Actually Runs

```js
setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
console.log('C');
```

### 🧾 Output:

```
C
B
A
```

📌 Kyun?

* Sync → first
* Microtasks → second
* Timers → last

---

## 🧪 Performance Implications

🚀 Fast when:

* I/O heavy
* Many concurrent users

🐢 Slow when:

* CPU heavy tasks
* Large synchronous loops

👉 Solution:

* worker_threads
* clustering
* offload to services

---

## 🛠️ When Runtime Knowledge Saves You

* Memory leaks debug
* High CPU usage
* Slow APIs
* Event loop lag
* Scaling decisions

---

## 🧠 Mental Model (Interview Gold ✨)

> **Node.js Runtime = V8 + Libuv + Node APIs + Event Loop**

> **JS single-threaded hai, Node multi-threaded ka fayda uthata hai**

---

## 📌 TL;DR

* V8 executes JS
* Libuv handles async
* Event loop schedules work
* Thread pool does heavy lifting
* OS does actual I/O
