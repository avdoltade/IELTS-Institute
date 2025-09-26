"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold">{"Apply to IELTS Institute"}</h1>
      <p className="mt-2 text-muted-foreground">
        {"Fill this quick form and we’ll reach out with batch details and a free demo invite."}
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <label className="grid gap-1">
          <span className="text-sm font-medium">{"Full Name"}</span>
          <input
            required
            name="name"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">{"Email"}</span>
          <input
            required
            type="email"
            name="email"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">{"Target Band"}</span>
          <input
            name="target"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            placeholder="e.g., 7.5"
          />
        </label>
        <Button type="submit" className="mt-2">
          {submitted ? "Submitted!" : "Submit Application"}
        </Button>
      </form>

      <div className="mt-6 text-sm">
        <Link href="/" className="text-primary hover:underline">
          {"← Back to Home"}
        </Link>
      </div>
    </main>
  )
}
