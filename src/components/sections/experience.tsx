

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase, Award, ChevronRight, Users } from "lucide-react"
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
            period: "Jun 2024 - Present",
            type: "Full-time",
            description:
                "Develop and maintain AI powered backend features across recruitment, retail automation, wellness, video preparation, and task management applications.",
            responsibilities: [
                "Develop and maintain AI powered backend features across recruitment, retail automation, wellness, video preparation, and task management applications",
                "Lead the AI workstream for an assigned project, coordinate implementation activities, and guide junior developers on technical tasks and development practices",
                "Integrate machine learning models and LLM APIs into FastAPI services, including input validation, structured responses, asynchronous workflows, and error handling",
                "Build and troubleshoot real time processing workflows using WebSockets, including image frame processing, session management, and event handling",
                "Develop AI token usage and cost reporting workflows covering usage aggregation, credit monitoring, cost analysis, and Excel report generation",
                "Investigate production issues, validate end to end integrations, and support deployment and release workflows using Docker"
            ],
            achievements: [
                "Led AI workstream activities and mentored junior developers across multiple product deliveries",
                "Engineered scalable real time WebSocket pipelines handling image frame processing and event streaming",
                "Developed centralized AI token usage aggregation and automated cost reporting in USD & INR with low-credit alerts",
                "Shipped robust production AI services across 5+ enterprise platforms with Docker containerization"
            ],
            technologies: [
                "Python",
                "FastAPI",
                "Computer Vision",
                "OCR",
                "LLM APIs",
                "Speech Processing",
                "WebSockets",
                "Docker",
                "MongoDB",
                "Redis",
                "Cloudflare R2"
            ],
            color: "from-purple-600 to-pink-600",
        },
        {
            id: 2,
            role: "AI Software Intern",
            company: "TabSquare InfoTech Private Limited",
            location: "Chennai, Tamil Nadu, India",
            period: "April 2024 - May 2024",
            type: "Internship",
            description:
                "Assisted with software development, application testing, and debugging to support reliable application functionality.",
            responsibilities: [
                "Assisted with software development, application testing, and debugging to support reliable application functionality",
                "Worked with existing application workflows and backend components to understand feature implementation and system behaviour",
                "Supported API testing and validation to identify issues and verify expected responses",
                "Collaborated with team members to troubleshoot technical issues and complete assigned development tasks"
            ],
            achievements: [
                "Conducted comprehensive API testing and endpoint validation, ensuring high service reliability",
                "Collaborated seamlessly with senior engineers to resolve backend integration blockers",
                "Gained deep hands-on expertise in production software development and debugging workflows"
            ],
            technologies: [
                "Python",
                "FastAPI",
                "API Testing",
                "Backend Workflows",
                "Debugging",
                "Postman",
                "Git"
            ],
            color: "from-indigo-500 to-purple-500",
        },
        {
            id: 3,
            role: "Technician",
            company: "Lampex Electronics Limited",
            location: "Chennai, Tamil Nadu, India",
            period: "Jun 2019 - Jun 2021",
            type: "Full-time",
            description:
                "Operated manufacturing equipment involved in the production and assembly of LCD/LCM display modules and electronic components.",
            responsibilities: [
                "Operated manufacturing equipment involved in the production and assembly of LCD/LCM display modules and electronic components",
                "Maintained assembly line operations and conducted regular functional diagnostics on electronic modules",
                "Ensured strict quality assurance, adherence to industrial safety standards, and defect-free production runs"
            ],
            achievements: [
                "Maintained high precision assembly standards across high-volume LCD/LCM production lines",
                "Proactively identified assembly errors and equipment issues to minimize downtime",
                "Developed disciplined hardware diagnostics and systematic troubleshooting foundations"
            ],
            technologies: [
                "LCD/LCM Assembly",
                "Manufacturing Equipment",
                "Electronic Components",
                "Quality Inspection",
                "Hardware Diagnostics"
            ],
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 4,
            role: "Junior Technician",
            company: "Tenneco Automotive India",
            location: "Hosur, Tamil Nadu, India",
            period: "Jun 2018 - Jun 2019",
            type: "Full-time",
            description:
                "Operated manufacturing machines used in the production of automotive shock absorbers and suspension components for vehicle manufacturers.",
            responsibilities: [
                "Operated manufacturing machines used in the production of automotive shock absorbers and suspension components for vehicle manufacturers",
                "Performed regular machine checks, dimensional tolerance inspections, and line maintenance support",
                "Adhered strictly to industrial safety protocols, 5S standards, and quality operating guidelines"
            ],
            achievements: [
                "Consistently met manufacturing quotas with zero safety incidents",
                "Assisted in equipment changeover and operational quality verification",
                "Strengthened engineering rigor and manufacturing process understanding"
            ],
            technologies: [
                "Automated Machinery",
                "Shock Absorbers",
                "Suspension Systems",
                "Quality Control",
                "5S Safety"
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
 
                     {/* Leadership, Training & Certifications */}
                     <ScrollReveal>
                         <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                             {/* Leadership & Training */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 0.6 }}
                                 className={`p-8 rounded-2xl ${
                                     theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                                 } shadow-lg`}
                             >
                                 <div className="flex items-center space-x-3 mb-6">
                                     <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                         <Users className="w-6 h-6" />
                                     </div>
                                     <h3 className="text-xl font-bold">Leadership & Engagement</h3>
                                 </div>
                                 <ul className="space-y-4">
                                     <li className="flex items-start space-x-3">
                                         <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                                         <div>
                                             <span className="font-semibold block">AI Project Lead</span>
                                             <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                 Led AI development activities for assigned projects and mentored junior developers.
                                             </span>
                                         </div>
                                     </li>
                                     <li className="flex items-start space-x-3">
                                         <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                                         <div>
                                             <span className="font-semibold block">Hackathon Judge — SRM College, Chennai</span>
                                             <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                 Evaluated participant solutions at an AI related hackathon.
                                             </span>
                                         </div>
                                     </li>
                                     <li className="flex items-start space-x-3">
                                         <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                                         <div>
                                             <span className="font-semibold block">AI/ML Trainer — DoubleTap Innovations</span>
                                             <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                 Delivered hands-on AI/ML training to interns and course participants.
                                             </span>
                                         </div>
                                     </li>
                                 </ul>
                             </motion.div>

                             {/* Certifications */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 0.6, delay: 0.2 }}
                                 className={`p-8 rounded-2xl ${
                                     theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                                 } shadow-lg`}
                             >
                                 <div className="flex items-center space-x-3 mb-6">
                                     <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                                         <Award className="w-6 h-6" />
                                     </div>
                                     <h3 className="text-xl font-bold">Certifications</h3>
                                 </div>
                                 <ul className="space-y-4">
                                     <li className="flex items-start space-x-3">
                                         <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                                         <div>
                                             <span className="font-semibold block">Natural Language Processing</span>
                                             <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                 NPTEL (IIT Kharagpur)
                                            </span>
                                         </div>
                                     </li>
                                     <li className="flex items-start space-x-3">
                                         <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                                         <div>
                                             <span className="font-semibold block">Data Science for Engineers</span>
                                             <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                 NPTEL (IIT Madras)
                                            </span>
                                         </div>
                                     </li>
                                     <li className="flex items-start space-x-3">
                                         <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                                         <div>
                                             <span className="font-semibold block">Introduction to Machine Learning</span>
                                             <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                                 NPTEL (IIT Kharagpur)
                                            </span>
                                         </div>
                                     </li>
                                 </ul>
                             </motion.div>
                         </div>
                     </ScrollReveal>

                    {/* Call to Action */}
                    {/* Removed Contact Me link as it will be on the same page */}
                </div>
            </div>
        </section>
    )
}
