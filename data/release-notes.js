// Release notes — shown in the "What's New" modal on first open after each update
// To add a new release: copy the latest block, bump the version key, update content.
const RELEASE_NOTES = {
  '1.7.0': {
    en: {
      tag: '2026 alignment',
      title: "What's new in v1.7.0",
      items: [
        { icon: '🎓', text: '<strong>Exam facts updated:</strong> delivery is now <strong>Pearson VUE</strong> (via ServiceNow University), fee <strong>$450</strong>, CSA <strong>recommended, not required</strong>' },
        { icon: '🗄️', text: '<strong>Corrected table names:</strong> Consumer = <code>csm_consumer</code>, Install Base = <code>sn_install_base_item</code>, Sold Product = <code>sn_install_base_sold_product</code>, Case Line = <code>sn_case_line</code>' },
        { icon: '🧭', text: 'Removed the non-existent <code>glide.cs.enable.b2b</code> property — B2B/B2C is set up via CSM Guided Setup + plugins' },
        { icon: '🖥️', text: '<strong>Agent Workspace → CSM Configurable Workspace</strong> throughout (Agent Workspace is deprecated)' },
        { icon: '📋', text: 'Now Create phases fixed to <strong>Initiate → Plan → Execute → Deliver → Close</strong>; Action Status Indicators fixed (<strong>red = blocked, blue = needs attention</strong>); auto-close corrected (reminder 5d, close 10d, off by default)' },
        { icon: '🤖', text: 'KCS = <strong>Knowledge-Centered Service</strong>; added <strong>Article Quality Index (AQI)</strong>; expanded <strong>Now Assist for CSM</strong> + <strong>Agentic AI</strong>' },
      ]
    },
    it: {
      tag: 'Allineamento 2026',
      title: 'Novità nella v1.7.0',
      items: [
        { icon: '🎓', text: '<strong>Dati esame aggiornati:</strong> erogazione ora <strong>Pearson VUE</strong> (via ServiceNow University), costo <strong>$450</strong>, CSA <strong>consigliata, non obbligatoria</strong>' },
        { icon: '🗄️', text: '<strong>Nomi tabella corretti:</strong> Consumer = <code>csm_consumer</code>, Install Base = <code>sn_install_base_item</code>, Sold Product = <code>sn_install_base_sold_product</code>, Case Line = <code>sn_case_line</code>' },
        { icon: '🧭', text: 'Rimossa la proprietà inesistente <code>glide.cs.enable.b2b</code> — il B2B/B2C si configura via CSM Guided Setup + plugin' },
        { icon: '🖥️', text: '<strong>Agent Workspace → CSM Configurable Workspace</strong> ovunque (Agent Workspace è deprecato)' },
        { icon: '📋', text: 'Fasi Now Create corrette in <strong>Initiate → Plan → Execute → Deliver → Close</strong>; Action Status Indicators corretti (<strong>rosso = bloccato, blu = da revisionare</strong>); auto-close corretto (reminder 5gg, chiusura 10gg, disattivo di default)' },
        { icon: '🤖', text: 'KCS = <strong>Knowledge-Centered Service</strong>; aggiunto <strong>Article Quality Index (AQI)</strong>; ampliati <strong>Now Assist for CSM</strong> + <strong>Agentic AI</strong>' },
      ]
    }
  },
  '1.6.1': {
    en: {
      tag: 'Bug fix',
      title: "What's new in v1.6.1",
      items: [
        { icon: '🐛', text: '<strong>Fixed:</strong> Mock Test "Retake" button did nothing — null reference error in retakeMockTest() now resolved' },
        { icon: '🔝', text: 'Page now scrolls to top when viewing results and when retaking (exam quiz + mock tests)' },
      ]
    },
    it: {
      tag: 'Bug fix',
      title: 'Novità nella v1.6.1',
      items: [
        { icon: '🐛', text: '<strong>Fixato:</strong> Il bottone "Riprendi test" nei Mock Test non faceva nulla — errore null reference in retakeMockTest() risolto' },
        { icon: '🔝', text: 'La pagina ora torna in cima quando si vedono i risultati e quando si riprende un test (quiz esame + mock test)' },
      ]
    }
  },
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
