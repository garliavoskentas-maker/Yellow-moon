// Yellow Moon meniu duomenys.

export type MenuTag = "Aštri" | "Naujiena";

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;
  tags?: MenuTag[];
}

export interface SauceItem {
  id: string;
  name: string;
  price: string;
  ingredients: string;
}

export interface AddonItem {
  id: string;
  name: string;
  price: string;
}

export const pizzaNote = "32 cm · Visos picos – 11 €";

export const pizzas: MenuItem[] = [
  {
    id: "margarita",
    name: "MARGARITA",
    ingredients: "Pomidorų padažas, mocarela sūris, vyšniniai pomidorai, bazilikas.",
  },
  {
    id: "vesuvijo",
    name: "VESUVIJO",
    ingredients: "Pomidorų padažas, mocarela sūris, kumpis.",
  },
  {
    id: "capricciosa",
    name: "CAPRICCIOSA",
    ingredients: "Pomidorų padažas, mocarela sūris, kumpis, pievagrybiai.",
  },
  {
    id: "peperoni",
    name: "PEPERONI",
    ingredients: "Pomidorų padažas, mocarela sūris, peperoni dešra.",
  },
  {
    id: "chorizo",
    name: "CHORIZO",
    ingredients:
      "Pomidorų padažas, mocarela sūris, chorizo dešra, alyvuogės, paprika, rukola.",
  },
  {
    id: "havaju",
    name: "HAVAJŲ",
    ingredients: "Pomidorų padažas, mocarela sūris, kumpis, švieži ananasai.",
  },
  {
    id: "bbq-vistiena",
    name: "BBQ VIŠTIENA",
    ingredients:
      "Pomidorų padažas, mocarela sūris, vištiena, raudonieji svogūnai, BBQ padažas.",
  },
  {
    id: "kaimiska",
    name: "KAIMIŠKA",
    ingredients:
      "Pomidorų padažas, mocarela sūris, šoninė, marinuoti agurkai, alyvuogės, raudonieji svogūnai, česnakinis alyvuogių aliejus.",
  },
  {
    id: "kelmuciu",
    name: "KELMUČIŲ",
    ingredients:
      "Pomidorų padažas, mocarela sūris, šoninė, raudonieji svogūnai, garstyčių–medaus padažas.",
  },
  {
    id: "artisoku",
    name: "ARTIŠOKŲ",
    ingredients:
      "Mocarela sūris, kreminis sūris, chorizo dešra, artišokai, špinatai, česnakinis alyvuogių aliejus.",
  },
  {
    id: "astrioji",
    name: "AŠTRIOJI",
    ingredients:
      "Pomidorų padažas, mocarela sūris, vytinto saliamio dešra, alyvuogės, jalapenai, raudonieji svogūnai, Piri-Piri padažas.",
    tags: ["Aštri"],
  },
  {
    id: "melynasis-sonine",
    name: "SU MĖLYNUOJU PELĖSINIU SŪRIU IR ŠONINE",
    ingredients:
      "Pomidorų padažas, mocarela sūris, mėlynasis pelėsinis sūris, šoninė, vyšniniai pomidorai, bazilikas.",
  },
  {
    id: "ozkos-suris",
    name: "OŽKOS SŪRIO IR KARAMELIZUOTŲ SVOGŪNŲ",
    ingredients:
      "Pomidorų padažas, mocarela sūris, ožkos sūris, karamelizuoti svogūnai, rozmarinas.",
  },
  {
    id: "figa",
    name: "FIGA",
    ingredients:
      "Pomidorų padažas, mocarela sūris, Brie sūris, pancetta šoninė, figų padažas, čiobreliai.",
  },
  {
    id: "nduja",
    name: "N’DUJA",
    ingredients:
      "Pomidorų padažas, mocarela sūris, N’Duje dešra, parmezanas, petražolės.",
    tags: ["Aštri"],
  },
  {
    id: "tuno",
    name: "TUNO",
    ingredients:
      "Pomidorų padažas, mocarela sūris, tunas, raudonieji svogūnai, kukurūzai, čiobreliai.",
  },
  {
    id: "anciuviu",
    name: "ANČIUVIŲ",
    ingredients: "Mocarela sūris, ančiuviai, kaparėliai, citrina, krapai.",
  },
  {
    id: "pesto-mortadella",
    name: "PESTO MORTADELLA",
    ingredients:
      "Grietinėlės pagrindo padažas, mocarela sūris, bazilikų pesto sūris, mortadella dešra, juodieji pipirai.",
    tags: ["Naujiena"],
  },
];

export const sauces: SauceItem[] = [
  {
    id: "cesnakinis",
    name: "ČESNAKINIS",
    price: "1,50 €",
    ingredients: "Majonezas, kefyras, česnakas, bazilikas.",
  },
  {
    id: "pikantiskas",
    name: "PIKANTIŠKAS",
    price: "1,50 €",
    ingredients: "Majonezas, kefyras, raudonėlis, bazilikas.",
  },
];

export const addons: AddonItem[] = [
  { id: "mesa", name: "Mėsa", price: "+2 €" },
  { id: "suris", name: "Sūris", price: "+2 €" },
  { id: "darzoves", name: "Daržovės", price: "+1 €" },
  { id: "du-skoniai", name: "Dviejų skonių pica", price: "+1 €" },
];

export const menuFooterNote =
  "Visos mūsų picos kepamos iš ilgai brandintos kvietinės tešlos ir tikroje malkinėje krosnyje!";
