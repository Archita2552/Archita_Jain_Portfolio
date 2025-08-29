"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Award,
  BookOpen,
  Star,
  Send,
  Menu,
  X,
  Briefcase,
  Brain
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingElements } from "@/components/floating-elements"
import { PDFViewer } from "@/components/pdf-viewer"
import { ExperienceCard } from "@/components/experience-card"
import { AnimatedText } from "@/components/animated-text"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Update active section
      const sections = ["about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500 relative overflow-hidden">
      {/* Animated cursor follower */}
      <div
        className="fixed w-4 h-4 bg-indigo-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${scrollProgress / 100 + 0.5})`,
        }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out animate-pulse"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg z-40 border-b border-white/20 dark:border-slate-700/20 shadow-lg transition-all duration-300 hover:bg-white/95 dark:hover:bg-slate-900/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-300 cursor-pointer">
              <AnimatedText text="Archita Jain" delay={200} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                    activeSection === item.id
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse rounded-full animate-scale-in" />
                  )}
                </button>
              ))}
              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative hover:scale-110 transition-transform duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/20 animate-slide-down">
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 transform animate-fade-in-up ${
                      activeSection === item.id
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                        : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              <Image
                src="/ARCHI.jpg?height=200&width=200"
                alt="Archita Jain"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-white dark:border-slate-700 shadow-2xl relative z-10 hover:scale-105 transition-all duration-500 w-32 h-32 sm:w-48 sm:h-48 lg:w-52 lg:h-52 animate-float-slow hover:animate-bounce"
              />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 animate-fade-in">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient hover:animate-pulse">
                <AnimatedText text="Archita Jain" delay={100} />
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 font-light animate-slide-in-up">
              <AnimatedText text="Recent B.Tech Graduate | Aspiring Software Developer" delay={100} />
            </p>

            <ScrollReveal delay={0.5}>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Passionate about creating innovative solutions and eager to contribute to meaningful projects. Ready to
                begin my journey in the tech industry with fresh perspectives and boundless enthusiasm.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.7}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-10 max-w-2xl mx-auto">
                {[
                  { label: "Projects", value: 10, suffix: "+" },
                  { label: "Skills", value: 20, suffix: "+" },
                  { label: "Certifications", value: 10, suffix: "+" },
                  { label: "Experience", value: 1, suffix: " Internship" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 sm:p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl hover:scale-110 transition-all duration-500 animate-fade-in-up hover:bg-white/70 dark:hover:bg-slate-800/70 hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <PDFViewer />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base hover:shadow-lg"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full animate-pulse" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-6">
                  Fresh Graduate, <span className="text-indigo-600 dark:text-indigo-400">Big Dreams</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I recently completed my Bachelor of Technology degree and I'm excited to embark on my journey in
                  software development. During my academic years, I developed a strong foundation in programming,
                  problem-solving, and software engineering principles.
                </p>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm passionate about learning cutting-edge technologies, building innovative solutions, and
                  contributing to projects that make a meaningful impact. I believe in continuous learning and am always
                  eager to embrace new challenges.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2 animate-bounce" />
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">
                      Fresh Graduate
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">B.Tech 2025</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <Star className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2 animate-spin-slow" />
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">
                      Ready to Excel
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Eager to Learn</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="space-y-6 order-1 lg:order-2">
                <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-indigo-900/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 flex items-center">
                      <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 mr-2 animate-pulse" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-indigo-400 pl-4 hover:border-l-8 transition-all duration-300">
                        <h4 className="font-bold text-slate-800 dark:text-white text-base sm:text-lg">
                          Bachelor of Technology
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                          Computer Science 
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">2021 - 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-purple-600 dark:text-purple-400 flex items-center">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-2 animate-bounce" />
                      Contact Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105">
                        <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-3 text-indigo-500" />
                        <span className="text-sm sm:text-base">archijain2508@gmail.com</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105">
                        <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-3 text-purple-500" />
                        <span className="text-sm sm:text-base">India</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full animate-pulse" />
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
                My professional journey and hands-on experience in software development
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <ExperienceCard
                title="Software Development Intern"
                company="Your Exam Saathi-YES."
                location="Remote"
                duration="September 2024 - March 2025"
                type="Internship"
                description={[
                  "Developed and maintained web applications using React.js",
                  "Collaborated with senior developers to implement new features and fix bugs",
                  "Participated in code reviews and learned best practices for clean, maintainable code",
                  "Worked with databases to design and optimize queries for better performance",
                  "Contributed to the development of RESTful APIs and integrated third-party services",
                ]}
                achievements={[
                  "Successfully delivered 3 major features ahead of schedule",
                  "Improved application performance by 25% through code optimization",
                  "Received positive feedback from team lead for quick learning and adaptation",
                  "Contributed to reducing bug reports by 30% through thorough testing",
                ]}
                technologies={[
                  "React.js",
                  "JavaScript",
                  "Express.js",
                  "Git",
                  "REST APIs",
                  "HTML/CSS",
                ]}
                companyUrl="https://www.yourexamsaathi.com "
                delay={0.2}
              />
            </div>
          </ScrollReveal>

          {/* Timeline indicator */}
          <ScrollReveal delay={0.5}>
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-4 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Looking for full-time opportunities
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section
        id="skills"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Skills & Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full animate-pulse" />
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
               {
                icon: Code,
                title: "Programming",
                skills: ["JavaScript", "Python", "C/C++","SQL"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                title: "Web Development",
                skills: ["React", "HTML/CSS", "Node.js", "Tailwind CSS"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Database,
                title: "Database",
                skills: ["MySQL", "MongoDB", "PostgreSQL"],
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: Smartphone,
                title: "Tools & Others",
                skills: ["Git", "VS Code", "Juypter", "Figma"],
                color: "from-orange-500 to-red-500",
              },
               {
                icon:Brain,
                title: "AI & Language Models ",
                skills: ["Transformers", "Prompt Engineering", "LLM Models", "GenAI"],
                color: "from-rose-500 to-pink-500",
              },
            ].map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <Card
                  className={`text-center bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up hover:rotate-1`}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse`}
                    >
                      <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-slate-800 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/50 dark:hover:to-purple-900/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Certifications */}
           <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 transition-colors duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center">
                <Award className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-indigo-600 dark:text-indigo-400 animate-bounce" />
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                   {
                    title: "Deloitte Australia - Cyber Job Simulation",
                    issuer: "Forage",
                    date: "2025",
                    color: "from-pink-400 to-maroon-500",
                    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_YAHM3v6X3ahzQYEpB_1753085530299_completion_certificate.pdf", 
                  },
                  {
                    title: "Deloitte Australia - Technology Job Simulation",
                    issuer: "Forage",
                    date: "2025",
                    color: "from-yellow-400 to-maroon-500",
                    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_YAHM3v6X3ahzQYEpB_1756391943890_completion_certificate.pdf", 
                  },
                  {
                    title: "Deloitte Australia - Data Analytics Job Simulation",
                    issuer: "Forage",
                    date: "2025",
                    color: "from-orange-400 to-maroon-500",
                    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_YAHM3v6X3ahzQYEpB_1756388943197_completion_certificate.pdf", 
                  },
                  {
                    title: "Full-Stack Web Development Bootcamp",
                    issuer: "Udemy",
                    date: "2024",
                    color: "from-blue-500 to-cyan-500",
                    url: "https://www.udemy.com/certificate/UC-34814220-e942-4bcc-bf65-1e3abca53358/", 
                  },
                  {
                    title: "ChatGPT Prompt Engineering for Developers",
                    issuer: "Deeplearning.Ai",
                    date: "2025",
                    color: "from-purple-500 to-violet-500",
                    url: "https://learn.deeplearning.ai/accomplishments/f587d566-2656-4a94-ae0f-cb261c44c2a1", // Placeholder URL
                  },
                
                  {
                    title: "Frontend Development Libraries",
                    issuer: "freeCodecamp",
                    date: "2024",
                    color: "from-fuchsia-500 to-purple-500",
                    url: "https://www.freecodecamp.org/certification/Architajain_25/front-end-development-libraries", 
                  },
                   {
                    title: "Responsive Web Design",
                    issuer: "freeCodecamp",
                    date: "2023",
                    color: "from-slate-500 to-gray-600",
                    url: "https://www.freecodecamp.org/certification/Architajain_25/responsive-web-design",
                  },
                  {
                    title: "Data Structures and Algorithms",
                    issuer: "Infosys",
                    date: "2023",
                    color: "from-green-500 to-emerald-500",
                    url: "https://drive.google.com/file/d/1SfunkmadXICznE36brEKp3a9dptXFoj8/view",
                  },
                  {
                    title: "Foundational GenAI",
                    issuer: "ineuron",
                    date: "2025",
                    color: "from-teal-400 to-cyan-500",
                    url: "", 
                  },
                ].map((cert, index) => (
                  // Wrap the div with an <a> tag:
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    aria-label={`View ${cert.title} certification`}
                  >
                    <div
                      className={`p-4 sm:p-6 rounded-xl bg-gradient-to-br ${cert.color} text-white transform hover:scale-105 transition-all duration-500 animate-fade-in-up hover:rotate-2 hover:shadow-2xl`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Award className="w-6 sm:w-8 h-6 sm:h-8 mb-3 animate-spin-slow" />
                      <h4 className="font-bold text-base sm:text-lg mb-2">{cert.title}</h4>
                      <p className="text-xs sm:text-sm opacity-90">{cert.issuer}</p>
                      <p className="text-xs opacity-75 mt-1">{cert.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full animate-pulse" />
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for development
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "FitFuel",
                description:
                  "Developed a responsive wellness platform with an intuitive UI and visual progress indicators for tracking daily calorie intake. It features a personalized food recommendation system adapting to user goals and dietary patterns. The platform also integrates interactive fitness carousels for exercise guidance, promoting a balanced lifestyle.",
                image: "fitfuel.png/?height=250&width=400",
                technologies: ["React.js", "Next.js", "Tailwind CS"],
                gradient: "from-blue-500 to-cyan-500",
                liveUrl: "https://fit-fuel-mocha.vercel.app/", // Placeholder URL
                githubUrl: "https://github.com/Archita2552/FitFuel", // Placeholder URL
              },
              {
                title: "Country Explorer – Global Info Website",
                description:
                  "Developed a responsive single-page application to explore global country data, featuring dynamic routing, region-based filtering, a dark/light mode toggle, and a modern UI, displaying structured information from a static JSON source without backend dependencies.",
                image: "/country-app.png?height=250&width=400",
                technologies: ["AngularJS", "HTML", "CSS"],
                gradient: "from-green-500 to-emerald-500",
                liveUrl: "https://country-app-ten-virid.vercel.app/", // Placeholder URL
                githubUrl: "https://github.com/Archita2552/CountryApp", // 
              },
              {
                title: "Crowd Counting and Video Surveillance",
                description:
                  "Designed and implemented a hybrid deep learning model combining YOLOv5 for person detection and CSRNet for density estimation, enabling accurate real-time crowd counting with an 85% improvement in overall count accuracy through an adaptive fusion mechanism.",
                image: "/placeholder.svg?height=250&width=400",
                technologies: ["Python", "YOLOv5", "CSRNet", "OpenCV", "Deep Learning"],
                gradient: "from-purple-500 to-violet-500",
                liveUrl: "", // Placeholder URL
                githubUrl: "https://github.com/Archita2552/Crowd-Counting-Video-Surveillance-", // 
              },
            ].map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.2}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label={`View ${project.title} project`}
                >
                  <Card
                    className={`bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up overflow-hidden hover:rotate-1`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                        <span className="text-slate-800 dark:text-white">{project.title}</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.githubUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:scale-110 transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault() // Prevent card click from triggering
                                window.open(project.githubUrl, "_blank")
                              }}
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:scale-110 transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault() // Prevent card click from triggering
                                window.open(project.liveUrl, "_blank")
                              }}
                              aria-label={`View live demo of ${project.title}`}
                            >
                              <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                            </Button>
                          )}
                        </div>
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/50 dark:hover:to-purple-900/50 transition-all duration-300 text-xs hover:scale-105 animate-bounce-in"
                            style={{ animationDelay: `${techIndex * 0.05}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 text-white relative overflow-hidden transition-colors duration-300"
      >
        <FloatingElements />

        {/* Decorative dots background */}
        <div
          className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full animate-pulse" />
              <p className="text-lg sm:text-xl text-indigo-100 mt-6 max-w-2xl mx-auto">
                I'm actively looking for opportunities to start my career. Let's discuss how I can contribute to your
                team!
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "archijain2508@gmail.com",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                content:"linkedin.com/in/archijain2552/",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Github,
                title: "GitHub",
                content: "github.com/Archita2552",
                color: "from-purple-500 to-violet-500",
              },
            ].map((contact, index) => (
              <ScrollReveal key={contact.title} delay={index * 0.1}>
                <a
                  href={contact.title === "Email" ? `mailto:${contact.content}` : `https://${contact.content}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label={`Connect with Archita on ${contact.title}`}
                >
                  <Card
                    className={`text-center bg-white/10 dark:bg-slate-800/20 backdrop-blur-lg border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-700/30 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up hover:rotate-1 hover:scale-105`}
                  >
                    <CardContent className="pt-6 sm:pt-8 pb-4 sm:pb-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse`}
                      >
                        <contact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-white">{contact.title}</h3>
                      <p className="text-indigo-100 text-xs sm:text-sm break-all">{contact.content}</p>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
                <a
                href="mailto:archita.jain@email.com"
                className="inline-block" // Use inline-block to allow button styling to apply
                aria-label="Send Archita an email"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-500 shadow-2xl text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:rotate-1 hover:shadow-pink-500/25 animate-pulse"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm sm:text-base hover:text-slate-300 transition-colors duration-300">
            © 2025 Archita Jain. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
