export const caseStudyList = [
  {
    id: "ai-migration-tracker",
    title: "AI Migration Tracker",
    companyYear: "Oracle Health · 2024–Present",
    headline:
      "A tool I built to give leadership real-time visibility into an 18-month infrastructure migration.",
    problem:
      "Running a migration of this scale — 60 globally distributed teams, 1,100+ engineers, a hard deadline — meant that status was constantly stale, dependency risks were invisible until they became delays, and weekly leadership reviews were built on whatever people self-reported in Jira. There was no reliable signal.",
    approach:
      "I designed and built a React frontend backed by an AI agent and a headless Jira ingestion pipeline. The system automatically pulls cross-team ticket data, identifies slipping dates and unresolved dependencies, and surfaces prioritization signals. It replaced a manual reporting process with a live dashboard used in every leadership review.",
    outcome:
      "The tracker is now the operating system for the migration program. It surfaces risks weeks before they would otherwise appear, has informed resource reallocation across multiple teams, and contributed to $2M in avoided AWS infrastructure costs by keeping the migration timeline on track.",
    metrics: [
      { value: "$2M", label: "in avoided AWS costs" },
      { value: "60", label: "teams tracked" },
      { value: "1,100+", label: "engineers" },
    ],
    skills: ["Program Strategy", "AI/ML", "React", "Jira", "AWS", "OCI", "Stakeholder Management"],
    isTpmBuilt: true,
  },
  {
    id: "vendor-portfolio",
    title: "Vendor Portfolio Program",
    companyYear: "Oracle Health · 2022–Present",
    headline:
      "Bringing structure and accountability to a $70M vendor portfolio with no centralized management.",
    problem:
      "Oracle Health's vendor portfolio — 100+ vendors, $70M in annual recurring spend — had no centralized program. Contracts renewed without strategic review, performance wasn't tracked against commitments, and there was no structure for identifying consolidation opportunities or negotiating from leverage.",
    approach:
      "I built the vendor management program from scratch: intake and onboarding standards, performance review cadences, contract negotiation frameworks, and a consolidation strategy. I work directly with procurement, legal, and engineering leadership to ensure vendor relationships are aligned to business outcomes.",
    outcome:
      "Delivered $8M in total contract savings and $2.6M in annual recurring savings through renegotiations and strategic consolidation. The program now operates as a standing function with consistent governance across all 100+ vendor relationships.",
    metrics: [
      { value: "$8M", label: "in contract savings" },
      { value: "$2.6M", label: "annual recurring savings" },
      { value: "100+", label: "vendors managed" },
    ],
    skills: ["Vendor Management", "Program Strategy", "Contract Negotiation", "Stakeholder Management"],
    isTpmBuilt: false,
  },
  {
    id: "launchpad",
    title: "Launchpad",
    companyYear: "Amazon Ads · 2020–2022",
    headline:
      "An internal launch management platform that became how the entire org shipped product.",
    problem:
      "Amazon Ads had no consistent way to track product launches across teams. Release timelines lived in spreadsheets and one-off wikis, leadership reviews pulled from whatever PMs chose to update, and the lack of structure was adding months to the average time-to-release.",
    approach:
      "I led the design and delivery of Launchpad — an internal platform built with a team of 2 engineers and 4 external designers. The system centralized launch tracking, introduced a standardized release lifecycle, and integrated into weekly leadership standups. Adoption was driven through direct partnership with every product team lead, not a mandate.",
    outcome:
      "Launchpad reached 100% adoption across all product teams in the org. The average time-to-release dropped by 3 months per team. It became the system of record for the organization's product delivery.",
    metrics: [
      { value: "100%", label: "org-wide adoption" },
      { value: "3 mo", label: "reduction in avg time-to-release" },
      { value: "6", label: "person cross-functional team" },
    ],
    skills: ["Program Strategy", "Launch Management", "Stakeholder Management", "Product Development", "Agile / Scrum"],
    isTpmBuilt: false,
  },
];

export const tpmSkillList = [
  "Program Strategy",
  "Technical Program Management",
  "AI/ML",
  "Stakeholder Management",
  "Vendor Management",
  "React",
  "Jira",
  "AWS",
  "OCI",
  "Launch Management",
  "Agile / Scrum",
  "Contract Negotiation",
];
