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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  articles,
} from "@/data/homepage/text"

import { ChevronsRight } from 'lucide-react';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const slugInt: number = Number((await params).slug);
  const articleUrl = articles[slugInt]?.url
  const questionOne = articles[slugInt]?.questionOne
  const questionTwo = articles[slugInt]?.questionTwo
  const questionThree = articles[slugInt]?.questionThree

  if (articleUrl == undefined) {
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
            <div className="w-full sm:max-w-[70%] max-h-[90%] max-w-[90%] flex items-center justify-center flex-col sm:flex-row">
              <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 max-w-6xl text-muted-foreground leading-loose'>Scan Code Not Found</h1>  
            </div>
        </main>

        <footer className="p-6 flex">
          <ThemeIcon />
          <div className='grow'></div>
          <Button size="lg" asChild>
            <Link href="/"> <ChevronsRight /> Home </Link>
          </Button>
        </footer>
      </div>
    );
  } else {
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
            <div className="w-full sm:max-w-[70%] max-h-[90%] max-w-[90%] flex items-center justify-center flex-col sm:flex-row">
              <Card className="sm:w-[32%] w-[90%] m-2">
                <CardHeader>
                  <CardTitle>Question One</CardTitle>
                </CardHeader>
                <CardContent>
                  <h1>{questionOne}</h1>
                </CardContent>
              </Card>
              <Card className="sm:w-[32%] w-[90%] m-2">
                <CardHeader>
                  <CardTitle>Question Two</CardTitle>
                </CardHeader>
                <CardContent>
                  <h1>{questionTwo}</h1>
                </CardContent>
              </Card>
              <Card className="sm:w-[32%] w-[90%] m-2">
                <CardHeader>
                  <CardTitle>Question Three</CardTitle>
                </CardHeader>
                <CardContent>
                  <h1>{questionThree}</h1>
                </CardContent>
              </Card>
            </div>
        </main>

        <footer className="p-6 flex">
          <ThemeIcon />
          <div className='grow'></div>
          <Button size="lg" asChild>
            <Link href={articleUrl} rel="noopener noreferrer" target="_blank"> <ChevronsRight /> To Article </Link>
          </Button>
        </footer>
      </div>
    )
  }
}