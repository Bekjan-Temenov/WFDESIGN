"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/shared/container"; 
import { Instagram, Youtube, ArrowRight } from "lucide-react";
import Image from "next/image";

const FOOTER_COLS = [
  {
    title: "COVER ART",
    links: [
      { name: "Premade Covers", href: "/premade" },
      { name: "Custom Covers", href: "/custom" },
      { name: "Featured Covers", href: "/featured" },
    ],
  },
  {
    title: "VIDEO",
    links: [
      { name: "Animations", href: "/animations" },
      { name: "Lyric Video", href: "/lyric-video" },
      { name: "Market CAP", href: "/market-cap" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
      { name: "Blog News", href: "/blog" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10 lg:pt-[80px] pb-[40px] border-t border-[#1A1A1A]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-10 lg:mb-[80px]">
          <div className="flex flex-col w-full lg:max-w-[400px]">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/img/logo 4.png"
                alt="logo"
                width={210}
                height={27}
                className="w-[180px] lg:w-[210px] h-auto"
              />
            </Link>

            <p className="text-[#9F9F9F] text-[14px] leading-[160%] mb-8">
              CoverArtPlace — professional music album covers and videos created
              by independent graphic designers for the music streaming age.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <SocialButton icon={<Instagram size={20} />} />
                <SocialButton icon={<Youtube size={20} />} />
              </div>

              <div className="flex h-[45px] w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-full pl-4 pr-2 bg-white text-black text-[14px] outline-none rounded-l-md w-full sm:w-[200px] placeholder:text-gray-400 focus:placeholder:text-gray-600 transition-all"
                />
                <button className="h-full bg-[#3F25FF] px-6 flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-wider whitespace-nowrap rounded-r-md hover:bg-opacity-90 transition-all">
                  Sign Up
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 lg:gap-20 w-full lg:w-auto">
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4 lg:gap-6">
                <h3 className="text-[#585858] text-[12px] font-bold uppercase tracking-widest">
                  {col.title}
                </h3>

                <div className="flex flex-col gap-3 lg:gap-4">
                  {col.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="font-semibold text-[14px] lg:text-[15px] hover:text-[#3F25FF] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#1A1A1A] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#585858] text-[13px]">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
          <p>© 2026 CoverArtPlace. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#9F9F9F] hover:bg-[#3F25FF] hover:text-white transition-all duration-300 active:scale-95">
    {icon}
  </button>
);
