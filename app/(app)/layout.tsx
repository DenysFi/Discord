import { auth } from "@clerk/nextjs/server";

export default async function AppLayout({ children }: LayoutProps<"/">) {
  await auth.protect({ unauthenticatedUrl: "/sign-up" });
  return children;
}
