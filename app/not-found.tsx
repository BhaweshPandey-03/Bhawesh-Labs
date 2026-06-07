import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-20">
      <h1>Page not found</h1>
      <p className="mb-6 max-w-xl">
        This page is not available yet. Bhawesh Labs is being built in focused
        phases, so some future routes may still be planned.
      </p>
      <Link href="/" className="font-medium hover:underline">
        Return home
      </Link>
    </main>
  );
}
