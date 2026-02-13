"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  Menu,
  X,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import clsx from "clsx";
import { Container } from "@/shared/container";
import Image from "next/image";

const NAV_LINKS = [
  {
    name: "COVER ART",
    text: [{ name: "Premade Cover" }, { name: "Custom Cover" }],
    href: "/cover-art",
  },
  {
    name: "ANIMATION",
    text: [
      { name: "All Animations" },
      { name: "Lyric Video" },
      { name: "Basic Animation" },
      { name: "Custom Animation" },
    ],
    href: "/animation",
  },
  {
    name: "ABOUT",
    text: [{ name: "FAQ" }, { name: "Contacts" }, { name: "About Us" }],
    href: "/about",
  },
  {
    name: "MARKET",
    text: [
      { name: "All Animations" },
      { name: "Lyric Video" },
      { name: "Basic Animation" },
      { name: "Custom Animation" },
    ],
    href: "/market",
  },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full relative z-50 bg-black md:bg-brand-white h-[60px] md:h-[87px]">
        <Container className="h-full">
          <div className="flex items-center justify-between h-full w-full">
            <Link href="/" className="hidden md:block">
              <Image
                src="/logo 4.svg"
                alt="logo"
                width={210}
                height={27}
                className="w-[180px] lg:w-[210px]"
              />
            </Link>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>

            <Link
              href="/"
              className="md:hidden absolute left-1/2 -translate-x-1/2"
            >
              <span className="text-white font-bold text-xl uppercase tracking-widest">
                COVERPLACE
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-10 lg:gap-15 h-full">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <div
                    key={link.name}
                    className="relative  h-full flex items-center group cursor-pointer"
                  >
                    {" "}
                    
                    <Link
                      href={link.href}
                      className={clsx(
                        "font-semibold text-[12px] uppercase tracking-wide transition-colors duration-300",
                        isActive
                          ? "text-[#3F25FF]"
                          : "text-[#1A1A1A] group-hover:text-[#3F25FF]",
                      )}
                    >
                      {link.name}
                    </Link>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0  z-50 rounded-b-lg">
                    <span
                      className={clsx(
                        "absolute top-0 left-0 w-full h-[2px] bg-[#3F25FF] transition-transform duration-500 origin-left z-10",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                      <div className="flex flex-col p-3 gap-3 items-start">
                        {link.text.map((item) => (
                          <Link
                            key={item.name}
                            href="#"
                            className="text-[13px] text-gray-500 hover:text-[#3F25FF] font-medium transition-colors whitespace-nowrap"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-8">
              <button className="hover:text-[#3F25FF] transition-colors">
                <Search size={22} />
              </button>
              <button className="hover:text-[#3F25FF] transition-colors">
                <Heart size={22} />
              </button>
              <button className="hover:text-[#3F25FF] transition-colors">
                <ShoppingBag size={22} />
              </button>
            </div>
            <button className="md:hidden text-white">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-[100] bg-black/60",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div
          className={clsx(
            "bg-[#0A0A0A] h-screen w-[90%] transition-transform duration-500 md:hidden flex flex-col",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {" "}
          <div className="px-5 h-[60px] flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <X size={32} strokeWidth={1} />
            </button>
          </div>
          <div className="flex flex-col mt-4 px-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-5 group"
              >
                <span className="text-white font-bold text-[13px] uppercase tracking-widest">
                  {link.name}
                </span>
                <ChevronRight
                  size={18}
                  className="text-[#444] group-active:text-white"
                />
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-10 px-5">
            <Link
              href="/favorites"
              className="flex items-center gap-3 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Heart size={24} strokeWidth={1.5} />
              <span className="font-bold text-[13px] uppercase tracking-widest">
                FAVORITES
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
