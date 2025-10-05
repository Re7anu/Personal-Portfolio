"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Brain, TrendingUp, Terminal, BarChart3 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "Python & C++", icon: Code2 },
  { name: "Machine Learning", icon: Brain },
  { name: "Data Analytics", icon: BarChart3 },
  { name: "SQL & Databases", icon: Database },
  { name: "TensorFlow & PyTorch", icon: TrendingUp },
  { name: "AWS & Cloud", icon: Terminal },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 sm:py-32 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">About Me</h2>

        <Card className="p-8 sm:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a Computer Science student at the National University of Sciences and Technology (NUST), passionate
                about coding, problem-solving, and building real-world solutions. I specialize in data science,
                blockchain technology, and quantitative finance, with hands-on experience in machine learning, financial
                analytics, and full-stack development.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As a UAE Golden Visa recipient and Pearson High Achiever Award winner, I'm actively seeking internships
                and projects that allow me to grow technically while gaining hands-on experience in innovative,
                cross-disciplinary fields.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-6">Key Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <skill.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="wave-divider mt-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-muted/30">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  )
}
