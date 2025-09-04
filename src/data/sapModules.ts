export interface LearningPath {
  name: string;
  description: string;
  coreTopics: string[];
  beginner: string[];
  intermediate: string[];
  advanced: string[];
  capacityPlanning: string;
  freeResources: Array<{
    title: string;
    description: string;
    url: string;
  }>;
}

export const sapModules: Record<string, LearningPath> = {
  // SAP Functional Roles
  "sap-fi": {
    name: "SAP FI (Financial Accounting)",
    description: "Manage financial accounting processes and general ledger operations",
    coreTopics: [
      "General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR)",
      "Asset Accounting, Bank Accounting",
      "Financial reporting, integration with CO (Controlling)",
      "Chart of Accounts, Company Code"
    ],
    beginner: [
      "SAP Navigation basics",
      "General Ledger fundamentals",
      "Document posting principles",
      "Master data creation"
    ],
    intermediate: [
      "Asset accounting configuration",
      "Bank accounting setup",
      "Month-end closing procedures",
      "Financial statement preparation"
    ],
    advanced: [
      "Parallel ledgers configuration",
      "New GL implementation",
      "Financial closing cockpit",
      "Integration with other modules"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with multiple implementations",
    freeResources: [
      {
        title: "SAP FI Tutorial - TutorialsPoint",
        description: "Complete SAP FI tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_fi/index.htm"
      },
      {
        title: "SAP Help Portal - Financial Accounting",
        description: "Official SAP documentation for FI module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      },
      {
        title: "Michael Management - SAP FI Videos",
        description: "Free SAP FI training videos",
        url: "https://www.youtube.com/user/MichaelManagement"
      }
    ]
  },

  "sap-co": {
    name: "SAP CO (Controlling)",
    description: "Manage cost accounting and internal reporting processes",
    coreTopics: [
      "Cost Center Accounting, Profit Center Accounting",
      "Internal Orders, Product Costing",
      "Profitability Analysis (CO-PA)",
      "Management accounting principles"
    ],
    beginner: [
      "Controlling fundamentals",
      "Cost center setup",
      "Cost element creation",
      "Basic planning concepts"
    ],
    intermediate: [
      "Internal order management",
      "Activity-based costing",
      "Profit center accounting",
      "Period-end closing"
    ],
    advanced: [
      "COPA reporting and configuration",
      "Integration with FI/PP/SD",
      "Advanced cost allocation",
      "Predictive costing"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with advanced costing expertise",
    freeResources: [
      {
        title: "SAP CO Tutorial - TutorialsPoint",
        description: "Complete SAP CO tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_co/index.htm"
      },
      {
        title: "SAP Help Portal - Controlling",
        description: "Official SAP documentation for CO module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      }
    ]
  },

  "sap-sd": {
    name: "SAP SD (Sales & Distribution)",
    description: "Manage sales processes from order to delivery and billing",
    coreTopics: [
      "Sales order processing, Pricing, Billing",
      "Shipping, Delivery, Returns",
      "Credit management",
      "Customer master data"
    ],
    beginner: [
      "Sales document types",
      "Customer master creation",
      "Basic pricing procedures",
      "Order-to-cash process"
    ],
    intermediate: [
      "Advanced pricing configuration",
      "Shipping and delivery setup",
      "Credit management configuration",
      "Returns processing"
    ],
    advanced: [
      "ATP (Available to Promise)",
      "Output Determination",
      "Revenue recognition",
      "Variant configuration"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with complex pricing expertise",
    freeResources: [
      {
        title: "SAP SD Tutorial - TutorialsPoint",
        description: "Complete SAP SD tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_sd/index.htm"
      },
      {
        title: "SAP Help Portal - Sales and Distribution",
        description: "Official SAP documentation for SD module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      }
    ]
  },

  "sap-mm": {
    name: "SAP MM (Materials Management)",
    description: "Manage procurement and inventory processes",
    coreTopics: [
      "Procurement process, Purchase Requisitions & Orders",
      "Inventory Management, Goods Receipt, Invoice Verification",
      "Vendor Master & Info Records",
      "Material master data"
    ],
    beginner: [
      "Material master creation",
      "Vendor master setup",
      "Purchase requisition process",
      "Goods receipt basics"
    ],
    intermediate: [
      "Purchase order management",
      "Invoice verification process",
      "Inventory management",
      "Material valuation"
    ],
    advanced: [
      "Release strategies",
      "Subcontracting processes",
      "Consignment management",
      "Batch management"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with procurement optimization",
    freeResources: [
      {
        title: "SAP MM Tutorial - TutorialsPoint",
        description: "Complete SAP MM tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_mm/index.htm"
      },
      {
        title: "SAP Help Portal - Materials Management",
        description: "Official SAP documentation for MM module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      }
    ]
  },

  "sap-pp": {
    name: "SAP PP (Production Planning)",
    description: "Manage production planning and manufacturing processes",
    coreTopics: [
      "Master Data (BOM, Work Centers, Routing)",
      "MRP (Material Requirement Planning)",
      "Capacity Planning, Production Orders",
      "Manufacturing execution"
    ],
    beginner: [
      "BOM creation and management",
      "Work center configuration",
      "Routing setup",
      "MRP basics"
    ],
    intermediate: [
      "Production order management",
      "Capacity planning",
      "Shop floor control",
      "Costing in production"
    ],
    advanced: [
      "Kanban implementation",
      "Repetitive Manufacturing",
      "Integration with MM & SD",
      "Advanced planning"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with manufacturing expertise",
    freeResources: [
      {
        title: "SAP PP Tutorial - TutorialsPoint",
        description: "Complete SAP PP tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_pp/index.htm"
      },
      {
        title: "SAP Help Portal - Production Planning",
        description: "Official SAP documentation for PP module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      }
    ]
  },

  "sap-hcm": {
    name: "SAP HCM / SuccessFactors",
    description: "Manage human resources and talent management processes",
    coreTopics: [
      "Personnel Administration (PA), Organizational Management (OM)",
      "Time Management, Payroll",
      "Employee Self-Service (ESS), Manager Self-Service (MSS)",
      "Talent management"
    ],
    beginner: [
      "Employee master data",
      "Organizational structure",
      "Time recording basics",
      "Basic payroll concepts"
    ],
    intermediate: [
      "Time management configuration",
      "Payroll processing",
      "Benefits administration",
      "Performance management"
    ],
    advanced: [
      "SuccessFactors implementation",
      "Learning management",
      "Compensation planning",
      "Advanced analytics"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with cloud HCM expertise",
    freeResources: [
      {
        title: "SAP HCM Tutorial - TutorialsPoint",
        description: "Complete SAP HCM tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_hr/index.htm"
      },
      {
        title: "SAP SuccessFactors Learning Hub",
        description: "Official SAP SuccessFactors learning resources",
        url: "https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM"
      }
    ]
  },

  // SAP Technical Roles
  "sap-abap": {
    name: "SAP ABAP Developer",
    description: "Develop custom applications and enhance SAP functionality",
    coreTopics: [
      "ABAP programming fundamentals",
      "Data Dictionary concepts",
      "Report development",
      "Module pool programming"
    ],
    beginner: [
      "ABAP syntax and basics",
      "Data types and structures",
      "Internal tables",
      "Simple reports"
    ],
    intermediate: [
      "BAPIs and BADIs",
      "Enhancements and modifications",
      "ALV reports",
      "Dialog programming"
    ],
    advanced: [
      "Object-Oriented ABAP",
      "CDS Views",
      "AMDPs (ABAP Managed Database Procedures)",
      "RAP (Restful ABAP Programming)",
      "Fiori Integration"
    ],
    capacityPlanning: "Entry-level: 6 months training, Mid-level: 2-3 years, Senior: 5+ years with OO ABAP expertise",
    freeResources: [
      {
        title: "SAP ABAP Tutorial - TutorialsPoint",
        description: "Complete ABAP programming tutorial",
        url: "https://www.tutorialspoint.com/sap_abap/index.htm"
      },
      {
        title: "SAP Developer Center - ABAP",
        description: "Official SAP ABAP development resources",
        url: "https://developers.sap.com/topics/abap-platform.html"
      },
      {
        title: "ABAP Code Samples - GitHub",
        description: "Open source ABAP code examples",
        url: "https://github.com/SAP-samples/abap-platform-rap-workshops"
      }
    ]
  },

  "sap-basis": {
    name: "SAP BASIS Administrator",
    description: "Manage SAP system administration and infrastructure",
    coreTopics: [
      "System administration",
      "User management",
      "Transport Management System (TMS)",
      "System monitoring and performance"
    ],
    beginner: [
      "SAP system architecture",
      "User administration",
      "Basic system monitoring",
      "Transport management"
    ],
    intermediate: [
      "Performance tuning",
      "Kernel upgrades",
      "System copies",
      "Background job management"
    ],
    advanced: [
      "SAP HANA administration",
      "Security configuration",
      "SSO implementation",
      "Disaster recovery"
    ],
    capacityPlanning: "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with HANA expertise",
    freeResources: [
      {
        title: "SAP BASIS Tutorial - TutorialsPoint",
        description: "Complete SAP BASIS administration guide",
        url: "https://www.tutorialspoint.com/sap_basis/index.htm"
      },
      {
        title: "SAP Help Portal - Administration",
        description: "Official SAP administration documentation",
        url: "https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752"
      }
    ]
  },

  "sap-hana": {
    name: "SAP HANA Developer/Administrator",
    description: "Work with SAP's in-memory database platform",
    coreTopics: [
      "In-Memory database concepts",
      "Modeling (Calculation Views, Attribute Views)",
      "SQLScript programming",
      "Performance optimization"
    ],
    beginner: [
      "HANA architecture basics",
      "Data modeling fundamentals",
      "Basic SQLScript",
      "HANA Studio navigation"
    ],
    intermediate: [
      "Advanced modeling techniques",
      "Procedures and functions",
      "Data provisioning",
      "Performance monitoring"
    ],
    advanced: [
      "HANA Security configuration",
      "Smart Data Integration",
      "Predictive Analysis Library",
      "HANA Cloud integration"
    ],
    capacityPlanning: "Entry-level: 6 months training, Mid-level: 2-3 years, Senior: 5+ years with cloud expertise",
    freeResources: [
      {
        title: "SAP HANA Tutorial - TutorialsPoint",
        description: "Complete SAP HANA tutorial",
        url: "https://www.tutorialspoint.com/sap_hana/index.htm"
      },
      {
        title: "SAP HANA Developer Guide",
        description: "Official SAP HANA development documentation",
        url: "https://help.sap.com/docs/SAP_HANA_PLATFORM"
      },
      {
        title: "openSAP HANA Courses",
        description: "Free SAP HANA courses from openSAP",
        url: "https://open.sap.com/courses?q=hana"
      }
    ]
  },

  "sap-s4hana": {
    name: "SAP S/4HANA Consultant",
    description: "Implement and migrate to SAP's next-generation ERP",
    coreTopics: [
      "S/4HANA architecture and benefits",
      "Migration strategies (Conversion, Greenfield, Hybrid)",
      "Simplified data model",
      "Embedded analytics"
    ],
    beginner: [
      "S/4HANA overview and benefits",
      "Differences from ECC",
      "Universal Journal concept",
      "Business Partner concept"
    ],
    intermediate: [
      "Migration planning and execution",
      "Finance in S/4HANA",
      "Supply chain in S/4HANA",
      "Embedded analytics setup"
    ],
    advanced: [
      "Central Finance implementation",
      "Advanced analytics configuration",
      "Custom development in S/4HANA",
      "Integration with cloud solutions"
    ],
    capacityPlanning: "Entry-level: 1 year SAP experience + 6 months S/4HANA, Mid-level: 3-4 years, Senior: 6+ years with migration expertise",
    freeResources: [
      {
        title: "SAP S/4HANA Overview - openSAP",
        description: "Free courses on S/4HANA fundamentals",
        url: "https://open.sap.com/courses?q=s4hana"
      },
      {
        title: "SAP S/4HANA Documentation",
        description: "Official SAP S/4HANA documentation",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      }
    ]
  },

  "sap-fiori": {
    name: "SAP Fiori/UI5 Developer",
    description: "Develop modern user interfaces for SAP applications",
    coreTopics: [
      "SAPUI5 framework",
      "OData services",
      "Fiori Design Principles",
      "Launchpad Configuration"
    ],
    beginner: [
      "UI5 basics and MVC pattern",
      "Fiori design principles",
      "Basic app development",
      "OData service consumption"
    ],
    intermediate: [
      "Advanced UI5 controls",
      "Custom Fiori apps",
      "Launchpad configuration",
      "Mobile development"
    ],
    advanced: [
      "RAP integration with Fiori",
      "Custom themes and styling",
      "Performance optimization",
      "Fiori Elements"
    ],
    capacityPlanning: "Entry-level: 6 months web development + SAP, Mid-level: 2-3 years, Senior: 5+ years with UI/UX expertise",
    freeResources: [
      {
        title: "SAPUI5 SDK - Demo Kit",
        description: "Official SAPUI5 documentation and examples",
        url: "https://sapui5.hana.ondemand.com/"
      },
      {
        title: "SAP Fiori Design Guidelines",
        description: "Official Fiori design principles and guidelines",
        url: "https://experience.sap.com/fiori-design-web/"
      },
      {
        title: "UI5 Tutorial - Developers Guide",
        description: "Step-by-step UI5 development tutorial",
        url: "https://developers.sap.com/tutorials/sapui5-101.html"
      }
    ]
  },

  "sap-bw": {
    name: "SAP BW/BI Developer",
    description: "Design and implement business intelligence solutions",
    coreTopics: [
      "Data warehousing concepts",
      "ETL processes",
      "Data modeling",
      "Reporting and analytics"
    ],
    beginner: [
      "BW architecture basics",
      "InfoProviders and InfoObjects",
      "Data extraction basics",
      "Simple reporting"
    ],
    intermediate: [
      "Advanced data modeling",
      "Transformation rules",
      "Process chains",
      "BEx reporting"
    ],
    advanced: [
      "BW on HANA optimization",
      "BW/4HANA features",
      "Integration with SAC",
      "Advanced analytics"
    ],
    capacityPlanning: "Entry-level: 6 months BI experience, Mid-level: 2-3 years, Senior: 5+ years with HANA expertise",
    freeResources: [
      {
        title: "SAP BW Tutorial - TutorialsPoint",
        description: "Complete SAP BW tutorial",
        url: "https://www.tutorialspoint.com/sap_bw/index.htm"
      },
      {
        title: "SAP BW/4HANA Documentation",
        description: "Official SAP BW/4HANA documentation",
        url: "https://help.sap.com/docs/SAP_BW4HANA"
      }
    ]
  },

  "sap-ariba": {
    name: "SAP Ariba Consultant",
    description: "Implement procurement and supply chain cloud solutions",
    coreTopics: [
      "Supplier lifecycle management",
      "Sourcing & Contract Management",
      "Procurement Operations",
      "Supply chain collaboration"
    ],
    beginner: [
      "Ariba platform overview",
      "Supplier onboarding",
      "Basic sourcing processes",
      "Procurement workflows"
    ],
    intermediate: [
      "Contract management",
      "Advanced sourcing strategies",
      "Supplier risk management",
      "Analytics and reporting"
    ],
    advanced: [
      "Integration with S/4HANA",
      "Custom field configuration",
      "Advanced analytics",
      "Multi-region deployments"
    ],
    capacityPlanning: "Entry-level: 6 months procurement knowledge, Mid-level: 2-3 years, Senior: 5+ years with cloud integration",
    freeResources: [
      {
        title: "SAP Ariba Discovery Series",
        description: "Free courses on SAP Ariba fundamentals",
        url: "https://open.sap.com/courses?q=ariba"
      },
      {
        title: "SAP Ariba Help Portal",
        description: "Official SAP Ariba documentation",
        url: "https://help.sap.com/docs/ARIBA_PROCUREMENT"
      }
    ]
  },

  "sap-successfactors": {
    name: "SAP SuccessFactors Consultant",
    description: "Implement cloud-based HR and talent management solutions",
    coreTopics: [
      "Employee Central",
      "Performance & Goals",
      "Learning management",
      "Recruiting and onboarding"
    ],
    beginner: [
      "SuccessFactors platform basics",
      "Employee Central fundamentals",
      "Basic configuration",
      "User management"
    ],
    intermediate: [
      "Performance management setup",
      "Learning module configuration",
      "Recruiting processes",
      "Integration basics"
    ],
    advanced: [
      "Complex business rules",
      "Advanced analytics",
      "API integrations",
      "Multi-company configurations"
    ],
    capacityPlanning: "Entry-level: 6 months HR knowledge, Mid-level: 2-3 years, Senior: 5+ years with cloud HCM expertise",
    freeResources: [
      {
        title: "SAP SuccessFactors Learning Hub",
        description: "Official learning resources and documentation",
        url: "https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM"
      },
      {
        title: "SuccessFactors openSAP Courses",
        description: "Free courses on SuccessFactors modules",
        url: "https://open.sap.com/courses?q=successfactors"
      }
    ]
  },

  "sap-analytics-cloud": {
    name: "SAP Analytics Cloud Consultant",
    description: "Design and implement business intelligence and planning solutions",
    coreTopics: [
      "Data modeling and connectivity",
      "Story building and visualization", 
      "Predictive analytics",
      "Planning and budgeting"
    ],
    beginner: [
      "SAC platform overview",
      "Data source connections",
      "Basic story creation",
      "Simple visualizations"
    ],
    intermediate: [
      "Advanced modeling techniques",
      "Planning applications",
      "Predictive scenarios",
      "Custom calculations"
    ],
    advanced: [
      "Smart Insights configuration",
      "AI integration",
      "Advanced planning features",
      "Multi-dimensional analysis"
    ],
    capacityPlanning: "Entry-level: 6 months BI experience, Mid-level: 2-3 years, Senior: 5+ years with analytics expertise",
    freeResources: [
      {
        title: "SAP Analytics Cloud Tutorial",
        description: "Complete SAC tutorial for beginners",
        url: "https://developers.sap.com/tutorials/sac-getting-started.html"
      },
      {
        title: "SAC Help Portal", 
        description: "Official SAP Analytics Cloud documentation",
        url: "https://help.sap.com/docs/SAP_ANALYTICS_CLOUD"
      }
    ]
  },

  "sap-security": {
    name: "SAP Security & GRC Consultant",
    description: "Implement security controls and governance, risk & compliance solutions",
    coreTopics: [
      "Role-based authorization",
      "GRC (Governance, Risk & Compliance)",
      "Single Sign-On (SSO)",
      "Security audit and compliance"
    ],
    beginner: [
      "SAP security fundamentals",
      "User and role management",
      "Authorization concepts",
      "Basic GRC principles"
    ],
    intermediate: [
      "Complex role design",
      "SOD (Segregation of Duties)",
      "Access control implementation",
      "Security monitoring"
    ],
    advanced: [
      "Advanced GRC configuration",
      "Identity management integration",
      "Security architecture design",
      "Compliance reporting"
    ],
    capacityPlanning: "Entry-level: 1 year SAP + security knowledge, Mid-level: 3-4 years, Senior: 6+ years with GRC expertise",
    freeResources: [
      {
        title: "SAP Security Tutorial - TutorialsPoint",
        description: "Complete SAP security tutorial",
        url: "https://www.tutorialspoint.com/sap_security/index.htm"
      },
      {
        title: "SAP GRC Documentation",
        description: "Official SAP GRC documentation",
        url: "https://help.sap.com/docs/SAP_RISK_MANAGEMENT"
      }
    ]
  },

  "sap-crm": {
    name: "SAP CRM Consultant", 
    description: "Implement customer relationship management solutions",
    coreTopics: [
      "Sales force automation",
      "Marketing campaigns",
      "Service management",
      "Customer analytics"
    ],
    beginner: [
      "CRM basics and navigation",
      "Contact and account management",
      "Opportunity management",
      "Basic reporting"
    ],
    intermediate: [
      "Marketing campaign setup",
      "Service ticket management",
      "Territory management",
      "Integration with ERP"
    ],
    advanced: [
      "Advanced analytics and insights",
      "Custom development",
      "Multi-channel integration",
      "Migration to SAP Sales Cloud"
    ],
    capacityPlanning: "Entry-level: 6 months CRM knowledge, Mid-level: 2-3 years, Senior: 5+ years with cloud transition expertise",
    freeResources: [
      {
        title: "SAP CRM Tutorial - TutorialsPoint",
        description: "Complete SAP CRM tutorial",
        url: "https://www.tutorialspoint.com/sap_crm/index.htm"
      },
      {
        title: "SAP Sales Cloud Resources",
        description: "Modern SAP CRM cloud solution resources",
        url: "https://help.sap.com/docs/SAP_SALES_CLOUD"
      }
    ]
  }
};