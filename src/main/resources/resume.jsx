const resume = {
  name: "Yuhuan Jiang",
  "other-name": "蒋宇寰",
  bio: "Targeting a software development internship in Summer 2017",

  links: {
    "github": "https://github.com/jyuhuan",
    "linkedin": "https://www.linkedin.com/in/yuhuanjiang/",
    "website": "http://yuhuan.me/resume",
    "email": "mailto:jyuhuan@gmail.com",
    "vcf-card": "./yuhuan-jiang.vcf",
    "resume-pdf": "../resume.pdf"
  },

  skills: {
    programming: {
      experienced: ["Scala", "Java", "Python", "HTML/JavaScript/CSS"],
      familar: ["C#", "C++", "Objective-C", "MATLAB"]
    },
    web: {
      familiar: ["React", "Node.js", "Electron"]
    },
    languages: {
      native: "Chinese",
      professional: "English"
    }
  },

  educations: [
    {
      institution: "University of Pittsburgh",
      location: "Pittsburgh, PA, USA",
      degree: "Ph.D. student in Computer Science",
      duration: "Aug. 2014 – Dec. 2017 (expected)",
      comment: "will transition to M.S. by summer 2017"
    },
    {
      institution: "Chongqing University",
      location: "Chongqing, China",
      degree: "B.Eng. in Software Engineering",
      duration: "Sep. 2010 – Jul. 2014"
    }
  ],

  projects: [
    {
      title: "Entity-Level Sentiment Inference with Factor Graphs",
      duration: "Dec. 2015 – present",
      tags: ["scala", "graphical-model", "sentiment-analysis"],
      achievements: [
        "Implemented a GUI visualizer for a sentiment corpus using ScalaFX and Graphviz.",
        "Designed factor graph models to infer sentiments toward entities in opinionated sentences.",
        "Designed logic factors and implicature factors to enable joint training of semantics and sentiments.",
        "Implemented the system and conducted experiments by modifying an open-source graphical model library."
      ]
    },
    {
      title: "Content-based User Similarity Detection",
      duration: "Mar. 2015 – Apr. 2015",
      tags: ["java", "python", "topic-model", "recommendation-system"],
      achievements: [
        "Implemented a model for detecting similar users in the Yelp Dataset, based on topic distributions extracted by applying latent Dirichlet allocation (LDA) to each user’s restaurant reviews.",
        "Conducted extrinsic performance evaluation by implementing a simple restaurant recommendation system using the user similarity model."
      ]
    },
    {
      title: "MiniGoogle",
      duration: "Nov. 2014 - Dec. 2014",
      tags: ["java", "tcp", "socket", "map-reduce", "client-server-model"],
      achievements: [
        "Built a simple TCP-based map-reduce framework for document indexing and searching.",
        "Implemented a client that issues indexing and searching requests, and a server that orchestrates helpers for mapping, reducing, and searching tasks, with status monitor for handling failed helpers.",
        "Achieved helper workload optimization based on corpus statistics."
      ]
    },
    {
      title: "Pigeon",
      duration: "Feb. 2013 – Apr. 2013",
      tags: ["c#", "mobile-app", "xmpp", "client-server-model", "sensors"],
      achievements: [
        "Built a Windows Phone mobile application which facilitates meetups in real-life locations.",
        "Implemented a modern user interface using XAML.",
        "Implemented real-time GPS location sharing, and instant text/image/voice messaging using XMPP.",
        "Designed indoor navigation, which allows users to create, share, and follow indoor paths computed from various sensors provided by the mobile device."
      ]
    }
  ],

  experiences: [
    {
      title: "Student Researcher",
      employer: "Department of Computer Science, University of Pittsburgh",
      location: "Pittsburgh, PA, USA",
      duration: "May 2015 – Jan. 2017",
      duty: "Conducted research on entity-level sentiment analysis. Temporary advisors: Prof. Janyce Wiebe, Prof. Rebecca Hwa."
    },
    {
      title: "Teaching Assistant",
      employer: "Department of Computer Science, University of Pittsburgh",
      location: "Pittsburgh, PA, USA",
      duration: "Aug. 2014 – present",
      duty: "Led recitation lessons for Data Structures and other courses. Taught a few class lectures for Artificial Intelligence, and Natural Language Processing."
    },
    {
      title: "Student Researcher Intern",
      employer: "Natural Language Laboratory, Simon Fraser University",
      location: "Vancouver, Canada",
      duration: "Jul. 2013 – Sep. 2013",
      duty: "Participated in extending the code of the open-source Moses system to conduct machine translation experiments. Advised by Prof. Anoop Sarkar."
    }
  ]

}

export { resume }
