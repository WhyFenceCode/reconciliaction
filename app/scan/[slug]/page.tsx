import Link from 'next/link'
import { Button } from "@/components/ui/button"

import { ThemeIcon } from "@/components/blocks/theme-switch"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbEllipsis,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  landing_start_prompts,
  landing_end_prompts,
} from "@/data/homepage/text"
import { ChevronsRight } from 'lucide-react';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const carouselStartItems = landing_start_prompts.map(landing_start_prompts => 
    <CarouselItem>
      <div className="p-4">
        <h1 className="text-xl sm:text-4xl text-foreground mb-2">{landing_start_prompts.title}</h1>
        <p className="text-l sm:text-2xl text-muted-foreground">{landing_start_prompts.text}</p>
      </div>
    </CarouselItem>
  )

  const carouselEndItems = landing_end_prompts.map(landing_end_prompts => 
    <CarouselItem>
      <div className="p-4">
        <h1 className="text-xl sm:text-4xl text-foreground mb-2">{landing_end_prompts.title}</h1>
        <p className="text-l sm:text-2xl text-muted-foreground">{landing_end_prompts.text}</p>
      </div>
    </CarouselItem>
  )
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-background bg-[radial-gradient(circle_farthest-corner_at_50%_110%,hsl(var(--primary-glow))_0%,hsl(var(--background))_50%,hsl(var(--background))_100%)] bg-cover	"></div>
      <header className="p-8">
        <div className="w-auto h-4 flex items-center">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{slug}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
          <Carousel className="w-full max-w-[70%] max-h-[90%]">
            <CarouselContent>
              {carouselStartItems}
              {/* The Questions Will Be Added Here */}
              {carouselEndItems}
              <CarouselItem>
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 max-w-6xl text-foreground leading-loose">Your Article Awaits You</h1>
                  <p className="text-xl sm:text-3xl mb-8 max-w-3xl text-muted-foreground">Press on the button bellow to take you to the article that you are supposed to read</p>
                  <Button size="lg" asChild>
                    <Link href="#"> <ChevronsRight /> To Article </Link>
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </main>

      <footer className="p-6">
        <ThemeIcon />
      </footer>
    </div>
  );
}