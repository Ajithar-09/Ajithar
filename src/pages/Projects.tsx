import { motion } from "framer-motion"
import { Github, ExternalLink, Calendar, Tag } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../components/theme-provider"
import Navigation from "../components/navigation"
import ThemeToggle from "../components/theme-toggle"
import PageTransition from "../components/page-transition"

export default function ProjectsPage() {
    const { theme } = useTheme()
    const [selectedCategory, setSelectedCategory] = useState("All")

    const projects = [
        {
            id: 1,
            title: "Wheather-App",
            description:
                "A responsive weather application providing real-time forecasts, location-based updates, and personalized insights using modern APIs.",
            longDescription:
                "The Weather App delivers accurate and up-to-date weather information by integrating real-time data from trusted meteorological APIs. Users can search for any city worldwide or allow GPS-based location tracking for instant weather updates. The app presents forecasts including temperature, humidity, wind speed, sunrise/sunset times, and 7-day predictions in a clean, interactive interface. It also features dark/light mode, weather-based UI animations, and alerts for severe weather conditions. Designed with scalability and user experience in mind, the app can be extended with AI-driven recommendations (e.g., suggesting clothing or travel tips based on weather).",
            image: "/weather.avif",
            tech: ["Python", "Speech Recognition", "Natural Language Processing", "Text-to-Speech", "Mapping APIs", "Routing Algorithms", "FastAPI", "Real-time Data Processing"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Wheather-App.git",
            demo: "#",
            date: "2022",
            status: "Completed",
        },
        {
            id: 2,
            title: "Smart-Voice-Assistant-using-Jarvis-Controller",
            description:
                "Smart-Voice-Assistant-using-Jarvis-Control is an AI-powered voice assistant that performs tasks using speech commands, integrating NLP, speech recognition, and text-to-speech for a seamless hands-free experience.",
            longDescription:
                "Smart-Voice-Assistant-using-Jarvis-Control is an AI-powered personal assistant that enables users to perform tasks using voice commands, similar to the fictional Jarvis system. The assistant integrates speech recognition to interpret user commands, natural language processing (NLP) to understand intent, and text-to-speech (TTS) for real-time audio responses. It can execute tasks such as opening applications, fetching information from the web, managing files, sending emails, setting reminders, and controlling system operations. Built using Python, this project demonstrates the seamless integration of AI, automation, and software engineering to provide a hands-free, intelligent user experience, highlighting the potential of voice-driven interfaces in daily computing.",
            image: "/voice.jpg",
            tech: ["Python", "Speech Recognition", "Natural Language Processing", "Text-to-Speech", "Web Scraping & API Integration", "Scheduler", "FastAPI", "Real-time Data Processing"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Smart-Voice-Assistant-using-Jarvis-Control.git",
            demo: "#",
            date: "2022",
            status: "Completed",
        },
        {
            id: 3,
            title: "Voice-Map-Navigation",
            description:
                "Voice-Map-Navigation is an intelligent navigation system that allows users to interact with maps and get directions using voice commands. The project integrates speech recognition, real-time mapping, and turn-by-turn guidance to provide a hands-free, efficient, and user-friendly navigation experience.",
            longDescription:
                "Voice-Map-Navigation is an advanced, voice-controlled navigation system designed to provide users with a seamless and hands-free way to explore and navigate their surroundings. Leveraging state-of-the-art speech recognition technology, the system interprets user commands in real time to offer accurate route guidance, turn-by-turn directions, and location-based suggestions. Integrated with mapping APIs and intelligent algorithms, it can dynamically update routes based on traffic conditions, road closures, or user preferences. This project emphasizes accessibility and convenience, making navigation easier for drivers, pedestrians, and individuals with mobility challenges, while showcasing the potential of voice interfaces in enhancing user experiences in smart navigation systems.",
            image: "/voicemap.jpg",
            tech: ["Python", "Speech Recognition", "Natural Language Processing", "Text-to-Speech", "Mapping APIs", "Routing Algorithms", "FastAPI", "Real-time Data Processing"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Voice-Map-Navigation.git",
            demo: "#",
            date: "2022",
            status: "Completed",
        },
        {
            id: 4,
            title: "Emotion Detection system",
            description:
                "A machine learning-based system that detects human emotions from facial expressions and text, enabling real-time emotion-aware applications.",
            longDescription:
                "The Emotion Detection System is designed to recognize and classify human emotions such as happiness, sadness, anger, fear, surprise, and neutrality using both facial expression analysis and natural language processing. The project employs deep learning models like CNNs for image-based detection and transformer-based architectures for text sentiment analysis. By combining multi-modal inputs, the system provides highly accurate emotion recognition, making it applicable in domains like healthcare (mental health monitoring), customer service (sentiment-aware chatbots), and human-computer interaction. The system also integrates real-time webcam feeds and audio-to-text pipelines to ensure practical deployment in interactive environments.",
            image: "/emotion.webp",
            tech: ["Python", "OpenCV", "TensorFlow", "PyTorch", "CNN", "LSTM", "Transformers (BERT)", "NLP", "Scikit-learn", "Streamlit", "Dlib", "MediaPipe"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Emotion-Detection.git",
            demo: "#",
            date: "2022",
            status: "Completed",
        },
        {
            id: 5,
            title: "Movie Booking Analytic system",
            description:
                "A data-driven analytics system for movie bookings that provides insights into audience preferences, revenue trends, and seat occupancy using advanced visualization and predictive modeling.",
            longDescription:
                "The Movie Booking Analytics System is designed to analyze and optimize the movie booking ecosystem by collecting and processing booking data from theaters and online platforms.The system enables stakeholders—cinema owners, distributors, and marketers—to track seat occupancy, ticket sales, peak booking times, user demographics, and genre preferences. Using machine learning models, the platform forecasts demand, identifies popular movie patterns, and provides actionable insights to improve scheduling and promotions.Interactive dashboards and visual reports allow decision-makers to monitor revenue trends, detect underperforming shows, and optimize ticket pricing strategies. By leveraging predictive analytics, the system enhances operational efficiency and ensures better audience engagement.",
            image: "/moviebooking.webp",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Tableau", "SQL", "FastAPI", "React", "Docker"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Movie-Booking-Analytic-System.git",
            demo: "#",
            date: "2022",
            status: "Completed",
        },
        {
            id: 6,
            title: "Music-Recommended-System",
            description:
                "An intelligent music recommendation system that suggests personalized tracks to users based on their listening history, mood, and preferences using machine learning techniques.",
            longDescription:
                "The Music Recommendation System leverages advanced machine learning algorithms and natural language processing to analyze user behavior, listening history, and contextual factors such as mood and genre preferences. It implements collaborative filtering and content-based filtering approaches to deliver highly personalized playlists. By combining recommendation models with real-time data processing, the system enhances user engagement and provides a seamless listening experience. The project also explores deep learning techniques for audio feature extraction, enabling recommendations beyond metadata by understanding rhythm, tone, and style.",
            image: "/music.webp",
            tech: ["Python, Scikit-learn, Pandas, NumPy, TensorFlow, Keras, Flask, Spotify API, Natural Language Processing (NLP), Collaborative Filtering, Content-Based Filtering, Streamlit"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Music-Recommender-System.git",
            demo: "#",
            date: "2023",
            status: "Completed",
        },
        {
            id: 7,
            title: "Movie-Recommended-System",
            description:
                "Movie_Recommended-System is an AI-powered platform that provides personalized movie suggestions using collaborative and content-based filtering techniques.",
            longDescription:
                "Movie_Recommended-System is an intelligent recommendation platform designed to provide personalized movie suggestions based on user preferences and viewing history. The system leverages machine learning algorithms, including collaborative filtering and content-based filtering, to analyze user behavior and movie metadata. It incorporates Python for data processing, Pandas/Numpy for analysis, and scikit-learn for building predictive models. The project also features a user-friendly interface where users can rate movies, receive tailored recommendations, and discover new content. This system demonstrates the application of AI and data-driven techniques to enhance user experience in entertainment platforms.",
            image: "/movie.jpg",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Collaborative & Content-Based Filtering", "FastAPI", "MongoDB", "Matplotlib"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Movie_Recommended-System.git",
            demo: "#",
            date: "2023",
            status: "Completed",
        },
        {
            id: 8,
            title: "face-yolov5",
            description:
                "face-yolov5 is a real-time face detection system using YOLOv5, PyTorch, and deep learning techniques for accurate and efficient face localization.",
            longDescription:
                "face-yolov5 is a real-time face detection system built using the YOLOv5 object detection framework. The project leverages deep learning and computer vision techniques to accurately detect and localize faces in images and video streams. Implemented in Python with PyTorch, it supports real-time processing and can be integrated into applications such as surveillance, access control, or smart attendance systems. The system demonstrates the use of convolutional neural networks (CNNs), bounding box regression, and high-performance inference optimization to deliver fast and precise face detection results.",
            image: "/yolo.webp",
            tech: ["Python", "PyTorch", "YOLOv5", "OpenCV", "NumPy", "Computer Vision", "Deep Learning", "Real-time Processing"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/face-yolov5.git",
            demo: "#",
            date: "2023",
            status: "Completed",
        },
        {
            id: 9,
            title: "Automatic-Time-Table-Generator",
            description:
                "Automatic-Time-Table-Generator is an AI-powered system that automatically generates optimized timetables using constraint satisfaction and optimization algorithms.",
            longDescription:
                "Automatic-Time-Table-Generator is an intelligent scheduling system designed to automatically create optimized timetables for schools, colleges, or organizations. The system leverages constraint satisfaction algorithms, graph coloring techniques, and Python-based optimization libraries to ensure that classes, teachers, and resources are allocated efficiently without conflicts. It includes a user-friendly interface to input constraints, such as teacher availability, room capacity, and course priorities. The project demonstrates practical applications of algorithm design, combinatorial optimization, and software automation, significantly reducing manual effort in timetable creation while ensuring fairness and efficiency.",
            image: "/Time Table.webp",
            tech: ["Python", "Constraint Satisfaction", "Graph Coloring Algorithms", "NumPy", "Pandas", "Tkinter", "Scheduling Optimization"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Automatic-Time-Table-Generator-Project.git",
            demo: "#",
            date: "2023",
            status: "Completed",
        },
        {
            id: 10,
            title: "Medicinal_plant_identification",
            description:
                "Medicinal_plant_identification is an AI system that classifies medicinal plants from images using CNNs and deep learning for accurate recognition",
            longDescription:
                "Medicinal_plant_identification is an AI-powered system designed to recognize and classify medicinal plants from images. The project leverages computer vision and deep learning techniques, using convolutional neural networks (CNNs) for feature extraction and classification. Implemented in Python with frameworks like TensorFlow or PyTorch, the system can accurately identify different plant species and provide relevant medicinal information. It also incorporates image preprocessing, data augmentation, and model optimization to improve accuracy and robustness. This project demonstrates practical applications of AI in healthcare, agriculture, and education by making plant identification faster, more accessible, and reliable.",
            image: "/plant.jpg",
            tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNNs", "Image Preprocessing", "Data Augmentation", "Deep Learning", "FastAPI"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Medicinal_plant_identification.git",
            demo: "#",
            date: "2023",
            status: "Completed",
        },
        {
            id: 11,
            title: "Portfolio Website",
            description:
                "A modern, responsive portfolio website with dynamic animations, theme switching, and optimized performance built with Next.js.",
            longDescription:
                "This portfolio showcases projects and skills with smooth animations, dark/light theme switching, responsive design, SEO optimization, and fast loading times.",
            image: "/portfolio.jpg",
            tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
            category: "Completed",
            github: "https://github.com/Ajithar-09/Ajithar",
            demo: "#",
            date: "2025",
            status: "Completed",
        },
        {
            id: 12,
            title: "TAAS AI",
            description:
                "AI-powered database query tool that enables intuitive time sheet and data retrieval through natural language.",
            longDescription:
                "Developed an advanced NLP-based database query system that transforms conversational language into precise database queries. The tool intelligently parses user input, understands context, and retrieves accurate timesheet and project data seamlessly. By bridging human-friendly interaction with structured query execution, the system significantly improves usability, efficiency, and accessibility for non-technical users managing organizational data.",
            image: "/Artificial-Intelligence-min.png",
            tech: ["Python", "MongoDB", "FastAPI", "spaCy", "Transformers", "NLTK", "OpenAI API", "TensorFlow"],
            category: "Progress",
            github: "https://github.com/Ajithar-09/Taas-Ai.git",
            demo: "#",
            date: "2025",
            status: "In Progress",
        },
        {
            id: 13,
            title: "AI Career Assistant",
            description:
                "An AI-powered career guidance platform providing personalized recommendations, skill assessments, and career path suggestions using machine learning.",
            longDescription:
                "This innovative platform uses AI to analyze user profiles, provide career recommendations, suggest skill development paths, offer interview preparation, and connect users with relevant opportunities based on their goals and experience.",
            image: "/carrer.jpg",
            tech: ["React", "Python", "FastAPI", "OpenAI API", "TensorFlow"],
            category: "Progress",
            github: "#",
            demo: "#",
            date: "2025",
            status: "In Progress",
        },
        {
            id: 14,
            title: "RAG with MCP Chatbot",
            description:
                "An AI-powered chatbot enhanced with Retrieval-Augmented Generation (RAG) and MCP (Model Context Protocol), enabling intelligent, context-aware responses from custom knowledge sources.",
            longDescription:
                "This project implements a next-generation conversational AI system by combining Retrieval-Augmented Generation (RAG) with MCP (Model Context Protocol). Unlike traditional chatbots, it can pull precise, real-time information from structured/unstructured knowledge bases, ensuring accurate and context-rich answers.The RAG pipeline integrates document indexing, embedding generation, and vector database retrieval to provide relevant context to the LLM before generating responses. The MCP layer standardizes communication between external tools, APIs, and the AI model, making the chatbot modular and easily extensible.Key use cases include enterprise knowledge assistants, customer support bots, and AI-driven internal query systems. The chatbot is designed with scalability, accuracy, and adaptability in mind, supporting both natural conversations and task-specific queries.",
            image: "/rag.webp",
            tech: ["Python", "LangChain", "OpenAI", "MCP (Model Context Protocol)", "Vector Database (FAISS)", "Next.js (frontend)", "Tailwind CSS", "Docker"],
            category: "Progress",
            github: "#",
            demo: "#",
            date: "2025",
            status: "In Progress",
        },
        {
            id: 15,
            title: "V-Serve Master",
            description:
                "An intelligent HR assistant chatbot that answers employee queries on company policies using LangChain’s Pandas Query Engine and integrated open-source LLMs.",
            longDescription:
                "V Serve Master is an AI-powered HR support system designed to provide instant and accurate responses to employee queries about HR policies, leave management, payroll, and organizational guidelines. The chatbot leverages LangChain’s Pandas Query Engine to intelligently query structured HR data (spreadsheets, CSVs, or databases) and combines it with open-source LLM integration for natural language understanding and response generation. By merging data-driven querying with conversational AI, employees can simply ask questions in plain language, and the system fetches the right policy or information. This reduces dependency on HR teams, streamlines internal communication, and enhances employee experience.The system is modular, scalable, and can be easily integrated into existing HR portals, Slack, or Microsoft Teams, making it a smart and accessible workplace assistant.",
            image: "/vserve.jpg",
            tech: ["Python", "LangChain", "Pandas Query Engine", "Open-Source LLMs", "Streamlit", "FastAPI", "Docker", "SQL/CSV datasets"],
            category: "Progress",
            github: "#",
            demo: "#",
            date: "2025",
            status: "In Progress",
        },
    ]
    const categories = ["All", "Completed", "Progress"]

    const filteredProjects =
        selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

    return (
        <PageTransition>
            <div
                className={`min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
                    }`}
            >
                <Navigation />
                <ThemeToggle />

                <div className="pt-20 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
                            <p className={`text-xl max-w-3xl mx-auto mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                A showcase of my recent work and personal projects demonstrating various technologies and skills.
                            </p>

                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                                ? theme === "dark"
                                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                                : theme === "dark"
                                                    ? "bg-white/10 text-gray-300 hover:bg-white/20"
                                                    : "bg-black/10 text-gray-600 hover:bg-black/20"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Projects Grid */}
                        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`rounded-2xl overflow-hidden ${theme === "dark"
                                            ? "bg-white/5 border border-white/10 hover:bg-white/10"
                                            : "bg-black/5 border border-black/10 hover:bg-black/10"
                                        } transition-all group`}
                                >
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Completed"
                                                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                                    }`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        {/* Project Header */}
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center space-x-1 text-sm text-gray-400">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.date}</span>
                                            </div>
                                        </div>

                                        {/* Category Tag */}
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Tag className="w-4 h-4 text-purple-400" />
                                            <span className={`text-sm ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p
                                            className={`text-sm mb-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                                        >
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${theme === "dark" ? "bg-purple-600/20 text-purple-300" : "bg-purple-500/20 text-purple-600"
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-4">
                                            <motion.a
                                                href={project.github}
                                                className={`flex items-center space-x-2 text-sm transition-colors ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Code</span>
                                            </motion.a>
                                            <motion.a
                                                href={project.demo}
                                                className={`flex items-center space-x-2 text-sm transition-colors ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Demo</span>
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={`mt-16 p-8 rounded-2xl text-center ${theme === "dark"
                                    ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20"
                                    : "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
                            <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                I'm always open to discussing new projects and opportunities.
                            </p>
                            <motion.button
                                className={`px-8 py-3 rounded-full font-medium transition-all ${theme === "dark"
                                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                                        : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
