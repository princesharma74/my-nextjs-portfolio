"use client"

import { Publication } from "@/types"
import { format } from "date-fns"
import Link from "next/link"

export const dynamic = 'force-dynamic';
interface PublicationProps {
  data: Publication[]
}

export const PublicationSection : React.FC<PublicationProps> = ({
  data
}) => {
  return (
    <section id="publications" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Research Papers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              There are some of the research papers I have published during my academic journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {
            data.map((publication) => (
            <div key={publication.id} className="grid gap-4">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">{publication.title}</h3>
                  <div className="text-sm text-muted-foreground">{publication.info}</div>
                  <div className="text-sm text-muted-foreground">Published: {format(publication.published, "MMM yyyy")}</div>
                  <Link href={publication.url} className="inline-flex items-center gap-2 font-medium hover:underline" prefetch={false}>
                    <ArrowRightIcon className="h-4 w-4" />
                    Read Paper
                  </Link>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon(props : any) {
  return (
    <svg
      {...props}
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
