"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Layers, Database, Server, Cloud, Users, Lightbulb, Zap, BarChart3, Globe, Brain, Bot } from "lucide-react"
import { useTheme } from "../theme-provider"
import ScrollReveal from "../scroll-reveal"

export default function Skills({ id }: { id?: string }) {
    const { theme } = useTheme()
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const skillCategories = [
        {
            title: "Artificial Intelligence & Machine Learning",
            icon: <Brain className="w-8 h-8" />,
            skills: [
                { name: "Machine Learning", level: 90 },
                { name: "Deep Learning", level: 85 },
                { name: "Natural Language Processing (NLP)", level: 80 },
                { name: "Computer Vision", level: 80 },
                { name: "Reinforcement Learning", level: 75 },
            ],
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Generative AI & LLMs",
            icon: <Bot className="w-8 h-8" />,
            skills: [
                { name: "Large Language Models (LLMs),Langchain", level: 85 },
                { name: "RAG (Retrieval-Augmented Generation)", level: 80 },
                { name: "Prompt Engineering", level: 90 },
                { name: "Fine-tuning & Model Customization", level: 80 },
                { name: "OpenAI / Google API", level: 85 },
            ],
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "Data Science & Engineering",
            icon: <BarChart3 className="w-8 h-8" />,
            skills: [
                { name: "Python (Pandas, NumPy)", level: 95 },
                { name: "ETL Pipelines", level: 80 },
                { name: "SQL", level: 85 },
                { name: "Apache Spark", level: 70 },
                { name: "Data Modeling", level: 75 },
            ],
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "MLOps & Deployment",
            icon: <Server className="w-8 h-8" />,
            skills: [
                { name: "MLflow", level: 75 },
                { name: "Docker", level: 85 },
                { name: "Kubernetes", level: 70 },
                { name: "CI/CD for ML", level: 80 },
                { name: "Model Monitoring", level: 65 },
            ],
            color: "from-orange-500 to-red-500",
        },
        {
            title: "Cloud Platforms",
            icon: <Cloud className="w-8 h-8" />,
            skills: [
                { name: "AWS (SageMaker, Lambda)", level: 80 },
                { name: "Google Cloud (Vertex AI)", level: 70 },
                { name: "Azure AI Services", level: 65 },
            ],
            color: "from-indigo-500 to-purple-500",
        },
        {
            title: "Tools & Libraries",
            icon: <Zap className="w-8 h-8" />,
            skills: [
                { name: "TensorFlow", level: 85 },
                { name: "PyTorch", level: 90 },
                { name: "Scikit-learn", level: 85 },
                { name: "OpenCV", level: 80 },
                { name: "Hugging Face Transformers", level: 90 },
            ],
            color: "from-yellow-500 to-amber-500",
        },
        {
            title: "Databases & Storage",
            icon: <Database className="w-8 h-8" />,
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "MySQL", level: 80 },
                { name: "Redis", level: 70 },
                { name: "Firebase", level: 75 },
            ],
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "AI Databases & Vector Storage",
            icon: <Layers className="w-8 h-8" />,
            skills: [
                { name: "Pinecone", level: 70 },
                { name: "Weaviate", level: 65 },
                { name: "Faiss", level: 85 },
                { name: "ChromaDB", level: 60 },
                { name: "Elasticsearch", level: 75 },
            ],
            color: "from-violet-500 to-indigo-500",
        },
        {
            title: "Tools & Automation",
            icon: <Zap className="w-8 h-8" />,
            skills: [
                { name: "Git/GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "Postman", level: 85 },
                { name: "MLflow", level: 75 },
                { name: "Automation Scripting (Python/Bash)", level: 80 },
            ],
            color: "from-rose-500 to-pink-500",
        },
        {
            title: "Ethics & Future AI",
            icon: <Globe className="w-8 h-8" />,
            skills: [
                { name: "AI Ethics & Fairness", level: 75 },
                { name: "Explainable AI (XAI)", level: 70 },
                { name: "Bias Detection & Mitigation", level: 65 },
                { name: "Edge AI", level: 70 },
                { name: "Quantum AI (Exploration)", level: 60 },
            ],
            color: "from-teal-500 to-green-500",
        },
        {
            title: "Soft Skills",
            icon: <Users className="w-8 h-8" />,
            skills: [
                { name: "Problem Solving", level: 90 },
                { name: "Research & Innovation", level: 85 },
                { name: "Communication", level: 80 },
                { name: "Collaboration", level: 85 },
                { name: "Leadership", level: 75 },
            ],
            color: "from-pink-500 to-rose-500",
        },
    ]

    // Parallax effect for background elements
    const topBgY = useTransform(scrollYProgress, [0, 1], [0, -200])
    const bottomBgY = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <section
            id={id}
            className={`min-h-screen w-full transition-colors duration-500 flex items-center ${theme === "dark" ? "bg-black/20 text-white" : "bg-white/20 text-black"} backdrop-blur-sm`}
            ref={containerRef}
        >
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${theme === "dark" ? "bg-purple-500" : "bg-purple-300"
                        }`}
                    style={{ y: topBgY }}
                />
                <motion.div
                    className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === "dark" ? "bg-blue-500" : "bg-blue-300"
                        }`}
                    style={{ y: bottomBgY }}
                />
            </div>

            <div className="pt-20 pb-16 relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Skills & Expertise
                            </motion.h1>
                            <motion.p
                                className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                A comprehensive overview of my technical expertise across artificial intelligence, machine learning, generative AI, and data engineering
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <ScrollReveal key={category.title} threshold={0.1}>
                                <motion.div
                                    className={`p-8 rounded-2xl ${theme === "dark"
                                        ? "bg-white/5 border border-white/10 hover:bg-white/10"
                                        : "bg-black/5 border border-black/10 hover:bg-black/10"
                                        } transition-all group`}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Category Header */}
                                    <div className="mb-6">
                                        <motion.div
                                            className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                            initial={{ scale: 0, rotate: -10 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
                                        >
                                            <div className="text-white">{category.icon}</div>
                                        </motion.div>
                                        <h3 className="text-xl font-bold">{category.title}</h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                className="space-y-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                }}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{skill.name}</span>
                                                    <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <div
                                                    className={`w-full h-2 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
                                                >
                                                    <motion.div
                                                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                                            ease: "easeOut",
                                                        }}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <ScrollReveal>
                        <motion.div
                            className={`mt-16 p-8 rounded-2xl text-center ${theme === "dark"
                                ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20"
                                : "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200"
                                }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className={`p-4 rounded-full ${theme === "dark"
                                        ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                                        }`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </motion.div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                I'm committed to advancing my expertise in artificial intelligence and generative AI. Currently focusing on large language models, multi-modal AI, and MLOps practices, while aspiring to grow into AI research, leadership, and innovation roles to shape the future of scalable, intelligent systems that bridge data, automation, and human-like reasoning.
                            </p>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
