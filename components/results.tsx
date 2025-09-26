import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Avg. Band Increase", value: "+1.2" },
  { label: "Students Scoring 7+", value: "78%" },
  { label: "Mock Tests Conducted", value: "12k+" },
  { label: "Satisfaction Rate", value: "96%" },
]

export function Results() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="results-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
          Results That Speak for Themselves
        </h2>
        <p className="mt-2 text-muted-foreground">
          Consistent, measurable improvement with structured guidance and real exam practice.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <Card key={s.label} className="h-full">
            <CardContent className="flex h-full flex-col items-center justify-center gap-1 py-6">
              <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
              <p className="text-xs text-muted-foreground text-center">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <a
          href="#contact"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          aria-label="Contact us to enroll"
        >
          Contact to Enroll
        </a>
      </div>
    </section>
  )
}
