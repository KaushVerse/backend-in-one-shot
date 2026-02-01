# 🧠 Memory Management in Node.js (V8 Deep Dive)

> **Goal:** Samajhna ki memory kaise allocate hoti hai, GC kaise kaam karta hai,
> aur production apps me **memory leaks kaise pakde aur roke**.

---

## 🧩 Big Picture

Node.js me memory management ka center hai **V8 Engine**.

```
Your JS Code
   ↓
Stack  +  Heap
   ↓
Garbage Collector (V8)
   ↓
OS Memory
```

👉 Performance + stability = **memory discipline**

---

## 📦 Memory Areas

### 🧵 Stack (Fast & Small)

* Function calls
* Primitive values
* Execution context

```js
function add(a, b) {
  return a + b; // stack
}
```

✅ Super fast
❌ Limited size (stack overflow possible)

---

### 🗄️ Heap (Big & Flexible)

* Objects
* Arrays
* Closures
* Functions

```js
const user = { name: "Kaush", age: 21 };
```

✅ Dynamic allocation
❌ Needs Garbage Collection

---

## 🧹 Garbage Collection (GC)

V8 uses **Generational Garbage Collection**.

### 🍼 Young Generation

* New objects
* Short‑lived data
* Fast GC (Minor GC)

### 🧓 Old Generation

* Long‑living objects
* Slower GC (Major GC)

⚠️ GC pauses = **Stop‑the‑World** ⏸️

---

## 🔄 GC Lifecycle (Simplified)

```
Allocate → Mark → Sweep → Compact
```

* **Mark:** Reachable objects
* **Sweep:** Unused objects removed
* **Compact:** Memory defragment

---

## 🚨 Common Memory Leaks (Real World)

### 1️⃣ Global Variables

```js
global.cache = [];
```

❌ Never released

---

### 2️⃣ Forgotten Timers

```js
setInterval(() => {
  console.log("running");
}, 1000);
```

❌ Interval never cleared

---

### 3️⃣ Closures Holding References

```js
function heavy() {
  const big = new Array(1e6).fill('*');
  return () => big.length;
}
```

❌ `big` never GC'ed

---

### 4️⃣ Growing Arrays / Maps

```js
const store = [];
app.get("/", () => store.push(req));
```

❌ Memory keeps growing

---

## 🧠 Heap vs RSS vs External Memory

* **Heap:** JS objects
* **RSS:** Total memory Node uses
* **External:** Buffers, native libs

📌 Buffers live **outside heap**

---

## 📊 Monitoring Memory

### 🛠️ process.memoryUsage()

```js
console.log(process.memoryUsage());
```

Key fields:

* rss
* heapTotal
* heapUsed
* external

---

### 🔍 Heap Snapshots

* Chrome DevTools
* `--inspect`
* Take snapshot
* Compare growth

---

## 🧪 Reproduce a Memory Leak

```js
const leaky = [];
setInterval(() => {
  leaky.push(new Array(100000).fill('x'));
}, 1000);
```

📈 Watch heap grow

---

## 🛑 GC Tuning (Advanced)

### Increase heap size

```bash
node --max-old-space-size=4096 app.js
```

⚠️ Temporary fix, not solution

---

## ⚡ Best Practices (Production Gold)

✅ Avoid globals
✅ Clear timers
✅ Limit caches
✅ Use streams for large data
✅ Prefer short‑lived objects

---

## 🧠 Memory vs Performance

* Frequent GC → latency spikes
* Huge heap → slow GC
* Small heap → frequent GC

🎯 Balance is key

---

## 🧠 Interview Gold ✨

> **GC pauses impact latency**

> **Memory leaks are logical, not GC bugs**

> **Buffers are outside V8 heap**

---

## 📌 TL;DR

* Stack = fast, small
* Heap = dynamic, GC‑managed
* GC is generational
* Leaks come from references
* Measure > Guess
