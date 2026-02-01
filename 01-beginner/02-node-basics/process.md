# ⚙️ process in Node.js – Runtime Control Center

> **Goal:** Samajhna ki `process` object kaise Node.js app ko **OS se connect** karta hai,
> environment variables, lifecycle, signals, exit codes, aur production control kaise hota hai.

---

## 🧠 What is `process`?

`process` ek **global object** hai jo current Node.js process ko represent karta hai.

📌 Simple line:

> **process = Node.js app ka bridge to Operating System** 🧠↔️🖥️

Iske bina:

* env variables ❌
* signals ❌
* exit codes ❌

---

## 🧩 Process Lifecycle (High Level)

```
Start → Execute JS → Event Loop → Exit
```

Node process tab tak zinda rehta hai jab tak:

* Call stack empty na ho
* Event loop me pending work ho

---

## 🌍 Environment Variables (`process.env`)

```js
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
```

📌 Env vars hamesha **strings** hote hain ⚠️

```js
const port = Number(process.env.PORT || 3000);
```

---

## 🧭 Process Arguments (`process.argv`)

```bash
node app.js --port 4000
```

```js
console.log(process.argv);
```

Use cases:

* CLI tools
* Feature flags
* Debug modes

---

## ⏱️ Process Timing

### 🕒 process.uptime()

```js
console.log(process.uptime()); // seconds
```

### ⏲️ High‑resolution time

```js
const start = process.hrtime.bigint();
// work
const end = process.hrtime.bigint();
console.log(Number(end - start) / 1e6, 'ms');
```

---

## 🧠 Memory Insight (`process.memoryUsage()`)

```js
console.log(process.memoryUsage());
```

Fields:

* rss
* heapTotal
* heapUsed
* external

👉 Relates directly to **memory-management.md**

---

## 🚦 Exit Codes

```js
process.exit(0); // success
process.exit(1); // failure
```

📌 Best practice:

> Let Node exit naturally unless absolutely needed

---

## ⚡ Process Events

### 🏁 exit

```js
process.on('exit', code => {
  console.log('Exiting with code', code);
});
```

❌ Async work yahan allowed nahi

---

### 💥 uncaughtException (Danger Zone ⚠️)

```js
process.on('uncaughtException', err => {
  console.error(err);
  process.exit(1);
});
```

📌 Log → restart process

---

### 🔥 unhandledRejection

```js
process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});
```

---

## 🚨 Signals (Production Gold)

Signals = OS → process messages

Common signals:

* SIGINT  (Ctrl + C)
* SIGTERM (Docker / K8s)

```js
process.on('SIGTERM', () => {
  console.log('Graceful shutdown');
  server.close(() => process.exit(0));
});
```

🔥 Graceful shutdown = pro move

---

## 🧵 process.nextTick (Microtask)

```js
process.nextTick(() => {
  console.log('Runs before Promise.then');
});
```

📌 Highest priority microtask

⚠️ Overuse = event loop starvation

---

## 🖥️ Working Directory

```js
process.cwd();  // current working dir
process.chdir('..');
```

---

## 🔐 process.env Best Practices

❌ Hardcoding secrets
❌ Committing .env files

✅ Use env vars
✅ Validate at startup

---

## 🧠 Interview Gold ✨

> **Node exits when event loop is empty**

> **process is a global object**

> **SIGTERM should trigger graceful shutdown**

---

## 📌 TL;DR

* `process` connects Node to OS
* env, argv, signals, exit codes
* Critical for production readiness