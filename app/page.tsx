import { Show, UserButton } from "@clerk/nextjs"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3 font-semibold">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg text-primary-foreground">
            D
          </span>
          Discord Clone
        </div>

        <nav aria-label="Account" className="flex items-center gap-2">
          <Show when="signed-out">
            <Button asChild variant="ghost">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </Show>
          <Show when="signed-in">
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-muted-foreground sm:inline">
                You&apos;re signed in
              </span>
              <UserButton showName />
            </div>
          </Show>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 pb-24 text-center">
        <p className="font-semibold text-primary">Your place to talk</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to your Discord community
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Create an account or sign in to start connecting with your friends
          and communities.
        </p>

        <Show when="signed-out">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/register">Create your account</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/login">
                I already have an account
              </Link>
            </Button>
          </div>
        </Show>

        <Show when="signed-in">
          <div className="rounded-xl border bg-card px-6 py-4 text-card-foreground shadow-sm">
            Your Clerk account is connected and ready to use.
          </div>
        </Show>
      </section>
    </main>
  )
}
