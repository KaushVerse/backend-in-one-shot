# 🌊 Streams in Node.js – Deep Dive (Zero-Copy Power)

> **Goal:** Samajhna ki Streams **kyon Node.js ka sabse powerful feature** hain,
> kaise ye memory bachate hain, aur production systems me **large data** kaise handle hota hai.

---

## 🧠 What are Streams?

**Streams** = data ko **chunk-by-chunk** process karna instead of ek saath load karna.

📌 Simple analogy:

> **Bucket se pani peene ke bajaye pipe se pani peena** 🚰

---

## 🧩 Why Streams Matter (Real Pain)

❌ Without streams:

```js
const data = fs.readFileSync('1GB.mp4'); // 💥 RAM dead
```

✅ With streams:

```js
fs.createReadStream('1GB.mp4').pipe(res);
```

🔥 Same result, **90% less memory**

---

## 📦 Types of Streams

### 1️⃣ Readable Stream 📥

* Data **consume** karta hai
* Examples:

  * fs.createReadStream
  * HTTP request

---

### 2️⃣ Writable Stream 📤

* Data **write** karta hai
* Examples:

  * fs.createWriteStream
  * HTTP response

---

### 3️⃣ Duplex Stream 🔄

* Read + Write dono
* Example:

  * TCP socket

---

### 4️⃣ Transform Stream 🔁 (🔥 Most Powerful)

* Input → process → output
* Examples:

  * gzip
  * crypto

---

## 🔗 Stream Pipeline (Mental Model)

```
Readable → Transform → Writable
```

Pipeline = **assembly line** 🏭

---

## 🧪 Basic Stream Example

```js
const fs = require('fs');

const read = fs.createReadStream('input.txt');
const write = fs.createWriteStream('output.txt');

read.pipe(write);
```

📌 Automatic backpressure handling

---

## 🚦 Backpressure (Very Important ⚠️)

> Jab writer slow ho aur reader fast ho

Streams automatically:

* Pause reader
* Resume when ready

🔥 Ye hi reason hai streams **safe** hote hain

---

## 🔄 Stream Modes

### 🧵 Flowing Mode

* Data auto flow hota hai
* `data` event

### 🧍 Paused Mode

* Manual read
* `.read()`

---

## 🧠 HighWaterMark

```js
fs.createReadStream('file', {
  highWaterMark: 64 * 1024
});
```

📌 Chunk size control

Trade-off:

* Small chunk → more overhead
* Big chunk → more memory

---

## 🔁 Transform Stream Example

```js
const { Transform } = require('stream');

const upper = new Transform({
  transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
});

process.stdin.pipe(upper).pipe(process.stdout);
```

🔥 Real-time processing

---

## 📦 Streams vs Buffers

| Buffers       | Streams      |
| ------------- | ------------ |
| Load all data | Chunked data |
| High memory   | Low memory   |
| Simple        | Scalable     |

---

## 🌐 Streams in HTTP (Production Use)

```js
http.createServer((req, res) => {
  fs.createReadStream('video.mp4').pipe(res);
});
```

🎥 Video streaming, file download

---

## 🧠 Streams & Memory Management

* Minimal heap usage
* No large buffers
* GC pressure kam

👉 Perfect with **memory-management.md**

---

## 🚨 Common Mistakes

❌ readFile for large files
❌ Ignoring errors
❌ Not closing streams

```js
read.on('error', console.error);
```

---

## ⚡ Best Practices (Production Gold)

✅ Always use `pipeline()`

```js
const { pipeline } = require('stream');
```

✅ Handle errors
✅ Tune highWaterMark

---

## 🧠 Interview Gold ✨

> **Streams enable backpressure handling**

> **Transform streams allow real-time data processing**

> **Streams reduce memory footprint drastically**

---

## 📌 TL;DR

* Streams = chunk-based processing
* Low memory, high scalability
* Backpressure is automatic
* Essential for large data
