# 📦 HTTP Headers & 🔢 Status Codes — Master Reference

> One-stop **clean UI + icons** reference for **HTTP Headers** and **Status Codes**.
> Perfect for **backend, frontend, DevOps, interviews**.

---

## 📦 HTTP HEADERS — COMPLETE MASTER TABLE

| #️⃣    | 📦 Header                           | 🎯 Purpose                 | 🔎 Example            | 🧠 Notes                    |
| ------ | ----------------------------------- | -------------------------- | --------------------- | --------------------------- |
| 1️⃣    | **Authorization** 🔐                | Auth credentials bhejna    | `Bearer eyJ...`       | JWT / OAuth tokens          |
| 2️⃣    | **Content-Type** 🧾                 | Body ka format batata      | `application/json`    | Server parsing depend karta |
| 3️⃣    | **Accept** 🎭                       | Client kya response chahta | `application/json`    | Content negotiation         |
| 4️⃣    | **User-Agent** 🕵️                  | Client identity            | `Mozilla/5.0`         | Browser / app info          |
| 5️⃣    | **Host** 🏠                         | Target domain              | `api.example.com`     | HTTP/1.1 me mandatory       |
| 6️⃣    | **Content-Length** 📏               | Body ka size               | `348`                 | Streaming me auto hota      |
| 7️⃣    | **Cache-Control** 🧊                | Caching rules              | `no-cache`            | Performance critical        |
| 8️⃣    | **Cookie** 🍪                       | Client cookies bhejta      | `sid=abc123`          | Session handling            |
| 9️⃣    | **Set-Cookie** 🍪➡️                 | Server cookie set karta    | `token=xyz; HttpOnly` | Response-only header        |
| 🔟     | **Origin** 🌍                       | Request origin batata      | `https://app.com`     | CORS ke liye                |
| 1️⃣1️⃣ | **Referer** 🔗                      | Pichla page                | `https://google.com`  | Analytics / security        |
| 1️⃣2️⃣ | **Access-Control-Allow-Origin** 🚦  | CORS allow                 | `*`                   | Browser security            |
| 1️⃣3️⃣ | **Access-Control-Allow-Methods** 🛂 | Allowed methods            | `GET,POST`            | Preflight response          |
| 1️⃣4️⃣ | **Access-Control-Allow-Headers** 🧩 | Allowed headers            | `Authorization`       | CORS config                 |
| 1️⃣5️⃣ | **If-None-Match** 🧬                | Cache validation           | `etag123`             | 304 ke sath                 |
| 1️⃣6️⃣ | **ETag** 🧬                         | Resource fingerprint       | `"abc"`               | Smart caching               |
| 1️⃣7️⃣ | **X-Forwarded-For** 🌐              | Real client IP             | `1.1.1.1`             | Proxies / LB                |
| 1️⃣8️⃣ | **X-Forwarded-Proto** 🔐            | http / https               | `https`               | SSL awareness               |
| 1️⃣9️⃣ | **Connection** 🔁                   | Keep-alive / close         | `keep-alive`          | HTTP/1.x                    |
| 2️⃣0️⃣ | **Upgrade** ⬆️                      | Protocol upgrade           | `websocket`           | WS handshake                |

---

## 🔢 HTTP STATUS CODES — COMPLETE TABLE

### ✅ 2xx — Success

| Code | Icon | Meaning    | Use Case       |
| ---- | ---- | ---------- | -------------- |
| 200  | ✅    | OK         | Normal success |
| 201  | 🆕   | Created    | POST success   |
| 202  | ⏳    | Accepted   | Async process  |
| 204  | 📭   | No Content | Delete / empty |

---

### 🔁 3xx — Redirect / Cache

| Code | Icon | Meaning           | Use Case           |
| ---- | ---- | ----------------- | ------------------ |
| 301  | 🔁   | Moved Permanently | SEO redirect       |
| 302  | 🚦   | Found             | Temporary redirect |
| 304  | 🧊   | Not Modified      | Cache hit          |

---

### ❌ 4xx — Client Errors

| Code | Icon | Meaning           | Use Case       |
| ---- | ---- | ----------------- | -------------- |
| 400  | ❌    | Bad Request       | Invalid JSON   |
| 401  | 🔐   | Unauthorized      | Token missing  |
| 403  | 🚫   | Forbidden         | No permission  |
| 404  | 🔍   | Not Found         | Wrong URL      |
| 409  | ⚔️   | Conflict          | Duplicate data |
| 422  | 🧪   | Validation Error  | Form errors    |
| 429  | ⏳    | Too Many Requests | Rate limit     |

---

### 💥 5xx — Server Errors

| Code | Icon | Meaning             | Use Case      |
| ---- | ---- | ------------------- | ------------- |
| 500  | 💥   | Internal Error      | App crash     |
| 502  | 🌉   | Bad Gateway         | Upstream down |
| 503  | 🛑   | Service Unavailable | Maintenance   |
| 504  | ⏰    | Gateway Timeout     | Slow server   |

---

## 🔁 Headers vs Status Codes — Quick Difference

| Aspect          | Headers 📦 | Status Codes 🔢  |
| --------------- | ---------- | ---------------- |
| Purpose         | Metadata   | Result indicator |
| Direction       | Both       | Response only    |
| Custom allowed  | ✅ Yes      | ❌ No             |
| Affects caching | ✅          | ✅                |

---

## 🏁 Final Tip

> **Headers = rules & metadata**
> **Status Codes = result signal**

Dono samajh liya = HTTP mastery 🔥
