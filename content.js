/* =====================================================================
   HARUN NABIYEV — WEBSITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   Everything on the page is generated from the data below.

   Rules of thumb:
   • Text goes inside quotes: "like this". Keep the quotes and commas.
   • Items in a list are separated by commas.
   • To add a project or job, copy one { ... }, block and edit it.
   • To remove something, delete its whole { ... }, block (or line).
   • Leave a field empty ("" or []) if it does not apply — it hides.
   • Double-click index.html to preview before uploading.
   ===================================================================== */

const SITE = {

  /* ---------- Identity ---------- */
  name: "Harun Nabiyev",
  role: "IB Diploma Student · Class of 2027",
  school: "Dunya IB School, Baku, Azerbaijan",
  email: "",                       // e.g. "harun@example.com" — leave "" to hide
  photo: "photo.jpg",              // add a square headshot with this name; hides if missing
  cvFile: "Harun_Nabiyev_CV.pdf",  // the CV PDF next to index.html

  links: [
    { label: "GitHub",   url: "https://github.com/harun822",                              icon: "github" },
    { label: "LinkedIn", url: "",                                                         icon: "linkedin" },
    { label: "ISEF Project", url: "https://isef.net/project/sftd048t-ai-and-financial-literacy", icon: "link" },
  ],

  /* ---------- Hero ---------- */
  // The big statement at the top. Keep it to one or two lines.
  headline: "I build tools that make complicated information understandable.",
  subline: "Applied AI · financial literacy · open data — from Baku, Azerbaijan.",

  // Three quick facts shown as a strip under the headline.
  facts: [
    { value: "40", label: "Predicted IB score (out of 45)" },
    { value: "ISEF", label: "Microsoft Special Award, 2026" },
    { value: "1", label: "Peer-reviewed paper, sole author" },
  ],

  /* ---------- About ---------- */
  about: [
    "I am a final-year International Baccalaureate student at Dunya IB School in Baku, taking Higher Level Mathematics, Computer Science, and English. I am interested in how artificial intelligence can turn dense, technical material — a company's financial statements, a satellite data feed, a government form — into something a regular person can use.",
    "That interest runs through most of what I do: co-founding Eduvest, an AI platform that explains Baku Stock Exchange companies to first-time investors; writing a peer-reviewed review of how large language models verify their sources; and interning at Azerbaijan's National Artificial Intelligence Center, where I write Python under senior-developer mentorship. Outside of that, I train judo three times a week and have done for two years.",
  ],

  /* ---------- Featured projects ---------- */
  // These get large cards. `tag` is a short category label.
  projects: [
    {
      title: "Eduvest",
      tag: "Co-Founder & AI Developer · Sep 2025 – present",
      summary: "An adaptive AI platform that analyses companies listed on the Baku Stock Exchange and explains their financial statements to novice investors in plain, everyday language.",
      details: [
        "Lead the natural-language processing system: Python, the OpenAI API, and neural-network models that extract, process, and summarise financial disclosures.",
        "3rd place at Sabahın Alimləri, one of Azerbaijan's leading youth research and innovation programmes; selected to represent Azerbaijan at the International Science and Engineering Fair (ISEF).",
        "Microsoft Special Award at ISEF 2026.",
      ],
      link: "https://isef.net/project/sftd048t-ai-and-financial-literacy",
      linkLabel: "ISEF project page",
    },
    {
      title: "Information Retrieval Reliability in Large Language Models: A Study of Source Verification",
      tag: "Sole author · International Journal of High School Research (peer-reviewed) · forthcoming Sep 2026",
      summary: "A review paper on why large language models produce unsupported content, and how source-verification mechanisms reduce it.",
      details: [
        "Synthesised more than 20 studies from arXiv, ACL, NeurIPS, ICLR, and ACM Computing Surveys across four layers: retrieval-augmented generation, source-reliability estimation, chain-of-verification self-checking, and benchmark-based measurement.",
        "Found that RAG cuts hallucination substantially but introduces new risks tied to source quality, currency, and diversity; identified explicit reliability modelling, multi-step verification, and independent benchmarks as the most effective safeguards.",
        "Proposed a practical source-verification checklist for students, with attention to the thin source base available in Azerbaijani and other lower-resource languages, and argued for teaching verification skills in school curricula.",
      ],
      link: "",
      linkLabel: "Read the paper",
    },
  ],

  /* ---------- Experience (timeline) ---------- */
  experience: [
    {
      role: "Artificial Intelligence Intern",
      org: "National Artificial Intelligence Center (NAIC)",
      place: "Baku, Azerbaijan",
      period: "June 2026 – present",
      points: [
        "Develop Python applications under senior-developer mentorship, including a game prototype with custom collision-detection logic.",
        "Debug and refactor code in team reviews; practise version control on a real codebase.",
        "Joined during a period of rapid growth as the centre expanded from 15 to 70 staff.",
      ],
    },
    {
      role: "Space Data & Mission Analytics Intern",
      org: "Ideia Space",
      place: "Remote",
      period: "Spring 2026",
      points: [
        "End-to-end mission simulations covering orbital mechanics, ground-station networks, and mission-control operations.",
        "Followed the full mission lifecycle from launch planning through in-orbit operations and data downlink.",
      ],
    },
    {
      role: "Intern",
      org: "ASAN Service, State Agency for Public Services and Social Innovations",
      place: "Baku, Azerbaijan",
      period: "Sep – Nov 2025",
      points: [
        "100+ hours helping citizens draft official letters and complete government service applications.",
        "Organised and cleaned operational data in Excel and internal ASAN software to improve workflow coordination.",
      ],
    },
    {
      role: "Research Intern (Observer)",
      org: "Azercosmos — Azerbaijan National Space Agency",
      place: "Baku, Azerbaijan",
      period: "June – Aug 2024",
      points: [
        "Observed operational satellite-data workflows across climate and geospatial applications.",
        "Identified barriers between collected satellite data and public access — the start of a continuing interest in open data.",
      ],
    },
  ],

  /* ---------- Education ---------- */
  education: [
    {
      school: "Dunya IB School",
      place: "Baku, Azerbaijan",
      degree: "International Baccalaureate Diploma Programme",
      period: "Expected June 2027",
      points: [
        "Predicted IB 40/45; GPA 4.9/5.0. Merit-based tuition scholarship.",
        "Higher Level: Mathematics AA, English B, Computer Science. Standard Level: Physics, Economics, Azerbaijani A.",
        "MYP: 8/8 in Biology; 7/8 in Physics, Design, Geography, and World History.",
      ],
    },
    {
      school: "Cornell University, School of Continuing Education",
      place: "Ithaca, NY, USA",
      degree: "Pre-College Student",
      period: "June – July 2026",
      points: [
        "Three-week programme for college credit alongside undergraduates.",
        "AEM 2841: Python for Non-Dyson Majors — final grade A−. Applied statistical modelling and data analysis to real-world datasets.",
      ],
    },
    {
      school: "Oxford Summer Courses",
      place: "Oxford, United Kingdom",
      degree: "Advanced Mathematics",
      period: "Summer 2025",
      points: [
        "Intensive university-level mathematics (~45 hours/week for three weeks) in Oxford-style small-group tutorials on topics beyond the IB curriculum.",
      ],
    },
    {
      school: "ISSOS International Summer School",
      place: "United Kingdom",
      degree: "Summer Programme Student",
      period: "Summer 2024",
      points: [
        "Residential programme combining academic coursework with leadership development and cross-cultural teamwork.",
      ],
    },
  ],

  /* ---------- Honors & competitions ---------- */
  honors: [
    { year: "2026", text: "Microsoft Special Award, International Science and Engineering Fair (ISEF)" },
    { year: "2026", text: "3rd place, Sabahın Alimləri national youth research programme; selected to represent Azerbaijan at ISEF" },
    { year: "2026", text: "Sole-authored paper accepted, International Journal of High School Research" },
    { year: "",     text: "1st place, interschool intellectual competition" },
    { year: "",     text: "American Mathematics Olympiad and Math Kangaroo (national competitor)" },
    { year: "",     text: "International History Bee & Bowl, Azerbaijan" },
    { year: "",     text: "Admitted to online pre-college finance programmes at Georgetown, Northwestern, and Dartmouth" },
  ],

  /* ---------- Activities ---------- */
  activities: [
    {
      title: "Delegate for Azerbaijan, IMUN “Future We Want”",
      where: "Washington, D.C. · November 2026 (upcoming)",
      text: "Debating global policy and co-drafting resolutions with delegates from 30+ countries.",
    },
    {
      title: "Judo, Safarov Judo Academy",
      where: "Baku · 2024 – present",
      text: "Three sessions a week, 48 weeks a year: breakfalls, throws, groundwork, grip fighting, and randori. Also swimming, skiing, football, cycling, and twice-weekly strength training.",
    },
  ],

  /* ---------- Skills, languages, tests ---------- */
  skills: ["Python", "OpenAI API", "NLP", "Data analysis", "Statistical modelling", "Excel", "Git"],
  languages: ["Azerbaijani (native)", "Turkish (fluent)", "English (advanced)", "Russian (intermediate)"],
  tests: ["SAT 1450 (Math 770, Verbal 680), 2025", "Duolingo English Test 125, 2023"],

  /* ---------- Footer ---------- */
  footerNote: "",   // e.g. "Last updated September 2026"
};
