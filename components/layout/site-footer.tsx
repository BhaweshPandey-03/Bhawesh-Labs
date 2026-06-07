import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-muted py-10">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground flex items-center hover:underline gap-1"
        >
          <span>Explore work on</span>
          <span className="flex items-center gap-1">
            <GitHubLogoIcon className="text-primary" /> GitHub
          </span>
        </a>

        <div className="flex gap-4 text-muted-foreground">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline gap-1"
          >
            LinkedIn
            <ArrowTopRightIcon className="mt-[1px] w-[16px] h-[16px]" />
          </a>
          <a
            href={siteConfig.links.email}
            className="flex items-center hover:underline gap-1"
          >
            Contact
            <ArrowTopRightIcon className="mt-[1px] w-[16px] h-[16px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
