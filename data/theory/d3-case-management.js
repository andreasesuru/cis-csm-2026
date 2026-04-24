// Domain 3 — Case Management (20%)
const THEORY_D3 = {
    id:2, pct:"20%", color:"#a5a0f0",
    title:{en:"Domain 3: Case Management",it:"Dominio 3: Gestione dei Case"},
    subtitle:{en:"Lifecycle · States · SLAs · Major Issues · Channels · Escalation",it:"Ciclo di vita · Stati · SLA · Major Issue · Canali · Escalation"},
    topics:[
      {
        title:{en:"Case Lifecycle & States",it:"Ciclo di Vita e Stati del Case"},
        tag:"purple",
        quiz:[
          {q:"In which Case state can the SLA timer be PAUSED?",opts:["New","Open","Awaiting Info","Resolved"],ans:2,exp:"'Awaiting Info' can be configured with a Pause Condition on the SLA definition. The delay is attributed to the customer (waiting for their response), so the SLA pauses."},
          {q:"Default auto-close period for a Resolved case with no customer response?",opts:["2 days","5 days","7 days","30 days"],ans:1,exp:"Cases in Resolved state auto-close after 5 days by default (configurable in CSM Properties). After 5 days without customer response, the case moves to Closed automatically."},
          {q:"When a Closed case is reopened, what happens to the SLA?",opts:["SLA continues from where it left off","SLA calculations RESET from the beginning","SLA is permanently voided","SLA gets a 50% time extension"],ans:1,exp:"When a case is reopened, SLA calculations reset completely — the renewed issue is treated as starting fresh. This ensures accurate SLA tracking for reopened cases."}
        ],
        body:{
          en:`<p class="theory-p">Every Case progresses through defined states. SLA timers, notifications, and automation are tied to these transitions.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 620 95" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px">
  <rect x="5" y="28" width="70" height="38" rx="5" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="40" y="50" text-anchor="middle" fill="#8b949e" font-size="11">New</text>
  <polygon points="79,47 89,41 89,53" fill="#8b949e"/>
  <rect x="92" y="22" width="78" height="50" rx="5" fill="#1f3b5c" stroke="#58a6ff" stroke-width="1.5"/>
  <text x="131" y="44" text-anchor="middle" fill="#58a6ff" font-size="11">Open</text>
  <text x="131" y="58" text-anchor="middle" fill="#8b949e" font-size="9">SLA ▶ running</text>
  <polygon points="173,47 183,41 183,53" fill="#8b949e"/>
  <rect x="186" y="18" width="100" height="58" rx="5" fill="#3b2e0e" stroke="#d29922" stroke-width="2"/>
  <text x="236" y="40" text-anchor="middle" fill="#d29922" font-size="10">Awaiting</text>
  <text x="236" y="53" text-anchor="middle" fill="#f5d87a" font-size="12" font-weight="600">Info ⏸</text>
  <text x="236" y="67" text-anchor="middle" fill="#8b949e" font-size="9">SLA paused</text>
  <polygon points="289,47 299,41 299,53" fill="#8b949e"/>
  <rect x="302" y="22" width="90" height="50" rx="5" fill="#0d3035" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="347" y="44" text-anchor="middle" fill="#39c5cf" font-size="11">Resolved</text>
  <text x="347" y="58" text-anchor="middle" fill="#8b949e" font-size="9">auto-close 5d</text>
  <polygon points="395,47 405,41 405,53" fill="#8b949e"/>
  <rect x="408" y="28" width="72" height="38" rx="5" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="444" y="50" text-anchor="middle" fill="#3fb950" font-size="11">Closed ✓</text>
  <rect x="498" y="28" width="116" height="38" rx="5" fill="#3b1c1c" stroke="#f85149" stroke-width="1"/>
  <text x="556" y="50" text-anchor="middle" fill="#f85149" font-size="11">Cancelled ✗</text>
</svg>
<div class="diagram-caption">Case state flow · ⏸ SLA pauses in Awaiting Info · Auto-close after 5 days in Resolved</div>
</div>
<table class="info-table2"><thead><tr><th>State</th><th>SLA</th><th>Key Behavior</th></tr></thead><tbody>
<tr><td><strong>New</strong></td><td>Running</td><td>Created, not yet assigned</td></tr>
<tr><td><strong>Open</strong></td><td>Running</td><td>Assigned, agent actively working</td></tr>
<tr><td><strong>Awaiting Info</strong></td><td><strong>Paused ⏸</strong></td><td>Waiting for customer. SLA pause configured via Pause Conditions.</td></tr>
<tr><td><strong>Resolved</strong></td><td>Stopped</td><td>Solution provided. Auto-closes after 5 days (configurable) if no response.</td></tr>
<tr><td><strong>Closed</strong></td><td>—</td><td>Final state. Reopening resets SLA calculations.</td></tr>
<tr><td><strong>Cancelled</strong></td><td>Stopped</td><td>Abandoned before resolution.</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Two SLA types per case (best practice):</strong> Create separate SLA definitions for Response Time (first agent touch = 1 hour) and Resolution Time (case closure = 8 business hours). Both linked to the entitlement.</div></div>`,
          it:`<p class="theory-p">Ogni Case progredisce attraverso stati definiti. I timer SLA, notifiche e automazioni sono legati a queste transizioni.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 620 95" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px">
  <rect x="5" y="28" width="70" height="38" rx="5" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="40" y="50" text-anchor="middle" fill="#8b949e" font-size="11">New</text>
  <polygon points="79,47 89,41 89,53" fill="#8b949e"/>
  <rect x="92" y="22" width="78" height="50" rx="5" fill="#1f3b5c" stroke="#58a6ff" stroke-width="1.5"/>
  <text x="131" y="44" text-anchor="middle" fill="#58a6ff" font-size="11">Open</text>
  <text x="131" y="58" text-anchor="middle" fill="#8b949e" font-size="9">SLA ▶ attivo</text>
  <polygon points="173,47 183,41 183,53" fill="#8b949e"/>
  <rect x="186" y="18" width="100" height="58" rx="5" fill="#3b2e0e" stroke="#d29922" stroke-width="2"/>
  <text x="236" y="40" text-anchor="middle" fill="#d29922" font-size="10">Awaiting</text>
  <text x="236" y="53" text-anchor="middle" fill="#f5d87a" font-size="12" font-weight="600">Info ⏸</text>
  <text x="236" y="67" text-anchor="middle" fill="#8b949e" font-size="9">SLA in pausa</text>
  <polygon points="289,47 299,41 299,53" fill="#8b949e"/>
  <rect x="302" y="22" width="90" height="50" rx="5" fill="#0d3035" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="347" y="44" text-anchor="middle" fill="#39c5cf" font-size="11">Resolved</text>
  <text x="347" y="58" text-anchor="middle" fill="#8b949e" font-size="9">auto-chiusura 5gg</text>
  <polygon points="395,47 405,41 405,53" fill="#8b949e"/>
  <rect x="408" y="28" width="72" height="38" rx="5" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="444" y="50" text-anchor="middle" fill="#3fb950" font-size="11">Closed ✓</text>
  <rect x="498" y="28" width="116" height="38" rx="5" fill="#3b1c1c" stroke="#f85149" stroke-width="1"/>
  <text x="556" y="50" text-anchor="middle" fill="#f85149" font-size="11">Cancelled ✗</text>
</svg>
<div class="diagram-caption">Flusso stati · ⏸ SLA in pausa in Awaiting Info · Auto-chiusura dopo 5 giorni in Resolved</div>
</div>
<table class="info-table2"><thead><tr><th>Stato</th><th>SLA</th><th>Comportamento chiave</th></tr></thead><tbody>
<tr><td><strong>New</strong></td><td>In corso</td><td>Creato, non ancora assegnato</td></tr>
<tr><td><strong>Open</strong></td><td>In corso</td><td>Assegnato, agente in lavorazione attiva</td></tr>
<tr><td><strong>Awaiting Info</strong></td><td><strong>In pausa ⏸</strong></td><td>In attesa di info dal cliente. SLA pausa configurata via Pause Conditions.</td></tr>
<tr><td><strong>Resolved</strong></td><td>Fermo</td><td>Soluzione fornita. Auto-chiusura dopo 5 giorni (configurabile) senza risposta.</td></tr>
<tr><td><strong>Closed</strong></td><td>—</td><td>Stato finale. La riapertura azzera il calcolo SLA.</td></tr>
<tr><td><strong>Cancelled</strong></td><td>Fermo</td><td>Abbandonato prima della risoluzione.</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Due tipi di SLA per case (best practice):</strong> Crea SLA Definition separate per Tempo di Risposta (primo contatto agente = 1 ora) e Tempo di Risoluzione (chiusura case = 8 ore lavorative). Entrambi collegati all'entitlement.</div></div>`
        }
      },
      {
        title:{en:"Major Issue Management",it:"Gestione Major Issue"},
        tag:"red",
        quiz:[
          {q:"Which feature sends automatic updates to all customers with cases linked to a Major Case?",opts:["Targeted Communications","Case Digest","SLA Notifications","Bulk Email Service"],ans:1,exp:"Case Digest is specifically for Major Issue Management. It automatically identifies all customers with child cases linked to the Major Case and sends them status updates."},
          {q:"500 customers are affected. You need to send a custom message ONLY to Gold tier customers. Which feature?",opts:["Case Digest on Major Case","Targeted Communications filtered by Gold entitlement","Individual emails manually","Bulk Case Update"],ans:1,exp:"Targeted Communications allows filtering recipients by Account, product, support tier, or case type. Case Digest sends to ALL linked child case customers — no segmentation options."}
        ],
        body:{
          en:`<p class="theory-p">When a problem affects many customers simultaneously, Major Issue Management provides structured coordination and communication.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 158" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="190" y="8" width="180" height="42" rx="8" fill="#3b1c1c" stroke="#f85149" stroke-width="2"/>
  <text x="280" y="26" text-anchor="middle" fill="#f85149" font-size="12" font-weight="700">🔴 Major Case</text>
  <text x="280" y="42" text-anchor="middle" fill="#e6edf3" font-size="11">"Network outage EMEA"</text>
  <line x1="220" y1="50" x2="95" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="255" y1="50" x2="210" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="305" y1="50" x2="350" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="340" y1="50" x2="460" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <rect x="28" y="88" width="130" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="93" y="105" text-anchor="middle" fill="#e6edf3" font-size="11">Case: Acme Corp</text>
  <text x="93" y="118" text-anchor="middle" fill="#8b949e" font-size="10">child case</text>
  <rect x="170" y="88" width="130" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="235" y="105" text-anchor="middle" fill="#e6edf3" font-size="11">Case: GlobalTech</text>
  <text x="235" y="118" text-anchor="middle" fill="#8b949e" font-size="10">child case</text>
  <rect x="312" y="88" width="130" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="377" y="105" text-anchor="middle" fill="#e6edf3" font-size="11">Case: Nexus Ltd</text>
  <text x="377" y="118" text-anchor="middle" fill="#8b949e" font-size="10">child case</text>
  <rect x="454" y="88" width="80" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="494" y="110" text-anchor="middle" fill="#8b949e" font-size="10">+ N more</text>
  <text x="280" y="152" text-anchor="middle" fill="#39c5cf" font-size="10">Case Digest → auto-notifies ALL child case customers</text>
</svg>
<div class="diagram-caption">Major Case (parent) → Child Cases → Case Digest notifies all customers</div>
</div>
<table class="info-table2"><thead><tr><th>Feature</th><th>What It Does</th><th>Triggered By</th></tr></thead><tbody>
<tr><td><strong>Case Digest</strong></td><td>Auto-updates all customers linked via child cases on Major Case progress</td><td>Manual or scheduled from Major Case</td></tr>
<tr><td><strong>Targeted Communications</strong></td><td>Manual bulk personalized messages to specific customer segments (filterable)</td><td>Agent/manager action</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Key distinction:</strong> Case Digest = automatic update on Major Case progress for ALL linked customers. Targeted Communications = proactive manual custom messaging to SEGMENTED customers. Know the difference.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Child case closure:</strong> When a Major Case is resolved, child cases are NOT automatically closed. Separate closure actions are required (or configure optional Business Rules to cascade).</div></div>`,
          it:`<p class="theory-p">Quando un problema colpisce molti clienti contemporaneamente, il Major Issue Management fornisce coordinamento e comunicazione strutturati.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 158" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="190" y="8" width="180" height="42" rx="8" fill="#3b1c1c" stroke="#f85149" stroke-width="2"/>
  <text x="280" y="26" text-anchor="middle" fill="#f85149" font-size="12" font-weight="700">🔴 Major Case</text>
  <text x="280" y="42" text-anchor="middle" fill="#e6edf3" font-size="11">"Interruzione rete EMEA"</text>
  <line x1="220" y1="50" x2="95" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="255" y1="50" x2="210" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="305" y1="50" x2="350" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="340" y1="50" x2="460" y2="88" stroke="#f85149" stroke-width="1.5" stroke-dasharray="4,2"/>
  <rect x="28" y="88" width="130" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="93" y="105" text-anchor="middle" fill="#e6edf3" font-size="11">Case: Acme Corp</text>
  <text x="93" y="118" text-anchor="middle" fill="#8b949e" font-size="10">case figlio</text>
  <rect x="170" y="88" width="130" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="235" y="105" text-anchor="middle" fill="#e6edf3" font-size="11">Case: GlobalTech</text>
  <text x="235" y="118" text-anchor="middle" fill="#8b949e" font-size="10">case figlio</text>
  <rect x="312" y="88" width="130" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="377" y="105" text-anchor="middle" fill="#e6edf3" font-size="11">Case: Nexus Ltd</text>
  <text x="377" y="118" text-anchor="middle" fill="#8b949e" font-size="10">case figlio</text>
  <rect x="454" y="88" width="80" height="36" rx="6" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="494" y="110" text-anchor="middle" fill="#8b949e" font-size="10">+ N altri</text>
  <text x="280" y="152" text-anchor="middle" fill="#39c5cf" font-size="10">Case Digest → notifica automatica TUTTI i clienti con case figlio</text>
</svg>
<div class="diagram-caption">Major Case (padre) → Case Figli → Case Digest notifica tutti i clienti</div>
</div>
<table class="info-table2"><thead><tr><th>Funzionalità</th><th>Cosa fa</th><th>Attivato da</th></tr></thead><tbody>
<tr><td><strong>Case Digest</strong></td><td>Aggiorna automaticamente tutti i clienti con case figlio collegati al Major Case</td><td>Manuale o pianificato dal Major Case</td></tr>
<tr><td><strong>Targeted Communications</strong></td><td>Messaggi bulk personalizzati manuali a segmenti specifici (filtrabile)</td><td>Azione agente/manager</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Distinzione chiave:</strong> Case Digest = aggiornamento automatico a TUTTI i clienti collegati. Targeted Communications = messaggi personalizzati manuali a clienti SEGMENTATI. Conosci la differenza.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Chiusura case figlio:</strong> Quando un Major Case viene risolto, i case figlio NON vengono chiusi automaticamente. Sono necessarie azioni di chiusura separate (o configurare Business Rule opzionali per la propagazione).</div></div>`
        }
      },
      {
        title:{en:"Case Actions & Tasks",it:"Case Actions e Task"},
        tag:"purple",
        quiz:[
          {q:"What is the key difference between a Case Action and a Case Task in ServiceNow CSM?",opts:["Case Actions are automated; Case Tasks are manual","Case Actions execute immediately as UI operations; Case Tasks create tracked child work items","Case Actions are only available in B2B; Tasks are only in B2C","They are identical — just different names for the same feature"],ans:1,exp:"Case Actions (e.g., Assign, Quick Close, Escalate) are immediate UI operations triggered by buttons on the case form. Case Tasks are persistent child records (sn_customerservice_task) that track separate pieces of work with their own lifecycle, assignment, and closure."},
          {q:"Which table stores CSM Case Tasks?",opts:["sc_task","csm_task","sn_customerservice_task","task_case"],ans:2,exp:"CSM Case Tasks are stored in 'sn_customerservice_task', which extends the base 'task' table. This is distinct from sc_task (Service Catalog tasks) and other task subtypes."}
        ],
        body:{
          en:`<p class="theory-p">Understanding the difference between <strong>Case Actions</strong> and <strong>Case Tasks</strong> is essential for Domain 3. They solve different problems.</p>
<table class="info-table2"><thead><tr><th>Feature</th><th>Case Action</th><th>Case Task</th></tr></thead><tbody>
<tr><td>What it does</td><td>Immediate operation on the case</td><td>Creates a child work item</td></tr>
<tr><td>Has its own record?</td><td>❌ No persistent record</td><td>✅ Yes — sn_customerservice_task</td></tr>
<tr><td>Has lifecycle?</td><td>❌ Executes and disappears</td><td>✅ Open → In Progress → Closed</td></tr>
<tr><td>Examples</td><td>Assign, Escalate, Quick Close, Send Email</td><td>Verify identity, Ship replacement, Follow up call</td></tr>
<tr><td>Assigned to</td><td>N/A (fires immediately)</td><td>Agent, Group, or Team</td></tr>
<tr><td>Tracked separately?</td><td>❌</td><td>✅ Appears in agent work queue</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Case Task lifecycle:</strong> Open → Work in Progress → Closed Complete / Closed Incomplete. A Case can have multiple Tasks. The Case itself stays open until all Tasks are resolved and the agent manually closes it (unless automation closes it).</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>When to use Tasks:</strong> Any time work needs to be delegated, tracked, or completed by a different person/team before the case can close. Example: an IT case that needs a hardware engineer to physically replace a component.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Case does not auto-close when Tasks close.</strong> Closing all Tasks does NOT automatically close the parent Case unless a Business Rule or Flow is configured to do so.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Thinking Quick Close (a Case Action) closes all child Tasks — it does not by default</li>
  <li>Confusing sn_customerservice_task with sc_task — they are different tables for different purposes</li>
  <li>Assuming one case can only have one Task — multiple concurrent Tasks are fully supported</li>
</ul></div>`,
          it:`<p class="theory-p">La differenza tra <strong>Case Action</strong> e <strong>Case Task</strong> è fondamentale per il Dominio 3.</p>
<table class="info-table2"><thead><tr><th>Caratteristica</th><th>Case Action</th><th>Case Task</th></tr></thead><tbody>
<tr><td>Cosa fa</td><td>Operazione immediata sul case</td><td>Crea un work item figlio</td></tr>
<tr><td>Ha un record?</td><td>❌ No record persistente</td><td>✅ Sì — sn_customerservice_task</td></tr>
<tr><td>Ha un ciclo di vita?</td><td>❌ Esegue e scompare</td><td>✅ Aperto → In Corso → Chiuso</td></tr>
<tr><td>Esempi</td><td>Assign, Escalate, Quick Close</td><td>Verifica identità, Spedisci sostituto</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Il case non si chiude automaticamente</strong> quando i Task vengono chiusi, a meno che non sia configurata una Business Rule o un Flow apposito.</div></div>`
        }
      },
      {
        title:{en:"Escalation Procedures & Workflow",it:"Procedure di Escalation e Workflow"},
        tag:"purple",
        quiz:[
          {q:"A case has been open for 3 hours with no response and the SLA is about to breach. Which feature automatically escalates it to a senior agent?",opts:["Case Action manually triggered by manager","Escalation Rule based on SLA warning threshold","Assignment Rule re-evaluating priority","Case Digest sent to the customer"],ans:1,exp:"Escalation Rules trigger automatically based on conditions such as SLA warning %, elapsed time, or priority. When the configured threshold is met, the system reassigns the case to a defined escalation target (senior agent, escalation group, or manager) without manual intervention."},
          {q:"What distinguishes a time-based escalation from an attribute-based escalation?",opts:["Time-based uses AWA; attribute-based uses Assignment Rules","Time-based triggers when a time threshold is met (e.g., SLA breach); attribute-based triggers when a case field changes (e.g., priority upgraded to Critical)","They are the same — time and attributes are both conditions","Attribute-based is only available for B2B cases"],ans:1,exp:"Time-based escalation fires when a duration expires (SLA warning %, elapsed time). Attribute-based escalation fires when a specific case field changes value — for example, when a customer escalates a complaint and the priority is changed to Critical, an attribute-based rule can immediately re-route the case."}
        ],
        body:{
          en:`<p class="theory-p"><strong>Escalation</strong> ensures critical cases are handled by the right people at the right time. It is a key mechanism in Domain 3 that connects SLA management, Case routing, and Major Issue handling.</p>
<table class="info-table2"><thead><tr><th>Escalation Type</th><th>Trigger</th><th>Example</th></tr></thead><tbody>
<tr><td>Time-based</td><td>SLA warning % reached or elapsed time</td><td>Case open 2h with no update → escalate to senior agent</td></tr>
<tr><td>Attribute-based</td><td>Case field changes (priority, type, product)</td><td>Priority set to Critical → route to on-call manager</td></tr>
<tr><td>Manual</td><td>Agent or manager clicks Escalate action</td><td>Agent unable to resolve → escalate via Case Action</td></tr>
<tr><td>Major Issue link</td><td>Case linked to an active Major Case</td><td>Cascades communication to all affected customers</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Escalation Rule configuration:</strong> Customer Service › Configuration › Escalation Rules. Each rule defines: Condition (when to fire) + Escalation Target (who to assign to) + Notification (who to alert).</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Escalation vs Assignment Rules:</strong> Assignment Rules route cases on creation. Escalation Rules re-route cases AFTER creation when conditions change. Both can coexist on the same case.</div></div>
<div class="scenario-box" id="sc-esc1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-esc1')"><span>🔥</span><span class="sc-badge">Scenario</span><span class="sc-title">VIP customer case not resolved within SLA</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A VIP Account's case has reached 75% of its resolution SLA with no progress. The current agent is not responding.</p>
    <div class="scenario-q">❓ What is the correct escalation design?</div>
    <div class="scenario-a">✅ <strong>Configure a time-based Escalation Rule:</strong> Condition = Task SLA warning % ≥ 75 AND Account tier = VIP → Reassign to Senior Support Group AND notify the Support Manager. This fires automatically without any agent action needed.</div>
  </div>
</div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam focus:</strong> Escalation Rules fire AFTER case creation (reactive). Assignment Rules fire AT case creation (proactive). Know which to use in each scenario question.</div></div>`,
          it:`<p class="theory-p">L'<strong>Escalation</strong> garantisce che i case critici siano gestiti dalle persone giuste al momento giusto. È un meccanismo chiave nel Dominio 3.</p>
<table class="info-table2"><thead><tr><th>Tipo di Escalation</th><th>Trigger</th><th>Esempio</th></tr></thead><tbody>
<tr><td>Basata sul tempo</td><td>% SLA warning o tempo trascorso</td><td>Case aperto 2h senza aggiornamenti → escalation ad agente senior</td></tr>
<tr><td>Basata su attributi</td><td>Campo case cambia (priorità, tipo, prodotto)</td><td>Priorità → Critico → routing al manager on-call</td></tr>
<tr><td>Manuale</td><td>Agente/manager clicca azione Escalate</td><td>Agente non riesce a risolvere</td></tr>
<tr><td>Collegamento Major Issue</td><td>Case collegato a un Major Case attivo</td><td>Comunicazione a cascata a tutti i clienti impattati</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Focus esame:</strong> Le Escalation Rule scattano DOPO la creazione del case (reattive). Le Assignment Rule scattano ALLA creazione del case (proattive). Fondamentale saperle distinguere nelle domande a scenario.</div></div>`
        }
      },
      {
        title:{en:"Action Status Indicators, Case Lines & Auto-Close",it:"Indicatori di Stato Azione, Case Lines e Auto-Chiusura"},
        tag:"purple",
        quiz:[
          {q:"A case shows a RED action status indicator in the Configurable Workspace. What does this mean?",opts:["The case has been escalated to a manager","The case resolution is hard-blocked (e.g., by an open task or pending external dependency)","The customer has sent a new message requiring agent attention","The case SLA is about to breach"],ans:1,exp:"A red indicator signals a hard block — the case cannot progress until the blocking condition is resolved (e.g., an open child task, a waiting-on-vendor situation). Blue indicates the customer or a system has updated the case and the agent needs to review it. Red is about resolution being blocked, not urgency alone."},
          {q:"An e-commerce order contains 5 products and 3 of them have separate issues. What is the recommended CSM approach?",opts:["Create 3 separate cases, one per product issue","Create 1 case with 3 Case Lines, one per product issue","Use 3 child cases linked to a parent case","Create one case and log all issues in the work notes"],ans:1,exp:"Case Lines (table: sn_customerservice_case_line) are designed for this scenario — one order with multiple line items each potentially having its own issue. One case with N case lines avoids case sprawl while keeping each issue trackable independently."},
          {q:"What happens to a secondary case when two cases are merged in CSM?",opts:["It is deleted permanently","Its state changes to Cancelled and the primary case inherits its activities and notes","It is archived with read-only access","It becomes a child case of the primary"],ans:1,exp:"When cases are merged, the secondary case is set to 'Cancelled' state. The primary case inherits all work notes, activities, and attachments from the secondary. The secondary record still exists in the system for audit purposes."}
        ],
        body:{
          en:`<p class="theory-p">This topic covers four operational mechanics that appear repeatedly on the exam: Action Status Indicators, Case Lines, Auto-Close behavior, and Case Merge/Reopen.</p>
<p class="theory-p"><strong>Action Status Indicators</strong> are visual signals in the <strong>Configurable Workspace</strong> that help agents and supervisors understand what kind of attention a case needs at a glance.</p>
<table class="info-table2"><thead><tr><th>Indicator</th><th>Meaning</th><th>Triggered by</th></tr></thead><tbody>
<tr><td>🔵 <strong>Blue</strong></td><td>Case updated by customer or system — agent review needed</td><td>Customer portal reply, inbound email, integration update</td></tr>
<tr><td>🔴 <strong>Red</strong></td><td>Hard block — resolution cannot proceed</td><td>Open child task, waiting on external vendor, manual agent override</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam distinction:</strong> Blue does NOT mean high priority — it means "something changed, review this." Red does NOT mean SLA breach — it means the resolution path is specifically blocked. These are workflow state signals, not SLA metrics. Agents can manually override the indicator when the automated trigger does not reflect reality.</div></div>
<p class="theory-p"><strong>Case Lines</strong> address the e-commerce problem of one order with multiple items, each with potentially different issues. Instead of creating separate cases per item, a single case holds N Case Lines — each tracking its own issue, status, and notes independently.</p>
<table class="info-table2"><thead><tr><th>Property</th><th>Detail</th></tr></thead><tbody>
<tr><td><strong>Table</strong></td><td>sn_customerservice_case_line</td></tr>
<tr><td><strong>Parent</strong></td><td>One Case record (the order container)</td></tr>
<tr><td><strong>Use case</strong></td><td>E-commerce, field service, subscription orders with multiple products</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-caselines-en">
  <div class="scenario-hdr" onclick="toggleScenario('sc-caselines-en')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">E-commerce order: 4 products, 2 defective</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A customer orders a laptop, docking station, keyboard, and monitor. The laptop arrives damaged and the docking station is missing.</p>
    <div class="scenario-q">❓ How should this be handled in CSM?</div>
    <div class="scenario-a">✅ Create <strong>one Case</strong> for the order with <strong>two Case Lines</strong> — one for the damaged laptop, one for the missing docking station. Each Case Line tracks its issue independently. One case number, unified customer experience.</div>
  </div>
</div>
<p class="theory-p"><strong>Auto-Close</strong> automates the Resolved → Closed transition via the OOTB flow <strong>"Auto Close Resolved Cases"</strong>:</p>
<div class="callout success"><span class="ci">✅</span><div><strong>Auto-Close sequence:</strong>
<ol style="margin:6px 0 0 16px;padding:0">
  <li>Case reaches <strong>Resolved</strong> state</li>
  <li>Flow waits <strong>N days</strong> (configurable; default <strong>3 days</strong>)</li>
  <li>Sends a <strong>reminder email</strong> to the customer</li>
  <li>No customer reply → case moves to <strong>Closed</strong></li>
  <li>Customer replies → case is <strong>reopened</strong> (SLA resets)</li>
</ol></div></div>
<p class="theory-p"><strong>Case Merge:</strong> When two cases describe the same issue, merge them. The secondary case is set to <strong>Cancelled</strong> (not deleted — kept for audit). The primary case inherits all work notes, activities, and attachments. <strong>Case Reopening:</strong> A Closed case CAN be reopened in CSM — the SLA clock resets from the reopening moment.</p>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Thinking blue indicator = high priority — it means "review this update"</li>
  <li>Confusing Case Lines with child cases — Case Lines are sub-records within one case; child cases are separate case records</li>
  <li>Assuming Auto-Close is not configurable — both N-day wait and email template are OOTB configurable</li>
  <li>Thinking the secondary case is deleted after merge — it is Cancelled and kept for audit</li>
  <li>Forgetting that reopening a Closed case resets the SLA clock</li>
</ul></div>`,
          it:`<p class="theory-p">Questo topic copre quattro meccanismi operativi che compaiono ripetutamente nell'esame: Action Status Indicators, Case Lines, Auto-Close e comportamento di Merge/Riapertura.</p>
<p class="theory-p"><strong>Gli Action Status Indicators</strong> sono segnali visivi nel <strong>Configurable Workspace</strong> che aiutano agenti e supervisori a capire immediatamente di che attenzione ha bisogno un case.</p>
<table class="info-table2"><thead><tr><th>Indicatore</th><th>Significato</th><th>Scatenato da</th></tr></thead><tbody>
<tr><td>🔵 <strong>Blu</strong></td><td>Case aggiornato da cliente o sistema — l'agente deve revisionarlo</td><td>Risposta portale, email in entrata, aggiornamento integrazione</td></tr>
<tr><td>🔴 <strong>Rosso</strong></td><td>Hard block — la risoluzione è bloccata</td><td>Task figlio aperto, attesa vendor esterno, override manuale</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Distinzione esame:</strong> Blu NON significa alta priorità — significa "qualcosa è cambiato, revisionalo." Rosso NON significa breach SLA — significa che il percorso di risoluzione è bloccato. Sono segnali di stato workflow, non metriche SLA. Gli agenti possono fare override manuale quando il trigger automatico non riflette la realtà.</div></div>
<p class="theory-p"><strong>Le Case Lines</strong> risolvono il problema degli ordini e-commerce multi-prodotto. Invece di creare N case per N item, un singolo case contiene N Case Lines, ognuna con il proprio issue, stato e note indipendenti.</p>
<table class="info-table2"><thead><tr><th>Proprietà</th><th>Dettaglio</th></tr></thead><tbody>
<tr><td><strong>Tabella</strong></td><td>sn_customerservice_case_line</td></tr>
<tr><td><strong>Padre</strong></td><td>Un record Case (il contenitore ordine)</td></tr>
<tr><td><strong>Use case</strong></td><td>E-commerce, field service, ordini abbonamento multi-prodotto</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-caselines-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-caselines-it')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">Ordine e-commerce: 4 prodotti, 2 difettosi</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un cliente ordina laptop, docking station, tastiera e monitor. Il laptop arriva danneggiato e la docking station è mancante.</p>
    <div class="scenario-q">❓ Come si gestisce in CSM?</div>
    <div class="scenario-a">✅ Si crea <strong>un solo Case</strong> con <strong>due Case Lines</strong> — una per il laptop danneggiato, una per la docking station mancante. Un numero di case, esperienza cliente unificata.</div>
  </div>
</div>
<p class="theory-p"><strong>Auto-Close</strong> automatizza la transizione Resolved → Closed tramite il flow OOTB <strong>"Auto Close Resolved Cases"</strong>: attende N giorni (default <strong>3 giorni</strong>) → invia reminder email → se nessuna risposta → Closed. Se il cliente risponde → case riaperto con SLA resettato.</p>
<p class="theory-p"><strong>Case Merge:</strong> Il case secondario viene impostato a <strong>Cancelled</strong> (non eliminato — mantenuto per audit). Il primario eredita note, attività e allegati. <strong>Riapertura:</strong> Un case Closed PUÒ essere riaperto — il contatore SLA riparte dal momento della riapertura.</p>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Pensare che indicatore blu = alta priorità — significa "c'è un aggiornamento da revisionare"</li>
  <li>Confondere Case Lines con case figli — Case Lines sono sotto-record di un singolo case</li>
  <li>Assumere che Auto-Close non sia configurabile — sia i giorni sia il template email sono configurabili OOTB</li>
  <li>Pensare che il case secondario venga eliminato nel merge — viene impostato a Cancelled</li>
  <li>Dimenticare che la riapertura di un Closed resetta lo SLA</li>
</ul></div>`
        }
      }
    ]
};
