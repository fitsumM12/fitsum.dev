export const skills = [
  {
    title: "AI & Machine Learning",
    icon: "ai",
    items: [
      "Computer Vision, Deep Learning, Classical ML",
      "TensorFlow, PyTorch",
      "Model training, evaluation, and inference optimization"
    ]
  },
  {
    title: "Software Engineering",
    icon: "code",
    items: [
      "Backend: Python, Django, REST APIs",
      "Frontend: React, TypeScript, JavaScript, Tailwind, Material UI",
      "Databases: MySQL, SQL, PostgreSQL"
    ]
  },
  {
    title: "Data & Infrastructure",
    icon: "data",
    items: [
      "Data Pipelines: Apache Airflow (ELT), Apache Superset",
      "Real-time Systems: Redis",
      "Containerization & Deployment: Docker, GPU-based deployment"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    items: ["Git, VS Code, PyCharm", "PowerBI, Tableau"]
  }
];

export const experience = [
  {
    role: "AI | ML | Software Engineer",
    company: "Ethiopian Artificial Intelligence Institute",
    location: "Addis Ababa, Ethiopia",
    date: "Sep 11, 2023 – Present",
    logo: "/logos/eaii.png",
    highlights: [
      "Architect and develop end-to-end deep learning pipelines using TensorFlow and PyTorch.",
      "Build, optimize, and deploy production-grade models for real-world applications.",
      "Integrate AI solutions into distributed systems via RESTful APIs and microservices.",
      "Design data pipelines for preprocessing, feature engineering, training, and evaluation.",
      "Implement ELT workflows with Apache Airflow and deliver insights via dashboards."
    ]
  },
  {
    role: "Senior Software Developer (Part-time)",
    company: "FINOVA TECHNOLOGIES",
    location: "Addis Ababa, Ethiopia",
    date: "Feb 2025 – Present",
    logo: "/logos/finova.svg",
    highlights: [
      "Build and maintain web applications with React and backend services.",
      "Deliver production-ready features aligned to business requirements."
    ]
  },
  {
    role: "Software Engineer",
    company: "FINETO Addis",
    location: "Addis Ababa, Ethiopia",
    date: "Jun 10, 2023 – Sep 01, 2023",
    logo: "/logos/fineto.png",
    highlights: [
      "Developed and maintained full-stack web applications using Python, Django, and React.",
      "Designed RESTful APIs and database schemas.",
      "Deployed and maintained production systems.",
      "Participated in system documentation, testing, and long-term maintenance."
    ]
  }
];

export const projects = [
  {
    name: "AI Screening Platforms",
    role: "Computer Vision Engineer & Full Stack Developer",
    date: "2023 – 2024",
    summary:
      "Delivered two AI-powered screening platforms for medical imaging workflows and digital record keeping.",
    responsibilities: [
      "Developed computer vision models for medical image analysis.",
      "Built user interfaces with React and Django for both platforms.",
      "Integrated AI models into the platforms and supported production deployment.",
      "Contributed to documentation and unit testing."
    ],
    environment:
      "TensorFlow, NVIDIA GPU, Python, ReactJS, Django, Tailwind, Material UI"
  },
  {
    name: "Attorney Office Case Management",
    role: "Full Stack Developer",
    date: "2024",
    summary: "Web app for managing and tracking attorney office cases.",
    responsibilities: [
      "Created user interface using ReactJS and Django.",
      "Built real-time notification system.",
      "Implemented ELT pipelines with Apache Airflow and Apache Superset.",
      "Handled client communication and feature alignment."
    ],
    environment:
      "Python, ReactJS, Django, Tailwind, Material UI, Airflow, Apache Superset"
  },
  {
    name: "Medical Data Analysis using PowerBI",
    role: "Data Analyst",
    date: "Mar 2023",
    summary: "Analyzed medical datasets and built interactive dashboards in PowerBI.",
    responsibilities: [
      "Prepared and modeled datasets for visual analytics.",
      "Designed KPI-focused dashboards for clinical insights."
    ],
    environment: "PowerBI, Data Modeling",
    image: "/projects/medical-powerbi.png"
  },
  {
    name: "Human Resource Data Analysis",
    role: "Data Analyst",
    date: "Feb 2023",
    summary: "HR analytics project focused on workforce insights and reporting.",
    responsibilities: [
      "Built reports and visualizations for HR decision-making.",
      "Delivered insights on headcount, attrition, and performance trends."
    ],
    environment: "PowerBI, Data Analysis",
    image: "/projects/hr-powerbi.png"
  },
  {
    name: "Walmart Data Analysis",
    role: "Data Analyst",
    date: "Jan 2023",
    summary: "Sales and operations analysis on the Walmart dataset using PowerBI.",
    responsibilities: [
      "Prepared and cleaned dataset for reporting.",
      "Built interactive dashboards to surface sales and operational trends.",
      "Delivered KPI insights for decision-making."
    ],
    environment: "PowerBI, Data Analysis"
  },
  {
    name: "E-learning Platform",
    role: "Full Stack Developer",
    date: "2021 – 2022",
    summary: "Learning management platform for courses, assignments, and student progress.",
    responsibilities: [
      "Built course and lesson management workflows.",
      "Implemented authentication and role-based access for students and instructors.",
      "Designed responsive UI for course consumption and assessments."
    ],
    environment: "Python, Django, ReactJS, PostgreSQL"
  },
  {
    name: "Tech Blog Site",
    role: "Full Stack Developer",
    date: "2021",
    summary: "Personal tech blog with content publishing, tagging, and search.",
    responsibilities: [
      "Built blog post CRUD with rich text formatting.",
      "Implemented categories, tags, and full-text search.",
      "Deployed the site with CI-friendly workflows."
    ],
    environment: "ReactJS, Django, PostgreSQL"
  }
];

export const education = [
  {
    school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    degree: "Master's degree, Computer Science and Engineering",
    date: "Sep 14, 2021 – May 31, 2023",
    location: "India",
    logo: "/edu-logos/kiit.png"
  },
  {
    school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    degree: "Bachelor's degree, Computer Science and Engineering",
    date: "Sep 17, 2017 – May 31, 2021",
    location: "India",
    logo: "/edu-logos/kiit.png"
  },
  {
    school: "Haramaya University",
    degree: "Electrical and Computer Engineering",
    date: "Sep 2016 – 2017",
    location: "Ethiopia",
    logo: "/edu-logos/haramaya.png"
  },
  {
    school: "Hawas Preparatory School",
    degree: "Preparatory School",
    date: "2015 – 2016",
    location: "Ethiopia",
    logo: "/edu-logos/hawas.png"
  }
];

export const publications = [
  {
    title:
      "Knowledge distillation-based lightweight MobileNet model for diabetic retinopathy classification",
    venue: "Scientific Reports",
    date: "Dec 5, 2025",
    doi: "10.1038/s41598-025-30893-7",
    summary:
      "Proposed a lightweight MobileNet-based student model for DR screening with strong accuracy on APTOS 2019."
  },
  {
    title: "Diabetic retinopathy screening using machine learning: a systematic review",
    venue: "BMC Biomedical Engineering",
    date: "Sep 2, 2025",
    doi: "10.1186/s42490-025-00098-0",
    summary:
      "Reviewed datasets, preprocessing techniques, and ML/DL progress for DR screening, highlighting challenges and future directions."
  },
  {
    title:
      "Location based recommendation system using transformer based sentiment analysis and similarity measuring metrics",
    venue: "Technology Analysis & Strategic Management",
    date: "Jun 23, 2025",
    doi: "10.1080/09537325.2025.2521696",
    summary:
      "Developed a transformer-based sentiment analysis approach for location recommendation and similarity scoring."
  },
  {
    title:
      "Assessing climate and land use impacts on surface water yield using remote sensing and machine learning",
    venue: "Scientific Reports",
    date: "May 27, 2025",
    doi: "10.1038/s41598-025-03493-8",
    summary:
      "Applied remote sensing and ML to assess climate and land-use impacts on surface water yield."
  },
  {
    title: "GeoRSA: Geospatial Recommendation System using Sentimental Analysis",
    venue: "PDGC 2022 (Conference Paper)",
    date: "2022",
    summary:
      "Conference paper on geospatial recommendation using sentiment analysis and similarity metrics."
  }
];

export const certifications = [
  {
    title: "MEAN Stack",
    issuer: "Grras Solutions (P) Ltd",
    date: "Issued Aug 2021"
  },
  {
    title: "Full Stack MERN Development",
    issuer: "Udemy",
    date: "Issued Apr 2024"
  },
  {
    title: "Business Metrics for Data-Driven Companies",
    issuer: "Duke University",
    date: "Issued Mar 2021"
  },
  {
    title:
      "Basic Data Descriptors, Statistical Distributions, and Application to Business Decisions",
    issuer: "Rice University",
    date: "Issued Mar 2021"
  },
  {
    title: "Business Applications of Hypothesis Testing and Confidence Interval Estimation",
    issuer: "Rice University",
    date: "Issued Mar 2021"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "Issued Jul 2020"
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google",
    date: "Issued May 2021"
  },
  {
    title: "Complete JavaScript",
    issuer: "Udemy",
    date: "Issued Jun 2021"
  },
  {
    title: "Google Data Analytics Specialization",
    issuer: "Google",
    date: "Issued Jun 2022"
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "Issued Mar 2020"
  },
  {
    title: "ALX Full-Stack Software Engineering",
    issuer: "alx_africa",
    date: "Issued Nov 2023"
  },
  {
    title: "Machine Learning with Python",
    issuer: "Verzeo",
    date: "Issued Jul 2021"
  }
];

export const contact = {
  name: "Fitsum Mesfin",
  email: "fitsummesfin12@gmail.com",
  phone: "+251 974 640 683",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://www.linkedin.com/in/fitsum-m-25a01a185/",
  github: "https://github.com/fitsumM12/"
};
