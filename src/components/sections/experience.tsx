

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase, Award, ChevronRight } from "lucide-react"
import { useTheme } from "../theme-provider"
import ScrollReveal from "../scroll-reveal"

export default function Experience({ id }: { id?: string }) {
    const { theme } = useTheme()
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const experiences = [
        {
            id: 1,
            role: "AI/ML Software Engineer",
            company: "DoubleTap Innovations and Technologies Pvt. Ltd",
            location: "Chennai, Tamil Nadu, India",
            period: "June 2024 - Present",
            type: "Full-time",
            description:
                "Developing and deploying production AI services and LLM powered applications. Focused on building end to end RAG pipelines, FastAPI backends, and agent workflows that automate business processes and structured data extraction.",
            responsibilities: [
                "Architect and deploy Retrieval Augmented Generation (RAG) pipelines using LangChain, vector embeddings, and LLM APIs for contextual knowledge retrieval",
                "Develop high performance REST APIs with FastAPI and Docker to serve model inference and agent workflows to client facing web applications",
                "Implement Natural Language to SQL and MongoDB query engines, translating conversational queries into validated database queries for reporting and analytics",
                "Build automated document ingestion pipelines: text chunking, embedding generation, semantic caching with Redis, and vector indexing",
                "Set up AI guardrails, input and output validation, and prompt defenses to prevent hallucinations and ensure reliable model responses",
                "Containerize backend AI services with Docker and configure CI/CD pipelines for automated testing and deployment"
            ],
            achievements: [
                "Engineered an enterprise RAG assistant that cut document search and information retrieval time across internal wikis by over 40%",
                "Developed an NLP driven database query interface enabling non-technical teams to query timesheet and operations data directly in natural language",
                "Reduced LLM API latency and token costs by implementing semantic caching and optimized prompt templates",
                "Implemented structured evaluation pipelines to track hallucination rates and response relevance across model updates"
            ],
            technologies: [
                "Python",
                "FastAPI",
                "LangChain",
                "OpenAI API",
                "PyTorch",
                "Hugging Face Transformers",
                "Docker",
                "MongoDB",
                "Redis",
                "Vector Search",
                "AWS",
                "CI/CD"
            ],
            color: "from-purple-600 to-pink-600",
        },
        {
            id: 2,
            role: "AI/ML Software Developer Intern",
            company: "TabSquare InfoTech Private Limited",
            location: "Chennai, Tamil Nadu, India",
            period: "April 2024 - May 2024",
            type: "Internship",
            description:
                "Collaborated with senior engineers on machine learning model development, data preprocessing pipelines, and proof of concept AI prototypes for NLP applications.",
            responsibilities: [
                "Cleaned, validated, and preprocessed text datasets for model fine tuning and sentiment classification benchmarks",
                "Built and evaluated baseline machine learning models using Scikit-learn and PyTorch",
                "Developed prototype NLP inference endpoints using FastAPI and tested them with Postman",
                "Conducted model performance evaluations comparing accuracy, inference latency, and memory consumption",
                "Documented experimental findings, model metrics, and data preprocessing steps for team review"
            ],
            achievements: [
                "Automated repetitive data cleaning workflows with custom Python scripts, reducing dataset preparation time by 50%",
                "Successfully benchmarked multiple open source transformer models to determine the optimal speed and accuracy tradeoff for internal tools",
                "Delivered working API prototypes integrated into test frontends for internal stakeholder demos"
            ],
            technologies: [
                "Python",
                "PyTorch",
                "Scikit-learn",
                "Hugging Face Transformers",
                "FastAPI",
                "Pandas",
                "NumPy",
                "MongoDB"
            ],
            color: "from-indigo-500 to-purple-500",
        },
        {
            id: 3,
            role: "Electronics Engineer",
            company: "TVS Electronics Pvt. Ltd",
            location: "Hosur, Tamil Nadu, India",
            period: "2019 - 2021",
            type: "Full-time",
            description:
                "Conducted functional testing, hardware diagnostics, and quality inspection on electronic circuit assemblies and PCB modules in a high volume manufacturing environment.",
            responsibilities: [
                "Tested electronic circuits and PCB assemblies using digital multimeters, oscilloscopes, and automated test fixtures",
                "Diagnosed hardware faults, short circuits, and component failures down to the board level",
                "Ensured manufactured batches strictly adhered to electrical safety standards and client quality specifications",
                "Collaborated with production and quality engineers to optimize testing procedures and minimize line bottlenecks",
                "Maintained comprehensive test logs, defect logs, and calibration records for production equipment"
            ],
            achievements: [
                "Maintained consistent zero defect delivery standards across multiple high volume production batches",
                "Identified recurring component solder defects, collaborating with line supervisors to improve first pass testing yield by 20%",
                "Recognized for meticulous troubleshooting, root cause analysis, and adherence to production schedules"
            ],
            technologies: [
                "Digital Multimeters",
                "Oscilloscopes",
                "PCB Testing Fixtures",
                "Soldering Equipment",
                "Circuit Troubleshooting",
                "Quality Assurance (QA)"
            ],
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 4,
            role: "Technician",
            company: "Tenneco Automotive India Pvt. Ltd",
            location: "Hosur, Tamil Nadu, India",
            period: "2018 - 2019",
            type: "Full-time",
            description:
                "Operated automated assembly and testing stations, conducted dimensional quality checks, and performed routine maintenance on automotive component lines.",
            responsibilities: [
                "Assembled and tested automotive suspension and exhaust components on fast paced production lines",
                "Performed regular quality inspections and dimensional tolerance checks using precision measurement tools",
                "Troubleshot pneumatic, mechanical, and electrical station faults to minimize assembly line downtime",
                "Adhered to 5S methodology, industrial safety standards, and standard operating procedures (SOPs)",
                "Recorded daily production output figures, scrap counts, and equipment maintenance status"
            ],
            achievements: [
                "Reduced component rejection rate by 15% through proactive inspection and early defect identification",
                "Consistently met daily shift production targets with zero reported assembly safety incidents",
                "Assisted maintenance teams during planned equipment overhauls, speeding up changeover times"
            ],
            technologies: [
                "Precision Measurement Gauges",
                "Assembly Fixtures",
                "Pneumatic and Electrical Controls",
                "Preventive Maintenance",
                "5S and Industrial Safety"
            ],
            color: "from-blue-500 to-teal-500"
        }
    ]

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
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -100]),
                        scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
                    }}
                />
                <motion.div
                    className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === "dark" ? "bg-blue-500" : "bg-blue-300"
                        }`}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, 100]),
                        scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
                    }}
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
                                Professional Experience
                            </motion.h1>
                            <motion.p
                                className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                My journey in the tech industry, showcasing my professional growth and achievements.
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Experience Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div
                            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 ${theme === "dark"
                                ? "bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600"
                                : "bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
                                }`}
                        ></div>

                        {/* Experience Cards */}
                        {experiences.map((exp, index) => (
                            <ScrollReveal key={exp.id} threshold={0.1}>
                                <div className={`relative mb-16 last:mb-0 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}>
                                    {/* Timeline Dot */}
                                    <motion.div
                                        className={`absolute left-0 md:left-1/2 top-10 w-5 h-5 rounded-full border-4 transform md:-translate-x-1/2 ${theme === "dark"
                                            ? `bg-gradient-to-r ${exp.color} border-black`
                                            : `bg-gradient-to-r ${exp.color} border-white`
                                            }`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    ></motion.div>

                                    {/* Card */}
                                    <motion.div
                                        className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} relative z-10`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <div
                                            className={`p-8 rounded-2xl shadow-lg ${theme === "dark"
                                                ? "bg-white/5 border border-white/10 hover:bg-white/10"
                                                : "bg-black/5 border border-black/10 hover:bg-black/10"
                                                } transition-all`}
                                        >
                                            {/* Role & Company */}
                                            <div className="mb-6">
                                                <div
                                                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${theme === "dark"
                                                        ? `bg-gradient-to-r ${exp.color} text-white`
                                                        : `bg-gradient-to-r ${exp.color} text-white`
                                                        }`}
                                                >
                                                    {exp.type}
                                                </div>
                                                <h2 className="text-2xl font-bold mb-1">{exp.role}</h2>
                                                <h3 className={`text-xl ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>
                                                    {exp.company}
                                                </h3>
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-4 mb-6">
                                                <div className="flex items-center space-x-3">
                                                    <Calendar
                                                        className={`w-5 h-5 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                                                    />
                                                    <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{exp.period}</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <MapPin className={`w-5 h-5 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                                                    <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{exp.location}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className={`mb-6 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                {exp.description}
                                            </p>

                                            {/* Responsibilities */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold mb-3 flex items-center">
                                                    <Briefcase
                                                        className={`w-5 h-5 mr-2 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                                                    />
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.responsibilities.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            className="flex items-start space-x-2"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.3, delay: 0.1 * i }}
                                                        >
                                                            <ChevronRight
                                                                className={`w-4 h-4 mt-1 flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-600"
                                                                    }`}
                                                            />
                                                            <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Achievements */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold mb-3 flex items-center">
                                                    <Award
                                                        className={`w-5 h-5 mr-2 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                                                    />
                                                    Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            className="flex items-start space-x-2"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.3, delay: 0.2 + 0.1 * i }}
                                                        >
                                                            <ChevronRight
                                                                className={`w-4 h-4 mt-1 flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-600"
                                                                    }`}
                                                            />
                                                            <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => (
                                                    <motion.span
                                                        key={tech}
                                                        className={`px-3 py-1 rounded-full text-sm ${theme === "dark" ? "bg-white/10 text-white" : "bg-black/10 text-black"
                                                            }`}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: 0.4 + 0.05 * i }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Call to Action */}
                    {/* Removed Contact Me link as it will be on the same page */}
                </div>
            </div>
        </section>
    )
}
