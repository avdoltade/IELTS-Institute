import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="border-t scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold">IELTS Institute</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Expert-led training to help you achieve your dream band score.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#programs" className="hover:text-foreground">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#mock-tests" className="hover:text-foreground">
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link href="#results" className="hover:text-foreground">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <address className="mt-2 not-italic text-sm text-muted-foreground">
              221B Baker Street, London
              <br />
              +44 20 7946 0958
              <br />
              <a href="mailto:hello@ieltspro.example" className="hover:text-foreground">
                hello@ieltspro.example
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} IELTS Pro Institute. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/enroll" className="hover:text-foreground">
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
