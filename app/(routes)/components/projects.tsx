import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"
import { Project } from "@/types"
import Container from "@/components/container"
import { SocialIcon } from "react-social-icons"
import { Github } from "lucide-react"

interface ProjectsProps{
  data: Project[]
}

export const Projects: React.FC<ProjectsProps> = ({
  data
}) => {
  return (
    <Container className="bg-muted p-6" id="projects">
      <Link href="/#projects"></Link>
      <div className="w-full max-w-6xl mx-auto py-12 md:py-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">My Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-md">
              Here are some of the projects I&apos;ve worked on that showcase my skills and expertise.
            </p>
          </div>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {
              data.map((project)=>(
              <CarouselItem key={project.id} className="p-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <Image
                      src={project.images[0]}
                      width={600}
                      height={400}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 grid gap-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-col gap-2">
                      <div>
                        <Link
                          href={project.hosted_link ? project.hosted_link : "/"}
                          className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary-foreground transition-colors"
                          prefetch={false}
                        >
                          <ArrowRightIcon className="w-4 h-4" />
                          View Website
                        </Link>
                      </div>
                      <div>
                        <Link
                          href={project.github}
                          className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary-foreground transition-colors"
                          prefetch={false}
                        >
                          <Github/>
                          View Source Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
  
              ))
            }
        </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full"/>
          <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full"/>
        </Carousel>
      </div>
    </Container>
  )
}

type ArrowRightIconProps = {
  className: string
}

function ArrowRightIcon({className} : ArrowRightIconProps ) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


type ChevronLeftIconProps = {
  className: string
}

function ChevronLeftIcon({className} : ChevronLeftIconProps ) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

type ChevronRightIconProps = {
  className: string
}

function ChevronRightIcon({className} : ChevronRightIconProps) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
