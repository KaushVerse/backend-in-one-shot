# 📂 Node.js `path` – Path Creation Deep Dive

> Node.js **path module** ka use file-system paths ko **safe, OS-independent** tareeke se create / resolve karne ke liye hota hai.

---

## 🛠 Path Creation APIs — Complete Table

| #️⃣ | 🛠 Path API                       | 🎯 Kya karta hai              | 🧠 Creation Logic                  | 🔎 Example                                       | 📤 Output        |
| --- | --------------------------------- | ----------------------------- | ---------------------------------- | ------------------------------------------------ | ---------------- |
| 1️⃣ | **`path.join([...paths])` 🔗**    | Multiple path parts jodta hai | Left → Right join + auto clean     | `path.join('src','utils','a.js')`                | `src/utils/a.js` |
| 2️⃣ | **`path.resolve([...paths])` 🧭** | Absolute path banata hai      | Right → Left resolve (cwd se)      | `path.resolve('src','a.js')`                     | `/cwd/src/a.js`  |
| 3️⃣ | **`path.format(obj)` 🏗**         | Object se path banata hai     | `dir + base` OR `name + ext`       | `path.format({ dir:'/a', name:'b', ext:'.js' })` | `/a/b.js`        |
| 4️⃣ | **`path.sep` ↔️**                 | OS-specific folder separator  | `/` (Unix) ya `\\` (Windows)       | `'a' + path.sep + 'b'`                           | `a/b`            |
| 5️⃣ | **`path.delimiter` ⛓**            | Env variable separator        | `:` (Linux/macOS) ya `;` (Windows) | `'PATH'.split(path.delimiter)`                   | Linux → `:`      |
| 6️⃣ | **`__dirname` 📍**                | Current file ka folder path   | File-based root                    | `path.join(__dirname,'log')`                     | `/project/log`   |
| 7️⃣ | **`process.cwd()` 📌**            | App ka run location           | Execution-based root               | `path.resolve(process.cwd(),'log')`              | `/project/log`   |

---

## 🧠 Important Difference — `__dirname` vs `process.cwd()`

| Aspect           | `__dirname` 📍      | `process.cwd()` 📌     |
| ---------------- | ------------------- | ---------------------- |
| Based on         | File location       | Command execution      |
| Change hota hai? | ❌ No                | ✅ Yes                  |
| Use when         | File-relative paths | Project / runtime root |

---

## 🏁 Final Tip

> ❌ Kabhi bhi paths manually `'/a/b/c'` mat banao
> ✅ Hamesha **Node.js `path` APIs** use karo — production safe hota hai 🚀

---

📌 Ye canvas interview, backend dev, aur real-world Node.js projects ke liye **ready reference** hai.
