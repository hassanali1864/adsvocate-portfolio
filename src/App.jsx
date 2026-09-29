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
import ukMeta from './assets/projects/uk-sofa-meta-purchases.png';
import ukGtm from './assets/projects/uk-sofa-gtm.png';
import fhcGoogle from './assets/projects/fhc-google-ads.png';
import fhcGtm from './assets/projects/fhc-gtm.png';
import fhcMeta from './assets/projects/fhc-meta-creatives.png';
import academyGoogle from './assets/projects/academy-google-ads.png';
import hassanPhoto from './assets/hassan.jpg';
import resumePdf from './assets/Hassan_Ali_Resume_v3.pdf';
import { Download, ArrowUpRight, X } from 'lucide-react';

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
.project-card{padding:28px;background:var(--card);border:1px solid var(--border);border-radius:var(--r);cursor:pointer;position:relative;overflow:hidden;transition:background .3s,border-color .3s,box-shadow .3s}
.project-card-hover{border-color:rgba(43,140,127,.25);box-shadow:var(--shb)}
.project-card-glow{position:absolute;top:0;left:20%;right:20%;height:2px;background:linear-gradient(90deg,transparent,var(--ac),transparent);transition:opacity .4s}
.project-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px}
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
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--ac);border-radius:3px}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-photo-col{order:-1}
  .hero-text{max-width:100%;text-align:center}
  .hero-ctas,.hero-tags{justify-content:center}
  .hero-badge{margin:0 auto 24px}
  h1 em{display:inline}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:20px}
  .problem-grid,.services-grid,.certs-grid{grid-template-columns:1fr}
  .projects-grid{grid-template-columns:1fr}
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
}
@media(max-width:480px){
  .container{padding:0 18px}
  h1{font-size:1.8rem}
  h2{font-size:1.5rem}
  .section{padding:64px 0}
  .hero-photo{width:200px;height:200px}
  .ring-1{width:255px;height:255px}
  .ring-2{width:315px;height:315px}
  .project-metrics-row{gap:6px;padding:12px}
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
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  .reveal{opacity:1;transform:none;transition:none}
  .reveal.revealed{opacity:1;transform:none}
  .fade-up,.fade-in-photo{animation:none;opacity:1;transform:none}
  .pulse-dot,.hero-photo-ring,.hero-float-chip,.hero-photo{animation:none}
}
/* Editorial portfolio refresh: bold hierarchy, real evidence and fewer decorative effects. */
:root{--bg:#F2F0EA;--bg-alt:#E8E9E6;--card:#fff;--text:#151C2B;--t2:#526071;--t3:#697589;--ac:#2857D9;--ac-h:#1746CA;--ac-l:#E4EAFF;--border:rgba(21,28,43,.12);--r:10px;--rs:7px}
body{background:var(--bg)}
h1,h2,h3,h4{font-family:'Outfit',sans-serif}
h2{font-size:clamp(2.3rem,4vw,4.3rem);font-weight:700;letter-spacing:-.055em}
.section{padding:104px 0}
.section-header{text-align:left;max-width:850px;margin-bottom:42px}
.section-desc{margin:16px 0 0;max-width:670px;font-size:1rem}
.section-tag{letter-spacing:.2em;font-size:.68rem}
.nav-scrolled{background:rgba(242,240,234,.96)}
.logo-ads,.logo-vocate{font-family:'Outfit',sans-serif;font-weight:800;font-style:normal;letter-spacing:-.08em;-webkit-text-stroke:0}
.logo-vocate{color:var(--ac)}
.btn-primary,.btn-outline{border-radius:4px;text-transform:uppercase;letter-spacing:.07em;font-size:.75rem}
.hero{background:#151C2B;min-height:720px;padding:135px 0 85px;color:#F4F2EC}
.hero-glow,.hero-photo-ring,.page-grid{display:none}
.hero-grid{grid-template-columns:1.08fr .92fr;gap:5vw}
.hero-text{max-width:740px}
.hero-badge{border-radius:3px;background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16);color:#C9D8FF;text-transform:uppercase;letter-spacing:.12em;font-size:.64rem}
.hero h1{font-family:'Outfit',sans-serif;font-weight:800;font-size:clamp(3.2rem,5.5vw,6.4rem);line-height:.98;letter-spacing:-.07em;color:#fff;margin-bottom:30px}
.hero h1 em{font-family:'Instrument Serif',serif;font-weight:400;font-style:italic;color:#A7BEFF;line-height:1;letter-spacing:-.02em}
.hero-desc{font-size:1.08rem;color:#D2D9E6;max-width:570px;line-height:1.55}
.hero-sub,.hero-dl-link{color:#B7C1D1}
.hero-tag{border-radius:2px;background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.18);color:#CBD5E2}
.hero .btn-primary{background:#A7BEFF;color:#151C2B}
.hero .btn-primary:hover{background:#fff}
.hero .btn-outline{color:#fff;border-color:rgba(255,255,255,.45)}
.hero .btn-outline:hover{background:rgba(255,255,255,.12)}
.hero-photo-col{align-items:flex-end;min-height:490px}
.hero-photo-wrapper{width:min(100%,440px);height:500px}
.hero-photo{width:100%;height:100%;border:0;border-radius:3px;background:#343A44;box-shadow:none;animation:none}
.hero-photo img{filter:grayscale(1) contrast(1.1);object-position:center 20%!important}
.hero-float-chip{border-radius:2px;background:#A7BEFF;border:0;animation:none;box-shadow:none;padding:13px 16px}
.hero-float-chip strong{font-family:'Outfit',sans-serif;font-weight:800;color:#151C2B;font-size:1rem}
.hero-float-chip span{color:#26354C;font-size:.62rem;text-transform:uppercase;letter-spacing:.08em}
.chip-right{right:-3%;top:4%}.chip-left{left:-6%;bottom:8%}
.stats-strip{background:#2857D9;border:0;color:#fff;padding:26px 0}
.stat-value{font-family:'Outfit',sans-serif;font-size:1.55rem;font-weight:800;color:#BFD0FF}
.stat-label{font-size:.75rem;color:#fff;text-transform:uppercase;letter-spacing:.08em}
.stat-item:not(:last-child){border-right-color:rgba(255,255,255,.22)}
.problem-card,.service-card{border-radius:4px;box-shadow:none}
.problem-num,.service-num{font-family:'Outfit',sans-serif;font-weight:800;color:var(--ac)}
.service-card h3{font-family:'Outfit',sans-serif;font-weight:700;font-size:1.25rem}
.platform-item{border-radius:3px}
.projects-grid{gap:22px;align-items:stretch}
.projects-grid>div{min-width:0}
.project-card{border-radius:4px;padding:26px;min-height:100%;box-shadow:none}
.project-card-featured{border:1px solid #C8CFD9;box-shadow:0 8px 0 rgba(21,28,43,.04)}
.project-card-archive{min-height:265px;background:#EDECE7}
.project-card-title{font-family:'Outfit',sans-serif;font-weight:800;font-size:clamp(1.5rem,2vw,2.05rem);letter-spacing:-.045em;line-height:1.08;margin:18px 0 10px}
.project-card-subtitle{color:var(--t2);font-size:.92rem;min-height:42px;margin-bottom:14px}
.project-category{border-radius:2px;letter-spacing:.12em;font-size:.6rem}
.project-cover{height:208px;position:relative;overflow:hidden;background:#DCE3F2;margin:8px -26px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.project-cover img{width:100%;height:100%;object-fit:cover;object-position:center 42%;transform:scale(1.7);filter:saturate(.65) contrast(1.08)}
.project-cover>span:last-child{position:absolute;bottom:0;left:0;right:0;background:rgba(21,28,43,.92);color:#fff;font-size:.6rem;letter-spacing:.15em;font-weight:700;padding:9px 14px}
.project-cover-type{background:linear-gradient(135deg,#172135,#2D4368);display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:24px}
.project-cover-type>span:first-child{position:static;background:none;color:#fff;padding:0;font-family:'Outfit',sans-serif;font-size:clamp(2rem,4vw,3.1rem);letter-spacing:-.06em;font-weight:800}
.project-cover-type small{color:#BFD0FF;text-transform:uppercase;letter-spacing:.15em;font-size:.62rem}
.project-metrics-row{background:#EEF1F6;border-radius:2px;gap:0}
.project-metric:not(:last-child){border-right:1px solid #D8DEE8}
.project-metric-val{font-family:'Outfit',sans-serif;font-size:1.05rem;font-weight:800;line-height:1.25;overflow-wrap:anywhere}
.project-metric-label{font-size:.58rem;color:#526071;line-height:1.2}
.project-card-hint{font-style:normal;color:var(--ac);text-transform:uppercase;letter-spacing:.08em;font-weight:700;font-size:.65rem}
.archive-start{grid-column:1/-1}
.archive-heading{padding:34px 0 8px;border-top:2px solid var(--text);display:flex;align-items:baseline;gap:20px}
.archive-heading span{font-size:1.6rem;font-weight:800;letter-spacing:-.04em}
.archive-heading small{color:var(--t2);font-size:.78rem}
.archive-start .project-card{min-height:240px}
.case-study-overlay{background:rgba(9,15,27,.78)}
.case-study-panel{border-radius:4px;max-width:920px}
.case-study-header h2{font-family:'Outfit',sans-serif;font-size:2.6rem;font-weight:800;letter-spacing:-.06em}
.case-study-metric-val{font-family:'Outfit',sans-serif;font-weight:800;font-size:1.4rem}
.case-study-metric{border-radius:2px}
.project-image{border:1px solid var(--border);background:#F0F2F5}
.project-image img{width:100%;aspect-ratio:2.2/1;object-fit:cover;object-position:center 36%;border-radius:0!important}
.img-caption{margin:0;padding:10px 14px;text-align:left;font-style:normal;font-size:.74rem;color:#4C596C;background:#F0F2F5}
@media(max-width:900px){.hero{min-height:0}.hero-photo-col{order:0;min-height:0}.hero-photo-wrapper{height:370px;max-width:360px}.hero-text{text-align:left}.hero-badge{margin:0 0 24px}.hero-ctas,.hero-tags{justify-content:flex-start}.hero h1 em{display:block}.projects-grid{grid-template-columns:1fr}.archive-start{grid-column:auto}}
@media(max-width:600px){.hero{padding:112px 0 64px}.hero h1{font-size:clamp(2.8rem,13vw,4.5rem)}.hero-photo-wrapper{height:320px;max-width:100%}.stats-grid{grid-template-columns:1fr 1fr}.stat-item{text-align:left}.project-cover{height:165px}.archive-heading{display:block}.archive-heading small{display:block;margin-top:8px}.case-study-header h2{font-size:2rem}}
`;

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const WA_LINK = "https://wa.me/923416495097?text=Hi%20Hassan%2C%20I%20found%20your%20portfolio%20and%20want%20a%20free%20audit";
// Insert the final content/graphics PDF URL here when Hassan supplies it.
// Only one creative-portfolio link is rendered; research PDFs/Drive folders are excluded.
const CREATIVE_PORTFOLIO_PDF_URL = '';
const HASSAN_EMAIL = "adswithhsn@gmail.com";
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
  { name: "Vercel", slug: "vercel", color: "#111827" },
  { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
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
  { q: "Is conversion tracking included in every package?", a: "The measurement scope is agreed before launch. I check the events needed for the commercial goal, validate what the platforms receive, and explain what still requires first-party reconciliation. A tag listed in GTM is not by itself proof of a completed customer outcome." },
  { q: "Do you work with custom-built or headless websites?", a: "Yes. For custom or headless sites, I provide complete GTM installation specifications and a dataLayer implementation brief for your developer. Once the GTM snippet is installed and the dataLayer is pushing events correctly, I configure everything from inside GTM — same result as any other platform." },
  { q: "Can you work with accounts that have never run ads?", a: "Yes. I set up the account, measurement plan and first campaign around the business goal, then validate the early signals before expanding spend or moving to more automated bidding." },
  { q: "Do you guarantee specific ROAS numbers?", a: "No. Before forecasting returns, we need to understand margin, capacity, conversion quality and what the business counts as a completed sale. My commitment is a clear scope, careful implementation, transparent reporting and honest decisions from the evidence." },
  { q: "How do I get started?", a: "Fill the form below or message me on WhatsApp. Tell me what you sell, where you operate and what outcome matters most. I will reply with the most useful next step — no obligation." },
];

const PROBLEMS = [
  { title: "Smart Bidding needs a reliable signal", desc: "If the account cannot distinguish a qualified enquiry or real order from a casual click, automated bidding has limited information to learn from." },
  { title: "Platform numbers need context", desc: "A reported lead or purchase is a starting signal. It still needs to be checked against the booking, order or service record before budget decisions are made." },
  { title: "The website can break the chain", desc: "Even relevant traffic can stall on a confusing page, form or checkout. Better creative and targeting work best when the destination matches the promise." },
];

const SERVICES = [
  { title: "Google Ads", desc: "Search and Shopping campaigns built around buyer intent, landing-page relevance and measured outcomes. Bidding evolves as reliable conversion evidence becomes available.", highlight: "Search intent → qualified demand." },
  { title: "Meta Ads", desc: "Facebook and Instagram campaigns shaped by the offer, creative and buying journey—not just audience settings. Platform results are checked against commercial records.", highlight: "Creative → demand → real orders." },
  { title: "Websites + Measurement", desc: "WordPress and custom storefront work, conversion paths, GTM, GA4 and event design. I connect what the visitor sees with what the business can actually verify.", highlight: "Experience → signal → decision." },
];

const EARLIER_PROJECTS = [
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

// Recent projects lead the portfolio. Platform screenshots are evidence of the
// labelled interface state, not independent proof of paid/fulfilled outcomes.
const FEATURED_PROJECTS = [
  {
    id: 'first-healthcare-uk', title: 'First Healthcare Limited', subtitle: 'Rebuilding the operating foundation for a UK staffing business',
    role: 'Business development, supplier onboarding and digital-operations lead · ongoing',
    category: 'Healthcare staffing · UK', tags: ['Business development', 'Supplier platforms', 'Compliance', 'Digital operations'],
    coverLabel: 'FIRST HEALTHCARE UK', coverCaption: 'Supplier systems / ongoing',
    metrics: [
      { label: 'Work status', value: 'Ongoing' },
      { label: 'Matrix accreditation', value: 'Approved' },
      { label: 'Digital growth', value: 'Planned' },
    ],
    content: [
      { type: 'text', heading: 'My responsibility', body: 'I am leading the current business-development and operating-system work for this Bradford-based healthcare staffing company. The aim is to move fragmented supplier, compliance and growth processes into one dependable operation. This is a separate UK company and project from First Health Care Pakistan.' },
      { type: 'text', heading: 'Work underway', body: 'Mapped the Matrix supplier journey, investigated an expired accreditation, coordinated the fresh application and supported a newly approved agency-worker accreditation. I have also reviewed supplier documents, legal details and insurance requirements; started Turning Point enrolment and Prism onboarding; and pursued a historic timesheet through the right approval route.' },
      { type: 'text', heading: 'Next operating layer', body: 'Current work includes completing supplier onboarding, improving candidate/compliance records, tracking placements and payments, and identifying opportunities through workforce platforms. Website rebuilding, recruitment funnels, SEO and advertising are part of the forward plan—not presented as already launched.' },
      { type: 'text', heading: 'Evidence boundary', body: 'This case study is based on the project information supplied for the portfolio. Internal reference numbers, worker details and platform documents are intentionally not published. No placements, paid invoices or digital-campaign outcomes are claimed here.' },
    ],
  },
  {
    id: 'uk-sofa', title: 'UK Sofa Shop', subtitle: 'Storefront, Meta acquisition & commerce measurement',
    role: 'Website build contributor (approximately 50%) · paid media and measurement operator',
    category: 'Ecommerce · UK', tags: ['Next.js', 'Meta Ads', 'Google Ads', 'GTM', 'Supabase'],
    cover: ukMeta, siteUrl: 'https://www.uksofashop.co.uk/', siteLabel: 'Visit UK Sofa Shop',
    metrics: [
      { label: 'Meta-reported purchases', value: '18' },
      { label: 'Meta cost / result', value: '$36.37' },
      { label: 'Website contribution', value: '~50%' },
    ],
    content: [
      { type: 'text', heading: 'The work', body: 'Contributed approximately half of the UK Sofa Shop website build, including the customer-facing commerce experience. Helped connect product discovery, checkout and assisted enquiries to a clearer measurement and campaign workflow. The storefront uses Next.js and Supabase; my work spans site implementation, paid acquisition, creative direction and tracking.' },
      { type: 'text', heading: 'What the evidence shows', body: 'The supplied Meta Ads Manager view for 14–30 September 2026 reports 18 website purchases for the active campaign at $36.37 per reported result. That is a platform attribution figure—not a claim of 18 delivered or paid orders. The tracking screenshot shows configured ecommerce funnel tags, including cart, checkout and order events; configuration alone does not prove every event fired.' },
      { type: 'img', src: ukMeta, caption: 'Meta Ads Manager, 14–30 September 2026: 18 platform-reported website purchases on the active campaign. Browser chrome and account details are cropped in the portfolio view.' },
      { type: 'img', src: ukGtm, caption: 'GTM workspace showing UK Sofa ecommerce event architecture. Tag listings are setup evidence, not an event-delivery receipt.' },
      { type: 'text', heading: 'Commercial lens', body: 'The operating question is which campaigns contribute to confirmed, delivered orders after fulfilment and ad cost—not merely which interface reports a Purchase. That distinction guides the ongoing measurement work.' },
    ],
  },
  {
    id: 'first-health-care', title: 'First Health Care', subtitle: 'A live service website connected to a lead-to-revenue system',
    role: 'Website/CRO build · Google and Meta campaigns · GTM/GA4 · lead reconciliation',
    category: 'Healthcare · Pakistan', tags: ['WordPress', 'Google Ads', 'Meta Ads', 'GTM', 'GA4'],
    cover: fhcGtm, siteUrl: 'https://firsthealthcare.pk/', siteLabel: 'Visit First Health Care',
    metrics: [
      { label: 'Core service routes', value: '6' },
      { label: 'Google Search campaigns', value: '3' },
      { label: 'Google-reported conv.', value: '19' },
    ],
    content: [
      { type: 'text', heading: 'The work', body: 'Built and refined the live WordPress service experience: service-specific pages, contact paths, forms and thank-you flows. The acquisition layer includes three Search campaigns across home nursing, elderly care and physiotherapy, plus Meta creative and campaign work. Tracking links enquiry records to qualified and paid-service stages while keeping sensitive health details out of ad-platform payloads.' },
      { type: 'text', heading: 'What the evidence shows', body: 'A supplied Google Ads screenshot for 23 July–29 September 2026 shows 19 platform-reported conversions across three Search campaigns. This is not a claim of 19 paid patients. A separate GTM view shows event and conversion-tag configuration for form, contact, phone and WhatsApp interactions; the operational register is needed to judge qualified and paid outcomes.' },
      { type: 'img', src: fhcGoogle, caption: 'Google Ads campaign view: 19 platform-reported conversions in the selected period; paid outcomes require separate reconciliation.' },
      { type: 'img', src: fhcGtm, caption: 'GTM workspace: form, contact, Google Ads and Meta tag architecture. Configuration screenshot, not universal firing proof.' },
      { type: 'img', src: fhcMeta, caption: 'Meta creative set in Ads Manager. The shown result is landing-page views, not healthcare leads or sales.' },
      { type: 'text', heading: 'Why it matters', body: 'The useful outcome is not simply a click or form submit. It is a privacy-safe path from real enquiry to qualified service request and paid work, with unresolved attribution kept unresolved rather than guessed.' },
    ],
  },
  {
    id: 'academy', title: 'Al Sadiq Global Quran Academy', subtitle: 'Trial-first website and acquisition journey',
    role: 'Website/CRO, paid-search architecture and enquiry measurement',
    category: 'Education · UK', tags: ['WordPress', 'Google Ads', 'Meta Ads', 'Lead tracking'],
    cover: academyGoogle, siteUrl: 'https://alsadiqglobalquranacademy.co.uk/', siteLabel: 'Visit the Academy',
    metrics: [
      { label: 'Live trial journey', value: 'Free' },
      { label: 'Search ad groups', value: '5' },
      { label: 'Current ad status', value: 'Paused' },
    ],
    content: [
      { type: 'text', heading: 'The work', body: 'Developed the website and trial-led conversion path around one-to-one Quran classes. The acquisition structure separates core online Quran, Tajweed, Hifz, Noorani Qaida and reading intent; Meta creative and enquiry capture form part of the wider programme.' },
      { type: 'text', heading: 'Current status', body: 'The website and free 30-minute trial offer are live. The latest project master records both Google and Meta advertising as paused. A Google Ads screenshot documents the campaign and its historical traffic, but it is not used here as a conversion or enrolment claim. Enquiry delivery and follow-up remain measurement priorities.' },
      { type: 'img', src: academyGoogle, caption: 'Historical Google Ads campaign view; the campaign is shown paused. Clicks and spend are not presented as enrolments.' },
      { type: 'text', heading: 'What I designed for', body: 'A coherent journey from relevant class search to the appropriate course/trial page, form submission, internal enquiry record and eventual paid enrolment—without exposing learner details in ad payloads.' },
    ],
  },
  {
    id: 'vistamax', title: 'VistaMax Consultants', subtitle: 'A live WordPress experience for application support',
    role: 'Website/theme build · research · digital operating design',
    category: 'Advisory · Pakistan', tags: ['WordPress', 'Website design', 'Forms', 'Research'],
    coverLabel: 'VISTAMAX', coverCaption: 'Application pathways / live site', siteUrl: 'https://vistamaxconsultants.com/', siteLabel: 'Visit VistaMax',
    metrics: [
      { label: 'Service paths', value: '3' },
      { label: 'Managed pages', value: '8' },
      { label: 'Website status', value: 'Live' },
    ],
    content: [
      { type: 'text', heading: 'The work', body: 'Built the VistaMax Global Desk WordPress experience and managed pages for education applications, international job applications and document/writing support. The work focused on service clarity, page structure, responsive design and a route from enquiry to follow-up.' },
      { type: 'text', heading: 'Current status', body: 'The production website is publicly accessible at vistamaxconsultants.com. Its three service paths and consultation form are visible; form delivery, analytics and advertising outcomes have not been verified for this case study. No admissions, jobs, visas or client outcomes are claimed.' },
      { type: 'text', heading: 'Why this project belongs here', body: 'It shows the website and business-system side of my practice: shaping a service proposition, building a usable WordPress experience and keeping marketing claims tied to what is visibly live.' },
    ],
  },
];
const EARLIER_SAFE_PROJECTS = EARLIER_PROJECTS.map(p => ({
  ...p,
  category: 'Earlier portfolio work',
  subtitle: 'Previously published example · results to revalidate',
  role: 'Earlier project write-up retained in the portfolio archive',
  metrics: [{ label: 'Documentation', value: 'Review' }, { label: 'Status', value: 'Archive' }, { label: 'Details', value: 'On request' }],
  content: [{ type: 'text', heading: 'Documentation status', body: 'This earlier project was published in the original portfolio. Its numerical outcome claims and designed dashboard composites have not been independently reconciled for this update, so they are not presented here as verified results. Source material remains preserved for a later evidence review.' }],
}));

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
  }, [threshold]);
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
  }, [started, target, decimal, duration]);
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

function ProjectImage({ src, caption, onClick }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="project-image" onClick={onClick} style={{ cursor: "pointer" }}>
      {!failed ? (
        <img src={src} alt={caption} onError={() => setFailed(true)} style={{ width: "100%", borderRadius: "var(--rs)", display: "block" }} />
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
  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><span className="logo-ads">ads</span><span className="logo-vocate">vocate</span></div>
        <div className="nav-links">
          {["services", "work", "certifications", "contact"].map(s => <button key={s} className="nav-link" onClick={() => navScrollTo(s)}>{s}</button>)}
          <button className="btn-primary btn-sm" onClick={() => navScrollTo("contact")}>Let's Talk <ArrowUpRight size={14} /></button>
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
  return (
    <section className="hero">
      <div className="page-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-badge fade-up d1"><span className="pulse-dot"></span>Available for new projects</div>
            <h1 className="fade-up d2">Campaigns. Websites. <em>Measurement that connects them.</em></h1>
            <p className="hero-desc fade-up d3">I'm Hassan Ali. I build the path from first click to real business outcome—across Google and Meta ads, conversion-focused websites, creative and tracking.</p>

            <div className="hero-ctas fade-up d4">
              <button className="btn-primary" onClick={() => navScrollTo("work")}>Explore selected work <ArrowUpRight size={14} /></button>
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
                <img src={hassanPhoto} alt="Hassan Ali" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 28%"}} />
              </div>
            </div>
            <div className="hero-float-chip chip-right"><strong>05</strong><span>Featured projects</span></div>
            <div className="hero-float-chip chip-left"><strong>End to end</strong><span>Ads · site · signal</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { d: '01', l: 'Paid acquisition' },
    { d: '02', l: 'Website & CRO' },
    { d: '03', l: 'Tracking & attribution' },
    { d: '04', l: 'Commercial reporting' },
  ];
  return (
    <section className="stats-strip" aria-label="Areas of work">
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
        <Reveal><div className="section-header"><span className="section-tag">What I Do</span><h2>Services</h2></div></Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="service-card"><span className="service-num">0{i + 1}</span><h3>{s.title}</h3><p>{s.desc}</p><span className="service-highlight">{s.highlight}</span></div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}><div className="platforms-section"><span className="section-tag" style={{ textAlign: "center", display: "block" }}>Platforms</span><h3 className="platforms-title">Tools across the build</h3><PlatformGrid /><p className="section-desc" style={{ margin: '24px auto 0' }}>I also work on Amazon and eBay marketplace workflows. Vercel and Supabase feature in custom website projects; the exact stack depends on the business.</p></div></Reveal>
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
      <div ref={setRef} className={`project-card ${project.category === 'Earlier portfolio work' ? 'project-card-archive' : 'project-card-featured'} ${hovered ? "project-card-hover" : ""}`}
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
        {project.cover ? <div className="project-cover"><img src={project.cover} alt={`${project.title} project evidence`} /><span>PLATFORM EVIDENCE · OPEN FOR CONTEXT</span></div> : project.coverLabel ? <div className="project-cover project-cover-type"><span>{project.coverLabel}</span><small>{project.coverCaption || 'Website system / in development'}</small></div> : null}
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <div className="project-metrics-row">
          {project.metrics.map((m, i) => (
            <div key={i} className="project-metric">
              <div className="project-metric-val">{m.raw != null ? <StatCount raw={m.raw} display={m.value} started={inView} /> : m.value}</div>
              <div className="project-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="project-tags">{project.tags.map((t, i) => <span key={i} className="project-tag">{t}</span>)}</div>
        <p className="project-card-hint">{project.category === 'Earlier portfolio work' ? 'Open archive note →' : project.siteUrl ? 'Open project → website link & evidence' : 'Open project → current work'}</p>
      </div>
    </Reveal>
  );
}

function Lightbox({ src, caption, onClose }) {
  useEffect(() => { const h = e => { if (e.key === "Escape") onClose(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [onClose]);
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
  }, [lightboxImg, onClose]);
  if (!project) return null;
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
        <button className="case-study-close" onClick={onClose}><X size={16} /></button>
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
            if (block.type === "img") return <ProjectImage key={i} src={block.src} caption={block.caption} onClick={() => setLightboxImg({ src: block.src, caption: block.caption })} />;
            return null;
          })}
        </div>
        <div className="case-study-footer">
          {project.siteUrl && <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="case-study-link" style={{ marginRight: 22 }}>{project.siteLabel || 'Visit website'} ↗</a>}
          <a href="https://www.upwork.com/freelancers/adsvocate" target="_blank" rel="noopener noreferrer" className="case-study-link">
            View Upwork Profile <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WorkSection() {
  const [modal, setModal] = useState(null);
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal><div className="section-header"><span className="section-tag">Selected work · 2026</span><h2>Built for the whole journey.</h2><p className="section-desc">Five current projects first. Screenshots are labelled by what they demonstrate; platform results are not presented as independently verified sales.</p></div></Reveal>
        <div className="projects-grid">{FEATURED_PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} onOpen={setModal} index={i} />)}</div>
        <div className="archive-heading"><span>Earlier work</span><small>Published examples retained; outcome figures pending source review</small></div>
        <div className="projects-grid">{EARLIER_SAFE_PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} onOpen={setModal} index={i} />)}</div>
        <Reveal delay={300}><div className="work-links">
          {CREATIVE_PORTFOLIO_PDF_URL && <a href={CREATIVE_PORTFOLIO_PDF_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">Creative portfolio PDF ↗</a>}
          <a href="https://www.upwork.com/freelancers/adsvocate" target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">Upwork Profile <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>
          <a href="https://www.fiverr.com/adsvocate" target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">Fiverr Profile <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>
        </div></Reveal>
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
        <Reveal><div className="section-header"><span className="section-tag">Get Started</span><h2>Tell me what you are building.</h2><p className="section-desc">Share the business goal and where you need support. I will reply with a useful next step—whether that is a call, a focused review or a defined scope.</p></div></Reveal>
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
                  <h3>Got it. I'll be in touch soon.</h3>
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
      <ProblemSection />
      <ServicesSection />
      <WorkSection />
      <CertsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
