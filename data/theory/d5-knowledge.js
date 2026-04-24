// Domain 5 — Knowledge Management & Best Practices (10%)
const THEORY_D5 = {
    id:4, pct:"10%", color:"#f85149",
    title:{en:"Domain 5: Knowledge Management & Best Practices",it:"Dominio 5: Knowledge Management e Best Practice"},
    subtitle:{en:"KCS · Article Lifecycle · Now Assist · Communities · Implementation BP",it:"KCS · Ciclo di vita articoli · Now Assist · Communities · Best Practice"},
    topics:[
      {
        title:{en:"Knowledge Management & KCS",it:"Knowledge Management e KCS"},
        tag:"red",
        quiz:[
          {q:"According to KCS, when should knowledge articles be created?",opts:["Only by dedicated KM team in advance","At the time of resolving a case — capturing knowledge in the moment","Only after 3 customers report the same issue","Only by senior agents"],ans:1,exp:"KCS principle: knowledge is created and improved AT THE TIME it is used to resolve a case. Agents capture knowledge during resolution — not pre-built by a separate team. Continuous, real-time improvement."},
          {q:"Which article state makes it visible to customers on the Customer Service Portal?",opts:["Draft","In Review","Published","Active"],ans:2,exp:"Only 'Published' articles are visible on the CSP. 'Active' is NOT a valid knowledge article state. Lifecycle: Draft → In Review → Published → Retired."},
          {q:"A knowledge article has been rated below 2 stars by 10+ customers. What can the system automatically trigger?",opts:["Immediate deletion","A retirement review workflow","A case for the customer's complaint","An escalation to the author"],ans:1,exp:"Knowledge Feedback mechanisms can trigger automatic review/retirement workflows when quality thresholds are breached. The article returns to In Review for update or retirement. Core KCS quality improvement mechanism."}
        ],
        body:{
          en:`<p class="theory-p">Knowledge-Centered Support (KCS) is ServiceNow's recommended methodology. The core principle is tested repeatedly.</p>
<div class="callout success"><span class="ci">✅</span><div><strong>KCS Principle:</strong> Knowledge is created and improved <em>at the time it is used to resolve a case</em> — not pre-built in isolation by a dedicated team.</div></div>
<div class="diagram-wrap2">
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px">
  <text x="250" y="16" text-anchor="middle" fill="#f85149" font-size="12" font-weight="700">KNOWLEDGE ARTICLE LIFECYCLE</text>
  <rect x="8" y="30" width="88" height="48" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1.5"/>
  <text x="52" y="52" text-anchor="middle" fill="#8b949e" font-size="11" font-weight="600">Draft</text>
  <text x="52" y="67" text-anchor="middle" fill="#6e7681" font-size="10">Agent creates</text>
  <polygon points="100,54 110,48 110,60" fill="#8b949e"/>
  <rect x="113" y="30" width="105" height="48" rx="6" fill="#3b2e0e" stroke="#d29922" stroke-width="1.5"/>
  <text x="165" y="52" text-anchor="middle" fill="#d29922" font-size="11" font-weight="600">In Review</text>
  <text x="165" y="67" text-anchor="middle" fill="#8b949e" font-size="10">KM approves</text>
  <polygon points="221,54 231,48 231,60" fill="#8b949e"/>
  <rect x="234" y="24" width="110" height="60" rx="6" fill="#1a3a22" stroke="#3fb950" stroke-width="2"/>
  <text x="289" y="50" text-anchor="middle" fill="#3fb950" font-size="12" font-weight="700">Published</text>
  <text x="289" y="64" text-anchor="middle" fill="#7ee89a" font-size="10">✅ Visible</text>
  <text x="289" y="76" text-anchor="middle" fill="#7ee89a" font-size="10">to customers</text>
  <polygon points="348,54 358,48 358,60" fill="#8b949e"/>
  <rect x="361" y="30" width="132" height="48" rx="6" fill="#3b1c1c" stroke="#f85149" stroke-width="1.5"/>
  <text x="427" y="52" text-anchor="middle" fill="#f85149" font-size="11" font-weight="600">Retired</text>
  <text x="427" y="67" text-anchor="middle" fill="#8b949e" font-size="10">Hidden from CSP</text>
  <text x="250" y="108" text-anchor="middle" fill="#8b949e" font-size="10">Only PUBLISHED articles appear on the Customer Service Portal</text>
</svg>
<div class="diagram-caption">Draft → In Review → Published → Retired · Only Published is customer-visible</div>
</div>
<ul class="theory-ul">
  <li><strong>Knowledge Blocks:</strong> Structured sections — Symptom, Cause, Resolution. Enforce KCS consistency.</li>
  <li><strong>KB Visibility:</strong> Only KBs configured as "Customer Visible" appear on the CSP. Wrong KB assignment = customers cannot find the article.</li>
  <li><strong>Case-Knowledge Link:</strong> Agents create/update articles directly from the case timeline — the KCS "capture in the moment" approach.</li>
  <li><strong>Knowledge Feedback:</strong> Ratings trigger review/retirement workflows automatically when thresholds are breached.</li>
</ul>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>"Active" is NOT a valid article state — the states are Draft, In Review, Published, Retired</li>
  <li>Publishing to the wrong KB — if not "Customer Visible", customers cannot find it on CSP</li>
  <li>Confusing KCS with pre-building knowledge — KCS is about capturing DURING resolution, not before</li>
</ul></div>`,
          it:`<p class="theory-p">Knowledge-Centered Support (KCS) è la metodologia raccomandata da ServiceNow. Il principio fondamentale è testato ripetutamente.</p>
<div class="callout success"><span class="ci">✅</span><div><strong>Principio KCS:</strong> La conoscenza viene creata e migliorata <em>nel momento in cui viene usata per risolvere un case</em> — non pre-costruita isolatamente.</div></div>
<ul class="theory-ul">
  <li><strong>Knowledge Blocks:</strong> Sezioni strutturate — Symptom, Cause, Resolution.</li>
  <li><strong>Visibilità KB:</strong> Solo le KB configurate come "Customer Visible" appaiono sul CSP.</li>
  <li><strong>Ciclo di vita:</strong> Draft → In Review → Published → Retired. Solo Published è visibile ai clienti.</li>
</ul>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>"Active" NON è uno stato valido per gli articoli — gli stati sono Draft, In Review, Published, Retired</li>
  <li>Pubblicare nella KB sbagliata — se non è "Customer Visible", i clienti non la trovano sul CSP</li>
</ul></div>`
        }
      },
      {
        title:{en:"Now Assist & AI Features (2026)",it:"Now Assist e Funzionalità AI (2026)"},
        tag:"purple",
        quiz:[
          {q:"Now Assist Case Summarization helps agents by:",opts:["Automatically closing cases","Generating an AI summary of case history for agents picking up existing cases","Replacing Tier 1 agents entirely","Only searching KB faster"],ans:1,exp:"Now Assist Case Summarization generates an AI-powered summary of a case's history, notes, and interactions — helping agents who pick up existing cases quickly understand context."},
          {q:"Now Assist features in CSM require which license tier?",opts:["Base CSM license","CSM Professional Suite","CSM Professional Plus Suite","No extra license"],ans:2,exp:"Most Now Assist features require the CSM Professional Plus Suite — an additional license beyond base CSM. The learning path includes a free 'Now Assist for CSM' awareness course."}
        ],
        body:{
          en:`<p class="theory-p">Now Assist brings generative AI to CSM agents and customers. Updated for 2026 — AI features are increasingly prominent in the exam.</p>
<table class="info-table2"><thead><tr><th>Feature</th><th>What It Does</th><th>Who Benefits</th></tr></thead><tbody>
<tr><td><strong>Case Summarization</strong></td><td>AI generates summary of case history</td><td>Agent picking up existing case</td></tr>
<tr><td><strong>Suggested Resolution</strong></td><td>AI recommends steps based on similar cases + KB</td><td>Agent resolving case</td></tr>
<tr><td><strong>Chat Assist</strong></td><td>AI-generated response suggestions in chat</td><td>Agent in live chat</td></tr>
<tr><td><strong>Virtual Agent (AI)</strong></td><td>Handles Tier 0 self-service before human agent</td><td>Customer (self-service)</td></tr>
<tr><td><strong>Predictive Intelligence</strong></td><td>ML-based auto-suggestion of KB articles + categorization</td><td>Agent + routing engine</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>License:</strong> Now Assist = CSM Professional Plus Suite (extra license). Predictive Intelligence = CSM Professional Suite Micro-Certification. Base CSM exam covers awareness, not deep configuration of AI features.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Now Assist vs Predictive Intelligence:</strong> Now Assist uses <em>generative AI</em> (creates text, suggestions). Predictive Intelligence uses <em>machine learning</em> (classifies, categorizes, matches). Different technologies, different use cases.</div></div>`,
          it:`<p class="theory-p">Now Assist porta l'AI generativa agli agenti e clienti CSM. Aggiornato al 2026.</p>
<table class="info-table2"><thead><tr><th>Funzionalità</th><th>Cosa fa</th><th>Beneficia</th></tr></thead><tbody>
<tr><td><strong>Case Summarization</strong></td><td>AI genera riassunto della cronologia del case</td><td>Agente che prende in carico un case esistente</td></tr>
<tr><td><strong>Suggested Resolution</strong></td><td>AI raccomanda passi basati su case simili + KB</td><td>Agente nella risoluzione</td></tr>
<tr><td><strong>Chat Assist</strong></td><td>Suggerimenti di risposta AI in chat live</td><td>Agente in chat</td></tr>
<tr><td><strong>Virtual Agent</strong></td><td>Gestisce Tier 0 self-service prima dell'agente</td><td>Cliente (self-service)</td></tr>
</tbody></table>`
        }
      },
      {
        title:{en:"Implementation Best Practices",it:"Best Practice di Implementazione"},
        tag:"red",
        quiz:[
          {q:"Which is the CORRECT first step in a new CSM implementation?",opts:["Configure all channels","Define the B2B vs B2C data model","Set up routing rules","Configure portal branding"],ans:1,exp:"Define the B2B vs B2C data model FIRST. This shapes everything: entities, entitlements, portal, routing. Starting with channels or routing leads to expensive rework."},
          {q:"CIS-CSM is version-specific. How do you maintain it after a major ServiceNow release?",opts:["Retake the full exam","Complete a Delta Exam","Complete 5 extra Now Learning courses","Nothing — certifications are permanent"],ans:1,exp:"Pass a Delta Exam covering new release changes. Delta exams keep certification current without full re-examination. This is how all ServiceNow CIS certifications work."}
        ],
        body:{
          en:`<p class="theory-p">Best practice questions follow predictable exam patterns. Learn these principles and answer them confidently.</p>
<div class="callout tip"><span class="ci">💜</span><div><strong>The Golden Sequence (memorize this for the exam):</strong><br>
1️⃣ Define data model (B2B vs B2C)<br>
2️⃣ Design entitlement structure<br>
3️⃣ Build Case Types + Service Definitions<br>
4️⃣ Configure routing rules (they reference case type fields)<br>
5️⃣ Roll out channels — email + portal first, then chat/phone<br>
6️⃣ Configure workspace + analytics<br>
7️⃣ Add AI features (Now Assist, Virtual Agent)</div></div>
<ul class="theory-ul">
  <li><strong>Now Create (Agile):</strong> Sprint-based. User stories: <em>"As a [role], I want [feature] so that [benefit]"</em>. Required learning path course.</li>
  <li><strong>PDI testing:</strong> Always test on Personal Developer Instance first. Never directly in production.</li>
  <li><strong>Entitlement design first:</strong> Entitlements are complex to retrofit. Design before building case types.</li>
  <li><strong>Staged channel rollout:</strong> Email + Portal → Chat → Phone/CTI. Never all simultaneously.</li>
  <li><strong>Delta exams:</strong> Pass after each major ServiceNow release to maintain certification.</li>
</ul>
<div class="scenario-box" id="sc-bp-1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-bp-1')"><span>📋</span><span class="sc-badge">Exam Scenario</span><span class="sc-title">Which comes first — routing or case types?</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>An implementation team debates the order: one consultant wants routing rules first, another wants case types first, a third says configure channels immediately.</p>
    <div class="scenario-q">❓ Who is right according to best practices?</div>
    <div class="scenario-a">✅ <strong>None of the three is starting correctly.</strong><br>
    → First: Define data model (B2B vs B2C) — they skipped this<br>
    → Then: Design entitlements<br>
    → Then: Build Case Types (which routing rules reference)<br>
    → Then: Configure routing rules (after case types exist)<br>
    → Last: Configure channels<br>
    <em>Routing before case types = rules with nothing to reference. Channels first = cases going nowhere.</em></div>
  </div>
</div>
<div class="pdi-box" id="pdi-bp">
  <div class="pdi-hdr" onclick="togglePDI('pdi-bp')"><span>🖥️</span><span class="pdi-badge">Study Checklist</span><span class="pdi-title">Pre-exam readiness checklist</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Complete <strong>CSM Essentials</strong> + <strong>CSM Essentials Simulator</strong> on Now Learning (free).</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Complete <strong>Get Started with Now Create Methodology</strong> (required course).</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Practice all 5 domains in your PDI — create Accounts, Contacts, Consumers, Entitlements, Cases, Playbooks.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Complete all 3 quiz blocks in this app. Target: stable 80%+ before booking the real exam.</div></div>
    <div class="pdi-step"><div class="pdi-num">5</div><div class="pdi-text">Review all flashcards. Mark any "missed" ones and review again the day before the exam.</div></div>
    <div class="pdi-tip">💡 Passing threshold is ~70% (42/60). Target 80%+ in practice to have a solid margin.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Le domande sulle best practice seguono schemi prevedibili all'esame. Impara questi principi e rispondili con sicurezza.</p>
<div class="callout tip"><span class="ci">💜</span><div><strong>La Sequenza d'Oro (memorizzala per l'esame):</strong><br>
1️⃣ Definire data model (B2B vs B2C)<br>
2️⃣ Progettare struttura entitlement<br>
3️⃣ Creare Case Type + Service Definition<br>
4️⃣ Configurare routing (referenzia i campi del Case Type)<br>
5️⃣ Rollout canali — email + portale prima, poi chat/telefono<br>
6️⃣ Configurare workspace + analytics<br>
7️⃣ Aggiungere funzionalità AI (Now Assist, Virtual Agent)</div></div>
<ul class="theory-ul">
  <li><strong>Now Create (Agile):</strong> Sprint-based. User story: <em>"Come [ruolo], voglio [funzionalità] affinché [beneficio]"</em>. Corso obbligatorio nel learning path.</li>
  <li><strong>Test su PDI:</strong> Sempre testare sul Personal Developer Instance prima della produzione. Mai configurare direttamente in produzione.</li>
  <li><strong>Entitlement prima:</strong> Gli entitlement sono complessi da aggiungere a posteriori. Progettali prima di costruire i Case Type.</li>
  <li><strong>Rollout canali per fasi:</strong> Email + Portale → Chat → Telefono/CTI. Mai tutti insieme.</li>
  <li><strong>Delta exam:</strong> Dopo ogni major release ServiceNow per mantenere la certificazione.</li>
</ul>
<div class="scenario-box" id="sc-bp-1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-bp-1-it')"><span>📋</span><span class="sc-badge">Scenario Esame</span><span class="sc-title">Cosa viene prima — routing o Case Type?</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un team di implementazione dibatte l'ordine: un consulente vuole prima le routing rule, un altro i Case Type, un terzo vuole configurare subito i canali.</p>
    <div class="scenario-q">❓ Chi ha ragione secondo le best practice?</div>
    <div class="scenario-a">✅ <strong>Nessuno dei tre sta iniziando correttamente.</strong><br>
    → Prima: Definire data model (B2B vs B2C) — l'hanno saltato<br>
    → Poi: Progettare entitlement<br>
    → Poi: Creare Case Type (referenziati dalle routing rule)<br>
    → Poi: Configurare routing rule (dopo che esistono i Case Type)<br>
    → Ultimo: Configurare i canali<br>
    <em>Routing prima dei Case Type = regole senza niente da referenziare. Canali prima = case che non vanno da nessuna parte.</em></div>
  </div>
</div>
<div class="pdi-box" id="pdi-bp-it">
  <div class="pdi-hdr" onclick="togglePDI('pdi-bp-it')"><span>🖥️</span><span class="pdi-badge">Checklist Studio</span><span class="pdi-title">Checklist prontezza pre-esame</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Completa <strong>CSM Essentials</strong> + <strong>CSM Essentials Simulator</strong> su Now Learning (gratuiti).</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Completa <strong>Get Started with Now Create Methodology</strong> (corso obbligatorio).</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Pratica tutti e 5 i domini nel tuo PDI — crea Account, Contact, Consumer, Entitlement, Case, Playbook.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Completa tutti e 3 i blocchi quiz in questa app. Obiettivo: 80%+ stabile prima di prenotare l'esame reale.</div></div>
    <div class="pdi-step"><div class="pdi-num">5</div><div class="pdi-text">Rivedi tutte le flashcard. Segna quelle "mancate" e ripassale il giorno prima dell'esame.</div></div>
    <div class="pdi-tip">💡 Soglia di superamento ~70% (42/60). Punta all'80%+ nella pratica per avere un margine solido.</div>
  </div>
</div>`
        }
      },
      {
        title:{en:"Engagement Methodology & Now Create",it:"Metodologia di Engagement e Now Create"},
        tag:"red",
        quiz:[
          {q:"What is the correct format for a User Story in the Now Create methodology?",opts:["As a [system], it should [behaviour] when [event]","As a [role], I want [feature] so that [benefit]","Given [context], when [action], then [outcome]","The [stakeholder] requires [feature] by [date]"],ans:1,exp:"The Now Create User Story format is: 'As a [role], I want [feature] so that [benefit].' This Agile format keeps the story focused on the user's perspective and the business value delivered. Example: 'As a support agent, I want to see the customer's open cases on the case form so that I can identify recurring issues quickly.'"},
          {q:"Which Now Create phase involves validating the solution against acceptance criteria before go-live?",opts:["Discover","Design","Build","Test"],ans:3,exp:"The Test phase validates that all user stories and requirements meet their acceptance criteria. This includes unit testing, integration testing, UAT (User Acceptance Testing), and performance testing before the Deploy phase. On the exam, if a scenario asks 'when should you verify requirements are met', the answer is the Test phase."},
          {q:"In a ServiceNow CSM implementation using Now Create, who is typically the PRIMARY stakeholder responsible for defining business requirements?",opts:["The ServiceNow platform architect","The Business Process Owner (BPO)","The system administrator","The end-user"],ans:1,exp:"The Business Process Owner (BPO) is the primary stakeholder who owns the CSM business processes and defines requirements. The BPO participates in workshops during the Discover and Design phases, reviews User Stories, and signs off on acceptance criteria. The architect translates requirements into technical design — but requirements originate with the BPO."}
        ],
        body:{
          en:`<p class="theory-p">The <strong>Now Create methodology</strong> is ServiceNow's Agile-based implementation framework. It is tested in the CIS-CSM exam as part of Engagement Methodology — approximately 10% of questions touch on project approach, phases, and stakeholder roles.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Now Create is mandatory.</strong> "Get Started with the Now Create Methodology" is a required course in the official CIS-CSM learning path. Expect 4–6 exam questions on this topic.</div></div>
<table class="info-table2"><thead><tr><th>Phase</th><th>Key Activities</th><th>Output</th></tr></thead><tbody>
<tr><td><strong>1. Discover</strong></td><td>Stakeholder workshops, as-is process mapping, requirement gathering</td><td>User Stories, Business Requirements Document</td></tr>
<tr><td><strong>2. Design</strong></td><td>Solution design, data model design, integration design, prototype</td><td>Solution Design Document (SDD), data migration plan</td></tr>
<tr><td><strong>3. Build</strong></td><td>Sprint-based configuration, unit testing per story</td><td>Configured instance, sprint demos</td></tr>
<tr><td><strong>4. Test</strong></td><td>UAT, integration testing, performance testing, fix defects</td><td>Test results, signed-off acceptance criteria</td></tr>
<tr><td><strong>5. Deploy</strong></td><td>Go-live preparation, data migration, cutover, hypercare</td><td>Production instance, post-go-live support</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>User Story format:</strong> <em>"As a [role], I want [feature] so that [benefit]."</em><br>
Example: <em>"As a CSM agent, I want to see all open cases for an Account on the case form so that I can identify repeat issues and provide consistent service."</em><br>
Each story has <strong>Acceptance Criteria</strong> — measurable conditions that must be true for the story to be "Done".</div></div>
<table class="info-table2"><thead><tr><th>Role</th><th>Responsibility</th></tr></thead><tbody>
<tr><td><strong>Business Process Owner (BPO)</strong></td><td>Defines requirements, owns processes, signs off on UAT</td></tr>
<tr><td><strong>Project Sponsor</strong></td><td>Executive champion, approves budget and scope changes</td></tr>
<tr><td><strong>ServiceNow Architect</strong></td><td>Translates requirements into technical design decisions</td></tr>
<tr><td><strong>Configuration Consultant</strong></td><td>Builds the solution in ServiceNow (sprints)</td></tr>
<tr><td><strong>Change Manager</strong></td><td>Manages user adoption, training, and communication plan</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Agile in Now Create:</strong> Work is delivered in <strong>sprints</strong> (typically 2 weeks). Each sprint delivers working, demo-able functionality. The backlog is groomed before each sprint. Scope changes go through a formal change request — not ad-hoc additions mid-sprint.</div></div>
<div class="scenario-box" id="sc-nowcreate1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-nowcreate1')"><span>📋</span><span class="sc-badge">Scenario</span><span class="sc-title">Stakeholder requests a major new feature mid-sprint</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>During Sprint 3 of a CSM implementation, the Project Sponsor requests adding a new AI-powered chat feature that was not in the original scope.</p>
    <div class="scenario-q">❓ What is the correct Now Create response?</div>
    <div class="scenario-a">✅ <strong>Do not add it to the current sprint.</strong> Log the request as a new User Story in the backlog. Bring it to the next backlog grooming session. Estimate the effort, assess the impact on timeline and budget, and get formal change request approval from the Project Sponsor before scheduling it into a future sprint.</div>
  </div>
</div>
<div class="callout info"><span class="ci">💡</span><div><strong>PDI (Personal Developer Instance):</strong> Always configure and test on a PDI before applying to production. The PDI is a free ServiceNow developer instance available at developer.servicenow.com.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing Now Create phases — Test comes BEFORE Deploy, not after</li>
  <li>Thinking the architect defines requirements — the BPO defines requirements, the architect designs the solution</li>
  <li>Adding scope mid-sprint without a change request — this violates the Now Create Agile discipline</li>
  <li>Skipping UAT — Test phase sign-off by the BPO is required before Deploy</li>
</ul></div>`,
          it:`<p class="theory-p">La metodologia <strong>Now Create</strong> è il framework Agile di ServiceNow per le implementazioni. È testata nell'esame CIS-CSM come parte dell'Engagement Methodology — circa il 10% delle domande riguarda fasi, ruoli e approccio al progetto.</p>
<table class="info-table2"><thead><tr><th>Fase</th><th>Attività chiave</th><th>Output</th></tr></thead><tbody>
<tr><td><strong>1. Discover</strong></td><td>Workshop stakeholder, mappatura processi as-is, raccolta requisiti</td><td>User Story, BRD</td></tr>
<tr><td><strong>2. Design</strong></td><td>Solution design, data model, prototipo</td><td>Solution Design Document (SDD)</td></tr>
<tr><td><strong>3. Build</strong></td><td>Configurazione sprint per sprint, unit test</td><td>Istanza configurata, demo sprint</td></tr>
<tr><td><strong>4. Test</strong></td><td>UAT, test integrazione, test performance, fix difetti</td><td>Acceptance criteria firmati</td></tr>
<tr><td><strong>5. Deploy</strong></td><td>Go-live, migrazione dati, cutover, hypercare</td><td>Istanza di produzione</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Formato User Story:</strong> <em>"Come [ruolo], voglio [funzionalità] affinché [beneficio]."</em><br>
Ogni story ha <strong>Acceptance Criteria</strong> — condizioni misurabili che devono essere vere per considerare la story "Done".</div></div>
<table class="info-table2"><thead><tr><th>Ruolo</th><th>Responsabilità</th></tr></thead><tbody>
<tr><td><strong>Business Process Owner (BPO)</strong></td><td>Definisce i requisiti, approva l'UAT</td></tr>
<tr><td><strong>Project Sponsor</strong></td><td>Champion esecutivo, approva budget e modifiche di scope</td></tr>
<tr><td><strong>Architetto ServiceNow</strong></td><td>Traduce i requisiti in design tecnico</td></tr>
<tr><td><strong>Configuration Consultant</strong></td><td>Costruisce la soluzione negli sprint</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Errori comuni:</strong> Test viene PRIMA di Deploy. Il BPO definisce i requisiti (non l'architetto). Le modifiche di scope richiedono una change request formale — non si aggiungono mid-sprint.</div></div>`
        }
      },
      {
        title:{en:"Knowledge Product Entitlements & Access Control",it:"Entitlement Prodotto per la Knowledge e Controllo Accessi"},
        tag:"red",
        quiz:[
          {q:"To restrict KB article visibility to only customers who own a specific product, which feature is used?",opts:["User Criteria — Can Read","Knowledge Base Category restrictions","Knowledge Product Entitlements (Enable access control of Knowledge Articles)","Article Versioning with draft state"],ans:2,exp:"Knowledge Product Entitlements control visibility of KB articles based on the customer's owned products (Install Base Item / Sold Product). The system property 'Enable access control of Knowledge Articles' must be enabled. User Criteria controls who can read/write, but Product Entitlements link article access to owning a specific product."},
          {q:"In ServiceNow Knowledge Management, User Criteria can be applied to which of the following? (Select the correct pair)",opts:["Knowledge Base and Category","Category and Article","Knowledge Base and Article","All three: Knowledge Base, Category, and Article"],ans:2,exp:"User Criteria applies to: Knowledge Base (who can access the whole KB) and Article (who can access that specific article). It does NOT apply to Category — this is a frequently tested exam trap. Article-level criteria override KB-level criteria (more granular wins)."},
          {q:"An agent cannot find a relevant KB article for a case. To formally signal this gap to the knowledge team, they should:",opts:["Send an email to the KB manager","Create a new draft article manually","Use the 'Report Knowledge Gap' related link on the case form","Open a Problem record linked to the case"],ans:2,exp:"The 'Report Knowledge Gap' related link on the Case form creates a formal knowledge gap feedback record for knowledge managers. This is the OOTB CSM mechanism — not email, not manual drafts. Knowledge managers review gaps and create missing articles."}
        ],
        body:{
          en:`<p class="theory-p">Domain 5 tests Knowledge Management beyond basic article lifecycle. The exam focuses on <strong>Product Entitlements</strong>, <strong>User Criteria scope</strong> (KB vs Article vs Category), Article Versioning, Knowledge Gap Reporting, and WebDAV integration.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Knowledge Product Entitlements — one-line summary:</strong> Link KB article visibility to owning a specific product. A customer without the product licence cannot see those articles, even if the KB itself is "Customer Visible".</div></div>
<p class="theory-p"><strong>How Knowledge Product Entitlements Work:</strong></p>
<table class="info-table2"><thead><tr><th>Component</th><th>Role</th></tr></thead><tbody>
<tr><td><strong>System Property</strong></td><td>Enable "Access control of Knowledge Articles" in KB properties</td></tr>
<tr><td><strong>Sold Product / Install Base Item</strong></td><td>Represents the specific product the customer owns (licence, SKU)</td></tr>
<tr><td><strong>Knowledge Article Tag</strong></td><td>Tag on the article that maps to a product — only customers owning that product see the article</td></tr>
<tr><td><strong>Result</strong></td><td>Enterprise-licence customers see Enterprise articles; Standard-licence customers do not</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-kb-ent1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-kb-ent1')"><span>🔐</span><span class="sc-badge">Scenario</span><span class="sc-title">SaaS vendor hiding advanced feature articles from free-tier customers</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A SaaS company has two product tiers: Standard (free) and Enterprise (paid). The KB contains articles about advanced AI features that only Enterprise customers have access to. They want to prevent Standard customers from seeing these articles on the portal.</p>
    <div class="scenario-q">❓ What is the correct configuration approach?</div>
    <div class="scenario-a">✅ Enable <strong>Knowledge Product Entitlements</strong>. Create a Product Tag for "Enterprise Tier". Tag the advanced AI articles with this tag. Link the tag to the Enterprise Sold Product / Install Base Item. When a Standard customer logs in to the portal, those articles are invisible. Enterprise customers with the product in their Install Base see the full library.</div>
  </div>
</div>
<p class="theory-p"><strong>User Criteria in Knowledge Management</strong> — one of the most precisely tested topics. Know the three types AND which record levels they apply to.</p>
<table class="info-table2"><thead><tr><th>User Criteria Type</th><th>Controls</th><th>Applied On</th></tr></thead><tbody>
<tr><td><strong>Can Read</strong></td><td>Who can VIEW the KB or article</td><td>Knowledge Base ✓ · Article ✓ · Category ✗</td></tr>
<tr><td><strong>Can Contribute</strong></td><td>Who can CREATE/EDIT articles</td><td>Knowledge Base ✓ · Article ✓ · Category ✗</td></tr>
<tr><td><strong>Cannot Contribute</strong></td><td>Explicit blocklist — excluded from writing even if "Can Contribute" allows it</td><td>Knowledge Base ✓ · Article ✓ · Category ✗</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Critical Exam Fact — Category has NO User Criteria:</strong> User Criteria applies to the <strong>Knowledge Base</strong> level and the <strong>Article</strong> level only. It does <strong>NOT</strong> apply to Knowledge Categories. If an exam question offers "Category" as an option for User Criteria, it is wrong.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Granularity rule:</strong> Article-level User Criteria overrides KB-level User Criteria. If a KB says "Can Read = Customers" but a specific article says "Can Read = VIP Customers only", the article rule wins for that article.</div></div>
<p class="theory-p"><strong>Article Versioning</strong> — enables tracking the history of a KB article across time, supporting compliance and audit requirements.</p>
<table class="info-table2"><thead><tr><th>Feature</th><th>Details</th></tr></thead><tbody>
<tr><td><strong>Version Increment</strong></td><td>Each time a Published article is updated and republished, the version number increments (e.g., v1.0 → v2.0)</td></tr>
<tr><td><strong>Rollback</strong></td><td>Administrators can revert to a previous version if a bad update is published</td></tr>
<tr><td><strong>In Review update</strong></td><td>When an In Review article is updated and republished, version increments and the updated content goes live</td></tr>
<tr><td><strong>Use Case</strong></td><td>Compliance, regulated industries, audit trails — prove what the published guidance said on a specific date</td></tr>
</tbody></table>
<p class="theory-p"><strong>Knowledge Gap Reporting</strong> — the OOTB mechanism for agents to signal missing knowledge to the knowledge team.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>How it works:</strong> Agent opens a Case and searches KB — no article found. Agent clicks <strong>"Report Knowledge Gap"</strong> related link on the Case form. This creates a formal Knowledge Gap record visible to Knowledge Managers. KM team reviews gaps, creates new articles, and closes the gap. No emails, no manual drafts needed — the loop is closed in-platform.</div></div>
<p class="theory-p"><strong>WebDAV Integration</strong> — Knowledge Management can index and surface content from external repositories without duplicating it in ServiceNow.</p>
<table class="info-table2"><thead><tr><th>Concept</th><th>Details</th></tr></thead><tbody>
<tr><td><strong>Requirement</strong></td><td>External repository must be <strong>WebDAV-compliant</strong> (e.g., SharePoint with WebDAV enabled)</td></tr>
<tr><td><strong>Behaviour</strong></td><td>Content is indexed and appears in KB search results — not duplicated/copied into ServiceNow</td></tr>
<tr><td><strong>Customer Portal</strong></td><td>Customers can find WebDAV-sourced content through the same CSP search interface</td></tr>
<tr><td><strong>Exam angle</strong></td><td>"What is the requirement to integrate external content with ServiceNow KB?" → WebDAV compliance of the source</td></tr>
</tbody></table>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Thinking User Criteria can be applied to Categories — it CANNOT. Only Knowledge Base and Article level</li>
  <li>Confusing Product Entitlements with User Criteria — Entitlements restrict by owned product; User Criteria restricts by user/group membership</li>
  <li>Forgetting to enable the "Access control of Knowledge Articles" system property before expecting Product Entitlements to work</li>
  <li>Thinking WebDAV duplicates content in ServiceNow — it indexes and surfaces it; the source content stays external</li>
  <li>Using manual article creation instead of "Report Knowledge Gap" — the latter creates a trackable, manageable gap record for the KM team</li>
</ul></div>`,
          it:`<p class="theory-p">Il Dominio 5 testa la Knowledge Management oltre il ciclo di vita base degli articoli. L'esame si concentra su <strong>Product Entitlement</strong>, <strong>scope degli User Criteria</strong> (KB vs Articolo vs Categoria), Versioning degli articoli, Knowledge Gap Reporting e integrazione WebDAV.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Knowledge Product Entitlement — sintesi in una riga:</strong> Collega la visibilità degli articoli KB al possesso di un prodotto specifico. Un cliente senza licenza del prodotto non può vedere quegli articoli, anche se la KB è "Customer Visible".</div></div>
<p class="theory-p"><strong>Come funzionano i Knowledge Product Entitlement:</strong></p>
<table class="info-table2"><thead><tr><th>Componente</th><th>Ruolo</th></tr></thead><tbody>
<tr><td><strong>System Property</strong></td><td>Abilitare "Access control of Knowledge Articles" nelle proprietà KB</td></tr>
<tr><td><strong>Sold Product / Install Base Item</strong></td><td>Rappresenta il prodotto specifico posseduto dal cliente (licenza, SKU)</td></tr>
<tr><td><strong>Tag Articolo Knowledge</strong></td><td>Tag sull'articolo che si mappa a un prodotto — solo i clienti che possiedono quel prodotto vedono l'articolo</td></tr>
<tr><td><strong>Risultato</strong></td><td>I clienti con licenza Enterprise vedono gli articoli Enterprise; i clienti Standard no</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-kb-ent1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-kb-ent1-it')"><span>🔐</span><span class="sc-badge">Scenario</span><span class="sc-title">Vendor SaaS che nasconde articoli su feature avanzate ai clienti free</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un'azienda SaaS ha due tier di prodotto: Standard (gratuito) e Enterprise (a pagamento). La KB contiene articoli sulle funzionalità AI avanzate accessibili solo ai clienti Enterprise. Vogliono impedire ai clienti Standard di vedere questi articoli sul portale.</p>
    <div class="scenario-q">❓ Qual è l'approccio di configurazione corretto?</div>
    <div class="scenario-a">✅ Abilitare i <strong>Knowledge Product Entitlement</strong>. Creare un Tag Prodotto "Enterprise Tier". Taggare gli articoli AI avanzati con questo tag. Collegare il tag al Sold Product / Install Base Item Enterprise. Quando un cliente Standard accede al portale, quegli articoli sono invisibili. I clienti Enterprise con il prodotto nell'Install Base vedono la libreria completa.</div>
  </div>
</div>
<p class="theory-p"><strong>User Criteria nella Knowledge Management</strong> — uno degli argomenti testati più precisamente. Conosci i tre tipi E a quali livelli di record si applicano.</p>
<table class="info-table2"><thead><tr><th>Tipo User Criteria</th><th>Controlla</th><th>Applicato su</th></tr></thead><tbody>
<tr><td><strong>Can Read</strong></td><td>Chi può VISUALIZZARE la KB o l'articolo</td><td>Knowledge Base ✓ · Articolo ✓ · Categoria ✗</td></tr>
<tr><td><strong>Can Contribute</strong></td><td>Chi può CREARE/MODIFICARE articoli</td><td>Knowledge Base ✓ · Articolo ✓ · Categoria ✗</td></tr>
<tr><td><strong>Cannot Contribute</strong></td><td>Lista di blocco esplicita — escluso dalla scrittura anche se "Can Contribute" lo consente</td><td>Knowledge Base ✓ · Articolo ✓ · Categoria ✗</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Fatto critico per l'esame — La Categoria NON ha User Criteria:</strong> Gli User Criteria si applicano al livello <strong>Knowledge Base</strong> e al livello <strong>Articolo</strong> solamente. <strong>NON</strong> si applicano alle Categorie Knowledge. Se una domanda d'esame offre "Categoria" come opzione per User Criteria, è sbagliata.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Regola di granularità:</strong> Gli User Criteria a livello di Articolo sovrascrivono quelli a livello di KB. Se una KB dice "Can Read = Customers" ma un articolo specifico dice "Can Read = VIP Customers only", la regola dell'articolo vince per quell'articolo.</div></div>
<p class="theory-p"><strong>Article Versioning</strong> — abilita il tracciamento della storia di un articolo KB nel tempo, supportando requisiti di compliance e audit.</p>
<table class="info-table2"><thead><tr><th>Funzionalità</th><th>Dettagli</th></tr></thead><tbody>
<tr><td><strong>Incremento versione</strong></td><td>Ogni volta che un articolo Published viene aggiornato e ripubblicato, il numero di versione aumenta (es. v1.0 → v2.0)</td></tr>
<tr><td><strong>Rollback</strong></td><td>Gli amministratori possono tornare a una versione precedente se viene pubblicato un aggiornamento errato</td></tr>
<tr><td><strong>Aggiornamento In Review</strong></td><td>Quando un articolo In Review viene aggiornato e ripubblicato, la versione viene incrementata e il contenuto aggiornato va in pubblicazione</td></tr>
<tr><td><strong>Caso d'uso</strong></td><td>Compliance, settori regolamentati, audit trail — dimostra cosa diceva la guida pubblicata in una data specifica</td></tr>
</tbody></table>
<p class="theory-p"><strong>Knowledge Gap Reporting</strong> — il meccanismo OOTB per gli agenti per segnalare le lacune di conoscenza al team knowledge.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Come funziona:</strong> L'agente apre un Case e cerca nella KB — nessun articolo trovato. L'agente clicca il related link <strong>"Report Knowledge Gap"</strong> nel form del Case. Questo crea un record formale di Knowledge Gap visibile ai Knowledge Manager. Il team KM esamina i gap, crea nuovi articoli e chiude il gap. Nessuna email, nessun draft manuale — il ciclo si chiude nella piattaforma.</div></div>
<p class="theory-p"><strong>Integrazione WebDAV</strong> — la Knowledge Management può indicizzare e mostrare contenuti da repository esterni senza duplicarli in ServiceNow.</p>
<table class="info-table2"><thead><tr><th>Concetto</th><th>Dettagli</th></tr></thead><tbody>
<tr><td><strong>Requisito</strong></td><td>Il repository esterno deve essere <strong>WebDAV-compliant</strong> (es. SharePoint con WebDAV abilitato)</td></tr>
<tr><td><strong>Comportamento</strong></td><td>Il contenuto viene indicizzato e appare nei risultati di ricerca KB — non duplicato/copiato in ServiceNow</td></tr>
<tr><td><strong>Customer Portal</strong></td><td>I clienti trovano i contenuti provenienti da WebDAV attraverso la stessa interfaccia di ricerca del CSP</td></tr>
<tr><td><strong>Angolo esame</strong></td><td>"Qual è il requisito per integrare contenuti esterni con la KB di ServiceNow?" → Conformità WebDAV della sorgente</td></tr>
</tbody></table>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Pensare che gli User Criteria si possano applicare alle Categorie — NON è possibile. Solo a livello Knowledge Base e Articolo</li>
  <li>Confondere Product Entitlement con User Criteria — gli Entitlement restringono per prodotto posseduto; gli User Criteria restringono per appartenenza a utente/gruppo</li>
  <li>Dimenticare di abilitare la system property "Access control of Knowledge Articles" prima di aspettarsi che i Product Entitlement funzionino</li>
  <li>Pensare che WebDAV duplichi i contenuti in ServiceNow — li indicizza e li mostra; il contenuto sorgente rimane esterno</li>
  <li>Creare articoli manualmente invece di usare "Report Knowledge Gap" — quest'ultimo crea un record di gap tracciabile e gestibile per il team KM</li>
</ul></div>`
        }
      }
    ]
};
