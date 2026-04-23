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
<div class="callout info"><span class="ci">ℹ️</span><div><strong>B2B:</strong> I clienti sono aziende. Entità principali: <strong>Account</strong> (azienda) + <strong>Contact</strong> (persona nell'azienda). Ogni Case si collega a un Account.</div></div>
<div class="callout success"><span class="ci">✅</span><div><strong>B2C:</strong> I clienti sono utenti finali privati. Entità principale: <strong>Consumer</strong> — standalone, senza Account padre. Tipico per telecomunicazioni, utilities, retail.</div></div>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola esame:</strong> <code>glide.cs.enable.b2b</code> controlla il modello. Contact DEVE avere un Account padre. Consumer NON ha Account. Non sono mai intercambiabili.</div></div>
<div class="mistake-box"><div class="mb-title">⚠️ Errori Comuni</div><ul>
  <li>Usare Contact per clienti B2C — Contact richiede un Account padre</li>
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
<div class="callout info"><span class="ci">💡</span><div><strong>Gerarchia Account:</strong> Supporta livelli illimitati. Un Account padre può avere Account figli. Case ed entitlement si associano a qualsiasi livello.</div></div>`
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
<ul class="theory-ul">
  <li><strong>Product Model:</strong> Definizione generica del prodotto — versione, categoria, SKU.</li>
  <li><strong>Install Base Item (IBI):</strong> Istanza specifica distribuita per un Account specifico. Ha numero seriale, posizione, stato.</li>
  <li><strong>CMDB CI:</strong> Link opzionale — un IBI può essere collegato a un CI CMDB, ma sono entità separate.</li>
</ul>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Esame:</strong> "Quale tabella traccia i prodotti distribuiti del cliente in CSM?" → <code>install_base_item</code>. I CMDB CI appartengono a ITSM e sono separati.</div></div>`
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
          it:`<p class="theory-p">Gli Entitlement definiscono il <em>diritto</em> di un cliente a ricevere supporto. Argomento <strong>molto testato</strong> — conosci tutti e 4 i tipi.</p>
<table class="info-table2"><thead><tr><th>Tipo</th><th>Limita per</th><th>Esempio</th><th>Parola chiave esame</th></tr></thead><tbody>
<tr><td><strong>Allocated</strong></td><td>Numero di case</td><td>50 case a trimestre</td><td>"numero di case", "limite case"</td></tr>
<tr><td><strong>Time-Based</strong></td><td>Ore di supporto</td><td>20 ore al mese</td><td>"ore di supporto", "finestra temporale"</td></tr>
<tr><td><strong>Product</strong></td><td>Prodotto acquistato</td><td>Acquisto Prod X → supporto 24/7</td><td>"acquisto prodotto", "licenza"</td></tr>
<tr><td><strong>Service</strong></td><td>Livello di servizio</td><td>Gold SLA = risposta 4 ore</td><td>"livello di servizio", "tier SLA"</td></tr>
</tbody></table>
<div class="callout info"><span class="ci">💡</span><div><strong>Entitlement Verification:</strong> Si attiva automaticamente alla creazione del case. Mostra ✅ se valido, ⚠️ se non trovato. NON blocca la creazione del case.</div></div>`
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
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Ordine regole:</strong> Numero più basso = priorità più alta. Quando più regole si abbinano, solo quella con l'ordine più basso viene eseguita.</div></div>`
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
          it:`<p class="theory-p">I Playbook guidano gli agenti attraverso percorsi di risoluzione standardizzati. Creati nel <strong>Process Automation Designer (PAD)</strong>.</p>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Trappola nome strumento:</strong> Playbook = <strong>Process Automation Designer (PAD)</strong>. NON Flow Designer. NON Workflow Editor. PAD è l'unica risposta corretta all'esame.</div></div>
<ul class="theory-ul">
  <li><strong>Lane:</strong> Definisce CHI esegue un passo — Agente, Supervisor, Sistema. Lane non assegnate bloccano il playbook.</li>
  <li><strong>Stage Transition Conditions:</strong> Controllano se la fase successiva viene attivata in base a condizioni sui dati.</li>
</ul>`
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
<ul class="theory-ul">
  <li><strong>Abilitare:</strong> CSM Properties → toggle "Create Incident from Case".</li>
  <li><strong>Field Mapping:</strong> Case Priority → Incident Urgency · Short Description → Short Description.</li>
  <li><strong>Flusso inverso:</strong> Business Rule <code>"Update Case on Incident Closure"</code> aggiorna lo stato del Case. Conosci questo nome esatto.</li>
</ul>`
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
          it:`<p class="theory-p">L'Agent Workspace è l'interfaccia principale per gli agenti CSM. L'esame testa la <strong>conoscenza della configurazione</strong>.</p>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Due framework — non confonderli:</strong><br>🔵 <strong>Agent Workspace</strong> (Next Experience) → configurato via <strong>UI Builder</strong><br>🟢 <strong>Customer Service Portal</strong> (Service Portal / AngularJS) → configurato via <strong>admin Service Portal</strong></div></div>`
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
<table class="info-table2"><thead><tr><th>Stato</th><th>SLA</th><th>Comportamento chiave</th></tr></thead><tbody>
<tr><td><strong>New</strong></td><td>In corso</td><td>Creato, non ancora assegnato</td></tr>
<tr><td><strong>Open</strong></td><td>In corso</td><td>Assegnato, agente in lavorazione</td></tr>
<tr><td><strong>Awaiting Info</strong></td><td><strong>In pausa ⏸</strong></td><td>In attesa di info dal cliente. SLA pausa configurata via Pause Conditions.</td></tr>
<tr><td><strong>Resolved</strong></td><td>Fermo</td><td>Soluzione fornita. Auto-chiusura dopo 5 giorni (configurabile).</td></tr>
<tr><td><strong>Closed</strong></td><td>—</td><td>Stato finale. La riapertura azzera il calcolo SLA.</td></tr>
</tbody></table>`
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
<table class="info-table2"><thead><tr><th>Funzionalità</th><th>Cosa fa</th><th>Attivato da</th></tr></thead><tbody>
<tr><td><strong>Case Digest</strong></td><td>Aggiorna automaticamente tutti i clienti con case figlio collegati al Major Case</td><td>Manuale o pianificato dal Major Case</td></tr>
<tr><td><strong>Targeted Communications</strong></td><td>Messaggi bulk personalizzati manuali a segmenti specifici (filtrabile)</td><td>Azione agente/manager</td></tr>
</tbody></table>
<div class="callout warn"><span class="ci">⚠️</span><div><strong>Distinzione chiave:</strong> Case Digest = aggiornamento automatico a TUTTI i clienti collegati. Targeted Communications = messaggi personalizzati manuali a clienti SEGMENTATI.</div></div>`
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
          it:`<p class="theory-p">Le domande sulle best practice seguono schemi prevedibili all'esame. Impara questi principi.</p>
<div class="callout tip"><span class="ci">💜</span><div><strong>La Sequenza d'Oro:</strong><br>
1️⃣ Definire data model → 2️⃣ Progettare entitlement → 3️⃣ Creare Case Type + Service Definition → 4️⃣ Configurare routing → 5️⃣ Rollout canali → 6️⃣ Workspace + analytics → 7️⃣ Funzionalità AI</div></div>
<ul class="theory-ul">
  <li><strong>Now Create (Agile):</strong> Sprint-based. User story: <em>"Come [ruolo], voglio [funzionalità] per [beneficio]"</em>. Corso obbligatorio nel learning path.</li>
  <li><strong>Test su PDI:</strong> Sempre testare sul Personal Developer Instance prima della produzione.</li>
  <li><strong>Delta exam:</strong> Dopo ogni major release ServiceNow per mantenere la certificazione.</li>
</ul>`
        }
      }
    ]
  }
];
