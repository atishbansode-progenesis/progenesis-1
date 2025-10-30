"use client";
import { usePathname } from "next/navigation";

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Add top padding only on home page where navbar is fixed
  // On inner pages, navbar is relative and scrolls with content, so no padding needed
  return (
    <main className={pathname === "/" ? "pt-0" : ""}>
      {children}
    </main>
  );
}
