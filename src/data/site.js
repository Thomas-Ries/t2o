// Données du site T2O Bâtiment — tout le contenu éditorial vit ici.

export const CONTACT = {
  phone: "06 27 37 06 51",
  telHref: "tel:+33627370651",
  email: "t2obatiment@gmail.com",
  mailHref: "mailto:t2obatiment@gmail.com",
  zone: "Alsace",
  horaires: "Lun – Ven : 8h – 18h",
  adresse: "18 rue du Falkenstein, 67220 Saint-Pierre-Bois",
  siret: "SIREN 887 960 318",
  gerant: "Christophe Niederberger",
};

// Photos d'illustration Unsplash (gratuites, MVP). À remplacer par de vraies
// photos de chantiers quand elles seront disponibles.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const SPECS = [
  {
    slug: "platerie",
    title: "Plâtrerie",
    badge: "Cloisons & plafonds",
    lead: "Cloisons, doublages, faux plafonds et rénovation de vos murs et plafonds, avec un rendu impeccable prêt à peindre.",
    photo: u("1581093458791-9f3fe6f0e8b4"),
    items: [
      ["Cloisons & doublages", "Cloisons en plaques de plâtre, doublages isolants, cloisons phoniques."],
      ["Faux plafonds", "Plafonds démontables, spots encastrés, caissons lumineux."],
      ["Rénovation de murs", "Reprise des fissures, enduits, préparation des supports."],
      ["Dressing & rangements", "Niches, bibliothèques intégrées, sur-mesure."],
    ],
    gallery: [u("1581093458791-9f3fe6f0e8b4"), u("1581094794329-c8112a89af12", 900), u("1503387762-592deb58ef4e", 900)],
  },
  {
    slug: "sanitaire",
    title: "Sanitaire",
    badge: "Plomberie & salle de bain",
    lead: "Installation et rénovation de salles de bain, WC, cuisines : plomberie complète, robinetterie et mise aux normes.",
    photo: u("1556909212-d5b60b7b071a"),
    items: [
      ["Salle de bain complète", "De la dépose à la pose finitions, coordination de tous les corps de métier."],
      ["Plomberie", "Alimentation, évacuation, remplacement de tuyauteries."],
      ["WC & robinetterie", "Pose de WC suspendus, mitigeurs, douches et baignoires."],
      ["Mise aux normes", "Conformité électrique et sanitaire des pièces humides."],
    ],
    gallery: [u("1556909212-d5b60b7b071a"), u("1620641788421-7a1c342ea42e", 900), u("1567016432779-094069422307", 900)],
  },
  {
    slug: "electricite",
    title: "Électricité",
    badge: "Installation & rénovation",
    lead: "Installations électriques neuves ou en rénovation : tableaux, circuits, éclairage et mise aux normes NF C 15-100.",
    photo: u("1581092160562-40aa08e78837"),
    items: [
      ["Tableaux électriques", "Remplacement et refonte complète du tableau, disjoncteurs."],
      ["Circuits & prises", "Création de circuits, prises et interrupteurs, home wiring."],
      ["Éclairage", "Spots, réglettes, éclairage LED, commande domotique simple."],
      ["Mise aux normes", "Diagnostic et mise en conformité NF C 15-100."],
    ],
    gallery: [u("1581092160562-40aa08e78837"), u("1621905251189-08b45d6a269e", 900), u("1503387762-592deb58ef4e", 900)],
  },
  {
    slug: "isolation",
    title: "Isolation",
    badge: "Confort & énergie",
    lead: "Isolation thermique et phonique des murs, combles et planchers pour réduire vos factures et gagner en confort.",
    photo: u("1584266585671-38a5a8d4aa52"),
    items: [
      ["Isolation des murs", "Doublage isolant sous placo, isolation thermique par l'intérieur."],
      ["Combles & rampants", "Soufflage, panneaux, isolation des combles perdus ou aménagés."],
      ["Isolation phonique", "Cloisons acoustiques, sols flottants, traitement des bruits."],
      ["Aides & diagnostics", "Accompagnement pour les aides à la rénovation énergétique."],
    ],
    gallery: [u("1584266585671-38a5a8d4aa52"), u("1504302646594-30c516bc48a9", 900), u("1503387762-592deb58ef4e", 900)],
  },
  {
    slug: "carrelage",
    title: "Carrelage",
    badge: "Sols & murs",
    lead: "Pose de carrelage sols et murs, faïence, tomette et grandes formats : joints soignés et surfaces parfaitement planes.",
    photo: u("1595197512996-3629c4a9dd6e"),
    items: [
      ["Sols", "Carrelage intérieur, préparation des chapes, joints et finitions."],
      ["Murs & faïence", "Crédences de cuisine, salles de bain, murs de douche."],
      ["Grandes formats", "Porcelaine grand format, pose collée ou scellée."],
      ["Tomette & pierre", "Pose traditionnelle, tomettes, pierres naturelles."],
    ],
    gallery: [u("1595197512996-3629c4a9dd6e"), u("1560185007-cde436f6a4d0", 900), u("1620641788421-7a1c342ea42e", 900)],
  },
  {
    slug: "peinture",
    title: "Peinture",
    badge: "Finitions & décoration",
    lead: "Peinture intérieure, enduits décoratifs et finitions soignées : l'habit neuf sans les désagréments d'un chantier.",
    photo: u("1562259949-e8e058e1d84e"),
    items: [
      ["Peinture intérieure", "Murs, plafonds, boiseries, glycéro et acrylique."],
      ["Enduits décoratifs", "Crépis, béton ciré, enduits à la chaux."],
      ["Papiers peints", "Pose de revêtements muraux, intissés."],
      ["Préparation des supports", "Ponçage, rebouchage, sous-couches adaptées."],
    ],
    gallery: [u("1562259949-e8e058e1d84e"), u("1541888946425-d81bb19240f1", 900), u("1589939705954-38808f270f8b", 900)],
  },
];

export const specBySlug = (slug) => SPECS.find((s) => s.slug === slug);

export const TESTIMONIALS = [
  ["Isabelle D.", "Saint-Pierre-Bois", "Rénovation complète de notre salle de bain : chantier propre, délais respectés et un rendu magnifique. On recommande les yeux fermés."],
  ["Marc et Sylvie R.", "Sélestat", "Cloison, électricité et peinture pour l'aménagement de nos combles : un seul interlocuteur du début à la fin, très rassurant."],
  ["Jean-Luc M.", "Villé", "Carrelage et faïence posés avec un soin remarquable. Expérience et conseil au top, comme promis au téléphone."],
];

export const FAQ = [
  ["Sur quelle zone intervenez-vous ?", "Nous intervenons dans toute l'Alsace (Bas-Rhin et Haut-Rhin), depuis notre atelier de Saint-Pierre-Bois, dans la vallée de Villé."],
  ["Comment se passe une prise de contact ?", "Vous décrivez votre projet via le formulaire ou vous nous appelez. Nous échangeons sur votre besoin, puis nous planifions une visite sur place avant toute intervention."],
  ["Gérez-vous plusieurs spécialités sur un même chantier ?", "Oui, c'est notre cœur de métier : plâtrerie, sanitaire, électricité, isolation, carrelage et peinture sont coordonnés par un interlocuteur unique — pas besoin de multiplier les artisans."],
  ["Quels sont vos délais d'intervention ?", "Cela dépend du chantier et de la saison. Nous vous indiquons un délai réaliste dès la visite technique, et nous le tenons."],
  ["Êtes-vous assuré ?", "Oui : T2O Bâtiment est assuré en responsabilité civile et garantie décennale, et toutes nos réalisations sont couvertes."],
  ["Faites-vous de la petite rénovation ou seulement des gros chantiers ?", "Les deux ! D'une simple pose de carrelage à une rénovation complète de logement, chaque chantier reçoit la même attention."],
];

export const STATS = [
  [30, " ans", "d'expérience du gérant"],
  [5, "+", "ans d'entreprise (2020)"],
  [6, "", "corps de métier"],
];
