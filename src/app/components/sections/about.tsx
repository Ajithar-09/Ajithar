"use client"

import { motion } from "framer-motion"
import { Award, Calendar, MapPin, User } from "lucide-react"
import { useTheme } from "../theme-provider"

export default function About({ id }: { id?: string }) {
    const { theme } = useTheme()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    }

    const timelineData = [
        {
            year: "2024",
            title: "AI Software Engineer",
            company: "DoubleTap Innovations and Technologies Pvt. Ltd",
            description: "Leading development of scalable AI solutions and intelligent applications using modern technologies..",
            current: true,
        },
        {
            year: "April - May 2024",
            title: "AI Software Engineer Intern",
            company: "TabSquare InfoTech Private Limited",
            description:
                "Worked on building and testing machine learning and NLP models, supporting the development of AI-powered features and assisting with model integration into backend services under senior engineer guidance.",
            current: false,
        },
        {
            year: "2021-2024",
            title: "Bachelor of Technology",
            company: "Mepco Schlenk Engineering College",
            description: "Artificial Intelligence and Data Science",
            current: false,
        },
        {
            year: "2019-2021",
            title: "Engineer",
            company: "TVS Electronics pvt Ltd",
            description: "Passionate Electrical and Electronics Engineering diploma holder dedicated to teaching and mentoring future engineers through practical, real-world learning.",
            current: false,
        },
        {
            year: "2018-2019",
            title: "Technician",
            company: "Tenneco Automotive India Pvt Ltd",
            description: "Passionate Electrical and Electronics Engineering diploma holder dedicated to teaching and mentoring future engineers through practical, real-world learning.",
            current: false,
        },
        {
            year: "2015-2018",
            title: "Diploma",
            company: "Government Polytechnic College",
            description: "Electrical and Electronics Engineering",
            current: false,
        },
    ]

    return (
        <section
            id={id}
            className={`min-h-screen w-full transition-colors duration-500 flex items-center ${theme === "dark" ? "bg-black/20 text-white" : "bg-white/20 text-black"} backdrop-blur-sm`}
        >
            <div className="w-full pt-16 sm:pt-20 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                        >
                            About Me
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                        >
                            Discover my journey in AI and software engineering, my background, and the passion that drives me to build intelligent solutions..
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Personal Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <div
                                className={`p-6 sm:p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                                    }`}
                            >
                                <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                                    <div
                                        className={`p-2 sm:p-3 rounded-full ${theme === "dark"
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                            : "bg-gradient-to-r from-purple-500 to-pink-500"
                                            }`}
                                    >
                                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold">Personal Info</h2>
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <MapPin
                                            className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                                        />
                                        <span className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                            Chennai Tamil Nadu, India
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Calendar
                                            className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                                        />
                                        <span className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                            Available for opportunities
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`p-6 sm:p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                                    }`}
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">My Story</h3>
                                <div
                                    className={`space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    <p>
                                        I'm a passionate AI Software Engineer with a strong foundation in computer science and expertise across modern AI domains, including machine learning, deep learning, natural language processing, computer vision, and generative AI. My journey in technology began during my undergraduate studies, where I discovered my passion for building intelligent systems, solving real-world problems, and creating impactful AI driven solutions.
                                    </p>
                                    <p>
                                        During my academic journey at Mepco Schlenk Engineering College, I gained a strong foundation in software engineering principles, data structures, and algorithms. This knowledge not only sharpened my problem solving skills but also prepared me to tackle complex challenges and develop scalable, AI driven applications.
                                    </p>
                                    <p>
                                        Currently working at DoubleTap Innovations and Technologies Pvt. Ltd, I specialize in developing AI driven solutions, including machine learning models, natural language processing, computer vision, and generative AI applications. I focus on building scalable, intelligent systems while staying updated with the latest advancements in artificial intelligence and industry best practices.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <div
                                className={`p-6 sm:p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                                    }`}
                            >
                                <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                                    <div
                                        className={`p-2 sm:p-3 rounded-full ${theme === "dark"
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                            : "bg-gradient-to-r from-purple-500 to-pink-500"
                                            }`}
                                    >
                                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold">Journey Timeline</h2>
                                </div>

                                <div className="relative">
                                    <div
                                        className={`absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 ${theme === "dark"
                                            ? "bg-gradient-to-b from-purple-600 to-pink-600"
                                            : "bg-gradient-to-b from-purple-500 to-pink-500"
                                            }`}
                                    ></div>

                                    {timelineData.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                                            className="relative pl-12 sm:pl-16 pb-8 sm:pb-12 last:pb-0"
                                        >
                                            <div
                                                className={`absolute left-3 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.current
                                                    ? theme === "dark"
                                                        ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                                                    : theme === "dark"
                                                        ? "bg-gray-600"
                                                        : "bg-gray-400"
                                                    }`}
                                            ></div>

                                            <div
                                                className={`p-4 sm:p-6 rounded-xl ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                                                    }`}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                                    <span
                                                        className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-0 inline-block ${theme === "dark"
                                                            ? "bg-purple-600/20 text-purple-300"
                                                            : "bg-purple-500/20 text-purple-600"
                                                            }`}
                                                    >
                                                        {item.year}
                                                    </span>
                                                    {item.current && (
                                                        <span
                                                            className={`text-xs px-2 py-1 rounded-full inline-block ${theme === "dark" ? "bg-green-600/20 text-green-300" : "bg-green-500/20 text-green-600"
                                                                }`}
                                                        >
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-base sm:text-lg font-bold mb-1">{item.title}</h3>
                                                <p
                                                    className={`font-medium mb-2 text-sm sm:text-base ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}
                                                >
                                                    {item.company}
                                                </p>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
