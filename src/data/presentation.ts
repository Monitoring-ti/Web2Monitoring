export type ClientCountry = "chile" | "peru" | "mexico";

export const presentationClients: {
  id: string;
  name: string;
  country: ClientCountry;
  src: string;
}[] = [
  { id: "codelco", name: "Codelco", country: "chile", src: "/images/clients/codelco.webp" },
  { id: "sierra-gorda", name: "Sierra Gorda SCM", country: "chile", src: "/images/clients/sierra-gorda.webp" },
  { id: "bhp", name: "BHP", country: "chile", src: "/images/clients/bhp.webp" },
  { id: "kinross", name: "Kinross", country: "chile", src: "/images/clients/kinross.webp" },
  { id: "arauco", name: "Arauco", country: "chile", src: "/images/clients/arauco.webp" },
  { id: "agrosuper", name: "Agrosuper", country: "chile", src: "/images/clients/agrosuper.webp" },
  { id: "famae", name: "FAMAE", country: "chile", src: "/images/clients/famae.webp" },
  { id: "finning", name: "Finning CAT", country: "chile", src: "/images/clients/finning.webp" },
  { id: "ejercito", name: "Ejército de Chile", country: "chile", src: "/images/clients/ejercito.webp" },
  { id: "armada", name: "Armada de Chile", country: "chile", src: "/images/clients/armada.webp" },
  { id: "yanacocha", name: "Newmont Yanacocha", country: "peru", src: "/images/clients/newmont-yanacocha.webp" },
  { id: "marcobre", name: "Marcobre", country: "peru", src: "/images/clients/marcobre.webp" },
  { id: "minsur", name: "Minsur", country: "peru", src: "/images/clients/minsur.webp" },
  { id: "antamina", name: "Antamina", country: "peru", src: "/images/clients/antamina.webp" },
  { id: "equinox", name: "Equinox Gold", country: "mexico", src: "/images/clients/equinox-gold.webp" },
  { id: "penasquito", name: "Newmont Peñasquito", country: "mexico", src: "/images/clients/newmont-penasquito.webp" },
  { id: "first-majestic", name: "First Majestic", country: "mexico", src: "/images/clients/first-majestic.webp" },
];

export const presentationCredentials: { id: string; src: string }[] = [
  { id: "amp-iam", src: "/images/credentials/asset-management-iam.webp" },
  { id: "smrp", src: "/images/credentials/smrp-cmrp.webp" },
  { id: "sap-hana", src: "/images/credentials/sap-hana.webp" },
  { id: "lean", src: "/images/credentials/lean-institute.webp" },
  { id: "pmm", src: "/images/credentials/pmm-iso-55001.webp" },
];
