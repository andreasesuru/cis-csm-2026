// Release notes — shown in the "What's New" modal on first open after each update
// To add a new release: copy the latest block, bump the version key, update content.
const RELEASE_NOTES = {
  '1.6.0': {
    en: {
      tag: 'Quiz update',
      title: "What's new in v1.6.0",
      items: [
        { icon: '📝', text: '<strong>16 new quiz questions</strong> covering all 8 theory topics added in v1.5.0' },
        { icon: '🗂️', text: '<strong>Domain quizzes</strong> now 17–18 questions for D1/D2/D3 — SAIB, AWA Advanced, Outage Records, Action Status Indicators, Case Lines' },
        { icon: '🎯', text: '<strong>Exam quiz</strong> expanded from 120 to 126 questions (42 per block)' },
        { icon: '🏗️', text: '<strong>Codebase refactor</strong> — theory split into 5 domain files, release notes extracted, CSS Table of Contents added' },
      ]
    },
    it: {
      tag: 'Aggiornamento quiz',
      title: 'Novità nella v1.6.0',
      items: [
        { icon: '📝', text: '<strong>16 nuove domande quiz</strong> che coprono tutti gli 8 topic teorici aggiunti nella v1.5.0' },
        { icon: '🗂️', text: '<strong>Quiz di dominio</strong> ora 17–18 domande per D1/D2/D3 — SAIB, AWA Avanzato, Outage Records, Action Status Indicators, Case Lines' },
        { icon: '🎯', text: '<strong>Quiz esame</strong> esteso da 120 a 126 domande (42 per blocco)' },
        { icon: '🏗️', text: '<strong>Refactoring codebase</strong> — teoria suddivisa in 5 file per dominio, release notes estratte, TOC CSS aggiunto' },
      ]
    }
  },
  '1.5.0': {
    en: {
      tag: 'Theory update',
      title: "What's new in v1.5.0",
      items: [
        { icon: '📖', text: '<strong>8 new theory topics</strong> — expanded from 25 to 33 total' },
        { icon: '🏗️', text: '<strong>D1:</strong> Service-Aware Install Base (SAIB), IBI hierarchy, Account Relationship Records' },
        { icon: '⚙️', text: '<strong>D2:</strong> AWA Advanced (5 matching criteria + 3 Agent Affinity types), Proactive CSO & Outage Records' },
        { icon: '📋', text: '<strong>D3:</strong> Action Status Indicators (🔵🔴), Case Lines, Auto-Close flow, Case Merge' },
        { icon: '📚', text: '<strong>D5:</strong> Knowledge Product Entitlements, User Criteria, Article Versioning, Knowledge Gap' },
      ]
    },
    it: {
      tag: 'Aggiornamento teoria',
      title: 'Novità nella v1.5.0',
      items: [
        { icon: '📖', text: '<strong>8 nuovi topic teorici</strong> — da 25 a 33 topic totali' },
        { icon: '🏗️', text: '<strong>D1:</strong> Service-Aware Install Base (SAIB), gerarchia IBI, Account Relationship Records' },
        { icon: '⚙️', text: '<strong>D2:</strong> AWA Avanzato (5 criteri di matching + 3 tipi Agent Affinity), Proactive CSO & Outage Records' },
        { icon: '📋', text: '<strong>D3:</strong> Indicatori di Stato Azione (🔵🔴), Case Lines, flusso Auto-Close, Case Merge' },
        { icon: '📚', text: '<strong>D5:</strong> Entitlement Prodotto KB, User Criteria, Versioning articoli, Knowledge Gap' },
      ]
    }
  },
  '1.4.0': {
    en: {
      tag: 'New features',
      title: "What's new in v1.4.0",
      items: [
        { icon: '📝', text: '<strong>Domain Quizzes</strong> — 15 questions per domain with dot navigation and results review' },
        { icon: '📊', text: '<strong>Inline diagrams</strong> in 10 quiz explanations (flows, hierarchies, comparisons)' },
        { icon: '🔒', text: '<strong>Reset confirmation</strong> modal shows your progress before you wipe it' },
        { icon: '🔗', text: 'GitHub repo link in sidebar · Version badge' },
      ]
    },
    it: {
      tag: 'Nuove funzionalità',
      title: 'Novità nella v1.4.0',
      items: [
        { icon: '📝', text: '<strong>Quiz di dominio</strong> — 15 domande per dominio con navigazione a punti e revisione risultati' },
        { icon: '📊', text: '<strong>Diagrammi inline</strong> in 10 spiegazioni dei quiz' },
        { icon: '🔒', text: 'Modal di <strong>conferma reset</strong> con riepilogo progressi' },
        { icon: '🔗', text: 'Link GitHub in sidebar · Badge versione' },
      ]
    }
  },
};
