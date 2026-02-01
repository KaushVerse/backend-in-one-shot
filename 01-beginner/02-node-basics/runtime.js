/**
 * runtime.js
 * ----------------------------------------
 * Goal: Understand how Node.js Runtime works
 * - Sync vs Async
 * - Event Loop order
 * - Microtasks vs Macrotasks
 * - Libuv Thread Pool
 * - Blocking danger
 */

const fs = require("fs");
const crypto = require("crypto");

console.log("🚀 Program start");

/* ===============================
   1️⃣ Synchronous (Blocking)
================================ */
console.log("🧱 Sync task start");

function blockingTask(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}

blockingTask(100); // ⚠️ Blocks event loop

console.log("🧱 Sync task end");

/* ===============================
   2️⃣ Timers (Macrotask)
================================ */
setTimeout(() => {
  console.log("⏲️ setTimeout 0ms");
}, 0);

setImmediate(() => {
  console.log("🚀 setImmediate");
});

/* ===============================
   3️⃣ Microtasks (High Priority)
================================ */
Promise.resolve().then(() => {
  console.log("⚡ Promise.then");
});

process.nextTick(() => {
  console.log("🔥 process.nextTick");
});

/* ===============================
   4️⃣ Async I/O (Libuv)
================================ */
fs.readFile(__filename, () => {
  console.log("📂 fs.readFile (async I/O)");
});

/* ===============================
   5️⃣ Thread Pool (CPU heavy)
================================ */
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
  console.log("🔐 crypto.pbkdf2 done (thread pool)");
});

/* ===============================
   6️⃣ Async vs Sync FS
================================ */
fs.readFileSync(__filename);
console.log("📛 fs.readFileSync done (blocking)");

/* ===============================
   End
================================ */
console.log("🏁 Program end");
