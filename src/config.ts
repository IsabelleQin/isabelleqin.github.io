export const siteConfig = {
  name: "Qiaolin (Isabelle) Qin",
  title: "Ph.D. student at Polytechnique Montreal",
  description: "Isablle's main page",
  accentColor: "#f576d5",
  social: {
    email: "qiaolin.qin@etud.polymtl.ca",
    linkedin: "https://www.linkedin.com/in/isabelleqin1213/",
    github: "https://github.com/IsabelleQin",
  },
  aboutMe:
    `I am a third-year Ph.D. student at Polytechnique Montreal, supervised by Professor Heng Li and Professor Ettore Merlo. Before joining PolyMTL, I obtained my bachelor's degree from Southeast University. 
    My current research interests include data engineering, log analysis, AI fairness, and AI explainability. So far, I still prefer statistic-based solutions for tasks in these fields over LLM-based approaches. 
    TMI: I train for bodybuilding, and I am currently a member of the UdeM dragonboat team; my current deadlift PR is 265 (with straps). My favorite Pokémon are Clogsire and Quagsire, and then Dragonite and Riolu.`,
  misc: [{ name: "Visit Our Lab", link: "https://moose.polymtl.ca/" },
        { name: "My Google Scholar", link: "https://scholar.google.com/citations?user=hzQSPFUAAAAJ&hl=en" }],
  experience: [
    {
      title: "2025",
      bullets: [
        {text: 'Q. Qin and E. Merlo, "Prune Bias From the Root: Bias Removal and Fairness Estimation by Pruning Sensitive Attributes in Pre-trained DNN Models," Information and Software Technology (IST), vol 188, 2025. ', 
         link: "https://www.sciencedirect.com/science/article/pii/S0950584925002459"},
        {text: 'Q. Qin, B. Dijan, E. Merlo, H. Li, and S. Gambs, "Representation-Based Fairness Evaluation and Bias Correction Robustness Assessment in Neural Networks," Information and Software Technology (IST), vol 188, 2025.', 
         link: "https://www.sciencedirect.com/science/article/pii/S0950584925002150" },
        {text: 'Q. Qin, H. Li, E. Merlo, and M. Lamothe, "Automated, Unsupervised, and Auto-parameterized Inference of Data Patterns and Anomaly Detection," in Proceedings of the 47th International Conference on Software Engineering (ICSE), 2025.', 
         link: "https://arxiv.org/abs/2412.05240" },
        {text: 'Q. Qin, R. Aghili, H. Li, and E. Merlo, "Preprocessing is All You Need: Boosting the Performance of Log Parsers With a General Preprocessing Framework," in Proceedings of the 32nd IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER), 2025.', 
         link: "https://arxiv.org/abs/2412.05254" },
        {text: 'G. Caumartin, Q. Qin, S. Chatragadda, J. Panjrolia, H. Li, and D. Costa, "Exploring the Potential of Llama Models in Automated Code Refinement: A Replication Study," in Proceedings of the 32nd IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER), 2025.', 
         link: "https://arxiv.org/abs/2412.02789" },
        ],
    },
    {
      title: "2024",
      bullets: [
        {text: 'R. Aghili, Q. Qin, H. Li, and F. Khomh, "Understanding Web Application Workloads and Their Applications: Systematic Literature Review and Characterization," in Proceedings of the 40th IEEE International Conference on Software Maintenance and Evolution (ICSME), 2024. ', 
         link: "https://ieeexplore.ieee.org/abstract/document/10795077" },
        {text: 'Q. Qin, H. Li, E. Merlo, "Wrangling Data Issues to be Wrangled: Literature Review, Taxonomy, and Industry Case Study," arXiv preprint, 2024.', 
         link: "https://arxiv.org/abs/2405.16033" },
        ],
    },
  ],
  projects: [
    {
      name: "Teaching",
      bullets: [
        { text: "Lecturer for LOG8371E: Software Quality Engineering (2025 Fall)"},
        { text: "Teaching Assistant for LOG6305: Techniques avancées de test du logiciel (2025 Winter)" }
      ]
    },
    {
      name: "Program Committee Member",
      bullets: [
        { text: "The International Workshop on Fairness in Software Systems (Fairness), Journal-First Co-Chair, 2026" },
        { text: "The International Conference on Technical Debt (TechDebt), Committee Member in Technical Papers track, 2026" },
        { text: "The International Conference on Collaborative Advances in Software and Computing (CASCON), Committee Member in Artifacts track, 2025" },
        { text: "The International Conference on Evaluation and Assessment in Software Engineering (EASE), Committee Member in AI Models / Data track, 2025"},
      ],
    },
    {
      name: "Journal Reviewer",
      bullets: [
        { text: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
        link: "https://dl.acm.org/journal/tosem"},
        { text: "IEEE Transactions on Software Engineering (TSE)",
        link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32"},
        { text: "Information and Software Technology (IST)", 
        link: "https://www.sciencedirect.com/journal/information-and-software-technology"}
      ]
    },
    {
      name: "Volunteering",
      bullets: [
        { text: "The IEEE/ACM International Conference on Software Engineering (ICSE), 2025" },
        { text: "Software Engineering for Machine Learning Applications Symposium (SEMLA), 2024"},
      ]
    },
    {
      name: "Industrial Experience",
      bullets: [
        { text: "Air Canada, Data Analyst Intern (Sep. 2023 – Aug. 2024)"},
        { text: "Intel Joint Research Institute on Intelligent Edge Computing, Computer Vision Algorithm Engineer Intern (Aug. 2022 – Apr. 2023)" }
      ]
    },
  ],
  education: [
    {
      school: "Polytechnique Montreal, Montreal, Canada",
      degree: "PhD in Software Engineering",
      dateRange: "2023 - ",
      achievements: [
      ],
    },
    {
      school: "Southeast University, Nanjing, China",
      degree: "BEng in Artificial Intelligence",
      dateRange: "2019 - 2023",
      achievements: [
      ],
    },
  ],
};
