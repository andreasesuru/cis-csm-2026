// Domain 1 — CSM Foundational Data Model (25%)
const THEORY_D1 = {
    id:0, pct:"25%", color:"#58a6ff",
    title:{en:"Domain 1: CSM Foundational Data Model",it:"Dominio 1: Data Model Fondamentale CSM"},
    subtitle:{en:"B2B/B2C · Account · Contact · Consumer · Install Base · Entitlements · Contracts",it:"B2B/B2C · Account · Contact · Consumer · Install Base · Entitlement · Contratti"},
    topics:[
      {
        title:{en:"B2B vs B2C Business Models",it:"Modelli B2B vs B2C"},
        tag:"blue",
        quiz:[
          {q:"A utility company supports millions of individual residential customers with no company affiliation. Which CSM model?",opts:["B2B with Account and Contact","B2C with Consumer as primary entity","B2B with Consumer linked to Accounts","B2C with Contact as standalone"],ans:1,exp:"B2C model with Consumer entity. Individual residential customers have no company (Account) affiliation. Consumer is standalone — perfect for B2C. B2B Account/Contact is for company customers."},
          {q:"Which system property controls B2B vs B2C mode in ServiceNow CSM?",opts:["csm.model.selector","glide.cs.enable.b2b","cs.b2c.mode","customer_service.model"],ans:1,exp:"The property 'glide.cs.enable.b2b' under Customer Service > Administration > Properties controls B2B/B2C mode. When true, B2B (Account/Contact) is active."},
          {q:"In B2B mode, which field is REQUIRED on a Contact record?",opts:["Consumer","Install Base Item","Account","Contract"],ans:2,exp:"Every Contact must be linked to an Account in B2B mode. The Account field is required — it represents the company the person works for."}
        ],
        body:{
          en:`<p class="theory-p">ServiceNow CSM supports two fundamentally different business models. This is the <strong>single most tested concept on Domain 1</strong>.</p>
<div class="callout info"><span class="ci">ℹ️</span><div><strong>B2B (Business-to-Business):</strong> Customers are companies. Core entities: <strong>Account</strong> (the company) + <strong>Contact</strong> (person at that company). Every Case links to an Account. Typical for enterprise software, manufacturing, financial services.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>B2C (Business-to-Consumer):</strong> Customers are individual end-users. Core entity: <strong>Consumer</strong> — standalone, no parent Account. Typical for telecoms, utilities, retail, insurance.</div></div>
<div class="diagram-wrap2">
<svg viewBox="0 0 580 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:580px">
  <rect x="10" y="10" width="260" height="170" rx="10" fill="#1f3b5c" stroke="#58a6ff" stroke-width="1.5"/>
  <text x="140" y="34" text-anchor="middle" fill="#58a6ff" font-family="monospace" font-size="12" font-weight="700">B2B MODEL</text>
  <rect x="30" y="50" width="90" height="36" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/><text x="75" y="72" text-anchor="middle" fill="#e6edf3" font-size="12">🏢 Account</text>
  <rect x="145" y="50" width="105" height="36" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/><text x="197" y="72" text-anchor="middle" fill="#e6edf3" font-size="12">👤 Contact</text>
  <line x1="120" y1="68" x2="145" y2="68" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="133" y="62" text-anchor="middle" fill="#8b949e" font-size="9">has many</text>
  <rect x="85" y="118" width="100" height="36" rx="6" fill="#0f6e56" stroke="#3fb950" stroke-width="1"/><text x="135" y="140" text-anchor="middle" fill="#e6edf3" font-size="12">📋 Case</text>
  <line x1="75" y1="86" x2="110" y2="118" stroke="#8b949e" stroke-width="1"/>
  <line x1="197" y1="86" x2="160" y2="118" stroke="#8b949e" stroke-width="1"/>
  <text x="140" y="172" text-anchor="middle" fill="#8b949e" font-size="10">Case → Account + Contact</text>
  <rect x="320" y="10" width="250" height="170" rx="10" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="445" y="34" text-anchor="middle" fill="#3fb950" font-family="monospace" font-size="12" font-weight="700">B2C MODEL</text>
  <rect x="360" y="50" width="170" height="36" rx="6" fill="#21262d" stroke="#3fb950" stroke-width="1"/><text x="445" y="72" text-anchor="middle" fill="#e6edf3" font-size="12">👤 Consumer (standalone)</text>
  <text x="445" y="100" text-anchor="middle" fill="#8b949e" font-size="10">No parent Account</text>
  <rect x="385" y="118" width="120" height="36" rx="6" fill="#0f6e56" stroke="#3fb950" stroke-width="1"/><text x="445" y="140" text-anchor="middle" fill="#e6edf3" font-size="12">📋 Case</text>
  <line x1="445" y1="86" x2="445" y2="118" stroke="#3fb950" stroke-width="1.5"/>
  <text x="445" y="172" text-anchor="middle" fill="#8b949e" font-size="10">Case → Consumer directly</text>
</svg>
<div class="diagram-caption">B2B: Account + Contact hierarchy · B2C: standalone Consumer entity</div>
</div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam Trap:</strong> <code>glide.cs.enable.b2b</code> toggles the model. Contact MUST have a parent Account. Consumer has NO Account. They are never interchangeable.</div></div>
<div class="scenario-box" id="sc-b2b-1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-b2b-1')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">Telecom with 3M individual subscribers</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A major telecom company wants to implement CSM. Customers are individual people paying for mobile plans — no corporate accounts involved.</p>
    <div class="scenario-q">❓ Which data model, and why?</div>
    <div class="scenario-a">✅ <strong>B2C with Consumer entity.</strong> Each subscriber = one Consumer record (standalone, no Account). Cases link directly to Consumer. Set <code>glide.cs.enable.b2b = false</code>. Using B2B here would force creating dummy Accounts for every individual, which makes no business sense.</div>
  </div>
</div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Using Contact for B2C customers — Contact REQUIRES an Account parent, so it's always B2B</li>
  <li>Thinking Consumer and Contact are interchangeable — they are completely different tables</li>
  <li>Forgetting to set the system property before configuring entities</li>
</ul></div>`,
          it:`<p class="theory-p">ServiceNow CSM supporta due modelli di business fondamentalmente diversi. Questo è il <strong>concetto più testato nel Dominio 1</strong>.</p>
<div class="callout info"><span class="ci">ℹ️</span><div><strong>B2B (Business-to-Business):</strong> I clienti sono aziende. Entità principali: <strong>Account</strong> (azienda) + <strong>Contact</strong> (persona nell'azienda). Ogni Case si collega a un Account. Tipico per software enterprise, manifattura, servizi finanziari.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>B2C (Business-to-Consumer):</strong> I clienti sono utenti finali privati. Entità principale: <strong>Consumer</strong> — standalone, senza Account padre. Tipico per telecomunicazioni, utilities, retail, assicurazioni.</div></div>
<div class="diagram-wrap2">
<svg viewBox="0 0 580 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:580px">
  <rect x="10" y="10" width="260" height="170" rx="10" fill="#1f3b5c" stroke="#58a6ff" stroke-width="1.5"/>
  <text x="140" y="34" text-anchor="middle" fill="#58a6ff" font-family="monospace" font-size="12" font-weight="700">MODELLO B2B</text>
  <rect x="30" y="50" width="90" height="36" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/><text x="75" y="72" text-anchor="middle" fill="#e6edf3" font-size="12">🏢 Account</text>
  <rect x="145" y="50" width="105" height="36" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/><text x="197" y="72" text-anchor="middle" fill="#e6edf3" font-size="12">👤 Contact</text>
  <line x1="120" y1="68" x2="145" y2="68" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="133" y="62" text-anchor="middle" fill="#8b949e" font-size="9">ha molti</text>
  <rect x="85" y="118" width="100" height="36" rx="6" fill="#0f6e56" stroke="#3fb950" stroke-width="1"/><text x="135" y="140" text-anchor="middle" fill="#e6edf3" font-size="12">📋 Case</text>
  <line x1="75" y1="86" x2="110" y2="118" stroke="#8b949e" stroke-width="1"/>
  <line x1="197" y1="86" x2="160" y2="118" stroke="#8b949e" stroke-width="1"/>
  <text x="140" y="172" text-anchor="middle" fill="#8b949e" font-size="10">Case → Account + Contact</text>
  <rect x="320" y="10" width="250" height="170" rx="10" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="445" y="34" text-anchor="middle" fill="#3fb950" font-family="monospace" font-size="12" font-weight="700">MODELLO B2C</text>
  <rect x="360" y="50" width="170" height="36" rx="6" fill="#21262d" stroke="#3fb950" stroke-width="1"/><text x="445" y="72" text-anchor="middle" fill="#e6edf3" font-size="12">👤 Consumer (standalone)</text>
  <text x="445" y="100" text-anchor="middle" fill="#8b949e" font-size="10">Nessun Account padre</text>
  <rect x="385" y="118" width="120" height="36" rx="6" fill="#0f6e56" stroke="#3fb950" stroke-width="1"/><text x="445" y="140" text-anchor="middle" fill="#e6edf3" font-size="12">📋 Case</text>
  <line x1="445" y1="86" x2="445" y2="118" stroke="#3fb950" stroke-width="1.5"/>
  <text x="445" y="172" text-anchor="middle" fill="#8b949e" font-size="10">Case → Consumer direttamente</text>
</svg>
<div class="diagram-caption">B2B: gerarchia Account + Contact · B2C: entità Consumer standalone</div>
</div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola esame:</strong> <code>glide.cs.enable.b2b</code> controlla il modello. Contact DEVE avere un Account padre. Consumer NON ha Account. Non sono mai intercambiabili.</div></div>
<div class="scenario-box" id="sc-b2b-1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-b2b-1-it')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">Telco con 3 milioni di abbonati individuali</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un'importante azienda telecom vuole implementare CSM. I clienti sono persone fisiche con piani mobili — nessun account aziendale coinvolto.</p>
    <div class="scenario-q">❓ Quale data model e perché?</div>
    <div class="scenario-a">✅ <strong>B2C con entità Consumer.</strong> Ogni abbonato = un record Consumer standalone (senza Account). I Case si collegano direttamente al Consumer. Imposta <code>glide.cs.enable.b2b = false</code>. Usare B2B richiederebbe Account fittizi per ogni individuo — privo di senso commerciale.</div>
  </div>
</div>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Usare Contact per clienti B2C — Contact richiede un Account padre, è sempre B2B</li>
  <li>Pensare che Consumer e Contact siano intercambiabili — sono tabelle completamente diverse</li>
  <li>Dimenticare di impostare la proprietà di sistema prima di configurare le entità</li>
</ul></div>`
        }
      },
      {
        title:{en:"Account, Contact & Hierarchy",it:"Account, Contact e Gerarchia"},
        tag:"blue",
        quiz:[
          {q:"Which table stores Account records in the CSM B2B model?",opts:["sys_user","customer_contact","customer_account","csm_account"],ans:2,exp:"Account records are in the 'customer_account' table. Contact records are in 'customer_contact'. sys_user is for platform users, not CSM customer entities."},
          {q:"An enterprise has subsidiaries in 5 countries. How should this be modeled in CSM?",opts:["5 separate ServiceNow instances","5 child Accounts under a parent Account","One Account with 5 contacts per country","5 Consumer records"],ans:1,exp:"Account Hierarchy: a parent Account (e.g., GlobalCorp) with 5 child Accounts (one per country). Cases and entitlements associate at any hierarchy level. Available OOTB — no custom configuration needed."}
        ],
        body:{
          en:`<p class="theory-p">The Account/Contact structure is the backbone of B2B. Key tables and relationships tested on the exam:</p>
<table class="info-table2"><thead><tr><th>Entity</th><th>Table</th><th>Parent Required</th><th>Primary Use</th></tr></thead><tbody>
<tr><td><strong>Account</strong></td><td>customer_account</td><td>None (or parent Account)</td><td>Customer company, contracts, hierarchy root</td></tr>
<tr><td><strong>Contact</strong></td><td>customer_contact</td><td>Account (mandatory)</td><td>Individual person at the company</td></tr>
<tr><td><strong>Consumer</strong></td><td>customer_service_consumer</td><td>None (standalone)</td><td>End-user in B2C model</td></tr>
</tbody></table>
<p class="theory-p"><strong>Account Hierarchy</strong> supports unlimited levels — parent Account can have child Accounts. Cases and entitlements can be associated at any level.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 500 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px">
  <rect x="180" y="8" width="140" height="34" rx="6" fill="#1f3b5c" stroke="#58a6ff" stroke-width="1.5"/>
  <text x="250" y="29" text-anchor="middle" fill="#e6edf3" font-size="12">🏢 GlobalCorp (parent)</text>
  <line x1="210" y1="42" x2="120" y2="72" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="290" y1="42" x2="380" y2="72" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4,2"/>
  <rect x="50" y="72" width="140" height="34" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
  <text x="120" y="93" text-anchor="middle" fill="#e6edf3" font-size="11">GlobalCorp Europe</text>
  <rect x="310" y="72" width="140" height="34" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
  <text x="380" y="93" text-anchor="middle" fill="#e6edf3" font-size="11">GlobalCorp Asia</text>
  <line x1="120" y1="106" x2="120" y2="124" stroke="#3fb950" stroke-width="1"/>
  <rect x="55" y="124" width="130" height="24" rx="5" fill="#1a3a22" stroke="#3fb950" stroke-width="1"/>
  <text x="120" y="140" text-anchor="middle" fill="#7ee89a" font-size="10">👤 Contacts + Cases</text>
  <line x1="380" y1="106" x2="380" y2="124" stroke="#3fb950" stroke-width="1"/>
  <rect x="315" y="124" width="130" height="24" rx="5" fill="#1a3a22" stroke="#3fb950" stroke-width="1"/>
  <text x="380" y="140" text-anchor="middle" fill="#7ee89a" font-size="10">👤 Contacts + Cases</text>
</svg>
<div class="diagram-caption">Account hierarchy — unlimited levels · Cases attach at any level</div>
</div>
<div class="callout info"><span class="ci">💡</span><div><strong>Contact Roles:</strong> Contacts can have roles within an Account (Technical Lead, Billing Contact, Primary Contact). Roles control portal access and notification routing.</div></div>
<div class="pdi-box" id="pdi-acct">
  <div class="pdi-hdr" onclick="togglePDI('pdi-acct')"><span>🖥️</span><span class="pdi-badge">PDI Exercise</span><span class="pdi-title">Create B2B Account hierarchy</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Go to <strong>Customer Service › Accounts › New</strong>. Create parent: Name=<strong>"Acme Corp Global"</strong>, Industry=<strong>"Technology"</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Create child Account: Name=<strong>"Acme Corp Italy"</strong>, set <strong>Parent field</strong> to "Acme Corp Global".</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Create a Contact: Name=<strong>"Mario Rossi"</strong>, Account=<strong>"Acme Corp Italy"</strong>, Title=<strong>"Technical Lead"</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Open a new Case and verify the Account lookup shows the hierarchy.</div></div>
    <div class="pdi-tip">💡 Verify: the parent Account should show child accounts in its Related Lists section under "Child Accounts".</div>
  </div>
</div>`,
          it:`<p class="theory-p">La struttura Account/Contact è la spina dorsale del B2B. Tabelle e relazioni chiave testate all'esame:</p>
<table class="info-table2"><thead><tr><th>Entità</th><th>Tabella</th><th>Padre richiesto</th><th>Uso principale</th></tr></thead><tbody>
<tr><td><strong>Account</strong></td><td>customer_account</td><td>Nessuno (o Account padre)</td><td>Azienda cliente, contratti, radice gerarchia</td></tr>
<tr><td><strong>Contact</strong></td><td>customer_contact</td><td>Account (obbligatorio)</td><td>Persona fisica nell'azienda</td></tr>
<tr><td><strong>Consumer</strong></td><td>customer_service_consumer</td><td>Nessuno (standalone)</td><td>Utente finale nel modello B2C</td></tr>
</tbody></table>
<p class="theory-p"><strong>Gerarchia Account</strong> supporta livelli illimitati — un Account padre può avere Account figli. Case ed entitlement si associano a qualsiasi livello della gerarchia.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 500 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px">
  <rect x="180" y="8" width="140" height="34" rx="6" fill="#1f3b5c" stroke="#58a6ff" stroke-width="1.5"/>
  <text x="250" y="29" text-anchor="middle" fill="#e6edf3" font-size="12">🏢 GlobalCorp (padre)</text>
  <line x1="210" y1="42" x2="120" y2="72" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="290" y1="42" x2="380" y2="72" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4,2"/>
  <rect x="50" y="72" width="140" height="34" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
  <text x="120" y="93" text-anchor="middle" fill="#e6edf3" font-size="11">GlobalCorp Europa</text>
  <rect x="310" y="72" width="140" height="34" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
  <text x="380" y="93" text-anchor="middle" fill="#e6edf3" font-size="11">GlobalCorp Asia</text>
  <line x1="120" y1="106" x2="120" y2="124" stroke="#3fb950" stroke-width="1"/>
  <rect x="55" y="124" width="130" height="24" rx="5" fill="#1a3a22" stroke="#3fb950" stroke-width="1"/>
  <text x="120" y="140" text-anchor="middle" fill="#7ee89a" font-size="10">👤 Contact + Case</text>
  <line x1="380" y1="106" x2="380" y2="124" stroke="#3fb950" stroke-width="1"/>
  <rect x="315" y="124" width="130" height="24" rx="5" fill="#1a3a22" stroke="#3fb950" stroke-width="1"/>
  <text x="380" y="140" text-anchor="middle" fill="#7ee89a" font-size="10">👤 Contact + Case</text>
</svg>
<div class="diagram-caption">Gerarchia Account — livelli illimitati · I Case si associano a qualsiasi livello</div>
</div>
<div class="callout info"><span class="ci">💡</span><div><strong>Ruoli del Contact:</strong> I Contact possono avere ruoli nell'Account (Technical Lead, Billing Contact, Primary Contact). I ruoli controllano l'accesso al portale e il routing delle notifiche.</div></div>
<div class="pdi-box" id="pdi-acct-it">
  <div class="pdi-hdr" onclick="togglePDI('pdi-acct-it')"><span>🖥️</span><span class="pdi-badge">Esercizio PDI</span><span class="pdi-title">Crea gerarchia Account B2B</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Vai su <strong>Customer Service › Accounts › New</strong>. Crea Account padre: Nome=<strong>"Acme Corp Global"</strong>, Settore=<strong>"Technology"</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Crea Account figlio: Nome=<strong>"Acme Corp Italia"</strong>, imposta il campo <strong>Parent</strong> su "Acme Corp Global".</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Crea un Contact: Nome=<strong>"Mario Rossi"</strong>, Account=<strong>"Acme Corp Italia"</strong>, Titolo=<strong>"Technical Lead"</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Apri un nuovo Case e verifica che il campo Account mostri la gerarchia.</div></div>
    <div class="pdi-tip">💡 Verifica: l'Account padre deve mostrare gli Account figli nella sezione Related Lists sotto "Child Accounts".</div>
  </div>
</div>`
        }
      },
      {
        title:{en:"Install Base & Products",it:"Install Base e Prodotti"},
        tag:"teal",
        quiz:[
          {q:"Which CSM entity tracks 'Acme Corp has Router Model X (serial SN-001) at their Milan office'?",opts:["Product Model","CMDB Configuration Item","Install Base Item","Asset Record"],ans:2,exp:"Install Base Item represents a specific deployed instance of a product at a customer site. It links Account + Product Model + serial number. Product Model is just the generic definition."},
          {q:"What is the key difference between a Product Model and an Install Base Item?",opts:["They are the same thing","Product Model is the generic product definition; Install Base Item is the specific deployed instance per customer","Install Base Items are in ITSM; Product Models are in CSM","Product Models are per-customer; Install Base Items are global"],ans:1,exp:"Product Model = the template/definition (e.g., 'Router v3.0'). Install Base Item = a specific instance of that product deployed for a specific customer (e.g., Acme Corp's Router v3.0, serial SN-001)."}
        ],
        body:{
          en:`<p class="theory-p">The <strong>Install Base</strong> tracks products actively deployed at a customer's site — the bridge between what was purchased and what is running.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 125" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="10" y="35" width="115" height="55" rx="8" fill="#21262d" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="67" y="58" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">Product Model</text>
  <text x="67" y="73" text-anchor="middle" fill="#8b949e" font-size="10">Generic definition</text>
  <text x="67" y="85" text-anchor="middle" fill="#8b949e" font-size="10">e.g. Router v3.0</text>
  <polygon points="129,62 139,56 139,68" fill="#8b949e"/>
  <rect x="143" y="22" width="145" height="81" rx="8" fill="#0d3035" stroke="#39c5cf" stroke-width="2"/>
  <text x="215" y="46" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">Install Base Item</text>
  <text x="215" y="61" text-anchor="middle" fill="#e6edf3" font-size="10">Serial: SN-98765</text>
  <text x="215" y="74" text-anchor="middle" fill="#8b949e" font-size="10">Account: Acme Corp</text>
  <text x="215" y="87" text-anchor="middle" fill="#8b949e" font-size="10">Status: Active · Location: Milan</text>
  <polygon points="292,62 302,56 302,68" fill="#8b949e"/>
  <rect x="306" y="35" width="110" height="55" rx="8" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="361" y="58" text-anchor="middle" fill="#3fb950" font-size="11" font-weight="600">📋 Case</text>
  <text x="361" y="73" text-anchor="middle" fill="#8b949e" font-size="10">Links to IBI</text>
  <text x="361" y="85" text-anchor="middle" fill="#8b949e" font-size="10">for context</text>
  <rect x="430" y="35" width="120" height="55" rx="8" fill="#21262d" stroke="#d29922" stroke-width="1.5"/>
  <text x="490" y="58" text-anchor="middle" fill="#d29922" font-size="11" font-weight="600">CMDB CI</text>
  <text x="490" y="73" text-anchor="middle" fill="#8b949e" font-size="10">Optional link</text>
  <text x="490" y="85" text-anchor="middle" fill="#8b949e" font-size="10">(separate entity)</text>
  <line x1="416" y1="62" x2="430" y2="62" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
</svg>
<div class="diagram-caption">Product Model = template · Install Base Item = specific deployed instance per customer</div>
</div>
<ul class="theory-ul">
  <li><strong>Product Model:</strong> The generic product definition — version, category, SKU. Think of it as the template.</li>
  <li><strong>Install Base Item (IBI):</strong> A specific instance deployed for a specific Account. Has serial number, location, status.</li>
  <li><strong>CMDB CI:</strong> Optional link — an IBI can be linked to a CMDB CI for ITSM alignment, but they are separate entities with separate tables.</li>
</ul>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam Tip:</strong> "Which table tracks deployed customer products in CSM?" → <code>install_base_item</code>. CMDB CIs (<code>cmdb_ci</code>) belong to ITSM. They can be linked but are NOT the same.</div></div>
<div class="scenario-box" id="sc-ib-1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-ib-1')"><span>💼</span><span class="sc-badge">Scenario</span><span class="sc-title">SaaS vendor tracking software versions per customer</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A SaaS company has 3 enterprise clients. Client A runs v2.1, Client B and C run v3.0. Agents need to see the version immediately when a case is opened.</p>
    <div class="scenario-q">❓ How do you model this in CSM?</div>
    <div class="scenario-a">✅ Create two <strong>Product Models</strong> (Software v2.1, Software v3.0). Then create one <strong>Install Base Item</strong> per client, each linked to their respective Product Model. When a client opens a case and selects their IBI, agents see the version instantly in the workspace.</div>
  </div>
</div>`,
          it:`<p class="theory-p">L'<strong>Install Base</strong> traccia i prodotti attivamente distribuiti presso i clienti — il ponte tra ciò che è stato acquistato e ciò che è operativo.</p>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 125" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="10" y="35" width="115" height="55" rx="8" fill="#21262d" stroke="#39c5cf" stroke-width="1.5"/>
  <text x="67" y="58" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">Product Model</text>
  <text x="67" y="73" text-anchor="middle" fill="#8b949e" font-size="10">Definizione generica</text>
  <text x="67" y="85" text-anchor="middle" fill="#8b949e" font-size="10">es. Router v3.0</text>
  <polygon points="129,62 139,56 139,68" fill="#8b949e"/>
  <rect x="143" y="22" width="145" height="81" rx="8" fill="#0d3035" stroke="#39c5cf" stroke-width="2"/>
  <text x="215" y="46" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">Install Base Item</text>
  <text x="215" y="61" text-anchor="middle" fill="#e6edf3" font-size="10">Seriale: SN-98765</text>
  <text x="215" y="74" text-anchor="middle" fill="#8b949e" font-size="10">Account: Acme Corp</text>
  <text x="215" y="87" text-anchor="middle" fill="#8b949e" font-size="10">Stato: Attivo · Sede: Milano</text>
  <polygon points="292,62 302,56 302,68" fill="#8b949e"/>
  <rect x="306" y="35" width="110" height="55" rx="8" fill="#1a3a22" stroke="#3fb950" stroke-width="1.5"/>
  <text x="361" y="58" text-anchor="middle" fill="#3fb950" font-size="11" font-weight="600">📋 Case</text>
  <text x="361" y="73" text-anchor="middle" fill="#8b949e" font-size="10">Collegato all'IBI</text>
  <text x="361" y="85" text-anchor="middle" fill="#8b949e" font-size="10">per contesto</text>
  <rect x="430" y="35" width="120" height="55" rx="8" fill="#21262d" stroke="#d29922" stroke-width="1.5"/>
  <text x="490" y="58" text-anchor="middle" fill="#d29922" font-size="11" font-weight="600">CMDB CI</text>
  <text x="490" y="73" text-anchor="middle" fill="#8b949e" font-size="10">Link opzionale</text>
  <text x="490" y="85" text-anchor="middle" fill="#8b949e" font-size="10">(entità separata)</text>
  <line x1="416" y1="62" x2="430" y2="62" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
</svg>
<div class="diagram-caption">Product Model = template · Install Base Item = istanza specifica per cliente</div>
</div>
<ul class="theory-ul">
  <li><strong>Product Model:</strong> Definizione generica del prodotto — versione, categoria, SKU. È il template.</li>
  <li><strong>Install Base Item (IBI):</strong> Istanza specifica distribuita per un Account specifico. Ha numero seriale, posizione, stato.</li>
  <li><strong>CMDB CI:</strong> Link opzionale — un IBI può essere collegato a un CI CMDB per allineamento ITSM, ma sono entità separate con tabelle separate.</li>
</ul>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Esame:</strong> "Quale tabella traccia i prodotti distribuiti del cliente in CSM?" → <code>install_base_item</code>. I CMDB CI (<code>cmdb_ci</code>) appartengono a ITSM — possono essere collegati ma NON sono la stessa cosa.</div></div>
<div class="scenario-box" id="sc-ib-1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-ib-1-it')"><span>💼</span><span class="sc-badge">Scenario</span><span class="sc-title">Vendor SaaS: traccia versioni software per cliente</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un'azienda SaaS ha 3 clienti enterprise. Il Cliente A usa la v2.1, i Clienti B e C usano la v3.0. Gli agenti devono vedere la versione immediatamente quando si apre un case.</p>
    <div class="scenario-q">❓ Come si modella in CSM?</div>
    <div class="scenario-a">✅ Crea due <strong>Product Model</strong> (Software v2.1, Software v3.0). Poi crea un <strong>Install Base Item</strong> per cliente, ciascuno collegato al Product Model corrispondente. Quando un cliente apre un case e seleziona il suo IBI, gli agenti vedono subito la versione nel workspace.</div>
  </div>
</div>`
        }
      },
      {
        title:{en:"Contracts & Entitlements",it:"Contratti ed Entitlement"},
        tag:"amber",
        quiz:[
          {q:"A customer's support package allows 100 cases per year. Which entitlement type models this?",opts:["Service Entitlement","Time-Based Entitlement","Allocated Entitlement","Product Entitlement"],ans:2,exp:"Allocated Entitlement limits the NUMBER of cases. 100 cases per year is the classic allocated entitlement scenario. Time-Based limits by hours, not case count."},
          {q:"What happens when a case is opened for a customer with NO valid entitlement?",opts:["Case creation is automatically blocked","A warning is shown but agents CAN still create the case","The case is auto-escalated","A temporary entitlement is created"],ans:1,exp:"Entitlement Verification shows a warning indicator but does NOT block case creation. Agents can proceed at their discretion."},
          {q:"One Contract can have how many Entitlements?",opts:["Only one","Maximum two","As many as needed","One per product only"],ans:2,exp:"One Contract can have multiple Entitlements of different types. For example, one Contract can include both an Allocated Entitlement (case limit) and a Service Entitlement (SLA tier). When the Contract expires, all linked Entitlements expire."}
        ],
        body:{
          en:`<p class="theory-p">Entitlements define a customer's <em>right</em> to receive support. This is <strong>heavily tested</strong> — know all 4 types and their exam keywords.</p>
<table class="info-table2"><thead><tr><th>Type</th><th>Limits By</th><th>Example</th><th>Exam Keyword</th></tr></thead><tbody>
<tr><td><strong>Allocated</strong></td><td>Number of cases</td><td>50 cases per quarter</td><td>"limited number", "case count"</td></tr>
<tr><td><strong>Time-Based</strong></td><td>Support hours</td><td>20 hours/month</td><td>"support hours", "time window"</td></tr>
<tr><td><strong>Product</strong></td><td>Product purchased</td><td>Buying Prod X → 24/7 support</td><td>"product purchase", "license"</td></tr>
<tr><td><strong>Service</strong></td><td>Service level tier</td><td>Gold SLA = 4hr response</td><td>"service level", "SLA tier"</td></tr>
</tbody></table>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="200" y="8" width="160" height="38" rx="8" fill="#3b2e0e" stroke="#d29922" stroke-width="1.5"/>
  <text x="280" y="32" text-anchor="middle" fill="#f5d87a" font-size="13" font-weight="600">📄 Contract</text>
  <line x1="230" y1="46" x2="95" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="255" y1="46" x2="205" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="305" y1="46" x2="355" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="330" y1="46" x2="465" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <rect x="20" y="80" width="150" height="48" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
  <text x="95" y="101" text-anchor="middle" fill="#58a6ff" font-size="11" font-weight="600">Allocated</text>
  <text x="95" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Max # of cases</text>
  <rect x="175" y="80" width="130" height="48" rx="6" fill="#21262d" stroke="#39c5cf" stroke-width="1"/>
  <text x="240" y="101" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">Time-Based</text>
  <text x="240" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Max hours/period</text>
  <rect x="310" y="80" width="130" height="48" rx="6" fill="#21262d" stroke="#3fb950" stroke-width="1"/>
  <text x="375" y="101" text-anchor="middle" fill="#3fb950" font-size="11" font-weight="600">Product</text>
  <text x="375" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Tied to purchase</text>
  <rect x="445" y="80" width="105" height="48" rx="6" fill="#21262d" stroke="#a5a0f0" stroke-width="1"/>
  <text x="497" y="101" text-anchor="middle" fill="#a5a0f0" font-size="11" font-weight="600">Service</text>
  <text x="497" y="116" text-anchor="middle" fill="#8b949e" font-size="10">SLA tier</text>
  <text x="280" y="135" text-anchor="middle" fill="#8b949e" font-size="10">One Contract → Multiple Entitlements · All expire when Contract expires</text>
</svg>
<div class="diagram-caption">Contract is the parent · Entitlements derive validity from the Contract</div>
</div>
<div class="callout info"><span class="ci">💡</span><div><strong>Entitlement Verification:</strong> Auto-runs on case creation. Shows a ✅ if valid entitlement found, ⚠️ if not. Does NOT block case creation — agents proceed at discretion.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Contract expiry cascade:</strong> When a Contract expires, ALL linked Entitlements also expire. The entitlement inherits its validity period from the Contract.</div></div>
<div class="scenario-box" id="sc-ent-1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-ent-1')"><span>💎</span><span class="sc-badge">Scenario</span><span class="sc-title">Platinum Support: unlimited cases, 24/7, 1-hour SLA</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A company sells "Platinum Support": unlimited cases, 24/7 access, 1-hour response SLA, valid 12 months.</p>
    <div class="scenario-q">❓ How many entitlements, and what types?</div>
    <div class="scenario-a">✅ <strong>One Contract + 1-2 Entitlements:</strong><br>
    1. <strong>Service Entitlement</strong> — covers 24/7 access + 1-hour SLA tier (no case limit = NOT Allocated)<br>
    2. Optionally a <strong>Product Entitlement</strong> if tied to a specific product purchase<br>
    <em>No Allocated Entitlement needed</em> — "unlimited cases" means no cap.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Gli Entitlement definiscono il <em>diritto</em> di un cliente a ricevere supporto. Argomento <strong>molto testato</strong> — conosci tutti e 4 i tipi e le loro parole chiave d'esame.</p>
<table class="info-table2"><thead><tr><th>Tipo</th><th>Limita per</th><th>Esempio</th><th>Parola chiave esame</th></tr></thead><tbody>
<tr><td><strong>Allocated</strong></td><td>Numero di case</td><td>50 case a trimestre</td><td>"numero di case", "limite case"</td></tr>
<tr><td><strong>Time-Based</strong></td><td>Ore di supporto</td><td>20 ore al mese</td><td>"ore di supporto", "finestra temporale"</td></tr>
<tr><td><strong>Product</strong></td><td>Prodotto acquistato</td><td>Acquisto Prod X → supporto 24/7</td><td>"acquisto prodotto", "licenza"</td></tr>
<tr><td><strong>Service</strong></td><td>Livello di servizio</td><td>Gold SLA = risposta 4 ore</td><td>"livello di servizio", "tier SLA"</td></tr>
</tbody></table>
<div class="diagram-wrap2">
<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
  <rect x="200" y="8" width="160" height="38" rx="8" fill="#3b2e0e" stroke="#d29922" stroke-width="1.5"/>
  <text x="280" y="32" text-anchor="middle" fill="#f5d87a" font-size="13" font-weight="600">📄 Contratto</text>
  <line x1="230" y1="46" x2="95" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="255" y1="46" x2="205" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="305" y1="46" x2="355" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="330" y1="46" x2="465" y2="80" stroke="#d29922" stroke-width="1" stroke-dasharray="4,2"/>
  <rect x="20" y="80" width="150" height="48" rx="6" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
  <text x="95" y="101" text-anchor="middle" fill="#58a6ff" font-size="11" font-weight="600">Allocated</text>
  <text x="95" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Max # case</text>
  <rect x="175" y="80" width="130" height="48" rx="6" fill="#21262d" stroke="#39c5cf" stroke-width="1"/>
  <text x="240" y="101" text-anchor="middle" fill="#39c5cf" font-size="11" font-weight="600">Time-Based</text>
  <text x="240" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Max ore/periodo</text>
  <rect x="310" y="80" width="130" height="48" rx="6" fill="#21262d" stroke="#3fb950" stroke-width="1"/>
  <text x="375" y="101" text-anchor="middle" fill="#3fb950" font-size="11" font-weight="600">Product</text>
  <text x="375" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Legato all'acquisto</text>
  <rect x="445" y="80" width="105" height="48" rx="6" fill="#21262d" stroke="#a5a0f0" stroke-width="1"/>
  <text x="497" y="101" text-anchor="middle" fill="#a5a0f0" font-size="11" font-weight="600">Service</text>
  <text x="497" y="116" text-anchor="middle" fill="#8b949e" font-size="10">Tier SLA</text>
  <text x="280" y="135" text-anchor="middle" fill="#8b949e" font-size="10">Un Contratto → più Entitlement · Tutti scadono con il Contratto</text>
</svg>
<div class="diagram-caption">Il Contratto è il padre · Gli Entitlement derivano la validità dal Contratto</div>
</div>
<div class="callout info"><span class="ci">💡</span><div><strong>Entitlement Verification:</strong> Si attiva automaticamente alla creazione del case. Mostra ✅ se valido, ⚠️ se non trovato. NON blocca la creazione del case — gli agenti procedono a loro discrezione.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Scadenza a cascata del Contratto:</strong> Quando un Contratto scade, TUTTI gli Entitlement collegati scadono con lui. L'entitlement eredita il periodo di validità dal Contratto.</div></div>
<div class="scenario-box" id="sc-ent-1-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-ent-1-it')"><span>💎</span><span class="sc-badge">Scenario</span><span class="sc-title">Platinum Support: case illimitati, 24/7, SLA 1 ora</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Un'azienda vende "Platinum Support": case illimitati, accesso 24/7, SLA risposta 1 ora, validità 12 mesi.</p>
    <div class="scenario-q">❓ Quanti entitlement e di quale tipo?</div>
    <div class="scenario-a">✅ <strong>Un Contratto + 1-2 Entitlement:</strong><br>
    1. <strong>Service Entitlement</strong> — copre accesso 24/7 + tier SLA 1 ora (nessun limite case = NON Allocated)<br>
    2. Opzionalmente un <strong>Product Entitlement</strong> se legato all'acquisto di un prodotto specifico<br>
    <em>Nessun Allocated Entitlement</em> — "case illimitati" significa nessun tetto.</div>
  </div>
</div>`
        }
      },
      {
        title:{en:"Model Categories",it:"Categorie di Modello"},
        tag:"blue",
        quiz:[
          {q:"What is the primary purpose of a Model Category in ServiceNow CSM/ITAM?",opts:["Define SLA response times per product","Link a Product Model to a CI class and an Asset class","Group contacts by product type","Control which agents handle product-related cases"],ans:1,exp:"A Model Category maps a Product Model to both a CI class (CMDB) and an Asset class (ITAM). When a catalog order is fulfilled, the Model Category tells ServiceNow what type of Asset record and CI record to create automatically."},
          {q:"A Model Category is configured with CI Class = 'cmdb_ci_computer' and Asset Class = 'alm_hardware'. What happens when a laptop order is fulfilled?",opts:["Only a CI record is created","Only an Asset record is created","Both a Hardware Asset and a Computer CI are created","A Consumer record is created"],ans:2,exp:"When fulfillment completes, ServiceNow uses the Model Category to auto-create both an alm_hardware Asset record AND a cmdb_ci_computer CI record, keeping CMDB and Asset Management in sync."}
        ],
        body:{
          en:`<p class="theory-p"><strong>Model Categories</strong> are the bridge between the Product Catalog and the CMDB/Asset Management. They tell ServiceNow what kind of Asset and CI to create when a product model is ordered or deployed.</p>
<table class="info-table2"><thead><tr><th>Model Category</th><th>CI Class</th><th>Asset Class</th><th>Example</th></tr></thead><tbody>
<tr><td>Computer</td><td>cmdb_ci_computer</td><td>alm_hardware</td><td>Laptop, Desktop</td></tr>
<tr><td>Software</td><td>cmdb_ci_spkg</td><td>alm_license</td><td>Office 365, Antivirus</td></tr>
<tr><td>Consumable</td><td>—</td><td>alm_consumable</td><td>Toner, USB cable</td></tr>
<tr><td>Network Gear</td><td>cmdb_ci_netgear</td><td>alm_hardware</td><td>Switch, Router</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Navigation:</strong> Product Catalog › Model Categories (table: cmdb_model_category). Each Product Model references exactly one Model Category.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam focus:</strong> Consumables have NO CI class — they create only an Asset, never a CMDB record. This is a common trick question.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Auto-provisioning flow:</strong> Catalog Item ordered → Order fulfilled → Model Category evaluated → Asset record created (+ CI if class defined) → Asset linked to Install Base if applicable.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing Model Category (maps classes) with Product Category (groups catalog items for browsing)</li>
  <li>Assuming all categories create both an Asset AND a CI — Consumables create only an Asset</li>
  <li>Thinking Model Category controls entitlements — it does not</li>
</ul></div>`,
          it:`<p class="theory-p">Le <strong>Model Category</strong> collegano il Product Catalog con il CMDB e l'Asset Management. Indicano a ServiceNow quale tipo di Asset e CI creare quando un modello di prodotto viene ordinato o distribuito.</p>
<table class="info-table2"><thead><tr><th>Model Category</th><th>CI Class</th><th>Asset Class</th><th>Esempio</th></tr></thead><tbody>
<tr><td>Computer</td><td>cmdb_ci_computer</td><td>alm_hardware</td><td>Laptop, Desktop</td></tr>
<tr><td>Software</td><td>cmdb_ci_spkg</td><td>alm_license</td><td>Office 365, Antivirus</td></tr>
<tr><td>Consumable</td><td>—</td><td>alm_consumable</td><td>Toner, cavo USB</td></tr>
<tr><td>Network Gear</td><td>cmdb_ci_netgear</td><td>alm_hardware</td><td>Switch, Router</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Focus esame:</strong> I Consumable NON hanno una CI Class — creano solo un Asset, mai un record CMDB. Domanda trabocchetto frequente.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Flusso auto-provisioning:</strong> Ordine Catalog → Ordine completato → Model Category valutata → Asset record creato (+ CI se classe definita) → Asset collegato all'Install Base se applicabile.</div></div>`
        }
      },
      {
        title:{en:"Consumer vs Contact Records",it:"Consumer vs Contact: Differenze Chiave"},
        tag:"blue",
        quiz:[
          {q:"A CSM agent notices a case has no Account field. The customer is linked as a 'Consumer'. What does this confirm?",opts:["The system is misconfigured","The case was created in B2B mode","The instance is running in B2C mode","The Contact account was accidentally deleted"],ans:2,exp:"In B2C mode, cases link to Consumer records (no Account required). The absence of an Account field confirms B2C configuration. Consumer is the standalone customer entity for individual end-users."},
          {q:"Which table stores Consumer records in ServiceNow CSM?",opts:["sys_user","customer_contact","customer_account","customer_service_consumer"],ans:3,exp:"Consumer records are stored in the 'customer_service_consumer' table. Contact records are in 'customer_contact'. These are completely separate tables with different fields and relationships."}
        ],
        body:{
          en:`<p class="theory-p">Contact and Consumer are two distinct customer entity types. Mixing them up is the most common Domain 1 exam mistake.</p>
<table class="info-table2"><thead><tr><th>Attribute</th><th>Contact (B2B)</th><th>Consumer (B2C)</th></tr></thead><tbody>
<tr><td>Table</td><td>customer_contact</td><td>customer_service_consumer</td></tr>
<tr><td>Extends</td><td>sys_user</td><td>standalone</td></tr>
<tr><td>Account required?</td><td>✅ Yes — mandatory</td><td>❌ No — none</td></tr>
<tr><td>Portal visibility</td><td>Account-level (sees company cases)</td><td>Individual only</td></tr>
<tr><td>Roles within org</td><td>✅ (Technical Lead, Billing…)</td><td>❌</td></tr>
<tr><td>Model</td><td>B2B only</td><td>B2C only</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Critical distinction:</strong> A Contact ALWAYS needs a parent Account. If you try to create a Contact without an Account in B2B mode, the form will require it. A Consumer has no Account field at all.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Portal access:</strong> In B2B, a Contact can see ALL cases for their Account (if granted). In B2C, a Consumer sees only their own cases. This distinction often appears in scenario questions.</div></div>
<div class="scenario-box" id="sc-consvscon">
  <div class="scenario-hdr" onclick="toggleScenario('sc-consvscon')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">Insurance company migrating from B2B to B2C</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>An insurance company currently uses B2B CSM (Contacts under Accounts). They're expanding to direct-to-consumer policies and need individual customers without corporate ties.</p>
    <div class="scenario-q">❓ Can they reuse Contact records as Consumers?</div>
    <div class="scenario-a">❌ <strong>No.</strong> Contact and Consumer are separate tables with different schemas. Migration requires creating new Consumer records. They can run both B2B (for corporate clients) and B2C (for individual policyholders) simultaneously in one instance, but must manage both entity types separately.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Contact e Consumer sono due entità clienti distinte. Confonderle è l'errore più comune nel Dominio 1.</p>
<table class="info-table2"><thead><tr><th>Attributo</th><th>Contact (B2B)</th><th>Consumer (B2C)</th></tr></thead><tbody>
<tr><td>Tabella</td><td>customer_contact</td><td>customer_service_consumer</td></tr>
<tr><td>Account richiesto?</td><td>✅ Sì — obbligatorio</td><td>❌ No</td></tr>
<tr><td>Visibilità portale</td><td>A livello Account (vede case aziendali)</td><td>Solo propri case</td></tr>
<tr><td>Ruoli nell'org</td><td>✅ (Technical Lead, Billing…)</td><td>❌</td></tr>
<tr><td>Modello</td><td>Solo B2B</td><td>Solo B2C</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Distinzione critica:</strong> Un Contact richiede SEMPRE un Account padre. Un Consumer non ha il campo Account. Non sono mai intercambiabili e usano tabelle diverse.</div></div>`
        }
      },
      {
        title:{en:"Service-Aware Install Base & Account Relationships",it:"Install Base Service-Aware e Relazioni Account"},
        tag:"blue",
        quiz:[
          {q:"Which field on an Install Base Item (IBI) creates a parent-child hierarchy between two IBIs?",opts:["Related CI","Sold Product","Parent Install Base Item","Account Relationship"],ans:2,exp:"The 'Parent Install Base Item' field links one IBI to another, modeling hierarchical relationships such as a server (parent) with its installed components (children). This is distinct from Account Hierarchy and CMDB CI relationships."},
          {q:"What is the primary purpose of Service-Aware Install Base (SAIB)?",opts:["To replace the CMDB entirely","To link an Install Base Item to a CMDB Configuration Item, bridging the customer asset view with infrastructure","To track sold products without a customer account","To define account relationships of type Partner-Customer"],ans:1,exp:"SAIB connects an IBI (customer-facing CSM record) to a CMDB CI (infrastructure record). This lets teams manage both the customer relationship side (CSM) and the technical infrastructure side (CMDB) from a single linked record."},
          {q:"A consultant works for two different client companies and must open cases for both. What CSM feature supports this?",opts:["Account Hierarchy with parent account","Account Relationship Record","Multi-account Contact association","Sold Product linking"],ans:2,exp:"A Contact can be associated with multiple Accounts (multi-account contact). This covers scenarios like a consultant or partner employee who manages cases for more than one customer company. Account Relationship Records define formal relationships between two distinct Account records, which is a different concept."}
        ],
        body:{
          en:`<p class="theory-p">Beyond the basic Account/Contact model, Domain 1 includes several advanced data structures that represent real-world customer asset and relationship complexity. These are high-frequency exam topics.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Install Base Item (IBI)</strong> lives in the <code>install_base_item</code> table and represents a specific product that has been deployed at a customer site. Unlike a Product Model (which is just a generic definition) or a Sold Product (which is a purchase record), the IBI captures the live, operational instance — including serial number, status, location, and the owning Account.</div></div>
<table class="info-table2"><thead><tr><th>Entity</th><th>Table</th><th>What it represents</th><th>Exam distinction</th></tr></thead><tbody>
<tr><td><strong>Product Model</strong></td><td>cmdb_model</td><td>Generic product definition (e.g., "Cisco Router 3000")</td><td>No customer, no serial — just a template</td></tr>
<tr><td><strong>Sold Product</strong></td><td>sold_product</td><td>Purchase record linking Product Model + Account</td><td>Records the sale event, not the deployment</td></tr>
<tr><td><strong>Install Base Item</strong></td><td>install_base_item</td><td>Specific deployed instance of a product at a customer</td><td>Operational record; has serial, location, status</td></tr>
<tr><td><strong>CMDB CI</strong></td><td>cmdb_ci (and subtypes)</td><td>Infrastructure configuration item managed by ITSM/CMDB</td><td>IT-centric; linked to IBI via SAIB — not the same record</td></tr>
</tbody></table>
<p class="theory-p"><strong>Parent Install Base Item</strong> is a reference field on the IBI record that points to another IBI. This creates a hierarchical tree of deployed assets. A classic example: a physical server chassis is the parent IBI, and its installed RAM modules, storage drives, and network cards are child IBIs. This hierarchy helps agents understand the full configuration of what a customer has deployed without leaving the CSM context.</p>
<div class="callout success"><span class="ci">✅</span><div><strong>Service-Aware Install Base (SAIB)</strong> is the feature that links an IBI to a CMDB Configuration Item. Without SAIB, the customer-facing asset world (CSM) and the infrastructure world (CMDB) are siloed. With SAIB, when a customer opens a case about a device, the agent can see the linked CMDB CI — including its relationships, change history, and health status — all from within CSM.</div></div>
<p class="theory-p"><strong>Account Relationship Records</strong> define a formal, typed relationship between two separate Account records. This is entirely different from Account Hierarchy (which uses parent/child ownership).</p>
<table class="info-table2"><thead><tr><th>Field</th><th>Purpose</th><th>Example value</th></tr></thead><tbody>
<tr><td><strong>Relationship Type</strong></td><td>Classifies the nature of the relationship</td><td>Partner, Competitor, Distributor, Reseller</td></tr>
<tr><td><strong>Source Account</strong></td><td>The originating account in the relationship</td><td>TechPartner S.r.l.</td></tr>
<tr><td><strong>Target Account</strong></td><td>The other account in the relationship</td><td>Acme Corp Italy</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Account Relationship vs Account Hierarchy — exam trap.</strong> Account Hierarchy uses the <em>Parent Account</em> field to model ownership (subsidiary → parent company). Account Relationship Records model <em>lateral</em> or <em>cross-company</em> associations — partner networks, competitor tracking, distributor channels — between independent accounts. They do not imply ownership.</div></div>
<p class="theory-p"><strong>Multi-account Contact</strong> allows a single Contact to be associated with more than one Account — for example, an independent IT consultant who manages cases for multiple client companies. You add associations via the Contact's related list without duplicating the record.</p>
<div class="scenario-box" id="sc-saib-en">
  <div class="scenario-hdr" onclick="toggleScenario('sc-saib-en')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">Manufacturing firm: server with child components</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Acme Manufacturing has a blade server chassis at their Turin plant. Inside are 8 blade modules, each a separately tracked asset. A customer engineer opens a case about "blade module 4 overheating."</p>
    <div class="scenario-q">❓ How should this be modeled in CSM Install Base?</div>
    <div class="scenario-a">✅ The blade chassis is the <strong>parent IBI</strong>. Each blade module is a <strong>child IBI</strong> with the "Parent Install Base Item" field pointing to the chassis. SAIB links each IBI to the corresponding CMDB CI, so the agent sees health and relationships for blade module 4 without leaving the case form.</div>
  </div>
</div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Confusing IBI with CMDB CI — they are separate records; SAIB is the link between them, not an identity</li>
  <li>Treating Sold Product as the operational asset — Sold Product records the purchase; IBI tracks the deployment</li>
  <li>Thinking Account Relationship replaces Account Hierarchy — hierarchy is about ownership; Relationship Records are typed cross-account associations</li>
  <li>Creating duplicate Contact records instead of using multi-account contact associations</li>
</ul></div>`,
          it:`<p class="theory-p">Al di là del modello base Account/Contact, il Dominio 1 include strutture dati avanzate che rappresentano la complessità reale degli asset cliente. Questi sono argomenti ad alta frequenza d'esame.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Install Base Item (IBI)</strong> risiede nella tabella <code>install_base_item</code> e rappresenta un prodotto specifico deployato presso un cliente. A differenza del Product Model (solo una definizione) o del Sold Product (un record d'acquisto), l'IBI cattura l'istanza operativa live — incluso numero seriale, stato, posizione e Account proprietario.</div></div>
<table class="info-table2"><thead><tr><th>Entità</th><th>Tabella</th><th>Cosa rappresenta</th><th>Distinzione esame</th></tr></thead><tbody>
<tr><td><strong>Product Model</strong></td><td>cmdb_model</td><td>Definizione generica di prodotto</td><td>Nessun cliente, nessun seriale — solo un template</td></tr>
<tr><td><strong>Sold Product</strong></td><td>sold_product</td><td>Record d'acquisto: Product Model + Account</td><td>Registra la vendita, non il deployment</td></tr>
<tr><td><strong>Install Base Item</strong></td><td>install_base_item</td><td>Istanza specifica deployata presso un cliente</td><td>Record operativo; ha seriale, posizione, stato</td></tr>
<tr><td><strong>CMDB CI</strong></td><td>cmdb_ci</td><td>Configuration Item gestito da ITSM/CMDB</td><td>IT-centrico; collegato all'IBI via SAIB</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Service-Aware Install Base (SAIB)</strong> collega un IBI a un CI del CMDB. Senza SAIB, il mondo degli asset cliente (CSM) e quello infrastrutturale (CMDB) sono separati. Con SAIB, quando un cliente apre un case su un dispositivo, l'agente vede il CI CMDB collegato — relazioni, cronologia change e stato — direttamente da CSM.</div></div>
<p class="theory-p"><strong>Account Relationship Record</strong> definisce una relazione formale e tipizzata tra due Account distinti. Completamente diverso dall'Account Hierarchy (che usa parent/child per la proprietà).</p>
<table class="info-table2"><thead><tr><th>Campo</th><th>Scopo</th><th>Esempio</th></tr></thead><tbody>
<tr><td><strong>Relationship Type</strong></td><td>Classifica la natura della relazione</td><td>Partner, Competitor, Distributore</td></tr>
<tr><td><strong>Source Account</strong></td><td>L'account di origine</td><td>TechPartner S.r.l.</td></tr>
<tr><td><strong>Target Account</strong></td><td>L'altro account</td><td>Acme Corp Italy</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Account Relationship vs Account Hierarchy — trappola esame.</strong> L'Account Hierarchy modella la proprietà (sussidiaria → capogruppo). Gli Account Relationship Record modellano associazioni laterali tra account indipendenti (partner, competitor, distributori). Non implicano ownership.</div></div>
<p class="theory-p"><strong>Multi-account Contact</strong> consente a un singolo Contact di essere associato a più Account — ad esempio un consulente IT indipendente che gestisce case per più clienti. Si aggiungono associazioni via related list senza duplicare il record.</p>
<div class="scenario-box" id="sc-saib-it">
  <div class="scenario-hdr" onclick="toggleScenario('sc-saib-it')"><span>🏭</span><span class="sc-badge">Scenario</span><span class="sc-title">Azienda manifatturiera: server con componenti figli</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>Acme Manufacturing ha uno chassis blade server a Torino con 8 moduli blade, ciascuno tracciato separatamente. Un tecnico apre un case per "blade module 4 surriscaldato".</p>
    <div class="scenario-q">❓ Come si modella nell'Install Base?</div>
    <div class="scenario-a">✅ Lo chassis è l'<strong>IBI padre</strong>. Ogni blade è un <strong>IBI figlio</strong> con "Parent Install Base Item" che punta allo chassis. SAIB collega ogni IBI al CI CMDB corrispondente — l'agente vede stato e relazioni del blade 4 senza uscire dal case.</div>
  </div>
</div>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Confondere IBI con CMDB CI — sono record distinti; SAIB è il collegamento, non un'identità</li>
  <li>Trattare Sold Product come asset operativo — Sold Product registra l'acquisto; IBI traccia il deployment</li>
  <li>Pensare che Account Relationship sostituisca Account Hierarchy — gerarchia = ownership; Relationship = associazioni tipizzate tra account indipendenti</li>
  <li>Creare record Contact duplicati invece di usare le associazioni multi-account</li>
</ul></div>`
        }
      }
    ]
};
