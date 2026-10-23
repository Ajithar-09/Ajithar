"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, X, Send, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../components/theme-provider"
import Navigation from "../components/navigation"
import ThemeToggle from "../components/theme-toggle"
import PageTransition from "../components/page-transition"

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
      3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

export default function ContactPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e901ce28-baae-4ccb-a564-42b73de1bb77",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("✅ Thank you! Your message has been sent. I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus(data.message || "❌ Oops! Something went wrong. Please try again later.")
      }
    } catch (error: any) {
      console.error("Error sending message:", error)
      setStatus("❌ Network error. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ajitharmahes@gmail.com",
      href: "mailto:ajitharmahes@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9944456535",
      href: "tel:+91 9944456535",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/Ajithar-09",
      color: "hover:text-gray-600",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ajithar-a-/",
      color: "hover:text-blue-500",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      href: "https://www.facebook.com/Ajithar09",
      color: "hover:text-blue-500",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      href: "https://www.instagram.com/a_j_i_t_h_a_r/",
      color: "hover:text-pink-500",
    },
    {
      icon: <X className="w-6 h-6" />,
      name: "X",
      href: "https://x.com/Ajithar09",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <PageTransition>
      <div
        className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        <Navigation />
        <ThemeToggle />

        {/* ✅ Full width section */}
        <div className="w-full pt-20 pb-16">
          <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
              <p
                className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                I'm always interested in new opportunities and collaborations.
                Let's discuss how we can work together!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`w-full p-8 rounded-2xl ${theme === "dark"
                  ? "bg-white/5 border border-white/10"
                  : "bg-black/5 border border-black/10"
                  }`}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className={`p-3 rounded-full ${theme === "dark"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                      }`}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold whitespace-nowrap">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors placeholder-gray-400 ${theme === "dark"
                          ? "bg-white/5 border-white/20 focus:border-purple-400 focus:bg-white/10"
                          : "bg-black/5 border-black/20 focus:border-purple-500 focus:bg-black/10"
                          } focus:outline-none`}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors placeholder-gray-400 ${theme === "dark"
                          ? "bg-white/5 border-white/20 focus:border-purple-400 focus:bg-white/10"
                          : "bg-black/5 border-black/20 focus:border-purple-500 focus:bg-black/10"
                          } focus:outline-none`}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors placeholder-gray-400 ${theme === "dark"
                        ? "bg-white/5 border-white/20 focus:border-purple-400 focus:bg-white/10"
                        : "bg-black/5 border-black/20 focus:border-purple-500 focus:bg-black/10"
                        } focus:outline-none`}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none placeholder-gray-400 ${theme === "dark"
                        ? "bg-white/5 border-white/20 focus:border-purple-400 focus:bg-white/10"
                        : "bg-black/5 border-black/20 focus:border-purple-500 focus:bg-black/10"
                        } focus:outline-none`}
                      placeholder="Tell me about your project or idea..."
                      required
                    />
                  </div>
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${theme === "dark"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                          }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLoading ? (
                          <>
                            <Spinner />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>

                      {status && (
                        <p
                          className={`text-center mt-3 text-sm ${status.startsWith("✅") ? "text-green-500" : "text-red-500"
                            }`}
                        >
                          {status}
                        </p>
                      )}
                    </div>
                  </form>
                </motion.div>

                {/* Contact Information & Availability Column */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-between space-y-6"
                >
                  {/* Contact Details & Social Links Combined Card */}
                  <div
                    className={`p-8 rounded-2xl flex-1 flex flex-col justify-between ${theme === "dark"
                      ? "bg-white/5 border border-white/10"
                      : "bg-black/5 border border-black/10"
                      }`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                      <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                          <motion.a
                            key={info.title}
                            href={info.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className={`flex items-center space-x-4 p-3.5 rounded-xl transition-all ${theme === "dark" ? "hover:bg-white/5" : "hover:bg-black/5"
                              }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div
                              className={`p-3 rounded-full shrink-0 ${theme === "dark"
                                ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                : "bg-gradient-to-r from-purple-500 to-pink-500"
                                }`}
                            >
                              <div className="text-white">{info.icon}</div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{info.title}</h4>
                              <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                {info.value}
                              </p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Social Links Section Inside Card */}
                    <div className="pt-6 mt-6 border-t border-white/10">
                      <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>
                        Connect With Me
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className={`p-3 rounded-full transition-all flex items-center justify-center ${theme === "dark"
                              ? "bg-white/10 hover:bg-white/20"
                              : "bg-black/10 hover:bg-black/20"
                              } ${social.color}`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Availability Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`p-6 rounded-2xl text-center ${theme === "dark"
                      ? "bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20"
                      : "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200"
                      }`}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Available for Work</h3>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      I'm currently available for freelance projects and full-time opportunities.
                    </p>
                  </motion.div>
                </motion.div>
            </div>
            <div className="w-full text-center py-8">
              <p
                className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
              >
                © 2026 Ajithar. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
