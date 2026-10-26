export type ClientCountry = "chile" | "peru" | "mexico";

export const presentationClients: {
  id: string;
  name: string;
  country: ClientCountry;
  src: string;
}[] = [
  { id: "codelco", name: "Codelco", country: "chile", src: "/images/clients/codelco.png" },
  { id: "sierra-gorda", name: "Sierra Gorda SCM", country: "chile", src: "/images/clients/sierra-gorda.png" },
  { id: "bhp", name: "BHP", country: "chile", src: "/images/clients/bhp.png" },
  { id: "kinross", name: "Kinross", country: "chile", src: "/images/clients/kinross.png" },
  { id: "arauco", name: "Arauco", country: "chile", src: "/images/clients/arauco.png" },
  { id: "agrosuper", name: "Agrosuper", country: "chile", src: "/images/clients/agrosuper.png" },
  { id: "famae", name: "FAMAE", country: "chile", src: "/images/clients/famae.png" },
  { id: "finning", name: "Finning CAT", country: "chile", src: "/images/clients/finning.png" },
  { id: "ejercito", name: "Ejército de Chile", country: "chile", src: "/images/clients/ejercito.png" },
  { id: "armada", name: "Armada de Chile", country: "chile", src: "/images/clients/armada.png" },
  { id: "yanacocha", name: "Newmont Yanacocha", country: "peru", src: "/images/clients/newmont-yanacocha.png" },
  { id: "marcobre", name: "Marcobre", country: "peru", src: "/images/clients/marcobre.png" },
  { id: "minsur", name: "Minsur", country: "peru", src: "/images/clients/minsur.png" },
  { id: "antamina", name: "Antamina", country: "peru", src: "/images/clients/antamina.png" },
  { id: "equinox", name: "Equinox Gold", country: "mexico", src: "/images/clients/equinox-gold.png" },
  { id: "penasquito", name: "Newmont Peñasquito", country: "mexico", src: "/images/clients/newmont-penasquito.png" },
  { id: "first-majestic", name: "First Majestic", country: "mexico", src: "/images/clients/first-majestic.png" },
];

export const presentationCredentials: { id: string; src: string }[] = [
  { id: "amp-iam", src: "/images/credentials/asset-management-iam.png" },
  { id: "smrp", src: "/images/credentials/smrp-cmrp.png" },
  { id: "sap-hana", src: "/images/credentials/sap-hana.png" },
  { id: "lean", src: "/images/credentials/lean-institute.png" },
  { id: "pmm", src: "/images/credentials/pmm-iso-55001.png" },
];
