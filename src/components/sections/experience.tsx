

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
            role: "AI Software Engineer",
            company: "DoubleTap Innovations and Technologies Pvt. Ltd",
            location: "Chennai, Tamil Nadu, India",
            period: "June 2024 - Present",
            type: "Full-time",
            description:
                "Working as an AI Software Engineer responsible for designing, developing, and deploying scalable machine learning models, natural language processing systems, and generative AI solutions using modern AI technologies.",
            responsibilities: [
                "Designed, trained, and deployed machine learning and deep learning models for real-world applications",
                "Developed and fine-tuned large language models (LLMs) and generative AI solutions",
                "Built and optimized pipelines for data preprocessing, feature engineering, and model evaluation",
                "Researched and implemented state-of-the-art NLP and computer vision techniques",
                "Collaborated with cross-functional teams to integrate AI-driven solutions into production systems",
                "Ensured scalability, performance, and reliability of AI models through MLOps best practices"
            ],
            achievements: [
                "Improved model accuracy by 25% through advanced feature engineering and hyperparameter tuning",
                "Reduced training time by 40% by optimizing data pipelines and leveraging GPU acceleration",
                "Deployed end-to-end ML workflows using MLOps practices, cutting model deployment time by 50%",
                "Developed and fine-tuned LLM-based solutions that enhanced task automation and user engagement"
            ],

            technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face Transformers", "LangChain", "OpenAI", "MLOps", "MongoDB", "AWS", "Azure", "Docker"],
            color: "from-purple-600 to-pink-600",
        },

        {
            id: 2,
            role: "AI Software Engineer Intern",
            company: "TabSquare InfoTech Private Limited",
            location: "Chennai, Tamil Nadu, India",
            period: "April 2024 - May 2024",
            type: "Internship",
            description:
                "Worked as an AI Software Engineer Intern, focusing on hands-on implementation of machine learning models, data pipelines, and AI-powered features under production guidance.",
            responsibilities: [
                "Assisted in building and training machine learning and deep learning models",
                "Implemented data preprocessing and feature engineering pipelines",
                "Worked with NLP and generative AI models for internal tools and prototypes",
                "Integrated trained models into backend services for testing and validation",
                "Collaborated with senior engineers to debug, optimize, and improve model performance"
            ],
            achievements: [
                "Contributed to production-ready ML components used in internal applications",
                "Improved data preprocessing efficiency through optimized scripts",
                "Gained hands-on experience with LLMs, model fine-tuning, and deployment workflows"
            ],
            technologies: [
                "Python",
                "PyTorch",
                "Scikit-learn",
                "Hugging Face Transformers",
                "LangChain",
                "Docker",
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
                "Worked as an Electronics Engineer focusing on testing, assembling, and maintaining electronic systems and components while ensuring product quality and performance. Gained strong hands-on experience in hardware troubleshooting and practical applications of electrical engineering concepts.",
            responsibilities: [
                "Assembled, tested, and maintained electronic components and circuit boards for production systems",
                "Performed quality inspections and functional testing on electronic devices to ensure reliability and compliance with industry standards",
                "Assisted in diagnosing and repairing electronic and electrical faults in manufacturing units",
                "Collaborated with senior engineers to improve testing procedures and optimize assembly efficiency",
                "Maintained detailed documentation of test results and system performance reports"
            ],
            achievements: [
                "Contributed to improving testing efficiency by 20% through process optimization",
                "Successfully maintained zero-defect tolerance for multiple production batches",
                "Recognized by supervisors for strong attention to detail and teamwork in production line operations"
            ],
            technologies: [
                "Multimeters",
                "Oscilloscopes",
                "PCB Testing Tools",
                "Soldering Equipment",
                "Electrical Circuit Design",
                "Quality Control Systems"
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
                "Worked as a Technician responsible for assembly, maintenance, and testing of automotive components in a fast-paced production environment. Gained strong hands-on experience in quality control, electrical systems, and mechanical assembly operations.",
            responsibilities: [
                "Performed assembly and maintenance of automotive suspension and exhaust systems",
                "Conducted regular inspections to ensure all components met quality and performance standards",
                "Assisted in troubleshooting mechanical and electrical issues during production line operations",
                "Collaborated with engineers and supervisors to improve assembly processes and minimize downtime",
                "Maintained detailed logs of maintenance activities and production reports"
            ],
            achievements: [
                "Helped reduce component rejection rate by 15% through improved quality checks",
                "Recognized for consistent work performance and teamwork on the production floor",
                "Contributed to achieving daily production targets with high efficiency and accuracy"
            ],
            technologies: [
                "Automotive Assembly Tools",
                "Electrical Testing Equipment",
                "Mechanical Maintenance",
                "Quality Control Systems",
                "Production Line Optimization"
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
