<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&color=0:0d0d1a,50:7c6af7,100:34d399&height=200&section=header&text=GoatStore&fontSize=70&fontColor=ffffff&fontAlignY=55&animation=fadeIn&stroke=7c6af7&strokeWidth=2&desc=⚡+Fast+File+Hosting+for+GoatBot+Commands&descSize=18&descAlignY=78&descColor=a78bfa"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=22&duration=3000&pause=800&color=7C6AF7&center=true&vCenter=true&multiline=false&repeat=true&width=500&height=50&lines=Upload+JS+%E2%86%92+Get+a+Link+%E2%86%92+Done.;24+Hours+Auto-Expire.;Built+for+GoatBot+%F0%9F%A4%96;Always+Online+%F0%9F%9F%A2;Fast.+Simple.+Reliable." alt="Typing SVG"/>

<br/><br/>

<!-- LOGO + PHOTO SIDE BY SIDE WITH ANIMATIONS -->
<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td align="center" valign="middle" width="220">

<img src="https://i.imgur.com/8u69HqO.jpeg" width="150" height="150" style="border-radius:24px; box-shadow: 0 0 30px #7c6af7;"/>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=14&duration=2500&pause=1000&color=34D399&center=true&vCenter=true&width=180&lines=GoatStore+v1.0;%F0%9F%9F%A2+Always+Online;24h+Auto+Expiry;Serverless+%26+Fast" alt="GoatStore typing"/>

</td>
<td width="80" align="center" valign="middle">
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=28&duration=1500&pause=500&color=7C6AF7&center=true&vCenter=true&width=60&height=80&lines=%E2%9C%A6;%E2%9D%96;%E2%9C%A6;%E2%9D%96" alt="divider"/>
</td>
<td align="center" valign="middle" width="220">

<img src="https://i.imgur.com/Tu50EvM.jpeg" width="150" height="150" style="border-radius:50%; border: 4px solid #7c6af7; box-shadow: 0 0 30px #7c6af7;"/>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=14&duration=2500&pause=1000&color=FF6B9D&center=true&vCenter=true&width=200&lines=Rocky+Chowdhury;GoatBot+Developer;Facebook+Bot+Creator;Bangladesh+%F0%9F%87%A7%F0%9F%87%A9" alt="Rocky typing"/>

</td>
</tr>
</table>

<br/>

<!-- BADGES -->
<a href="https://goatstore-phi.vercel.app"><img src="https://img.shields.io/badge/%F0%9F%9F%A2%20LIVE-goatstore--phi.vercel.app-7c6af7?style=for-the-badge&labelColor=0d0d1a"/></a>
<a href="https://vercel.com"><img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/></a>
<a href="https://github.com/ntkhang03/Goat-Bot-V2"><img src="https://img.shields.io/badge/Built%20for-GoatBot-34d399?style=for-the-badge&labelColor=0d0d1a"/></a>
<img src="https://img.shields.io/badge/Made%20by-Rocky%20Chowdhury-ff6b9d?style=for-the-badge&labelColor=0d0d1a"/>
<img src="https://img.shields.io/badge/Expires-24h-f59e0b?style=for-the-badge&labelColor=0d0d1a"/>
<img src="https://img.shields.io/badge/Storage-Vercel%20KV-7c6af7?style=for-the-badge&labelColor=0d0d1a&logo=redis&logoColor=white"/>

<br/><br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

<br/>

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="28"> Features

<br/>

<table border="0" width="100%">
<tr>
<td width="50%" valign="top">

**⚡ Instant Upload**
Paste your JS code, get a shareable link in under a second. No login, no setup.

**👁️ View Only**
Links open directly in the browser as readable code — no forced downloads.

**⏱️ Auto Expire**
Every file self-destructs after 24 hours. Clean and ephemeral by design.

</td>
<td width="50%" valign="top">

**🤖 GoatBot Native**
Use the `draft.js` command to upload any command file directly from Messenger.

**🌐 Vercel KV Storage**
Backed by Redis-powered Vercel KV. Serverless, globally distributed, always fast.

**🔒 No Auth Needed**
Zero friction. Just a POST request with your content and you're done.

</td>
</tr>
</table>

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="28"> API Reference

<br/>

<div align="center">

### `POST /upload`

</div>

Upload JS code and receive a shareable view link.

**Request Body:**
```json
{
  "content": "// your javascript code here"
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

<br/>

<div align="center">

### `GET /raw/:id`

</div>

View uploaded file as plain text in the browser.

```
GET https://goatstore-phi.vercel.app/raw/:id

→ Content-Type: text/plain
→ Valid for: 24 hours
→ On expire: 404 Not Found
```

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="28"> GoatBot — `draft.js` Command

Install `draft.js` inside your GoatBot commands folder:

```
modules/commands/draft.js
```

<br/>

### How to Use

| Command | What It Does |
|---|---|
| `.draft info` | Reads `info.js` from commands folder → uploads → sends link |
| `.draft uid` | Reads `uid.js` → uploads → sends link |
| `.draft canvas` | Reads `canvas.js` → uploads → sends link |
| `.draft` *(reply a .js file)* | Uploads the attached file directly |

<br/>

### Live Example Output

```
✅ Upload Successful!

📁 File: info.js
🔗 Link:
https://goatstore-phi.vercel.app/raw/Cdgk1YJ-

📄 Lines: 312
📦 Size: 8.42 KB
⏱️ Expires: In 24 hours
```

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

## <img src="https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif" width="28"> Self-Host Guide

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/goatstore.git
cd goatstore
npm install
```

### 2. Set Up Vercel KV
> Go to [vercel.com](https://vercel.com) → Your Project → **Storage** tab → **Create KV Database** → Redeploy

### 3. Deploy
```bash
vercel --prod
```

The KV environment variables are injected automatically by Vercel. No manual `.env` setup needed.

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

## <img src="https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif" width="28"> Project Structure

```
goatstore/
│
├── index.js              # Main server — routing & page rendering
│
├── api/
│   ├── upload.js         # POST /upload — accepts content, saves to KV
│   └── raw.js            # GET /raw/:id — serves file as plain text
│
├── lib/
│   └── store.js          # In-memory fallback store
│
├── vercel.json           # Vercel deployment config
└── package.json
```

<br/>

## <img src="https://media.giphy.com/media/j2pOGeGYKe2xCCKwfi/giphy.gif" width="28"> Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Runtime** | Node.js on Vercel Serverless Functions |
| **Storage** | Vercel KV — Redis-backed key/value store |
| **Hosting** | Vercel Edge Network |
| **Bot Platform** | GoatBot V2 (Messenger) |
| **ID Generation** | `nanoid` — URL-safe unique IDs |

</div>

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

<!-- AUTHOR SECTION -->
<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=20&duration=3000&pause=1000&color=7C6AF7&center=true&vCenter=true&width=400&lines=Built+by+Rocky+Chowdhury+%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB;GoatBot+Developer;Facebook+Bot+Creator" alt="author typing"/>

<br/><br/>

<img src="https://i.imgur.com/Tu50EvM.jpeg" width="120" height="120" style="border-radius:50%; border: 4px solid #7c6af7;"/>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=15&duration=2000&pause=1000&color=FF6B9D&center=true&vCenter=true&width=300&lines=Rocky+Chowdhury;%F0%9F%87%A7%F0%9F%87%A9+Bangladesh;GoatBot+%7C+Facebook+Bot+Dev;Powered+by+Passion+%F0%9F%94%A5" alt="footer typing"/>

<br/><br/>

<a href="https://goatstore-phi.vercel.app"><img src="https://img.shields.io/badge/Visit-GoatStore-7c6af7?style=for-the-badge&labelColor=0d0d1a"/></a>
&nbsp;
<img src="https://img.shields.io/badge/GoatBot-Powered-34d399?style=for-the-badge&labelColor=0d0d1a"/>
&nbsp;
<img src="https://komarev.com/ghpvc/?username=rocky-chowdhury&color=7c6af7&style=for-the-badge&label=PROFILE+VIEWS"/>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:34d399,50:7c6af7,100:0d0d1a&height=120&section=footer&animation=fadeIn"/>

</div>
