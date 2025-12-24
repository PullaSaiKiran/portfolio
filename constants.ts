import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Pulla Saikiran",
  title: "Python Full Stack Developer",
  contact: {
    email: "saikiranp816@gmail.com",
    phone: "+91 9515703265",
    location: "Hyderabad, Telangana, India",
    github: "https://github.com/PullaSaiKiran",
    linkedin: "https://www.linkedin.com/in/saikiran-pulla-72b423218/",
  },
  summary: "Enthusiastic Python Full Stack Developer with hands-on project experience in Flask, Django, REST APIs, MySQL, HTML, CSS, JavaScript, and React. Eager to apply backend and frontend skills to develop scalable applications and grow in a professional software development environment.",
  skills: {
    languages: ["Python"],
    web: ["React Js", "JavaScript", "CSS", "HTML", "Flask", "Django", "REST API"],
    cloud: ["AWS"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "VS Code"],
    spoken: ["Telugu", "English", "Hindi"]
  },
  experience: [
    {
      role: "Machine Learning Intern",
      company: "ACADEMOR",
      duration: "Remote",
      points: [
        "Developed and supported ML pipelines including data preprocessing, transformation, and validation workflows.",
        "Contributed to automation of model evaluation tasks and maintenance of project documentation.",
        "Gained practical exposure to secure data handling and collaborative ML development."
      ]
    }
  ],
  projects: [
    {
      title: "AI-Driven Stock Sentiment Dashboard",
      description: [
        "Built a real-time dashboard that scrapes financial news and performs sentiment analysis using Python NLP libraries.",
        "Visualized market trends and sentiment correlations using React and Recharts.",
        "Integrated Flask REST APIs to serve processed sentiment data to the frontend."
      ],
      tech: ["Python", "NLP", "React", "Flask", "Recharts"],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Smart E-Commerce Recommendation Engine",
      description: [
        "Developed a full-stack e-commerce prototype featuring a personalized recommendation system.",
        "Utilized MongoDB for flexible product schema management and user behavior tracking.",
        "Implemented a collaborative filtering algorithm to suggest products based on user purchase history."
      ],
      tech: ["Flask", "MongoDB", "Scikit-Learn", "React"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop"
    },
    {
      title: "AI-Based Fitness Plan Generator",
      description: [
        "Developed using LLM and RAG to generate personalized fitness plans based on user profiles.",
        "Built an AI-based application that recommends tailored exercise and diet plans using machine learning.",
        "Implemented data persistence using MongoDB for scalable storage."
      ],
      tech: ["LLM", "RAG", "Machine Learning", "MongoDB"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Crop Selection & Disease Detection",
      description: [
        "Developed a deep learning model to assist farmers with crop selection and fertilizer recommendations.",
        "Integrated image recognition techniques to diagnose plant diseases with high accuracy.",
        "Built a CNN-based model achieving 92% accuracy in plant disease detection using image datasets."
      ],
      tech: ["Deep Learning", "CNN", "Image Recognition", "Python"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology: Artificial Intelligence and Machine Learning",
      institution: "Anurag University",
      year: "2021-2025",
      score: "CGPA: 8.02/10",
      relevantCoursework: "Software Engineering, DBMS, AI/ML, Cybersecurity"
    },
    {
      degree: "Intermediate: MPC",
      institution: "Sri Chaitanya Junior College",
      year: "2019-2021",
      score: "Percentage: 88%"
    },
    {
      degree: "Secondary Education",
      institution: "Serenity Model High School",
      year: "2018-2019",
      score: "CGPA: 9.2/10"
    }
  ],
  certifications: [
    "AWS - Cloud Foundations, Machine Learning Foundations",
    "IBM - Machine Learning with Python, Data Visualization with Python",
    "CISCO - Introduction to Cybersecurity",
    "INFOSYS - Fundamentals of Information Security, Design Thinking"
  ]
};