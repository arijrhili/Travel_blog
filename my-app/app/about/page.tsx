import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/about.jpg"
          fill
          alt="about image"
          className="object-cover"
        />
        <h1 className="flex absolute w-full h-full justify-left items-center text-4xl font-extrabold uppercase text-blue-900">
          About Us
        </h1>
      </div>

      <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p>
          
Directeur de la publication :  Dr Jérôme Bargé

Directeur de la rédaction :  Dr Jean-Paul Marre

Rédacteurs en chef : le Pr Gilles Montalescot (cardiologie), le Pr Brigitte Dréno & le Dr Barouyr Baroudjian (dermatologie & onco-dermatologie), le Pr Patrice Darmon & le Dr Louis Potier (diabétologie),  le Pr Mohamad Mohty (Hématologie), le Pr Jérôme de Sèze (Neurologie), le Pr Jean-Baptiste Bachet (onco-digestif), le Pr Gilles Freyer (onco-sein & ovaire), le Pr Nicolas Girard (onco-thoracique), le Dr Olivier le Rouzic (pneumologie), le Pr Amine Benyamina (psy-addictologie), le Pr Jean Sibilia (rhumatologie).

Journalistes Médicaux : le Dr Clothide Bonnet, Juliette de Noiron (PhD), Mathilde Debry, le Dr Claire Lewandowski, le Dr Jean-Paul Marre, le Dr Caroline Pombourcq

Directrice Commerciale : Peggy Berardi

Webmaster - Responsable technique : Benicio Ferreira

Assistante : Kateline Renaudin

Pionnier tant de l’Internet médical que de la radio et de la vidéo médicale, frequencemedicale.com s’adresse quotidiennement à plus de 60 000 professionnels de santé, en leur proposant une actualité médicale vidéo et écrite, sélectionnée et publiée sous la responsabilité de la Rédaction (experts, médecins journalistes et journalistes spécialisés santé).

Fréquence Médicale a pour objet la réalisation et la diffusion d’une actualité santé quotidienne destinée au corps médical. L’édition propose aux médecins des débats, des reportages, des interviews et des articles, réalisés par des médecins journalistes. L’ensemble des informations communiquées est diffusé dans le respect des termes de la loi du 21 juin 2004 pour la confiance dans l’économie numérique.

Fréquence médicale répond aux critères d’exigence de la presse médicale :

Accréditation par la CPPAP (Commission Paritaire des Publications et Agences de Presse) : 0327 W 92646

Partenariats avec les sociétés savantes (SFD, SPILF, FFP, CNCF, CRI)


Principes éditoriaux : Chaque édition propose une sélection d’informations d’actualité. La sélection de ces informations est faite par le rédacteur en chef avec l’aide d’un comité éditorial d’experts indépendants et de médecins journalistes professionnels. Les sujets proposés sont réalisés par les journalistes de la rédaction de Fréquence Médicale. Ils sont revus par le rédacteur en chef et diffusés sous la seule responsabilité de la rédaction et du responsable de la publication. Ils se conforment aux dispositions des lois du 29 juillet 1881 sur la liberté de la presse, du 1er août 1986 et du 30 septembre 1986.
Déclaration publique de conflit d'intérêts demandée à nos auteurs et nos experts.

Identification claire et transparente des espaces publicitaires en marge des articles scientifiques.

Engagement éditorial : L’édition d’informations en ligne réalisée par les médecins journalistes obéit aux mêmes règles légales que l’édition traditionnelle. L’ensemble du contenu du journal Fréquence Médicale est donc régi par la Loi qui confère à l’auditeur et au lecteur divers droits et devoirs. L’éditeur du site s’engage à respecter les règles éditoriales en vigueur :  -    Disposer du droit de diffuser le contenu proposé. -    Faire tout son possible pour vérifier la validation des informations portées à la connaissance du public. -    Respecter les règles de déontologie journalistique en vigueur. -    Informer le lecteur de la nature éditoriale des contenus proposés. -    Autoriser le lecteur à conserver tout ou partie du contenu proposé sur le site pour son usage strictement personnel. -    Respecter les recommandations édictées par l’ANSM.

Diffusion emailing : des campagnes e-mailings sont réservées aux médecins concernés membre à chaque édition. Les campagnes contiennent des liens d’accès aux différentes informations dont le comité éditorial aura jugé de l’envoi.

Statistiques de fréquentation :
L’audience de frequencemedicale.com est assurée par AT Internet.
        </p>

        <div className="w-full items-center flex justify-center">
        <h1 className="text-3xl font-extrabold text-gray-600">
              <span className="text-2xl mr-2 uppercase">fréquence</span>
              <span className="text-blue-900 uppercase">médicale</span>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
