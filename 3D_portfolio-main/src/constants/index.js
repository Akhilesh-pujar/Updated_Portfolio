import { internimg, freelance, templegate } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django,
    postgresql,
    python,
    cybersecurity,
    esp32
} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: cybersecurity,
        name: "Cyber Security",
        type: "Security",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Templegate Technologies",
        icon: templegate,
        iconBg: "#667eea",
        date: "July 2024 - Present",
        points: [
            "Developing enterprise-grade supply chain management solutions using React.js, Django, and PostgreSQL.",
            "Building comprehensive procurement and source-to-pay modules for streamlined business operations.",
            "Implementing inventory management systems with real-time tracking and analytics capabilities.",
            "Developing auction platforms and sales management features to optimize business workflows.",
            "Collaborating with cross-functional teams to deliver scalable full-stack applications.",
        ],
    },
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Simmi Foundation",
        icon: internimg,
        iconBg: "#a2d2ff",
        date: "Jan 2024 - June 2024",
        points: [
            "Developed and maintained web applications using React.js, Next.js, and RESTful APIs.",
            "Gained hands-on experience with MongoDB, Mongoose, and full-stack development practices.",
            "Collaborated with cross-functional teams to create high-quality digital products.",
            "Developed strong understanding of UI/UX design principles and responsive web development.",
        ],
    },
    {
        title: "Frontend Developer (Intern)",
        company_name: "AS Enterprise",
        icon: freelance,
        iconBg: "#b7e4c7",
        date: "June 2023 - December 2023",
        points: [
            "Developed responsive web applications using React.js and Next.js frameworks.",
            "Implemented Firebase integration for real-time data management and authentication.",
            "Created stock information systems with secure user connectivity and order placement features.",
            "Implemented payment gateway integrations and ensured cross-browser compatibility.",
        ],
    },
];

export const education = [
    {
        degree: "Master of Science in Cyber Security",
        institution: "University",
        date: "2024",
        description: "Specialized in network security, ethical hacking, and security protocols."
    },
    {
        degree: "Bachelor of Technology",
        institution: "University",
        date: "2023",
        description: "Focus on Computer Science and Full Stack Development."
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Akhilesh-pujar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akhilesh-pujar-70aa26212/',
    }

];

export const projects = [
    {
        iconUrl: esp32,
        theme: 'btn-back-green',
        name: 'E-Nose: Bacterial Air Quality System',
        description: 'A novel low-cost VOC-based electronic nose system for real-time bacterial air quality assessment using ESP32 microcontroller and Machine Learning. Features AI model for bacterial classification with working prototype.',
        link: 'https://github.com/Akhilesh-pujar',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'IdeaForge: NextGen Notes ',
        description: ' IdeaForge redifines note-taking with NextGen Notes, a cutting-edge platform that seamlessly combines the power of Next.js, Convex, and Clerk technologies',
        link: 'https://tasktaking.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-black',
        name: 'WebWeave: MeshMeet',
        description: 'A dynamic and seamless WebRTC-powered video conferencing platform employing a mesh topology for enhanced connectivity and collaboration.',
        link: 'https://peer-to-peer-communication-xwnc.vercel.app/',
    },

    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'Payment Application.',
        description: 'I built a web application that allows users to transfer and receive money from other registered users on my platform. It is a small payment application created for educational use exclusively, and it uses a simple architecture using MERN.',
        link: 'https://github.com/Akhilesh-pujar/PAYTM_COMPLETED',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy blogs and website and it summerizes the web for you.',
        link: 'https://article-summerizer-using-open-ai-gpt4.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-orange',
        name: 'CogniQuest: AI Quiz Realm ',
        description: 'App that leverages AI to automatically generate concise questions for user according to there needs and you can choose the difficulty of the questions You want to set.',
        link: 'https://github.com/Akhilesh-pujar/Quiz-app-with-ai',

    }
];