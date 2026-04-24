// Domain 4 — Workspace, Portals & Analytics (15%)
const THEORY_D4 = {
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
};
