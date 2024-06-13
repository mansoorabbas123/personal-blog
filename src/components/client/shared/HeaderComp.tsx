"use client";
import React from "react";
import HeaderStyle from "./HeaderComp.module.css";
import { Chrome, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const HeaderComp = () => {
  const url = usePathname();
  return (
    <header>
      <div className={HeaderStyle.container}>
        <Link href="/">
          <Chrome color="rgb(43 162 131)" strokeWidth={2} size={50} />
        </Link>
        <nav>
          <ul className={HeaderStyle.navLinks}>
            <li
              className={cn(
                url === "/" ? HeaderStyle.selectedRoute : "", HeaderStyle.navLinksItem
              )}
            >
              Home
            </li>
            <li
              className={cn(
                url === "/about" ? HeaderStyle.selectedRoute : "", HeaderStyle.navLinksItem
              )}
            >
              About
            </li>
            <li
              className={cn(
                url === "/contact" ? HeaderStyle.selectedRoute : "", HeaderStyle.navLinksItem
              )}
            >
              Contact
            </li>
            <li
              className={cn(
                url === "/pages" ? HeaderStyle.selectedRoute : "", HeaderStyle.navLinksItem, HeaderStyle.dropDownMenu
              )}

            > Pages
              <div>
                <ul className={HeaderStyle.dropDownOptions}>
                  <li className={HeaderStyle.dropDownItem}>
                    <Link href='/categories' className={HeaderStyle.dropDownItemLink}>Categories</Link>
                  </li>
                  <li className={HeaderStyle.dropDownItem}>
                    <Link href='/categories' className={HeaderStyle.dropDownItemLink}>Page2</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <form>
          <div className={HeaderStyle.search}>
            <Search
              className={HeaderStyle.searchIcon}
              color="#fff"
              strokeWidth="2"
            />
          </div>
        </form>
        {/* <a href="">
          avatar 
          <img src="" alt="" />
        </a> */}
      </div>
    </header>
  );
};
