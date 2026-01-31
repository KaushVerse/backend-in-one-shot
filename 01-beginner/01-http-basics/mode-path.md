# 📂 Node.js `path` – Master Deep Dive

> Node.js **path module** = filesystem paths ko **safe, predictable, OS‑independent** tareeke se handle karne ka standard tool.

---

## 🧱 Path Creation Deep Dive

| #️⃣ | 🛠 Path API                     | 🎯 Kya karta hai              | 🧠 Creation Logic              | 🔎 Example                                   | 📤 Output        |
| --- | ------------------------------- | ----------------------------- | ------------------------------ | -------------------------------------------- | ---------------- |
| 1️⃣ | **path.join([...paths]) 🔗**    | Multiple path parts jodta hai | Left → Right join + auto clean | `path.join('src','utils','a.js')`            | `src/utils/a.js` |
| 2️⃣ | **path.resolve([...paths]) 🧭** | Absolute path banata hai      | Right → Left resolve (cwd se)  | `path.resolve('src','a.js')`                 | `/cwd/src/a.js`  |
| 3️⃣ | **path.format(obj) 🏗**         | Object se path banata hai     | `dir+base` OR `name+ext`       | `path.format({dir:'/a',name:'b',ext:'.js'})` | `/a/b.js`        |
| 4️⃣ | **path.sep ↔️**                 | OS-specific separator         | `/` ya `\\`                    | `'a'+path.sep+'b'`                           | `a/b`            |
| 5️⃣ | **path.delimiter ⛓**            | Env path separator            | `:` ya `;`                     | `'PATH'.split(path.delimiter)`               | Linux `:`        |
| 6️⃣ | **__dirname 📍**                | Current file ka folder        | File-based root                | `path.join(__dirname,'log')`                 | `/project/log`   |
| 7️⃣ | **process.cwd() 📌**            | App run location              | Execution-based root           | `path.resolve(process.cwd(),'log')`          | `/project/log`   |

---

## 📚 Path Module – Core APIs (Master Table)

| #️⃣    | 🛠 Function / Prop  | 🎯 Purpose        | 🔎 Example                                   | 📤 Output        |
| ------ | ------------------- | ----------------- | -------------------------------------------- | ---------------- |
| 1️⃣    | path.join() 📂      | Paths safely join | `path.join('a','b','c')`                     | `a/b/c`          |
| 2️⃣    | path.resolve() 🧭   | Absolute path     | `path.resolve('a','b')`                      | `/cwd/a/b`       |
| 3️⃣    | path.normalize() 🧹 | Messy path clean  | `path.normalize('a//b/../c')`                | `a/c`            |
| 4️⃣    | path.extname() 📄   | File extension    | `path.extname('index.html')`                 | `.html`          |
| 5️⃣    | path.basename() 🏷  | File name         | `path.basename('/a/b/file.txt','.txt')`      | `file`           |
| 6️⃣    | path.dirname() 📂⬆️ | Parent folder     | `path.dirname('/a/b/file.txt')`              | `/a/b`           |
| 7️⃣    | path.parse() 🔍     | Path → object     | `path.parse('/a/b/file.txt')`                | `{dir,name,ext}` |
| 8️⃣    | path.format() 🏗    | Object → path     | `path.format({dir:'/a',name:'b',ext:'.js'})` | `/a/b.js`        |
| 9️⃣    | path.sep ↔️         | OS separator      | `'a'+path.sep+'b'`                           | `a/b`            |
| 🔟     | path.relative() 🛤  | Relative route    | `path.relative('/a/b','/a/c')`               | `../c`           |
| 1️⃣1️⃣ | path.delimiter ⛓    | Env separator     | `'PATH'.split(path.delimiter)`               | `:` / `;`        |
| 1️⃣2️⃣ | path.isAbsolute() ✅ | Absolute check    | `path.isAbsolute('/a/b')`                    | `true`           |

---

## 🧭 Path Navigation Deep Dive

| #️⃣ | 🛠 Path API          | 🎯 Kaam             | 🧠 Logic        | 🔎 Example                     | 📤 Output         |
| --- | -------------------- | ------------------- | --------------- | ------------------------------ | ----------------- |
| 1️⃣ | path.resolve() 🧭    | Absolute path       | Right → Left    | `path.resolve('src','app.js')` | `/cwd/src/app.js` |
| 2️⃣ | path.relative() 🛤   | Route between paths | from → to       | `path.relative('/a/b','/a/c')` | `../c`            |
| 3️⃣ | path.dirname() ⬆️    | Parent dir          | Ek level upar   | `path.dirname('/a/b/c.txt')`   | `/a/b`            |
| 4️⃣ | path.isAbsolute() 🏁 | Absolute check      | Root se start?  | `path.isAbsolute('/a/b')`      | `true`            |
| 5️⃣ | process.cwd() 📍     | Runtime root        | Execution based | `process.cwd()`                | `/project`        |
| 6️⃣ | __dirname 📂         | File folder         | File based      | `__dirname`                    | `/project/src`    |

---

## 🔍 Path Inspection Deep Dive

| #️⃣ | 🛠 Path API          | 🎯 Kya karta   | 🧠 Logic         | 🔎 Example                       | 📤 Output        |
| --- | -------------------- | -------------- | ---------------- | -------------------------------- | ---------------- |
| 1️⃣ | path.extname() 📄    | Extension      | Last `.` ke baad | `path.extname('app.js')`         | `.js`            |
| 2️⃣ | path.basename() 🏷   | File name      | Last segment     | `path.basename('/a/b/file.txt')` | `file.txt`       |
| 3️⃣ | path.dirname() 📂⬆️  | Parent path    | Last part remove | `path.dirname('/a/b/file.txt')`  | `/a/b`           |
| 4️⃣ | path.parse() 🧩      | Path → object  | root,dir,base    | `path.parse('/a/b/file.txt')`    | `{dir,name,ext}` |
| 5️⃣ | path.isAbsolute() 🏁 | Absolute check | Root based       | `path.isAbsolute('/a/b')`        | `true`           |

---

## 💡 Legend (Icons Meaning)

📂 Path / Folder
🧭 Absolute / Navigation
🧹 Clean / Normalize
📄 Extension
🏷 File name
⬆️ Parent dir
🔍 Parse
🏗 Build
↔️ Separator
🛤 Relative route
⛓ Env delimiter
✅ Check

---

## 🏁 Final Tip

> ❌ Kabhi hardcoded paths mat likho
> ✅ **Node.js `path` module** = cross‑platform + production safe 🔥
