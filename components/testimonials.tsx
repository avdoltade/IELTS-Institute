import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ananya S.",
    band: "7.5 Overall",
    quote: "The mock tests felt just like the real exam. The speaking feedback was spot on!",
    avatar: "/portrait-student.jpg",
    initials: "AS",
  },
  {
    name: "Rahul M.",
    band: "8.0 Overall",
    quote: "AI Band Score helped me fix specific weaknesses in reading speed and accuracy.",
    avatar: "/portrait-student-male.jpg",
    initials: "RM",
  },
  {
    name: "Sara K.",
    band: "7.0 Overall",
    quote: "Flexible timings and great mentors. I improved by 1 band in just 4 weeks.",
    avatar: "/portrait-student-female.jpg",
    initials: "SK",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="testimonials-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">
          Student Success Stories
        </h2>
        <p className="mt-2 text-muted-foreground">Real improvements, real scores. Here’s what our students say.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="h-full">
            <CardHeader className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src={t.avatar || "/placeholder.svg"} alt={`Portrait of ${t.name}`} />
                <AvatarFallback>{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.band}</p>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm leading-relaxed text-muted-foreground">{'"' + t.quote + '"'}</p>
              <div className="mt-4 flex items-center gap-1" aria-label="Rating: 5 out of 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-foreground text-foreground" aria-hidden />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
