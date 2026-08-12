/**
 * Resume preset catalog — CONTENT ONLY.
 * To add a preset: append one object to `catalog` (id, label, resume).
 * App code must not branch on preset ids.
 */
(function (global) {
  const profile = {
    name: "HAO YU LIN",
    email: "john220john220@gmail.com",
    location: "Australia · Available for local work",
    languages: "EN · ZH · ID",
    summaryTitle: "Professional Summary",
    experienceTitle: "Work Experience",
    educationTitle: "Education",
    skillsTitle: "Skills & Certifications",
    education: [
      {
        id: "edu-ms",
        degree: "M.S. in Computer Science",
        school: "National Tsing Hua University, Taiwan",
        dates: "2021 – 2023"
      },
      {
        id: "edu-bs",
        degree: "B.S. in Mathematics",
        school: "National Tsing Hua University, Taiwan",
        dates: "2016 – 2020"
      }
    ]
  };

  /** Reusable job blocks for authors of this file only (not used by app logic). */
  const jobs = {
    cook: {
      id: "job-cook",
      title: "Cook",
      dates: "Jun 2025 – Jul 2026",
      org: "Omelette (Brunch Restaurant)",
      note: "",
      bullets: [
        "Prepared omelettes, pasta, and scrambled eggs during weekend brunch service (07:30–16:00).",
        "Produced approximately 20–30 omelettes per shift while keeping quality and ticket speed steady.",
        "Supported full kitchen operations: prep, dishwashing, peak-hour plating, and cleaning.",
        "Trained 3 team members on omelette preparation and kitchen workflow."
      ]
    },
    cookPhysical: {
      id: "job-cook",
      title: "Cook",
      dates: "Jun 2025 – Jul 2026",
      org: "Omelette (Brunch Restaurant)",
      note: "",
      bullets: [
        "Worked early weekend shifts (07:30–16:00) with steady standing, prep, and cleaning through full service.",
        "Kept pace under pressure, producing about 20–30 omelettes per shift with consistent quality.",
        "Handled physical kitchen support: prep, dishwashing, peak plating, and end-of-shift cleaning.",
        "Trained 3 team members on a repeatable omelette workflow."
      ]
    },
    ufo: {
      id: "job-ufo",
      title: "UnFranchise Owner (UFO)",
      dates: "Feb 2025 – Present",
      org: "Market America",
      note: "Independent UnFranchise Owner operating own retail and team-building business with Market America: product retailing, customer follow-up, recruiting, and training support (not an employee role).",
      bullets: [
        "Built relationships across Malaysia, Indonesia, Taiwan, and Singapore; identified needs and presented products or partnership opportunities.",
        "Joined English-language meetings on foundational training, show plans, product sharing, and customer follow-up.",
        "Closed an Indonesian-market support gap by arranging Indonesian-language training via company education resources, connecting Indonesian speakers, and co-hosting meetings (ABC meeting pattern — role B).",
        "Recruited 1 Indonesian partner; supported other teams with Indonesian recruitment; another Indonesian partner is planning to join in October 2026."
      ]
    },
    ufoShort: {
      id: "job-ufo",
      title: "UnFranchise Owner (UFO)",
      dates: "Feb 2025 – Present",
      org: "Market America",
      note: "Independent UnFranchise Owner operating own retail and team-building business with Market America: product retailing, customer follow-up, recruiting, and training support (not an employee role).",
      bullets: [
        "Communicated in English with partners across Malaysia, Indonesia, Taiwan, and Singapore.",
        "Followed up with customers and co-hosted training meetings; recruited Indonesian-speaking partners to fill a team gap."
      ]
    },
    military: {
      id: "job-military",
      title: "Welfare Committee Member",
      dates: "May 2021 – Aug 2021",
      org: "Military Service",
      note: "",
      bullets: [
        "Managed home-leave / return shuttle logistics for 100+ personnel: pickup registration, fare tracking, evening cash collection, and reconciliation.",
        "Replaced manual roll-call and hand totals with Google Forms linked to Excel; printed records for camp use (no on-site computers).",
        "Improved collection speed, reduced queuing, and lowered counting errors."
      ]
    }
  };

  function resume(overrides) {
    return {
      ...profile,
      sectionOrder: ["summary", "experience", "education", "skills"],
      ...overrides
    };
  }

  const catalog = [
    {
      id: "general",
      label: "General",
      resume: resume({
        tagline: "Working Holiday — Hospitality · Retail · Operations",
        summary:
          "Adaptable professional with paid kitchen experience, cross-cultural sales and team-building, and degrees in Mathematics and Computer Science. Comfortable in fast-paced service environments, quick to learn new processes, and effective with multicultural teams. Seeking flexible Working Holiday roles across hospitality, retail, warehouse, farm, and customer-facing work.",
        jobs: [jobs.cook, jobs.ufo, jobs.military],
        skills: [
          { id: "sk-1", label: "Kitchen", text: "Omelettes, pasta, egg dishes, prep, cleaning, peak service" },
          { id: "sk-2", label: "People", text: "Cross-cultural communication & facilitation (EN / ZH / ID)" },
          { id: "sk-3", label: "Business", text: "Retail support, customer follow-up, team recruitment & training" },
          { id: "sk-4", label: "Tools", text: "Google Forms, Excel" },
          { id: "sk-5", label: "Licence", text: "Manual transmission — small vehicle" },
          { id: "sk-6", label: "Certificate", text: "Chinese Cuisine (non-vegetarian), Class C" }
        ]
      })
    },
    {
      id: "kitchen",
      label: "Kitchen / Café",
      resume: resume({
        tagline: "Working Holiday — Kitchen · Café · Hospitality",
        summary:
          "Cook with paid brunch-kitchen experience, a Chinese cuisine certificate, and a track record of training teammates under peak service. Reliable with prep, cooking, cleaning, and ticket speed. Seeking Cook, Kitchen Hand, or café/hospitality roles in Australia.",
        sectionOrder: ["summary", "experience", "skills", "education"],
        jobs: [jobs.cook, jobs.military, jobs.ufoShort],
        skills: [
          { id: "sk-6", label: "Certificate", text: "Chinese Cuisine (non-vegetarian), Class C" },
          { id: "sk-1", label: "Kitchen", text: "Omelettes, pasta, egg dishes, prep, dishwashing, peak plating, cleaning" },
          { id: "sk-2", label: "Service", text: "Fast-paced brunch service, quality control, training new staff" },
          { id: "sk-5", label: "Licence", text: "Manual transmission — small vehicle" },
          { id: "sk-4", label: "Tools", text: "Google Forms, Excel" },
          { id: "sk-2b", label: "Languages", text: "Mandarin (native), English (meeting-level), Indonesian (conversational)" }
        ]
      })
    },
    {
      id: "farm",
      label: "Farm / Warehouse",
      resume: resume({
        tagline: "Working Holiday — Farm · Warehouse · Logistics",
        summary:
          "Reliable worker with early-shift kitchen stamina, a manual driver’s licence, and logistics experience coordinating transport and cash reconciliation for 100+ people. Process-oriented, accurate with counts, and comfortable with physical outdoor or warehouse work. Seeking farm, packing, warehouse, or general labour roles in Australia.",
        sectionOrder: ["summary", "experience", "skills", "education"],
        jobs: [jobs.military, jobs.cookPhysical, jobs.ufoShort],
        skills: [
          { id: "sk-5", label: "Licence", text: "Manual transmission — small vehicle" },
          { id: "sk-ops", label: "Operations", text: "Registration lists, fare tracking, cash collection, reconciliation for 100+ people" },
          { id: "sk-4", label: "Tools", text: "Google Forms, Excel — process improvement without on-site computers" },
          { id: "sk-phys", label: "Physical", text: "Early starts, standing service shifts, prep and cleaning through full days" },
          { id: "sk-2", label: "People", text: "Clear communication in English / Mandarin / Indonesian" },
          { id: "sk-6", label: "Certificate", text: "Chinese Cuisine (non-vegetarian), Class C" }
        ]
      })
    }
  ];

  global.ResumePresetData = {
    storageKey: "resume-au-v2",
    defaultId: catalog[0].id,
    catalog,
    getById(id) {
      return catalog.find((p) => p.id === id) || null;
    },
    /** Deep-cloned resume document ready for the editor. */
    buildDocument(id) {
      const entry = this.getById(id) || this.getById(this.defaultId);
      const doc = structuredClone(entry.resume);
      doc.presetId = entry.id;
      return doc;
    }
  };
})(window);
