// MOCK TEST DATA - PART 1 (Tests 1-3)
// ServiceNow CIS - Customer Service Management (CSM) 2026
// Correct answers based on certified ServiceNow CSM knowledge

const MOCK_TESTS_1_3 = [
  {
    id: 'mock1',
    title: 'Mock Test 1',
    questions: 60,
    data: [
      {
        q: "Predictive Intelligence improves triage quality by eliminating the guesswork. Predictive Intelligence supports which of the following decisions (Choose two.)",
        opts: ["Case Categorization", "Case Prioritization", "Case State", "Case Escalation"],
        answer: [0, 1],
        multi: true,
        explanation: "Predictive Intelligence in CSM uses machine learning to predict Case Category and Case Priority, helping agents triage cases faster without manual guesswork. It does not directly predict Case State or trigger Case Escalation — those are governed by SLA and workflow rules, not PI models."
      },
      {
        q: "Which one is NOT a dependency for the Customer Service Plugin?",
        opts: ["Skills Management", "Task Activities", "Communities", "OpenFrame"],
        answer: 3,
        multi: false,
        explanation: "OpenFrame is a separate telephony/CTI integration framework and is NOT a dependency of the core Customer Service Management plugin. Skills Management, Task Activities, and Communities are all required plugin dependencies for CSM to function correctly out of the box."
      },
      {
        q: "With which of the following roles can a B2B and B2C customer be a consumer (Choose three.)?",
        opts: ["sn_customerservice.consumer", "sn_customerservice.case_creator", "sn_customerservice.consumer_agent", "sn_customerservice.partner"],
        answer: [0, 1, 2],
        multi: true,
        explanation: "A customer can be identified as a consumer with the consumer, case_creator, or consumer_agent roles — all three grant consumer-level access in CSM. The partner role (sn_customerservice.partner) is a distinct external role for partner companies, not a consumer role."
      },
      {
        q: "Which matching rule criteria uses field-value pairs to specify matching condition?",
        opts: ["Simple Match", "Scripted Match", "Aggregate Match", "Availability Match"],
        answer: 0,
        multi: false,
        explanation: "Simple Match criteria in Advanced Work Assignment use field-value pairs (e.g., category = 'Network') to evaluate whether a work item matches an agent's profile. Scripted Match uses script logic, Aggregate Match combines scores, and Availability Match checks agent availability windows."
      },
      {
        q: "What are the available options for defining routing of cases?",
        opts: ["Routing Rules", "Work Assignment Rules", "Assignment Groups", "Round Robin"],
        answer: [0, 1],
        multi: true,
        explanation: "In CSM, case routing can be defined using Routing Rules (which direct cases to queues based on conditions) and Work Assignment Rules (which assign cases to agents within a queue). Assignment Groups and Round Robin are not standalone routing definition mechanisms in the CSM routing framework."
      },
      {
        q: "Which is the default channel in CSM?",
        opts: ["Catalog", "Portal", "Web", "Virtual Agent"],
        answer: 2,
        multi: false,
        explanation: "The default channel value in CSM is 'Web' when a case is created through the Customer Service Portal. This channel value is automatically populated on the case form when no other specific communication channel (such as Chat, Email, or Phone) is identified as the origin."
      },
      {
        q: "Which of the following are true about Case States (Choose two.)?",
        opts: ["A case moves from Open state to Resolved state", "Initial state is Open", "Closed cases cannot be reopened", "Resolved cases can move to Closed state"],
        answer: [1, 3],
        multi: true,
        explanation: "In the OOTB CSM case state model, the initial case state is Open (not New), and cases flow from Resolved to Closed. Closed cases CAN be reopened by reverting their state, so option C is false. While Open can transition to Resolved, option A is not a uniquely true statement compared to the other correct answers."
      },
      {
        q: "What is the required format of case numbers?",
        opts: ["Sequential numeric only", "Configurable", "Alphanumeric", "Case prefix required"],
        answer: 1,
        multi: false,
        explanation: "Case numbers in ServiceNow CSM are configurable — administrators can define the prefix, starting number, and format. This flexibility allows organizations to align case numbering with their business requirements rather than being forced into a fixed format."
      },
      {
        q: "What is the purpose of Service Entitlements?",
        opts: ["Track customer purchase history", "Define what services the customer is entitled to", "Manage customer billing", "Store customer contact preferences"],
        answer: 1,
        multi: false,
        explanation: "Service Entitlements in CSM define which services, products, or support levels a customer is contractually entitled to receive. They are used to validate whether a customer can open a case for a specific service and control the support scope provided under a contract."
      },
      {
        q: "Which of the following is part of the out-of-the-box case state flow (Choose two.)?",
        opts: ["New", "Open", "Resolved", "Escalated"],
        answer: [1, 2],
        multi: true,
        explanation: "The OOTB CSM case state flow includes Open, Awaiting Info, Resolved, and Closed as base states. 'New' and 'Escalated' are not standard OOTB states in the base CSM case state model — the case begins in Open state and progresses to Resolved then Closed."
      },
      {
        q: "Case Hierarchy is used for:",
        opts: ["Grouping related cases", "Tracking parent/child relationships", "Managing case priority", "Assigning cases to agents"],
        answer: 1,
        multi: false,
        explanation: "Case Hierarchy in CSM is specifically used to track parent/child relationships between cases. This structure is fundamental to Major Issue Management, where one parent case governs multiple related child cases representing the same underlying issue affecting multiple customers."
      },
      {
        q: "Which table stores the case contacts information?",
        opts: ["sn_customerservice.contact", "sys_user", "sn_customerservice.case_contact", "itsm_contact"],
        answer: 2,
        multi: false,
        explanation: "Case contact information — the individuals associated with a specific case — is stored in the sn_customerservice.case_contact table. This is separate from the general contact record and tracks who is involved in or watching a particular case."
      },
      {
        q: "What does Case SLA control?",
        opts: ["Case response time", "Case resolution time", "Case escalation rules", "All of the above"],
        answer: 3,
        multi: false,
        explanation: "Case SLAs in CSM control response time (how quickly an agent must acknowledge the case), resolution time (how quickly the case must be resolved), and escalation rules (what happens when SLA thresholds are breached). All three are managed through SLA definitions in CSM."
      },
      {
        q: "Where are case templates defined in CSM?",
        opts: ["In the Service Catalog", "In the Case Templates table", "In the Case Configuration", "In the Case Assignment Rules"],
        answer: 1,
        multi: false,
        explanation: "Case templates are defined and stored in the Case Templates table in ServiceNow CSM. Agents and administrators can create templates that pre-populate common case fields, reducing data entry time and ensuring consistent case creation for recurring issue types."
      },
      {
        q: "Case Scoring is used to:",
        opts: ["Determine case priority", "Score customer satisfaction", "Calculate case complexity", "Assign cases to agents"],
        answer: 0,
        multi: false,
        explanation: "Case Scoring in CSM is used to determine and calculate a case's priority by scoring various case attributes (such as account tier, product criticality, or issue severity). The resulting score drives priority assignment, enabling consistent and objective prioritization without manual judgment."
      },
      {
        q: "What is the primary purpose of the Work Assignment feature?",
        opts: ["To assign cases to agents based on predefined criteria", "To create work schedules", "To track agent productivity", "To manage team hierarchies"],
        answer: 0,
        multi: false,
        explanation: "Work Assignment (Advanced Work Assignment) automatically routes and assigns cases to the most suitable agents based on predefined matching criteria such as skills, availability, and workload. It eliminates manual cherry-picking and ensures cases go to agents best equipped to handle them."
      },
      {
        q: "Which of the following are Components of Advanced Work Assignment (Choose three.)?",
        opts: ["Matching Rules", "Queue", "Assignment Groups", "Escalation Rules"],
        answer: [0, 1, 2],
        multi: true,
        explanation: "Advanced Work Assignment is built on three core components: Matching Rules (define criteria for selecting agents), Queues (hold unassigned work items), and Assignment Groups (define the pool of eligible agents). Escalation Rules are part of SLA/OLA management, not a component of AWA itself."
      },
      {
        q: "What is the purpose of Matching Rules in Advanced Work Assignment?",
        opts: ["To define the criteria for assigning work", "To route cases to the correct group", "To score agent availability", "To escalate unassigned work"],
        answer: 0,
        multi: false,
        explanation: "Matching Rules in AWA define the specific criteria used to evaluate agents and determine which agent is most suitable for a given work item. They evaluate attributes like agent skills, certifications, availability, and workload to produce a ranked list of candidates for assignment."
      },
      {
        q: "Which report shows case metrics over time?",
        opts: ["Case Summary Report", "Case Trends Report", "Case Details Report", "Case Status Report"],
        answer: 1,
        multi: false,
        explanation: "The Case Trends Report in CSM visualizes case metrics — such as volume, resolution time, and satisfaction scores — over time, enabling managers to identify patterns, spikes, and improvements. It is a key performance management tool in the CSM reporting framework."
      },
      {
        q: "Articles are available on which channels (Choose two.)?",
        opts: ["Web", "Article", "Chat", "Contacts"],
        answer: [0, 2],
        multi: true,
        explanation: "Knowledge articles are surfaced to customers on the Web channel (Customer Service Portal) and to agents during Chat interactions out of the box in CSM. 'Article' and 'Contacts' are not channel types — articles are accessible through portal and chat interfaces by default."
      },
      {
        q: "Case Automation is enabled through which feature?",
        opts: ["Business Rules", "Workflows", "Automation Engine", "Service Catalog"],
        answer: 1,
        multi: false,
        explanation: "Case Automation in CSM is enabled through Workflows (and Flow Designer in modern instances). Workflows orchestrate automated actions triggered by case events, such as sending notifications, updating fields, or creating tasks — enabling hands-off processing of routine case steps."
      },
      {
        q: "Knowledge Base entitlements can be restricted based on which criteria (Choose two.)?",
        opts: ["User role", "Customer account", "Product owned", "Service contract"],
        answer: [0, 1],
        multi: true,
        explanation: "Knowledge Base access in CSM can be restricted using User Criteria based on user roles (e.g., only certain roles can view specific KBs) and customer account associations (e.g., articles restricted to specific accounts). Product-based entitlement uses Knowledge Product Entitlements, a separate mechanism."
      },
      {
        q: "Which of the following features helps reduce case resolution time (Choose two.)?",
        opts: ["Predictive Intelligence", "Knowledge Search", "Case Templates", "Escalation Rules"],
        answer: [0, 1],
        multi: true,
        explanation: "Predictive Intelligence reduces resolution time by auto-categorizing and prioritizing cases, while Knowledge Search surfaces relevant articles to agents and customers, enabling faster self-service or agent-assisted resolution. Case Templates speed up case creation but don't directly reduce resolution time."
      },
      {
        q: "What is Case Collaboration used for?",
        opts: ["Allowing agents to work together on cases", "Tracking communication history", "Escalating cases", "Managing case assignments"],
        answer: 0,
        multi: false,
        explanation: "Case Collaboration enables multiple agents to work together on a single case, sharing notes, tasks, and updates in real time. This is particularly valuable for complex cases that require expertise from different teams or subject matter experts collaborating to find a solution."
      },
      {
        q: "Which of the following is a condition for matching rules?",
        opts: ["Switching", "Assignment", "Specific case attributes", "Agent domain"],
        answer: 2,
        multi: false,
        explanation: "Matching rule conditions in AWA are based on specific case attributes — such as category, priority, product, or customer account — that are evaluated against agent profiles to determine the best match. Generic concepts like 'Switching' or 'Agent domain' are not matching rule condition types."
      },
      {
        q: "What feature allows customers to self-serve case creation?",
        opts: ["Service Catalog", "Record Producer", "Case Form", "Portal"],
        answer: 3,
        multi: false,
        explanation: "The Customer Service Portal (Portal) is the self-service interface that allows customers to create and track their own cases without agent intervention. It provides a branded, customer-facing experience with access to knowledge, communities, and case submission capabilities."
      },
      {
        q: "Which table is used to configure case matching rules?",
        opts: ["sn_customerservice.matching_rules", "sn_customerservice.routing_rules", "sn_customerservice.assignment_rules", "sys_routing_rules"],
        answer: 1,
        multi: false,
        explanation: "Case routing and matching rules in CSM are configured in the sn_customerservice.routing_rules table, which stores the conditions and actions that determine how cases are directed to appropriate queues or agents. This table is the foundation of the CSM case routing configuration."
      },
      {
        q: "What is the benefit of using case templates?",
        opts: ["Standardize case information", "Reduce case creation time", "Ensure consistent process", "All of the above"],
        answer: 3,
        multi: false,
        explanation: "Case templates provide all three benefits simultaneously: they standardize the information captured on cases, reduce the time agents spend creating cases by pre-populating fields, and ensure a consistent process is followed for recurring case types. All options correctly describe template benefits."
      },
      {
        q: "Which CSM feature allows tagging of cases?",
        opts: ["Case Labels", "Case Tags", "Case Keywords", "Case Categories"],
        answer: 0,
        multi: false,
        explanation: "Case Labels is the specific CSM feature for tagging cases with descriptive markers. Labels allow agents and managers to group, filter, and report on cases beyond the standard category/subcategory hierarchy, providing flexible ad-hoc organization of case records."
      },
      {
        q: "What is the primary function of Queue in Work Assignment?",
        opts: ["To hold unassigned work items", "To route work items to agents", "To prioritize work items", "To archive completed work"],
        answer: 0,
        multi: false,
        explanation: "Queues in Advanced Work Assignment act as holding areas for unassigned work items — cases, chats, or other work — until an appropriate agent becomes available and is assigned the work. They are the staging mechanism between work item creation and agent assignment in the AWA pipeline."
      },
      {
        q: "Customer Service Management is available with which license types (Choose two.)?",
        opts: ["Customer Service Management", "IT Service Management", "Field Service Management", "Service Catalog Management"],
        answer: [0, 2],
        multi: true,
        explanation: "The Customer Service Management application is available with CSM licenses and Field Service Management (FSM) licenses. ITSM licenses do not include CSM — while CSM integrates with ITSM, they are separate license products. Service Catalog Management is a component, not a license type that includes CSM."
      },
      {
        q: "What is the purpose of Case Routing?",
        opts: ["To automatically direct cases to the appropriate queue or agent", "To escalate cases", "To reassign cases", "To close cases"],
        answer: 0,
        multi: false,
        explanation: "Case Routing automatically directs incoming cases to the appropriate queue or agent based on defined routing rules and conditions. This ensures cases reach the right team or individual without manual intervention, improving response times and workload distribution."
      },
      {
        q: "Which matching rule type uses business logic for matching?",
        opts: ["Simple Match", "Correlation", "Scripted Match", "Aggregate Match"],
        answer: 2,
        multi: false,
        explanation: "Scripted Match in AWA uses custom GlideScript business logic to evaluate whether a case matches an agent, enabling complex matching scenarios that cannot be expressed through simple field-value pairs. This gives administrators maximum flexibility for advanced assignment requirements."
      },
      {
        q: "What does the Due Date field in a case represent?",
        opts: ["Case creation date", "Expected date case should be resolved", "Date case was last updated", "Date agent was assigned"],
        answer: 1,
        multi: false,
        explanation: "The Due Date field on a CSM case represents the expected date and time by which the case should be resolved. It is typically driven by the SLA definition and is used by agents and managers to track whether cases are on track to meet their resolution commitments."
      },
      {
        q: "Multiple active configurations in OpenFrame support which scenario?",
        opts: ["Multi-brand support", "Multiple integration points", "Concurrent case processing", "Load balancing"],
        answer: 0,
        multi: false,
        explanation: "Having multiple active OpenFrame configurations in CSM supports multi-brand support scenarios, where different brand identities or service lines need distinct telephony/CTI configurations. Each configuration can be associated with a specific assignment group, enabling brand-specific call handling."
      },
      {
        q: "What information does the Asset module track?",
        opts: ["Financial contractual and inventory information of assets", "Tracking products or services customers are using", "Tables in the Asset application", "A set of business activities and processes used to track assets"],
        answer: 0,
        multi: false,
        explanation: "The Asset module in ServiceNow tracks the financial information (cost, depreciation), contractual information (leases, warranties), and inventory information (location, quantity, status) of assets throughout their lifecycle. This distinguishes it from CI tracking in the CMDB, which focuses on operational relationships."
      },
      {
        q: "Which of the following is part of the Asset module functionality?",
        opts: ["Financial contractual and inventory information of assets", "Tracking products or services customers are using", "Tables in the Asset application", "A set of business activities and processes used to track assets"],
        answer: 0,
        multi: false,
        explanation: "The Asset module functionality is centered on tracking financial, contractual, and inventory information for assets. This includes purchase cost, depreciation schedules, maintenance contracts, warranty expiry, and physical inventory details — providing a complete financial and operational picture of each asset."
      },
      {
        q: "What are the Critical Success Factors that are related to CSM Suite Implementations (Choose four.)",
        opts: ["Define the Business Pain Points", "Implementation is only as good as the underlying process", "Provide consistent service to customers", "Define the number of hours needed to develop the associated requirements", "Have a clear understanding of the use cases"],
        answer: [0, 1, 2, 4],
        multi: true,
        explanation: "The four CSFs for CSM implementations are: Define Business Pain Points (understand what problems you are solving), Implementation is only as good as the underlying process (bad processes yield bad outcomes), Provide consistent service to customers (standardize service delivery), and Have a clear understanding of use cases (know what scenarios the system must support). Defining development hours is a project planning task, not a CSF."
      },
      {
        q: "What are the conditions that matching rules are based on (Choose two.)",
        opts: ["Agent resources best suited to work on a case", "Specific routing rules", "Filters set up in advanced work assignment", "Specific case attributes"],
        answer: [0, 3],
        multi: true,
        explanation: "Matching rules evaluate two types of conditions: the agent resources best suited for the work (skills, certifications, availability) and specific case attributes (category, priority, product, account). Together these two dimensions ensure the right case reaches the right agent."
      },
      {
        q: "Special Handling Notes can apply to which one of the following based on specific attributes?",
        opts: ["Contact", "Holiday", "Domain", "VIP"],
        answer: 0,
        multi: false,
        explanation: "Special Handling Notes in CSM are applied to records such as Contacts (and also Accounts and Products) based on their specific attributes. When an agent opens a case for a contact with an active Special Handling Note, the note is surfaced automatically to alert the agent of important handling instructions."
      },
      {
        q: "The ServiceNow Communities feature is only available for customers with ServiceNow Customer Services Management licenses.",
        opts: ["True", "False"],
        answer: 1,
        multi: false,
        explanation: "This statement is False. Communities is available to any ServiceNow customer who holds a Community license — it is not exclusively tied to the CSM license. Organizations using other ServiceNow products can also purchase and activate the Communities capability independently."
      },
      {
        q: "Agents and managers cannot create knowledge articles from Community questions.",
        opts: ["True", "False"],
        answer: 1,
        multi: false,
        explanation: "This statement is False. In ServiceNow CSM, agents and managers can create knowledge articles directly from Community questions and discussions. This capability supports the KCS (Knowledge-Centered Service) methodology by turning community-identified knowledge gaps into formal, reusable knowledge articles."
      },
      {
        q: "What is the equivalent of NOT selecting any group when configuring multiple active configurations of OpenFrame?",
        opts: ["Selecting none of the groups", "Selecting all the groups", "Misconfigured", "Missing configuration"],
        answer: 1,
        multi: false,
        explanation: "In OpenFrame multi-configuration setup, leaving the group field empty (not selecting any group) is equivalent to selecting ALL groups — meaning that configuration will apply to every assignment group. Selecting specific groups restricts the configuration to only those selected groups."
      },
      {
        q: "Which Business Rules are part of the Customer Service Management baseline configuration (Choose two.)",
        opts: ["Change Update to Close", "Update Case Entitlement", "Apply Role by Customer", "Auto Assessment"],
        answer: [1, 2],
        multi: true,
        explanation: "The two baseline CSM business rules are 'Update Case Entitlement' (which automatically updates entitlement information on a case based on account and product) and 'Apply Role by Customer' (which applies appropriate roles based on the customer record). These are OOTB and should not be modified without careful consideration."
      },
      {
        q: "Articles can provide the following (Choose three.)",
        opts: ["Information about customer's service contract", "Share product information", "Document current and known issues", "Provide answers and responses to common issues or questions"],
        answer: [1, 2, 3],
        multi: true,
        explanation: "Knowledge articles in CSM serve three key purposes: sharing product information (features, specifications, how-to guides), documenting current and known issues (known error articles), and providing answers to common questions (FAQ-style content). Service contract information is managed through Entitlements, not knowledge articles."
      },
      {
        q: "ACME corporation wants to use ServiceNow CSM for supporting their customers through Twitter. What CSM entity would you recommend ACME to store the customer's Twitter profile details?",
        opts: ["Account", "Not supported", "Social Profile", "Consumer", "Personnel File"],
        answer: 2,
        multi: false,
        explanation: "Social Profile is the CSM entity designed to store customer social media account details, including Twitter/X handles and associated profile information. When a customer interacts via social channels, their social identity is linked to their Social Profile record, which is then associated with their Contact or Consumer record."
      },
      {
        q: "What is the purpose of the Guided Decisions capability?",
        opts: ["Dynamically guide agents to help resolve complex cases", "Provide agents with an escalation guide", "Provide agents with a knowledge guide", "Guide agents through account management"],
        answer: 0,
        multi: false,
        explanation: "Guided Decisions dynamically walks agents through decision trees and resolution steps for complex or multi-step cases. Based on the agent's inputs at each step, the system guides them to the next appropriate action, ensuring a consistent and thorough resolution process for complicated case types."
      },
      {
        q: "Access to a Knowledge base or Article can be restricted based on a customer's assets and the product models using which of the following (Choose two.)",
        opts: ["Data Policy", "ACL", "User Criteria", "Knowledge Product Entitlements"],
        answer: [2, 3],
        multi: true,
        explanation: "Knowledge access based on customer assets and product models is controlled through User Criteria (which evaluates user attributes to grant or restrict access) and Knowledge Product Entitlements (which link knowledge articles to specific products a customer owns). ACLs are too broad and Data Policies govern field behavior, not KB access."
      },
      {
        q: "Which of the following roles cannot update a consumer's record?",
        opts: ["sn_customerservice_manager", "sn_customerservice_agent", "sn_customerservice.consumer_agent", "admin"],
        answer: 1,
        multi: false,
        explanation: "The standard sn_customerservice_agent role does not have permission to update consumer records. Consumer records require the consumer_agent (sn_customerservice.consumer_agent) role, the customer service manager role, or system admin access. Regular agents can view cases but cannot modify the underlying consumer profile."
      },
      {
        q: "Contextual Search framework is used for providing Knowledge search results in which of these scenarios?",
        opts: ["Record Producer only", "Entering question in portal only", "Both portal question entry and Record Producer", "None of the above"],
        answer: 2,
        multi: false,
        explanation: "The Contextual Search framework in CSM provides knowledge article search results in both scenarios: when a customer types a question in the Customer Service Portal and when a user fills out a Record Producer form. In both cases, relevant articles are surfaced automatically to deflect case creation."
      },
      {
        q: "How many outbound email accounts are supported in Customer Service Management?",
        opts: ["Unlimited", "Two", "One", "One per business service"],
        answer: 2,
        multi: false,
        explanation: "CSM supports only one outbound email account out of the box. This single account is used for all outbound case-related email communications. Organizations requiring multiple outbound email addresses for different brands or services would need custom configuration beyond the OOTB setup."
      },
      {
        q: "Which are the key self-service functions of the Customer Support Portal (Choose three.)",
        opts: ["Community", "Open An Incident", "Service Catalog", "Knowledge Base"],
        answer: [0, 2, 3],
        multi: true,
        explanation: "The Customer Service Portal's three core self-service functions are Community (peer-to-peer support and discussion forums), Service Catalog (submitting service requests), and Knowledge Base (searching for answers). 'Open An Incident' is an ITSM concept; customers open Cases, not Incidents, through the CSM portal."
      },
      {
        q: "The Customer Support Portal default configuration provides the following channels to interact with customers (Choose two.)",
        opts: ["Web", "Chat", "Email", "Social"],
        answer: [0, 1],
        multi: true,
        explanation: "The default Customer Service Portal configuration provides Web (for portal-based case submission and browsing) and Chat (for real-time agent interaction) as the two default interaction channels. Email and Social channels require additional configuration and are not enabled by default in the OOTB portal setup."
      },
      {
        q: "Match the business rule to its function in the Self-Service Portal.",
        opts: [
          "Display rule - After registration request submittal, shows info message to user; Display request message - Shows message to remind users to enter a correct registration code; validate_registration - Validates registration code and assigns account based on the registration code; Update account based on reg code - Checks if the registration is valid based on the user's email address",
          "Display request message - After registration request submittal, shows info message to user; Display rule - Shows message to remind users to enter a correct registration code; validate_registration - Validates registration code and assigns account based on the registration code; Update account based on reg code - Checks if the registration is valid based on the user's email address",
          "Update account based on reg code - After registration request submittal, shows info message to user; validate_registration - Shows message to remind users to enter a correct registration code; Display request message - Validates registration code and assigns account based on the registration code; Display rule - Checks if the registration is valid based on the user's email address",
          "Display request message - After registration request submittal, shows info message to user; Display rule - Shows message to remind users to enter a correct registration code; Update account based on reg code - Validates registration code and assigns account based on the registration code; validate_registration - Checks if the registration is valid based on the user's email address"
        ],
        answer: 1,
        multi: false,
        explanation: "The correct matching is: Display request message shows the info message after registration submittal; Display rule reminds users to enter a valid registration code; validate_registration validates the code and assigns account; Update account based on reg code checks the email for registration validity. Option B correctly maps all four business rules to their functions."
      },
      {
        q: "If the CSM Demo Data Plugin has been installed, what are two options either of which will prepare that instance to be used as part of the release path to production (Choose two.)",
        opts: ["Disable the Case Interceptor", "Zboot the instance", "Remove the Demo Data via a HI Request", "Clone back to this instance from a valid instance"],
        answer: [1, 3],
        multi: true,
        explanation: "When demo data has been installed on an instance intended for production use, it must be removed cleanly. The two valid approaches are: Zboot the instance (which wipes it clean and reinstalls fresh) or clone back from a valid clean instance that never had demo data. Disabling interceptors or submitting HI requests does not adequately clean demo data."
      },
      {
        q: "Which of the following are true regarding the Community Portal application (Choose two.)",
        opts: ["It is available to any customer with a Community license", "Most of the configuration does not require System Administrator role", "It is available by default with the Support and Service portals", "It is only available to CSM license holders"],
        answer: [0, 2],
        multi: true,
        explanation: "Two true statements about the Community Portal: it is available to any customer holding a Community license (not exclusively CSM license holders), and it is available by default with the Support and Service portals. Most Community configuration does require System Administrator role, making option B false."
      },
      {
        q: "Information about a customer's service contract is found in Knowledge.",
        opts: ["True", "False"],
        answer: 1,
        multi: false,
        explanation: "This statement is False. Service contract information in CSM is stored and managed in Service Contracts and Entitlements, not in Knowledge. Knowledge articles contain support content like how-to guides and known issues. Mixing contract data into knowledge would create data governance and access control problems."
      },
      {
        q: "Which social media channels are NOT available out-of-box?",
        opts: ["Facebook", "All of the above", "LinkedIn", "Twitter", "None of the above"],
        answer: 2,
        multi: false,
        explanation: "LinkedIn is NOT available as an OOTB social channel in ServiceNow CSM. ServiceNow provides out-of-box integration with Facebook and Twitter/X. LinkedIn integration would require custom development or a third-party connector, making it the correct answer for a channel that is NOT available OOTB."
      },
      {
        q: "From a service provider's perspective, is the following a product or an asset? A cable modem model that the service provider sells.",
        opts: ["Product", "Asset"],
        answer: 0,
        multi: false,
        explanation: "From a service provider's perspective, a cable modem model that is sold to customers is a Product — it represents a product offering in the catalog. An Asset is a specific instance of that product that has been sold to and is deployed for a particular customer. The model/type is a Product; the individual deployed unit is an Asset."
      },
      {
        q: "Users with the sn_customerservice.proxy_contact role can do which of the following (Choose two.)",
        opts: ["Create requests on behalf of customers", "Manage requests on behalf of customer service agents", "Manage major incident communication on behalf of a customer service manager", "Manage cases on behalf of customer service agents", "Create cases on behalf of customers"],
        answer: [0, 4],
        multi: true,
        explanation: "The proxy_contact role is designed for employees (such as account managers) who need to act on behalf of customers. Specifically, it allows them to create service requests on behalf of customers and create cases on behalf of customers. This role does not grant access to manage agent workflows or major incident communications."
      }
    ]
  },
  {
    id: 'mock2',
    title: 'Mock Test 2',
    questions: 60,
    data: [
      {
        q: "Which role must B2B and B2C customers obtain at a minimum to access a ServiceNow instance?",
        opts: ["Customer sn_customerservice.customer", "Case Creator sn_customerservice.case_creator", "External snc_external", "Account Contact sn_customerservice.account_contact"],
        answer: 2,
        multi: false,
        explanation: "External customers — both B2B and B2C — must have at minimum the snc_external role to gain access to a ServiceNow instance. This base role grants just enough access to log in and use external-facing portals. All other CSM customer roles are additive on top of snc_external."
      },
      {
        q: "The assignment workbench uses configurable matching criteria to evaluate agents in a selected group and provide an overall ranking. Which criteria types are available? Choose three.",
        opts: ["Simple Match", "Availability", "Scripted", "Correlation", "Aggregate"],
        answer: [0, 1, 4],
        multi: true,
        explanation: "The Assignment Workbench supports three criteria types for evaluating agents: Simple Match (field-value pair conditions), Availability (agent schedule and capacity), and Aggregate (combined scoring). Scripted is a matching rule type in AWA but not an Assignment Workbench criteria type. Correlation is not a valid criteria type."
      },
      {
        q: "What are the three main components of Proactive Customer Service Operations? Choose three.",
        opts: ["Service Monitoring", "Service Aware CMDB", "Proactive Prevention", "Service Aware Install Base", "Proactive Case", "Service Reporting"],
        answer: [1, 3, 4],
        multi: true,
        explanation: "Proactive Customer Service Operations (CSO) is built on three components: Service Aware CMDB (links services to CIs for impact analysis), Service Aware Install Base (tracks customer-owned products/services), and Proactive Case (automatically creates cases when service events are detected). Service Monitoring and Reporting are separate capabilities."
      },
      {
        q: "What are the types of matching criteria for Customer Service? Choose four.",
        opts: ["Certifications", "Last Assigned", "Availability Today", "Distance", "Matching Skills", "Assigned Cases"],
        answer: [0, 1, 2, 4],
        multi: true,
        explanation: "The four matching criteria types available in CSM are Certifications (agent qualifications), Last Assigned (affinity with previously handled cases), Availability Today (agent's current availability), and Matching Skills (skill alignment with case requirements). Distance is used in FSM/Field Service, and Assigned Cases is a workload metric, not a criteria type."
      },
      {
        q: "Which roles are considered external? Choose two.",
        opts: ["Customer Service Agent sn_customerservice_agent", "Customer Admin sn_customerservice.customer_admin", "Consumer Support Agent sn_customerservice.consumer_agent", "Partner Admin sn_customerservice.partner_admin"],
        answer: [1, 3],
        multi: true,
        explanation: "External roles in CSM are those assigned to customers and partners — not internal ServiceNow agents. Customer Admin (sn_customerservice.customer_admin) and Partner Admin (sn_customerservice.partner_admin) are external roles granted to customer/partner organization administrators. Agent and consumer_agent roles are internal-facing fulfiller roles."
      },
      {
        q: "What is the default value in the Channel field when a new case is opened by a customer in the Service Catalog using the Customer Service Portal?",
        opts: ["Catalog", "Portal", "Web", "Virtual Agent"],
        answer: 2,
        multi: false,
        explanation: "When a case is created through the Service Catalog on the Customer Service Portal, the Channel field defaults to 'Web'. This is the standard OOTB default channel value for portal-originated cases, regardless of whether the customer used a catalog item, record producer, or direct case form."
      },
      {
        q: "As an agent you can report a knowledge gap if you cannot find relevant articles. Which action is required to create the knowledge gap?",
        opts: ["Document the gap in case work notes and escalate the case", "Use the Create Knowledge button on the case form to report a knowledge gap", "Use Related Links on the case form to report a knowledge gap", "Post a question in a Customer Service Management knowledge base"],
        answer: 2,
        multi: false,
        explanation: "In ServiceNow CSM, agents report knowledge gaps by using the Related Links section on the case form. This action creates a formal knowledge gap record that is routed to knowledge managers for review and article creation, supporting the KCS methodology of capturing knowledge at the point of need."
      },
      {
        q: "External customers can approve which of the following in relation to cases via the portals?",
        opts: ["Problem Records and Escalations", "Change Records and Request Records", "Request Records and Escalations", "Problem Records and Incident Records"],
        answer: 1,
        multi: false,
        explanation: "External customers can approve Change Records and Request Records through the Customer Service Portal. This integration allows customers to participate in change approval workflows and approve service requests without needing internal system access, using their portal credentials."
      },
      {
        q: "Name a security benefit gained from using scoped applications.",
        opts: ["Limits the number of update sets that can be applied", "Prevents third party integrations", "Prevents changes to tables without explicit permission from IT", "Limits accessibility to other applications in the instance"],
        answer: 3,
        multi: false,
        explanation: "A key security benefit of scoped applications is that they limit accessibility to other applications within the instance — a scoped app can only access resources and APIs it has been explicitly granted permission to use. This containment prevents unauthorized cross-application data access and reduces the blast radius of any security issue."
      },
      {
        q: "What happens to a case whenever the state of an associated IT Service Management record is updated?",
        opts: ["The case action status changes to Related Task Updated", "The case escalates to an assignment group as defined in the default escalation template", "The case displays a special handling note highlighting the update", "The case work notes are updated automatically"],
        answer: 0,
        multi: false,
        explanation: "When an associated ITSM record (such as an Incident, Problem, or Change) has its state updated, the CSM case action status automatically changes to 'Related Task Updated'. This visual indicator on the case form alerts the agent that something has changed in the linked ITSM record without requiring them to navigate away."
      },
      {
        q: "During which Now Create stage are workshops conducted?",
        opts: ["Close", "Initiate", "Execute", "Deliver", "Plan"],
        answer: 2,
        multi: false,
        explanation: "In the Now Create implementation methodology, workshops are conducted during the Execute stage. The five Now Create stages are Initiate, Plan, Execute, Deliver, and Close — and Execute is where the bulk of the implementation work, including design workshops, configuration, and testing, takes place."
      },
      {
        q: "From which can an agent create a CSM Case?",
        opts: ["Human Resource Application", "Incident Management", "Chat", "Special Handling Note"],
        answer: 2,
        multi: false,
        explanation: "Agents can create a CSM Case directly from a Chat interaction. When a customer contacts support via chat, the agent handling the conversation can convert or create a case from within the chat interface, ensuring continuity between the real-time interaction and the formal case record."
      },
      {
        q: "Application scoping brings which security benefits? Choose two.",
        opts: ["Improves instance security by limiting access to other applications on the instance", "Scoping holds records and acts as a container for desired applications", "Scoped applications limit autonomy and control of all aspects of the CSM application", "Scoped applications prevent versioning for complex instances"],
        answer: [0, 1],
        multi: true,
        explanation: "Application scoping improves security in two key ways: it limits a scoped app's access to other applications on the instance (isolation), and it holds records as a container for the application's components (encapsulation). These two properties together protect both the CSM app and the rest of the instance from cross-contamination."
      },
      {
        q: "When Proactive Customer Service Operations is implemented, which additional entitlement fields could be used? Choose two.",
        opts: ["Configuration Item", "Contact", "Business Service", "Sold product", "Install base item"],
        answer: [2, 4],
        multi: true,
        explanation: "With Proactive CSO enabled, two additional fields become available for entitlement configuration: Business Service (linking the entitlement to a specific service in the CMDB) and Install Base Item (linking it to a specific customer-installed product instance). These enable service-aware entitlement checking beyond standard account/contract entitlements."
      },
      {
        q: "What types of escalation templates can be created? Choose two.",
        opts: ["Sold Product", "Case", "Consumer", "Account"],
        answer: [1, 3],
        multi: true,
        explanation: "CSM supports two types of escalation templates: Case escalation templates (which define escalation actions at the individual case level) and Account escalation templates (which define escalation actions for all cases associated with a specific account). These templates automate the escalation process with predefined notifications and assignments."
      },
      {
        q: "What is a case?",
        opts: ["An individual record used to identify and create automation opportunities", "An individual record that handles and routes issues for internal users", "An individual record that handles and resolves incidents for external customers", "An individual record used to identify and resolve a question or issue for an external customer"],
        answer: 3,
        multi: false,
        explanation: "A case in ServiceNow CSM is formally defined as an individual record used to identify and resolve a question or issue for an external customer. This distinguishes it from an Incident (which serves internal users) and highlights that cases are customer-facing service records managed through the CSM application."
      },
      {
        q: "Users with the System Administrator role can define which account relationship types? Choose two.",
        opts: ["Customer to Consumer", "Account to account", "Partner to customer", "Partner to account", "Account to customer"],
        answer: [1, 3],
        multi: true,
        explanation: "System Administrators can define Account-to-Account relationships (peer relationships between customer accounts) and Partner-to-Account relationships (defining which partner organizations support which customer accounts). These relationship types enable the account hierarchy and partner ecosystem modeling in CSM."
      },
      {
        q: "What does the Agent Whisper function do?",
        opts: ["Lets agents have chat conversations with other agents without the requester knowing", "Lets agents and chat supervisors have a conversation without the requester knowing", "Lets chat supervisors have a conversation with the requester without the agent knowing", "Lets agents and requesters have a conversation without the chat supervisor knowing"],
        answer: 1,
        multi: false,
        explanation: "Agent Whisper in CSM chat allows agents and their supervisors to communicate privately within a chat session without the customer seeing the messages. This enables real-time coaching and guidance from supervisors while the agent continues to assist the customer in the same chat window."
      },
      {
        q: "Who can create a customer service case from a community discussion? Choose two.",
        opts: ["Partner sn_customerservice.partner", "Proxy case creator sn_customerservice.proxy_case_creator", "Case Viewer sn_customerservice.case_viewer", "Customer service agent sn_customerservice_agent"],
        answer: [1, 3],
        multi: true,
        explanation: "Cases can be created from community discussions by Proxy Case Creators (sn_customerservice.proxy_case_creator), who act on behalf of customers, and Customer Service Agents (sn_customerservice_agent), who can identify unresolved community questions and formalize them as cases. Partners and Case Viewers do not have this capability OOTB."
      },
      {
        q: "What is a supported external customer that sells to and supports one or more customers?",
        opts: ["Contact", "Consumer", "Account", "Partner"],
        answer: 3,
        multi: false,
        explanation: "A Partner in CSM is a supported external entity (company or organization) that sells products/services to and provides support for one or more end customers. Partners occupy a unique position in the CSM model — they are both customers of the service provider and providers of service to their own customers."
      },
      {
        q: "Which knowledge records can be configured with User Criteria?",
        opts: ["Knowledge Base", "Knowledge Base and Category", "Knowledge Base Category and Article", "Knowledge Base and Article"],
        answer: 3,
        multi: false,
        explanation: "User Criteria in ServiceNow can be applied to Knowledge Base records and to individual Knowledge Article records. This allows administrators to control who can read, contribute to, or manage specific knowledge bases and articles based on user attributes such as role, group, location, or company."
      },
      {
        q: "Based on which out of box attributes can Special Handling Notes be applied to cases? Choose three.",
        opts: ["Contact", "Account", "Service Contract", "Product", "Install Base Item"],
        answer: [0, 1, 3],
        multi: true,
        explanation: "Out of the box, Special Handling Notes can be configured and applied based on three record types: Contact (specific customer individuals), Account (entire customer organizations), and Product (specific products). When a case involves any of these with an active Special Handling Note, the note is surfaced to the agent automatically."
      },
      {
        q: "Which ServiceNow applications can be integrated out of the box with CSM? Choose three.",
        opts: ["Project Management", "DevOps", "Risk Management", "Service Portfolio Management", "ITOM Event Management"],
        answer: [1, 3, 4],
        multi: true,
        explanation: "CSM has OOTB integrations with DevOps (linking customer-reported bugs to development pipelines), Service Portfolio Management (aligning service offerings with customer contracts), and ITOM Event Management (enabling proactive case creation from monitoring alerts). Project Management and Risk Management require custom integration work."
      },
      {
        q: "ALL external sources must be what for external content integration?",
        opts: ["WebDAV compliant", "Web configurable", "WebDAV versioned", "Web based"],
        answer: 0,
        multi: false,
        explanation: "For external content to be integrated with ServiceNow's knowledge management, all external content sources must be WebDAV (Web Distributed Authoring and Versioning) compliant. WebDAV is the protocol used to connect external repositories like SharePoint or network file systems to ServiceNow for knowledge article sourcing."
      },
      {
        q: "What is the purpose of the Deactivate Special Handling Notes Scheduled Job?",
        opts: ["Runs weekly and requires Active unchecked so notes are deleted by end of week", "Runs at the end of the month and deactivates all Special Handling notes more than 30 days old", "Runs on demand by System Admin with weekly schedules and only priority one critical deactivated", "Runs daily at midnight checks all active alerts and sets status to Expired for those that reached expiration date"],
        answer: 3,
        multi: false,
        explanation: "The Deactivate Special Handling Notes scheduled job runs automatically every day at midnight. It evaluates all active Special Handling Notes and sets the status of any that have passed their expiration date to 'Expired', ensuring outdated handling instructions are no longer surfaced to agents without manual cleanup intervention."
      },
      {
        q: "What role can be assigned to employees who are not fulfillers but need to create cases on behalf of customers?",
        opts: ["External snc_external", "Consumer sn_customerservice.consumer", "Customer sn_customerservice.customer", "Proxy Contact sn_customerservice.proxy_contact"],
        answer: 3,
        multi: false,
        explanation: "The Proxy Contact role (sn_customerservice.proxy_contact) is specifically designed for internal employees who are not customer service agents but need to create and manage cases on behalf of customers. This is common for account managers or sales representatives who handle customer requests directly."
      },
      {
        q: "What is the specific type of catalog item that allows users to create task based records such as case records from the Service Catalog?",
        opts: ["Record Producer", "Case Template", "Catalog Processor", "Request Item"],
        answer: 0,
        multi: false,
        explanation: "A Record Producer is the specific Service Catalog item type that creates task-based records (such as cases, incidents, or change requests) when submitted. Unlike standard catalog items which create request/requested items, Record Producers directly generate the specified task record type defined in the producer configuration."
      },
      {
        q: "When activating the Customer Service Management Demo Data plugin, which case type is available besides product case?",
        opts: ["Request", "Billing", "Order", "FAQ", "Contract", "Monitoring"],
        answer: 1,
        multi: false,
        explanation: "The CSM Demo Data plugin adds a 'Billing' case type in addition to the standard Product case type. This demo data illustrates how CSM can handle different categories of customer issues, with Billing cases representing financial disputes and inquiries as a second distinct case type in the demo environment."
      },
      {
        q: "The default configuration automatically closes resolved cases after how many days?",
        opts: ["Cases are not automatically closed by default", "3 days", "10 days", "5 days"],
        answer: 1,
        multi: false,
        explanation: "The OOTB CSM configuration automatically closes resolved cases after 3 days if the customer has not responded or re-opened the case. This is managed by the 'Auto Close Resolved Cases' Flow Designer flow, which sends a reminder and then closes the case after the 3-day window expires."
      },
      {
        q: "When the Virtual Agent plugin is installed, NLU is activated but not available until what two configurations are completed? Choose two.",
        opts: ["Configure the entity confidence threshold", "Choose the NLU service provider", "Configure the intent confidence threshold", "Enable NLU in Virtual Agent"],
        answer: [1, 3],
        multi: true,
        explanation: "After installing the Virtual Agent plugin, NLU (Natural Language Understanding) requires two configuration steps before it becomes operational: selecting the NLU service provider (such as ServiceNow NLU, IBM Watson, or others) and enabling NLU within the Virtual Agent settings. Without both steps completed, NLU remains inactive."
      },
      {
        q: "What feature does the Product Model and Catalog Items Relationship plugin enable?",
        opts: ["Managers can track financial cost of subscribed services and related requests", "It provides a contextual service catalog based on the customer subscribed services", "Consumers can track products they purchased via the catalog", "Agents are automatically proposed catalog items related to the chosen product on the case form"],
        answer: 3,
        multi: false,
        explanation: "The Product Model and Catalog Items Relationship plugin creates a link between product models and service catalog items. When an agent selects a product on a case form, the plugin automatically surfaces related catalog items (such as repair services, upgrades, or accessories) that are associated with that product model."
      },
      {
        q: "What are some influencing factors that help determine the type of customer support desk structure required? Choose four.",
        opts: ["Number of customer service portals used", "Knowledge and skills required for agents", "Geographical location of customer", "Languages spoken by agents", "Number of agents required", "Number and type of support tools available"],
        answer: [1, 2, 3, 4],
        multi: true,
        explanation: "Four key factors that shape support desk structure are: agent knowledge and skills required (determines specialization), geographical location of customers (drives time zone and regional coverage needs), languages spoken by agents (enables multilingual support), and number of agents required (determines team scale and management structure). Portal count and tools available are secondary considerations."
      },
      {
        q: "Which role would allow a user to create contacts?",
        opts: ["Customer sn_customerservice.customer", "Customer admin sn_customerservice.customer_admin", "Customer account manager sn_customerservice.customer_account_manager", "Customer case manager sn_customerservice.customer_case_manager"],
        answer: 1,
        multi: false,
        explanation: "The Customer Admin role (sn_customerservice.customer_admin) grants external customers the ability to create, view, and manage contacts within their own account. This allows customer organization administrators to onboard new team members and manage their account's contact roster without internal agent assistance."
      },
      {
        q: "How can multiple service catalogs be made available on the Customer Service Portal?",
        opts: ["Only the Customer Service service catalog can be used on the Customer Service Portal", "Add them to the list of service catalogs in the Customer Service Portal header widget options", "Include them in the list of service catalogs on the Customer Service Portal record", "Create user criteria for each applicable service catalog"],
        answer: 2,
        multi: false,
        explanation: "To make multiple service catalogs available on the Customer Service Portal, administrators include them in the list of service catalogs on the Customer Service Portal record itself. This configuration field on the portal record defines which catalogs are accessible, enabling multi-catalog support without requiring separate portal instances."
      },
      {
        q: "What feature filters records in CSM related tables accessible by users with CSM roles and makes custom business logic unnecessary?",
        opts: ["Access Types", "CSM Query Rules", "Filtered Lists", "Data Policies"],
        answer: 1,
        multi: false,
        explanation: "CSM Query Rules automatically filter the records that CSM role holders can see in CSM-related tables based on their account and relationship context. This OOTB mechanism ensures customers only see their own cases, accounts, and contacts without requiring custom ACLs or business rules to be written for each table."
      },
      {
        q: "Which application must be activated to enable customers to check in online for future appointments?",
        opts: ["Walk Up Experience", "Business Location", "Service Organization", "Field Service Management"],
        answer: 0,
        multi: false,
        explanation: "The Walk Up Experience application enables customers to check in online for future in-person appointments at service locations. When activated, it provides a self-service check-in interface that integrates with scheduling and queue management, reducing wait times and improving the in-person service experience."
      },
      {
        q: "Which asset classes are used? (Choose 4)",
        opts: ["Facility assets", "Consumables assets", "Software license assets and enterprise software assets", "Configuration assets", "Network assets", "Hardware assets"],
        answer: [1, 2, 4, 5],
        multi: true,
        explanation: "The four asset classes in ServiceNow Asset Management are Consumables (items consumed during use), Software Licenses (software entitlements and subscriptions), Network Assets (networking equipment), and Hardware Assets (physical computing devices). Facility assets and Configuration assets are not standard asset class categories in the ServiceNow asset model."
      },
      {
        q: "Which child case states would cause parent-child case synchronization to fail? Choose three.",
        opts: ["New", "Cancelled", "Closed", "Resolved", "Awaiting Info", "In Progress"],
        answer: [1, 2, 3],
        multi: true,
        explanation: "Parent-to-child case synchronization fails when child cases are in terminal or completed states: Cancelled, Closed, and Resolved. These states indicate the child case is no longer active, so pushing updates from the parent would be inappropriate and potentially corrupt the case history. Active states like New, Awaiting Info, and In Progress support synchronization."
      },
      {
        q: "Which option best describes how the CSM application uses the Asset table?",
        opts: ["ServiceNow uses the same Asset table for both CSM and ITSM however CSM has a different subset of fields", "CSM uses the Product table instead of the ITSM Asset table", "CSM uses different Asset tables than ITSM", "CSM uses the Product Model table instead of the ITSM Asset table"],
        answer: 0,
        multi: false,
        explanation: "CSM and ITSM share the same underlying Asset table (alm_asset) in ServiceNow. However, CSM uses a different subset of fields than ITSM — CSM focuses on customer-facing fields like owned-by contact and account, while ITSM emphasizes IT operations fields. The shared table enables cross-domain asset visibility with role-appropriate field sets."
      },
      {
        q: "What are the different resource matching methods on the Matching Rule form? Choose four.",
        opts: ["Scripted", "History", "Simple", "Advanced", "Skill", "Selection Criteria"],
        answer: [0, 2, 4, 5],
        multi: true,
        explanation: "The four resource matching methods available on the Matching Rule form are: Scripted (custom script-based logic), Simple (field-value pair conditions), Skill (matches based on agent skills), and Selection Criteria (rule-based selection using multiple criteria). History and Advanced are not matching method types on the Matching Rule form."
      },
      {
        q: "Which are benefits of customer access management? Choose two.",
        opts: ["It defaults responsibility for access management to the customer", "It increases security by providing access based on account hierarchy", "It defaults responsibility for access management to the customer service agent", "It increases automation by granting access to cases based on access to sold product", "It improves customer experience by enabling related parties to track and collaborate on cases"],
        answer: [1, 4],
        multi: true,
        explanation: "Customer access management in CSM provides two key benefits: it increases security by enforcing access controls based on the account hierarchy (customers only see what they are entitled to see), and it improves customer experience by allowing related parties within the same account hierarchy to track and collaborate on cases together."
      },
      {
        q: "Agent Affinity enhances Advanced Work Assignment by adding additional agent details organized by affinity type. Which are these affinity types? Choose three.",
        opts: ["Product expertise", "Historical", "Related task", "Skill seniority", "Account team responsibility"],
        answer: [1, 2, 4],
        multi: true,
        explanation: "Agent Affinity in AWA organizes additional matching context into three types: Historical affinity (previous interactions between the agent and customer or case type), Related task affinity (connection through previously related tasks or cases), and Account team responsibility (the agent's designated role on a customer account team). Product expertise and skill seniority are not affinity types."
      },
      {
        q: "Scenario: A consumer service agent receives and accepts a case which was created by a consumer. The agent needs and requests more information from the consumer. After receiving the information, the agent proposes a solution that is accepted by the consumer. Given this scenario, what is the chronological order of case states used to manage this case?",
        opts: ["New then Open then Work in Progress then Solution Proposed then Closed", "Open then Pending then Work in Progress then Resolved then Closed", "New then Open then Awaiting Info then Open then Resolved then Closed", "New then Work in Progress then On Hold then Work in Progress then Resolved then Closed"],
        answer: 2,
        multi: false,
        explanation: "The correct state flow for this consumer case scenario is: New (case submitted) → Open (agent accepts) → Awaiting Info (agent requests more info) → Open (info received, agent works on it) → Resolved (solution proposed and accepted) → Closed (case finalized). This matches the OOTB consumer case state model with the Awaiting Info state for pending customer responses."
      },
      {
        q: "What are advantages of leading indicators over lagging indicators? Choose two.",
        opts: ["Retrospective", "Hard to influence", "Prospective", "Easy to influence"],
        answer: [2, 3],
        multi: true,
        explanation: "Leading indicators have two key advantages over lagging indicators: they are prospective (forward-looking, predicting future outcomes before they occur) and easy to influence (organizations can act on them proactively to change results). Lagging indicators are retrospective and hard to influence — they measure what already happened."
      },
      {
        q: "Using the out of the box major issue management flow, a consumer service agent proposes an existing case as a major case candidate. The candidate is approved. What happens?",
        opts: ["The major case candidate becomes a major case", "A new major case is created and the candidate is added as a child to the major case", "The major case candidate is closed and a new major case is created", "The major case candidate requires approval from the major issue manager"],
        answer: 1,
        multi: false,
        explanation: "When a major case candidate is approved in the OOTB Major Issue Management flow, a new dedicated major case record is created. The original candidate case is then linked as a child case to this new major case. This preserves the original customer case while establishing a parent major case to coordinate the broader response."
      },
      {
        q: "Service providers use business models. What type of customer is supported with the Business to Consumer model?",
        opts: ["Individuals", "Partners", "Contacts", "Accounts"],
        answer: 0,
        multi: false,
        explanation: "The Business to Consumer (B2C) model supports individual customers — private persons interacting directly with the service provider for their personal needs. This contrasts with the B2B model, which supports business accounts (organizations), and the partner model, which supports reseller or distribution channel companies."
      },
      {
        q: "Upon self registration through the Consumer Service Portal, a record is created in...? Choose two.",
        opts: ["Consumer csm_consumer", "Contact customer_contact", "Consumer User csm_consumer_user", "CSM User csm_user"],
        answer: [0, 2],
        multi: true,
        explanation: "When an individual self-registers through the Consumer Service Portal, ServiceNow creates two records: one in the Consumer table (csm_consumer) storing their customer profile and one in the Consumer User table (csm_consumer_user) storing their system user credentials. These two records together enable both identity management and customer data tracking."
      },
      {
        q: "Now Create provides a prescriptive methodology, leading practices, and accelerators. How many sequential project phases and exit gates are there in Now Create?",
        opts: ["Five", "Four", "Six", "Three"],
        answer: 0,
        multi: false,
        explanation: "Now Create defines five sequential project phases, each with an exit gate that must be passed before proceeding: Initiate, Plan, Execute, Deliver, and Close. Each exit gate ensures the project meets quality and completeness criteria before advancing, providing a structured implementation quality framework."
      },
      {
        q: "Out of the box, which functionality handles state transitioning for case management?",
        opts: ["Flows", "State Flows", "Workflows", "Business Rules"],
        answer: 0,
        multi: false,
        explanation: "Out of the box in modern ServiceNow CSM implementations, case state transitions are handled by Flows built in Flow Designer. Flow Designer has replaced legacy Workflow as the preferred automation engine, and the OOTB CSM application ships with pre-built flows for state transitions like Open → Awaiting Info → Resolved → Closed."
      },
      {
        q: "What is knowledge article versioning?",
        opts: ["A knowledge article numbering guide", "The ability to manage and track article updates", "A knowledge article publishing guide", "A content tracker for knowledge articles"],
        answer: 1,
        multi: false,
        explanation: "Knowledge article versioning in ServiceNow is the capability to manage and track updates to articles over time. Each time an article is modified, a new version is created, allowing knowledge managers to see the change history, revert to previous versions if needed, and understand how articles evolve over their lifecycle."
      },
      {
        q: "Which Flow Designer flow can automatically close resolved cases if customers do not respond within a specified time?",
        opts: ["Auto Close Resolved Cases", "Resolved to Close State", "Close Cases in Resolved state", "Move Resolved Cases to Closed"],
        answer: 0,
        multi: false,
        explanation: "The OOTB Flow Designer flow is named 'Auto Close Resolved Cases'. It monitors cases that have been in the Resolved state for a specified period and, if the customer has not responded, sends a reminder and then automatically closes the case. The other options are not the correct OOTB flow name in ServiceNow CSM."
      },
      {
        q: "In Agent Workspace Chat, what action does the slash r quick action perform?",
        opts: ["Routes the chat toward another group", "Rolls up the current chat history to an existing case", "Rejects an incoming chat and moves it automatically to the General queue", "Uses response templates to insert text in a conversation"],
        answer: 3,
        multi: false,
        explanation: "The /r quick action in Agent Workspace Chat triggers the Response Templates feature, allowing agents to quickly insert pre-written, approved response templates into the chat conversation. This improves response consistency and speed by giving agents access to standardized messages without typing them from scratch."
      },
      {
        q: "What are recommended good practices when running implementation workshops? Choose three.",
        opts: ["Any financial implication of a decision should be handled by the delivery and sales team", "Give customers the data they need so they can make an informed decision", "Enforce customers to adapt their processes toward baseline processes", "Engage with customers to gain deep understanding of their organization", "Guide the customer toward industry best practices"],
        answer: [1, 3, 4],
        multi: true,
        explanation: "Three recommended workshop best practices are: give customers the data they need for informed decisions (evidence-based guidance), engage deeply with customers to understand their organization (discovery-first approach), and guide customers toward industry best practices (leveraging ServiceNow's implementation experience). Enforcing process adaptation and isolating financial decisions from workshops are poor practices."
      },
      {
        q: "In Advanced Work Assignment, what does overflow assignment do if defined?",
        opts: ["Routes cases to different groups based on skill set and availability", "Sends work items to the agent with the highest availability", "Sends work items to the agent with the most capacity", "When one support group reaches capacity the work item is routed to another group"],
        answer: 3,
        multi: false,
        explanation: "Overflow assignment in AWA provides a fallback routing mechanism: when the primary support group reaches its capacity (all agents are at maximum workload), new work items are automatically routed to a designated overflow group. This prevents queue buildup and ensures work continues to be processed even during peak demand periods."
      },
      {
        q: "When implementing Knowledge Product Entitlements, what is enabled by activating the 'Enable access control of Knowledge Articles' system property?",
        opts: ["Allows access to multi product line knowledge articles", "Allows access to knowledge articles related to products owned by a customer", "Allows access to knowledge articles related to entitlements owned by a customer", "Allows access to knowledge articles based on customer security access"],
        answer: 1,
        multi: false,
        explanation: "Activating the 'Enable access control of Knowledge Articles' system property enables the Knowledge Product Entitlements feature, which restricts article access so customers can only view knowledge articles related to the products they own. This ensures proprietary product documentation is only visible to customers who have purchased that product."
      },
      {
        q: "Which benefits may be gained from using communities? Choose three.",
        opts: ["Reduce cost per sales", "Reduce support costs", "Increase marketing effectiveness", "Get product feedback", "Engagement with customers"],
        answer: [1, 3, 4],
        multi: true,
        explanation: "Communities provide three key business benefits: reducing support costs (peer-to-peer answers deflect agent cases), getting product feedback (community discussions surface customer insights and feature requests), and engaging with customers (building loyalty and brand community). Reducing sales costs and increasing marketing effectiveness are not primary community benefits in CSM."
      },
      {
        q: "Which feature enables you to quickly identify high priority tasks based on multiple dimensions, not just by a single field value like priority?",
        opts: ["Case Digest", "Case Performance", "Case Spotlight", "Case Analytics"],
        answer: 2,
        multi: false,
        explanation: "Case Spotlight is the CSM feature that identifies high-priority cases based on multiple simultaneous dimensions — combining factors like customer tier, SLA status, case age, and escalation flags — rather than relying on a single Priority field value. This multi-dimensional view helps managers quickly identify the cases that most need immediate attention."
      },
      {
        q: "When a Major Case is marked as Resolved in ServiceNow CSM, what is the default behavior regarding its associated Child Cases?",
        opts: ["They are automatically resolved.", "They remain in their current state and must be manually updated.", "They are automatically closed.", "They are cancelled."],
        answer: 1,
        multi: false,
        explanation: "When a Major Case is resolved in CSM, the associated child cases are NOT automatically resolved or closed — they remain in their current state. Agents must manually update each child case, reviewing whether the major case resolution also resolves their specific customer's issue or whether additional work is needed."
      },
      {
        q: "What are the three out of the box playbooks for CSM? Choose three.",
        opts: ["Case playbook for Billing", "Case playbook for Complaints", "Case playbook for Onboarding", "Case playbook for Services", "Case playbook for Product Support"],
        answer: [1, 2, 4],
        multi: true,
        explanation: "ServiceNow CSM ships with three OOTB playbooks: the Complaints playbook (structured resolution for customer complaints), the Onboarding playbook (guiding new customer onboarding), and the Product Support playbook (structured product issue resolution). Billing and Services playbooks are not included in the standard OOTB CSM package."
      },
      {
        q: "Which would be a benefit of using Predictive Intelligence - Customer Service Trending Topics?",
        opts: ["Auto generate clusters of cases that point to similar underlying issues", "Guaranteed reduction in call volume per month", "Eliminate the need for traditional performance analytics", "Create root cause solutions for similar cases"],
        answer: 0,
        multi: false,
        explanation: "Predictive Intelligence Trending Topics automatically clusters similar cases together using machine learning to surface patterns that point to common underlying issues. This enables managers to identify systemic problems affecting multiple customers simultaneously, enabling proactive responses rather than case-by-case firefighting."
      }
    ]
  },
  {
    id: 'mock3',
    title: 'Mock Test 3',
    questions: 60,
    data: [
      {
        q: "What features are included with the Customer Service Portal (Choose three.)",
        opts: ["Search feature to get information from several repositories", "Links to marketing promotions and product coupons", "Header with links for different customer activities such as creating a case", "Ability to create new accounts", "Links to information sources such as knowledge base community and customer support"],
        answer: [0, 2, 4],
        multi: true,
        explanation: "The OOTB Customer Service Portal includes three core features: a Search feature that queries multiple repositories (KB, community, catalog), a Header with navigation links for common customer activities like case creation and account management, and Links to information sources including the knowledge base, community forums, and support contact options. Marketing promotions and account creation are not OOTB portal features."
      },
      {
        q: "Which roles have permission to create a relationship between a contact and an account (Choose two.)",
        opts: ["Customer Admin sn_customerservice.customer_admin", "Partner Admin sn_customerservice.partner_admin", "System Administrator admin", "Customer Service Manager sn_customerservice_manager", "Customer Service Agent sn_customerservice_agent"],
        answer: [0, 2],
        multi: true,
        explanation: "Creating a relationship between a contact and an account requires either the Customer Admin role (external admins managing their own account's contacts) or the System Administrator role (full system access). Partner Admin, CSM Manager, and Agent roles do not have this specific permission in the OOTB configuration."
      },
      {
        q: "Which feature allows an agent to copy reusable messages to case or task forms to provide quick and consistent messages to users?",
        opts: ["Templates", "Quick Messages", "Response Templates", "Quick Actions"],
        answer: 2,
        multi: false,
        explanation: "Response Templates in CSM are pre-written, reusable message blocks that agents can copy into case or task forms (such as resolution notes or customer communications). They ensure consistent, professionally worded responses across the team without agents needing to compose messages from scratch for common scenarios."
      },
      {
        q: "When creating or importing assets for CSM model categories are used to (Choose three.)",
        opts: ["Define a link between Asset classes and CI classes", "Define whether a CI is created when an Asset record is created or vice versa", "Group assets together", "Model configuration options for each product model sold to customers", "Build a classification structure for product models"],
        answer: [0, 1, 4],
        multi: true,
        explanation: "Model categories in CSM serve three purposes: they define the link between Asset classes and CI classes (mapping the asset taxonomy to the CMDB), they control whether a CI is automatically created when an Asset is created (and vice versa), and they build the classification hierarchy for organizing product models. Grouping assets and modeling configuration options are not model category functions."
      },
      {
        q: "What is the specific type of catalog item that allows users to create any type of task such as cases from the Service Catalog?",
        opts: ["Record Producer", "Catalog Item", "Request Item", "Service Catalog Request"],
        answer: 0,
        multi: false,
        explanation: "A Record Producer is the Service Catalog item type that creates task records (cases, incidents, change requests, etc.) directly when submitted. Unlike standard Catalog Items that create request/requested item records, Record Producers insert records directly into the target task table, making them the correct choice for case creation from the catalog."
      },
      {
        q: "Which service catalogs are available out of the box in the customer portals (Choose two.)",
        opts: ["Customer Service", "Product Service", "Consumer Service", "Partner Service"],
        answer: [0, 2],
        multi: true,
        explanation: "ServiceNow CSM ships with two OOTB service catalogs for customer portals: Customer Service (available on the Customer Service Portal for B2B customers and contacts) and Consumer Service (available on the Consumer Service Portal for B2C individual consumers). Product Service and Partner Service are not OOTB catalog names."
      },
      {
        q: "What action is required to enable agents to create an incident record for a case?",
        opts: ["They must be assigned the read role for incident", "They must be assigned the sn_customerservice.itsm_contributor role", "They must be assigned the itil role", "They must be assigned the snc_internal role"],
        answer: 1,
        multi: false,
        explanation: "To enable CSM agents to create Incident records linked to customer cases, they must be granted the sn_customerservice.itsm_contributor role. This role provides the necessary permissions to create ITSM records from the CSM context without granting full ITIL privileges, maintaining appropriate separation between CSM and ITSM access."
      },
      {
        q: "What action can be performed by a Partner Admin and not by a Partner in the Customer Service Portal?",
        opts: ["Create view and edit cases for their partner accounts", "View assets belonging to their partner accounts", "Create and update contacts for their partner accounts", "Resolve cases reported by their partner accounts"],
        answer: 2,
        multi: false,
        explanation: "The Partner Admin role has contact management capabilities that the standard Partner role does not — specifically the ability to create and update contact records within their partner accounts. Standard Partner users can view cases and assets but cannot manage the contact roster; that administrative capability is reserved for Partner Admins."
      },
      {
        q: "Which feature sends an email notification with relevant knowledge articles to the case submitter and watchlist users when a case is created?",
        opts: ["Trending Topics", "Auto Responder", "Self Service Analytics", "Proactive Customer Service Operations"],
        answer: 1,
        multi: false,
        explanation: "The Auto Responder feature in CSM automatically sends an email notification containing relevant knowledge articles to the case submitter (and watchlist members) immediately after a case is created. This deflection mechanism encourages self-service resolution by surfacing potentially helpful articles before an agent even begins working the case."
      },
      {
        q: "New case tasks use which prefix?",
        opts: ["CSMTASK prefix", "CASETASK prefix", "No specific task prefix just existing TASK prefix", "CSTASK prefix"],
        answer: 3,
        multi: false,
        explanation: "Case tasks in ServiceNow CSM use the CSTASK prefix for their number field (e.g., CSTASK0001234). This distinguishes case tasks from regular platform tasks (TASK prefix), incidents (INC prefix), and other record types, making them immediately identifiable in lists, reports, and related records."
      },
      {
        q: "With the Auto Close Resolved Cases flow enabled using default settings when will a reminder be sent to a non responsive customer?",
        opts: ["After 7 days", "After 3 days", "After 1 day", "After 5 days"],
        answer: 1,
        multi: false,
        explanation: "With the Auto Close Resolved Cases flow using default settings, a reminder notification is sent to the customer after 3 days of no response to a resolved case. After this reminder, if the customer still does not respond within the remaining window, the case is automatically moved to the Closed state."
      },
      {
        q: "Which statement is correct for CIs and assets?",
        opts: ["The CMDB only tracks CIs assets cannot be CIs", "The contract and entitlements of an asset dictate whether it is stored in the CMDB", "The CMDB may track some assets as CIs but not all assets are CIs", "The CMDB tracks all assets as CIs"],
        answer: 2,
        multi: false,
        explanation: "The CMDB tracks Configuration Items (CIs), which represent items relevant to service delivery. While some assets (like servers and network devices) are also CIs, not all assets qualify as CIs. Low-value consumables, spare parts, and other inventory items are tracked as assets but have no relevance to service configuration and are not stored in the CMDB."
      },
      {
        q: "By default what can customers with the customer role sn_customerservice.customer see on the customer service portal (Choose three.)",
        opts: ["Contracts", "Assets", "Contacts", "Publications", "Products"],
        answer: [0, 1, 4],
        multi: true,
        explanation: "Customers with the sn_customerservice.customer role can see Contracts (their service agreements), Assets (products/services they have deployed), and Products (the product catalog and their owned products) on the Customer Service Portal by default. Contacts and Publications visibility requires additional configuration or roles beyond the base customer role."
      },
      {
        q: "What is a household entity?",
        opts: ["Group of users that share a common address and use services as a group", "Group of people that share a common address and use services as a group", "Group of customers that share a common address and use services as a group", "Group of consumers that share a common address and use services as a group"],
        answer: 3,
        multi: false,
        explanation: "In ServiceNow CSM, a Household is specifically defined as a group of consumers who share a common address and use services collectively as a group. The key distinction is 'consumers' — Households are a B2C concept for grouping individual consumer records (not contacts or accounts) who live together and share service subscriptions."
      },
      {
        q: "Which routing and assignment features leverage matching rules (Choose two.)",
        opts: ["State Flows", "Assignment Workbench", "Assignment Rules", "CSM Workspace"],
        answer: [1, 2],
        multi: true,
        explanation: "Both the Assignment Workbench and Assignment Rules leverage matching rules for their operation. The Assignment Workbench uses matching rules to evaluate and rank agents for manual assignment selection. Assignment Rules use matching rule criteria to automatically assign cases to the appropriate agent or group based on case attributes."
      },
      {
        q: "Which statement is correct regarding the social media channel?",
        opts: ["Cases cannot be created from social channels", "Cases are not created automatically from any social channel", "Cases are created automatically from all social channels", "Cases can be created automatically depending on which social channel is used"],
        answer: 3,
        multi: false,
        explanation: "Social channel behavior varies by platform in CSM — some social channels (like Twitter/X direct messages) can be configured to automatically create cases, while others require manual intervention. The correct statement is that automatic case creation depends on which social channel is configured, not that it applies universally or not at all."
      },
      {
        q: "Which allows you to install out of the box Customer Service Management applications within your instance (Choose two.)",
        opts: ["XML unloads", "Update Sets", "Plugins", "Store Apps"],
        answer: [2, 3],
        multi: true,
        explanation: "OOTB CSM applications are installed through two mechanisms: Plugins (activated through the ServiceNow plugin manager, installed from the ServiceNow application repository) and Store Apps (downloaded and installed from the ServiceNow Store). XML unloads and Update Sets are mechanisms for moving custom configurations between instances, not for installing OOTB products."
      },
      {
        q: "To which entities can Special Handling Notes be applied out of the box?",
        opts: ["Consumer", "Entitlement", "Sold Product"],
        answer: 0,
        multi: false,
        explanation: "Out of the box in the consumer service context, Special Handling Notes can be applied to Consumer records. In the broader CSM context they also apply to Contact, Account, and Product records. Among the options given (Consumer, Entitlement, Sold Product), Consumer is the correct OOTB entity for Special Handling Notes in the consumer service model."
      },
      {
        q: "In the Customer Service Management space what defines the term asset?",
        opts: ["A resource that allows a business service", "A physical item", "A specific product instance supported for a customer", "A product that a company supports"],
        answer: 2,
        multi: false,
        explanation: "In CSM, an asset is defined as a specific product instance that is being supported for a specific customer. This distinguishes it from a Product (a general offering in the catalog) — an Asset is the actual deployed unit owned or subscribed to by a particular customer, enabling tracking of what each customer has."
      },
      {
        q: "Out of the box cases are automatically closed after how many days?",
        opts: ["Cases are not automatically closed by default", "3 days", "10 days", "5 days"],
        answer: 1,
        multi: false,
        explanation: "The OOTB CSM configuration automatically closes resolved cases after 3 days without customer response. This is controlled by the 'Close Cases in Resolved state' (or 'Auto Close Resolved Cases') Flow Designer flow. The 3-day window balances giving customers time to verify resolution while preventing resolved cases from lingering indefinitely."
      },
      {
        q: "When configuring email in Communication Channels how many outgoing email addresses are supported?",
        opts: ["Two", "Three", "One", "Unlimited"],
        answer: 2,
        multi: false,
        explanation: "ServiceNow CSM supports only one outgoing email address for Communication Channels out of the box. This single address handles all outbound case-related email notifications. Organizations requiring multiple outbound addresses (e.g., for different brands) need custom configuration beyond the standard OOTB setup."
      },
      {
        q: "Which statements are correct for parent child synchronization (Choose two.)",
        opts: ["The administrator can choose which fields to synchronize from parent to child cases", "Parent to child cases can be synchronized regardless of case state", "Multiple child cases can be managed from a parent case as in Major Issue Management", "The property to synchronize parent to child cases is automatically enabled"],
        answer: [0, 2],
        multi: true,
        explanation: "Two correct statements about parent-child synchronization: administrators can configure which specific fields are synchronized from parent to child (selective field sync), and multiple child cases can be managed from a parent case (as used in Major Issue Management). Synchronization is NOT possible regardless of state (Closed/Cancelled/Resolved child cases block sync), and the sync property is not automatically enabled."
      },
      {
        q: "What does Major Issue Management use to identify all other customers impacted by a major case?",
        opts: ["Recipient lists", "Account lists", "Notify lists", "Customer Product lists"],
        answer: 2,
        multi: false,
        explanation: "Major Issue Management uses Notify lists to identify and communicate with all customers impacted by a major case. Notify lists contain the contacts, accounts, or groups that should receive communications about the major issue, enabling mass notification of affected customers and stakeholders throughout the resolution process."
      },
      {
        q: "Viewing a customer's install base in the CSM Workspaces enables customer service agents to (Choose two.)",
        opts: ["See detailed configurations of products and services deployed for a customer to determine action needed", "Monitor related operational services and configuration items that affect service health", "Trace information in a case to the right product or service it relates to", "Close an upsell of related products and services not yet purchased by a customer"],
        answer: [0, 2],
        multi: true,
        explanation: "Viewing the install base in CSM Workspaces enables agents to see detailed configurations of what products and services are deployed for the customer (helping determine the right course of action) and trace the case back to the specific product or service it relates to (ensuring accurate case categorization). Operational monitoring and upselling are not functions of the install base view."
      },
      {
        q: "User criteria records may be applied to which knowledge items?",
        opts: ["Knowledge Base and Article", "Knowledge Base Category and Article", "Knowledge Base and Category", "Knowledge Base"],
        answer: 0,
        multi: false,
        explanation: "User Criteria records in ServiceNow can be applied at two knowledge levels: Knowledge Base (controlling who can access the entire KB) and individual Knowledge Article (controlling who can access specific articles). Categories are not a target for User Criteria — access control granularity is at the KB level and the Article level."
      },
      {
        q: "Which statement is correct regarding form headers in the CSM Configurable Workspace?",
        opts: ["The form header secondary values can only be displayed above ribbon components", "The form header secondary values can be displayed in the contextual side panel instead of above ribbon components", "The form header primary values can be displayed in contextual side panes instead of above ribbon components", "The form header for the case form can display five levels of field values from the case table"],
        answer: 1,
        multi: false,
        explanation: "In the CSM Configurable Workspace, the form header secondary values have a flexible display option — they can be shown in the contextual side panel instead of the default position above the ribbon components. This configuration flexibility allows workspace designers to optimize screen real estate and reduce visual clutter on the main case form."
      },
      {
        q: "Which roles can update a consumer's record (Choose two.)",
        opts: ["Customer Service Manager sn_customerservice_manager", "Consumer Support Agent sn_customerservice.consumer_agent", "Customer sn_customerservice.customer", "Customer Service Agent sn_customerservice_agent"],
        answer: [0, 1],
        multi: true,
        explanation: "Consumer records can be updated by the Customer Service Manager (sn_customerservice_manager) who has broad administrative access across CSM records, and the Consumer Support Agent (sn_customerservice.consumer_agent) who is specifically designed to support B2C consumer customers. Regular agents and customers do not have permission to modify consumer profile records."
      },
      {
        q: "Assignment workbench uses Matching Rules. Which out of the box configurable criteria can be used (Choose three.)",
        opts: ["Assigned Cases", "Availability Today", "Agent Affinity", "Agent History", "Matching Skills"],
        answer: [0, 1, 4],
        multi: true,
        explanation: "The OOTB configurable criteria in the Assignment Workbench are Assigned Cases (current workload of the agent), Availability Today (agent's availability based on schedule), and Matching Skills (alignment between agent skills and case requirements). Agent Affinity and Agent History are AWA concepts but are not the three OOTB Assignment Workbench configurable criteria."
      },
      {
        q: "In CSM Asset Management has a different meaning than in ITSM or Corporate Finance. Which defines Asset Management in CSM?",
        opts: ["The process of developing operating maintaining upgrading and disposing of assets in the most cost effective manner", "Asset management in CSM tracks specific products or services customers are using and includes data crucial to support customers", "A generic activity or process responsible for tracking and reporting the value and ownership of assets throughout their lifecycle"],
        answer: 1,
        multi: false,
        explanation: "In CSM, Asset Management specifically means tracking the specific products and services that customers are using, along with the support-relevant data (configuration, warranty, entitlement) associated with those deployments. This customer-centric definition differs from the ITSM/financial definition which focuses on IT asset lifecycle and corporate asset value tracking."
      },
      {
        q: "Customer service agents can use Agent Assist to search for information from an interaction. By default what are available search sources (Choose three.)",
        opts: ["Customer service portal", "Knowledge articles", "Communities", "Consumer service portal", "Service catalog"],
        answer: [1, 2, 4],
        multi: true,
        explanation: "Agent Assist in CSM Configurable Workspace searches three default sources: Knowledge articles (returning relevant KB articles based on the case context), Communities (surfacing community discussions that may contain answers), and Service catalog (identifying relevant catalog items). The Customer and Consumer portals are customer-facing interfaces, not Agent Assist search sources."
      },
      {
        q: "When integrating CSM with IT Service Management what separate action is required for Request Management?",
        opts: ["Activate the Customer Service plugin com.sn_customerservice", "Activate the Customer Service with Service Management plugin com.sn_cs_sm", "Activate the Customer Service Case Action Status plugin com.snc.csm_action_status", "Activate the Customer Service with Request Management plugin com.sn_cs_sm_request"],
        answer: 3,
        multi: false,
        explanation: "Integrating CSM with ITSM Request Management requires a separate plugin activation: the 'Customer Service with Request Management' plugin (com.sn_cs_sm_request). This plugin is not included in the base CSM or CSM-ITSM integration plugins and must be explicitly activated to enable the case-to-request-management workflow integration."
      },
      {
        q: "The self registration feature enables new customer contacts to submit registration requests. Which role creates the unique registration code for each account?",
        opts: ["Customer Service Manager sn_customerservice_manager", "Customer admin sn_customerservice.customer_admin", "Service organization administrator sn_customerservice.service_organization_admin", "System administrator admin"],
        answer: 3,
        multi: false,
        explanation: "The System Administrator (admin role) is responsible for generating and managing the unique registration codes associated with each account for the self-registration feature. These codes are used to verify that self-registering contacts belong to the correct account, and only the system admin has the access level needed to create and distribute these codes."
      },
      {
        q: "Regarding Account Teams what is the purpose of marking a role as unique?",
        opts: ["Prevent the same role being used on different customer accounts", "The role becomes a parent responsibility", "The role becomes a child responsibility", "Ensure there is a dedicated account manager for that account"],
        answer: 3,
        multi: false,
        explanation: "Marking an Account Team role as unique ensures that only one person can hold that role for a given account at any time. This is used for roles like 'Account Manager' or 'Executive Sponsor' where having a single dedicated person is critical for clear ownership and accountability. Attempting to assign a second person to a unique role removes the first assignment."
      },
      {
        q: "When the channel field on a case form is set to Social where are details of social media conversations stored?",
        opts: ["Social Profiles", "Work notes", "Social Channels", "Social Logs", "Additional comments"],
        answer: 0,
        multi: false,
        explanation: "When the case channel is Social, the details of social media interactions — including the social handle, platform, message content, and conversation thread — are stored in Social Profiles. The Social Profile record links the customer's social identity to their Contact or Consumer record and captures the social conversation context."
      },
      {
        q: "Which capabilities does the integration with Microsoft Outlook add-in offer (Choose two.)",
        opts: ["Create cases using email content in Outlook for the customer contact", "Register the sender of an email as contact", "As the Outlook user register yourself as self contributor", "Escalate a case on the add in panel of Outlook"],
        answer: [0, 1],
        multi: true,
        explanation: "The Microsoft Outlook add-in for CSM provides two key capabilities: creating CSM cases directly from email content in Outlook (converting email interactions into formal case records) and registering the email sender as a contact in ServiceNow (automatically creating or linking contact records). Self-registration and case escalation are not features of the Outlook add-in."
      },
      {
        q: "Why does the implementation team need to deliver core functionality to the customer as quickly as possible?",
        opts: ["To realize near term ROI Return on Investment", "To complete complex customizations early enough", "To expand the technical reach", "To facilitate requirement gathering during workshops"],
        answer: 0,
        multi: false,
        explanation: "Delivering core functionality quickly is a key implementation principle in Now Create specifically to realize near-term Return on Investment (ROI). Getting baseline functionality into production fast allows organizations to start capturing business value (cost savings, efficiency gains) while additional phases are planned and executed, justifying the implementation investment."
      },
      {
        q: "In the Action Status column on a case list what could a red indicator dot mean (Choose two.)",
        opts: ["Blocked internally", "Blocked by case task", "Blocked internally and by customer", "Blocked by approval"],
        answer: [0, 2],
        multi: true,
        explanation: "A red dot in the Action Status column on a case list indicates one of two blocking conditions: Blocked internally (something within the organization is preventing case progress, such as a pending internal task or approval) or Blocked internally and by customer (both internal and external blockers exist simultaneously). Case task blockers show differently, and approval blocking is a subset of internal blocking."
      },
      {
        q: "What types of units are used to measure entitlements (Choose two.)",
        opts: ["Cost", "Case", "Hours", "Contract"],
        answer: [1, 2],
        multi: true,
        explanation: "Entitlements in CSM are measured in two types of units: Cases (a finite number of cases the customer is entitled to open under the contract) and Hours (a bank of support hours the customer can consume). Cost and Contract are entitlement-related concepts but are not the units used to measure entitlement consumption."
      },
      {
        q: "What is KCS Knowledge Centered Services?",
        opts: ["A dashboard that visualizes knowledge bases and categories", "A set of tables for CSM case articles mapping articles to Knowledge management", "A documented methodology with best practices for creating and maintaining knowledge", "An application that helps agents and managers create cases from Knowledge articles"],
        answer: 2,
        multi: false,
        explanation: "KCS (Knowledge-Centered Service) is an industry methodology — not a ServiceNow feature — that provides best practices for capturing, structuring, reusing, and improving knowledge as part of the case resolution workflow. It advocates creating knowledge at the point of need and continuously improving articles based on usage. ServiceNow supports KCS through its Knowledge Management capabilities."
      },
      {
        q: "What does NLU stand for?",
        opts: ["Natural Learning URL", "Natural Learning Userability", "Natural Language Understanding", "Natural Language URL"],
        answer: 2,
        multi: false,
        explanation: "NLU stands for Natural Language Understanding — the AI technology used by ServiceNow Virtual Agent to interpret the meaning and intent behind customer messages written in natural language. NLU enables the Virtual Agent to understand varied phrasing of the same request and route customers to the appropriate topic or resolution flow."
      },
      {
        q: "When are changes to the platform considered a customization?",
        opts: ["When they require an implementation spread across all project phases", "If they are not applied through built in tools on the Now Platform", "When there are business demands for custom functionality not offered out of the box", "When they are solely implemented for a custom application"],
        answer: 1,
        multi: false,
        explanation: "In ServiceNow terminology, a change is considered a customization specifically when it is NOT implemented through the platform's built-in configuration tools. Customizations (like modifying base system scripts, altering core tables, or changing platform code) are more fragile and harder to upgrade than configurations made through official Now Platform tools and designers."
      },
      {
        q: "Once a major case candidate is approved a major case is created. What happens to the customer case?",
        opts: ["The customer case is automatically closed", "The customer case becomes a child case of the major case", "The customer case becomes the parent case of the major case", "The customer case is automatically related to a problem"],
        answer: 1,
        multi: false,
        explanation: "When a major case candidate is approved and a new major case is created, the original customer case automatically becomes a child case of that new major case. The major case becomes the parent record coordinating the response, while the original customer case (and potentially others) are linked as children representing individual customer impacts."
      },
      {
        q: "In the CSM Configurable Workspace, which feature provides agents with context-aware recommendations such as similar cases and knowledge articles?",
        opts: ["Agent Scripting", "Agent Assist", "Contextual Search Sidebar", "Ribbon Component"],
        answer: 1,
        multi: false,
        explanation: "Agent Assist in the CSM Configurable Workspace provides context-aware recommendations to agents based on the current case content. As agents work a case, Agent Assist surfaces similar past cases, relevant knowledge articles, and recommended catalog items automatically — without the agent needing to manually search — accelerating resolution."
      },
      {
        q: "What is the purpose of the sidebar feature in CSM Configurable Workspace?",
        opts: ["Enables managers to discreetly monitor chats", "Enables agents to keep case details visible at all times", "Enables agents to access response templates", "Enables agents to collaborate with other agents or SMEs in real time for faster resolution"],
        answer: 3,
        multi: false,
        explanation: "The Sidebar in CSM Configurable Workspace is a collaboration tool that enables agents to have real-time conversations with other agents, subject matter experts, or supervisors without leaving the case form. This direct collaboration capability accelerates resolution of complex cases by bringing expertise to the agent rather than requiring case transfers."
      },
      {
        q: "Which features are specific to CSM Workspaces and not found in the Platform UI view (Choose two.)",
        opts: ["Agent assist", "Special handling notes", "Related search", "Lookup and verify"],
        answer: [0, 3],
        multi: true,
        explanation: "Two features exclusive to CSM Workspaces (not available in the standard Platform UI view) are Agent Assist (context-aware AI recommendations panel) and Lookup and Verify (the ability to validate customer identity and entitlements in a guided panel). Special handling notes and related records are available in both the workspace and platform UI."
      },
      {
        q: "When are child cases updated from the parent case?",
        opts: ["Automatically upon update of parent", "Scheduled Job", "When the Sync scheduled job runs", "Clicking on the Child Sync UI"],
        answer: 3,
        multi: false,
        explanation: "Child cases in CSM are updated from the parent case when an agent explicitly clicks the 'Child Sync' UI action on the parent case form. This is a manual, agent-triggered action rather than automatic — the synchronization is intentional and controlled, preventing unintended overwriting of child case data when parent fields are updated."
      },
      {
        q: "Which statement is correct regarding product models in CSM?",
        opts: ["Product models can only contain physical items", "Product models can contain both physical items and digital logical items in the same model", "Product models can contain either physical items or digital logical items but not both in the same model", "Product models can only contain digital logical items"],
        answer: 1,
        multi: false,
        explanation: "Product models in ServiceNow CSM can contain both physical items (tangible hardware or physical products) and digital/logical items (software licenses, subscriptions, virtual services) within the same model. This flexibility allows service providers to represent complex product offerings that combine physical and digital components in a single unified product model."
      },
      {
        q: "How are ServiceNow out of the box Customer Service Management applications packaged (Choose two.)",
        opts: ["Update Sets", "Through private scopes", "Store Apps", "Plugins"],
        answer: [2, 3],
        multi: true,
        explanation: "OOTB ServiceNow CSM applications are packaged and distributed in two ways: as Store Apps (available for download from the ServiceNow Store, installable through the Application Manager) and as Plugins (activated through the Plugin Manager within the instance). Update Sets and private scopes are not delivery mechanisms for OOTB ServiceNow applications."
      },
      {
        q: "Which statement is correct regarding the create contact consumer feature in CSM Workspaces?",
        opts: ["The create contact consumer feature is available in all CSM Workspaces", "The create contact consumer feature is only available in the Agent Workspace", "The create contact consumer feature is not available in any CSM Workspaces", "The create contact consumer feature is only available in the CSM Configurable Workspace"],
        answer: 3,
        multi: false,
        explanation: "The Create Contact/Consumer feature is exclusively available in the CSM Configurable Workspace — it is not available in the legacy Agent Workspace or the standard platform UI. This feature allows agents to create new contact or consumer records directly from within a case without navigating away to the contact management module."
      },
      {
        q: "What are available matching criteria for case assignment in Customer Service Management (Choose 3)",
        opts: ["Partner Hours", "Certifications", "Availability Today", "Assigned Cases", "Distance", "Matching Skills"],
        answer: [2, 3, 5],
        multi: true,
        explanation: "The three OOTB available matching criteria for case assignment in CSM are Availability Today (agent's current schedule availability), Assigned Cases (agent's current workload/case count), and Matching Skills (alignment between agent skills and case requirements). Certifications, Distance (used in FSM), and Partner Hours are not standard CSM assignment criteria."
      },
      {
        q: "Entitlements are counted using two types of units:",
        opts: ["Days and assets", "Cases and products", "Hours and cases", "SLAs and contracts"],
        answer: 2,
        multi: false,
        explanation: "Service Entitlements in CSM are measured and tracked using two unit types: Hours (a time-based bank of support hours the customer has purchased) and Cases (a count-based limit on the number of cases the customer can open under their contract). When either is consumed, the entitlement limit is reached and the contract terms may need renewal."
      },
      {
        q: "Partner admin sn_customerservice.partner_admin contacts have access to:",
        opts: ["Their partner accounts", "Both", "Neither", "Their customer account"],
        answer: 1,
        multi: false,
        explanation: "Partner Admin contacts have access to Both their partner accounts (the partner organization's own cases, contacts, and data) and the customer accounts they manage on behalf of (the end customers supported by the partner). This dual access enables partners to manage their internal operations and serve their customers through a single login."
      },
      {
        q: "Which CSM Configurable Workspace feature enables agents to quickly view records in the contextual side panel without switching tabs?",
        opts: ["Contextual Search", "Agent Assist", "Record Information", "Dynamic Related Records"],
        answer: 3,
        multi: false,
        explanation: "Dynamic Related Records in the CSM Configurable Workspace allows agents to view and interact with related records (linked accounts, contacts, assets, cases) in the contextual side panel without switching tabs or navigating away from the main case form. This keeps agents focused on the case while still accessing all relevant contextual information."
      },
      {
        q: "Benefits of Proactive Customer Service Operations include (Choose two.)",
        opts: ["Reduction in staff turnover", "Guaranteed increase in customer satisfaction", "Reduced Mean Time To Resolve MTTR", "Reduced inbound calls from customers", "Major cases can be eliminated as there will be no impact to customers"],
        answer: [2, 3],
        multi: true,
        explanation: "Proactive Customer Service Operations delivers two key measurable benefits: Reduced Mean Time To Resolve (MTTR) — by detecting and addressing issues before customers are severely impacted — and Reduced inbound calls — by proactively notifying customers of known issues and resolutions before they call in. Staff turnover reduction and guaranteed satisfaction increases are not documented CSO benefits."
      },
      {
        q: "Which statement is correct when the Contact Local Time field is enabled in a case form?",
        opts: ["The field is not based on the customer profile time zone", "Agents can use the field to identify if it is the right time to contact the customer", "The field is active in the base form", "The field is always based on the system time zone"],
        answer: 1,
        multi: false,
        explanation: "When the Contact Local Time field is enabled on the case form, it displays the current local time for the customer contact based on their profile's time zone. Agents use this field to determine whether it is an appropriate time to call or contact the customer, avoiding calls at late-night or early-morning hours in the customer's location."
      },
      {
        q: "The case digests feature includes which types of case communication (Choose two.)",
        opts: ["Post Case Reviews", "Case Post Mortem", "Case Action Summaries", "Case Lifecycle Reports"],
        answer: [0, 2],
        multi: true,
        explanation: "Case Digests in CSM include two types of communication summaries: Post Case Reviews (a structured review of the case lifecycle sent to stakeholders after closure) and Case Action Summaries (a concise summary of all actions taken during resolution). 'Case Post Mortem' is not an official ServiceNow CSM term — the correct official term is 'Post Case Review'."
      },
      {
        q: "What are the three main components that make up Proactive Customer Service Operations (Choose three.)",
        opts: ["Service Reporting", "Proactive Case", "Proactive Prevention", "Service Aware CMDB", "Service Aware Install Base", "Service Monitoring"],
        answer: [1, 2, 4],
        multi: true,
        explanation: "Proactive Customer Service Operations is built on three components: Proactive Case (automatically creates cases when service events are detected from monitoring), Proactive Prevention (uses CMDB data to prevent customer impact before it occurs), and Service Aware Install Base (tracks which customers own which products/services to enable targeted proactive outreach). Service Reporting and Monitoring are separate capabilities."
      },
      {
        q: "Which solution must be implemented to let a breakdown dashboard appear as a pop up window on the case form?",
        opts: ["Case Spotlight", "CSM Prediction Results", "Service Analytics", "In form Analytics"],
        answer: 3,
        multi: false,
        explanation: "In-form Analytics is the CSM feature that enables a breakdown dashboard to appear as a popup window directly on the case form. When implemented, clicking the Analytics indicator on the case form opens a contextual dashboard showing relevant metrics and breakdowns without requiring the agent to navigate to a separate reporting module."
      },
      {
        q: "From a security perspective scoping brings several benefits (Choose two.)",
        opts: ["Improves instance security by limiting accessibility to other applications on the instance", "IT can manage and control the pace of CSM teams because dependencies exist", "The scope holds records and acts as a container for desired Customer Service Management applications", "Provides CSM teams autonomy and control to configure and manage CSM but not portals"],
        answer: [0, 2],
        multi: true,
        explanation: "Application scoping brings two security benefits: it improves instance security by limiting a scoped app's ability to access other applications (isolation reduces attack surface and cross-app contamination), and the scope acts as a container holding all records and components of the CSM application together (encapsulation ensures clean application boundaries). The other options describe limitations or inaccuracies."
      },
      {
        q: "Advanced Work Assignment pushes work to qualified agents using queues routing conditions and criteria. Which step ensures work is allocated to the appropriate agent?",
        opts: ["Configure Service Channels", "Define Assignment Rules", "Define Work Item Queues", "Set the Agent Experience"],
        answer: 1,
        multi: false,
        explanation: "Defining Assignment Rules is the step in AWA configuration that ensures work items are allocated to the appropriate agent. Assignment Rules specify which agents (or groups) receive which types of work based on matching criteria, effectively controlling the routing logic that connects work items to qualified agents."
      }
    ]
  }
];
