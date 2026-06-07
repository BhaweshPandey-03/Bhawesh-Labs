import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="bg-muted py-10">
      <div className="container justify-between flex">
        <a
          href="https://github.com/BhaweshPandey-03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground flex items-center hover:underline gap-1"
        >
          <span>Explore work on</span>
          <span className="flex items-center gap-1">
            <GitHubLogoIcon className="text-primary" /> GitHub
          </span>
        </a>

        <a
          href="mailto:bhaweshpandey0310@gmail.com"
          className="text-muted-foreground flex items-center hover:underline gap-1"
        >
          <span className="flex items-center">
            <span className="flex mr-1">Contact Bhawesh Labs</span>
            <ArrowTopRightIcon className="mt-[1px] w-[16px] h-[16px]" />
          </span>
        </a>
      </div>
    </footer>
  );
}
