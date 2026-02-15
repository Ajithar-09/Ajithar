"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"
import { useTheme } from "../theme-provider"

export default function Hero({ id }: { id?: string }) {
    const { theme } = useTheme()
    const containerRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(heroRef, { once: true })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const profileY = useTransform(scrollYProgress, [0, 0.5], [0, -80])
    const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])
    const bgBlob1Y = useTransform(scrollYProgress, [0, 1], [0, -200])
    const bgBlob2Y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const bgBlob1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
    const bgBlob2Scale = useTransform(scrollYProgress, [0, 1], [1, 0.6])
    const bgBlob1Rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
    const bgBlob2Rotate = useTransform(scrollYProgress, [0, 1], [0, -180])

    return (
        <section
            id={id}
            ref={containerRef}
            className={`min-h-screen w-full transition-colors duration-500 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden bg-transparent ${theme === "dark" ? "text-white" : "text-black"
                }`}
        >
            <div
                ref={heroRef}
                className="relative w-full flex items-center justify-center z-10"
            >
                {/* Animated Blobs */}
                <div className="absolute inset-0 overflow-visible pointer-events-none">
                    <motion.div
                        className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl ${theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"
                            }`}
                        style={{ y: bgBlob1Y, scale: bgBlob1Scale, rotate: bgBlob1Rotate }}
                    />
                    <motion.div
                        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"
                            }`}
                        style={{ y: bgBlob2Y, scale: bgBlob2Scale, rotate: bgBlob2Rotate }}
                    />
                </div>

                {/* Hero Content */}
                <div className="z-10 max-w-4xl text-center w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-7"
                    >
                        {/* Profile */}
                        <motion.div variants={itemVariants} style={{ y: profileY }}>
                            <div className="relative w-40 h-40 mx-auto">
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{ padding: "3px" }}
                                />
                                <div
                                    className={`relative w-full h-full rounded-full flex items-center justify-center overflow-hidden ${theme === "dark" ? "bg-black" : "bg-white"
                                        }`}
                                    style={{ margin: "3px" }}
                                >
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Ajithar A"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                    <motion.div
                                        className="absolute top-2 right-2"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Sparkles className={`w-4 h-1 ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`} />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.div variants={itemVariants} style={{ opacity: titleOpacity }} className="space-y-2">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Ajithar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">A</span>
                            </h1>
                            <p className={`text-xl md:text-2xl font-medium ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>
                                AI Software Engineer
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants}>
                            <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                                Driven by curiosity and innovation, I craft intelligent solutions powered by modern AI from large language models and generative AI to computer vision and deep learning. My focus is on building scalable, future ready systems that bridge data, intelligence, and real-world impact.
                            </p>
                        </motion.div>

                        {/* Socials & Resume */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                            <a
                                href="/Ajithar Resume.pdf"
                                download
                                className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
