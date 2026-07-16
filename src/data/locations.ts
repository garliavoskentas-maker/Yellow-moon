export interface Location {
  id: "ringaudai" | "domeikava";
  name: string;
  shortName: string;
  address: string;
  phoneDisplay: string;
  phoneLink: string;
  hours: string;
  bolt: string;
  wolt: string;
  maps: string;
  mapEmbed: string;
}

export const locations: Location[] = [
  {
    id: "ringaudai",
    name: "Yellow Moon Ringaudai",
    shortName: "Ringaudai",
    address: "Saulės tak. 1, Ringaudai, 53348 Kauno r. sav.",
    phoneDisplay: "+370 669 97676",
    phoneLink: "tel:+37066997676",
    hours: "I–VII 11:00–21:00",
    bolt: "https://food.bolt.eu/en/13-kaunas/p/198811-yellow-moon-picerija-saules-tak-str/",
    wolt: "https://wolt.com/lt/ltu/kaunas/restaurant/yellow-moon-picerija-ringaudai",
    maps: "https://www.google.com/maps/place/Yellow+Moon+picerija/@54.8913895,23.8027445,17z/data=!3m1!4b1!4m6!3m5!1s0x46e7213adedc1653:0xc5a8c84e2f165a64!8m2!3d54.8913864!4d23.8053194!16s%2Fg%2F11v14gmlvf?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",
    mapEmbed:
      "https://www.google.com/maps?q=Yellow+Moon+picerija+Saul%C4%97s+tak.+1+Ringaudai&output=embed",
  },
  {
    id: "domeikava",
    name: "Yellow Moon Domeikava",
    shortName: "Domeikava",
    address: "Vandžiogalos pl. 106N, 54340 Domeikava, Kauno r. sav.",
    phoneDisplay: "+370 699 05057",
    phoneLink: "tel:+37069905057",
    hours: "I–VII 11:00–21:00",
    bolt: "https://food.bolt.eu/lt-lt/13-kaunas/p/198813-yellow-moon-picerija-domeikava-vandziogalos-pl-g/",
    wolt: "https://wolt.com/lt/ltu/kaunas/restaurant/yellow-moon-picerija-domeikava",
    maps: "https://www.google.com/maps/place/Yellow+Moon+picerija/@54.9549155,23.8965433,17z/data=!3m1!4b1!4m6!3m5!1s0x46e71f0071dc74b3:0x7a5e2fdc930460c3!8m2!3d54.9549124!4d23.8991182!16s%2Fg%2F11x83j42_l?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",
    mapEmbed:
      "https://www.google.com/maps?q=Yellow+Moon+picerija+Vand%C5%BEiogalos+pl.+106N+Domeikava&ll=54.9549124,23.8991182&z=17&output=embed",
  },
];

export const socials = {
  facebook: "https://www.facebook.com/profile.php?id=100093403130532&locale=lt_LT",
  instagram: "https://www.instagram.com/yellowmoon_picerija/",
};
