import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const LinkButton = ({ href, children, className = "", external }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`mx-auto flex w-fit justify-center rounded-2xl bg-accent px-6 py-3 mt-8 text-base font-bold text-primary shadow-sm hover:bg-primary/90 hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;