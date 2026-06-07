import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
