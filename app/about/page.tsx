import {
    homepage_app_blocks,
} from "@/data/homepage/text"

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
} from "@/components/ui/card"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

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
              <Card className="sm:w-[60%] w-[90%] m-2 pt-6">
                <CardContent>
                  <h1>
                    Welcome to {homepage_app_blocks.landingText}! We are a group of students focused on tackling Indigenous issues regarding education by fostersing genuine empathy. We have built a webiste that poses guiding questions surrounding topics and curated articles as a way to build engagment. Enjoy!
                  </h1>
                </CardContent>
              </Card>
            </div>
        </main>
      </div>
    )
}