import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-6xl px-4 pt-10 pb-12 md:pt-16 md:pb-16 scroll-mt-24"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
            Proven strategies since 2015
          </div>
          <h1 id="hero-heading" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Boost Your IELTS Band with Expert-Led Practice
          </h1>
          <p className="mt-3 text-pretty text-muted-foreground md:text-lg leading-relaxed">
            Personalized coaching, real exam simulations, and smart feedback to help you achieve your target band score
            faster.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="h-10 px-5">
              <Link href="/enroll" aria-label="Apply for a free demo session">
                Book Free Demo
              </Link>
            </Button>
            <Button asChild variant="secondary" className="h-10 px-5">
              <Link href="#programs" aria-label="View IELTS courses">
                View Courses
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <img src="/placeholder-logo.svg" alt="Trusted partner" className="h-6 w-auto opacity-70" />
            <img src="/placeholder-logo.svg" alt="Trusted partner" className="h-6 w-auto opacity-70" />
            <img src="/placeholder-logo.svg" alt="Trusted partner" className="h-6 w-auto opacity-70" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-card">
            <img
              src="/students-studying-ielts-classroom.jpg"
              alt="Students preparing for IELTS with a mentor"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
