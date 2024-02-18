"use client";
import Link from "next/link";
import Route from "../ui/Route";
import MobileMenu from "./MobileMenu";
import useMenuActive from "@/hooks/useMenuActive";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface NavbarSectionProps {}

const NavbarSection: React.FC<NavbarSectionProps> = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "py-4 w-full",
        isScrolling
          ? "fixed top-0 bg-gray-100  shadow-lg z-10"
          : "relative"
      )}
    >
      <div
        className={clsx(
          "w-[95%] mx-auto  flex items-center justify-between border-b border-slate-700",
          isScrolling && "pb-0 border-none",
          !isScrolling && "pb-5"
        )}
      >


        {/* Medical Specialties Menu */}
        <ul className=" flex items-center justify-center gap-16 flex-2 max-md:hidden">
          <li><Link href="/specialty/CARDIOLOGIE">CARDIOLOGIE</Link></li>
          <li><Link href="/specialty/DERMATOLOGIE">DERMATOLOGIE</Link></li>
          <li><Link href="/specialty/DIABÉTOLOGIE">DIABÉTOLOGIE</Link></li>
          <li><Link href="/specialty/GÉRIATRIE">GÉRIATRIE</Link></li>
          <li><Link href="/specialty/HÉMATOLOGIE">HÉMATOLOGIE</Link></li>
          <li><Link href="/specialty/MÉDECINE-GÉNÉRALE">MÉDECINE GÉNÉRALE</Link></li>
          <li><Link href="/specialty/NEUROLOGIE">NEUROLOGIE</Link></li>
          <li><Link href="/specialty/ONCOLOGIE">ONCOLOGIE</Link></li>
          <li><Link href="/specialty/PNEUMOLOGIE">PNEUMOLOGIE</Link></li>
          <li><Link href="/specialty/PSYCHIATRIE">PSYCHIATRIE</Link></li>
          <li><Link href="/specialty/RHUMATOLOGIE">RHUMATOLOGIE</Link></li>
          <li><Link href="/specialty/UROLOGIE">UROLOGIE</Link></li>
          <li><Link href="/specialty/UROLOGIE">GYNÉCO-OBSTÉTRIQUE</Link></li>
          <li><Link href="/specialty/UROLOGIE">HÉPATO-GASTRO-ENTÉROLOGIE</Link></li>

        </ul>

       

        <div>
        
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
