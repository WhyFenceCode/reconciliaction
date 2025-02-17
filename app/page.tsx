import Link from 'next/link'
import { Button } from "@/components/ui/button"

import { ThemeIcon } from "@/components/blocks/theme-switch"

import {
  homepage_app_blocks,
} from "@/data/homepage/text"
import { ChevronsRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-background bg-[radial-gradient(circle_farthest-corner_at_50%_110%,hsl(var(--primary-glow))_0%,hsl(var(--background))_50%,hsl(var(--background))_100%)] bg-cover	"></div>
      <header className="p-6">
        <div className="w-12 h-12 flex items-center justify-center">
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl sm:text-6xl font-extrabold mb-4 max-w-6xl text-foreground leading-loose">{homepage_app_blocks.landingText}</h1>
        <p className="text-xl sm:text-3xl mb-8 max-w-3xl text-muted-foreground">{homepage_app_blocks.landingSubText}</p>
        <Button size="lg" asChild>
          <Link href="#"> <ChevronsRight /> Learn More </Link>
        </Button>
      </main>

      <footer className="p-6">
        <ThemeIcon />
      </footer>
    </div>
  );
}