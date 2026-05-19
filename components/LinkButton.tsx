import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

const baseClass =
  "mx-auto flex w-fit text-center justify-center rounded-2xl bg-accent px-6 py-3 text-base font-bold text-primary shadow-sm hover:bg-primary/90 hover:text-white";

const LinkButton = ({
  href,
  children,
  className = "",
  external,
}: LinkButtonProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
