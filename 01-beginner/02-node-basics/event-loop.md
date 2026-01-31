# 🔄 Event Loop – Deep Dive (Best UI + Icons)

---

## 🔰 Event Loop kya hota hai?

🧠 **Event Loop** JavaScript ka **heart** hai.

> Ye decide karta hai:
> **kaunsa code kab execute hoga** — sync ya async.

---

## 📦 One-Line Definition

🔁 **Event Loop** =

* Call Stack
* Task Queues
* Microtask Queue
* Browser / Runtime APIs

In sab ke beech **coordination system**.

---

## ⚙️ JavaScript Runtime Components

### 🧱 1️⃣ Call Stack

* 🧠 JS ka execution stack
* Sync code yahin run hota hai

Example:

```
function a() {
  b();
}
function b() {}
a();
```

---

### 🌐 2️⃣ Web / Runtime APIs

Provided by:

* 🌍 Browser
* 🟢 Node.js

Examples:

* ⏱️ setTimeout
* 🌐 fetch
* 🎧 DOM events

> Async ka kaam yahin hota hai

---

### 📥 3️⃣ Callback / Task Queue (MacroTask)

Contains:

* ⏰ setTimeout
* ⏲️ setInterval
* 🖱️ UI events

Wait karta hai jab:

* Call Stack empty ho

---

### ⚡ 4️⃣ Microtask Queue

🔥 **Highest priority queue**

Contains:

* 🔐 Promise.then / catch
* 🧬 queueMicrotask
* 🧠 MutationObserver

> Microtasks **hamesha pehle** execute hote hain

---

## 🔄 Event Loop Flow (Step-by-Step)

```
1️⃣ Execute sync code (Call Stack)
2️⃣ Move async callbacks to queues
3️⃣ Empty Microtask Queue
4️⃣ Execute one MacroTask
5️⃣ Repeat 🔁
```

---

## 🧪 Simple Example

```
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');
```

### 🧾 Output Order

```
A
D
C
B
```

Why?

* Sync → A, D
* Microtask → C
* MacroTask → B

---

## ⚡ Microtask vs MacroTask

| Feature   | Microtask ⚡               | MacroTask 🧱     |
| --------- | ------------------------- | ---------------- |
| Priority  | 🔥 Highest                | ⬇️ Lower         |
| Examples  | Promise                   | setTimeout       |
| Execution | Stack empty → immediately | After microtasks |

---

## 🎭 Real-World Analogy

🎤 **Event Loop = Stage Manager**

* Actors (functions) ready
* VIP guests (microtasks) first
* Normal guests (macrotasks) later

---

## 🌐 Event Loop in Browser

Handles:

* UI rendering 🎨
* DOM events 🖱️
* Network calls 🌍

⚠️ Long sync task = UI freeze 🧊

---

## 🟢 Event Loop in Node.js

Extra phases:

* 🧩 Timers
* 🧩 I/O callbacks
* 🧩 Poll
* 🧩 Check (setImmediate)

But concept same:

> Stack → Microtasks → Tasks

---

## ⚛️ Event Loop + React

Why it matters:

* setState async hota hai
* Batching hoti hai
* UI updates scheduled

Bad understanding =

* ❌ UI lag
* ❌ unexpected renders

---

## 🧠 Common Mistakes

❌ Thinking setTimeout(0) runs immediately
❌ Ignoring microtasks
❌ Blocking call stack

---

## 🧪 Performance Tips

✅ Avoid heavy sync loops
✅ Use async/await
✅ Break tasks using setTimeout / requestIdleCallback

---

## 🔚 Final Summary

🔄 Event Loop:

* JS ko async banata hai
* UI ko responsive rakhta hai
* Modern JS ka backbone

> 🧠 **Event Loop samjha = JS samjha**

---

## 📌 One-Line Memory Trick

🔁 **Call Stack → Microtask → MacroTask**

---