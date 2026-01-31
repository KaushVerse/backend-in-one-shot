console.log('1️⃣ Sync Start');

// 🔹 setTimeout → MacroTask (Timers phase)
setTimeout(() => {
  console.log('6️⃣ setTimeout');
}, 0);

// 🔹 setImmediate → Check phase
setImmediate(() => {
  console.log('7️⃣ setImmediate');
});

// 🔹 Promise → Microtask
Promise.resolve().then(() => {
  console.log('4️⃣ Promise.then');
});

// 🔹 process.nextTick → Microtask (HIGHER priority than Promise)
process.nextTick(() => {
  console.log('3️⃣ process.nextTick');
});

// 🔹 I/O simulation
require('fs').readFile(__filename, () => {
  console.log('8️⃣ fs.readFile (I/O callback)');
});

console.log('2️⃣ Sync End');
