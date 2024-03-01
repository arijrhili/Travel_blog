"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../ui/TabBuuton";


interface TabDataItem {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA = [
    {
      title: "Statistiques de fréquentation :",
      id: "Statistiques de fréquentation :",
      content: (
        <ul className="list-disc pl-2">
          <li>(Commission Paritaire des Publications et Agences de Presse) : 0327 W 92646

Partenariats avec les sociétés savantes (SFD, SPILF, FFP, CNCF, CRI)</li>
        </ul>
      ),
    },
    {
      title: "Principes éditoriaux : ",
      id: "Principes éditoriaux :",
      content: (
        <ul className="list-disc pl-2">
          <li>Chaque édition propose une sélection d’informations d’actualité. La sélection de ces informations est faite par le rédacteur en chef avec l’aide d’un comité éditorial d’experts indépendants et de médecins journalistes professionnels. Les sujets proposés sont réalisés par les journalistes de la rédaction de Fréquence Médicale. Ils sont revus par le rédacteur en chef et diffusés sous la seule responsabilité de la rédaction et du responsable de la publication. Ils se conforment aux dispositions des lois du 29 juillet 1881 sur la liberté de la presse, du 1er août 1986 et du 30 septembre 1986.
Déclaration publique de conflit d'intérêts demandée à nos auteurs et nos experts.

Identification claire et transparente des espaces publicitaires en marge des articles scientifiques.</li>
        </ul>
      ),
    },
    {
      title: "Diffusion emailing :",
      id: "Diffusion emailing :",
      content: (
        <ul className="list-disc pl-2">
          <li>des campagnes e-mailings sont réservées aux médecins concernés membre à chaque édition. Les campagnes contiennent des liens d’accès aux différentes informations dont le comité éditorial aura jugé de l’envoi.</li>
        </ul>
      ),
    },
  ];
const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black py-8"  >
      <div className=" items-center mx-24 py-10 px-4  sm:py-12 xl:px-16">
        <div className="mt-4  md:mt-0 md:mb-4  ">
          <h2 className="text-6xl font-bold text-black text-center">Qui Sommes Nous ?</h2>
          <p className="text-base lg:text-lg text-center py-10">
 
Directeur de la publication :  Dr Jérôme Bargé<br></br>

Directeur de la rédaction :  Dr Jean-Paul Marre <br></br>

Rédacteurs en chef : le Pr Gilles Montalescot (cardiologie), le Pr Brigitte Dréno & le Dr Barouyr Baroudjian (dermatologie & onco-dermatologie), le Pr Patrice Darmon & le Dr Louis Potier (diabétologie),  le Pr Mohamad Mohty (Hématologie), le Pr Jérôme de Sèze (Neurologie), le Pr Jean-Baptiste Bachet (onco-digestif), le Pr Gilles Freyer (onco-sein & ovaire), le Pr Nicolas Girard (onco-thoracique), le Dr Olivier le Rouzic (pneumologie), le Pr Amine Benyamina (psy-addictologie), le Pr Jean Sibilia (rhumatologie).<br></br>

Journalistes Médicaux : le Dr Clothide Bonnet, Juliette de Noiron (PhD), Mathilde Debry, le Dr Claire Lewandowski, le Dr Jean-Paul Marre, le Dr Caroline Pombourcq<br></br>

Directrice Commerciale : Peggy Berardi

Webmaster - Responsable technique : Benicio Ferreira

Assistante : Kateline Renaudin
          </p>
          <div className="flex flex-row justify-center gap-10 text-center ">
            
            <TabButton
              selectTab={() => handleTabChange("Principes éditoriaux :")}
              active={tab === "Principes éditoriaux :"}
            >
              {" "}
              Principes éditoriaux :{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Diffusion emailing :")}
              active={tab === "Diffusion emailing :"}
            >
              {" "}
              Diffusion emailing :{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Statistiques de fréquentation :")}
              active={tab === "Statistiques de fréquentation :"}
            >
              {" "}
              Statistiques de fréquentation :{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
