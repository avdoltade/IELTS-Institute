"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navItems = [
  { href: "#programs", label: "Programs" },
  { href: "#mock-tests", label: "Mock Tests" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav aria-label="Main" className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="IELTS Institute home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="ml-2" variant="default">
              <Link href="/enroll" aria-label="Go to enrollment page">
                Apply Now
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <div className={cn("relative h-4 w-5")} aria-hidden>
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-foreground transition",
                  open ? "translate-y-1.5 rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn("absolute block h-0.5 w-5 bg-foreground transition", open ? "opacity-0" : "opacity-100")}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-foreground transition",
                  open ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <div className="flex flex-col gap-2 border-t py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-1 w-full" onClick={() => setOpen(false)}>
                <Link href="/enroll" aria-label="Go to enrollment page">
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
