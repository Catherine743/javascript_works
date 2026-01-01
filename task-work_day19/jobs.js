var jobs = [
  { id: 1, title: "Frontend Developer", companyName: "TCS", role: "Developer", skills: ["HTML", "CSS", "JavaScript"], noOfVacancy: 5 },
  { id: 2, title: "Backend Developer", companyName: "Infosys", role: "Developer", skills: ["Node.js", "Express", "MongoDB"], noOfVacancy: 4 },
  { id: 3, title: "Full Stack Developer", companyName: "Wipro", role: "Developer", skills: ["React", "Node.js", "MySQL"], noOfVacancy: 6 },
  { id: 4, title: "Python Developer", companyName: "Accenture", role: "Developer", skills: ["Python", "Django", "REST API"], noOfVacancy: 3 },
  { id: 5, title: "Java Developer", companyName: "Cognizant", role: "Developer", skills: ["Java", "Spring Boot", "MySQL"], noOfVacancy: 5 },

  { id: 6, title: "Data Analyst", companyName: "IBM", role: "Analyst", skills: ["Python", "SQL", "Excel"], noOfVacancy: 4 },
  { id: 7, title: "Data Scientist", companyName: "Amazon", role: "Scientist", skills: ["Python", "Machine Learning", "Pandas"], noOfVacancy: 3 },
  { id: 8, title: "AI Engineer", companyName: "Google", role: "Engineer", skills: ["Python", "TensorFlow", "Deep Learning"], noOfVacancy: 2 },
  { id: 9, title: "ML Engineer", companyName: "Microsoft", role: "Engineer", skills: ["Python", "Scikit-learn", "ML"], noOfVacancy: 3 },
  { id: 10, title: "Cloud Engineer", companyName: "AWS", role: "Engineer", skills: ["AWS", "Linux", "Networking"], noOfVacancy: 4 },

  { id: 11, title: "DevOps Engineer", companyName: "RedHat", role: "Engineer", skills: ["Docker", "Kubernetes", "CI/CD"], noOfVacancy: 3 },
  { id: 12, title: "System Administrator", companyName: "Oracle", role: "Administrator", skills: ["Linux", "Shell Scripting", "Networking"], noOfVacancy: 2 },
  { id: 13, title: "Database Administrator", companyName: "SAP", role: "Administrator", skills: ["MySQL", "Oracle", "Performance Tuning"], noOfVacancy: 2 },
  { id: 14, title: "Network Engineer", companyName: "Cisco", role: "Engineer", skills: ["Routing", "Switching", "Firewall"], noOfVacancy: 4 },
  { id: 15, title: "Cyber Security Analyst", companyName: "Palo Alto", role: "Analyst", skills: ["Security", "SIEM", "Ethical Hacking"], noOfVacancy: 3 },

  { id: 16, title: "UI Designer", companyName: "Zoho", role: "Designer", skills: ["Figma", "Adobe XD", "UI"], noOfVacancy: 2 },
  { id: 17, title: "UX Designer", companyName: "Freshworks", role: "Designer", skills: ["UX Research", "Wireframing", "Prototyping"], noOfVacancy: 2 },
  { id: 18, title: "Graphic Designer", companyName: "BYJU'S", role: "Designer", skills: ["Photoshop", "Illustrator", "Creativity"], noOfVacancy: 3 },
  { id: 19, title: "Product Designer", companyName: "Flipkart", role: "Designer", skills: ["Design Thinking", "Figma", "UX"], noOfVacancy: 2 },
  { id: 20, title: "Motion Designer", companyName: "Swiggy", role: "Designer", skills: ["After Effects", "Animation", "Creativity"], noOfVacancy: 1 },

  { id: 21, title: "QA Tester", companyName: "HCL", role: "Tester", skills: ["Manual Testing", "Test Cases", "Bug Tracking"], noOfVacancy: 5 },
  { id: 22, title: "Automation Tester", companyName: "Tech Mahindra", role: "Tester", skills: ["Selenium", "Java", "Automation"], noOfVacancy: 4 },
  { id: 23, title: "Performance Tester", companyName: "Capgemini", role: "Tester", skills: ["JMeter", "Load Testing", "Analysis"], noOfVacancy: 2 },
  { id: 24, title: "API Tester", companyName: "Mindtree", role: "Tester", skills: ["Postman", "REST API", "Automation"], noOfVacancy: 3 },
  { id: 25, title: "Security Tester", companyName: "Deloitte", role: "Tester", skills: ["VAPT", "OWASP", "Security"], noOfVacancy: 2 },

  { id: 26, title: "HR Executive", companyName: "Reliance", role: "HR", skills: ["Recruitment", "Communication", "Onboarding"], noOfVacancy: 3 },
  { id: 27, title: "HR Manager", companyName: "Aditya Birla", role: "HR", skills: ["People Management", "Payroll", "Compliance"], noOfVacancy: 2 },
  { id: 28, title: "Technical Recruiter", companyName: "LinkedIn", role: "HR", skills: ["Hiring", "Screening", "Interviewing"], noOfVacancy: 4 },
  { id: 29, title: "Talent Acquisition", companyName: "Paytm", role: "HR", skills: ["Recruitment", "ATS", "Communication"], noOfVacancy: 3 },
  { id: 30, title: "HR Operations", companyName: "Infosys", role: "HR", skills: ["HRMS", "Documentation", "Policies"], noOfVacancy: 2 },

  { id: 31, title: "Business Analyst", companyName: "EY", role: "Analyst", skills: ["Requirement Analysis", "SQL", "Documentation"], noOfVacancy: 4 },
  { id: 32, title: "Financial Analyst", companyName: "Goldman Sachs", role: "Analyst", skills: ["Finance", "Excel", "Reporting"], noOfVacancy: 3 },
  { id: 33, title: "Marketing Analyst", companyName: "Unilever", role: "Analyst", skills: ["Market Research", "Data Analysis", "Presentation"], noOfVacancy: 2 },
  { id: 34, title: "Operations Analyst", companyName: "Uber", role: "Analyst", skills: ["Process Analysis", "Excel", "Reporting"], noOfVacancy: 3 },
  { id: 35, title: "Risk Analyst", companyName: "KPMG", role: "Analyst", skills: ["Risk Assessment", "Compliance", "Analytics"], noOfVacancy: 2 },

  { id: 36, title: "Project Manager", companyName: "Infosys", role: "Manager", skills: ["Project Planning", "Agile", "Leadership"], noOfVacancy: 3 },
  { id: 37, title: "Product Manager", companyName: "Google", role: "Manager", skills: ["Product Strategy", "Roadmap", "Stakeholders"], noOfVacancy: 2 },
  { id: 38, title: "Delivery Manager", companyName: "TCS", role: "Manager", skills: ["Delivery", "Client Handling", "Management"], noOfVacancy: 2 },
  { id: 39, title: "IT Manager", companyName: "HDFC", role: "Manager", skills: ["IT Operations", "Team Management", "Budgeting"], noOfVacancy: 1 },
  { id: 40, title: "Engineering Manager", companyName: "Meta", role: "Manager", skills: ["Leadership", "Architecture", "Mentoring"], noOfVacancy: 2 },

  { id: 41, title: "Content Writer", companyName: "Zomato", role: "Content", skills: ["Writing", "SEO", "Creativity"], noOfVacancy: 3 },
  { id: 42, title: "Technical Writer", companyName: "Atlassian", role: "Content", skills: ["Documentation", "API Docs", "Writing"], noOfVacancy: 2 },
  { id: 43, title: "Digital Marketing Executive", companyName: "Google", role: "Marketing", skills: ["SEO", "SEM", "Analytics"], noOfVacancy: 4 },
  { id: 44, title: "Social Media Manager", companyName: "Instagram", role: "Marketing", skills: ["Social Media", "Content Strategy", "Analytics"], noOfVacancy: 2 },
  { id: 45, title: "Brand Manager", companyName: "Nike", role: "Marketing", skills: ["Branding", "Campaigns", "Strategy"], noOfVacancy: 1 },

  { id: 46, title: "Sales Executive", companyName: "BYJU'S", role: "Sales", skills: ["Sales", "Communication", "Negotiation"], noOfVacancy: 6 },
  { id: 47, title: "Account Manager", companyName: "Salesforce", role: "Sales", skills: ["Client Handling", "CRM", "Sales"], noOfVacancy: 3 },
  { id: 48, title: "Business Development Executive", companyName: "Ola", role: "Sales", skills: ["Lead Generation", "Negotiation", "Sales"], noOfVacancy: 4 },
  { id: 49, title: "Inside Sales Executive", companyName: "HubSpot", role: "Sales", skills: ["CRM", "Communication", "Sales"], noOfVacancy: 5 },
  { id: 50, title: "Regional Sales Manager", companyName: "Amazon", role: "Sales", skills: ["Sales Strategy", "Leadership", "Targets"], noOfVacancy: 2 }
];

// 1. Create an array of job titles from the jobs dataset.

jobTit = jobs.map(j => j.title);
console.log(jobTit);

// 2. Create an array of company names in uppercase.

comName = [];

for(let j of jobs){
   company = j.companyName.toUpperCase();
   if(!(comName.includes(company))){
       comName.push(company)
   }
}
console.log(comName);

// 3. Create an array showing job title with company name in the format: Frontend Developer - TCS.

titCom = jobs.map(j => `${j.title} - ${j.companyName}`);
console.log(titCom);

// 4. Create an array of objects containing id and role only.

idRole = jobs.map(j => ({id : j.id,role : j.role}));
console.log(idRole);

// 5. Create an array that shows only the number of vacancies for each job.

jobVac = jobs.map(j => [j.title,j.noOfVacancy]);
console.log(jobVac);

// 6. List all jobs where the role is "Developer".

jobDevelop = jobs.filter(j => j.role == "Developer").map(j => j.title);
console.log(jobDevelop);

// 7. List all jobs with more than 4 vacancies.

jobGt4Vac = jobs.filter(j => j.noOfVacancy > 4).map(j => [j.title,j.noOfVacancy]);
console.log(jobGt4Vac);

// 8. Find all jobs that require the skill "Python".

jobReqPython = jobs.filter(j => j.skills.includes("Python")).map(j => j.title);
console.log(jobReqPython);

// 9. List all jobs from the company "Infosys".

jobInfosys = jobs.filter(j => j.companyName == "Infosys").map(j => j.title);
console.log(jobInfosys);

// 10. Find all jobs where the skills array length is greater than 3.

jobSkillGt3 = jobs.filter(j => j.skills.length > 3)
console.log(jobSkillGt3);

// 11. List all Manager-level jobs.

jobManager = jobs.filter(j => j.role == "Manager").map(j => j.title);
console.log(jobManager);

// 12. Find all jobs whose title contains the word "Engineer".

jobEngg = jobs.filter(j => j.title.includes("Engineer")).map(j => j.title);
console.log(jobEngg);

// 13. Find the total number of vacancies across all jobs.

totVac = jobs.reduce((sum,j) => sum + j.noOfVacancy, 0);
console.log(totVac);

// 14. Find the total number of Developer roles.

countDevelop = jobs.filter(j => j.role == "Developer").length;
console.log(countDevelop);

// 15. Create an object that shows total vacancies by role. (Example: { Developer: 25, Manager: 10 })

vacRole = {};

for(let j of jobs){
    role = j.role;
    if(role in vacRole){
        vacRole[role] += j.noOfVacancy;
    }
    else{
        vacRole[role] = j.noOfVacancy
    }
}

console.log(vacRole);

// 16. Find the company with the highest total vacancies.

comMaxVac = {};

for(let j of jobs){
    company = j.companyName;
    if(company in comMaxVac){
        comMaxVac[company] += j.noOfVacancy;
    }
    else{
        comMaxVac[company] = j.noOfVacancy
    }
}

maxVac = Object.entries(comMaxVac).reduce((v1,v2) => v1[1] > v2[1]? v1 : v2);
console.log(maxVac);

// 17. Count how many jobs are available per company.

jobPerCom = {};

for(let j of jobs){
    company = j.companyName;
    if(company in jobPerCom){
        jobPerCom[company] += 1;
    }
    else{
        jobPerCom[company] = 1;
    }
}

console.log(jobPerCom);

// 18. Create an object that groups jobs by role.

jobsByRole = {};

for(let j of jobs){
    role = j.role;
    if(role in jobsByRole){
        jobsByRole[role].push(j.title);
    }
    else{
        jobsByRole[role] = [j.title]
    }
}

console.log(jobsByRole);

// 19. Sort jobs by number of vacancies (ascending order).

sortVacAsc = jobs.sort((j1,j2) => j1.noOfVacancy - j2.noOfVacancy).map(j => [j.title,j.noOfVacancy]);
console.log(sortVacAsc);

// 20. Sort jobs by number of vacancies (descending order).

sortVacDes = jobs.sort((j1,j2) => j2.noOfVacancy - j1.noOfVacancy).map(j => [j.title,j.noOfVacancy]);
console.log(sortVacDes);

// 21. Sort jobs by job title alphabetically.

sortTit = jobs.sort((j1,j2) => j1.title.localeCompare(j2.title)).map(j => j.title);
console.log(sortTit);

// 22. Sort jobs by company name in reverse alphabetical order.

sortCom = jobs.sort((j1,j2) => j2.companyName.localeCompare(j1.companyName)).map(j => j.companyName);
console.log(sortCom);

// 23. Check if any job requires the skill "Django".

skillDjango = jobs.some(j => j.skills.includes("Django"));
console.log(skillDjango);

// 24. Check if all jobs have at least 1 vacancy.

allJobVac = jobs.every(j => j.noOfVacancy >= 1);
console.log(allJobVac);

// 25. Find the first job where the role is "Manager".

jobFstManager = jobs.find(j => j.role == "Manager").title;
console.log(jobFstManager);
