import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from "motion/react";
import p1img1 from './assets/projects/ChatGPT Image Apr 25, 2026, 03_44_45 AM.png';
import p1img2 from './assets/projects/ChatGPT Image Apr 25, 2026, 03_40_44 AM.png';
import p1img3 from './assets/projects/ChatGPT Image Apr 25, 2026, 04_36_42 AM.png';
import p1img4 from './assets/projects/ChatGPT Image Apr 25, 2026, 03_42_51 AM.png';
import p2img1 from './assets/projects/ChatGPT Image Apr 25, 2026, 04_51_55 PM.png';
import p2img3 from './assets/projects/ChatGPT Image Apr 25, 2026, 04_18_39 AM.png';
import p2img4 from './assets/projects/ChatGPT Image Apr 25, 2026, 05_37_58 AM.png';
import p3img2 from './assets/projects/ChatGPT Image Apr 25, 2026, 05_34_52 AM.png';
import p3img3 from './assets/projects/ChatGPT Image Apr 25, 2026, 04_54_48 PM.png';
import p4img1 from './assets/projects/ChatGPT Image Apr 25, 2026, 06_36_10 AM.png';
import p4img2 from './assets/projects/ChatGPT Image Apr 25, 2026, 06_38_46 AM.png';
import p4img3 from './assets/projects/ChatGPT Image Apr 25, 2026, 06_44_54 AM.png';
import p4img4 from './assets/projects/ChatGPT Image Apr 25, 2026, 05_34_28 AM.png';
import p4img5 from './assets/projects/ChatGPT Image Apr 25, 2026, 06_08_43 AM.png';
import hassanPhoto from './assets/hassan-workspace.webp';
import ukMeta from './assets/projects/uk-sofa-meta-purchases.png';
import ukGtm from './assets/projects/uk-sofa-gtm.png';
import fhcGoogle from './assets/projects/fhc-google-ads.png';
import fhcGtm from './assets/projects/fhc-gtm.png';
import fhcMeta from './assets/projects/fhc-meta-creatives.png';
import academyGoogle from './assets/projects/academy-google-ads.png';
import resumePdf from './assets/Hassan_Ali_Resume_v3.pdf';
import { Download } from 'lucide-react';

// ─────────────────────────────────────────────
// STYLES  (injected at runtime — copy to App.css
// and add  import './App.css'  if you prefer)
// ─────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');
:root{--bg:#F4F0E8;--bg-alt:#ECE8DF;--card:#fff;--text:#1A2332;--t2:#5C6B7A;--t3:#94A0AE;--ac:#2B8C7F;--ac-h:#237A6E;--ac-l:#E0F0EC;--border:rgba(26,35,50,.08);--sh:0 4px 24px rgba(26,35,50,.07);--shb:0 12px 48px rgba(26,35,50,.1);--r:16px;--rs:10px}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden;-webkit-font-smoothing:antialiased;line-height:1.6}
::selection{background:rgba(43,140,127,.18)}
img{max-width:100%}
h1,h2,h3,h4{font-family:'Instrument Serif',serif;font-weight:400}
h2{font-size:clamp(1.8rem,3vw,2.6rem);letter-spacing:-.02em;color:var(--text);line-height:1.15}
h1 em,h2 em{font-style:italic;color:var(--ac)}
.container{max-width:1200px;margin:0 auto;padding:0 32px}
.section{padding:96px 0}
.section-alt{background:var(--bg-alt)}
.section-header{text-align:center;margin-bottom:48px}
.section-tag{font-size:.72rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--ac);margin-bottom:10px;display:block}
.section-desc{color:var(--t2);font-size:.9rem;max-width:460px;margin:10px auto 0}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
.reveal.revealed{opacity:1;transform:translateY(0)}
.page-grid{position:fixed;inset:0;pointer-events:none;z-index:-1;background-image:linear-gradient(rgba(43,140,127,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(43,140,127,.028) 1px,transparent 1px);background-size:54px 54px}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;transition:all .3s}
.nav-scrolled{background:rgba(244,240,232,.93);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);box-shadow:0 1px 3px rgba(26,35,50,.04)}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{display:inline-flex;align-items:baseline;cursor:pointer;user-select:none}
.logo-ads{font-family:'Outfit',sans-serif;font-size:1.6rem;font-weight:800;color:#000;letter-spacing:-.03em;line-height:1}
.logo-vocate{font-family:'Instrument Serif',serif;font-style:italic;font-size:1.7rem;color:var(--ac);letter-spacing:.02em;line-height:1;-webkit-text-stroke:0.4px var(--ac)}
.nav-links{display:flex;gap:28px;align-items:center}
.nav-link{background:none;border:none;font-family:'Outfit',sans-serif;font-size:.85rem;font-weight:500;color:var(--t2);cursor:pointer;transition:color .2s;text-transform:capitalize;padding:0}
.nav-link:hover{color:var(--ac)}
.nav-hamburger{display:none;background:none;border:none;cursor:pointer;width:32px;height:22px;flex-direction:column;justify-content:space-between;padding:0}
.nav-hamburger span{display:block;width:100%;height:2px;background:var(--text);border-radius:2px}
.nav-mobile{display:flex;flex-direction:column;gap:12px;padding:20px 32px;background:rgba(244,240,232,.98);border-bottom:1px solid var(--border)}
.nav-mobile .nav-link{font-size:1rem;padding:8px 0}
.btn-primary{background:var(--ac);color:#fff;border:none;padding:13px 26px;border-radius:var(--rs);font-family:'Outfit',sans-serif;font-size:.88rem;font-weight:600;cursor:pointer;transition:all .2s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;letter-spacing:.01em}
.btn-primary:hover{background:var(--ac-h);transform:translateY(-2px);box-shadow:0 8px 28px rgba(43,140,127,.3)}
.btn-primary:disabled{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}
.btn-outline{background:transparent;color:var(--ac);border:1.5px solid var(--ac);padding:13px 26px;border-radius:var(--rs);font-family:'Outfit',sans-serif;font-size:.88rem;font-weight:600;cursor:pointer;transition:all .2s;display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.btn-outline:hover{background:var(--ac-l);transform:translateY(-2px)}
.btn-sm{padding:9px 18px;font-size:.8rem}
.hero{min-height:100vh;display:flex;align-items:center;padding:120px 0 80px;position:relative;overflow:hidden}
.hero-glow{position:absolute;border-radius:50%;pointer-events:none}
.hero-glow-1{top:5%;right:-5%;width:600px;height:600px;background:radial-gradient(circle,rgba(43,140,127,.07) 0%,transparent 65%)}
.hero-glow-2{bottom:10%;left:-8%;width:350px;height:350px;background:radial-gradient(circle,rgba(184,137,46,.06) 0%,transparent 65%)}
.hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:60px;align-items:center;position:relative;z-index:1}
.hero-text{max-width:560px}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:var(--ac-l);border:1px solid rgba(43,140,127,.2);border-radius:100px;font-size:.78rem;font-weight:500;color:var(--ac);margin-bottom:24px}
.pulse-dot{width:8px;height:8px;border-radius:50%;background:#3CB371;box-shadow:0 0 8px rgba(60,179,113,.7);animation:pulse 2s ease infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.15)}}
h1{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(2.1rem,4vw,3.4rem);line-height:1.08;letter-spacing:-.03em;color:var(--text);margin-bottom:20px}
h1 em{font-style:italic;color:var(--ac);display:block;margin-top:4px}
.hero-desc{font-size:1rem;color:var(--t2);line-height:1.72;margin-bottom:10px;max-width:480px;text-wrap:pretty}
.hero-sub{font-size:.82rem;color:var(--t3);margin-bottom:28px}
.hero-ctas{display:flex;gap:12px;margin-bottom:28px;flex-wrap:wrap}
.hero-tags{display:flex;gap:8px;flex-wrap:wrap}
.hero-tag{padding:5px 12px;background:var(--card);border:1px solid var(--border);border-radius:6px;font-size:.74rem;font-weight:500;color:var(--t2)}.hero-dl-link{display:inline-flex;align-items:center;gap:6px;font-size:.78rem;color:var(--t2);font-weight:500;text-decoration:none;margin-bottom:18px;transition:color .2s}.hero-dl-link:hover{color:var(--ac)}
.fade-up{opacity:0;transform:translateY(22px);animation:fadeUp .7s ease forwards}
.d1{animation-delay:.05s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}.d4{animation-delay:.42s}.d5{animation-delay:.55s}
@keyframes fadeUp{to{opacity:1;transform:translateY(0)}}
.fade-in-photo{opacity:0;animation:fadeIn .9s ease .2s forwards}
@keyframes fadeIn{to{opacity:1}}
.hero-photo-col{display:flex;justify-content:center;align-items:center;position:relative}
.hero-photo-wrapper{position:relative;transition:transform .15s ease-out}
.hero-photo{width:250px;height:250px;border-radius:50%;border:3px solid rgba(43,140,127,.2);background:linear-gradient(145deg,var(--ac-l),#d4e8e4);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;z-index:2;overflow:hidden;animation:photoGlow 4s ease-in-out infinite}
.hero-photo img{width:100%;height:100%;object-fit:cover;object-position:52% 43%;transform:scale(1.04)}
@keyframes photoGlow{0%,100%{box-shadow:0 0 30px rgba(43,140,127,.12),0 0 80px rgba(43,140,127,.06)}50%{box-shadow:0 0 45px rgba(43,140,127,.18),0 0 100px rgba(43,140,127,.08)}}
.hero-photo-ring{position:absolute;border-radius:50%;border:1px solid rgba(43,140,127,.1);top:50%;left:50%;transform:translate(-50%,-50%)}
.ring-1{width:310px;height:310px;animation:ringPulse 3s ease-out infinite}
.ring-2{width:380px;height:380px;animation:ringPulse 3.8s ease-out .5s infinite}
@keyframes ringPulse{0%{transform:translate(-50%,-50%) scale(1);opacity:.4}100%{transform:translate(-50%,-50%) scale(1.2);opacity:0}}
.photo-initial{font-family:'Instrument Serif',serif;font-size:4.5rem;color:rgba(43,140,127,.3);line-height:1}
.photo-hint{font-size:.55rem;color:rgba(43,140,127,.25);margin-top:4px}
.hero-float-chip{position:absolute;padding:10px 14px;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);box-shadow:var(--sh);z-index:3;animation:chipFloat 4s ease-in-out infinite}
.chip-right{top:8%;right:-10%;animation-delay:0s}
.chip-left{bottom:12%;left:-14%;animation-delay:1.2s}
@keyframes chipFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.hero-float-chip strong{display:block;font-family:'Instrument Serif',serif;font-size:1.1rem;color:var(--ac);line-height:1}
.hero-float-chip span{font-size:.6rem;color:var(--t3)}
.stats-strip{border-top:2px solid var(--ac);border-bottom:1px solid var(--border);padding:28px 0;background:var(--card);position:relative;z-index:1}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.stat-item{text-align:center}.stat-item:not(:last-child){border-right:1px solid var(--border)}
.stat-value{font-family:'Instrument Serif',serif;font-size:1.8rem;color:var(--ac);line-height:1}
.stat-label{font-size:.7rem;color:var(--t3);margin-top:4px;font-weight:500}
.problem-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.problem-card{padding:28px;background:var(--card);border:1px solid var(--border);border-radius:var(--r);transition:all .25s}
.problem-card:hover{box-shadow:var(--sh);transform:translateY(-3px)}
.problem-num{font-family:'Instrument Serif',serif;font-size:2.4rem;color:var(--ac);line-height:1;display:block;margin-bottom:12px}
.problem-card h3{font-family:'Outfit',sans-serif;font-size:.95rem;font-weight:700;color:var(--text);margin-bottom:8px;line-height:1.3}
.problem-card p{font-size:.85rem;color:var(--t2);line-height:1.65;text-wrap:pretty}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:56px}
.service-card{padding:32px;background:var(--card);border:1px solid var(--border);border-radius:var(--r);transition:all .25s}
.service-card:hover{box-shadow:var(--sh);transform:translateY(-3px);border-color:rgba(43,140,127,.2)}
.service-num{font-family:'Instrument Serif',serif;font-size:3rem;color:var(--ac);line-height:1;display:block;margin-bottom:8px}
.service-card h3{font-family:'Instrument Serif',serif;font-size:1.2rem;color:var(--text);margin-bottom:10px}
.service-card p{font-size:.85rem;color:var(--t2);line-height:1.65;margin-bottom:14px;text-wrap:pretty}
.service-highlight{font-size:.76rem;font-weight:600;color:var(--ac)}
.platforms-section{text-align:center}
.platforms-title{font-family:'Instrument Serif',serif;font-size:1.15rem;color:var(--text);margin:8px 0 24px}
.platform-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;max-width:720px;margin:0 auto}
.platform-item{display:flex;flex-direction:column;align-items:center;gap:7px;padding:14px 16px;border-radius:12px;width:88px;border:1px solid;transition:all .2s;cursor:default}
.platform-item span{font-size:.58rem;text-align:center;line-height:1.2;font-weight:500;transition:color .2s}
.projects-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-bottom:28px}
.work-group{margin-bottom:54px}
.work-group-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin:0 0 20px}
.work-group-head h3{font-size:1.45rem;line-height:1.1}
.work-group-head p{max-width:520px;font-size:.82rem;line-height:1.6;color:var(--t2);text-align:right}
.project-card{padding:28px;background:var(--card);border:1px solid var(--border);border-radius:var(--r);cursor:pointer;position:relative;overflow:hidden;transition:background .3s,border-color .3s,box-shadow .3s}
.project-card-hover{border-color:rgba(43,140,127,.25);box-shadow:var(--shb)}
.project-card-glow{position:absolute;top:0;left:20%;right:20%;height:2px;background:linear-gradient(90deg,transparent,var(--ac),transparent);transition:opacity .4s}
.project-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px}
.project-card-media{height:188px;margin:0 -28px 20px;position:relative;overflow:hidden;background:var(--bg-alt);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.project-card-media img{width:100%;height:100%;object-fit:cover;object-position:var(--cover-position,center 50%);transform:scale(var(--cover-scale,1));display:block;filter:saturate(.86) contrast(1.04)}
.project-card-media::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(26,35,50,.72))}
.project-card-media span{position:absolute;left:16px;bottom:12px;z-index:1;color:#fff;font-size:.64rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
.project-card-media-type{display:flex;align-items:flex-end;padding:22px;background:linear-gradient(135deg,var(--ac-l),#d3e7e2)}
.project-card-media-type::after{display:none}
.project-card-media-type strong{font-family:'Instrument Serif',serif;font-size:2.15rem;font-weight:400;line-height:.95;color:var(--ac);max-width:90%}
.project-category{padding:3px 10px;background:var(--ac-l);border:1px solid rgba(43,140,127,.15);border-radius:20px;font-size:.65rem;font-weight:600;color:var(--ac);letter-spacing:.08em;text-transform:uppercase}
.project-open-btn{width:30px;height:30px;border-radius:50%;background:var(--bg-alt);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t2);flex-shrink:0}
.project-card-title{font-family:'Instrument Serif',serif;font-size:1.2rem;color:var(--text);margin-bottom:4px;line-height:1.25}
.project-card-subtitle{font-size:.82rem;color:var(--ac);font-weight:500;margin-bottom:18px}
.project-metrics-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:16px;background:var(--bg);border-radius:var(--rs);margin-bottom:14px}
.project-metric{text-align:center}
.project-metric-val{font-family:'Instrument Serif',serif;font-size:1.45rem;color:var(--ac);line-height:1}
.project-metric-label{font-size:.58rem;color:var(--t3);margin-top:3px;letter-spacing:.06em;text-transform:uppercase;font-weight:500}
.project-tags{display:flex;gap:5px;flex-wrap:wrap}
.project-tag{padding:2px 8px;background:var(--bg);border-radius:4px;font-size:.66rem;color:var(--t2);font-weight:500}
.project-card-hint{font-size:.74rem;color:var(--t3);margin-top:12px;font-style:italic}
.work-note{font-size:.72rem;color:var(--t3);line-height:1.6;text-align:center;max-width:720px;margin:0 auto 22px}
.work-links{display:flex;justify-content:center;gap:12px}
.case-study-overlay{position:fixed;inset:0;background:rgba(26,35,50,.5);z-index:200;display:flex;align-items:flex-start;justify-content:center;padding:40px 20px;overflow-y:auto;backdrop-filter:blur(4px)}
.case-study-panel{background:var(--card);border:1px solid var(--border);border-radius:var(--r);max-width:800px;width:100%;position:relative;box-shadow:var(--shb)}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.case-study-close{position:absolute;top:20px;right:20px;width:36px;height:36px;border-radius:50%;background:var(--bg);border:1px solid var(--border);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--t2);transition:all .2s;z-index:10}
.case-study-close:hover{background:var(--bg-alt);color:var(--text)}
.case-study-header{padding:32px 36px 24px;border-bottom:1px solid var(--border)}
.case-study-header h2{font-size:1.6rem;margin-top:10px;margin-bottom:4px}
.case-study-subtitle{font-size:.9rem;color:var(--ac);font-weight:500}
.case-study-role{font-size:.78rem;color:var(--t3);margin-top:4px}
.case-study-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:20px 36px;border-bottom:1px solid var(--border)}
.case-study-metric{background:var(--bg);border-radius:var(--rs);padding:16px;text-align:center}
.case-study-metric-val{font-family:'Instrument Serif',serif;font-size:1.8rem;color:var(--ac);line-height:1}
.case-study-metric-label{font-size:.65rem;color:var(--t3);margin-top:4px;text-transform:uppercase;letter-spacing:.06em;font-weight:500}
.case-study-body{padding:28px 36px}
.cs-text-block{margin-bottom:24px}
.cs-text-block h4{font-family:'Outfit',sans-serif;font-size:.74rem;font-weight:700;color:var(--ac);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
.cs-text-block p{font-size:.88rem;color:var(--t2);line-height:1.75;text-wrap:pretty}
.case-study-footer{padding:18px 36px;border-top:1px solid var(--border)}
.case-study-link{font-size:.8rem;color:var(--ac);text-decoration:none;display:inline-flex;align-items:center;gap:5px;font-weight:500}
.case-study-link:hover{text-decoration:underline}
.project-image{margin:20px 0;border-radius:var(--rs);overflow:hidden}
.project-image-frame{height:330px;overflow:hidden;border:1px solid var(--border);border-radius:var(--rs);position:relative;background:var(--bg-alt)}
.project-image-frame img{width:100%;height:100%;object-fit:cover;object-position:var(--focus-position,center 50%);transform:scale(var(--focus-scale,1));display:block}
.project-image-frame::after{content:"VIEW FULL SCREENSHOT";position:absolute;right:10px;bottom:10px;background:rgba(26,35,50,.86);color:#fff;border-radius:4px;padding:5px 8px;font-size:.55rem;font-weight:600;letter-spacing:.08em}
.img-placeholder{background:var(--bg);border:1.5px dashed rgba(43,140,127,.2);border-radius:var(--rs);padding:32px 20px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;min-height:120px;justify-content:center;color:var(--t2);transition:all .2s;cursor:pointer}
.img-placeholder:hover{border-color:var(--ac);background:var(--ac-l)}
.img-placeholder span{font-size:.78rem;font-weight:500;line-height:1.4}
.img-placeholder small{font-size:.62rem;color:var(--t3)}
.img-caption{font-size:.72rem;color:var(--t3);margin-top:8px;text-align:center;font-style:italic}
.lightbox{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:300;display:flex;align-items:center;justify-content:center;padding:40px;cursor:zoom-out}
.lightbox-close{position:absolute;top:20px;right:20px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:background .2s}
.lightbox-close:hover{background:rgba(255,255,255,.2)}
.lightbox-inner{text-align:center;cursor:default}
.lightbox-caption{color:rgba(255,255,255,.7);font-size:.82rem;margin-top:12px}
.certs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.cert-card{padding:24px;background:var(--card);border:1px solid var(--border);border-radius:var(--r);text-decoration:none;display:block;transition:all .25s;position:relative;overflow:hidden}
.cert-card:hover{transform:translateY(-3px);box-shadow:var(--sh)}
.cert-icon{width:40px;height:40px;border-radius:10px;border:1px solid;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.cert-card h3{font-family:'Outfit',sans-serif;font-size:.93rem;font-weight:700;color:var(--text);margin-bottom:5px}
.cert-issuer{font-size:.78rem;color:var(--ac);margin-bottom:2px}
.cert-date{font-size:.7rem;color:var(--t3)}
.cert-verify{position:absolute;bottom:18px;right:18px;font-size:.68rem;color:var(--ac);display:flex;align-items:center;gap:3px;font-weight:500}
.faq-container{background:var(--card);border:1px solid var(--border);border-radius:var(--r);overflow:hidden}
.faq-item{border-bottom:1px solid var(--border)}
.faq-item:last-child{border-bottom:none}
.faq-q{width:100%;padding:18px 22px;background:transparent;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:14px;font-family:'Outfit',sans-serif;text-align:left}
.faq-q span{font-size:.88rem;font-weight:600;color:var(--text);line-height:1.4}
.faq-open .faq-q span{color:var(--ac)}
.faq-toggle{width:24px;height:24px;border-radius:50%;flex-shrink:0;background:var(--bg);display:flex;align-items:center;justify-content:center;color:var(--ac);transition:all .2s}
.faq-open .faq-toggle{background:var(--ac);color:#fff}
.faq-a{overflow:hidden}
.faq-a p{padding:0 22px 18px;font-size:.85rem;color:var(--t2);line-height:1.72}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:stretch}
.contact-col{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:28px}
.contact-col-title{font-family:'Instrument Serif',serif;font-size:1.05rem;color:var(--text);margin-bottom:16px}
.contact-form{display:flex;flex-direction:column;gap:12px;height:100%}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.field{background:var(--bg);border:1.5px solid var(--border);border-radius:var(--rs);color:var(--text);font-family:'Outfit',sans-serif;font-size:.88rem;padding:13px 16px;width:100%;outline:none;transition:border-color .2s}
.field:focus{border-color:var(--ac)}
.field::placeholder{color:var(--t3)}
.field option{background:var(--card)}
textarea.field{resize:vertical;min-height:90px}
.form-success{padding:40px;background:var(--ac-l);border:1px solid rgba(43,140,127,.2);border-radius:var(--r);text-align:center;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}
.form-success h3{font-family:'Outfit',sans-serif;font-size:1rem;font-weight:700;color:var(--ac)}
.form-success p{font-size:.85rem;color:var(--t2)}
.form-error{font-size:.8rem;color:#c0392b;margin-top:4px}
.footer{padding:32px 0;border-top:1px solid var(--border);background:var(--bg-alt);position:relative;z-index:1}
.footer-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.footer-copy{font-size:.78rem;color:var(--t3)}
.footer-links{display:flex;gap:20px;flex-wrap:wrap}
.footer-links a{font-size:.8rem;color:var(--t2);text-decoration:none;font-weight:500;transition:color .2s}
.footer-links a:hover{color:var(--ac)}
.work-intro{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.65fr);align-items:end;gap:52px;margin-bottom:34px}
.work-intro .section-tag{margin-bottom:12px}
.work-intro h2{font-size:clamp(2.7rem,5.5vw,5rem);max-width:760px;line-height:.96}
.work-intro-copy{border-left:2px solid var(--ac);padding-left:22px;color:var(--t2);font-size:.92rem;line-height:1.75}
.work-intro-copy strong{display:block;color:var(--text);font-family:'Instrument Serif',serif;font-size:1.35rem;font-weight:400;line-height:1.2;margin-bottom:7px}
.mobile-swipe-note{display:none;color:var(--ac);font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;margin:0 0 12px}
.current-work-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}
.current-card{grid-column:span 4;min-height:390px;border:1px solid var(--border);border-radius:22px;background:var(--card);overflow:hidden;display:flex;flex-direction:column;position:relative;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;text-align:left;color:inherit;font:inherit}
.current-card:nth-child(1){grid-column:span 5}
.current-card:nth-child(2){grid-column:span 7}
.current-card:hover{transform:translateY(-5px);box-shadow:var(--shb);border-color:rgba(43,140,127,.25)}
.current-card-media{height:188px;position:relative;overflow:hidden;background:var(--bg-alt);border-bottom:1px solid var(--border)}
.current-card-media img{width:100%;height:100%;object-fit:cover;object-position:var(--card-position,50% 50%);transform:scale(var(--card-scale,1));filter:saturate(.82) contrast(1.04);transition:transform .5s ease}
.current-card:hover .current-card-media img{transform:scale(calc(var(--card-scale,1) + .04))}
.current-card-media::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(26,35,50,.75))}
.current-card-media-label{position:absolute;z-index:1;left:18px;bottom:14px;color:#fff;font-size:.64rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase}
.current-card-type{height:188px;padding:24px;background:var(--ac-l);border-bottom:1px solid rgba(43,140,127,.14);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative}
.current-card-type::after{content:"";position:absolute;width:190px;height:190px;border:38px solid rgba(43,140,127,.08);border-radius:50%;right:-68px;bottom:-86px}
.current-card-type span{font-size:.66rem;color:var(--ac);font-weight:700;letter-spacing:.14em}
.current-card-type strong{font-family:'Instrument Serif',serif;font-size:clamp(2rem,3vw,3rem);font-weight:400;line-height:.88;max-width:85%;position:relative;z-index:1}
.current-card-body{padding:22px 22px 20px;display:flex;flex-direction:column;flex:1}
.current-card-kicker{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px}
.current-card-kicker span:first-child{font-size:.62rem;color:var(--ac);font-weight:700;letter-spacing:.12em;text-transform:uppercase}
.current-card-kicker span:last-child{font-family:'Instrument Serif',serif;color:var(--t3);font-size:1.15rem}
.current-card h3{font-size:1.55rem;line-height:1.05;margin-bottom:7px}
.current-card-subtitle{font-size:.78rem;color:var(--t2);line-height:1.5;margin-bottom:16px}
.current-card-proof{margin-top:auto;padding-top:14px;border-top:1px solid var(--border);display:grid;grid-template-columns:8px 1fr;gap:9px;align-items:start;color:var(--text);font-size:.72rem;line-height:1.45;font-weight:500}
.current-card-proof::before{content:"";width:7px;height:7px;background:var(--ac);border-radius:50%;margin-top:3px}
.current-card-arrow{position:absolute;right:18px;top:18px;z-index:2;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.92);color:var(--ac);display:grid;place-items:center;border:1px solid rgba(26,35,50,.08);box-shadow:0 5px 16px rgba(26,35,50,.1)}
.work-actions{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:24px;padding-top:20px;border-top:1px solid var(--border)}
.work-actions-left,.work-actions-right{display:flex;gap:10px;flex-wrap:wrap}
.archive-toggle{border:0;background:none;color:var(--t2);font:600 .78rem 'Outfit',sans-serif;cursor:pointer;padding:9px 0;display:inline-flex;align-items:center;gap:8px}
.archive-toggle:hover{color:var(--ac)}
.archive-wrap{margin-top:36px;padding-top:32px;border-top:1px solid var(--border)}
.archive-wrap .work-group-head{margin-bottom:18px}
.pdf-link{background:var(--text);color:#fff;border-color:var(--text)}
.pdf-link:hover{background:var(--ac);border-color:var(--ac);color:#fff}
.case-study-website{margin-left:16px}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--ac);border-radius:3px}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-photo-col{order:0}
  .hero-text{max-width:100%;text-align:center}
  .hero-ctas,.hero-tags{justify-content:center}
  .hero-badge{margin:0 auto 24px}
  h1 em{display:inline}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:20px}
  .problem-grid,.services-grid,.certs-grid{grid-template-columns:1fr}
  .projects-grid{grid-template-columns:1fr}
  .work-group-head{display:block}
  .work-group-head p{text-align:left;margin-top:7px}
  .contact-grid{grid-template-columns:1fr}
  .nav-links{display:none}
  .nav-hamburger{display:flex}
  .case-study-header,.case-study-body,.case-study-footer{padding-left:22px;padding-right:22px}
  .case-study-metrics{padding-left:22px;padding-right:22px;grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
  .hero-float-chip{display:none}
  .footer-inner{flex-direction:column;text-align:center}
  .hero-photo-col{width:100%;display:flex;justify-content:center}
  .project-card-hint{display:none}
  .case-study-overlay{padding:28px 16px}
  .case-study-panel{border-radius:var(--r)}
  .stat-item:not(:last-child){border-right:none}
  .work-intro{grid-template-columns:1fr;gap:18px;margin-bottom:22px}
  .work-intro-copy{max-width:620px}
  .current-card:nth-child(n){grid-column:span 6}
  .current-card{min-height:370px}
  .work-actions{align-items:flex-start;flex-direction:column}
}
@media(max-width:480px){
  .container{padding:0 18px}
  h1{font-size:2.15rem}
  h2{font-size:1.5rem}
  .section{padding:64px 0}
  .hero-photo{width:200px;height:200px}
  .ring-1{width:255px;height:255px}
  .ring-2{width:315px;height:315px}
  .project-metrics-row{gap:6px;padding:12px}
  .project-card{padding:20px}
  .project-card-media{height:178px;margin:0 -20px 18px}
  .project-card-media img{transform:scale(var(--mobile-cover-scale,var(--cover-scale,1)))}
  .project-image-frame{height:210px}
  .project-image-frame img{transform:scale(var(--mobile-focus-scale,var(--focus-scale,1)))}
  .project-metric-val{font-size:1.2rem}
  .project-metric-label{font-size:.52rem}
  .case-study-overlay{padding:20px 10px}
  .case-study-metric-val{font-size:1.4rem}
  .platform-item{width:76px;padding:10px 8px}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:16px}
  .stat-value{font-size:1.5rem}
  .hero-ctas{flex-direction:column;align-items:center}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
  .work-links{flex-direction:column;align-items:center}
  .cert-card{padding:18px}
  .footer-links{justify-content:center}
  .hero{min-height:auto;padding:104px 0 62px}
  .hero-grid{gap:34px}
  .hero-photo-col{order:-1}
  .hero-photo{width:176px;height:176px}
  .ring-1{width:220px;height:220px}.ring-2{width:270px;height:270px}
  .hero-text{text-align:left}
  .hero-ctas{align-items:stretch}
  .work-intro h2{font-size:2.55rem}
  .work-intro-copy{font-size:.84rem;padding-left:16px}
  .mobile-swipe-note{display:block}
  .current-work-grid{display:grid;grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:min(84vw,330px);gap:12px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;margin-left:-18px;margin-right:-18px;padding:0 18px 18px;scrollbar-width:none}
  .current-work-grid::-webkit-scrollbar{display:none}
  .current-card:nth-child(n){grid-column:auto;scroll-snap-align:start;min-height:350px;border-radius:18px}
  .current-card-media,.current-card-type{height:158px}
  .current-card-type strong{font-size:2rem}
  .current-card-body{padding:18px}
  .current-card h3{font-size:1.35rem}
  .current-card-subtitle{font-size:.74rem;margin-bottom:13px}
  .current-card-proof{font-size:.68rem}
  .work-actions{margin-top:10px;padding-top:18px}
  .work-actions-left,.work-actions-right{width:100%}
  .work-actions .btn-outline,.archive-toggle{width:100%;justify-content:center}
  .archive-wrap{margin-top:28px;padding-top:24px}
  .archive-wrap .projects-grid{display:grid;grid-auto-flow:column;grid-auto-columns:min(84vw,330px);grid-template-columns:none;overflow-x:auto;scroll-snap-type:x mandatory;margin-left:-18px;margin-right:-18px;padding:0 18px 18px;scrollbar-width:none}
  .archive-wrap .project-card{scroll-snap-align:start;min-height:0}
  .project-image-frame{height:220px}
  .case-study-website{display:block;margin:10px 0 0}
  .services-grid,.certs-grid{display:grid;grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:min(82vw,320px);gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;margin-left:-18px;margin-right:-18px;padding:0 18px 18px;scrollbar-width:none}
  .services-grid::-webkit-scrollbar,.certs-grid::-webkit-scrollbar{display:none}
  .service-card,.cert-card{scroll-snap-align:start;min-height:250px}
  .service-card{display:flex;flex-direction:column;padding:24px}
  .service-card .service-highlight{margin-top:auto;padding-top:16px}
  .case-study-metrics{grid-template-columns:repeat(3,minmax(116px,1fr));overflow-x:auto;scroll-snap-type:x mandatory}
  .case-study-metric{scroll-snap-align:start;padding:14px 10px}
  .case-study-metric-val{font-size:1.25rem}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  .reveal{opacity:1;transform:none;transition:none}
  .reveal.revealed{opacity:1;transform:none}
  .fade-up,.fade-in-photo{animation:none;opacity:1;transform:none}
  .pulse-dot,.hero-photo-ring,.hero-float-chip,.hero-photo{animation:none}
}
`;

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const WA_LINK = "https://wa.me/923416495097?text=Hi%20Hassan%2C%20I%20found%20your%20portfolio%20and%20want%20a%20free%20audit";
const HASSAN_EMAIL = "adswithhsn@gmail.com";
const CREATIVE_PORTFOLIO_URL = "https://canva.link/7nk714c5z9ldr9c";
const EMAILJS = { service_id: "service_o8fxyps", template_id: "template_dxjxyq6", user_id: "G20yo67xYtSHdRcHR" };

const PLATFORMS = [
  { name: "Google Ads", slug: "googleads", color: "#4285F4" },
  { name: "Meta Ads", slug: "meta", color: "#0866FF" },
  { name: "GTM", slug: "googletagmanager", color: "#246FDB" },
  { name: "GA4", slug: "googleanalytics", color: "#E37400" },
  { name: "Shopify", slug: "shopify", color: "#96BF48" },
  { name: "Looker Studio", slug: "looker", color: "#4285F4" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
  { name: "WooCommerce", slug: "woocommerce", color: "#7F54B3" },
  { name: "YouTube", slug: "youtube", color: "#FF0000" },
  { name: "Instagram", slug: "instagram", color: "#E1306C" },
  { name: "Facebook", slug: "facebook", color: "#1877F2" },
  { name: "Amazon", slug: "amazon", color: "#FF9900" },
  { name: "eBay", slug: "ebay", color: "#E53238" },
];

const CERTS = [
  { name: "Google Ads Search", issuer: "Google Skillshop", date: "April 2026", url: "https://skillshop.credential.net/60ca21ca-993e-44ba-b306-ec99c97707c0#acc.ryDwhCW3", slug: "googleads", color: "#4285F4" },
  { name: "Google Analytics (GA4)", issuer: "Google Skillshop", date: "April 2026", url: "https://skillshop.credential.net/99f257a1-846c-4e27-87a6-9c9ba100af58#acc.WgOL5nsv", slug: "googleanalytics", color: "#E37400" },
  { name: "Meta Ads Certified", issuer: "Senator We Run Ads", date: "February 2026", url: "https://www.senatorwerunads.com/share-certificate?serialno=LUOYJGKR", slug: "meta", color: "#0866FF" },
];

const FAQS = [
  { q: "What platforms and tools do you work with?", a: "Google Ads (Search, Shopping, Performance Max, Display, YouTube), Meta Ads (Facebook and Instagram), Google Tag Manager, GA4, Shopify, WordPress and WooCommerce. For campaign management and reporting: Looker Studio, Google Merchant Center, Meta Commerce Manager, and Meta Business Manager." },
  { q: "How do you approach measurement?", a: "The measurement plan follows the real business outcome. I verify the relevant events in GTM, GA4 and the ad platforms, document what is platform-reported, and avoid presenting a click or event as a sale when it has not been reconciled." },
  { q: "Do you work with custom-built or headless websites?", a: "Yes. For custom or headless sites, I provide complete GTM installation specifications and a dataLayer implementation brief for your developer. Once the GTM snippet is installed and the dataLayer is pushing events correctly, I configure everything from inside GTM — same result as any other platform." },
  { q: "Can you work with accounts that have never run ads?", a: "Absolutely. I build the correct foundation from scratch — account structure, conversion tracking, campaign architecture, bid strategy progression — so Smart Bidding has real data from day one instead of spending budget blind." },
  { q: "Do you guarantee specific ROAS numbers?", a: "No. Anyone who guarantees 5x ROAS before auditing your site, your margin, and your funnel is not being honest with you. I guarantee correctly structured campaigns, verified tracking, transparent reporting, and clear communication on everything I do." },
  { q: "How do I get started?", a: "Fill the form below or message me on WhatsApp. I will review your current setup within 24 hours and tell you exactly what I see and what I would fix — no obligation." },
];

const PROBLEMS = [
  { title: "Smart Bidding has no signal", desc: "Without verified conversion tracking, Google's algorithm wastes budget on the wrong customers. Every click is a guess — it has no idea which ones are actually buying." },
  { title: "iOS killed your Meta data", desc: "After iOS 14.5, 30–40% of Meta conversions are invisible to the browser Pixel. Without CAPI server-side events, you're optimizing on data that's missing a third of your customers." },
  { title: "Your ROAS numbers are wrong", desc: "View-through attribution, duplicate events, wrong Primary conversion actions — your reported numbers and your real business results are not the same thing. The gap costs you money." },
];

const SERVICES = [
  { title: "Google Ads", desc: "Search, Shopping and the formats justified by the buying journey — structured around intent, economics and reliable conversion actions.", highlight: "Demand capture with commercial controls." },
  { title: "Meta Ads", desc: "Creative testing, prospecting and retargeting built around the offer and the customer decision—not disconnected audience tricks.", highlight: "Creative, audience and landing page aligned." },
  { title: "Websites + Measurement", desc: "WordPress, Next.js, CRO, GTM, GA4 and platform tracking connected to the actions the business actually values.", highlight: "The click and the outcome stay connected." },
];

const PROJECTS = [
  {
    id: 1, title: "GTM Full Stack", subtitle: "GA4 + Enhanced Conversions + Meta CAPI",
    role: "Performance Tracking Specialist — GTM Architecture, Enhanced Conversions, CAPI, GA4 Ecommerce",
    category: "WordPress Tracking", tags: ["GTM", "GA4", "Google Ads", "Meta CAPI"],
    metrics: [{ label: "Tags Built", value: "11", raw: 11 }, { label: "EMQ Score", value: "8.0/10", raw: 8.0 }, { label: "Revenue Tracked", value: "$2,640", raw: 2640 }],
    content: [
      { type: "text", heading: "The Problem", body: "The store had no conversion tracking on either platform. Google Ads was running on Maximize Clicks with no conversion data — Smart Bidding had nothing to optimize toward. Meta Pixel was installed but browser-only, meaning iOS 14 signal loss was cutting 30 to 40 percent of conversion data silently. The algorithm was showing ads to the wrong people at rising cost because it had no purchase signal to learn from." },
      { type: "text", heading: "What I Built", body: "Complete 11-tag GTM container deployed on WordPress covering the full tracking stack across both platforms. Google Ads Conversion Tag with dynamic purchase values. GA4 Ecommerce Master Tag capturing all events from ViewItem through Purchase. Conversion Linker on all pages. Google Ads Remarketing Tag. Two Google Ads User-Provided Data Event tags for Enhanced Conversions for Web and Leads — the correct 2026 method, not the deprecated checkbox. Meta Pixel browser events covering the full funnel. Meta CAPI server-side events with matching Event IDs for deduplication." },
      { type: "img", src: p1img1, caption: "11 Tags Built — Google Ads + GA4 + Enhanced Conversions + Meta CAPI" },
      { type: "text", heading: "Verification & Results", body: "Every tag verified in GTM Preview mode before go-live. GTM Preview showed all 4 purchase tags with Succeeded status. Meta Events Manager confirmed Browser plus Server plus Deduplicated badge on Purchase — zero double counting. Google Ads Purchase conversion moved from Inactive to Active within 48 hours. GA4 recorded 14 purchases with $2,640 in dynamic revenue across 7 products. Event Match Quality reached 8.0 out of 10." },
      { type: "img", src: p1img2, caption: "Purchase Event — All 4 Tags Firing, Enhanced Conversions Active" },
      { type: "img", src: p1img3, caption: "Browser plus Server plus Deduplicated — Zero Double Counting" },
      { type: "img", src: p1img4, caption: "GA4 Ecommerce — $2,640 Revenue Tracked Across 7 Products" },
    ]
  },
  {
    id: 2, title: "Meta Lead Gen — Dental Clinic", subtitle: "135 Leads at $8.54 CPL, EMQ 8.0",
    role: "Meta Ads Specialist — Lead Gen Campaigns, Conversion API, EMQ 8.0, Deduplication Verified",
    category: "Meta Ads + CAPI", tags: ["Meta Ads", "CAPI", "Lead Gen", "Retargeting"],
    metrics: [{ label: "Leads Generated", value: "135", raw: 135 }, { label: "Avg CPL", value: "$8.54", raw: 8.54 }, { label: "Booking Rate", value: "60%", raw: 60 }],
    content: [
      { type: "text", heading: "The Situation", body: "A dental clinic in Lahore had no digital advertising presence and no conversion tracking in place. They were relying entirely on walk-in patients and word of mouth. Previous attempts with boosted posts produced zero measurable results. Two problems needed solving simultaneously — the campaign structure and the tracking foundation. Running ads without server-side tracking meant the algorithm would optimize on incomplete signals from day one." },
      { type: "img", src: p2img1, caption: "Meta Ads Manager — DentalCare Campaigns, 135 Total Leads, Above Average Quality Rating" },
      { type: "text", heading: "Campaign Strategy", body: "Built two separate campaigns targeting different audience temperatures. Cold campaign targeting adults aged 25 to 55 within 15km of the clinic using detailed interest targeting. Used Higher Intent lead form type with qualifying questions to filter serious appointment seekers — critical for dental lead gen because More Volume forms fill fast but book poorly. Retargeting campaign reached people who engaged but had not submitted a form, at higher frequency with stronger urgency messaging." },
      { type: "text", heading: "Tracking Foundation", body: "Configured Meta Pixel plus Conversion API with matching Event IDs so every browser event and server event pair is recognized as one occurrence — not counted twice. Optimized 11 first-party data parameters through both channels including email hash, phone hash, first name, surname, city, postcode, and IP address. These parameters drive Event Match Quality above 7.5 where Meta's algorithm reliably identifies high-value audiences." },
      { type: "img", src: p1img3, caption: "Meta CAPI — Browser plus Server plus Deduplicated Confirmed, Zero Double Counting" },
      { type: "img", src: p2img4, caption: "Google Ads Conversion Tracking Active — Purchase Recording" },
      { type: "img", src: p1img1, caption: "Google Tag Manager — 11 Tags Built" },
      { type: "text", heading: "Results", body: "135 qualified leads total. Cold campaign: 94 leads at $9.01 CPL with Above Average quality rating and 2.37% CTR. Retargeting: 41 leads at $7.61 CPL with Above Average quality and 4.24% CTR. Clinic reported 60% of leads converting to booked appointments. EMQ reached 8.0 out of 10. All six funnel events confirmed Active. Browser plus Server plus Deduplicated badge confirmed." },
      { type: "img", src: p2img3, caption: "Meta Events Manager — EMQ 8.0 on Purchase, Full Funnel Active, Browser plus Server Both Connected" },
    ]
  },
  {
    id: 3, title: "Google Ads Search Campaign", subtitle: "3,240 Clicks — $0.94 CPC — 52% Growth",
    role: "Google Ads Specialist — Search Campaign Setup, Shopify Conversion Tracking, Enhanced Conversions",
    category: "Google Ads + Shopify", tags: ["Google Ads", "Shopify", "Enhanced Conversions", "PPC"],
    metrics: [{ label: "Total Clicks", value: "3,240", raw: 3240 }, { label: "Avg CPC", value: "$0.94", raw: 0.94 }, { label: "MoM Growth", value: "52%", raw: 52 }],
    content: [
      { type: "text", heading: "The Situation", body: "A Shopify ecommerce store selling lifestyle products had never run Google Ads. Every sale was coming from organic social with zero presence in Google Search. The owner knew customers were searching but had no way to capture that intent. Launching campaigns without verified tracking means Smart Bidding has no signal and spends budget finding the wrong customers. The correct foundation had to be built before any ad spend went live." },
      { type: "img", src: p2img4, caption: "Google Ads Goals — Purchase Conversion Active, 47 Conversions, $3,840 Revenue Tracked" },
      { type: "text", heading: "Conversion Tracking Setup", body: "Shopify non-Plus stores cannot access checkout pages through GTM — the checkout domain is locked. The correct method is the official Google and YouTube app through Shopify Customer Events with full access to purchase data. Set Purchase as Primary with Data-Driven Attribution and dynamic purchase values. Enhanced Conversions enabled for cross-device attribution recovery. Checkout and Cart set as Secondary so they inform without distorting Smart Bidding." },
      { type: "img", src: p3img2, caption: "Conversion Settings — DDA Attribution, Enhanced Conversions Active, 90-Day Window, Dynamic Values" },
      { type: "text", heading: "Campaign Architecture", body: "Built tightly themed ad groups where every keyword shares the same specific buyer intent — this is the foundation of Quality Score. When the keyword, RSA headline, and landing page align on the same intent, Quality Score rises and CPC drops. Wrote RSAs with 15 headlines and 4 descriptions per ad group. Added 40 negative keywords at launch. Bid strategy: Maximize Clicks → Maximize Conversions → Target CPA progression." },
      { type: "text", heading: "Results", body: "3,240 clicks at $0.94 average CPC across 47,820 impressions. Interaction rate 6.78%. 52% MoM growth as Smart Bidding improved using real purchase data. CPC dropped 18% MoM as Quality Score improved. 47 conversions recorded with $3,840 total revenue tracked via dynamic purchase values." },
      { type: "img", src: p3img3, caption: "Google Ads Dashboard — 3,240 Clicks, $0.94 CPC, 52% Month on Month Growth" },
    ]
  },
  {
    id: 4, title: "Shopify Full Tracking", subtitle: "Meta CAPI + Google Ads + Catalogue",
    role: "Shopify Tracking Specialist — Meta Pixel, Parkour CAPI, Google and YouTube App, Customer Events",
    category: "Shopify Tracking", tags: ["Shopify", "Meta CAPI", "Google Ads", "DPA"],
    metrics: [{ label: "EMQ Score", value: "8.0/10", raw: 8.0 }, { label: "Conversions", value: "47", raw: 47 }, { label: "Revenue Tracked", value: "$3,840", raw: 3840 }],
    content: [
      { type: "text", heading: "The Situation", body: "A Shopify bookstore selling psychology, self-help, and fiction titles across Pakistan with cash on delivery had no reliable conversion tracking on either ad platform. The native Facebook app was browser-only. Google Ads had no conversion action. Every sale was invisible to both algorithms." },
      { type: "img", src: p4img1, caption: "Shopify Customer Events — Meta Pixel, Parkour CAPI, and Google Ads All Connected and Active" },
      { type: "text", heading: "Why Shopify Tracking Is Different", body: "Standard GTM cannot track purchases on non-Plus Shopify stores — the checkout domain is locked. The correct solution is Shopify Customer Events, a sandboxed pixel environment with full access to purchase and checkout data. The Google and YouTube official app and Parkour Facebook Pixel app both use this system correctly, meaning purchase events flow accurately to both platforms without developer involvement." },
      { type: "text", heading: "What Was Configured", body: "Three tracking systems installed: Google and YouTube app with Purchase as Primary, DDA, dynamic values, Enhanced Conversions — 47 conversions, $3,840 revenue confirmed Active. Parkour Facebook Pixel with Content ID Preference set to Variant ID — critical for Dynamic Product Ads. CAPI server-side events across all six funnel stages. Product Catalogue connected to Meta dataset enabling DPA retargeting." },
      { type: "img", src: p4img2, caption: "Meta Events Manager — EMQ 8.0 on Purchase, 3 Ad Sets Connected, Product Catalogue Active" },
      { type: "text", heading: "Results", body: "Google Ads: Purchase Active, 47 conversions, $3,840 revenue with dynamic values. Meta: Purchase EMQ 8.0, AddPaymentInfo 8.0, AddToCart 7.3. All six funnel events Active. Product catalogue connected — 1 catalogue, 3 ad sets. Parkour confirmed all events firing with green status and unique Event IDs." },
      { type: "img", src: p4img3, caption: "Live Verification — Server-Side Events Firing in Parkour, Purchase Conversion Active in Google Ads" },
      { type: "text", heading: "Campaigns on This Foundation", body: "Meta Ads Sales campaigns: 3.09% CTR at frequency 1.8 (cold) and 3.24% CTR at frequency 2.4 (retargeting) — both above the 0.8–2% ecommerce benchmark. Google Ads: 1,847 clicks at $1.24 CPC with 34% MoM growth as Smart Bidding improved on real purchase data." },
      { type: "img", src: p4img4, caption: "Google Ads — 1,847 Clicks at $1.24 CPC, 34% Month on Month Growth" },
      { type: "img", src: p4img5, caption: "Meta Ads — Sales Campaigns Live, 3.09% and 3.24% CTR, Frequency Controlled" },
    ]
  },
];

const CURRENT_WORK = [
  {
    id: "first-healthcare-uk",
    number: "01",
    title: "First Healthcare Limited",
    subtitle: "Business development and digital operations",
    role: "Current responsibility — supplier onboarding, opportunity development and digital growth planning",
    category: "UK Healthcare",
    tags: ["Business Development", "Supplier Onboarding", "Digital Operations"],
    proof: "An active operating role, not a past campaign screenshot.",
    accent: "type",
    metrics: [
      { label: "Status", value: "Ongoing" },
      { label: "Market", value: "United Kingdom" },
      { label: "Scope", value: "Growth + operations" },
    ],
    content: [
      { type: "text", heading: "The responsibility", body: "I support the commercial and digital side of First Healthcare Limited: developing opportunities, helping organise supplier-facing work and shaping how the business presents and grows its services." },
      { type: "text", heading: "What this demonstrates", body: "This work goes beyond campaign setup. It requires commercial judgment, clear communication, operational follow-through and the ability to turn a broad growth objective into practical next actions." },
      { type: "text", heading: "Current boundary", body: "This is an ongoing responsibility. The portfolio describes the role and workstream without presenting private operational information or unfinished initiatives as completed results." },
    ],
  },
  {
    id: "uk-sofa-shop",
    number: "02",
    title: "UK Sofa Shop",
    subtitle: "Ecommerce website, paid media and purchase measurement",
    role: "Website contributor and acquisition operator — Meta, Google Ads, GTM and ecommerce journey",
    category: "UK Ecommerce",
    tags: ["Meta Ads", "Google Ads", "GTM", "Next.js", "Supabase"],
    proof: "18 Meta-reported purchases in the supplied account view.",
    media: ukMeta,
    mediaLabel: "Meta Ads · purchase campaign",
    coverPosition: "52% 41%",
    coverScale: 1.18,
    url: "https://www.uksofashop.co.uk/",
    metrics: [
      { label: "Meta result", value: "18 purchases" },
      { label: "Website role", value: "≈50% contribution" },
      { label: "Measurement", value: "GA4 + GTM" },
    ],
    content: [
      { type: "text", heading: "The system", body: "UK Sofa Shop combines an ecommerce website, product-led paid acquisition and a measurement layer designed to connect product discovery with checkout behaviour." },
      { type: "text", heading: "My contribution", body: "I contributed substantially to the website build and worked across Google Ads, Meta Ads and GTM. The objective was one operating system: traffic, product experience and purchase measurement supporting the same commercial journey." },
      { type: "img", src: ukMeta, caption: "Supplied Meta Ads view showing 18 platform-reported website purchases. This is platform attribution, not a claim of independently reconciled fulfilled orders.", focusPosition: "53% 39%", focusScale: 1.18 },
      { type: "img", src: ukGtm, caption: "Google Tag Manager implementation covering ecommerce and contact events.", focusPosition: "52% 45%", focusScale: 1.1 },
    ],
  },
  {
    id: "first-health-care-pakistan",
    number: "03",
    title: "First Health Care Pakistan",
    subtitle: "A coordinated website, ads and lead-measurement system",
    role: "Growth and implementation — website/CRO, Google Ads, Meta, GA4 and GTM",
    category: "Healthcare Growth",
    tags: ["WordPress", "Google Ads", "Meta Ads", "GA4", "GTM"],
    proof: "19 Google Ads-reported conversions in the supplied account view.",
    media: fhcGoogle,
    mediaLabel: "Google Ads · service demand",
    coverPosition: "50% 30%",
    coverScale: 1.22,
    url: "https://firsthealthcare.pk/",
    metrics: [
      { label: "Service routes", value: "8" },
      { label: "Ads view", value: "19 conversions" },
      { label: "Stack", value: "WP + GA4 + GTM" },
    ],
    content: [
      { type: "text", heading: "The business problem", body: "Several healthcare services needed to be understandable without forcing families through a generic page. The website now routes people by care requirement while keeping privacy and availability boundaries visible." },
      { type: "text", heading: "What I built", body: "I worked across the WordPress experience, service positioning, Google and Meta campaigns, lead paths and the measurement architecture connecting forms, calls and WhatsApp interactions." },
      { type: "img", src: fhcGoogle, caption: "Supplied Google Ads account view. Reported conversions are shown as platform results and are not presented as paid-patient revenue.", focusPosition: "50% 31%", focusScale: 1.22 },
      { type: "img", src: fhcGtm, caption: "GTM implementation covering lead, phone and WhatsApp actions.", focusPosition: "50% 45%", focusScale: 1.08 },
      { type: "img", src: fhcMeta, caption: "Meta creative and landing-page engagement implementation.", focusPosition: "51% 45%", focusScale: 1.12 },
    ],
  },
  {
    id: "al-sadiq-academy",
    number: "04",
    title: "Al Sadiq Global Quran Academy",
    subtitle: "An offer-led trial journey for live 1-to-1 learning",
    role: "Growth system — website/CRO, trial journey, Search structure and measurement",
    category: "Online Education",
    tags: ["WordPress", "Google Ads", "CRO", "Offer Strategy"],
    proof: "Free-trial journey, course routes and Search structure built as one path.",
    media: academyGoogle,
    mediaLabel: "Google Ads · Quran classes",
    coverPosition: "49% 32%",
    coverScale: 1.24,
    url: "https://alsadiqglobalquranacademy.co.uk/",
    metrics: [
      { label: "Primary journey", value: "Free 30-min trial" },
      { label: "Learning model", value: "Live 1-to-1" },
      { label: "Market", value: "UK + worldwide" },
    ],
    content: [
      { type: "text", heading: "The journey", body: "The website leads with the actual experience: live 1-to-1 guidance, flexible scheduling and a free 30-minute trial. Courses remain available for deeper exploration, but the first decision is intentionally simple." },
      { type: "text", heading: "The acquisition work", body: "I worked on the relationship between Search intent, landing-page relevance, the introductory offer and the measurement needed to understand which enquiries become real trial and enrolment activity." },
      { type: "img", src: academyGoogle, caption: "Supplied Google Ads view for the Academy Search campaign. The screenshot documents account activity; it does not imply enrolments that were not reconciled.", focusPosition: "49% 32%", focusScale: 1.24 },
    ],
  },
  {
    id: "vistamax",
    number: "05",
    title: "VistaMax Consultants",
    subtitle: "A code-first application desk with a real enquiry backend",
    role: "Website and system build — UX, copy, Next.js migration and Supabase enquiry flow",
    category: "Consulting Platform",
    tags: ["Next.js", "Supabase", "Vercel", "Conversion UX"],
    proof: "Three clear routes: education, jobs, and professional documents.",
    accent: "type",
    url: "https://vistamaxconsultants.com/",
    metrics: [
      { label: "Core routes", value: "3" },
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Supabase" },
    ],
    content: [
      { type: "text", heading: "The design system", body: "VistaMax uses a route-first experience: large editorial typography, numbered service cards and a compact mobile selector that lets visitors choose their path before reading the detail." },
      { type: "text", heading: "The build", body: "The approved WordPress experience was migrated into a code-first Next.js application while retaining its content, visual language and public routes. Supabase supports the enquiry flow and Vercel supports deployment." },
      { type: "text", heading: "Why it matters here", body: "This project demonstrates that I can work beyond an ad dashboard: positioning, copy, responsive UX, frontend implementation, backend connection and measurement can be treated as one conversion system." },
    ],
  },
];

// ─────────────────────────────────────────────
// HOOKS & HELPERS
// ─────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRevealed(true); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, revealed];
}

function useCountUp(target, started, decimal = 0, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!started) return;
    let t0 = null;
    const tick = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setV(parseFloat(((1 - Math.pow(1 - p, 3)) * target).toFixed(decimal)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started]);
  return v;
}

function navScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Ico = ({ slug, size = 22, style = {} }) => (
  <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${slug}.svg`}
    width={size} height={size} alt={slug} style={{ flexShrink: 0, display: "block", ...style }} />
);

function StatCount({ raw, display, started }) {
  const isDecimal = String(raw).includes(".");
  const v = useCountUp(parseFloat(String(raw)), started, isDecimal ? 1 : 0);
  if (display.includes("/")) return <>{display}</>;
  const fmt = isDecimal ? v.toFixed(1) : Math.floor(v).toLocaleString();
  return <>{display.includes("$") ? "$" : ""}{fmt}{display.includes("%") ? "%" : ""}</>;
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

function ProjectImage({ src, caption, onClick, focusPosition = "50% 50%", focusScale = 1 }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="project-image" onClick={onClick} style={{ cursor: "pointer" }}>
      {!failed ? (
        <div className="project-image-frame" style={{ "--focus-position": focusPosition, "--focus-scale": focusScale }}>
          <img src={src} alt={caption} onError={() => setFailed(true)} />
        </div>
      ) : (
        <div className="img-placeholder">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ opacity: .35 }}>
            <rect x="2" y="4" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M2 22l8-6 5 4 6-5 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          <span>{caption}</span>
          <small>Screenshot loads after you drop images into src/assets/projects/</small>
        </div>
      )}
      <p className="img-caption">{caption}</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  const ArrowIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>;
  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><span className="logo-ads">ads</span><span className="logo-vocate">vocate</span></div>
        <div className="nav-links">
          {["services", "work", "certifications", "contact"].map(s => <button key={s} className="nav-link" onClick={() => navScrollTo(s)}>{s}</button>)}
          <button className="btn-primary btn-sm" onClick={() => navScrollTo("contact")}>Let's Talk <ArrowIcon /></button>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {["services", "work", "certifications", "contact"].map(s => (
              <button key={s} className="nav-link" onClick={() => { navScrollTo(s); setMenuOpen(false); }}>{s}</button>
            ))}
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => { navScrollTo("contact"); setMenuOpen(false); }}>Let's Talk</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const photoRef = useRef(null);
  const Arr = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>;
  return (
    <section className="hero">
      <div className="page-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-badge fade-up d1"><span className="pulse-dot"></span>Available for new projects</div>
            <h1 className="fade-up d2">Paid media should create business. <em>Not just dashboard activity.</em></h1>
            <p className="hero-desc fade-up d3">I'm Hassan Ali. I connect Google Ads, Meta, conversion-focused websites and reliable measurement so the campaign, the customer journey and the business outcome tell the same story.</p>

            <div className="hero-ctas fade-up d4">
              <button className="btn-primary" onClick={() => navScrollTo("contact")}>Discuss a Project <Arr /></button>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Me</a>
            </div>
            <a href={resumePdf} download="Hassan_Ali_Resume_v3.pdf" className="hero-dl-link fade-up d5"><Download size={13} />Download Resume</a>
            <div className="hero-tags fade-up d5">
              {["Google Ads Certified", "GA4 Certified", "Meta Ads Certified"].map((t, i) => <span key={i} className="hero-tag">{t}</span>)}
            </div>

          </div>
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="hero-photo-wrapper" ref={photoRef}
              onMouseMove={e => { const r = photoRef.current?.getBoundingClientRect(); if (!r) return; setTilt({ x: ((e.clientX - r.left) / r.width - .5) * 12, y: -(((e.clientY - r.top) / r.height) - .5) * 12 }); }}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{ transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}>
              <div className="hero-photo-ring ring-1"></div>
              <div className="hero-photo-ring ring-2"></div>
              <div className="hero-photo">
                <img src={hassanPhoto} alt="Hassan Ali" />
              </div>
            </div>
            <div className="hero-float-chip chip-right"><strong>Google + Meta</strong><span>Paid acquisition</span></div>
            <div className="hero-float-chip chip-left"><strong>Web + Data</strong><span>CRO and measurement</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { d: "SEARCH", l: "Capture existing intent" },
    { d: "META", l: "Create and recover demand" },
    { d: "MEASUREMENT", l: "Connect clicks to outcomes" },
    { d: "WEBSITES", l: "Turn intent into action" },
  ];
  return (
    <section className="stats-strip" aria-label="Core capabilities">
      <div className="container">
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-item"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <div className="stat-value">{s.d}</div>
              <div className="stat-label">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal><div className="section-header"><span className="section-tag">The Real Problem</span><h2>Your algorithm is flying blind</h2></div></Reveal>
        <div className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="problem-card"><span className="problem-num">0{i + 1}</span><h3>{p.title}</h3><p>{p.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformGrid() {
  const [hi, setHi] = useState(null);
  return (
    <div className="platform-grid">
      {PLATFORMS.map((p, i) => (
        <div key={i} className="platform-item"
          onMouseEnter={() => setHi(i)} onMouseLeave={() => setHi(null)}
          style={{ background: hi === i ? `${p.color}14` : `${p.color}07`, borderColor: hi === i ? `${p.color}50` : `${p.color}20`, transform: hi === i ? "translateY(-4px)" : "none", boxShadow: hi === i ? `0 8px 24px ${p.color}20` : "none" }}>
          <Ico slug={p.slug} size={26} style={{ opacity: hi === i ? .9 : .72, transition: "opacity .2s" }} />
          <span style={{ color: hi === i ? "var(--text)" : "var(--t2)", transition: "color .2s" }}>{p.name}</span>
        </div>
      ))}
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal><div className="section-header"><span className="section-tag">Where I Take Ownership</span><h2>Acquisition, experience and evidence.</h2><p className="section-desc">The channel is only useful when the offer, website and measurement can support it.</p></div></Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="service-card"><span className="service-num">0{i + 1}</span><h3>{s.title}</h3><p>{s.desc}</p><span className="service-highlight">{s.highlight}</span></div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}><div className="platforms-section"><span className="section-tag" style={{ textAlign: "center", display: "block" }}>Platforms</span><h3 className="platforms-title">Tools I use every day</h3><PlatformGrid /></div></Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen, index }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ref, inView] = useReveal(0.15);
  const cardRef = useRef(null);
  const setRef = el => { cardRef.current = el; ref.current = el; };
  return (
    <Reveal delay={index * 120}>
      <div ref={setRef} className={`project-card ${hovered ? "project-card-hover" : ""}`}
        role="button"
        tabIndex={0}
        aria-label={`View case study: ${project.title}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={e => { const r = cardRef.current?.getBoundingClientRect(); if (!r) return; setTilt({ x: ((e.clientX - r.left) / r.width - .5) * 8, y: -(((e.clientY - r.top) / r.height) - .5) * 8 }); }}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(project); } }}
        style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${hovered ? "-4px" : "0"})` }}
        onClick={() => onOpen(project)}>
        <div className="project-card-glow" style={{ opacity: hovered ? 1 : 0 }}></div>
        <div className="project-card-top">
          <span className="project-category">{project.category}</span>
          <button className="project-open-btn" style={{ background: hovered ? "var(--ac)" : undefined, color: hovered ? "#fff" : undefined }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </button>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <div className="project-metrics-row">
          {project.metrics.map((m, i) => (
            <div key={i} className="project-metric">
              <div className="project-metric-val"><StatCount raw={m.raw} display={m.value} started={inView} /></div>
              <div className="project-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="project-tags">{project.tags.map((t, i) => <span key={i} className="project-tag">{t}</span>)}</div>
        <p className="project-card-hint">View full case study</p>
      </div>
    </Reveal>
  );
}

function CurrentProjectCard({ project, onOpen }) {
  return (
    <button className="current-card" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`}>
      <span className="current-card-arrow" aria-hidden="true">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
      </span>
      {project.media ? (
        <div className="current-card-media" style={{ "--card-position": project.coverPosition, "--card-scale": project.coverScale }}>
          <img src={project.media} alt="" />
          <span className="current-card-media-label">{project.mediaLabel}</span>
        </div>
      ) : (
        <div className="current-card-type">
          <span>{project.number} / CURRENT WORK</span>
          <strong>{project.title}</strong>
        </div>
      )}
      <div className="current-card-body">
        <div className="current-card-kicker"><span>{project.category}</span><span>{project.number}</span></div>
        <h3>{project.title}</h3>
        <p className="current-card-subtitle">{project.subtitle}</p>
        <p className="current-card-proof">{project.proof}</p>
      </div>
    </button>
  );
}

function Lightbox({ src, caption, onClose }) {
  useEffect(() => { const h = e => { if (e.key === "Escape") onClose(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, []);
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <img src={src} alt={caption} style={{ maxWidth: "100%", maxHeight: "85vh", borderRadius: "var(--rs)" }} onError={e => { e.target.style.display = "none"; }} />
        <p className="lightbox-caption">{caption}</p>
      </div>
    </div>
  );
}

function CaseStudy({ project, onClose }) {
  const [lightboxImg, setLightboxImg] = useState(null);
  const overlayRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: overlayRef });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const h = e => { if (e.key === "Escape") { if (lightboxImg) setLightboxImg(null); else onClose(); } };
    window.addEventListener("keydown", h);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", h); };
  }, [lightboxImg]);
  if (!project) return null;
  const XIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
  return (
    <motion.div
      className="case-study-overlay"
      ref={overlayRef}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {lightboxImg && <Lightbox src={lightboxImg.src} caption={lightboxImg.caption} onClose={() => setLightboxImg(null)} />}
      <motion.div
        className="case-study-panel"
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.18 } }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div style={{ position: "sticky", top: 0, height: 3, background: "var(--ac)", scaleX: scrollYProgress, transformOrigin: "0% 50%", zIndex: 5, borderRadius: "0 0 2px 2px", marginBottom: -3 }} />
        <button className="case-study-close" onClick={onClose}><XIcon /></button>
        <div className="case-study-header">
          <span className="project-category">{project.category}</span>
          <h2>{project.title}</h2>
          <p className="case-study-subtitle">{project.subtitle}</p>
          <p className="case-study-role">{project.role}</p>
          <div className="project-tags" style={{ marginTop: 12 }}>{project.tags.map((t, i) => <span key={i} className="project-tag">{t}</span>)}</div>
        </div>
        <div className="case-study-metrics">
          {project.metrics.map((m, i) => <div key={i} className="case-study-metric"><div className="case-study-metric-val">{m.value}</div><div className="case-study-metric-label">{m.label}</div></div>)}
        </div>
        <div className="case-study-body">
          {project.content.map((block, i) => {
            if (block.type === "text") return <div key={i} className="cs-text-block"><h4>{block.heading}</h4><p>{block.body}</p></div>;
            if (block.type === "img") return <ProjectImage key={i} {...block} onClick={() => setLightboxImg({ src: block.src, caption: block.caption })} />;
            return null;
          })}
        </div>
        <div className="case-study-footer">
          <a href="https://www.upwork.com/freelancers/adsvocate" target="_blank" rel="noopener noreferrer" className="case-study-link">
            View Upwork Profile <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="case-study-link case-study-website">Visit live website <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function WorkSection() {
  const [modal, setModal] = useState(null);
  const [showArchive, setShowArchive] = useState(false);
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal><div className="work-intro">
          <div><span className="section-tag">Selected Systems</span><h2>Campaigns are one part of the work.</h2></div>
          <p className="work-intro-copy"><strong>I work across the whole path.</strong>Offer and positioning. Website and CRO. Google and Meta. Tracking, attribution and the operating decisions that follow.</p>
        </div></Reveal>
        <p className="mobile-swipe-note">Swipe to browse current work →</p>
        <div className="current-work-grid">{CURRENT_WORK.map(p => <CurrentProjectCard key={p.id} project={p} onOpen={setModal} />)}</div>
        <div className="work-actions">
          <div className="work-actions-left">
            <a href={CREATIVE_PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm pdf-link">Creative Portfolio PDF <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>
            <a href="https://www.upwork.com/freelancers/adsvocate" target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">Upwork Profile</a>
          </div>
          <div className="work-actions-right">
            <button className="archive-toggle" onClick={() => setShowArchive(v => !v)}>{showArchive ? "Hide earlier case studies ↑" : "Open earlier technical case studies ↓"}</button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {showArchive && <motion.div className="archive-wrap" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <div className="work-group-head"><h3>Earlier technical case studies</h3><p>Detailed implementation examples remain available without forcing every mobile visitor through them.</p></div>
            <div className="projects-grid">{PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} onOpen={setModal} index={i} />)}</div>
          </motion.div>}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {modal && <CaseStudy project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CertsSection() {
  const [hi, setHi] = useState(null);
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <Reveal><div className="section-header"><span className="section-tag">Verified Credentials</span><h2>Certifications</h2></div></Reveal>
        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="cert-card" onMouseEnter={() => setHi(i)} onMouseLeave={() => setHi(null)} style={{ borderColor: hi === i ? `${c.color}40` : undefined }}>
                <div className="cert-icon" style={{ background: `${c.color}12`, borderColor: `${c.color}30` }}><Ico slug={c.slug} size={18} /></div>
                <h3>{c.name}</h3><p className="cert-issuer">{c.issuer}</p><p className="cert-date">{c.date}</p>
                <span className="cert-verify">Verify <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-container">
      {FAQS.map((f, i) => (
        <div key={i} className={`faq-item ${open === i ? "faq-open" : ""}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{f.q}</span>
            <motion.div
              className="faq-toggle"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                className="faq-a"
                key={`faq-${i}`}
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", website: "", service: "", message: "" });
  const [status, setStatus] = useState("idle");
  const submit = async e => {
    e.preventDefault(); setStatus("sending");
    try {
      const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: EMAILJS.service_id, template_id: EMAILJS.template_id, user_id: EMAILJS.user_id, template_params: { from_name: form.name, from_email: form.email, whatsapp: form.whatsapp, website: form.website, service: form.service, message: form.message } }),
      });
      setStatus(r.ok ? "done" : "error");
    } catch { setStatus("error"); }
  };
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal><div className="section-header"><span className="section-tag">Start a Conversation</span><h2>Bring me the business problem.</h2><p className="section-desc">Tell me what needs to improve, what is already in place and where the current system is losing momentum.</p></div></Reveal>
        <div className="contact-grid">
          <Reveal delay={100}>
            <div className="contact-col">
              <h3 className="contact-col-title">Common Questions</h3>
              <FAQAccordion />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="contact-col">
              <h3 className="contact-col-title">Start Here</h3>
              {status === "done" ? (
                <div className="form-success">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <h3>Got it. I'll be in touch within 24 hours.</h3>
                  <p>Check WhatsApp too — I'm usually faster there.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="contact-form">
                  <div className="form-row"><input className="field" placeholder="Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><input className="field" type="email" placeholder="Email *" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
                  <div className="form-row"><input className="field" placeholder="WhatsApp Number" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} /><input className="field" placeholder="Website URL" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} /></div>
                  <select className="field" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required>
                    <option value="">What do you need? *</option>
                    <option>Google Ads Setup + Management</option>
                    <option>Meta Ads Setup + Management</option>
                    <option>Conversion Tracking (GTM / GA4 / CAPI)</option>
                    <option>Full Stack (Ads + Tracking)</option>
                    <option>Audit Only</option>
                    <option>Something Else</option>
                  </select>
                  <textarea className="field" placeholder="Tell me about your project..." rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
                  <button type="submit" className="btn-primary" disabled={status === "sending"} style={{ width: "100%", justifyContent: "center" }}>
                    {status === "sending" ? "Sending..." : <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></>}
                  </button>
                  {status === "error" && <p className="form-error">Something went wrong. Try WhatsApp instead.</p>}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="nav-logo"><span className="logo-ads">ads</span><span className="logo-vocate">vocate</span></div>
          <p className="footer-copy">&copy; 2026 Hassan Ali · Islamabad, Pakistan</p>
          <div className="footer-links">
            <a href="https://www.upwork.com/freelancers/adsvocate" target="_blank" rel="noopener noreferrer">Upwork</a>
            <a href="https://www.fiverr.com/adsvocate" target="_blank" rel="noopener noreferrer">Fiverr</a>
            <a href="https://www.instagram.com/ads.vocate/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/people/Adsvocate/61588825871863/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`mailto:${HASSAN_EMAIL}`}>{HASSAN_EMAIL}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <Nav />
      <Hero />
      <StatsStrip />
      <WorkSection />
      <ServicesSection />
      <CertsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
