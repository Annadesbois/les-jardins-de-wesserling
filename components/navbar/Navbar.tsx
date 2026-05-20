import Link from "next/link";
import Image from "next/image";

import DesktopMenu from "./DesktopMenu";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";
import jdw from "@/public/logos/les-jardins-de-wesserling-logo.svg"

import type { NavbarProps } from "@/types/i18n";

const Navbar = ({ locale, messages }: NavbarProps) => {
  const base = `/${locale}`;

  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] lg:flex lg:justify-center h-16 w-full relative bg-surface-1">
      <div className="lg:hidden flex items-center ml-4">
        <MobileMenu locale={locale} messages={messages} />
      </div>
      <Link
        href={base}
        className="flex items-center justify-center lg:justify-start lg:ml-4 "
      >
        <Image src={jdw} alt="Les Jardins de Wesserling logo" className="ml-5 mr-1 w-10 md:mr-2 md:ml-0 md:w-12"></Image>
        <h1 className="font-bold whitespace-nowrap text-primary text-center text-xl lg:text-lg">
          Les Jardins de
          <br className="hidden lg:block" />
          <span className="lg:"> Wesserling</span>
        </h1>
      </Link>
      <div className="hidden lg:flex lg:items-center lg:justify-end w-full lg:mr-4">
        <DesktopMenu locale={locale} messages={messages} />
        <LocaleSwitcher currentLocale={locale} />
      </div>
    </nav>
  );
};
export default Navbar;
