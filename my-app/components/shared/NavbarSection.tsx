"use client";
import Link from "next/link";


interface NavbarSectionProps {}

const NavbarSection: React.FC<NavbarSectionProps> = () => {

  
  return (
    <nav
      className=
        "py-4 w-full"
    >
      <div
        className=
          "w-[95%] mx-auto  flex items-center justify-between border-b border-slate-700">


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
