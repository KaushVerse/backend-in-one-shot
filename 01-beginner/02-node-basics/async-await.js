/**
 * async-await.js
 * Run: node async-await.js
 */

/* --------------------------------------------------
  1️⃣ async function basics
-------------------------------------------------- */

async function hello() {
  return 'Hello World';
}

hello().then(res => console.log('1️⃣', res));

/*
async function hamesha Promise return karta hai
return → Promise.resolve(value)
*/

/* --------------------------------------------------
  2️⃣ await keyword
-------------------------------------------------- */

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Resolved after ${ms}ms`);
    }, ms);
  });
}

async function demoAwait() {
  console.log('2️⃣ Before await');
  const result = await delay(1000);
  console.log('3️⃣', result);
  console.log('4️⃣ After await');
}

demoAwait();

/* --------------------------------------------------
  3️⃣ async = non-blocking
-------------------------------------------------- */

async function nonBlocking() {
  console.log('5️⃣ Start');

  delay(2000).then(() => console.log('8️⃣ Delay finished'));

  console.log('6️⃣ End');
}

nonBlocking();

/*
Output:
5️⃣ Start
6️⃣ End
(2 sec later)
8️⃣ Delay finished
*/

/* --------------------------------------------------
  4️⃣ await blocks ONLY async function
-------------------------------------------------- */

async function blockingInside() {
  console.log('9️⃣ Start');

  await delay(1000);

  console.log('🔟 After await');
}

console.log('Outside 1️⃣1️⃣');
blockingInside();
console.log('Outside 1️⃣2️⃣');

/*
Outside logs immediately
await sirf async function ko block karta hai
*/

/* --------------------------------------------------
  5️⃣ Error handling (try / catch)
-------------------------------------------------- */

function failPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject('❌ Something went wrong'), 500);
  });
}

async function errorHandling() {
  try {
    const res = await failPromise();
    console.log(res);
  } catch (err) {
    console.log('1️⃣3️⃣ Caught Error:', err);
  }
}

errorHandling();

/* --------------------------------------------------
  6️⃣ async-await vs then-catch
-------------------------------------------------- */

// then-catch
delay(500)
  .then(res => console.log('1️⃣4️⃣ then:', res))
  .catch(err => console.log(err));

// async-await
async function compare() {
  const res = await delay(500);
  console.log('1️⃣5️⃣ await:', res);
}
compare();

/* --------------------------------------------------
  7️⃣ Sequential vs Parallel execution
-------------------------------------------------- */

async function sequential() {
  console.time('Sequential');
  await delay(1000);
  await delay(1000);
  console.timeEnd('Sequential');
}

async function parallel() {
  console.time('Parallel');
  await Promise.all([
    delay(1000),
    delay(1000)
  ]);
  console.timeEnd('Parallel');
}

sequential().then(parallel);

/*
Sequential ≈ 2s
Parallel ≈ 1s
*/

/* --------------------------------------------------
  8️⃣ Promise.all / allSettled / race / any
-------------------------------------------------- */

async function promiseCombos() {
  const p1 = delay(500);
  const p2 = delay(1000);
  const p3 = Promise.reject('❌ Fail');

  // Promise.all (fail fast)
  try {
    await Promise.all([p1, p3]);
  } catch (e) {
    console.log('1️⃣6️⃣ Promise.all error:', e);
  }

  // Promise.allSettled
  const settled = await Promise.allSettled([p1, p3]);
  console.log('1️⃣7️⃣ allSettled:', settled);

  // Promise.race
  const race = await Promise.race([p1, p2]);
  console.log('1️⃣8️⃣ race:', race);
}

promiseCombos();

/* --------------------------------------------------
  9️⃣ async-await + Event Loop (Microtask)
-------------------------------------------------- */

async function eventLoopDemo() {
  console.log('1️⃣9️⃣ async start');

  await Promise.resolve();

  console.log('2️⃣0️⃣ async after await');
}

console.log('2️⃣1️⃣ sync before');
eventLoopDemo();
console.log('2️⃣2️⃣ sync after');

/*
Order:
sync before
async start
sync after
async after await
*/

/* --------------------------------------------------
 🔟 Common Mistakes
-------------------------------------------------- */

// ❌ Missing await
async function mistake1() {
  const res = delay(500); // Promise
  console.log('2️⃣3️⃣', res);
}
mistake1();

// ❌ await outside async (SyntaxError)
// await delay(1000);

/* --------------------------------------------------
  1️⃣1️⃣ Real-world API example (Node.js style)
-------------------------------------------------- */

function fakeApi(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'Mahi' });
    }, 800);
  });
}

async function getUser() {
  const user = await fakeApi(1);
  console.log('2️⃣4️⃣ User:', user);
}

getUser();

/* --------------------------------------------------
  1️⃣2️⃣ async-await = Synchronous looking Async
-------------------------------------------------- */

async function summary() {
  console.log(`
✅ async = Promise return
✅ await = pause async function
✅ try/catch = error handling
✅ Promise.all = parallel
✅ Clean, readable, powerful
  `);
}

summary();
