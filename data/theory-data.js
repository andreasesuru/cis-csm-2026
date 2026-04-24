// Theory data — all 5 domains with topics, quiz questions, and bilingual body content
const THEORY = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id:3, pct:"15%", color:"#d29922",
    title:{en:"Domain 4: Workspace, Portals & Analytics",it:"Dominio 4: Workspace, Portali e Analytics"},
    subtitle:{en:"CSP · Service Catalog · Communities · Performance Analytics · KPIs · Engagement Messenger",it:"CSP · Service Catalog · Communities · Performance Analytics · KPI · Engagement Messenger"},
    topics:[
      {
        title:{en:"Customer Service Portal & Communities",it:"Customer Service Portal e Communities"},
        tag:"amber",
        quiz:[
          {q:"The Customer Service Portal (CSP) is built on which framework?",opts:["Next Experience (Polaris)","UI Builder","Service Portal (AngularJS)","Classic GlideRecord UI"],ans:2,exp:"The CSP is built on Service Portal (AngularJS). The Agent Workspace uses Next Experience. These are entirely separate frameworks — do not confuse them on the exam."},
          {q:"Which CSM feature (part of the Professional Suite) lets customers help each other, reducing support case volume?",opts:["Knowledge Base articles","Customer Service Portal","Communities","Service Catalog"],ans:2,exp:"Communities creates customer-facing forums for peer-to-peer support. Part of CSM Professional Suite. Knowledge Base is read-only articles. Service Catalog is for structured service requests."}
        ],
        body:{
          en:`<p class="theory-p">The Customer Service Portal is the self-service hub for customers. Communities adds peer collaboration on top.</p>
<table class="info-table2"><thead><tr><th>Feature</th><th>Framework</th><th>Configured In</th><th>Purpose</th></tr></thead><tbody>
<tr><td><strong>Agent Workspace</strong></td><td>Next Experience</td><td>UI Builder</td><td>Agent daily work interface</td></tr>
<tr><td><strong>Customer Service Portal</strong></td><td>Service Portal (AngularJS)</td><td>Service Portal Admin</td><td>Customer self-service</td></tr>
<tr><td><strong>Engagement Messenger</strong></td><td>Embedded JS widget</td><td>Widget config + JS snippet</td><td>Support from external websites</td></tr>
<tr><td><strong>Communities</strong></td><td>Service Portal extension</td><td>Communities admin</td><td>Customer peer-to-peer forums</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Framework trap:</strong> Agent Workspace (UI Builder) vs CSP (Service Portal admin) — they are DIFFERENT tools for DIFFERENT frameworks. This distinction is tested repeatedly.</div></div>
<ul class="theory-ul">
  <li><strong>CSP Key Widgets:</strong> My Cases, Knowledge Articles, Service Catalog, Case Status tracker, Announcements.</li>
  <li><strong>Portal Branding:</strong> Logo, colors, headers at <code>Service Portal › Portals › [Portal] › Theme</code>.</li>
  <li><strong>Communities:</strong> Part of CSM Professional Suite (extra license). Customer forums — customers post questions, share solutions, mark answers as accepted. Reduces inbound case volume.</li>
  <li><strong>Engagement Messenger:</strong> JS snippet on external site. Customer never navigates to ServiceNow. Supports chat, case creation, and status checks.</li>
</ul>`,
          it:`<p class="theory-p">Il Customer Service Portal è il centro self-service per i clienti. Communities aggiunge collaborazione peer-to-peer.</p>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola framework:</strong> Agent Workspace (UI Builder) vs CSP (Service Portal admin) — sono strumenti DIVERSI per framework DIVERSI. Questa distinzione è testata ripetutamente.</div></div>
<ul class="theory-ul">
  <li><strong>Widget CSP chiave:</strong> My Cases, Knowledge Articles, Service Catalog, Case Status tracker.</li>
  <li><strong>Branding portale:</strong> Logo, colori, header in <code>Service Portal › Portals › [Portale] › Theme</code>.</li>
  <li><strong>Communities:</strong> Parte del CSM Professional Suite. Forum clienti — riduci il volume dei case tramite supporto peer-to-peer.</li>
</ul>`
        }
      },
      {
        title:{en:"Performance Analytics & KPIs",it:"Performance Analytics e KPI"},
        tag:"amber",
        quiz:[
          {q:"Which KPI measures % of cases resolved on the FIRST customer contact?",opts:["CSAT","AHT","FCR (First Contact Resolution)","SLA Compliance Rate"],ans:2,exp:"FCR (First Contact Resolution) measures the % of cases resolved without requiring follow-up contacts. CSAT measures satisfaction. AHT is average handle time. SLA% measures adherence to targets."},
          {q:"Which PA feature aggregates all KPIs for a single Account in one view?",opts:["KPI Breakdown","Trend Report","Account Scorecard","Dashboard Filter"],ans:2,exp:"An Account Scorecard aggregates all KPIs (CSAT, SLA%, FCR, volume, aging) for a specific Account — one-page health view for that customer relationship."},
          {q:"What is the difference between a PA Target and a Threshold?",opts:["They are identical","Target = the goal value; Threshold = boundary that triggers color change/alert","Target is set by management; Threshold is auto-calculated","Targets are for CSAT; Thresholds for SLA only"],ans:1,exp:"Target = the goal to achieve (e.g., CSAT ≥ 4.5). Threshold = a boundary that changes the indicator's visual status (amber warning / red critical) when performance deteriorates."}
        ],
        body:{
          en:`<p class="theory-p">Performance Analytics (PA) provides real-time dashboards, trending, and KPI management — much more powerful than standard reports.</p>
<table class="info-table2"><thead><tr><th>KPI</th><th>Full Name</th><th>Measures</th><th>Type</th></tr></thead><tbody>
<tr><td><strong>FCR</strong></td><td>First Contact Resolution</td><td>% cases resolved on first contact</td><td>Efficiency</td></tr>
<tr><td><strong>AHT</strong></td><td>Average Handle Time</td><td>Avg time per case</td><td>Efficiency</td></tr>
<tr><td><strong>CSAT</strong></td><td>Customer Satisfaction Score</td><td>Post-case survey rating (1-5 or 1-10)</td><td>Quality</td></tr>
<tr><td><strong>SLA%</strong></td><td>SLA Compliance Rate</td><td>% cases meeting SLA targets</td><td>Compliance</td></tr>
<tr><td><strong>Backlog</strong></td><td>Open Case Backlog</td><td>Count of unresolved cases</td><td>Volume</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>PA vs Standard Reports:</strong> PA indicators calculate over time and support trending, targets, and breakdowns. Standard Reports are static snapshots. PA provides historical trend analysis that basic reports cannot — use PA for operational management KPIs.</div></div>
<div class="callout info"><span class="ci">💡</span><div><strong>Account Scorecard:</strong> Aggregates all KPIs for ONE specific Account — gives managers a one-page health view of a customer relationship. <strong>Breakdown:</strong> Analyzes one KPI across dimensions (by agent, team, category, channel, region).</div></div>
<div class="scenario-box" id="sc-pa-1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-pa-1')"><span>📊</span><span class="sc-badge">Scenario</span><span class="sc-title">Manager wants CSAT trends by region over 6 months</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A CSM manager wants a dashboard showing CSAT scores trended over the last 6 months, broken down by European support regions.</p>
    <div class="scenario-q">❓ Which PA features are needed?</div>
    <div class="scenario-a">✅ Three PA components:<br>
    1. <strong>PA Indicator</strong> (CSAT score) — the metric itself<br>
    2. <strong>Breakdown</strong> (by region) — the dimension<br>
    3. <strong>Trend view</strong> (6-month history) — the time range<br>
    Standard reports cannot provide trending + live KPI tracking + breakdown simultaneously.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Performance Analytics (PA) fornisce dashboard in tempo reale, trending e gestione KPI — molto più potente dei report standard.</p>
<table class="info-table2"><thead><tr><th>KPI</th><th>Nome completo</th><th>Misura</th></tr></thead><tbody>
<tr><td><strong>FCR</strong></td><td>First Contact Resolution</td><td>% case risolti al primo contatto</td></tr>
<tr><td><strong>AHT</strong></td><td>Average Handle Time</td><td>Tempo medio per case</td></tr>
<tr><td><strong>CSAT</strong></td><td>Customer Satisfaction Score</td><td>Survey post-case (1-5 o 1-10)</td></tr>
<tr><td><strong>SLA%</strong></td><td>SLA Compliance Rate</td><td>% case che rispettano gli SLA</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Account Scorecard:</strong> Aggrega tutti i KPI per UN Account specifico. <strong>Breakdown:</strong> Analizza un KPI su più dimensioni (agente, team, categoria, canale, regione).</div></div>`
        }
      },
      {
        title:{en:"Service Portal Configuration",it:"Configurazione del Service Portal"},
        tag:"amber",
        quiz:[
          {q:"In the ServiceNow Service Portal framework, what is a 'Widget'?",opts:["A full portal page","A reusable UI component combining HTML, CSS, and a server/client script","A theme that controls portal branding","An SLA definition displayed to customers"],ans:1,exp:"A Widget is a self-contained, reusable UI component built with HTML (template), CSS, a Server Script (AngularJS controller), and a Client Script. Widgets are placed inside Page layouts and can be configured per-instance. This is the fundamental building block of any Service Portal."},
          {q:"Which OOTB portal is the primary self-service channel for CSM customers?",opts:["Employee Service Center (ESC)","IT Self-Service Portal","Customer Service Portal (CSP)","Now Mobile"],ans:2,exp:"The Customer Service Portal (CSP) — URL suffix typically /csm — is the OOTB self-service portal for CSM customers. It provides case submission, case tracking, knowledge search, community access, and chat. Different from the Employee Service Center which is for internal staff."}
        ],
        body:{
          en:`<p class="theory-p">The <strong>Customer Service Portal (CSP)</strong> is the primary customer-facing self-service channel in CSM. It is built on the ServiceNow Service Portal framework and is fully configurable.</p>
<div class="callout info"><span class="ci">💡</span><div><strong>Portal URL:</strong> Default suffix is <code>/csm</code>. Navigate to: Service Portal › Portals › Customer Service Portal to configure branding, pages, and theme.</div></div>
<table class="info-table2"><thead><tr><th>Component</th><th>Purpose</th><th>Config Location</th></tr></thead><tbody>
<tr><td><strong>Portal</strong></td><td>Container with URL, theme, and homepage</td><td>Service Portal › Portals</td></tr>
<tr><td><strong>Theme</strong></td><td>Branding: colours, fonts, logo, CSS</td><td>Service Portal › Themes</td></tr>
<tr><td><strong>Page</strong></td><td>Individual URL route (e.g. /csm?id=my_cases)</td><td>Service Portal › Pages</td></tr>
<tr><td><strong>Widget</strong></td><td>Reusable UI component placed on a page</td><td>Service Portal › Widgets</td></tr>
<tr><td><strong>Widget Instance</strong></td><td>One widget placed on one page with specific options</td><td>Page Designer (drag &amp; drop)</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Key OOTB CSM Widgets:</strong><br>
• <strong>Case Create</strong> — form for submitting a new case<br>
• <strong>My Cases</strong> — list of the customer's open/closed cases<br>
• <strong>Knowledge Base</strong> — KB search and article view<br>
• <strong>Live Chat</strong> — real-time chat with an agent<br>
• <strong>Community</strong> — Q&amp;A forum for peer support<br>
• <strong>Engagement Messenger</strong> — embedded chat widget for external sites</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Page Designer vs Widget Editor:</strong> Page Designer arranges existing widgets on a page (drag-and-drop, no code). Widget Editor modifies the actual widget code (HTML/CSS/scripts). Know which one to use for each task on the exam.</div></div>
<div class="pdi-box" id="pdi-portal1">
  <div class="pdi-hdr" onclick="togglePDI('pdi-portal1')"><span>🖥️</span><span class="pdi-badge">PDI Exercise</span><span class="pdi-title">Customise the Customer Service Portal theme</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Navigate to <strong>Service Portal › Portals</strong>, open <strong>Customer Service Portal</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Click the <strong>Theme</strong> reference link. Note the CSS variables for primary colour, font, and logo URL.</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Change <strong>navbar_color</strong> to a hex value and save. Open <code>/csm</code> to verify the change.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Navigate to <strong>Service Portal › Pages</strong>, open <strong>Home (index)</strong>, click <strong>Open in Designer</strong> to see the widget layout.</div></div>
    <div class="pdi-tip">💡 Page Designer shows rows and columns. Click any widget to configure its instance options without modifying the widget code.</div>
  </div>
</div>
<div class="mistake-box"><div class="mb-title">⚠️ Common Mistakes</div><ul>
  <li>Editing widget code when only an instance configuration change is needed — use the widget instance options first</li>
  <li>Confusing the CSP (/csm) with the Employee Service Center (/esc) — different portals for different audiences</li>
  <li>Thinking portal changes require a deployment — all changes are live immediately in the same instance</li>
</ul></div>`,
          it:`<p class="theory-p">Il <strong>Customer Service Portal (CSP)</strong> è il principale canale self-service per i clienti in CSM, costruito sul framework Service Portal ed è completamente configurabile.</p>
<table class="info-table2"><thead><tr><th>Componente</th><th>Scopo</th><th>Configurazione</th></tr></thead><tbody>
<tr><td><strong>Portal</strong></td><td>Contenitore con URL, tema e homepage</td><td>Service Portal › Portals</td></tr>
<tr><td><strong>Theme</strong></td><td>Branding: colori, font, logo, CSS</td><td>Service Portal › Themes</td></tr>
<tr><td><strong>Page</strong></td><td>Singolo percorso URL (es. /csm?id=my_cases)</td><td>Service Portal › Pages</td></tr>
<tr><td><strong>Widget</strong></td><td>Componente UI riutilizzabile su una pagina</td><td>Service Portal › Widgets</td></tr>
</tbody></table>
<div class="callout success"><span class="ci">✅</span><div><strong>Widget OOTB CSM principali:</strong> Case Create · My Cases · Knowledge Base · Live Chat · Community · Engagement Messenger</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Page Designer vs Widget Editor:</strong> Page Designer dispone widget esistenti (drag-and-drop, senza codice). Widget Editor modifica il codice del widget. Sapere quale usare per ogni task.</div></div>`
        }
      },
      {
        title:{en:"Service Catalog for CSM",it:"Service Catalog per CSM"},
        tag:"amber",
        quiz:[
          {q:"Which catalog item type automatically creates a Case when a customer submits a request on the CSP?",opts:["Order Guide","Standard Catalog Item","Record Producer","Content Item"],ans:2,exp:"A Record Producer creates a record in a specified table — in CSM context, it creates a Case (sn_customerservice_case) record directly. Standard Catalog Items create request/requested items in the sc_req/sc_req_item tables, not Cases. Record Producers are the correct choice when you want catalog submissions to become Cases."},
          {q:"In the CSM Service Catalog, what is an Order Guide used for?",opts:["Defining SLA thresholds for catalog requests","Grouping multiple catalog items that are frequently ordered together","Creating Communities for catalog discussions","Automatically assigning cases based on category"],ans:1,exp:"An Order Guide bundles multiple catalog items that are logically related into a single guided ordering experience. For example, an 'Onboarding Kit' Order Guide might include a laptop, software license, and portal access — all ordered in one flow."}
        ],
        body:{
          en:`<p class="theory-p">The <strong>Service Catalog</strong> in CSM allows customers to request predefined services through the Customer Service Portal — turning structured requests directly into Cases or fulfillment workflows.</p>
<table class="info-table2"><thead><tr><th>Catalog Item Type</th><th>Creates</th><th>Best for</th></tr></thead><tbody>
<tr><td><strong>Record Producer</strong></td><td>A record in any table (e.g. Case)</td><td>Customer submits a request → becomes a Case automatically</td></tr>
<tr><td><strong>Standard Item</strong></td><td>sc_req / sc_req_item</td><td>Product orders, physical items, access requests</td></tr>
<tr><td><strong>Order Guide</strong></td><td>Multiple items together</td><td>Bundled requests (onboarding kit, service package)</td></tr>
<tr><td><strong>Content Item</strong></td><td>No record — links to a URL or KB article</td><td>Informational items, FAQ links</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Record Producer for CSM:</strong> Set the target table to <code>sn_customerservice_case</code>. Map catalog variables (e.g. "Describe your issue") to Case fields (e.g. Short Description). When the customer submits, a Case is created and routed automatically.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Service Categories:</strong> Catalog items are organised into Categories (e.g. "IT Support", "Account Management", "Returns"). The CSP homepage can display category tiles, making it easy for customers to find the right request type.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam focus:</strong> Know the difference between Record Producer (creates a Case) and Standard Item (creates sc_req_item). Scenario questions often test which to use when a catalog request should create a Case vs a standard fulfillment record.</div></div>
<div class="scenario-box" id="sc-svccat1">
  <div class="scenario-hdr" onclick="toggleScenario('sc-svccat1')"><span>🛒</span><span class="sc-badge">Scenario</span><span class="sc-title">Customer submits a product return request via the portal</span><span class="sc-arr">▶</span></div>
  <div class="scenario-body">
    <p>A company wants portal users to submit product return requests. Each submission should automatically create a "Returns" Case assigned to the Returns team.</p>
    <div class="scenario-q">❓ Which catalog item type and configuration?</div>
    <div class="scenario-a">✅ <strong>Record Producer</strong> targeting <code>sn_customerservice_case</code>. Set Case Type = "Returns". Map the variable "Product serial number" to the Install Base Item field. Add a Default Assignment Rule for Case Type = Returns → Returns Team. Result: one portal form submission → one tracked Case, no manual intervention.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Il <strong>Service Catalog</strong> in CSM permette ai clienti di richiedere servizi predefiniti attraverso il CSP, trasformando le richieste strutturate direttamente in Case o workflow di fulfillment.</p>
<table class="info-table2"><thead><tr><th>Tipo di Item</th><th>Crea</th><th>Ideale per</th></tr></thead><tbody>
<tr><td><strong>Record Producer</strong></td><td>Un record in qualsiasi tabella (es. Case)</td><td>Richiesta cliente → diventa un Case automaticamente</td></tr>
<tr><td><strong>Standard Item</strong></td><td>sc_req / sc_req_item</td><td>Ordini prodotti, accessi, richieste fisiche</td></tr>
<tr><td><strong>Order Guide</strong></td><td>Più item insieme</td><td>Richieste raggruppate (kit onboarding)</td></tr>
<tr><td><strong>Content Item</strong></td><td>Nessun record — link a URL o KB</td><td>Item informativi, FAQ</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Focus esame:</strong> Sai distinguere Record Producer (crea un Case) da Standard Item (crea sc_req_item). Le domande a scenario testano spesso quale usare.</div></div>`
        }
      },
      {
        title:{en:"Targeted Communications",it:"Comunicazioni Mirate"},
        tag:"amber",
        quiz:[
          {q:"What distinguishes Targeted Communications from a Case Digest in CSM?",opts:["Targeted Communications are automated; Case Digest is manual","Case Digest automatically updates all customers linked to a Major Case; Targeted Communications sends custom messages to a filtered segment of customers","They are the same feature with different names","Case Digest is for B2B; Targeted Communications is for B2C only"],ans:1,exp:"Case Digest is an automated broadcast to ALL customers whose cases are linked to a Major Case — no filtering. Targeted Communications lets a manager manually compose a message and filter the recipient list by criteria such as Account, product, entitlement type, or case state — giving precise control over who receives what message."},
          {q:"Where in ServiceNow CSM are Targeted Communications initiated?",opts:["Customer Service > Cases > Mass Update","Major Issue Management record > Targeted Communications related list","Service Portal > Communication Templates","Performance Analytics > Audience Segments"],ans:1,exp:"Targeted Communications are launched from the Major Issue Management record's Targeted Communications related list — or from Customer Service > Major Issue Management > select a record > Targeted Communications. This is the OOTB path."}
        ],
        body:{
          en:`<p class="theory-p"><strong>Targeted Communications</strong> is the CSM feature for sending personalised, filtered messages to specific customer segments — distinct from the automated Case Digest broadcast.</p>
<table class="info-table2"><thead><tr><th>Feature</th><th>Case Digest</th><th>Targeted Communications</th></tr></thead><tbody>
<tr><td>Trigger</td><td>Automatic (scheduled or manual from Major Case)</td><td>Manual — initiated by agent/manager</td></tr>
<tr><td>Recipients</td><td>ALL customers linked to the Major Case</td><td>Filtered segment (Account, product, tier, state…)</td></tr>
<tr><td>Message content</td><td>Standard digest template</td><td>Custom message with personalisation tokens</td></tr>
<tr><td>Use case</td><td>Mass outage update to all affected customers</td><td>Proactive notice to VIP customers only</td></tr>
<tr><td>Channel</td><td>Email (default)</td><td>Email, portal notification, or both</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Personalisation tokens:</strong> Use <code>${'$'}{first_name}</code>, <code>${'$'}{account_name}</code>, <code>${'$'}{case_number}</code> in the message body to personalise at scale. Each recipient gets a message with their own data filled in.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>Common use cases:</strong><br>
• Planned maintenance notice → filter by affected product/region<br>
• Proactive outreach to customers with open P1 cases<br>
• Renewal reminders to customers with expiring entitlements<br>
• Post-incident survey to impacted VIP Accounts</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Exam trap:</strong> If a question asks how to notify ALL customers affected by a Major Issue automatically → <strong>Case Digest</strong>. If it asks how to send a custom message to a specific subset of customers → <strong>Targeted Communications</strong>.</div></div>
<div class="pdi-box" id="pdi-tc1">
  <div class="pdi-hdr" onclick="togglePDI('pdi-tc1')"><span>🖥️</span><span class="pdi-badge">PDI Exercise</span><span class="pdi-title">Send a Targeted Communication from a Major Case</span><span class="pdi-arr">▶</span></div>
  <div class="pdi-body">
    <div class="pdi-step"><div class="pdi-num">1</div><div class="pdi-text">Open an existing <strong>Major Case</strong> record (Customer Service › Major Issue Management).</div></div>
    <div class="pdi-step"><div class="pdi-num">2</div><div class="pdi-text">Scroll to the <strong>Targeted Communications</strong> related list. Click <strong>New</strong>.</div></div>
    <div class="pdi-step"><div class="pdi-num">3</div><div class="pdi-text">Set filter criteria: Account tier = <strong>VIP</strong>. Write a message body using <code>${'$'}{first_name}</code> and <code>${'$'}{case_number}</code> tokens.</div></div>
    <div class="pdi-step"><div class="pdi-num">4</div><div class="pdi-text">Click <strong>Preview recipients</strong> to verify the filtered list, then click <strong>Send</strong>.</div></div>
    <div class="pdi-tip">💡 Compare the recipient count with the total customers on the Major Case to verify the filter worked.</div>
  </div>
</div>`,
          it:`<p class="theory-p">Le <strong>Comunicazioni Mirate</strong> sono la funzionalità CSM per inviare messaggi personalizzati e filtrati a segmenti specifici di clienti — distinte dal broadcast automatico del Case Digest.</p>
<table class="info-table2"><thead><tr><th>Caratteristica</th><th>Case Digest</th><th>Targeted Communications</th></tr></thead><tbody>
<tr><td>Trigger</td><td>Automatico (da Major Case)</td><td>Manuale — avviato da agente/manager</td></tr>
<tr><td>Destinatari</td><td>TUTTI i clienti collegati al Major Case</td><td>Segmento filtrato (Account, prodotto, tier…)</td></tr>
<tr><td>Contenuto</td><td>Template digest standard</td><td>Messaggio personalizzato con token</td></tr>
<tr><td>Caso d'uso</td><td>Aggiornamento outage a tutti i clienti impattati</td><td>Avviso proattivo solo ai clienti VIP</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola esame:</strong> Notificare TUTTI i clienti di un Major Issue automaticamente → <strong>Case Digest</strong>. Inviare un messaggio personalizzato a un sottoinsieme specifico → <strong>Targeted Communications</strong>.</div></div>`
        }
      }
    ]
  },
  {
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
  }
];
