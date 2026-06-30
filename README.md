<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>GoatStore — Rocky Chowdhury</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --bg:#05050f;
  --surface:#0d0d1f;
  --card:#111128;
  --border:#1e1e3f;
  --purple:#7c6af7;
  --purple2:#a78bfa;
  --green:#34d399;
  --pink:#f472b6;
  --gold:#fbbf24;
  --text:#e2e8f0;
  --muted:#64748b;
}

html{scroll-behavior:smooth}

body{
  font-family:'Space Grotesk',sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  overflow-x:hidden;
}

/* ── PARTICLES CANVAS ── */
#particles{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
}

/* ── AURORA BG ── */
.aurora{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  overflow:hidden;
}
.aurora-blob{
  position:absolute;
  border-radius:50%;
  filter:blur(80px);
  opacity:0.15;
  animation:auroraFloat 8s ease-in-out infinite alternate;
}
.aurora-blob:nth-child(1){width:600px;height:600px;background:var(--purple);top:-200px;left:-100px;animation-delay:0s}
.aurora-blob:nth-child(2){width:500px;height:500px;background:var(--green);bottom:-150px;right:-100px;animation-delay:2s}
.aurora-blob:nth-child(3){width:400px;height:400px;background:var(--pink);top:40%;left:40%;animation-delay:4s}
@keyframes auroraFloat{
  0%{transform:translate(0,0) scale(1)}
  100%{transform:translate(40px,30px) scale(1.1)}
}

/* ── WRAPPER ── */
.wrapper{position:relative;z-index:1}

/* ── HERO ── */
.hero{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:40px 24px;
  position:relative;
}

/* grid lines */
.hero::before{
  content:'';
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(124,106,247,0.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(124,106,247,0.04) 1px,transparent 1px);
  background-size:60px 60px;
  pointer-events:none;
}

/* ── LOGO + PHOTO ROW ── */
.hero-duo{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:60px;
  margin-bottom:40px;
  flex-wrap:wrap;
}

.avatar-wrap{
  position:relative;
  display:inline-block;
}

.avatar-wrap img{
  width:160px;
  height:160px;
  object-fit:cover;
  display:block;
  position:relative;
  z-index:2;
}

/* GoatStore logo — rounded rect */
.logo-avatar img{border-radius:28px}

/* Rocky photo — circle */
.rocky-avatar img{border-radius:50%}

/* spinning ring */
.ring{
  position:absolute;
  inset:-10px;
  border-radius:inherit;
  border:2px solid transparent;
  background:linear-gradient(var(--bg),var(--bg)) padding-box,
             linear-gradient(135deg,var(--purple),var(--green),var(--pink),var(--purple)) border-box;
  animation:spinRing 4s linear infinite;
  z-index:1;
}
.logo-avatar .ring{border-radius:38px}
.rocky-avatar .ring{border-radius:50%}

/* pulse glow */
.glow-pulse{
  position:absolute;
  inset:-20px;
  border-radius:inherit;
  background:radial-gradient(circle,rgba(124,106,247,0.3),transparent 70%);
  animation:glowPulse 2.5s ease-in-out infinite;
  z-index:0;
}
.rocky-avatar .glow-pulse{background:radial-gradient(circle,rgba(244,114,182,0.3),transparent 70%)}

@keyframes spinRing{to{transform:rotate(360deg)}}
@keyframes glowPulse{0%,100%{opacity:0.4;transform:scale(0.95)}50%{opacity:1;transform:scale(1.05)}}

/* floating dots around photo */
.orbit{
  position:absolute;
  inset:-35px;
  border-radius:50%;
  animation:orbitSpin 6s linear infinite;
  z-index:3;
}
.orbit-dot{
  position:absolute;
  width:8px;height:8px;
  border-radius:50%;
  background:var(--purple);
  top:0;left:50%;
  transform:translateX(-50%);
  box-shadow:0 0 8px var(--purple);
}
.orbit-dot:nth-child(2){background:var(--green);top:50%;left:100%;transform:translateY(-50%);box-shadow:0 0 8px var(--green)}
.orbit-dot:nth-child(3){background:var(--pink);top:100%;left:50%;transform:translateX(-50%);box-shadow:0 0 8px var(--pink)}
.orbit-dot:nth-child(4){background:var(--gold);top:50%;left:0;transform:translateY(-50%);box-shadow:0 0 8px var(--gold)}
@keyframes orbitSpin{to{transform:rotate(360deg)}}

.avatar-label{
  margin-top:16px;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  color:var(--muted);
  letter-spacing:1px;
}
.avatar-label span{
  color:var(--purple2);
  font-weight:700;
}

/* divider between avatars */
.duo-divider{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  animation:dividerPulse 2s ease-in-out infinite;
}
.duo-divider span{
  display:block;
  width:4px;height:4px;
  border-radius:50%;
  background:var(--purple);
  box-shadow:0 0 6px var(--purple);
}
.duo-divider span:nth-child(2){background:var(--green);box-shadow:0 0 6px var(--green);animation-delay:0.3s}
.duo-divider span:nth-child(3){background:var(--pink);box-shadow:0 0 6px var(--pink);animation-delay:0.6s}
@keyframes dividerPulse{0%,100%{opacity:0.4}50%{opacity:1}}

/* ── HERO TEXT ── */
.hero-title{
  font-size:clamp(42px,7vw,80px);
  font-weight:800;
  letter-spacing:-3px;
  line-height:1;
  background:linear-gradient(135deg,#fff 0%,var(--purple2) 40%,var(--green) 80%,var(--pink) 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  animation:titleReveal 1s ease forwards;
  margin-bottom:16px;
}
@keyframes titleReveal{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}

.hero-sub{
  font-size:18px;
  color:var(--muted);
  margin-bottom:32px;
  animation:fadeUp 1s 0.3s ease both;
}
.hero-sub em{color:var(--green);font-style:normal;font-weight:600}

/* typewriter */
.typewriter{
  font-family:'JetBrains Mono',monospace;
  font-size:16px;
  color:var(--purple2);
  margin-bottom:40px;
  min-height:24px;
  animation:fadeUp 1s 0.5s ease both;
}
.typewriter::after{
  content:'|';
  animation:blink 0.8s step-end infinite;
  color:var(--green);
}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

/* badges row */
.badges{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:center;
  margin-bottom:48px;
  animation:fadeUp 1s 0.7s ease both;
}
.badge{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:8px 18px;
  border-radius:100px;
  font-size:13px;
  font-weight:600;
  font-family:'JetBrains Mono',monospace;
  border:1px solid transparent;
  position:relative;
  overflow:hidden;
  transition:transform 0.2s,box-shadow 0.2s;
  cursor:default;
}
.badge:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(124,106,247,0.3)}
.badge::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent);
  transform:translateX(-100%);
  animation:shimmer 3s infinite;
}
@keyframes shimmer{to{transform:translateX(200%)}}
.badge-purple{background:rgba(124,106,247,0.15);border-color:rgba(124,106,247,0.3);color:var(--purple2)}
.badge-green{background:rgba(52,211,153,0.12);border-color:rgba(52,211,153,0.3);color:var(--green)}
.badge-pink{background:rgba(244,114,182,0.12);border-color:rgba(244,114,182,0.3);color:var(--pink)}
.badge-gold{background:rgba(251,191,36,0.12);border-color:rgba(251,191,36,0.3);color:var(--gold)}

/* scroll arrow */
.scroll-arrow{
  animation:bounce 2s ease-in-out infinite;
  color:var(--muted);
  font-size:24px;
}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}

@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

/* ── WAVE DIVIDER ── */
.wave{
  width:100%;
  overflow:hidden;
  line-height:0;
}
.wave svg{display:block;width:100%}

/* ── SECTION ── */
section{
  padding:80px 24px;
  max-width:1100px;
  margin:0 auto;
}

.section-tag{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  letter-spacing:3px;
  text-transform:uppercase;
  color:var(--purple2);
  background:rgba(124,106,247,0.08);
  border:1px solid rgba(124,106,247,0.2);
  padding:6px 16px;
  border-radius:100px;
  margin-bottom:20px;
}
.section-tag::before{
  content:'';
  width:6px;height:6px;
  border-radius:50%;
  background:var(--green);
  animation:glowDot 1.5s ease-in-out infinite;
}
@keyframes glowDot{0%,100%{box-shadow:0 0 4px var(--green)}50%{box-shadow:0 0 12px var(--green),0 0 24px var(--green)}}

.section-title{
  font-size:clamp(28px,4vw,42px);
  font-weight:800;
  letter-spacing:-1.5px;
  margin-bottom:12px;
  background:linear-gradient(135deg,#fff,var(--purple2));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}

/* ── FEATURES ── */
.features-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:20px;
  margin-top:48px;
}
.feature-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:20px;
  padding:28px;
  position:relative;
  overflow:hidden;
  transition:transform 0.3s,border-color 0.3s,box-shadow 0.3s;
  animation:cardIn 0.6s ease both;
}
.feature-card:hover{
  transform:translateY(-6px);
  border-color:rgba(124,106,247,0.5);
  box-shadow:0 20px 50px rgba(124,106,247,0.15);
}
.feature-card::after{
  content:'';
  position:absolute;
  top:0;left:0;right:0;
  height:2px;
  background:linear-gradient(90deg,var(--purple),var(--green));
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.4s ease;
}
.feature-card:hover::after{transform:scaleX(1)}
.feature-card:nth-child(1){animation-delay:0.1s}
.feature-card:nth-child(2){animation-delay:0.2s}
.feature-card:nth-child(3){animation-delay:0.3s}
.feature-card:nth-child(4){animation-delay:0.4s}
.feature-card:nth-child(5){animation-delay:0.5s}
.feature-card:nth-child(6){animation-delay:0.6s}
@keyframes cardIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}

.feature-icon{
  font-size:36px;
  margin-bottom:16px;
  display:block;
  animation:iconFloat 3s ease-in-out infinite;
}
@keyframes iconFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}

.feature-title{
  font-size:17px;
  font-weight:700;
  margin-bottom:8px;
  color:#fff;
}
.feature-desc{
  font-size:14px;
  color:var(--muted);
  line-height:1.7;
}

/* ── API SECTION ── */
.api-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
  margin-top:48px;
}
@media(max-width:700px){.api-grid{grid-template-columns:1fr}}

.api-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:20px;
  overflow:hidden;
  transition:transform 0.3s,box-shadow 0.3s;
}
.api-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(124,106,247,0.12)}

.api-header{
  padding:20px 24px;
  display:flex;
  align-items:center;
  gap:12px;
  border-bottom:1px solid var(--border);
  background:rgba(124,106,247,0.05);
}
.method-badge{
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  font-weight:700;
  padding:4px 12px;
  border-radius:8px;
}
.method-post{background:rgba(124,106,247,0.25);color:var(--purple2)}
.method-get{background:rgba(52,211,153,0.2);color:var(--green)}

.api-path{
  font-family:'JetBrains Mono',monospace;
  font-size:15px;
  color:#fff;
  font-weight:600;
}
.api-body{padding:24px}
.api-desc{font-size:14px;color:var(--muted);margin-bottom:16px;line-height:1.6}

/* ── CODE BLOCK ── */
.code-block{
  background:#080814;
  border:1px solid var(--border);
  border-radius:12px;
  overflow:hidden;
}
.code-header{
  padding:10px 16px;
  background:rgba(124,106,247,0.08);
  border-bottom:1px solid var(--border);
  display:flex;
  align-items:center;
  gap:6px;
}
.code-dot{width:10px;height:10px;border-radius:50%}
.code-dot:nth-child(1){background:#ff5f57}
.code-dot:nth-child(2){background:#febc2e}
.code-dot:nth-child(3){background:#28c840}
.code-content{
  padding:16px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;
  line-height:1.7;
  color:#a78bfa;
  overflow-x:auto;
  white-space:pre;
}
.code-content .key{color:#34d399}
.code-content .val{color:#fbbf24}
.code-content .str{color:#f472b6}
.code-content .cmt{color:#4a5568}

/* ── COMMAND TABLE ── */
.cmd-table{
  width:100%;
  border-collapse:collapse;
  margin-top:32px;
  font-size:14px;
}
.cmd-table th{
  text-align:left;
  padding:14px 20px;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  letter-spacing:2px;
  text-transform:uppercase;
  color:var(--muted);
  border-bottom:1px solid var(--border);
}
.cmd-table td{
  padding:16px 20px;
  border-bottom:1px solid rgba(30,30,63,0.5);
  vertical-align:middle;
}
.cmd-table tr{transition:background 0.2s}
.cmd-table tr:hover td{background:rgba(124,106,247,0.05)}
.cmd-code{
  font-family:'JetBrains Mono',monospace;
  background:rgba(124,106,247,0.12);
  border:1px solid rgba(124,106,247,0.2);
  padding:4px 12px;
  border-radius:8px;
  font-size:13px;
  color:var(--purple2);
  white-space:nowrap;
}

/* ── CONTACT SECTION ── */
.contact-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
  gap:16px;
  margin-top:48px;
}
.contact-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:18px;
  padding:22px 24px;
  display:flex;
  align-items:center;
  gap:16px;
  text-decoration:none;
  color:var(--text);
  transition:transform 0.3s,border-color 0.3s,box-shadow 0.3s;
  position:relative;
  overflow:hidden;
}
.contact-card::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,rgba(124,106,247,0.05),transparent);
  opacity:0;
  transition:opacity 0.3s;
}
.contact-card:hover{
  transform:translateY(-4px) scale(1.02);
  box-shadow:0 16px 40px rgba(0,0,0,0.3);
}
.contact-card:hover::before{opacity:1}
.contact-card.wa{border-color:rgba(37,211,102,0.3)}
.contact-card.wa:hover{border-color:#25d366;box-shadow:0 16px 40px rgba(37,211,102,0.15)}
.contact-card.tg{border-color:rgba(0,136,204,0.3)}
.contact-card.tg:hover{border-color:#0088cc;box-shadow:0 16px 40px rgba(0,136,204,0.15)}
.contact-card.yt{border-color:rgba(255,0,0,0.3)}
.contact-card.yt:hover{border-color:#ff0000;box-shadow:0 16px 40px rgba(255,0,0,0.15)}
.contact-card.loc{border-color:rgba(251,191,36,0.3)}
.contact-card.loc:hover{border-color:var(--gold);box-shadow:0 16px 40px rgba(251,191,36,0.15)}

.contact-icon{
  font-size:32px;
  min-width:48px;
  text-align:center;
  animation:iconFloat 3s ease-in-out infinite;
}
.contact-info{}
.contact-platform{
  font-size:11px;
  font-family:'JetBrains Mono',monospace;
  letter-spacing:2px;
  text-transform:uppercase;
  color:var(--muted);
  margin-bottom:4px;
}
.contact-value{
  font-size:14px;
  font-weight:600;
  color:#fff;
  word-break:break-all;
}

/* ── TECH STACK ── */
.stack-grid{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-top:32px;
}
.stack-pill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 20px;
  background:var(--card);
  border:1px solid var(--border);
  border-radius:100px;
  font-size:14px;
  font-weight:600;
  transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
  animation:pillIn 0.5s ease both;
}
.stack-pill:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(124,106,247,0.2);border-color:rgba(124,106,247,0.4)}
.stack-pill:nth-child(1){animation-delay:0.1s}.stack-pill:nth-child(2){animation-delay:0.15s}
.stack-pill:nth-child(3){animation-delay:0.2s}.stack-pill:nth-child(4){animation-delay:0.25s}
.stack-pill:nth-child(5){animation-delay:0.3s}
@keyframes pillIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}

/* ── STRUCTURE ── */
.tree-wrap{
  background:#080814;
  border:1px solid var(--border);
  border-radius:16px;
  overflow:hidden;
  margin-top:32px;
}
.tree-header{
  padding:12px 20px;
  background:rgba(124,106,247,0.08);
  border-bottom:1px solid var(--border);
  display:flex;
  align-items:center;
  gap:8px;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  color:var(--muted);
}
.tree-body{
  padding:24px;
  font-family:'JetBrains Mono',monospace;
  font-size:14px;
  line-height:2;
  color:var(--text);
}
.tree-body .dir{color:var(--purple2);font-weight:700}
.tree-body .file{color:var(--green)}
.tree-body .comment{color:var(--muted)}

/* ── AUTHOR CARD ── */
.author-section{
  padding:80px 24px;
  text-align:center;
}
.author-card{
  max-width:480px;
  margin:0 auto;
  background:var(--card);
  border:1px solid var(--border);
  border-radius:28px;
  padding:48px 40px;
  position:relative;
  overflow:hidden;
}
.author-card::before{
  content:'';
  position:absolute;
  top:-2px;left:-2px;right:-2px;bottom:-2px;
  border-radius:30px;
  background:linear-gradient(135deg,var(--purple),var(--green),var(--pink),var(--purple));
  z-index:-1;
  animation:borderGlow 4s linear infinite;
  background-size:300% 300%;
}
@keyframes borderGlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

.author-photo-wrap{
  position:relative;
  display:inline-block;
  margin-bottom:24px;
}
.author-photo{
  width:120px;
  height:120px;
  border-radius:50%;
  object-fit:cover;
  border:3px solid var(--bg);
  position:relative;
  z-index:2;
}
.author-ring{
  position:absolute;
  inset:-8px;
  border-radius:50%;
  border:2px solid transparent;
  background:linear-gradient(var(--card),var(--card)) padding-box,
             linear-gradient(135deg,var(--purple),var(--green),var(--pink)) border-box;
  animation:spinRing 3s linear infinite;
  z-index:1;
}
.author-glow{
  position:absolute;
  inset:-20px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(244,114,182,0.25),transparent 70%);
  animation:glowPulse 2s ease-in-out infinite;
  z-index:0;
}

.author-name{
  font-size:26px;
  font-weight:800;
  letter-spacing:-0.5px;
  background:linear-gradient(135deg,#fff,var(--pink));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  margin-bottom:6px;
}
.author-role{
  font-family:'JetBrains Mono',monospace;
  font-size:13px;
  color:var(--green);
  margin-bottom:4px;
}
.author-loc{
  font-size:13px;
  color:var(--muted);
  margin-bottom:28px;
}

.author-links{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:center;
}
.author-link{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:8px 16px;
  border-radius:100px;
  font-size:12px;
  font-weight:600;
  text-decoration:none;
  border:1px solid var(--border);
  background:var(--surface);
  color:var(--text);
  transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
}
.author-link:hover{transform:translateY(-2px)}
.author-link.wa{border-color:rgba(37,211,102,0.4);color:#25d366}
.author-link.wa:hover{box-shadow:0 6px 20px rgba(37,211,102,0.2)}
.author-link.tg{border-color:rgba(0,136,204,0.4);color:#0088cc}
.author-link.tg:hover{box-shadow:0 6px 20px rgba(0,136,204,0.2)}
.author-link.yt{border-color:rgba(255,0,0,0.4);color:#ff4444}
.author-link.yt:hover{box-shadow:0 6px 20px rgba(255,0,0,0.2)}

/* ── FOOTER ── */
footer{
  text-align:center;
  padding:32px 24px 48px;
  font-size:13px;
  color:var(--muted);
  border-top:1px solid var(--border);
  position:relative;
}
footer span{color:var(--purple2);font-weight:700}
footer .footer-glow{
  position:absolute;
  bottom:0;left:50%;
  transform:translateX(-50%);
  width:300px;height:2px;
  background:linear-gradient(90deg,transparent,var(--purple),transparent);
  animation:footerGlow 3s ease-in-out infinite;
}
@keyframes footerGlow{0%,100%{opacity:0.4;width:200px}50%{opacity:1;width:400px}}

/* scroll reveal */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:opacity 0.7s ease,transform 0.7s ease;
}
.reveal.visible{opacity:1;transform:translateY(0)}

@media(max-width:600px){
  .hero-duo{gap:32px}
  .avatar-wrap img{width:120px;height:120px}
  section{padding:60px 20px}
  .author-card{padding:36px 24px}
}
</style>
</head>
<body>

<!-- Aurora background -->
<div class="aurora">
  <div class="aurora-blob"></div>
  <div class="aurora-blob"></div>
  <div class="aurora-blob"></div>
</div>

<!-- Particles canvas -->
<canvas id="particles"></canvas>

<div class="wrapper">

<!-- ═══ HERO ═══ -->
<div class="hero">

  <div class="hero-duo">

    <!-- GoatStore Logo -->
    <div class="avatar-wrap logo-avatar">
      <div class="glow-pulse"></div>
      <div class="ring"></div>
      <img src="https://i.imgur.com/8u69HqO.jpeg" alt="GoatStore"/>
      <div class="orbit">
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
      </div>
      <div class="avatar-label">⚡ <span>GoatStore</span> v1.0</div>
    </div>

    <!-- Center Divider -->
    <div class="duo-divider">
      <span></span><span></span><span></span>
      <span></span><span></span><span></span>
    </div>

    <!-- Rocky Photo -->
    <div class="avatar-wrap rocky-avatar">
      <div class="glow-pulse"></div>
      <div class="ring"></div>
      <img src="https://i.imgur.com/Tu50EvM.jpeg" alt="Rocky Chowdhury"/>
      <div class="orbit" style="animation-direction:reverse">
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
      </div>
      <div class="avatar-label">👨‍💻 <span>Rocky</span> Chowdhury</div>
    </div>

  </div>

  <h1 class="hero-title">GoatStore</h1>
  <p class="hero-sub">Fast file hosting for <em>GoatBot</em> commands. Upload JS → Get a Link → Done.</p>
  <div class="typewriter" id="typewriter"></div>

  <div class="badges">
    <div class="badge badge-green">🟢 Live</div>
    <div class="badge badge-purple">⚡ Instant Upload</div>
    <div class="badge badge-gold">⏱️ 24h Expiry</div>
    <div class="badge badge-pink">🤖 GoatBot Ready</div>
    <div class="badge badge-purple">🌐 Vercel KV</div>
    <div class="badge badge-green">🔒 No Auth</div>
  </div>

  <div class="scroll-arrow">↓</div>
</div>

<!-- wave -->
<div class="wave">
<svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#0d0d1f"/>
</svg>
</div>

<!-- ═══ FEATURES ═══ -->
<section class="reveal">
  <div class="section-tag">Features</div>
  <h2 class="section-title">Everything You Need</h2>
  <p style="color:var(--muted);font-size:15px;max-width:500px">A dead-simple file hosting service designed specifically for GoatBot command sharing.</p>

  <div class="features-grid">
    <div class="feature-card">
      <span class="feature-icon">⚡</span>
      <div class="feature-title">Instant Upload</div>
      <div class="feature-desc">Paste your JS code, get a shareable link in under a second. No login, no setup, no friction.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">👁️</span>
      <div class="feature-title">View Only</div>
      <div class="feature-desc">Links open directly in the browser as readable code — no forced downloads, no extra steps.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">⏱️</span>
      <div class="feature-title">Auto Expire</div>
      <div class="feature-desc">Every file self-destructs after 24 hours. Clean, ephemeral, and clutter-free by design.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🤖</span>
      <div class="feature-title">GoatBot Native</div>
      <div class="feature-desc">Use the <code style="color:var(--purple2);background:rgba(124,106,247,0.1);padding:2px 6px;border-radius:4px">draft.js</code> command to upload any command file directly from Messenger chat.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🌐</span>
      <div class="feature-title">Vercel KV Storage</div>
      <div class="feature-desc">Backed by Redis-powered Vercel KV. Serverless, globally distributed, always fast.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🔒</span>
      <div class="feature-title">Zero Auth</div>
      <div class="feature-desc">No accounts, no API keys. Just a POST request with your content and you're live.</div>
    </div>
  </div>
</section>

<!-- wave -->
<div class="wave"><svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 C360,60 1080,0 1440,60 L1440,60 L0,60 Z" fill="#05050f"/></svg></div>
<div style="background:#0d0d1f">
<!-- wave -->
<div class="wave"><svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,60 C360,0 1080,60 1440,0 L1440,0 L0,0 Z" fill="#05050f"/></svg></div>
</div>

<!-- ═══ API REFERENCE ═══ -->
<section class="reveal">
  <div class="section-tag">API Reference</div>
  <h2 class="section-title">Two Endpoints. That's It.</h2>

  <div class="api-grid">
    <div class="api-card">
      <div class="api-header">
        <span class="method-badge method-post">POST</span>
        <span class="api-path">/upload</span>
      </div>
      <div class="api-body">
        <p class="api-desc">Upload JS code and receive a shareable view link. Expires in 24 hours.</p>
        <div class="code-block">
          <div class="code-header"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div>
          <div class="code-content"><span class="cmt">// Request Body</span>
{
  <span class="key">"content"</span>: <span class="str">"// your js code"</span>
}

<span class="cmt">// Response</span>
{
  <span class="key">"success"</span>: <span class="val">true</span>,
  <span class="key">"id"</span>: <span class="str">"Cdgk1YJ-"</span>,
  <span class="key">"url"</span>: <span class="str">"https://goatstore-phi.vercel.app/raw/Cdgk1YJ-"</span>
}</div>
        </div>
      </div>
    </div>

    <div class="api-card">
      <div class="api-header">
        <span class="method-badge method-get">GET</span>
        <span class="api-path">/raw/:id</span>
      </div>
      <div class="api-body">
        <p class="api-desc">View uploaded file as plain text in browser. Valid for 24 hours from upload time.</p>
        <div class="code-block">
          <div class="code-header"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div>
          <div class="code-content"><span class="cmt">// Request</span>
GET /raw/<span class="val">Cdgk1YJ-</span>

<span class="cmt">// Response</span>
Content-Type: <span class="str">text/plain</span>
Status: <span class="val">200 OK</span>

<span class="cmt">// On expire or not found</span>
Status: <span class="val">404</span> Not Found</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ GOATBOT COMMAND ═══ -->
<section class="reveal" style="background:var(--surface);border-radius:32px;margin-top:0">
  <div class="section-tag">GoatBot Command</div>
  <h2 class="section-title">draft.js — Upload from Messenger</h2>
  <p style="color:var(--muted);font-size:15px;margin-bottom:8px">Drop <code style="color:var(--purple2);background:rgba(124,106,247,0.1);padding:2px 8px;border-radius:6px">draft.js</code> inside <code style="color:var(--green);background:rgba(52,211,153,0.08);padding:2px 8px;border-radius:6px">modules/commands/</code> — then use it straight from chat.</p>

  <table class="cmd-table">
    <thead>
      <tr>
        <th>Command</th>
        <th>What It Does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="cmd-code">.draft info</span></td>
        <td>Reads <code style="color:var(--green)">info.js</code> from commands folder → uploads → sends link</td>
      </tr>
      <tr>
        <td><span class="cmd-code">.draft uid</span></td>
        <td>Reads <code style="color:var(--green)">uid.js</code> → uploads → sends link</td>
      </tr>
      <tr>
        <td><span class="cmd-code">.draft canvas</span></td>
        <td>Reads <code style="color:var(--green)">canvas.js</code> → uploads → sends link</td>
      </tr>
      <tr>
        <td><span class="cmd-code">.draft</span> <span style="color:var(--muted);font-size:12px">(+ .js reply)</span></td>
        <td>Uploads the attached .js file directly</td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top:28px">
    <div class="code-block" style="max-width:420px">
      <div class="code-header"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-left:8px">Bot Output</span></div>
      <div class="code-content"><span class="key">✅</span> Upload Successful!

<span class="key">📁</span> File: <span class="str">info.js</span>
<span class="key">🔗</span> Link:
<span class="val">https://goatstore-phi.vercel.app/raw/Cdgk1YJ-</span>

<span class="key">📄</span> Lines: <span class="val">312</span>
<span class="key">📦</span> Size: <span class="val">8.42 KB</span>
<span class="key">⏱️</span> Expires: <span class="str">In 24 hours</span></div>
    </div>
  </div>
</section>

<!-- ═══ STRUCTURE ═══ -->
<section class="reveal">
  <div class="section-tag">Project Structure</div>
  <h2 class="section-title">Clean & Simple</h2>

  <div class="tree-wrap">
    <div class="tree-header">
      <div class="code-dot" style="width:10px;height:10px;border-radius:50%;background:#ff5f57"></div>
      <div class="code-dot" style="width:10px;height:10px;border-radius:50%;background:#febc2e"></div>
      <div class="code-dot" style="width:10px;height:10px;border-radius:50%;background:#28c840"></div>
      <span style="margin-left:8px">goatstore/</span>
    </div>
    <div class="tree-body">
<span class="dir">goatstore/</span>
│
├── <span class="file">index.js</span>          <span class="comment"># Main server — routing & page rendering</span>
│
├── <span class="dir">api/</span>
│   ├── <span class="file">upload.js</span>     <span class="comment"># POST /upload — saves content to KV</span>
│   └── <span class="file">raw.js</span>        <span class="comment"># GET /raw/:id — serves as plain text</span>
│
├── <span class="dir">lib/</span>
│   └── <span class="file">store.js</span>      <span class="comment"># In-memory fallback store</span>
│
├── <span class="file">vercel.json</span>       <span class="comment"># Vercel deployment config</span>
└── <span class="file">package.json</span>
    </div>
  </div>
</section>

<!-- ═══ TECH STACK ═══ -->
<section class="reveal">
  <div class="section-tag">Tech Stack</div>
  <h2 class="section-title">Built With</h2>

  <div class="stack-grid">
    <div class="stack-pill">🟢 Node.js</div>
    <div class="stack-pill">▲ Vercel Serverless</div>
    <div class="stack-pill">🗄️ Vercel KV (Redis)</div>
    <div class="stack-pill">🤖 GoatBot V2</div>
    <div class="stack-pill">🔑 nanoid</div>
  </div>
</section>

<!-- ═══ CONTACT ═══ -->
<section class="reveal">
  <div class="section-tag">Contact & Community</div>
  <h2 class="section-title">Find Me Everywhere</h2>

  <div class="contact-grid">
    <div class="contact-card loc">
      <div class="contact-icon">📍</div>
      <div class="contact-info">
        <div class="contact-platform">Location</div>
        <div class="contact-value">Dhaka, Sreepur — Bangladesh 🇧🇩</div>
      </div>
    </div>
    <a href="https://wa.me/8801312247715" class="contact-card wa" target="_blank">
      <div class="contact-icon">💬</div>
      <div class="contact-info">
        <div class="contact-platform">WhatsApp</div>
        <div class="contact-value">+880 1312-247715</div>
      </div>
    </a>
    <a href="https://t.me/alveeevanroky320" class="contact-card tg" target="_blank">
      <div class="contact-icon">✈️</div>
      <div class="contact-info">
        <div class="contact-platform">Telegram Channel</div>
        <div class="contact-value">@alveeevanroky320</div>
      </div>
    </a>
    <a href="https://t.me/alveeevanroky320bot" class="contact-card tg" target="_blank">
      <div class="contact-icon">👥</div>
      <div class="contact-info">
        <div class="contact-platform">Telegram Group</div>
        <div class="contact-value">@alveeevanroky320bot</div>
      </div>
    </a>
    <a href="https://t.me/alveeevanrocky320" class="contact-card tg" target="_blank">
      <div class="contact-icon">📨</div>
      <div class="contact-info">
        <div class="contact-platform">Telegram Contact</div>
        <div class="contact-value">@alveeevanrocky320</div>
      </div>
    </a>
    <a href="https://chat.whatsapp.com/JcpRcNZijfGAyHXsVliwoU?s=cl&p=a&mlu=4" class="contact-card wa" target="_blank">
      <div class="contact-icon">🌐</div>
      <div class="contact-info">
        <div class="contact-platform">WhatsApp Group</div>
        <div class="contact-value">Join Public Group →</div>
      </div>
    </a>
    <a href="https://youtube.com/@scs404community?si=z6KGcbOzwQDQ_G-A" class="contact-card yt" target="_blank">
      <div class="contact-icon">▶️</div>
      <div class="contact-info">
        <div class="contact-platform">YouTube Channel</div>
        <div class="contact-value">@scs404community</div>
      </div>
    </a>
  </div>
</section>

<!-- ═══ AUTHOR ═══ -->
<div class="author-section reveal">
  <div class="author-card">
    <div class="author-photo-wrap">
      <div class="author-glow"></div>
      <div class="author-ring"></div>
      <img class="author-photo" src="https://i.imgur.com/Tu50EvM.jpeg" alt="Rocky Chowdhury"/>
    </div>
    <div class="author-name">Rocky Chowdhury</div>
    <div class="author-role">⚡ GoatBot Developer · Facebook Bot Creator</div>
    <div class="author-loc">📍 Dhaka, Sreepur · Bangladesh 🇧🇩</div>
    <div class="author-links">
      <a href="https://wa.me/8801312247715" class="author-link wa" target="_blank">💬 WhatsApp</a>
      <a href="https://t.me/alveeevanroky320" class="author-link tg" target="_blank">✈️ Telegram</a>
      <a href="https://youtube.com/@scs404community" class="author-link yt" target="_blank">▶️ YouTube</a>
    </div>
  </div>
</div>

<!-- ═══ FOOTER ═══ -->
<footer>
  Built with ❤️ by <span>Rocky Chowdhury</span> · Powered by <span>GoatBot</span> · GoatStore v1.0
  <div class="footer-glow"></div>
</footer>

</div><!-- /wrapper -->

<script>
// ── PARTICLES ──
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
resize();
window.addEventListener('resize',resize);

class Particle{
  constructor(){this.reset()}
  reset(){
    this.x=Math.random()*W;
    this.y=Math.random()*H;
    this.r=Math.random()*1.5+0.3;
    this.vx=(Math.random()-0.5)*0.3;
    this.vy=(Math.random()-0.5)*0.3;
    this.alpha=Math.random()*0.5+0.1;
    this.color=['#7c6af7','#34d399','#f472b6','#fbbf24'][Math.floor(Math.random()*4)];
  }
  update(){
    this.x+=this.vx;this.y+=this.vy;
    if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();
  }
  draw(){
    ctx.save();
    ctx.globalAlpha=this.alpha;
    ctx.fillStyle=this.color;
    ctx.shadowBlur=6;ctx.shadowColor=this.color;
    ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
}

for(let i=0;i<120;i++)particles.push(new Particle());

function animateParticles(){
  ctx.clearRect(0,0,W,H);
  // connect nearby particles
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x;
      const dy=particles[i].y-particles[j].y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<100){
        ctx.save();
        ctx.globalAlpha=(1-dist/100)*0.08;
        ctx.strokeStyle='#7c6af7';
        ctx.lineWidth=0.5;
        ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.stroke();
        ctx.restore();
      }
    }
  }
  particles.forEach(p=>{p.update();p.draw()});
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── TYPEWRITER ──
const lines=[
  'Upload JS → Get a Link → Done.',
  '24-Hour Auto Expire. Always Clean.',
  'Built for GoatBot 🤖',
  'Powered by Vercel KV ⚡',
  'Made by Rocky Chowdhury 🇧🇩'
];
let li=0,ci=0,deleting=false;
const tw=document.getElementById('typewriter');
function type(){
  const line=lines[li];
  if(!deleting){
    tw.textContent=line.slice(0,ci+1);ci++;
    if(ci===line.length){deleting=true;setTimeout(type,1800);return}
  } else {
    tw.textContent=line.slice(0,ci-1);ci--;
    if(ci===0){deleting=false;li=(li+1)%lines.length}
  }
  setTimeout(type,deleting?40:70);
}
type();

// ── SCROLL REVEAL ──
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
</script>
</body>
</html>
