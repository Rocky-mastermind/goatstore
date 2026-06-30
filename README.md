<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&color=0:05050f,50:7c6af7,100:34d399&height=220&section=header&text=GoatStore&fontSize=80&fontColor=ffffff&fontAlignY=55&animation=fadeIn&desc=⚡+Fast+File+Hosting+for+GoatBot+Commands&descSize=18&descAlignY=78&descColor=a78bfa"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=22&duration=3000&pause=800&color=7C6AF7&center=true&vCenter=true&width=550&height=50&lines=Upload+JS+%E2%86%92+Get+a+Link+%E2%86%92+Done.;24+Hours+Auto-Expire.+Always+Clean.;Built+for+GoatBot+%F0%9F%A4%96;Powered+by+Vercel+KV+%E2%9A%A1;Made+by+Rocky+Chowdhury+%F0%9F%87%A7%F0%9F%87%A9" alt="Typing SVG"/>

<br/><br/>

<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td align="center" valign="middle" width="220">
<img src="https://i.imgur.com/8u69HqO.jpeg" width="140" height="140" style="border-radius:24px"/>
<br/><br/>
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=13&duration=2500&pause=1000&color=34D399&center=true&vCenter=true&width=180&lines=GoatStore+v1.0;%F0%9F%9F%A2+Always+Online;24h+Auto+Expiry;Serverless+%26+Fast" alt="GoatStore"/>
</td>
<td width="80" align="center" valign="middle">
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&duration=1200&pause=400&color=7C6AF7&center=true&vCenter=true&width=60&height=100&lines=%E2%9C%A6;%E2%9D%96;%E2%9C%A6;%E2%9D%96;%E2%9C%A6" alt="divider"/>
</td>
<td align="center" valign="middle" width="220">
<img src="https://i.imgur.com/Tu50EvM.jpeg" width="140" height="140" style="border-radius:50%"/>
<br/><br/>
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=13&duration=2500&pause=1000&color=FF6B9D&center=true&vCenter=true&width=210&lines=Rocky+Chowdhury;GoatBot+Developer;Facebook+Bot+Creator;Bangladesh+%F0%9F%87%A7%F0%9F%87%A9" alt="Rocky"/>
</td>
</tr>
</table>

<br/>

<img src="https://img.shields.io/badge/%F0%9F%9F%A2%20LIVE-goatstore--phi.vercel.app-7c6af7?style=for-the-badge&labelColor=0d0d1a"/>
<img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Built%20for-GoatBot-34d399?style=for-the-badge&labelColor=0d0d1a"/>
<img src="https://img.shields.io/badge/Made%20by-Rocky%20Chowdhury-ff6b9d?style=for-the-badge&labelColor=0d0d1a"/>
<img src="https://img.shields.io/badge/Expires-24h-fbbf24?style=for-the-badge&labelColor=0d0d1a"/>
<img src="https://img.shields.io/badge/Storage-Vercel%20KV-7c6af7?style=for-the-badge&labelColor=0d0d1a&logo=redis&logoColor=white"/>

<br/><br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

<br/>

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="25"> Features

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

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="25"> API Reference

<br/>

### `POST /upload`
Upload JS code and receive a shareable view link.

**Request:**
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

### `GET /raw/:id`
View uploaded file as plain text in the browser.

```
GET https://goatstore-phi.vercel.app/raw/:id

→ Content-Type : text/plain
→ Valid for    : 24 hours
→ On expire    : 404 Not Found
```

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="25"> GoatBot — `draft.js` Command

Install `draft.js` inside your GoatBot commands folder:
```
modules/commands/draft.js
```

<br/>

### Usage

| Command | What It Does |
|---|---|
| `.draft info` | Reads `info.js` from commands folder → uploads → sends link |
| `.draft uid` | Reads `uid.js` → uploads → sends link |
| `.draft canvas` | Reads `canvas.js` → uploads → sends link |
| `.draft` *(reply a .js file)* | Uploads the attached file directly |

<br/>

### Bot Output Example
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

## <img src="https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif" width="25"> Self-Host Guide

```bash
# 1. Clone the repo
git clone https://github.com/your-username/goatstore.git
cd goatstore
npm install

# 2. Deploy to Vercel
vercel --prod
```

> **Vercel KV Setup:** Dashboard → Your Project → **Storage** → **Create KV Database** → Redeploy

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

## <img src="https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif" width="25"> Project Structure

```
goatstore/
│
├── index.js              # Main server — routing & page rendering
│
├── api/
│   ├── upload.js         # POST /upload — saves content to KV
│   └── raw.js            # GET /raw/:id — serves file as plain text
│
├── lib/
│   └── store.js          # In-memory fallback store
│
├── vercel.json           # Vercel deployment config
└── package.json
```

<br/>

## <img src="https://media.giphy.com/media/j2pOGeGYKe2xCCKwfi/giphy.gif" width="25"> Tech Stack

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

## <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="25"> Contact & Community

<br/>

<div align="center">

| Platform | Link |
|---|---|
| 📍 **Location** | Dhaka, Sreepur — Bangladesh 🇧🇩 |
| 💬 **WhatsApp** | [+880 1312-247715](https://wa.me/8801312247715) |
| ✈️ **Telegram Channel** | [t.me/alveeevanroky320](https://t.me/alveeevanroky320) |
| 👥 **Telegram Group** | [t.me/alveeevanroky320bot](https://t.me/alveeevanroky320bot) |
| 📨 **Telegram Contact** | [@alveeevanrocky320](https://t.me/alveeevanrocky320) |
| 🌐 **WhatsApp Group** | [Join Here](https://chat.whatsapp.com/JcpRcNZijfGAyHXsVliwoU?s=cl&p=a&mlu=4) |
| ▶️ **YouTube** | [@scs404community](https://youtube.com/@scs404community?si=z6KGcbOzwQDQ_G-A) |

</div>

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>
</div>

<br/>

<div align="center">

<img src="https://i.imgur.com/Tu50EvM.jpeg" width="110" height="110" style="border-radius:50%"/>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=2500&pause=1000&color=FF6B9D&center=true&vCenter=true&width=380&lines=Built+by+Rocky+Chowdhury+%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB;GoatBot+Developer;Facebook+Bot+Creator;Bangladesh+%F0%9F%87%A7%F0%9F%87%A9" alt="footer typing"/>

<br/><br/>

<a href="https://wa.me/8801312247715"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>
<a href="https://t.me/alveeevanroky320"><img src="https://img.shields.io/badge/Telegram-0088cc?style=for-the-badge&logo=telegram&logoColor=white"/></a>
<a href="https://youtube.com/@scs404community"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/></a>

<br/><br/>

<img src="https://komarev.com/ghpvc/?username=rocky-chowdhury&color=7c6af7&style=for-the-badge&label=PROFILE+VIEWS"/>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:34d399,50:7c6af7,100:05050f&height=120&section=footer&animation=fadeIn"/>

</div>
