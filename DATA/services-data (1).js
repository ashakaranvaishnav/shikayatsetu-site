// ShikayatSetu.in: starter data. verified_on is empty until each link is checked against an official source.
window.CATEGORIES = [
  { slug: "cybercrime", name: "Cybercrime and online fraud", desc: "Online scams, financial fraud, phishing, social media abuse" },
  { slug: "police", name: "Police and FIR services", desc: "e-FIR, missing person, lost documents, police clearance" },
  { slug: "aadhaar-pan", name: "Aadhaar and PAN", desc: "Aadhaar complaints, name mismatch, PAN grievance" },
  { slug: "banking", name: "Banking and finance", desc: "Bank, UPI, insurance, securities and pension complaints" },
  { slug: "consumer", name: "Consumer rights", desc: "E-commerce refunds, defective products, consumer courts" },
  { slug: "electricity", name: "Electricity and power", desc: "Power cuts, billing disputes, meter problems" },
  { slug: "railways", name: "Railways", desc: "Cleanliness, catering, security, refunds on trains" },
  { slug: "transport", name: "Transport and RTO", desc: "Driving licence, RC, e-challan, FASTag, flights" },
  { slug: "passport", name: "Passport and visa", desc: "Passport delays, police verification, overseas help" },
  { slug: "municipal", name: "Municipal and local body", desc: "Garbage, potholes, street lights, water supply" },
  { slug: "telecom", name: "Telecom and internet", desc: "Spam calls, SIM issues, lost phone, broadband" },
  { slug: "schemes", name: "Government schemes", desc: "CPGRAMS, pensions, ration, farmer and health schemes" },
  { slug: "other", name: "Other public services", desc: "EPFO, income tax, GST, post office, commissions" }
];

window.SERVICES = [
  { popular: true, name: "National Cyber Crime Reporting Portal", category: "cybercrime", department: "Ministry of Home Affairs", level: "Central government", scope: "All India",
    desc: "Report online financial fraud, phishing, social media abuse and other cyber crimes.",
    url: "https://cybercrime.gov.in/", domain: "cybercrime.gov.in", tags: ["scam", "upi fraud", "otp fraud", "hacking"], verified_on: "2026-11-05" },
  { popular: true, name: "Sanchar Saathi", category: "telecom", department: "Department of Telecommunications", level: "Central government", scope: "All India",
    desc: "Check mobile connections in your name, report lost phones and report suspected fraud calls and messages.",
    url: "https://sancharsaathi.gov.in/", domain: "sancharsaathi.gov.in", tags: ["spam call", "lost phone", "sim", "fraud sms"], verified_on: "2026-11-05" },
  { popular: true, name: "National Consumer Helpline", category: "consumer", department: "Department of Consumer Affairs", level: "Central government", scope: "All India",
    desc: "Register complaints about products, services, refunds and e-commerce.",
    url: "https://consumerhelpline.gov.in/", domain: "consumerhelpline.gov.in", tags: ["refund", "ecommerce", "defective product"], verified_on: "2026-11-05" },
  { popular: true, name: "RailMadad", category: "railways", department: "Indian Railways", level: "Central government", scope: "All India",
    desc: "Raise complaints and suggestions about train journeys, stations, cleanliness, catering and security.",
    url: "https://railmadad.indianrailways.gov.in/", domain: "railmadad.indianrailways.gov.in", tags: ["train", "irctc", "cleanliness", "catering"], verified_on: "2026-11-05" },
  { popular: true, name: "RBI Complaint Management System", category: "banking", department: "Reserve Bank of India", level: "Regulator", scope: "All India",
    desc: "Escalate complaints about banks, NBFCs and payment services after approaching the bank first.",
    url: "https://cms.rbi.org.in/", domain: "cms.rbi.org.in", tags: ["bank", "ombudsman", "upi", "loan"], verified_on: "2026-11-05" },
  { name: "SEBI SCORES", category: "banking", department: "Securities and Exchange Board of India", level: "Regulator", scope: "All India",
    desc: "Complaints against listed companies, brokers, mutual funds and other market intermediaries.",
    url: "https://scores.sebi.gov.in/", domain: "scores.sebi.gov.in", tags: ["stock", "broker", "demat", "mutual fund"], verified_on: "2026-11-05" },
  { popular: true, name: "CPGRAMS", category: "schemes", department: "Dept. of Administrative Reforms and Public Grievances", level: "Central government", scope: "All India",
    desc: "Central portal for grievances against central ministries and departments, and many state departments.",
    url: "https://pgportal.gov.in/", domain: "pgportal.gov.in", tags: ["grievance", "pension", "ministry"], verified_on: "2026-11-05" },
  { popular: true, name: "Passport Seva", category: "passport", department: "Ministry of External Affairs", level: "Central government", scope: "All India",
    desc: "Passport services and grievance registration for delays, verification and dispatch issues.",
    url: "https://www.passportindia.gov.in/", domain: "passportindia.gov.in", tags: ["passport", "police verification"], verified_on: "2026-11-05" },
  { popular: true, name: "Parivahan Sewa", category: "transport", department: "Ministry of Road Transport and Highways", level: "Central government", scope: "All India",
    desc: "Driving licence, vehicle registration and RTO services, with grievance options.",
    url: "https://parivahan.gov.in/", domain: "parivahan.gov.in", tags: ["rto", "driving licence", "rc", "challan"], verified_on: "2026-11-05" },
  { name: "EPFO Grievance Portal (EPFiGMS)", category: "other", department: "Employees' Provident Fund Organisation", level: "Central government", scope: "All India",
    desc: "Grievances about provident fund withdrawals, KYC, pension and UAN problems.",
    url: "https://epfigms.gov.in/", domain: "epfigms.gov.in", tags: ["pf", "epf", "uan", "pension"], verified_on: "2026-11-05" }
];

// Helpline numbers. Each was checked on the date below against government sources. Edit here to change the row on the site.
window.HOTLINES = [
  { label: "Cyber crime and online fraud", number: "1930", note: "National Cyber Crime Helpline", verified_on: "2026-11-05" },
  { label: "Consumer complaints", number: "1915", note: "National Consumer Helpline, 8 AM to 8 PM", verified_on: "2026-11-05" },
  { label: "Railway help and complaints", number: "139", note: "RailMadad helpline", verified_on: "2026-11-05" },
  { label: "Emergency (police, fire, ambulance)", number: "112", note: "National emergency number", verified_on: "2026-11-05" }
];
