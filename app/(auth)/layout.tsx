import type { ReactNode } from "react"

import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthTransitionProvider } from "@/components/auth/auth-transition"
import { QueryProvider } from "@/components/providers/query-provider"

export default function AuthRouteLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <QueryProvider>
      <AuthLayout>
        <AuthTransitionProvider>{children}</AuthTransitionProvider>
      </AuthLayout>
    </QueryProvider>
  )
}
