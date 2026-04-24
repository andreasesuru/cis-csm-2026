# CIS-CSM 2026 Study App 🎯

![Version](https://img.shields.io/badge/version-1.5.0-teal) ![Lang](https://img.shields.io/badge/lang-EN%20%2F%20IT-blue)

Interactive study app for the ServiceNow **Certified Implementation Specialist – Customer Service Management (CIS-CSM)** exam. Bilingual: **English 🇬🇧 / Italian 🇮🇹**.

> Updated: **April 2026** — aligned with the official Now Learning path and 2026 exam blueprint.

---

## 👋 Hey, quick heads-up!

We tried, but ServiceNow still wants you to sit the actual exam. No shortcuts here. 😅

What this app *will* do is help you walk in prepared: theory, quizzes, flashcards and 6 full mock tests — all with explanations. Think of it as a very dedicated study buddy: always available, never judges you for getting the same question wrong four times, and doesn't eat your snacks.

For the official courses and labs that are part of the certification path, head over to **[ServiceNow Now Learning](https://learning.servicenow.com)** — use both. 👇

---

## 🚀 Quick Start

Just open `index.html` in any browser — no server, no build step, no dependencies.

To share with the team, enable **GitHub Pages** (`Settings → Pages → main branch / root`) and share the URL.

---

## ✨ Features

| Section | Description |
|---------|-------------|
| 📖 **Theory** | 5 domains with full explanations, diagrams, tables, callout boxes, inline knowledge checks, and a **15-question domain quiz** per domain with inline visual diagrams in explanations |
| 🎯 **Exam Quiz** | 120 questions across 3 blocks of 40 — immediate feedback + explanation per answer |
| ⚡ **Flashcards** | 30 key concepts — flip, mark what you know, filter by domain |
| 🏆 **Mock Tests** | 6 full-length exam simulations, 340 questions total — optional 90-min countdown, full review after each test |
| 📊 **Progress** | Per-user stats in **localStorage** — theory, quiz, flashcards, domain quizzes and mock test scores all tracked |
| 🌐 **Bilingual** | Switch between EN/IT at any time — all UI and content updates instantly |

---

## 🏆 Mock Tests

Six full exam simulations based on real-style CIS-CSM questions:

| Test | Questions | Source |
|------|-----------|--------|
| Mock Test 1 | 60 | Exam-style practice set |
| Mock Test 2 | 60 | Exam-style practice set |
| Mock Test 3 | 60 | Exam-style practice set |
| Mock Test 4 | 60 | Exam-style practice set |
| Mock Test 5 | 50 | Exam-style practice set |
| Mock Test 6 | 50 | Exam-style practice set |

Each question has a **verified correct answer + explanation**. Multi-select questions are fully supported. You can choose to run each test with or without the **official 90-minute countdown** — if the timer runs out, the test auto-submits just like the real thing.

Results feed directly into the **Exam Readiness** score on the Progress page.

---

## 📚 Exam Coverage

| Domain | Weight | Topics |
|--------|--------|--------|
| D1 — Foundational Data Model | 25% | B2B/B2C models, Account/Contact/Consumer, Install Base, Contracts, Entitlements |
| D2 — CSM Configuration | 30% | System setup, Assignment Rules, AWA, Case Types, Service Definitions, Agent Workspace, Playbooks, CSM-ITSM Bridge |
| D3 — Case Management | 20% | Case lifecycle, Major Issue Management, Communication channels, Escalation, SLAs |
| D4 — Workspace, Portals & Analytics | 15% | CSP, Service Catalog, Performance Analytics, KPIs, Reporting |
| D5 — Knowledge Management & Best Practices | 10% | KCS, article lifecycle, Now Create Methodology, 2026 AI features |

---

## 🔧 Exam Details

| Detail | Info |
|--------|------|
| Questions | 60 multiple choice |
| Duration | 90 minutes |
| Passing Score | ~70% |
| Cost | $315 |
| Prerequisite | CSA certification |
| Delivery | Kryterion (online proctored or test center) |

---

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

---

## 🏗️ Project Structure

```
cis-csm-2026/
├── index.html                    ← entry point — all views inlined, no server required
├── assets/
│   └── style.css                 ← all styles and design tokens
├── data/
│   ├── theory-data.js            ← 5 domains, bilingual content
│   ├── quiz-data.js              ← 120 questions + 3 blocks
│   ├── flashcards-data.js        ← 30 flashcards
│   ├── domain-quiz-data.js       ← 75 domain quiz questions (15 per domain)
│   ├── mock-data-part1.js        ← mock tests 1–3 (180 questions + answers + explanations)
│   ├── mock-data-part2.js        ← mock tests 4–6 (160 questions + answers + explanations)
│   └── mock-data.js              ← merges part1 + part2 into MOCK_TESTS global
├── js/
│   ├── app.js                    ← state, language, navigation, progress tracking
│   ├── theory.js                 ← theory view logic
│   ├── quiz.js                   ← quiz logic
│   ├── flashcards.js             ← flashcard logic
│   ├── progress.js               ← progress dashboard logic
│   └── mocktest.js               ← mock test engine (timer, multi-select, review)
└── modules/                      ← HTML view templates (reference)
```

---

## 📊 Progress Tracking

All progress is saved automatically in `localStorage` — private per device, no server needed.

Two separate stores:
- `cis_csm_progress_v2` — theory topics, quiz results, flashcard marks, global answer counts
- `cis_csm_mock_progress_v1` — mock test results (score, date, timed/untimed) per test

The **Exam Readiness Estimate** adapts based on what you've done:

| Condition | Formula |
|-----------|---------|
| No mock tests attempted yet | Theory 40% · Quiz 40% · Flashcards 20% |
| At least one mock test done | Theory 30% · Quiz 20% · Flashcards 15% · **Mock Tests 35%** |

Mock tests carry the most weight once you start them — they're the closest thing to the real exam in this app.

---

---

## 📝 Changelog

| Version | Changes |
|---------|---------|
| **v1.5.0** | Theory expanded from 25 to 33 topics — 8 new topics covering SAIB & Account Relationships (D1), AWA Advanced Matching Criteria & Agent Affinity (D2), PCSO & Outage Records (D2), Action Status Indicators & Case Lines (D3), Knowledge Product Entitlements (D5) |
| **v1.4.0** | Domain quizzes (15 q's per domain, dot navigation, results screen, progress tracking) · 10 inline diagrams in quiz explanations · Custom reset confirmation modal with progress summary · GitHub link in sidebar · version badge |
| **v1.3.0** | Fixed mock test answer errors (T2, T3, T4, T6) · Fixed theory mini-quiz click bug |
| **v1.2.0** | UI polish and improvements |
| **v1.1.0** | Mock tests (6 full exams, 340 questions, optional timer) · Welcome page |
| **v1.0.0** | Modular JS/HTML architecture · Stable base |
| **v0.x** | Theory build-out (25 topics), bilingual parity, knowledge checks, SVG diagrams |

---

*Built for the April 2026 CIS-CSM exam cycle. Based on official ServiceNow Now Learning path documentation and real-style exam questions.*

Built by **Andrea Sesuru** 🚀 · [github.com/andreasesuru/cis-csm-2026](https://github.com/andreasesuru/cis-csm-2026)
