import type { ReactNode } from "react"

import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthTransitionProvider } from "@/components/auth/auth-transition"

export default function AuthRouteLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AuthLayout>
      <AuthTransitionProvider>{children}</AuthTransitionProvider>
    </AuthLayout>
  )
}
