"use client"
import Container from "@/components/container";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Experience } from "@/types"
import Link from "next/link";
import { useEffect, useState } from "react";
interface ExperienceProps{
  data: Experience[]
}

export const ExperienceSection: React.FC<ExperienceProps> = ({
  data
}) => {
  const [openItemId, setOpenItemId] = useState(data[0]?.id);
  const [isMounted, setIsMounted] = useState(false); 
  useEffect(()=>{
    setIsMounted(true)
  }, [])
  if(!isMounted){
    return null
  }
  return (
    <Container className="w-full py-12 md:py-24 lg:py-32">
      <Link href="/#experiences"></Link>
      <div className="container px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">Experiences</h2>
          <p className="max-w-[900px] text-muted-foreground text-center">
            Here are some of the experiences I&apos;ve gained so far.
          </p></div>
          <div className="space-y-4">
            {
              data.map((experience)=>(
              <Collapsible 
                key={experience.id} 
                className="rounded-lg border bg-background shadow-sm"
                open={experience.id === openItemId}
                onOpenChange={()=>(
                  setOpenItemId(experience.id)
                )}
              >
                <CollapsibleTrigger className="w-full flex items-center[&[data-state=open]>svg]:rotate-90">
                  <div className="flex items-center justify-between gap-4 px-6 py-4">
                    <h3 className="text-lg font-semibold text-left">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground text-right">{`${experience.company} | ${experience.start_time.getFullYear()} - ${experience.end_time && experience.end_time.getFullYear() ? experience.end_time.getFullYear() : "Present"}`}</p>
                    <ChevronDownIcon className="h-5 w-5 transition-transform" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4">
                  <div className="space-y-2">
                    <p>As a {experience.title} at {experience.company}, I was responsible for:</p>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">{experience.description}</ul>
                    <p>Key achievements:</p>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">{experience.description}</ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  )
}
type ChevronDownIconProps = {
  className?: string
}

function ChevronDownIcon({
  className
} : ChevronDownIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}