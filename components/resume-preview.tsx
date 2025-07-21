"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, MapPin, Mail, Globe, Github, Linkedin } from "lucide-react"
import { PDFViewer } from "./pdf-viewer"

export function ResumePreview() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Resume Preview Card */}
      <Card className="bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 flex items-center">
            <FileText className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
            Resume Preview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Header Info */}
          <div className="text-center pb-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Archita Jain</h3>
            <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-3">Software Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                archita.jain@email.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                India
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Professional Summary</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Recent B.Tech graduate in Computer Science with strong foundation in programming, web development, and
              software engineering principles. Passionate about creating innovative solutions and eager to contribute to
              meaningful projects.
            </p>
          </div>

          {/* Key Skills */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Node.js", "Python", "Java", "MongoDB", "Git", "Tailwind CSS"].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Education</h4>
            <div className="border-l-4 border-indigo-400 pl-4">
              <h5 className="font-medium text-slate-800 dark:text-white">Bachelor of Technology</h5>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">Computer Science Engineering</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">2020 - 2024</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4">
            <PDFViewer />
          </div>
        </CardContent>
      </Card>

      {/* Resume Highlights */}
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 dark:text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              Recent Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">
                    Completed Web Development Bootcamp
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">January 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">Graduated B.Tech in CSE</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">December 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">Built Portfolio Website</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">January 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 dark:text-white flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
              Connect With Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/archita-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/archita-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="text-sm text-slate-700 dark:text-slate-300">GitHub Profile</span>
              </a>
              <a
                href="mailto:archita.jain@email.com"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Send Email</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
