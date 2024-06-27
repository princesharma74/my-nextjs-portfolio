"use client"
import * as React from "react";
import Currency from "@/components/currency";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { excerpt } from "@/lib/utils";
import { Template } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const dynamic = 'force-dynamic';
interface TemplatesProps {
  data: Template[];
}

export const Templates: React.FC<TemplatesProps> = ({ data }) => {
  const router = useRouter()
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="templates">
      <Link href={"#templates"}></Link>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              My Featured Templates
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the templates I&apos;ve worked on that showcase my skills and expertise.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {data.map((template) => (
            <Card
              key={template.id}
              className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <Link
                href={template.url}
                className="absolute inset-0 z-10"
                prefetch={false}
              >
                <span className="sr-only">View template</span>
              </Link>
              <Image
                src={template.images[0]}
                alt="template 1"
                width={360}
                height={240}
                className="object-cover w-full h-48 sm:h-56"
              />
              <div className="p-4 bg-background flex flex-col h-full">
                <h3 className="text-xl font-bold">{template.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{excerpt(template.description, 200)}</p>
                <div className="flex justify-between items-center">
                  <Currency value={template.price} />
                  <Button onClick={() => {
                    router.push(template.purchase_link)
                  }} variant={"outline"} className="rounded-full">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
