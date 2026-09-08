import type { ReactNode } from "react"
import { cn } from "cn"

type AuthLayoutProps = {
  children: ReactNode
  className?: string
}

function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <main
      data-slot="auth-layout"
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, #3b2d6b 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 80% 20%, #1a3a6e 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 60% 80%, #4a1f5c 0%, transparent 45%), linear-gradient(160deg, #1a1040 0%, #0c0c0d 45%, #15182a 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 flex w-full justify-center">{children}</div>
    </main>
  )
}

export { AuthLayout, type AuthLayoutProps }
