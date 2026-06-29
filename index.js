const { nanoid } = require("nanoid");

// In-memory store (Vercel KV replace করবে production এ)
const store = new Map();

module.exports = async (req, res) => {
  const url = req.url || "/";

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Homepage
  if (url === "/" || url === "") {
    return res.status(200).setHeader("Content-Type", "text/html").send(homePage());
  }

  // Upload endpoint
  if (url === "/upload" && req.method === "POST") {
    return handleUpload(req, res);
  }

  // Raw file endpoint
  if (url.startsWith("/raw/")) {
    return handleRaw(req, res, url);
  }

  return res.status(404).send("Not found");
};

async function handleUpload(req, res) {
  try {
    let body = "";
    await new Promise((resolve) => {
      req.on("data", (chunk) => (body += chunk));
      req.on("end", resolve);
    });

    const { content, filename } = JSON.parse(body);

    if (!content) {
      return res.status(400).json({ error: "Content required" });
    }

    const id = nanoid(8);
    const savedFilename = "draft.js";

    // Try Vercel KV first, fallback to memory
    try {
      const { kv } = require("@vercel/kv");
      await kv.set(`file:${id}`, { content, filename: savedFilename }, { ex: 86400 });
    } catch {
      store.set(id, { content, filename: savedFilename, createdAt: Date.now() });
    }

    const host = req.headers.host;
    const protocol = host.includes("localhost") ? "http" : "https";

    return res.status(200).json({
      success: true,
      id,
      url: `${protocol}://${host}/raw/${id}`,
      filename: savedFilename,
      expires: "24 hours"
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function handleRaw(req, res, url) {
  const id = url.replace("/raw/", "").split("?")[0].trim();

  if (!id) return res.status(400).send("ID required");

  let data = null;

  try {
    const { kv } = require("@vercel/kv");
    data = await kv.get(`file:${id}`);
  } catch {
    data = store.get(id) || null;
  }

  if (!data) {
    return res.status(404).setHeader("Content-Type", "text/html").send(notFoundPage());
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="draft.js"`);
  return res.status(200).send(data.content);
}

function homePage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GoatStore — File Hosting</title>
  <link rel="icon" href="https://i.imgur.com/8u69HqO.jpeg" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0f;
      --surface: #111118;
      --border: #1e1e2e;
      --accent: #7c6af7;
      --accent2: #a78bfa;
      --green: #34d399;
      --text: #e2e8f0;
      --muted: #64748b;
      --card: #13131c;
    }

    body {
      font-family: 'Space Grotesk', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Animated bg */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 50% at 20% 10%, rgba(124,106,247,0.12) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(52,211,153,0.07) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }

    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 32px;
      background: rgba(10,10,15,0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }

    nav img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid var(--accent);
      object-fit: cover;
    }

    nav .brand {
      font-size: 18px;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent2), var(--green));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.3px;
    }

    nav .badge {
      margin-left: auto;
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      color: var(--green);
      background: rgba(52,211,153,0.1);
      border: 1px solid rgba(52,211,153,0.25);
      padding: 3px 10px;
      border-radius: 20px;
    }

    main {
      flex: 1;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 24px 60px;
    }

    .hero {
      text-align: center;
      max-width: 580px;
      margin-bottom: 56px;
    }

    .logo-wrap {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 88px;
      height: 88px;
      border-radius: 24px;
      background: linear-gradient(135deg, rgba(124,106,247,0.2), rgba(52,211,153,0.1));
      border: 1px solid rgba(124,106,247,0.3);
      margin-bottom: 28px;
      box-shadow: 0 0 40px rgba(124,106,247,0.2);
    }

    .logo-wrap img {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      object-fit: cover;
    }

    h1 {
      font-size: clamp(32px, 5vw, 48px);
      font-weight: 700;
      letter-spacing: -1px;
      line-height: 1.1;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #fff 0%, var(--accent2) 60%, var(--green) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 16px;
      color: var(--muted);
      line-height: 1.6;
    }

    .subtitle span {
      color: var(--accent2);
      font-weight: 600;
    }

    /* Upload card */
    .upload-card {
      width: 100%;
      max-width: 560px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }

    .card-label {
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 2px;
      color: var(--accent2);
      text-transform: uppercase;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .card-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border);
    }

    textarea {
      width: 100%;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      color: var(--text);
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.6;
      padding: 16px;
      resize: vertical;
      min-height: 160px;
      outline: none;
      transition: border 0.2s;
    }

    textarea:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(124,106,247,0.15);
    }

    textarea::placeholder { color: var(--muted); }

    .btn {
      width: 100%;
      margin-top: 16px;
      padding: 14px;
      background: linear-gradient(135deg, var(--accent), #6d57f0);
      border: none;
      border-radius: 12px;
      color: #fff;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.15s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .btn:hover { opacity: 0.88; transform: translateY(-1px); }
    .btn:active { transform: translateY(0); }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    /* Result */
    .result {
      display: none;
      margin-top: 20px;
      background: rgba(52,211,153,0.07);
      border: 1px solid rgba(52,211,153,0.2);
      border-radius: 12px;
      padding: 16px 20px;
    }

    .result.show { display: block; }

    .result-label {
      font-size: 12px;
      color: var(--green);
      font-weight: 600;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .result-link {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--text);
      word-break: break-all;
      display: block;
      margin-bottom: 10px;
    }

    .copy-btn {
      font-size: 12px;
      padding: 6px 14px;
      background: rgba(124,106,247,0.15);
      border: 1px solid rgba(124,106,247,0.3);
      border-radius: 8px;
      color: var(--accent2);
      cursor: pointer;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      transition: background 0.2s;
    }

    .copy-btn:hover { background: rgba(124,106,247,0.25); }

    /* Stats */
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      width: 100%;
      max-width: 560px;
    }

    .stat {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px;
      text-align: center;
    }

    .stat-val {
      font-size: 24px;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent2);
    }

    .stat-key {
      font-size: 12px;
      color: var(--muted);
      margin-top: 4px;
    }

    /* API docs */
    .docs {
      width: 100%;
      max-width: 560px;
      margin-top: 32px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 28px 32px;
    }

    .docs h2 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--accent2);
    }

    .endpoint {
      margin-bottom: 20px;
    }

    .method {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 6px;
      margin-right: 8px;
    }

    .method.post { background: rgba(124,106,247,0.2); color: var(--accent2); }
    .method.get  { background: rgba(52,211,153,0.15); color: var(--green); }

    .ep-path {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--text);
    }

    .ep-desc {
      font-size: 13px;
      color: var(--muted);
      margin-top: 6px;
      padding-left: 4px;
    }

    pre {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #a78bfa;
      margin-top: 10px;
      overflow-x: auto;
      line-height: 1.6;
    }

    footer {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 24px;
      border-top: 1px solid var(--border);
      font-size: 13px;
      color: var(--muted);
    }

    footer span { color: var(--accent2); font-weight: 600; }

    @media (max-width: 480px) {
      nav { padding: 12px 20px; }
      main { padding: 48px 16px 40px; }
      .upload-card, .docs { padding: 24px 20px; }
      .stats { grid-template-columns: repeat(3,1fr); gap: 10px; }
      .stat { padding: 14px 8px; }
      .stat-val { font-size: 20px; }
    }
  </style>
</head>
<body>

<nav>
  <img src="https://i.imgur.com/8u69HqO.jpeg" alt="GoatStore Logo"/>
  <span class="brand">GoatStore</span>
  <span class="badge">● LIVE</span>
</nav>

<main>
  <div class="hero">
    <div class="logo-wrap">
      <img src="https://i.imgur.com/8u69HqO.jpeg" alt="Logo"/>
    </div>
    <h1>GoatStore</h1>
    <p class="subtitle">
      Fast, simple file hosting for <span>GoatBot</span> commands.<br/>
      Upload source code, get a shareable link instantly.
    </p>
  </div>

  <div class="upload-card">
    <div class="card-label">📤 Upload File</div>
    <textarea id="codeInput" placeholder="Paste your command source code here..."></textarea>
    <button class="btn" onclick="uploadFile()" id="uploadBtn">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      Upload & Get Link
    </button>

    <div class="result" id="result">
      <div class="result-label">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        File uploaded — draft.js ready
      </div>
      <a class="result-link" id="resultLink" target="_blank"></a>
      <button class="copy-btn" onclick="copyLink()">Copy Link</button>
    </div>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-val">24h</div>
      <div class="stat-key">Link Expiry</div>
    </div>
    <div class="stat">
      <div class="stat-val">∞</div>
      <div class="stat-key">File Size</div>
    </div>
    <div class="stat">
      <div class="stat-val">JS</div>
      <div class="stat-key">Format</div>
    </div>
  </div>

  <div class="docs">
    <h2>⚡ API Reference</h2>

    <div class="endpoint">
      <span class="method post">POST</span>
      <span class="ep-path">/upload</span>
      <div class="ep-desc">Upload file content and receive a download link.</div>
      <pre>{
  "content": "// your js code here",
  "filename": "draft.js"
}</pre>
    </div>

    <div class="endpoint">
      <span class="method get">GET</span>
      <span class="ep-path">/raw/:id</span>
      <div class="ep-desc">Download the raw file by its ID. Expires after 24 hours.</div>
      <pre>→ Returns: draft.js (text/plain)</pre>
    </div>
  </div>
</main>

<footer>
  Built for <span>Rocky Chowdhury</span> · Powered by GoatBot · GoatStore v1.0
</footer>

<script>
  async function uploadFile() {
    const content = document.getElementById('codeInput').value.trim();
    if (!content) return alert('Please paste some code first.');

    const btn = document.getElementById('uploadBtn');
    btn.disabled = true;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Uploading...';

    try {
      const res = await fetch('/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, filename: 'draft.js' })
      });

      const data = await res.json();

      if (data.url) {
        const link = document.getElementById('resultLink');
        link.textContent = data.url;
        link.href = data.url;
        document.getElementById('result').classList.add('show');
      } else {
        alert('Upload failed: ' + (data.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Error: ' + e.message);
    }

    btn.disabled = false;
    btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload & Get Link';
  }

  function copyLink() {
    const link = document.getElementById('resultLink').textContent;
    navigator.clipboard.writeText(link).then(() => {
      const btn = document.querySelector('.copy-btn');
      btn.textContent = '✓ Copied!';
      setTimeout(() => btn.textContent = 'Copy Link', 2000);
    });
  }
</script>

</body>
</html>`;
}

function notFoundPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Not Found — GoatStore</title>
  <link rel="icon" href="https://i.imgur.com/8u69HqO.jpeg"/>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>
    body { font-family: 'Space Grotesk', sans-serif; background: #0a0a0f; color: #e2e8f0;
           display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; }
    h1 { font-size: 48px; color: #7c6af7; margin-bottom: 12px; }
    p  { color: #64748b; margin-bottom: 24px; }
    a  { color: #a78bfa; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div>
    <h1>404</h1>
    <p>File not found or link has expired (24h limit).</p>
    <a href="/">← Back to GoatStore</a>
  </div>
</body>
</html>`;
}
