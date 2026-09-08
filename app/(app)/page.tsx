import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function AppPage() {
  await auth.protect({ unauthenticatedUrl: "/sign-up" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-lg font-semibold">App</h1>
        <UserButton showName />
      </header>
      <section className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-muted-foreground">
          You are signed in. This route is protected.
        </p>
      </section>
    </main>
  );
}
