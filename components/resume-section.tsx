"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "BS Computer Science",
    organization: "National University of Sciences and Technology",
    location: "Islamabad",
    year: "Sep 2023 - Jun 2027",
    description: "Currently in 5th semester. Focus on machine learning, data structures, and software engineering.",
  },
  {
    type: "work",
    title: "Developer of Blockchain and Financial Data Club",
    organization: "Dubai Gem Private School",
    location: "Dubai",
    year: "Sep 2021 - May 2022",
    description:
      "Developed curriculum on blockchain, financial analytics, and DeFi. Expanded club to 50+ students through hands-on projects.",
  },
  {
    type: "education",
    title: "Pearson Edexcel A-level",
    organization: "Dubai Gem Private School",
    location: "Dubai",
    year: "Graduated Jun 2023",
    description: "3 A's in Maths, Physics, and Chemistry. Pearson High Achiever Award Winner.",
  },
  {
    type: "award",
    title: "UAE Golden Visa Recipient",
    organization: "Outstanding High School Students Category",
    location: "UAE",
    year: "2023",
    description: "Recognized for academic excellence and outstanding achievements.",
  },
]

function TimelineItem({ item, index }: { item: (typeof experiences)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

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

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 pb-12 last:pb-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background">
        {item.type === "work" ? (
          <Briefcase className="h-5 w-5 text-primary" />
        ) : item.type === "award" ? (
          <Award className="h-5 w-5 text-primary" />
        ) : (
          <GraduationCap className="h-5 w-5 text-primary" />
        )}
      </div>

      <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />

      <div className="ml-8">
        <div className="flex flex-wrap items-baseline gap-2 mb-2">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <span className="text-sm text-muted-foreground">• {item.year}</span>
        </div>
        <p className="text-primary font-medium mb-1">
          {item.organization}
          {item.location && <span className="text-muted-foreground"> • {item.location}</span>}
        </p>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">Experience & Education</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My professional journey and academic background
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="wave-divider mt-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-muted/30">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  )
}
