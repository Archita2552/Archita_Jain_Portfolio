"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  duration: string
  type: string
  description: string[]
  technologies: string[]
  achievements?: string[]
  companyUrl?: string
  delay?: number
}

export function ExperienceCard({
  title,
  company,
  location,
  duration,
  type,
  description,
  technologies,
  achievements = [],
  companyUrl,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <Card
      className="bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl sm:text-2xl text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {title}
            </CardTitle>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center">
                {companyUrl ? (
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    aria-label={`Visit ${company} website`}
                  >
                    <Building className="w-4 h-4 mr-2 text-indigo-500" />
                    <span className="font-medium">{company}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ) : (
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-indigo-500" />
                    <span className="font-medium">{company}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 hover:scale-105 transition-transform duration-300"
            >
              {type}
            </Badge>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        {/* Description */}
        <div>
          <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Key Responsibilities</h4>
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed animate-slide-in-left"
                style={{ animationDelay: `${delay + 0.1 + index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed animate-slide-in-right"
                  style={{ animationDelay: `${delay + 0.3 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                style={{ animationDelay: `${delay + 0.5 + index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
