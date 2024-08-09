const jobCategories = {
  "Development & Engineering": [
    "Infrastructure Engineer",
    "Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "System Administrator",
    "Database Administrator",
    "Network Engineer",
    "Security Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "QA Engineer",
    "Machine Learning Engineer",
    "Mobile App Developer",
    "Site Reliability Engineer",
    "Systems/Solutions Architect",
    "Application Support Engineer",
    "Web Developer",
    "API Developer",
    "Scrum Master",
  ],
  "Sales & Business Dev": [
    "Sales Representative",
    "Business Developer",
    "Account Manager",
    "Customer Success",
    "Inside Sales Specialist",
    "Sales Engineer",
  ],
  "Finance & Accounting": [
    "Accountant",
    "Accounts Payable/Receivable Specialist",
    "Bookkeeper",
    "Controller",
  ],
  "Product Dev & Design": [
    "Product Designer",
    "UI/UX Designer",
    "Graphic Designer",
    "Product Analyst",
    "User Researcher",
    "Web Designer",
  ],
  "HR & Internal Ops": [
    "Payroll Specialist",
    "Virtual Assistant",
    "Operations Coordinator",
    "Project Manager",
  ],
  "Marketing & Branding": [
    "Marketing Manager",
    "Content Marketer",
    "SEO Specialist",
    "Social Media Manager",
    "Brand Manager",
    "Digital Marketing Specialist",
    "Email Marketing",
    "Performance Marketing",
    "PR Specialist",
    "Performance Marketing Specialist",
  ],
  "Data & Analytics": [
    "Data Analyst",
    "QA Analyst",
    "Business Intelligence",
    "Statistician",
    "Quantitative Analyst",
    "Data Visualization Specialist",
    "Analytics",
  ],
};
const JobSalaries = {
  "Development & Engineering": {
    "Infrastructure Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 3125,
        },
        USA: {
          Median: 9800,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 6250,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 5000,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 6250,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        USA: {
          Median: 11525,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 7500,
          Median: 10000,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 8125,
          "Upper band": 9375,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 15000,
        },
        Argentina: {
          "Lower band": 5625,
          Median: 8125,
          "Upper band": 9375,
        },
        USA: {
          Median: 16593,
        },
      },
    },
    "Software Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 8923,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 13372,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 14794,
        },
      },
    },
    "Front-End Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 7609,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 12559,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 13287,
        },
      },
    },
    "Back-End Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 8398,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11334,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 13287,
        },
      },
    },
    "Full-Stack Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 11058,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11634,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 13333,
        },
      },
    },
    "DevOps Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 4687.5,
          Median: 5625,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 6000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 6250,
          "Upper band": 6875,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 4952,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 9375,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 8000,
          "Upper band": 8750,
        },
        Mexico: {
          "Lower band": 5500,
          Median: 8125,
          "Upper band": 8875,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11146,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 9375,
          Median: 10000,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Mexico: {
          "Lower band": 6800,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7750,
          "Upper band": 9375,
        },
        USA: {
          Median: 14643,
        },
      },
    },
    "System Administrator": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 5969,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 8789,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 9649,
        },
      },
    },
    "Database Administrator": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6293,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 9652,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 11218,
        },
      },
    },
    "Network Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6148,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 10292,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 11683,
        },
      },
    },
    "Security Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6777,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 12943,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 14419,
        },
      },
    },
    "Cloud Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6777,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11126,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 11275,
        },
      },
    },
    "Data Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6123,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11870,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 12000,
        },
      },
    },
    "QA Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6777,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 8982,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 11112,
        },
      },
    },
    "Machine Learning Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 5625,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 6000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 6250,
          "Upper band": 6875,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 6777,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 9375,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 8000,
          "Upper band": 8750,
        },
        Mexico: {
          "Lower band": 5500,
          Median: 8125,
          "Upper band": 8875,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11013,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 9375,
          Median: 10000,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Mexico: {
          "Lower band": 6800,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7750,
          "Upper band": 9375,
        },
        USA: {
          Median: 11945,
        },
      },
    },
    "Mobile App Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 8398,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 10428,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 12724,
        },
      },
    },
    "Site Reliability Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 10650,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 12514,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 14666,
        },
      },
    },
    "Systems/Solutions Architect": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6522,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 12448,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 13633,
        },
      },
    },
    "Application Support Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6777,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 9528,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 12175,
        },
      },
    },
    "Web Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 7479,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 8588,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 10812,
        },
      },
    },
    "API Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 8398,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 11757,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 12119,
        },
      },
    },
    "Scrum Master": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
        USA: {
          Median: 6841,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
        USA: {
          Median: 10407,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
        USA: {
          Median: 10878,
        },
      },
    },
    Savings: {
      annual: {
        value: 57188,
        percentage: 1100,
      },
      monthly: {
        value: 4765.666666666667,
        percentage: 91.66666666666667,
      },
    },
  },
  "Sales & Business Dev": {
    "Sales Representative": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        USA: {
          Median: 5024,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        USA: {
          Median: 6831,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        USA: {
          Median: 7159,
        },
      },
    },
    "Business Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        USA: {
          Median: 5621,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        USA: {
          Median: 6608,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        USA: {
          Median: 11953,
        },
      },
    },
    "Account Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        USA: {
          Median: 4642,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        USA: {
          Median: 6212,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        USA: {
          Median: 9495,
        },
      },
    },
    "Customer Success": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        USA: {
          Median: 4952,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        USA: {
          Median: 8893,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        USA: {
          Median: 11461,
        },
      },
    },
    "Inside Sales Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        USA: {
          Median: 5209,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        USA: {
          Median: 5808,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        USA: {
          Median: 9814,
        },
      },
    },
    "Sales Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1375,
          Median: 1687.5,
          "Upper band": 2062.5,
        },
        Colombia: {
          "Lower band": 1125,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1375,
          Median: 1687.5,
          "Upper band": 2062.5,
        },
        Argentina: {
          "Lower band": 1125,
          Median: 1875,
          "Upper band": 2250,
        },
        USA: {
          Median: 6777,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2062.5,
          Median: 2625,
          "Upper band": 3312.5,
        },
        Colombia: {
          "Lower band": 2000,
          Median: 2250,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2062.5,
          Median: 2625,
          "Upper band": 3312.5,
        },
        Argentina: {
          "Lower band": 2000,
          Median: 2250,
          "Upper band": 2750,
        },
        USA: {
          Median: 9079,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3312.5,
          Median: 4000,
          "Upper band": 4500,
        },
        Colombia: {
          "Lower band": 2750,
          Median: 3375,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 3312.5,
          Median: 4000,
          "Upper band": 4500,
        },
        Argentina: {
          "Lower band": 2750,
          Median: 3375,
          "Upper band": 4000,
        },
        USA: {
          Median: 11588,
        },
      },
    },
    Savings: {
      annual: {
        value: 34038,
        percentage: 1746,
      },
      monthly: {
        value: 2836.5,
        percentage: 145.5,
      },
    },
  },
  "Finance & Accounting": {
    Accountant: {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        USA: {
          Median: 5185,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        USA: {
          Median: 6449,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        USA: {
          Median: 7937,
        },
      },
    },
    "Accounts Payable/Receivable Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        USA: {
          Median: 4652,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        USA: {
          Median: 5142,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        USA: {
          Median: 7432,
        },
      },
    },
    Bookkeeper: {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        USA: {
          Median: 5283,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        USA: {
          Median: 5497,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        USA: {
          Median: 6323,
        },
      },
    },
    Controller: {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        USA: {
          Median: 5292,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        USA: {
          Median: 7267,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        USA: {
          Median: 9158,
        },
      },
    },
    Savings: {
      annual: {
        value: 33388,
        percentage: 1284,
      },
      monthly: {
        value: 2782.3333333333335,
        percentage: 107,
      },
    },
  },
  "Product Dev & Design": {
    "Product Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        USA: {
          Median: 5351,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        USA: {
          Median: 12366,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        USA: {
          Median: 13625,
        },
      },
    },
    "UI/UX Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        USA: {
          Median: 5351,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8867,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        USA: {
          Median: 13127,
        },
      },
    },
    "Graphic Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        USA: {
          Median: 4544,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        USA: {
          Median: 5281,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        USA: {
          Median: 6793,
        },
      },
    },
    "Product Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        USA: {
          Median: 6305,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8591,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        USA: {
          Median: 10725,
        },
      },
    },
    "User Researcher": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        USA: {
          Median: 6325,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        USA: {
          Median: 10675,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        USA: {
          Median: 10901,
        },
      },
    },
    "Web Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        USA: {
          Median: 5582,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        USA: {
          Median: 6873,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        USA: {
          Median: 8469,
        },
      },
    },
    Savings: {
      annual: {
        value: 31113,
        percentage: 638,
      },
      monthly: {
        value: 2592.75,
        percentage: 53.166666666666664,
      },
    },
  },
  "HR & Internal Ops": {
    "Payroll Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        USA: {
          Median: 5378,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        USA: {
          Median: 6094,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        USA: {
          Median: 7600,
        },
      },
    },
    "Virtual Assistant": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        USA: {
          Median: 4393,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        USA: {
          Median: 4952,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        USA: {
          Median: 6229,
        },
      },
    },
    "Operations Coordinator": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        USA: {
          Median: 4862,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        USA: {
          Median: 5475,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        USA: {
          Median: 6559,
        },
      },
    },
    "Project Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        USA: {
          Median: 6841,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        USA: {
          Median: 7163,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        USA: {
          Median: 11959,
        },
      },
    },
    Savings: {
      annual: {
        value: 41888,
        percentage: 3222,
      },
      monthly: {
        value: 3490.6666666666665,
        percentage: 268.5,
      },
    },
  },
  "Marketing & Branding": {
    "Marketing Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 5666,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 7880,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        USA: {
          Median: 10606,
        },
      },
    },
    "Content Marketer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 5441,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 5618,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8267,
        },
      },
    },
    "SEO Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 5000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 6360,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 7075,
        },
      },
    },
    "Social Media Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 4483,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 6120,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 6701,
        },
      },
    },
    "Brand Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 4400,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 4616,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8730,
        },
      },
    },
    "Digital Marketing Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 4716,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 6174,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8267,
        },
      },
    },
    "Email Marketing": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 4338,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 5441,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8606,
        },
      },
    },
    "Performance Marketing": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 5441,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 8606,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 9878,
        },
      },
    },
    "PR Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 4950,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 6362,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 8084,
        },
      },
    },
    "Performance Marketing Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        USA: {
          Median: 5441,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        USA: {
          Median: 8606,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        USA: {
          Median: 9878,
        },
      },
    },
    Savings: {
      annual: {
        value: 41563,
        percentage: 2558,
      },
      monthly: {
        value: 3463.5833333333335,
        percentage: 213.16666666666666,
      },
    },
  },
  "Data & Analytics": {
    "Data Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 7126,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 7490,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 9366,
        },
      },
    },
    "QA Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 5141,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 7329,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 9525,
        },
      },
    },
    "Business Intelligence": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 6095,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 10333,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 13888,
        },
      },
    },
    Statistician: {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 5292,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 8111,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 9345,
        },
      },
    },
    "Quantitative Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 6305,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 10368,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 12636,
        },
      },
    },
    "Data Visualization Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 6885,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 7490,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 10330,
        },
      },
    },
    Analytics: {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        USA: {
          Median: 9444,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        USA: {
          Median: 11829,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        USA: {
          Median: 14924,
        },
      },
    },
    Savings: {
      annual: {
        value: 28713,
        percentage: 589,
      },
      monthly: {
        value: 2392.75,
        percentage: 49.083333333333336,
      },
    },
  },
};
let currentGroup = "Choose a group";
let currentJobTitle = "Choose a job title";
let currentCountry = "Choose a country";
let currentExperience = "Choose the experience";
let currentCostToggleButton = "Monthly";
let currentSavingsToggleButton = "Monthly";
let currentMobileCalculatorSection = "costs";

document.addEventListener("DOMContentLoaded", () => {
  const costValue = document.getElementById("calculator-costs-value");
  const costCandidatesSalary = document.getElementById(
    "calculator-costs-candidates-salary"
  );
  const costTalentFee = document.getElementById("calculator-costs-talent-fee");
  const costTotal = document.getElementById("calculator-costs-total");

  const savingsCostInLATAM = document.getElementById(
    "calculator-savings-cost-LATAM"
  );
  const savingsCostInUSA = document.getElementById(
    "calculator-savings-cost-USA"
  );
  const savingsCostVs = document.getElementById("calculator-savings-cost-vs");

  function setCalculatorCostsValues(
    total,
    candidatesSalary,
    talentFee,
    totalPayment
  ) {
    costValue.innerHTML = `${total}`; // Total
    costCandidatesSalary.innerHTML = `Candidate's salary: ${candidatesSalary}`;
    costTalentFee.innerHTML = `Teilur Talent's fee: ${talentFee}`;
    costTotal.innerHTML = `Total Payment: ${totalPayment}`;
  }
  function setCalculatorSavingsValues(
    costLATAM,
    costUSA,
    costVs,
    percentageSaved
  ) {
    savingsCostInLATAM.innerHTML = `${costLATAM}`;
    savingsCostInUSA.innerHTML = `${costUSA}`;
    savingsCostVs.innerHTML = `${costVs} / ${percentageSaved}%`;
  }

  // Calculate costs
  function calculateCosts() {
    if (
      currentGroup == "Choose a group" ||
      currentJobTitle == "Choose a job title" ||
      currentCountry == "Choose a country" ||
      currentExperience == "Choose the experience"
    )
      return;

    if (currentCountry == "All LATAM") currentCountry = "Colombia";

    const salaries =
      JobSalaries[currentGroup][currentJobTitle][currentExperience][
        currentCountry
      ];
    const { Median } = salaries;

    if (currentCostToggleButton === "Monthly") {
      const total = Median;
      const candidatesSalary = Median - Median * 0.2;
      const talentFee = Median - Median * 0.8;
      const totalPayment = Median;

      setCalculatorCostsValues(
        total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        candidatesSalary.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        talentFee.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        totalPayment.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    } else {
      const medianAnnualSalary = Median * 12;
      const total = medianAnnualSalary;
      const candidatesSalary = medianAnnualSalary - medianAnnualSalary * 0.2;
      const talentFee = medianAnnualSalary - medianAnnualSalary * 0.8;
      const totalPayment = medianAnnualSalary;

      setCalculatorCostsValues(
        total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        candidatesSalary.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        talentFee.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        totalPayment.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    }
  }

  // Calculate savings
  function calculateSavings() {
    if (
      currentGroup == "Choose a group" ||
      currentJobTitle == "Choose a job title" ||
      currentCountry == "Choose a country" ||
      currentExperience == "Choose the experience"
    )
      return;

    const salaries =
      JobSalaries[currentGroup][currentJobTitle][currentExperience][
        currentCountry
      ];

    let { Median: LATAMMedian } = salaries;
    let USASalary =
      JobSalaries[currentGroup][currentJobTitle][currentExperience]["USA"]
        .Median;

    let costSavedByContractingInLatam = USASalary - LATAMMedian;
    let percentageSavedByContractingInLatam = Math.round(
      (LATAMMedian / USASalary) * 100
    );

    if (currentSavingsToggleButton === "Annual") {
      LATAMMedian = LATAMMedian * 12;
      USASalary = USASalary * 12;
      costSavedByContractingInLatam = costSavedByContractingInLatam * 12;
      percentageSavedByContractingInLatam =
        percentageSavedByContractingInLatam * 12;
    }

    setCalculatorSavingsValues(
      LATAMMedian.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      USASalary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      costSavedByContractingInLatam.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      percentageSavedByContractingInLatam
    );
  }

  // Submit button
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    calculateCosts();
    calculateSavings();
  });

  // Job select dynamic options
  const groupSelect = document.getElementById("calculator-group-select");
  const jobTitleSelect = document.getElementById("calculator-job-title-select");
  const countrySelect = document.getElementById("calculator-country-select");
  const experienceSelect = document.getElementById(
    "calculator-experience-select"
  );

  // Dynamically populate the job title select
  groupSelect.addEventListener("change", () => {
    currentGroup = groupSelect.value;
    const jobTitleOptions = jobCategories[groupSelect.value];
    jobTitleSelect.innerHTML = "";

    ["Choose a job title", ...jobTitleOptions].forEach((jobTitle) => {
      const option = document.createElement("option");
      option.value = jobTitle;
      option.text = jobTitle;
      jobTitleSelect.appendChild(option);
    });
  });

  jobTitleSelect.addEventListener("change", () => {
    currentJobTitle = jobTitleSelect.value;
  });

  countrySelect.addEventListener("change", () => {
    currentCountry = countrySelect.value;
  });

  experienceSelect.addEventListener("change", () => {
    currentExperience = experienceSelect.value;
  });

  // Toggle Buttons
  const monthlyCostBtn = document.getElementById("calculator-cost-monthly-btn");
  const annualCostBtn = document.getElementById("calculator-cost-annual-btn");
  const monthlySavingsBtn = document.getElementById(
    "calculator-savings-monthly-btn"
  );
  const annualSavingsBtn = document.getElementById(
    "calculator-savings-annual-btn"
  );
  monthlyCostBtn.addEventListener("click", () => {
    currentCostToggleButton = "Monthly";
    calculateCosts();

    monthlyCostBtn.classList.add("toggle-button-active");
    monthlyCostBtn.classList.remove("toggle-button");

    annualCostBtn.classList.remove("toggle-button-active");
    annualCostBtn.classList.add("toggle-button");
  });
  annualCostBtn.addEventListener("click", () => {
    currentCostToggleButton = "Annual";
    calculateCosts();

    annualCostBtn.classList.add("toggle-button-active");
    annualCostBtn.classList.remove("toggle-button");

    monthlyCostBtn.classList.remove("toggle-button-active");
    monthlyCostBtn.classList.add("toggle-button");
  });
  monthlySavingsBtn.addEventListener("click", () => {
    currentSavingsToggleButton = "Monthly";
    calculateSavings();

    monthlySavingsBtn.classList.add("toggle-button-active");
    monthlySavingsBtn.classList.remove("toggle-button");

    annualSavingsBtn.classList.remove("toggle-button-active");
    annualSavingsBtn.classList.add("toggle-button");
  });
  annualSavingsBtn.addEventListener("click", () => {
    currentSavingsToggleButton = "Annual";
    calculateSavings();

    annualSavingsBtn.classList.add("toggle-button-active");
    annualSavingsBtn.classList.remove("toggle-button");

    monthlySavingsBtn.classList.remove("toggle-button-active");
    monthlySavingsBtn.classList.add("toggle-button");
  });

  // Mobile calculator
  const calculatorHeadingCostBtn = document.getElementById(
    "calculator-heading-h-costs"
  );
  const calculatorHeadingSavingsBtn = document.getElementById(
    "calculator-heading-h-savings"
  );
  const calculatorCostsCol = document.getElementById("calculator-costs-col");
  const calculatorSavingsCol = document.getElementById(
    "calculator-savings-col"
  );

  calculatorHeadingCostBtn.addEventListener("click", () => {
    if (currentMobileCalculatorSection == "costs") {
      return;
    }

    currentMobileCalculatorSection = "costs";

    calculatorSavingsCol.classList.add("col-hidden");
    calculatorCostsCol.classList.remove("col-hidden");

    calculatorHeadingCostBtn.classList.add("calculator-heading-btn-active");

    calculatorHeadingSavingsBtn.classList.remove(
      "calculator-heading-btn-active"
    );
  });
  calculatorHeadingSavingsBtn.addEventListener("click", () => {
    if (currentMobileCalculatorSection == "savings") {
      return;
    }

    currentMobileCalculatorSection = "savings";

    calculatorCostsCol.classList.add("col-hidden");
    calculatorSavingsCol.classList.remove("col-hidden");

    calculatorHeadingSavingsBtn.classList.add("calculator-heading-btn-active");

    calculatorHeadingCostBtn.classList.remove("calculator-heading-btn-active");
  });
});
