# CIS-CSM 2026 Study App 🎯

Interactive study app for the ServiceNow **Certified Implementation Specialist – Customer Service Management (CIS-CSM)** exam. Bilingual: **English 🇬🇧 / Italian 🇮🇹**.

> Updated: **April 2026** — aligned with the official Now Learning path and 2026 exam blueprint.

## 🚀 Quick Start

Just open `index.html` in any browser — no server, no build step, no dependencies.

To share with the team, enable **GitHub Pages** (`Settings → Pages → main branch / root`) and share the URL.

---

## ✨ Features

| Section | Description |
|---------|-------------|
| 📖 **Theory** | 5 domains with full explanations, diagrams, tables, callout boxes, knowledge checks |
| 🎯 **Exam Quiz** | 120 questions across 3 blocks of 40 — immediate feedback + explanation per answer |
| ⚡ **Flashcards** | 30 key concepts — flip, mark what you know, filter by domain |
| 📊 **Progress** | Per-user stats in **localStorage** — private, no server needed |
| 🌐 **Bilingual** | Switch between EN/IT at any time — all UI and content update instantly |

## 📚 Exam Coverage

| Domain | Weight | Topics |
|--------|--------|--------|
| D1 — Foundational Data Model | 25% | B2B/B2C models, Account/Contact/Consumer, Install Base, Contracts, Entitlements |
| D2 — CSM Configuration | 30% | System setup, Assignment Rules, AWA, Case Types, Service Definitions, Agent Workspace, Playbooks, CSM-ITSM Bridge |
| D3 — Case Management | 20% | Case lifecycle, Major Issue Management, Communication channels, Escalation, SLAs |
| D4 — Workspace, Portals & Analytics | 15% | CSP, Service Catalog, Performance Analytics, KPIs, Reporting |
| D5 — Knowledge Management & Best Practices | 10% | KCS, article lifecycle, Now Create Methodology, 2026 AI features |

## 🔧 Exam Details

| Detail | Info |
|--------|------|
| Questions | 60 multiple choice |
| Duration | 90 minutes |
| Passing Score | ~70% |
| Cost | $315 |
| Prerequisite | CSA certification |
| Delivery | Kryterion (online proctored or test center) |

## 📋 Official Learning Path (Now Learning)

**Required:**
- ServiceNow Administration Fundamentals
- Customer Service Management Essentials
- CSM Essentials Simulator
- Get Started with the Now Create Methodology

**Recommended:**
- CRM: Customer Data/Product Fundamentals
- Introduction to Playbooks and Process Automation Designer
- Knowledge Management for CSM Fundamentals
- CSM Best Practices · Workspaces and UI Builder · Virtual Agent Fundamentals
- Now Assist for CSM · CCaaS Integration

## 🏗️ Project Structure

```
cis-csm-2026/
├── index.html              ← entry point — all views inlined, no server required
├── assets/
│   └── style.css           ← all styles and design tokens
├── data/
│   ├── theory-data.js      ← 5 domains, bilingual content
│   ├── quiz-data.js        ← 120 questions + 3 blocks
│   └── flashcards-data.js  ← 30 flashcards
├── js/
│   ├── app.js              ← state, language, navigation, progress tracking
│   ├── theory.js           ← theory view logic
│   ├── quiz.js             ← quiz logic
│   ├── flashcards.js       ← flashcard logic
│   └── progress.js         ← progress dashboard logic
└── modules/                ← HTML view templates (reference)
    ├── theory.html
    ├── quiz.html
    ├── flashcards.html
    └── progress.html
```

## 📊 Progress Tracking

Progress is saved automatically in the browser's `localStorage` under the key `cis_csm_progress_v2`. Each user on their own device has a fully private, independent progress record. The **Exam Readiness Estimate** blends:

- 40% theory topics completed
- 40% quiz accuracy
- 20% flashcard knowledge

---

*Built for the April 2026 CIS-CSM exam cycle. Based on official ServiceNow Now Learning path documentation.*

---

Built by **Andrea Sesuru**
