const THEORY_D2 = {
    id:1, pct:"30%", color:"#39c5cf",
    title:{en:"Domain 2: CSM Configuration",it:"Dominio 2: Configurazione CSM"},
    subtitle:{en:"Setup · Routing · AWA · Case Types · Workspace · Playbooks · CSM-ITSM · Channels",it:"Setup · Routing · AWA · Tipi Case · Workspace · Playbook · Bridge CSM-ITSM · Canali"},
    topics:[
      {
        title:{en:"System Setup & Best Practice Sequence",it:"Setup di Sistema e Sequenza Best Practice"},
        tag:"teal",
        quiz:[
          {q:"According to CSM best practices, what is the FIRST step in a new implementation?",opts:["Configure all communication channels","Define the B2B vs B2C data model with the customer","Set up routing rules","Configure portal branding"],ans:1,exp:"Define the B2B vs B2C data model FIRST. This decision shapes everything else: entity relationships, entitlement structure, portal design, and routing. Starting with channels or routing leads to major rework."},
          {q:"What is the recommended channel rollout strategy?",opts:["Launch all channels simultaneously","Start with email + portal, add phone/chat in later phases","Start with phone only, then add digital","Configure all in dev, enable one in prod"],ans:1,exp:"Best practice: Start with email + portal (lower complexity). Add phone/CTI and chat in subsequent phases. Reduces risk and prevents overwhelming agents with multiple new channels simultaneously."}
        ],
        body:{
          en:`<p class="theory-p">Before any configuration, implementation sequence matters. The exam tests this order directly.</p>
<div class="callout tip"><span class="ci">💜</span><div><strong>The Golden Sequence (memorize):</strong><br>
1️⃣ Define data model (B2B vs B2C)<br>
2️⃣ Design entitlement structure<br>
3️⃣ Build Case Types + Service Definitions<br>
4️⃣ Configure routing rules<br>
5️⃣ Roll out channels (email + portal first, then chat/phone)<br>
6️⃣ Configure workspace + analytics<br>
7️⃣ Add AI features (Now Assist, Virtual Agent)</div></div>
<ul class="theory-ul">
  <li><strong>CSM Properties hub:</strong> <code>Customer Service › Administration › Properties</code> — central config for B2B/B2C, channels, workspace, auto-close rules.</li>
  <li><strong>Now Create (Agile) Methodology:</strong> Required learning path course. Sprint-based, user stories format: <em>"As a [role], I want [feature] so that [benefit]"</em>.</li>
  <li><strong>PDI Testing:</strong> Always test on a Personal Developer Instance before production. Never configure directly in prod.</li>
  <li><strong>Delta Exams:</strong> CIS-CSM is version-specific. Pass delta exams with each major ServiceNow release to maintain certification.</li>
</ul>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Activating all channels simultaneously on go-live — agents and customers overwhelmed</li>
  <li>Configuring routing rules before case types — rules reference case type fields that don't exist yet</li>
  <li>Skipping the Now Create Methodology course — it's required AND tested</li>
</ul></div>`,
          it:`<p class="theory-p">Prima di qualsiasi configurazione, la sequenza di implementazione è importante. L'esame testa questo ordine direttamente.</p>
<div class="callout tip"><span class="ci">💜</span><div><strong>La Sequenza d'Oro (memorizzala):</strong><br>1️⃣ Definire data model (B2B vs B2C) → 2️⃣ Progettare entitlement → 3️⃣ Creare Case Type + Service Definition → 4️⃣ Configurare routing → 5️⃣ Rollout canali (email + portale prima) → 6️⃣ Workspace + analytics → 7️⃣ Funzionalità AI</div></div>
<ul class="theory-ul">
  <li><strong>Hub CSM Properties:</strong> <code>Customer Service › Administration › Properties</code> — config centrale per B2B/B2C, canali, workspace, auto-chiusura.</li>
  <li><strong>Metodologia Now Create (Agile):</strong> Corso obbligatorio nel learning path. Sprint-based, user story: <em>"Come [ruolo], voglio [funzionalità] per [beneficio]"</em>.</li>
</ul>`
        }
      },
      {
        title:{en:"Assignment Rules & AWA",it:"Regole di Assegnazione e AWA"},
        tag:"teal",
        quiz:[
          {q:"Two Assignment Rules match a case: Rule A (Order=10), Rule B (Order=50). Which fires?",opts:["Rule B — higher order wins","Rule A — lower order = higher priority, fires first","Both fire simultaneously","The most recently created rule fires"],ans:1,exp:"Assignment Rules process by Order number — LOWEST order = HIGHEST priority = fires first. Rule A (order 10) fires before Rule B (order 50). Only the first matching rule applies."},
          {q:"What factor does AWA consider that basic Assignment Rules do NOT?",opts:["Case category","Case priority","Agent current workload and capacity","Account type"],ans:2,exp:"AWA considers agent capacity (current workload, maximum concurrent cases) and real-time availability. Basic Assignment Rules assign to a group based on conditions without knowing if individual agents are available or overloaded."}
        ],
        body:{
          en:`<p class="theory-p">CSM uses layered routing. The exam tests the difference between each method clearly.</p>
<table class="info-table2"><thead><tr><th>Method</th><th>Assigns To</th><th>Based On</th><th>Best For</th></tr></thead><tbody>
<tr><td><strong>Assignment Rules</strong></td><td>Group or User</td><td>Conditions (category, priority, account)</td><td>Simple predictable routing</td></tr>
<tr><td><strong>AWA</strong></td><td>Specific Agent</td><td>Capacity, skills, availability</td><td>High-volume contact centers</td></tr>
<tr><td><strong>Skills-based</strong></td><td>Agent with matching skills</td><td>Skills on agent profile</td><td>Specialized technical teams</td></tr>
<tr><td><strong>Queue Management</strong></td><td>Queue (group pick-up)</td><td>Channel, category</td><td>Overflow and balancing</td></tr>
</tbody></table>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="8" y="30" width="85" height="40" rx="6" fill="#21262d" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="50" y="54" text-anchor="middle" fill="#e6edf3" font-size="11">New Case</text>
  <polygon points="97,50 107,44 107,56" fill="#8b949e"/>
  <rect x="110" y="20" width="110" height="60" rx="6" fill="#21262d" stroke="#d29922" stroke-width="1.5"/>
  <text x="165" y="46" text-anchor="middle" fill="#f5d87a" font-size="11" font-weight="600">Assignment</text>
  <text x="165" y="60" text-anchor="middle" fill="#f5d87a" font-size="11">Rules</text>
  <text x="165" y="74" text-anchor="middle" fill="#8b949e" font-size="9">order-based</text>
  <polygon points="224,50 234,44 234,56" fill="#8b949e"/>
  <rect x="237" y="20" width="100" height="60" rx="6" fill="#21262d" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="287" y="46" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">AWA</text>
  <text x="287" y="60" text-anchor="middle" fill="#39c5cf" font-size="11">Engine</text>
  <text x="287" y="74" text-anchor="middle" fill="#8b949e" font-size="9">capacity+skills</text>
  <polygon points="341,50 351,44 351,56" fill="#8b949e"/>
  <rect x="354" y="20" width="100" height="60" rx="6" fill="#21262d" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="404" y="46" text-anchor="middle" fill="#a5a0f0" font-size="11" font-weight="600">Skills</text>
  <text x="404" y="60" text-anchor="middle" fill="#a5a0f0" font-size="11">Match</text>
  <text x="404" y="74" text-anchor="middle" fill="#8b949e" font-size="9">agent skills</text>
  <polygon points="458,50 468,44 468,56" fill="#8b949e"/>
  <rect x="471" y="28" width="82" height="44" rx="6" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="512" y="48" text-anchor="middle" fill="#7ee89a" font-size="11" font-weight="600">Agent</text>
  <text x="512" y="62" text-anchor="middle" fill="#7ee89a" font-size="11">Assigned ✓</text>
</svg>
<div class="diagram-caption">Routing pipeline: Rules → AWA → Skills → Agent assigned</div>
</div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Rule Order matters:</strong> Lowest number = highest priority. When multiple rules match, only the lowest-order rule fires. Test by swapping order numbers in your PDI.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>AWA Capacity:</strong> Each agent has a max concurrent case limit. When at capacity, AWA skips that agent and assigns to the next available one — automatic load balancing.</div></div>
<div class="pdi-box" id="pdi-routing">
  <div class="pdi-hdr" onclick="togglePDI('pdi-routing')"><span>🖥️</span><span class="pdi-badge">PDI Exercise</span><span class="pdi-title">Create Assignment Rules + test order priority</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Go to <strong>Customer Service › Configuration › Assignment Rules › New</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Rule 1: Name="Critical Cases", Order=<strong>10</strong>, Condition: Priority=1-Critical → Group="Level 2 Support".</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Rule 2: Name="Network Issues", Order=<strong>50</strong>, Condition: Category="Network" → Group="Network Team".</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Create a test Case: Priority=Critical, Category=Network. Observe which rule fires (should be Rule 1 — order 10).</div></div>
    <div class="pdi-step"><div class="pdi-num">5</div><div class="pdi-text">Swap order numbers (Rule 1 → 50, Rule 2 → 10) and retest to see assignment change to Network Team.</div></div>
    <div class="pdi-tip">💡 Key insight: Rule 2 (order 10) now fires first despite being the "Network" rule. This is how the exam tests order priority.</div>
  </div>
</div>`,
          it:`<p class="theory-p">CSM usa routing a più livelli. L'esame testa la differenza tra ciascun metodo in modo preciso.</p>
<table class="info-table2"><thead><tr><th>Metodo</th><th>Assegna a</th><th>Basato su</th><th>Ideale per</th></tr></thead><tbody>
<tr><td><strong>Assignment Rules</strong></td><td>Gruppo o Utente</td><td>Condizioni (categoria, priorità, account)</td><td>Routing semplice e prevedibile</td></tr>
<tr><td><strong>AWA</strong></td><td>Agente specifico</td><td>Capacità, skill, disponibilità</td><td>Contact center ad alto volume</td></tr>
<tr><td><strong>Skills-based</strong></td><td>Agente con skill corrispondenti</td><td>Skill nel profilo agente</td><td>Team tecnici specializzati</td></tr>
<tr><td><strong>Queue Management</strong></td><td>Coda (raccolta manuale)</td><td>Canale, categoria</td><td>Overflow e bilanciamento</td></tr>
</tbody></table>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="8" y="30" width="85" height="40" rx="6" fill="#21262d" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="50" y="54" text-anchor="middle" fill="#e6edf3" font-size="11">Nuovo Case</text>
  <polygon points="97,50 107,44 107,56" fill="#8b949e"/>
  <rect x="110" y="20" width="110" height="60" rx="6" fill="#21262d" stroke="#d29922" stroke-width="1.5"/>
  <text x="165" y="46" text-anchor="middle" fill="#f5d87a" font-size="11" font-weight="600">Assignment</text>
  <text x="165" y="60" text-anchor="middle" fill="#f5d87a" font-size="11">Rules</text>
  <text x="165" y="74" text-anchor="middle" fill="#8b949e" font-size="9">per ordine</text>
  <polygon points="224,50 234,44 234,56" fill="#8b949e"/>
  <rect x="237" y="20" width="100" height="60" rx="6" fill="#21262d" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="287" y="46" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">AWA</text>
  <text x="287" y="60" text-anchor="middle" fill="#39c5cf" font-size="11">Engine</text>
  <text x="287" y="74" text-anchor="middle" fill="#8b949e" font-size="9">capacità+skill</text>
  <polygon points="341,50 351,44 351,56" fill="#8b949e"/>
  <rect x="354" y="20" width="100" height="60" rx="6" fill="#21262d" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="404" y="46" text-anchor="middle" fill="#a5a0f0" font-size="11" font-weight="600">Skills</text>
  <text x="404" y="60" text-anchor="middle" fill="#a5a0f0" font-size="11">Match</text>
  <text x="404" y="74" text-anchor="middle" fill="#8b949e" font-size="9">skill agente</text>
  <polygon points="458,50 468,44 468,56" fill="#8b949e"/>
  <rect x="471" y="28" width="82" height="44" rx="6" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="512" y="48" text-anchor="middle" fill="#7ee89a" font-size="11" font-weight="600">Agente</text>
  <text x="512" y="62" text-anchor="middle" fill="#7ee89a" font-size="11">Assegnato ✓</text>
</svg>
<div class="diagram-caption">Pipeline di routing: Rules → AWA → Skills → Agente assegnato</div>
</div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Ordine regole:</strong> Numero più basso = priorità più alta. Quando più regole si abbinano, solo quella con l'ordine più basso viene eseguita. Testa scambiando i numeri d'ordine nel PDI.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Capacità AWA:</strong> Ogni agente ha un limite massimo di case contemporanei. Quando è al limite, AWA salta quell'agente e assegna al successivo disponibile — bilanciamento del carico automatico.</div></div>
<div class="pdi-box" id="pdi-routing-it">
  <div class="pdi-hdr" onclick="togglePDI('pdi-routing-it')"><span>🖥️</span><span class="pdi-badge">Esercizio PDI</span><span class="pdi-title">Crea Assignment Rules e testa la priorità ordine</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Vai su <strong>Customer Service › Configuration › Assignment Rules › New</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Regola 1: Nome="Casi Critici", Ordine=<strong>10</strong>, Condizione: Priorità=1-Critico → Gruppo="Level 2 Support".</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Regola 2: Nome="Problemi Rete", Ordine=<strong>50</strong>, Condizione: Categoria="Network" → Gruppo="Network Team".</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Crea un Case di test: Priorità=Critico, Categoria=Network. Osserva quale regola si attiva (deve essere Regola 1 — ordine 10).</div></div>
    <div class="pdi-step"><div class="pdi-num">5</div><div class="pdi-text">Scambia i numeri d'ordine (Regola 1 → 50, Regola 2 → 10) e ritesta per vedere l'assegnazione cambiare al Network Team.</div></div>
    <div class="pdi-tip">💡 Insight chiave: la Regola 2 (ordine 10) ora scatta prima nonostante sia la regola "Network". Così l'esame testa la priorità ordine.</div>
  </div>
</div>`
        }
      },
      {
        title:{en:"Playbooks & PAD",it:"Playbook e Process Automation Designer"},
        tag:"purple",
        quiz:[
          {q:"Which ServiceNow tool is used to CREATE CSM Playbooks?",opts:["Flow Designer","Workflow Editor","Process Automation Designer (PAD)","Studio IDE"],ans:2,exp:"Playbooks are exclusively created in Process Automation Designer (PAD). This is a frequently tested fact. Flow Designer and Workflow Editor are different tools."},
          {q:"In a CSM Playbook, what does a 'Lane' define?",opts:["The SLA timer for each phase","The communication channel used","Who is responsible for executing a step (agent, supervisor, system)","The routing rule"],ans:2,exp:"Lanes define the actor responsible for each step — agent lane, supervisor lane, or system (automated) lane. Leaving a lane unassigned causes the playbook to stall."}
        ],
        body:{
          en:`<p class="theory-p">Playbooks guide agents through standardized resolution paths. Created in <strong>Process Automation Designer (PAD)</strong> — the tool name is tested directly.</p>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Tool Name Trap:</strong> Playbooks = <strong>Process Automation Designer (PAD)</strong>. NOT Flow Designer. NOT Workflow Editor. PAD is the only correct answer on the exam.</div></div>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 145" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <text x="280" y="18" text-anchor="middle" fill="#a5a0f0" font-family="monospace" font-size="11" font-weight="700">PLAYBOOK STRUCTURE (PAD)</text>
  <rect x="10" y="28" width="105" height="108" rx="6" fill="#2d2a5e" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="62" y="48" text-anchor="middle" fill="#a5a0f0" font-size="10" font-weight="700">PHASE 1</text>
  <text x="62" y="62" text-anchor="middle" fill="#c9c6ff" font-size="12">Diagnose</text>
  <rect x="20" y="70" width="85" height="22" rx="4" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="62" y="85" text-anchor="middle" fill="#8b949e" font-size="10">Agent Lane</text>
  <rect x="20" y="96" width="85" height="22" rx="4" fill="#21262d" stroke="#39c5cf" stroke-width="1"/>
  <text x="62" y="111" text-anchor="middle" fill="#39c5cf" font-size="10">Check IBI ✓</text>
  <text x="62" y="128" text-anchor="middle" fill="#6e7681" font-size="9">auto-triggered</text>
  <polygon points="119,82 129,76 129,88" fill="#a5a0f0"/>
  <text x="138" y="70" text-anchor="middle" fill="#d29922" font-size="9">if critical</text>
  <line x1="119" y1="82" x2="175" y2="82" stroke="#a5a0f0" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="175" y="28" width="120" height="108" rx="6" fill="#2d2a5e" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="235" y="48" text-anchor="middle" fill="#a5a0f0" font-size="10" font-weight="700">PHASE 2</text>
  <text x="235" y="62" text-anchor="middle" fill="#c9c6ff" font-size="12">Escalate</text>
  <rect x="185" y="70" width="100" height="22" rx="4" fill="#21262d" stroke="#d29922" stroke-width="1"/>
  <text x="235" y="85" text-anchor="middle" fill="#d29922" font-size="10">Supervisor Lane</text>
  <rect x="185" y="96" width="100" height="22" rx="4" fill="#21262d" stroke="#d29922" stroke-width="1"/>
  <text x="235" y="111" text-anchor="middle" fill="#d29922" font-size="10">Approve ✓</text>
  <text x="235" y="128" text-anchor="middle" fill="#6e7681" font-size="9">conditional phase</text>
  <polygon points="299,82 309,76 309,88" fill="#a5a0f0"/>
  <rect x="312" y="28" width="120" height="108" rx="6" fill="#2d2a5e" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="372" y="48" text-anchor="middle" fill="#a5a0f0" font-size="10" font-weight="700">PHASE 3</text>
  <text x="372" y="62" text-anchor="middle" fill="#c9c6ff" font-size="12">Resolve</text>
  <rect x="322" y="70" width="100" height="22" rx="4" fill="#21262d" stroke="#3fb950" stroke-width="1"/>
  <text x="372" y="85" text-anchor="middle" fill="#3fb950" font-size="10">Agent Lane</text>
  <rect x="322" y="96" width="100" height="22" rx="4" fill="#1a3a22" stroke="#3fb950" stroke-width="1"/>
  <text x="372" y="111" text-anchor="middle" fill="#7ee89a" font-size="10">Fix + Close ✓</text>
  <text x="372" y="128" text-anchor="middle" fill="#6e7681" font-size="9">final phase</text>
  <rect x="445" y="40" width="110" height="60" rx="6" fill="#3b1c1c" stroke="#f85149" stroke-width="1"/>
  <text x="500" y="62" text-anchor="middle" fill="#f85149" font-size="11" font-weight="700">⚠️ NOT</text>
  <text x="500" y="76" text-anchor="middle" fill="#ffaaaa" font-size="10">Flow Designer</text>
  <text x="500" y="90" text-anchor="middle" fill="#ffaaaa" font-size="10">Workflow Editor</text>
</svg>
<div class="diagram-caption">PAD: 3 phases · Lanes define who acts · Stage conditions control transitions</div>
</div>
<ul class="theory-ul">
  <li><strong>Lanes:</strong> Define WHO executes a step — Agent, Supervisor, System. <strong>Unassigned lanes stall the playbook.</strong></li>
  <li><strong>Stage Transition Conditions:</strong> Control whether the next phase is entered based on data (e.g., "only go to Escalate if diagnosis confirms hardware defect").</li>
  <li><strong>Trigger:</strong> Auto-activate on case state change, or manually triggered by agent.</li>
</ul>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Saying Playbooks use Flow Designer — <strong>always PAD</strong></li>
  <li>Leaving lanes unassigned — playbook stalls with no owner</li>
  <li>Not setting trigger conditions — Playbook won't auto-activate</li>
</ul></div>`,
          it:`<p class="theory-p">I Playbook guidano gli agenti attraverso percorsi di risoluzione standardizzati. Creati nel <strong>Process Automation Designer (PAD)</strong> — il nome dello strumento è testato direttamente.</p>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola nome strumento:</strong> Playbook = <strong>Process Automation Designer (PAD)</strong>. NON Flow Designer. NON Workflow Editor. PAD è l'unica risposta corretta all'esame.</div></div>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 145" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <text x="280" y="18" text-anchor="middle" fill="#a5a0f0" font-family="monospace" font-size="11" font-weight="700">STRUTTURA PLAYBOOK (PAD)</text>
  <rect x="10" y="28" width="105" height="108" rx="6" fill="#2d2a5e" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="62" y="48" text-anchor="middle" fill="#a5a0f0" font-size="10" font-weight="700">FASE 1</text>
  <text x="62" y="62" text-anchor="middle" fill="#c9c6ff" font-size="12">Diagnosi</text>
  <rect x="20" y="70" width="85" height="22" rx="4" fill="#21262d" stroke="#8b949e" stroke-width="1"/>
  <text x="62" y="85" text-anchor="middle" fill="#8b949e" font-size="10">Lane Agente</text>
  <rect x="20" y="96" width="85" height="22" rx="4" fill="#21262d" stroke="#39c5cf" stroke-width="1"/>
  <text x="62" y="111" text-anchor="middle" fill="#39c5cf" font-size="10">Verifica IBI ✓</text>
  <text x="62" y="128" text-anchor="middle" fill="#6e7681" font-size="9">auto-attivato</text>
  <polygon points="119,82 129,76 129,88" fill="#a5a0f0"/>
  <rect x="175" y="28" width="120" height="108" rx="6" fill="#2d2a5e" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="235" y="48" text-anchor="middle" fill="#a5a0f0" font-size="10" font-weight="700">FASE 2</text>
  <text x="235" y="62" text-anchor="middle" fill="#c9c6ff" font-size="12">Escalation</text>
  <rect x="185" y="70" width="100" height="22" rx="4" fill="#21262d" stroke="#d29922" stroke-width="1"/>
  <text x="235" y="85" text-anchor="middle" fill="#d29922" font-size="10">Lane Supervisor</text>
  <rect x="185" y="96" width="100" height="22" rx="4" fill="#21262d" stroke="#d29922" stroke-width="1"/>
  <text x="235" y="111" text-anchor="middle" fill="#d29922" font-size="10">Approva ✓</text>
  <text x="235" y="128" text-anchor="middle" fill="#6e7681" font-size="9">fase condizionale</text>
  <polygon points="299,82 309,76 309,88" fill="#a5a0f0"/>
  <rect x="312" y="28" width="120" height="108" rx="6" fill="#2d2a5e" stroke="#a5a0f0" stroke-width="1.5"/>
  <text x="372" y="48" text-anchor="middle" fill="#a5a0f0" font-size="10" font-weight="700">FASE 3</text>
  <text x="372" y="62" text-anchor="middle" fill="#c9c6ff" font-size="12">Risoluzione</text>
  <rect x="322" y="70" width="100" height="22" rx="4" fill="#21262d" stroke="#3fb950" stroke-width="1"/>
  <text x="372" y="85" text-anchor="middle" fill="#3fb950" font-size="10">Lane Agente</text>
  <rect x="322" y="96" width="100" height="22" rx="4" fill="#1a3a22" stroke="#3fb950" stroke-width="1"/>
  <text x="372" y="111" text-anchor="middle" fill="#7ee89a" font-size="10">Risolvi + Chiudi ✓</text>
  <text x="372" y="128" text-anchor="middle" fill="#6e7681" font-size="9">fase finale</text>
  <rect x="445" y="40" width="110" height="60" rx="6" fill="#3b1c1c" stroke="#f85149" stroke-width="1"/>
  <text x="500" y="62" text-anchor="middle" fill="#f85149" font-size="11" font-weight="700">⚠️ NON</text>
  <text x="500" y="76" text-anchor="middle" fill="#ffaaaa" font-size="10">Flow Designer</text>
  <text x="500" y="90" text-anchor="middle" fill="#ffaaaa" font-size="10">Workflow Editor</text>
</svg>
<div class="diagram-caption">PAD: 3 fasi · Le Lane definiscono chi agisce · Le condizioni controllano le transizioni</div>
</div>
<ul class="theory-ul">
  <li><strong>Lane:</strong> Definisce CHI esegue un passo — Agente, Supervisor, Sistema. <strong>Lane non assegnate bloccano il playbook.</strong></li>
  <li><strong>Stage Transition Conditions:</strong> Controllano se la fase successiva viene attivata in base a condizioni sui dati (es. "vai all'Escalation solo se la diagnosi conferma difetto hardware").</li>
  <li><strong>Trigger:</strong> Auto-attivazione al cambio stato del case, oppure attivazione manuale da parte dell'agente.</li>
</ul>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Dire che i Playbook usano Flow Designer — <strong>è sempre PAD</strong></li>
  <li>Lasciare Lane non assegnate — il playbook si blocca senza proprietario</li>
  <li>Non impostare le condizioni di trigger — il Playbook non si auto-attiva</li>
</ul></div>`
        }
      },
      {
        title:{en:"CSM-ITSM Bridge",it:"Bridge CSM-ITSM"},
        tag:"amber",
        quiz:[
          {q:"Which Business Rule automatically updates a CSM Case when the linked ITSM Incident is closed?",opts:["Close Case on Incident Resolve","Update Case on Incident Closure","Sync Case Status from Incident","Cascade Incident Closure"],ans:1,exp:"'Update Case on Incident Closure' is the specific Business Rule name that handles the reverse bridge flow. This exact name is tested on the exam."},
          {q:"In the CSM-ITSM Bridge field mapping, which Case field maps to Incident 'Urgency'?",opts:["Category","Severity","Priority","Impact"],ans:2,exp:"Case Priority maps to Incident Urgency in the CSM-ITSM Bridge. This ensures the Incident is prioritized appropriately based on the customer case's priority level."}
        ],
        body:{
          en:`<p class="theory-p">The CSM-ITSM Bridge connects customer-facing case management with internal IT incident management — one of the <strong>most frequently tested configuration topics</strong>.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="20" y="25" width="160" height="70" rx="8" fill="#0f6e56" stroke="#3fb950" stroke-width="2"/>
  <text x="100" y="52" text-anchor="middle" fill="#7ee89a" font-size="13" font-weight="600">CSM Case</text>
  <text x="100" y="68" text-anchor="middle" fill="#e6edf3" font-size="11">State: Open</text>
  <text x="100" y="82" text-anchor="middle" fill="#8b949e" font-size="10">Customer-facing</text>
  <path d="M188 60 Q240 20 292 60" fill="none" stroke="#d29922" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr1)"/>
  <text x="240" y="24" text-anchor="middle" fill="#d29922" font-size="11" font-weight="600">Create Incident →</text>
  <text x="240" y="38" text-anchor="middle" fill="#8b949e" font-size="9">field mapping: Priority→Urgency</text>
  <rect x="296" y="25" width="244" height="70" rx="8" fill="#3b2e0e" stroke="#d29922" stroke-width="2"/>
  <text x="418" y="52" text-anchor="middle" fill="#f5d87a" font-size="13" font-weight="600">ITSM Incident</text>
  <text x="418" y="68" text-anchor="middle" fill="#e6edf3" font-size="11">State: In Progress</text>
  <text x="418" y="82" text-anchor="middle" fill="#8b949e" font-size="10">Internal IT resolution</text>
  <path d="M292 80 Q240 110 188 80" fill="none" stroke="#58a6ff" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr2)"/>
  <text x="240" y="113" text-anchor="middle" fill="#58a6ff" font-size="10">BR: "Update Case on Incident Closure"</text>
  <defs>
    <marker id="arr1" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#d29922"/></marker>
    <marker id="arr2" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="#58a6ff"/></marker>
  </defs>
</svg>
<div class="diagram-caption">Bidirectional bridge · Case→Incident (manual) · Incident closure→Case update (automatic BR)</div>
</div>
<ul class="theory-ul">
  <li><strong>Enable:</strong> CSM Properties → toggle "Create Incident from Case".</li>
  <li><strong>Field Mapping:</strong> Case Priority → Incident Urgency · Short Description → Short Description.</li>
  <li><strong>Linked Incident:</strong> Visible in Case "Related Records" tab.</li>
  <li><strong>Reverse flow:</strong> Business Rule <code>"Update Case on Incident Closure"</code> auto-updates Case state. <em>Know this exact BR name.</em></li>
</ul>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam question:</strong> "Which Business Rule handles the Case update when the linked Incident closes?" → <strong>"Update Case on Incident Closure"</strong></div></div>`,
          it:`<p class="theory-p">Il Bridge CSM-ITSM collega la gestione case verso i clienti con la gestione incident IT interna — uno degli argomenti di configurazione <strong>più testati</strong>.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="20" y="25" width="160" height="70" rx="8" fill="#0f6e56" stroke="#3fb950" stroke-width="2"/>
  <text x="100" y="52" text-anchor="middle" fill="#7ee89a" font-size="13" font-weight="600">CSM Case</text>
  <text x="100" y="68" text-anchor="middle" fill="#e6edf3" font-size="11">Stato: Aperto</text>
  <text x="100" y="82" text-anchor="middle" fill="#8b949e" font-size="10">Lato cliente</text>
  <path d="M188 60 Q240 20 292 60" fill="none" stroke="#d29922" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr1it)"/>
  <text x="240" y="24" text-anchor="middle" fill="#d29922" font-size="11" font-weight="600">Crea Incident →</text>
  <text x="240" y="38" text-anchor="middle" fill="#8b949e" font-size="9">mapping: Priority→Urgency</text>
  <rect x="296" y="25" width="244" height="70" rx="8" fill="#3b2e0e" stroke="#d29922" stroke-width="2"/>
  <text x="418" y="52" text-anchor="middle" fill="#f5d87a" font-size="13" font-weight="600">ITSM Incident</text>
  <text x="418" y="68" text-anchor="middle" fill="#e6edf3" font-size="11">Stato: In Progress</text>
  <text x="418" y="82" text-anchor="middle" fill="#8b949e" font-size="10">Risoluzione IT interna</text>
  <path d="M292 80 Q240 110 188 80" fill="none" stroke="#58a6ff" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr2it)"/>
  <text x="240" y="113" text-anchor="middle" fill="#58a6ff" font-size="10">BR: "Update Case on Incident Closure"</text>
  <defs>
    <marker id="arr1it" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#d29922"/></marker>
    <marker id="arr2it" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="#58a6ff"/></marker>
  </defs>
</svg>
<div class="diagram-caption">Bridge bidirezionale · Case→Incident (manuale) · Chiusura Incident→aggiornamento Case (BR automatica)</div>
</div>
<ul class="theory-ul">
  <li><strong>Abilitare:</strong> CSM Properties → toggle "Create Incident from Case".</li>
  <li><strong>Field Mapping:</strong> Case Priority → Incident Urgency · Short Description → Short Description.</li>
  <li><strong>Incident collegato:</strong> Visibile nella tab "Related Records" del Case.</li>
  <li><strong>Flusso inverso:</strong> Business Rule <code>"Update Case on Incident Closure"</code> aggiorna automaticamente lo stato del Case. <em>Conosci questo nome esatto.</em></li>
</ul>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Domanda esame:</strong> "Quale Business Rule aggiorna il Case quando l'Incident collegato viene chiuso?" → <strong>"Update Case on Incident Closure"</strong></div></div>`
        }
      },
      {
        title:{en:"Agent Workspace & Special Handling Notes",it:"Agent Workspace e Special Handling Notes"},
        tag:"teal",
        quiz:[
          {q:"Which tool configures the CSM Agent Workspace layouts and side panels?",opts:["Classic UI form editor","Workflow Editor","UI Builder","Studio IDE"],ans:2,exp:"UI Builder configures the Configurable Workspace — layouts, workspace views, side panels, and list customization. This is the Next Experience approach, separate from Service Portal."},
          {q:"Agents see customer-specific instructions automatically when opening a case for a VIP. What feature is this?",opts:["Case Digest","Playbook Notes","Special Handling Notes","Priority Banner"],ans:2,exp:"Special Handling Notes are configured per Account or Contact and appear automatically in the Agent Workspace. Example: 'VIP — respond within 30 min. Escalate to Sr. Manager after 2 hours.'"}
        ],
        body:{
          en:`<p class="theory-p">The Agent Workspace is the primary interface for CSM agents. The exam tests <strong>configuration knowledge</strong>, not just usage.</p>
<table class="info-table2"><thead><tr><th>Component</th><th>Purpose</th><th>Configured In</th></tr></thead><tbody>
<tr><td><strong>Configurable Workspace</strong></td><td>Main agent interface with panels, lists, forms</td><td>UI Builder</td></tr>
<tr><td><strong>Contextual Side Panels</strong></td><td>Auto-show Account, Contact, IBI info for open case</td><td>UI Builder</td></tr>
<tr><td><strong>Workspace Views</strong></td><td>Column sets, filters, sorting in case list</td><td>UI Builder</td></tr>
<tr><td><strong>Special Handling Notes</strong></td><td>Customer-specific auto-displayed instructions</td><td>Account/Contact record</td></tr>
<tr><td><strong>Knowledge Panel</strong></td><td>Surfaces KB articles and similar past cases</td><td>Workspace config</td></tr>
<tr><td><strong>Activity Stream</strong></td><td>Full chronological case history</td><td>Auto (all interactions)</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Two frameworks — don't confuse them:</strong><br>🔵 <strong>Agent Workspace</strong> (Next Experience) → configured via <strong>UI Builder</strong><br>🟢 <strong>Customer Service Portal</strong> (Service Portal / AngularJS) → configured via <strong>Service Portal admin</strong></div></div>
<div class="scenario-box" id="sc-ws-1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-ws-1')"><span>⭐</span><span class="sc-badge">Scenario</span><span class="sc-title">VIP customer instructions not visible to agents</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A manager complains that agents are not following special procedures for a key enterprise customer. The procedures exist in a document but agents rarely read it.</p>
    <div class="scenario-q">❓ What CSM feature solves this permanently?</div>
    <div class="scenario-a">✅ <strong>Special Handling Notes on the Account record.</strong> Configure the notes with the VIP procedures. They will automatically appear in the Agent Workspace every time an agent opens a case for that customer — impossible to miss, no document needed.</div>
  </div>
</div>`,
          it:`<p class="theory-p">L'Agent Workspace è l'interfaccia principale per gli agenti CSM. L'esame testa la <strong>conoscenza della configurazione</strong>, non solo l'utilizzo.</p>
<table class="info-table2"><thead><tr><th>Componente</th><th>Scopo</th><th>Configurato in</th></tr></thead><tbody>
<tr><td><strong>Configurable Workspace</strong></td><td>Interfaccia principale con pannelli, liste, form</td><td>UI Builder</td></tr>
<tr><td><strong>Pannelli laterali contestuali</strong></td><td>Mostra Account, Contact, IBI per il case aperto</td><td>UI Builder</td></tr>
<tr><td><strong>Workspace Views</strong></td><td>Set di colonne, filtri, ordinamento nella lista case</td><td>UI Builder</td></tr>
<tr><td><strong>Special Handling Notes</strong></td><td>Istruzioni auto-visualizzate specifiche per cliente</td><td>Record Account/Contact</td></tr>
<tr><td><strong>Knowledge Panel</strong></td><td>Articoli KB e case simili del passato</td><td>Config workspace</td></tr>
<tr><td><strong>Activity Stream</strong></td><td>Cronologia completa del case</td><td>Auto (tutte le interazioni)</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Due framework — non confonderli:</strong><br>🔵 <strong>Agent Workspace</strong> (Next Experience) → configurato via <strong>UI Builder</strong><br>🟢 <strong>Customer Service Portal</strong> (Service Portal / AngularJS) → configurato via <strong>admin Service Portal</strong></div></div>
<div class="scenario-box" id="sc-ws-1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-ws-1-it')"><span>⭐</span><span class="sc-badge">Scenario</span><span class="sc-title">Istruzioni per cliente VIP non visibili agli agenti</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un manager si lamenta che gli agenti non seguono le procedure speciali per un cliente enterprise chiave. Le procedure esistono in un documento, ma gli agenti raramente lo leggono.</p>
    <div class="scenario-q">❓ Quale funzionalità CSM risolve questo definitivamente?</div>
    <div class="scenario-a">✅ <strong>Special Handling Notes nel record Account.</strong> Configura le note con le procedure VIP. Appariranno automaticamente nell'Agent Workspace ogni volta che un agente apre un case di quel cliente — impossibile ignorarle, nessun documento necessario.</div>
  </div>
</div>`
        }
      },
      {
        title:{en:"Communication Channels & Virtual Agent",it:"Canali di Comunicazione e Virtual Agent"},
        tag:"teal",
        quiz:[
          {q:"A customer emails 'RE: CASE0001234 not yet resolved'. What should happen?",opts:["Create a new case","Update existing case CASE0001234","Discard as duplicate","Send auto-reply asking for portal use"],ans:1,exp:"Inbound Email Actions recognize case numbers in email subjects and UPDATE the existing case rather than creating a duplicate. This is configured via Inbound Email Action rules with case reference pattern matching."},
          {q:"Which CSM feature allows customers to interact with support from an external website without visiting the ServiceNow portal?",opts:["Virtual Agent","Customer Service Portal embedded mode","Engagement Messenger","Service Catalog External Access"],ans:2,exp:"Engagement Messenger is an embeddable JavaScript widget added to any external website. Customers open cases and chat with agents without navigating to the ServiceNow portal."}
        ],
        body:{
          en:`<p class="theory-p">CSM supports omnichannel interactions. Understanding each channel and its configuration is tested.</p>
<table class="info-table2"><thead><tr><th>Channel</th><th>Mechanism</th><th>Key Config Point</th></tr></thead><tbody>
<tr><td>📧 <strong>Email</strong></td><td>Inbound Email Actions</td><td>Match case# in subject to update existing case (RE: CASE001234)</td></tr>
<tr><td>🌐 <strong>Portal</strong></td><td>Customer Service Portal (CSP)</td><td>Self-service: open cases, KB, catalog. Built on Service Portal (AngularJS).</td></tr>
<tr><td>💬 <strong>Virtual Agent</strong></td><td>AI-driven conversation bot</td><td>Handles Tier 0 before routing to human agent. Requires "Virtual Agent Fundamentals" course.</td></tr>
<tr><td>📞 <strong>Phone/CTI</strong></td><td>CCaaS integration</td><td>Screen pop on call answer, auto case creation. Requires "CCaaS Integration" course.</td></tr>
<tr><td>🔗 <strong>Engagement Messenger</strong></td><td>Embedded widget on external site</td><td>JS snippet on company's website. Customer never leaves the site.</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Virtual Agent flow:</strong> Customer starts chat → Virtual Agent handles Tier 0 (FAQs, simple requests) → If unresolved, seamlessly hands off to human agent with full conversation context already in the case.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Inbound Email Action order:</strong> Multiple rules process by Order field. Lowest order fires first. A rule matching a case number in the subject updates the existing case instead of creating a new one.</div></div>
<div class="pdi-box" id="pdi-email">
  <div class="pdi-hdr" onclick="togglePDI('pdi-email')"><span>🖥️</span><span class="pdi-badge">PDI Exercise</span><span class="pdi-title">Configure Inbound Email Action for case updates</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Go to <strong>System Policy › Email › Inbound Actions</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Find the existing "Create CSM Case" action. Note its Order number.</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Create a new action: Name="Update Existing Case", Order=<strong>lower number</strong> than Create action, Condition: email subject contains "CASE" pattern.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">In the Script field, add logic to find the case by number and add the email as a comment to the case Activity Stream.</div></div>
    <div class="pdi-tip">💡 The Update action must have a LOWER order than the Create action so it fires first when a case number is in the subject.</div>
  </div>
</div>`,
          it:`<p class="theory-p">CSM supporta interazioni omnicanale. La comprensione di ogni canale e la sua configurazione è testata.</p>
<table class="info-table2"><thead><tr><th>Canale</th><th>Meccanismo</th><th>Punto di configurazione chiave</th></tr></thead><tbody>
<tr><td>📧 <strong>Email</strong></td><td>Inbound Email Actions</td><td>Riconosce numero case nel subject per aggiornare case esistente</td></tr>
<tr><td>🌐 <strong>Portale</strong></td><td>Customer Service Portal</td><td>Self-service: apertura case, KB, catalogo. Service Portal (AngularJS).</td></tr>
<tr><td>💬 <strong>Virtual Agent</strong></td><td>Bot conversazionale AI</td><td>Gestisce Tier 0 prima di passare all'agente umano.</td></tr>
<tr><td>📞 <strong>Telefono/CTI</strong></td><td>Integrazione CCaaS</td><td>Screen pop alla risposta, creazione case automatica.</td></tr>
<tr><td>🔗 <strong>Engagement Messenger</strong></td><td>Widget embedded su sito esterno</td><td>Snippet JS sul sito aziendale. Il cliente non lascia mai il sito.</td></tr>
</tbody></table>`
        }
      },
      {
        title:{en:"Case Types Configuration",it:"Configurazione dei Tipi di Case"},
        tag:"teal",
        quiz:[
          {q:"What is the primary benefit of defining multiple Case Types in CSM?",opts:["Reducing the number of agents needed","Applying different fields, routing rules, and SLAs per category of request","Creating separate databases per department","Allowing consumers to bypass entitlement checks"],ans:1,exp:"Case Types enable differentiated handling per category: each type can have its own visible fields, assignment/routing rules, SLA definitions, and templates. For example, a 'Complaint' Case Type may route to a specialist team and trigger a stricter SLA than an 'Inquiry'."},
          {q:"Where are Case Types configured in ServiceNow CSM?",opts:["System Properties > CSM","Customer Service > Configuration > Case Types","Assignment Rules > Case Type Filter","Service Definitions > Type Manager"],ans:1,exp:"Navigate to Customer Service > Configuration > Case Types. Each Case Type record defines the name, description, and can be linked to specific routing rules and SLA definitions."}
        ],
        body:{
          en:`<p class="theory-p"><strong>Case Types</strong> categorise cases so that each category can be handled differently — with different fields, routing, SLAs, and templates. This is a high-frequency Domain 2 exam topic.</p>
<table class="info-table2"><thead><tr><th>Case Type</th><th>Typical Use</th><th>Special Config</th></tr></thead><tbody>
<tr><td>Standard</td><td>General support requests</td><td>Default fields, standard SLA</td></tr>
<tr><td>Complaint</td><td>Customer dissatisfaction</td><td>Specialist queue, escalation rules</td></tr>
<tr><td>Inquiry</td><td>Information requests</td><td>Self-service deflection, lighter SLA</td></tr>
<tr><td>Returns / RMA</td><td>Product returns</td><td>Install Base field required, return flow</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Navigation:</strong> Customer Service › Configuration › Case Types. The <code>cs_case_type</code> field on the Case form drives routing and SLA selection.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Case Type + Assignment Rules:</strong> Assignment Rules can filter by Case Type, so "Complaint" cases go to the complaints team while "Inquiry" cases go to the general queue. This is the standard pattern.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam trap:</strong> Case Types are NOT the same as Case Categories. Categories are a free-form classification. Case Types are structured configuration objects that drive routing logic.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing Case Type with Case Category — they are different fields with different purposes</li>
  <li>Thinking Case Types require separate tables — all cases are in the same sn_customerservice_case table</li>
  <li>Forgetting to link SLA Definitions to Case Types — without this, Case Type has no SLA impact</li>
</ul></div>`,
          it:`<p class="theory-p">I <strong>Tipi di Case</strong> categorizzano i case affinché ogni categoria sia gestita diversamente: campi, routing, SLA e template possono variare per tipo.</p>
<table class="info-table2"><thead><tr><th>Tipo Case</th><th>Uso tipico</th><th>Config speciale</th></tr></thead><tbody>
<tr><td>Standard</td><td>Richieste di supporto generali</td><td>Campi default, SLA standard</td></tr>
<tr><td>Complaint</td><td>Insoddisfazione cliente</td><td>Coda specialistica, regole escalation</td></tr>
<tr><td>Inquiry</td><td>Richieste di informazioni</td><td>Deflection self-service, SLA leggero</td></tr>
<tr><td>Returns / RMA</td><td>Resi prodotto</td><td>Campo Install Base obbligatorio</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola esame:</strong> Case Type ≠ Case Category. Le Category sono classificazioni libere; i Case Type sono oggetti di configurazione strutturati che guidano routing e SLA.</div></div>`
        }
      },
      {
        title:{en:"Matching Rules Framework",it:"Framework delle Matching Rules"},
        tag:"teal",
        quiz:[
          {q:"How do Matching Rules differ from standard Assignment Rules in CSM AWA?",opts:["Matching Rules only apply to B2C cases","Matching Rules evaluate multiple case attributes simultaneously to find the best-skilled available agent","Matching Rules replace SLA definitions","Matching Rules only work with email channel"],ans:1,exp:"Standard Assignment Rules set a group/user based on simple conditions. AWA Matching Rules go further: they evaluate a combination of case attributes (type, product, priority, channel, customer tier) against agent skills and availability to route to the BEST available agent, not just any agent in a group."},
          {q:"In AWA Matching Rules, what happens when no rule matches a case?",opts:["The case is automatically closed","An error is thrown and the case is blocked","The case falls back to the default queue or group configured in AWA settings","The case is assigned to the system administrator"],ans:2,exp:"When no Matching Rule matches, AWA falls back to the default queue. This ensures cases are never unrouted. Always configure a catch-all default queue to handle edge cases."}
        ],
        body:{
          en:`<p class="theory-p">The <strong>Matching Rules Framework</strong> is how AWA (Advanced Work Assignment) finds the optimal agent for a case — going beyond group assignment to skill-based routing.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Matching Rule attributes evaluated:</strong> Case Type · Product · Priority · Channel · Customer Tier · Account · Skills required. Rules are evaluated in priority order — the first match wins.</div></div>
<table class="info-table2"><thead><tr><th>Mechanism</th><th>Assignment Rules</th><th>AWA Matching Rules</th></tr></thead><tbody>
<tr><td>Routing logic</td><td>Condition → Group/User</td><td>Multi-attribute → Best available agent</td></tr>
<tr><td>Skill awareness</td><td>❌ No</td><td>✅ Yes (agent skills matched)</td></tr>
<tr><td>Workload balancing</td><td>❌ No</td><td>✅ Yes (capacity considered)</td></tr>
<tr><td>Real-time routing</td><td>❌ Batch/trigger</td><td>✅ Real-time queue push</td></tr>
<tr><td>Fallback</td><td>No match = unassigned</td><td>No match = default queue</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Matching Rule anatomy:</strong> Name → Priority (order of evaluation) → Conditions (case attributes) → Work Item Filter → Queue. Multiple conditions use AND logic by default.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>AWA requires a licence.</strong> Advanced Work Assignment is a separate product. On the exam, if a scenario mentions skill-based routing or real-time agent selection, the answer is AWA Matching Rules, not standard Assignment Rules.</div></div>
<div class="pdi-box" id="pdi-matchrule">
  <div class="pdi-hdr" onclick="togglePDI('pdi-matchrule')"><span>🖥️</span><span class="pdi-badge">PDI Exercise</span><span class="pdi-title">Create a Matching Rule for high-priority complaints</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Go to <strong>Advanced Work Assignment › Matching Rules › New</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Set Name = "High-Priority Complaints", Priority = <strong>10</strong> (lower = higher priority).</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Add conditions: Case Type = <strong>Complaint</strong> AND Priority = <strong>1 - Critical</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Set Queue to <strong>Senior Complaints Queue</strong>. Save and activate.</div></div>
    <div class="pdi-tip">💡 Test by creating a P1 Complaint case and verifying it lands in the Senior Complaints Queue.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Il <strong>Framework delle Matching Rules</strong> è il meccanismo con cui AWA trova l'agente ottimale per un case, andando oltre l'assegnazione per gruppo verso il routing basato su competenze.</p>
<table class="info-table2"><thead><tr><th>Meccanismo</th><th>Assignment Rules</th><th>AWA Matching Rules</th></tr></thead><tbody>
<tr><td>Logica routing</td><td>Condizione → Gruppo/Utente</td><td>Multi-attributo → Miglior agente disponibile</td></tr>
<tr><td>Consapevolezza skill</td><td>❌ No</td><td>✅ Sì</td></tr>
<tr><td>Bilanciamento carico</td><td>❌ No</td><td>✅ Sì (capacità considerata)</td></tr>
<tr><td>Routing real-time</td><td>❌ Batch/trigger</td><td>✅ Real-time</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>AWA richiede licenza separata.</strong> Se uno scenario menziona routing basato su skill o selezione real-time dell'agente, la risposta è AWA Matching Rules, non le Assignment Rules standard.</div></div>`
        }
      },
      {
        title:{en:"SLA Configuration & Management",it:"Configurazione e Gestione degli SLA"},
        tag:"teal",
        quiz:[
          {q:"What is the difference between an SLA Definition and a Task SLA in ServiceNow?",opts:["They are the same thing","SLA Definition is the template/rule; Task SLA is the instance attached to a specific case","Task SLA is for tasks only, SLA Definition is for cases only","SLA Definition requires AWA; Task SLA does not"],ans:1,exp:"SLA Definition (sla_definition) is the reusable configuration: conditions, duration, schedule, warning %. Task SLA (task_sla) is the runtime instance created when an SLA Definition matches a case. One SLA Definition can create millions of Task SLA instances."},
          {q:"An SLA is configured with Warning = 75% and Breach = 100%. A P1 case has a 4-hour resolution SLA. At what elapsed time does the warning trigger?",opts:["30 minutes","1 hour","3 hours","4 hours"],ans:2,exp:"75% of 4 hours = 3 hours. At 3 hours elapsed the SLA enters 'Warning' state and triggers notifications. At 4 hours it breaches. Warning percentage is configurable per SLA Definition."},
          {q:"Which condition pauses an SLA timer in a standard CSM configuration?",opts:["Case is assigned to an agent","Case state changes to 'Awaiting Info' (on-hold state)","A note is added to the case","The case priority is changed"],ans:1,exp:"SLA timers pause when a case enters a configured 'pause' state — typically 'Awaiting Info' or 'On Hold'. This prevents the SLA from counting time the agent is waiting for the customer to respond. Start/Pause/Stop conditions are fully configurable per SLA Definition."}
        ],
        body:{
          en:`<p class="theory-p"><strong>SLAs (Service Level Agreements)</strong> are one of the most heavily tested topics in Domain 2. Understand the two-layer model: Definition (template) vs Task SLA (runtime instance).</p>
<table class="info-table2"><thead><tr><th>Concept</th><th>Table</th><th>Description</th></tr></thead><tbody>
<tr><td>SLA Definition</td><td>sla_definition</td><td>Template: conditions, duration, schedule, warning/breach %</td></tr>
<tr><td>Task SLA</td><td>task_sla</td><td>Runtime instance: one per matched case, tracks elapsed time</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>SLA Definition key fields:</strong> Name · Type (Response/Resolution) · Duration (e.g. 4 hours) · Schedule (business hours) · Conditions (filter when SLA applies) · Start/Pause/Stop conditions · Warning % · Breach %.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Typical Priority-Based SLA Matrix:</strong><br>
P1 Critical: Response 1h / Resolution 4h<br>
P2 High: Response 2h / Resolution 8h<br>
P3 Medium: Response 4h / Resolution 24h<br>
P4 Low: Response 8h / Resolution 5 days</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Start / Pause / Stop conditions:</strong> Start = case created or assigned. Pause = case moves to 'Awaiting Info'. Stop = case resolved or closed. Multiple SLAs can apply to ONE case (e.g., both a Response and a Resolution SLA).</div></div>
<div class="scenario-box" id="sc-sla1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-sla1')"><span>📋</span><span class="sc-badge">Scenario</span><span class="sc-title">SLA breaches occurring despite agents working on cases</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Agents report that SLA timers keep running while they wait for customers to respond to requests for more information, causing false SLA breaches.</p>
    <div class="scenario-q">❓ How do you fix this?</div>
    <div class="scenario-a">✅ <strong>Configure a Pause condition on the SLA Definition.</strong> Add a Pause condition: Case State = "Awaiting Info". When agents set the case to this state, the SLA timer pauses. When the customer responds and the state changes back to "In Progress", the timer resumes.</div>
  </div>
</div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing SLA Definition with Task SLA — the Definition is the rule, Task SLA is the tracked instance</li>
  <li>Forgetting that business schedules affect SLA duration — a "4 hour" SLA on a 9-5 schedule doesn't count overnight hours</li>
  <li>Thinking only one SLA can apply per case — multiple SLA Definitions can match and create multiple Task SLAs on the same case</li>
</ul></div>`,
          it:`<p class="theory-p">Gli <strong>SLA (Service Level Agreement)</strong> sono tra gli argomenti più testati nel Dominio 2. Comprendi il modello a due livelli: Definition (template) vs Task SLA (istanza runtime).</p>
<table class="info-table2"><thead><tr><th>Concetto</th><th>Tabella</th><th>Descrizione</th></tr></thead><tbody>
<tr><td>SLA Definition</td><td>sla_definition</td><td>Template: condizioni, durata, schedule, % warning/breach</td></tr>
<tr><td>Task SLA</td><td>task_sla</td><td>Istanza runtime: una per case corrispondente, traccia il tempo trascorso</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Matrice SLA tipica per priorità:</strong><br>
P1 Critico: Risposta 1h / Risoluzione 4h<br>
P2 Alto: Risposta 2h / Risoluzione 8h<br>
P3 Medio: Risposta 4h / Risoluzione 24h<br>
P4 Basso: Risposta 8h / Risoluzione 5 giorni</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Condizioni Start/Pause/Stop:</strong> Pause = il case va in "Awaiting Info". Stop = case risolto o chiuso. Più SLA possono applicarsi a UN singolo case.</div></div>`
        }
      },
      {
        title:{en:"AWA Advanced — Matching Criteria & Agent Affinity",it:"AWA Avanzato — Criteri di Matching e Agent Affinity"},
        tag:"teal",
        quiz:[
          {q:"An AWA queue routes cases to the agent who last helped the same customer within 7 days. Which Agent Affinity type is this?",opts:["Related Task Affinity","Historical Affinity","Account Team Responsibility","Availability Criteria"],ans:1,exp:"Historical Affinity routes to the agent who previously worked with this customer within a configurable time window (e.g., 48 hours, 7 days). This preserves continuity of service and is the most common affinity type tested on the exam."},
          {q:"Which AWA matching criteria type evaluates group-level workload and capacity before assigning a case?",opts:["Simple Match","Scripted","Aggregate","Availability"],ans:2,exp:"Aggregate criteria evaluate conditions at the group level — for example, if the total workload of Group X exceeds a threshold, route elsewhere. This is different from Availability (which checks individual agent status) and Simple Match (which checks field values)."},
          {q:"Two Assignment Rules exist: Rule A (Order=10) and Rule B (Order=50). A case matches both. Which rule applies?",opts:["Rule B — higher order takes precedence","Both rules apply simultaneously","Rule A — lower order number = higher priority, fires first","The rule created most recently applies"],ans:2,exp:"Assignment Rule priority is determined by Order number: the LOWEST order number wins. Rule A (Order=10) is evaluated before Rule B (Order=50). When Rule A matches, processing stops — Rule B is never evaluated. This is a frequently tested concept."}
        ],
        body:{
          en:`<p class="theory-p">AWA (Advanced Work Assignment) is one of the highest-tested areas in Domain 2. Beyond basic routing, the exam focuses on the five <strong>Matching Criteria types</strong>, the three <strong>Agent Affinity types</strong>, Overflow Assignment, and Assignment Rule priority order.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>AWA vs Assignment Rules:</strong> Assignment Rules route to a <em>group</em> based on conditions. AWA then picks the best <em>individual agent</em> within that group based on capacity, skills, availability, and affinity. They work together — not as alternatives.</div></div>
<p class="theory-p"><strong>The 5 AWA Matching Criteria Types</strong> — this list is directly tested on the exam. Know each type and when to use it.</p>
<table class="info-table2"><thead><tr><th>Criteria Type</th><th>What It Evaluates</th><th>Example Use Case</th></tr></thead><tbody>
<tr><td><strong>1. Simple Match</strong></td><td>Field-value conditions on the work item</td><td>Priority = Critical → route to Critical Support group</td></tr>
<tr><td><strong>2. Scripted</strong></td><td>Custom script logic for complex conditions</td><td>Route based on multi-field logic not expressible as simple conditions</td></tr>
<tr><td><strong>3. Aggregate</strong></td><td>Group-level workload and capacity thresholds</td><td>If Group X queue exceeds 50 open cases → route to overflow group</td></tr>
<tr><td><strong>4. Availability</strong></td><td>Whether the agent is currently online and available</td><td>Only assign to agents who are logged in and not at capacity</td></tr>
<tr><td><strong>5. Selection Criteria</strong></td><td>Further filters the qualified agent pool after all other criteria</td><td>Among all available agents, select those with "Spanish" skill tag</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam Trap — Aggregate vs Availability:</strong> Aggregate works at the <em>group</em> level (total queue size, group capacity). Availability works at the <em>individual agent</em> level (is this specific agent online right now?). They are commonly confused in exam questions.</div></div>
<p class="theory-p"><strong>Agent Affinity (3 Types)</strong> — Affinity prioritises agents who already have a relationship with the customer, improving satisfaction and resolution speed.</p>
<table class="info-table2"><thead><tr><th>Affinity Type</th><th>Logic</th><th>Configuration Parameter</th></tr></thead><tbody>
<tr><td><strong>Historical Affinity</strong></td><td>Routes to the agent who last worked with this customer within a configurable time window</td><td>Time window: e.g., 48 hours, 7 days, 30 days</td></tr>
<tr><td><strong>Related Task Affinity</strong></td><td>Routes to the agent already working on a related task (same Incident, same Account, same open Case)</td><td>Relationship type: same record, same account, etc.</td></tr>
<tr><td><strong>Account Team Responsibility</strong></td><td>Routes to the agent designated as the responsible agent for this specific Account</td><td>Set on the Account record — "Responsible Agent" field</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-awa-adv1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-awa-adv1')"><span>🔀</span><span class="sc-badge">Scenario</span><span class="sc-title">High-priority cases bypassing specialist agents</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A support centre notices that Critical-priority cases are sometimes routed to generalist agents, bypassing the specialist Critical Support group. Investigation shows a conflicting assignment rule with a lower order number matches first.</p>
    <div class="scenario-q">❓ What is the root cause and how do you fix it?</div>
    <div class="scenario-a">✅ <strong>Rule Order conflict.</strong> A generalist rule (e.g., Order=5) matches Critical cases before the specialist rule (Order=20). Fix: change the Critical Support rule to Order=1 or lower than any conflicting rule. Only the lowest-order matching rule fires — subsequent rules are ignored. After the fix, Critical cases always reach the specialist group first.</div>
  </div>
</div>
<p class="theory-p"><strong>Overflow Assignment</strong> — when a group reaches its maximum capacity, AWA can automatically redirect new work to a configured overflow group instead of creating an unbounded queue on the primary group.</p>
<div class="callout success"><span class="ci">✅</span><div><strong>How to configure Overflow:</strong> Set the overflow group on the Service Channel or the AWA Queue record. When the primary group's active work count reaches the defined threshold, new assignments automatically route to the overflow group. This prevents indefinite queue growth on an overloaded team.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Assignment Rule Order — the one-line rule:</strong> Lower Order number = higher priority = evaluated first. When the first matching rule fires, all lower-priority rules are skipped. Think of it as a sorted list: Rule Order=1 at the top, Rule Order=999 at the bottom.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing Aggregate (group workload) with Availability (individual agent status) — they operate at different levels</li>
  <li>Thinking all three Affinity types apply simultaneously without priority — Historical Affinity is evaluated first if configured</li>
  <li>Assuming higher Order number = higher priority — it is the OPPOSITE: lower number = higher priority</li>
  <li>Forgetting that Selection Criteria comes AFTER the other criteria filter the pool — it is the final refinement step</li>
</ul></div>`,
          it:`<p class="theory-p">AWA (Advanced Work Assignment) è una delle aree più testate nel Dominio 2. L'esame si concentra sui cinque <strong>tipi di Matching Criteria</strong>, i tre <strong>tipi di Agent Affinity</strong>, l'Overflow Assignment e la priorità delle Assignment Rule.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>AWA vs Assignment Rules:</strong> Le Assignment Rules instradano verso un <em>gruppo</em> in base a condizioni. AWA poi seleziona il miglior <em>agente individuale</em> in quel gruppo in base a capacità, skill, disponibilità e affinity. Lavorano insieme — non sono alternative.</div></div>
<p class="theory-p"><strong>I 5 Tipi di Matching Criteria AWA</strong> — questa lista è testata direttamente all'esame. Conosci ogni tipo e quando usarlo.</p>
<table class="info-table2"><thead><tr><th>Tipo di Criteria</th><th>Cosa valuta</th><th>Esempio d'uso</th></tr></thead><tbody>
<tr><td><strong>1. Simple Match</strong></td><td>Condizioni campo-valore sul work item</td><td>Priority = Critical → instrada al gruppo Critical Support</td></tr>
<tr><td><strong>2. Scripted</strong></td><td>Logica script custom per condizioni complesse</td><td>Routing basato su logica multi-campo non esprimibile come condizioni semplici</td></tr>
<tr><td><strong>3. Aggregate</strong></td><td>Soglie di workload e capacità a livello di gruppo</td><td>Se la coda del Gruppo X supera 50 case aperti → instrada al gruppo overflow</td></tr>
<tr><td><strong>4. Availability</strong></td><td>Se l'agente è attualmente online e disponibile</td><td>Assegna solo agli agenti connessi e non al massimo della capacità</td></tr>
<tr><td><strong>5. Selection Criteria</strong></td><td>Filtra ulteriormente il pool di agenti qualificati dopo tutti gli altri criteri</td><td>Tra tutti gli agenti disponibili, seleziona quelli con il tag skill "Spagnolo"</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola esame — Aggregate vs Availability:</strong> Aggregate lavora a livello di <em>gruppo</em> (dimensione coda totale, capacità gruppo). Availability lavora a livello di <em>singolo agente</em> (questo specifico agente è online ora?). Sono frequentemente confusi nelle domande d'esame.</div></div>
<p class="theory-p"><strong>Agent Affinity (3 Tipi)</strong> — L'Affinity prioritizza gli agenti che hanno già una relazione con il cliente, migliorando la soddisfazione e la velocità di risoluzione.</p>
<table class="info-table2"><thead><tr><th>Tipo Affinity</th><th>Logica</th><th>Parametro di configurazione</th></tr></thead><tbody>
<tr><td><strong>Historical Affinity</strong></td><td>Instrada all'agente che ha lavorato più di recente con questo cliente entro una finestra temporale configurabile</td><td>Finestra temporale: es. 48 ore, 7 giorni, 30 giorni</td></tr>
<tr><td><strong>Related Task Affinity</strong></td><td>Instrada all'agente che sta già lavorando su un task correlato (stesso Incident, stesso Account, stesso Case aperto)</td><td>Tipo di relazione: stesso record, stesso account, ecc.</td></tr>
<tr><td><strong>Account Team Responsibility</strong></td><td>Instrada all'agente designato come responsabile per questo specifico Account</td><td>Configurato sul record Account — campo "Responsible Agent"</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-awa-adv1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-awa-adv1-it')"><span>🔀</span><span class="sc-badge">Scenario</span><span class="sc-title">Case ad alta priorità che bypassano gli agenti specialisti</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un contact centre nota che i case Critical vengono talvolta instradati ad agenti generalisti, bypassando il gruppo Critical Support specializzato. L'indagine rivela una regola di assegnazione conflittuale con un numero d'ordine più basso che matcha per prima.</p>
    <div class="scenario-q">❓ Qual è la causa principale e come si risolve?</div>
    <div class="scenario-a">✅ <strong>Conflitto di Rule Order.</strong> Una regola generalista (es. Order=5) matcha i case Critical prima della regola specialista (Order=20). Soluzione: cambia l'ordine della regola Critical Support a Order=1 o inferiore a qualsiasi regola conflittuale. Solo la regola corrispondente con l'ordine più basso viene eseguita — le successive vengono ignorate.</div>
  </div>
</div>
<p class="theory-p"><strong>Overflow Assignment</strong> — quando un gruppo raggiunge la capacità massima, AWA può reindirizzare automaticamente il nuovo lavoro a un gruppo overflow configurato.</p>
<div class="callout success"><span class="ci">✅</span><div><strong>Come configurare l'Overflow:</strong> Imposta il gruppo overflow sul Service Channel o sul record AWA Queue. Quando il conteggio del lavoro attivo del gruppo primario raggiunge la soglia definita, le nuove assegnazioni vengono automaticamente instradate al gruppo overflow.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Ordine delle Assignment Rule — la regola in una riga:</strong> Numero d'ordine più basso = priorità più alta = valutato per primo. Quando la prima regola corrispondente viene eseguita, tutte le regole a priorità inferiore vengono saltate.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Confondere Aggregate (workload gruppo) con Availability (stato agente individuale) — operano a livelli diversi</li>
  <li>Pensare che tutti e tre i tipi di Affinity si applichino simultaneamente senza priorità</li>
  <li>Assumere che un numero d'ordine più alto = priorità più alta — è il CONTRARIO: numero più basso = priorità più alta</li>
  <li>Dimenticare che Selection Criteria arriva DOPO che gli altri criteri filtrano il pool — è il passo di raffinamento finale</li>
</ul></div>`
        }
      },
      {
        title:{en:"Proactive Customer Service Operations (PCSO)",it:"Operazioni Proattive di Customer Service (PCSO)"},
        tag:"teal",
        quiz:[
          {q:"Which ServiceNow product does PCSO integrate with to detect infrastructure events before customers report them?",opts:["IT Service Management (ITSM)","IT Operations Management (ITOM)","Security Operations (SecOps)","Governance Risk and Compliance (GRC)"],ans:1,exp:"PCSO integrates CSM with IT Operations Management (ITOM) — specifically ITOM Health and Event Management. ITOM detects infrastructure anomalies (alerts, incidents), and PCSO translates these into customer-facing Outage Records and Proactive Cases before customers call in."},
          {q:"In the PCSO flow, what record type is created in CSM to represent a service disruption affecting multiple customers?",opts:["Major Case","Problem Record","Outage Record (sn_customerservice_outage)","Service Request"],ans:2,exp:"An Outage Record (table: sn_customerservice_outage) represents the service disruption in CSM. It links the ITOM Alert/Incident to affected Accounts and drives the creation of Proactive Cases. A Major Case is reactive (starts from an incoming case), not proactive."},
          {q:"How does a Proactive Case differ from a standard customer case in CSM?",opts:["It has a higher SLA priority","It is created by the system before the customer contacts support, triggered by an ITOM event","It skips the Assignment Rules engine","It is only visible to supervisors, not agents"],ans:1,exp:"A Proactive Case is created automatically by the PCSO process — before the customer contacts support. It is triggered by an ITOM event propagating through to an Outage Record. This means agents can begin working on the issue and notify customers proactively, reducing inbound call volume."}
        ],
        body:{
          en:`<p class="theory-p"><strong>Proactive Customer Service Operations (PCSO)</strong> is the integration layer between CSM and IT Operations Management (ITOM). The goal is to detect infrastructure problems <em>before</em> customers call about them — shifting support from reactive to proactive.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Required plugins for PCSO:</strong> <code>com.sn_cs_sm</code> (CSM core) + ITOM Health / Event Management plugin. Both must be active. PCSO does not work with ITSM alone — it specifically needs ITOM's event pipeline.</div></div>
<p class="theory-p"><strong>The PCSO Flow</strong> — memorise this end-to-end sequence. The exam tests individual steps and their order.</p>
<table class="info-table2"><thead><tr><th>Step</th><th>System</th><th>What Happens</th></tr></thead><tbody>
<tr><td><strong>1</strong></td><td>ITOM Event Management</td><td>Infrastructure anomaly detected (e.g., database down, API timeout, network latency spike)</td></tr>
<tr><td><strong>2</strong></td><td>ITOM</td><td>Event → Alert created → propagates to an ITOM Incident</td></tr>
<tr><td><strong>3</strong></td><td>PCSO Engine</td><td>Impact analysis: which Accounts and Install Base Items are affected by this Alert/Incident?</td></tr>
<tr><td><strong>4</strong></td><td>CSM</td><td><strong>Outage Record</strong> created (table: <code>sn_customerservice_outage</code>) to represent the service disruption</td></tr>
<tr><td><strong>5</strong></td><td>CSM</td><td><strong>Proactive Cases</strong> automatically generated — one per impacted customer/account</td></tr>
<tr><td><strong>6</strong></td><td>CSM / Notify</td><td>Targeted Communications sent to impacted customers <em>before</em> they contact support</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-pcso1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-pcso1')"><span>📡</span><span class="sc-badge">Scenario</span><span class="sc-title">Database outage affecting 200 enterprise customers</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>At 2:00 AM, ITOM Event Management detects a primary database failure. 200 enterprise customers have Install Base Items that depend on this database. Without PCSO, support would face 200+ inbound calls when customers arrive at work.</p>
    <div class="scenario-q">❓ How does PCSO change this scenario?</div>
    <div class="scenario-a">✅ <strong>PCSO automatically:</strong> (1) ITOM Alert triggers an Outage Record in CSM. (2) PCSO identifies 200 impacted Accounts via Install Base. (3) 200 Proactive Cases are created — agents begin working at 2:05 AM. (4) Targeted Communications email all 200 contacts by 2:10 AM. When customers arrive at 9 AM, they already have a case open and an update — inbound call volume drops dramatically.</div>
  </div>
</div>
<p class="theory-p"><strong>Outage Record vs Major Case</strong> — a critical distinction for the exam:</p>
<table class="info-table2"><thead><tr><th>Concept</th><th>Outage Record</th><th>Major Case</th></tr></thead><tbody>
<tr><td><strong>Origin</strong></td><td>ITOM Alert/Incident (infrastructure)</td><td>Customer-reported high-impact case</td></tr>
<tr><td><strong>Direction</strong></td><td>Proactive — system detects before customer reports</td><td>Reactive — customer contacts support first</td></tr>
<tr><td><strong>Table</strong></td><td><code>sn_customerservice_outage</code></td><td><code>sn_si_task</code> (Major Case table)</td></tr>
<tr><td><strong>States</strong></td><td>Open → In Progress → Resolved</td><td>Open → In Progress → Resolved → Closed</td></tr>
<tr><td><strong>Creates</strong></td><td>Proactive Cases for impacted customers</td><td>Child Cases (related tasks) for investigation</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Proactive Case characteristics:</strong> Created by the system (not the customer). Distinguished in reporting so it does not count as a "customer contact" for metrics. Agents manage the outage centrally via the Outage Record; individual communications go to each impacted customer.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam Trap:</strong> "An ITOM alert causes 50 customer notifications — what was created in CSM?" → <strong>Outage Record</strong> first, then Proactive Cases. Not Major Cases, not standard Cases. The Outage Record is the anchor that ties ITOM to CSM.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing Outage Record with Major Case — Major Case is reactive (customer-initiated), Outage Record is proactive (ITOM-initiated)</li>
  <li>Thinking PCSO works with ITSM alone — it requires ITOM Health/Event Management plugin specifically</li>
  <li>Forgetting that Proactive Cases are excluded from "customer contact" KPI metrics — they are system-generated</li>
  <li>Missing the step where PCSO evaluates Install Base Items to determine which accounts are impacted</li>
</ul></div>`,
          it:`<p class="theory-p"><strong>Proactive Customer Service Operations (PCSO)</strong> è il livello di integrazione tra CSM e IT Operations Management (ITOM). L'obiettivo è rilevare problemi infrastrutturali <em>prima</em> che i clienti li segnalino — trasformando il supporto da reattivo a proattivo.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Plugin richiesti per PCSO:</strong> <code>com.sn_cs_sm</code> (CSM core) + plugin ITOM Health / Event Management. Entrambi devono essere attivi. PCSO non funziona con ITSM da solo — richiede specificamente la pipeline degli eventi di ITOM.</div></div>
<p class="theory-p"><strong>Il Flusso PCSO</strong> — memorizza questa sequenza end-to-end. L'esame testa i singoli step e il loro ordine.</p>
<table class="info-table2"><thead><tr><th>Step</th><th>Sistema</th><th>Cosa succede</th></tr></thead><tbody>
<tr><td><strong>1</strong></td><td>ITOM Event Management</td><td>Anomalia infrastrutturale rilevata (es. database down, timeout API, spike latenza rete)</td></tr>
<tr><td><strong>2</strong></td><td>ITOM</td><td>Evento → Alert creato → si propaga a un Incident ITOM</td></tr>
<tr><td><strong>3</strong></td><td>PCSO Engine</td><td>Analisi impatto: quali Account e Install Base Item sono impattati da questo Alert/Incident?</td></tr>
<tr><td><strong>4</strong></td><td>CSM</td><td><strong>Outage Record</strong> creato (tabella: <code>sn_customerservice_outage</code>) per rappresentare l'interruzione del servizio</td></tr>
<tr><td><strong>5</strong></td><td>CSM</td><td><strong>Proactive Case</strong> generati automaticamente — uno per cliente/account impattato</td></tr>
<tr><td><strong>6</strong></td><td>CSM / Notify</td><td>Targeted Communications inviate ai clienti impattati <em>prima</em> che contattino il supporto</td></tr>
</tbody></table>
<div class="scenario-box" id="sc-pcso1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-pcso1-it')"><span>📡</span><span class="sc-badge">Scenario</span><span class="sc-title">Interruzione database che impatta 200 clienti enterprise</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Alle 2:00 di notte, ITOM Event Management rileva un guasto al database primario. 200 clienti enterprise hanno Install Base Item che dipendono da questo database. Senza PCSO, il supporto riceverebbe 200+ chiamate inbound quando i clienti arrivano al lavoro.</p>
    <div class="scenario-q">❓ Come cambia questo scenario con PCSO?</div>
    <div class="scenario-a">✅ <strong>PCSO automaticamente:</strong> (1) L'Alert ITOM scatena un Outage Record in CSM. (2) PCSO identifica 200 Account impattati tramite Install Base. (3) Vengono creati 200 Proactive Case — gli agenti iniziano a lavorare alle 2:05. (4) Le Targeted Communications inviano email a tutti i 200 contatti entro le 2:10. Quando i clienti arrivano alle 9:00, hanno già un case aperto e un aggiornamento — il volume di chiamate inbound crolla drasticamente.</div>
  </div>
</div>
<p class="theory-p"><strong>Outage Record vs Major Case</strong> — distinzione critica per l'esame:</p>
<table class="info-table2"><thead><tr><th>Concetto</th><th>Outage Record</th><th>Major Case</th></tr></thead><tbody>
<tr><td><strong>Origine</strong></td><td>Alert/Incident ITOM (infrastruttura)</td><td>Case ad alto impatto segnalato dal cliente</td></tr>
<tr><td><strong>Direzione</strong></td><td>Proattivo — il sistema rileva prima che il cliente segnali</td><td>Reattivo — il cliente contatta il supporto per primo</td></tr>
<tr><td><strong>Tabella</strong></td><td><code>sn_customerservice_outage</code></td><td><code>sn_si_task</code> (tabella Major Case)</td></tr>
<tr><td><strong>Stati</strong></td><td>Open → In Progress → Resolved</td><td>Open → In Progress → Resolved → Closed</td></tr>
<tr><td><strong>Crea</strong></td><td>Proactive Case per i clienti impattati</td><td>Child Case (task correlati) per l'indagine</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Caratteristiche dei Proactive Case:</strong> Creati dal sistema (non dal cliente). Distinti nel reporting — non contano come "contatto cliente" per i KPI. Gli agenti gestiscono l'outage centralmente tramite l'Outage Record; le comunicazioni individuali raggiungono ciascun cliente impattato.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola esame:</strong> "Un alert ITOM causa 50 notifiche clienti — cosa è stato creato in CSM?" → <strong>Outage Record</strong> prima, poi Proactive Case. Non Major Case, non Case standard. L'Outage Record è l'ancora che collega ITOM a CSM.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Confondere l'Outage Record con il Major Case — il Major Case è reattivo (avviato dal cliente), l'Outage Record è proattivo (avviato da ITOM)</li>
  <li>Pensare che PCSO funzioni solo con ITSM — richiede specificamente il plugin ITOM Health/Event Management</li>
  <li>Dimenticare che i Proactive Case sono esclusi dai KPI "customer contact" — sono generati dal sistema</li>
  <li>Saltare lo step in cui PCSO valuta gli Install Base Item per determinare quali account sono impattati</li>
</ul></div>`
        }
      }
    ]
};
