import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ClipboardList, Gauge, GraduationCap } from "lucide-react"

const items = [
  {
    title: "Speaking Practice",
    description: "One-on-one sessions with detailed feedback on fluency, coherence, and pronunciation.",
    Icon: MessageSquare,
  },
  {
    title: "Mock Tests",
    description: "Regular timed mock tests replicating the real exam conditions to build confidence.",
    Icon: ClipboardList,
  },
  {
    title: "AI Band Score",
    description: "Instant analytics with actionable tips to improve your Reading & Writing bands.",
    Icon: Gauge,
  },
  {
    title: "Expert Mentors",
    description: "Certified trainers with years of IELTS coaching experience and proven results.",
    Icon: GraduationCap,
  },
]

export function Features() {
  return (
    <section
      id="programs"
      aria-labelledby="features-heading"
      className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="features-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
          Everything You Need to Succeed
        </h2>
        <p className="mt-2 text-muted-foreground">
          Practice smarter with an advanced toolkit designed for high-impact IELTS preparation.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {items.map(({ title, description, Icon }) => (
          <Card key={title} className="h-full">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <CardTitle className="text-base md:text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div id="mock-tests" className="sr-only">
        Mock Tests section anchor
      </div>
      <div id="results" className="sr-only">
        Results section anchor
      </div>
    </section>
  )
}
