export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="IELTS Institute logo">
      <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold">
        {"II"}
      </div>
      <span className="font-semibold tracking-tight">{"IELTS Institute"}</span>
    </div>
  )
}
