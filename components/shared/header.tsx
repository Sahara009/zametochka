import Image from "next/image";

import cartIcon from "@/components/assets/cart.svg";
import logo from "@/components/assets/logotype.svg";
import headerLine from "@/components/assets/Vector1.svg";
import { Container } from "@/components/shared/container";

const menuItems = [
  { label: "shop", href: "/shop" },
  { label: "contacts", href: "#" },
  { label: "about", href: "#" },
  { label: "shipping", href: "#" },
];

export function Header() {
  return (
    <header className="w-full">
      <Container className="flex items-center justify-between py-3">
        <a
          href="./"
          aria-label="Zametoshka home"
          className="shrink-0 transition-transform duration-300 ease-out hover:-rotate-2 hover:scale-105"
        >
          <Image
            src={logo}
            alt="Zametoshka"
            width={112}
            height={57}
            priority
            className="h-auto w-20 sm:w-24"
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-lg lowercase text-neutral-900 md:flex lg:gap-10"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition-colors duration-300 hover:text-neutral-500 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="relative text-lg lowercase text-neutral-900 transition-colors duration-300 hover:text-neutral-500 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            login
          </a>
          <a
            href="#"
            aria-label="Cart"
            className="shrink-0 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-110"
          >
            <Image
              src={cartIcon}
              alt=""
              width={36}
              height={33}
              className="h-auto w-7 sm:w-8"
            />
          </a>
        </div>
      </Container>

      <Container>
        <Image
          src={headerLine}
          alt=""
          width={1326}
          height={15}
          className="h-[15px] w-full object-fill"
        />
      </Container>
    </header>
  );
}
