

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
            year: "Jun 2024 - Present",
            title: "AI/ML Software Engineer",
            company: "DoubleTap Innovations and Technologies Pvt. Ltd",
            description: "Developing and maintaining AI powered backend features across recruitment, retail automation, wellness, video preparation, and task management applications.",
            current: true,
        },
        {
            year: "April - May 2024",
            title: "AI Software Intern",
            company: "TabSquare InfoTech Private Limited",
            description:
                "Assisted with software development, application testing, debugging, and API validation to support reliable application functionality.",
            current: false,
        },
        {
            year: "2021 - 2024",
            title: "B.Tech - Artificial Intelligence and Data Science",
            company: "Mepco Schlenk Engineering College",
            description: "Covering machine learning workflows, computer vision, deep learning, NLP, and software engineering principles.",
            current: false,
        },
        {
            year: "Jun 2019 - Jun 2021",
            title: "Technician",
            company: "Lampex Electronics Limited",
            description: "Operated manufacturing equipment involved in the production and assembly of LCD/LCM display modules and electronic components.",
            current: false,
        },
        {
            year: "Jun 2018 - Jun 2019",
            title: "Junior Technician",
            company: "Tenneco Automotive India",
            description: "Operated manufacturing machines used in the production of automotive shock absorbers and suspension components.",
            current: false,
        },
        {
            year: "2015 - 2018",
            title: "Diploma - Electrical and Electronics Engineering",
            company: "Government Polytechnic College",
            description: "Electrical and Electronics Engineering with practical training in circuit theory, testing instruments, and industrial electronics.",
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
                                        Every stage of my career has shaped the way I approach engineering, problem solving, and technology. The journey began in electronics and automotive manufacturing, where hands-on experience developed a strong sense of precision, systematic troubleshooting, and the importance of reliability in real-world operations.
                                    </p>
                                    <p>
                                        That foundation led to a deeper interest in Artificial Intelligence and Data Science, opening the door to a new way of approaching complex problems. Combining practical engineering knowledge with software development created an opportunity to explore machine learning, intelligent automation, and AI-powered applications.
                                    </p>
                                    <p>
                                        As the journey progressed into AI engineering, the focus shifted towards turning concepts into working solutions. Experience across diverse projects has involved developing backend services, integrating AI capabilities, addressing technical challenges, and collaborating with developers to bring ideas into practice. Each project has strengthened the ability to approach problems analytically, adapt to new technologies, and make thoughtful engineering decisions.
                                    </p>
                                    <p>
                                        Beyond implementation, the journey has also involved taking ownership of assigned projects, supporting junior developers, and learning to balance innovation with maintainability and reliability. These experiences have shaped an engineering mindset that values not just what a system can do, but how effectively it serves its purpose.
                                    </p>
                                    <p>
                                        The path forward is driven by continuous learning, deeper technical expertise, and the pursuit of meaningful innovation — building AI solutions that move beyond experimentation and create practical value in the real world.
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
