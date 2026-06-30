<div align="center">

<!-- Animated Header Wave -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=7c6af7&height=120&section=header&text=GoatStore&fontSize=50&fontColor=ffffff&fontAlignY=35&animation=fadeIn&desc=Fast%20File%20Hosting%20for%20GoatBot&descAlignY=60&descColor=a78bfa"/>

<!-- Logo + Photo Side by Side -->
<table border="0" align="center">
<tr>
<td align="center" width="200">
<img src="https://i.imgur.com/8u69HqO.jpeg" width="130" height="130" style="border-radius:20px;"/>
<br/>
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=13&pause=1000&color=34D399&center=true&width=160&lines=GoatStore+v1.0;Always+Online+🟢;24h+Expiry" alt="typing"/>
</td>
<td width="60"></td>
<td align="center" width="200">
<img src="https://i.imgur.com/Tu50EvM.jpeg" width="130" height="130" style="border-radius:50%;border:3px solid #7c6af7;"/>
<br/>
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=13&pause=1000&color=7C6AF7&center=true&width=200&lines=Rocky+Chowdhury;GoatBot+Developer;Bangladesh+🇧🇩" alt="typing"/>
</td>
</tr>
</table>

<br/>

<!-- Badges -->
[![Live](https://img.shields.io/badge/🟢_Live-goatstore--phi.vercel.app-7c6af7?style=for-the-badge)](https://goatstore-phi.vercel.app)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![GoatBot](https://img.shields.io/badge/Built_for-GoatBot-34d399?style=for-the-badge)](https://github.com/ntkhang03/Goat-Bot-V2)
[![Made by](https://img.shields.io/badge/Made_by-Rocky_Chowdhury-ff6b9d?style=for-the-badge)](https://github.com/rocky-chowdhury)

<br/>

<!-- Animated divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

## ✨ Features

<img align="right" src="https://i.imgur.com/8u69HqO.jpeg" width="80" style="border-radius:12px; margin-left:16px;"/>

- ⚡ **Instant upload** — JS code paste করো, link পাও
- 👁️ **View only** — browser এ সরাসরি code দেখায়, download হয় না
- ⏱️ **Auto-expire** — ২৪ ঘণ্টা পর automatically delete
- 🤖 **GoatBot ready** — `draft.js` command দিয়ে সরাসরি bot থেকে upload
- 🌐 **Vercel KV** — serverless, fast, reliable storage

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

## 🚀 API Reference

### `POST /upload`

**Request:**
```json
{
  "content": "// your js code here"
}
```

**Response:**
```json
{
  "success": true,
  "id": "Cdgk1YJ-",
  "url": "https://goatstore-phi.vercel.app/raw/Cdgk1YJ-"
}
```

### `GET /raw/:id`

```
GET https://goatstore-phi.vercel.app/raw/:id
→ Returns: text/plain (২৪ ঘণ্টা valid)
```

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

## 🤖 GoatBot — `draft.js` Command

`draft.js` ফাইলটা রাখো → `modules/commands/draft.js`

### Usage

| Command | কাজ |
|---|---|
| `.draft info` | `info.js` upload করে link দেবে |
| `.draft uid` | `uid.js` upload করবে |
| `.draft` *(+ .js reply)* | Attachment টা upload করবে |

### Example Output
```
✅ Upload সফল!

📁 File: info.js
🔗 Link:
https://goatstore-phi.vercel.app/raw/Cdgk1YJ-

📄 Lines: 312
📦 Size: 8.42 KB
⏱️ Expires: ২৪ ঘণ্টা পর
```

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

## 🛠️ Self-Host

```bash
# 1. Clone
git clone https://github.com/your-username/goatstore.git
cd goatstore
npm install

# 2. Deploy
vercel --prod
```

> Vercel Dashboard → Storage → Create KV Database → Redeploy

## 📁 Project Structure

```
goatstore/
├── index.js          # Main server + routing
├── api/
│   ├── upload.js     # POST /upload handler
│   └── raw.js        # GET /raw/:id handler
├── lib/
│   └── store.js      # In-memory fallback
├── vercel.json
└── package.json
```

## ⚙️ Tech Stack

| | |
|---|---|
| **Runtime** | Node.js (Vercel Serverless) |
| **Storage** | Vercel KV (Redis) |
| **Deploy** | Vercel |
| **Bot** | GoatBot V2 |

<div align="center">

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<!-- Author card -->
<table border="0">
<tr>
<td align="center">
<img src="https://i.imgur.com/Tu50EvM.jpeg" width="90" height="90" style="border-radius:50%;"/>
<br/>
<b>Rocky Chowdhury</b>
<br/>
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=12&pause=1500&color=7C6AF7&center=true&width=220&lines=GoatBot+Developer;Facebook+Bot+Creator;Bangladesh+🇧🇩" alt="typing"/>
</td>
</tr>
</table>

<!-- Footer wave -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=7c6af7&height=100&section=footer&animation=fadeIn"/>

</div>
