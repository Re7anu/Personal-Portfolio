"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "ML Portfolio Optimization",
    description:
      "Built an unsupervised learning trading strategy using S&P 500 stock data with clustering and portfolio optimization. Backtested using Max Sharpe ratio.",
    tech: ["Python", "KMeans", "Pandas", "NumPy"],
    github: "#",
    demo: "#",
  },
  {
    title: "Chest CT Cancer Classifier",
    description:
      "Developed a CNN-based classifier for adenocarcinoma detection from CT scans. Integrated MLflow and DVC for experiment tracking and deployed on AWS.",
    tech: ["TensorFlow", "MLflow", "Docker", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "DSAchain - Blockchain in C++",
    description:
      "Designed a blockchain prototype with SHA-256 hashing, Merkle trees, and Proof of Work. Built console interface for transactions and mining.",
    tech: ["C++", "SHA-256", "Data Structures"],
    github: "#",
    demo: "#",
  },
  {
    title: "News App - React Native",
    description:
      "Built a React Native news app with custom tabs, carousels, and clean UI. Integrated NewsData.io API with bookmarking via AsyncStorage.",
    tech: ["React Native", "API Integration", "AsyncStorage"],
    github: "#",
    demo: "#",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Card
      ref={cardRef}
      className={`overflow-hidden group hover:shadow-lg transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex-1 bg-transparent rounded-full hover:scale-105 transition-transform duration-300"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button
          size="sm"
          asChild
          className="flex-1 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-transform duration-300"
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work in machine learning, blockchain, and software development
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="wave-divider mt-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}
