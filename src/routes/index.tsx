import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { Order, Locations } from "@/components/site/Locations";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yellow Moon picerija | Malkinėje krosnyje keptos picos" },
      {
        name: "description",
        content:
          "Yellow Moon – malkinėje krosnyje keptos picos Ringauduose ir Domeikavoje. Užsisakykite per Bolt Food, Wolt arba telefonu.",
      },
      { property: "og:title", content: "Yellow Moon picerija | Malkinėje krosnyje keptos picos" },
      {
        property: "og:description",
        content:
          "Malkinėje krosnyje keptos picos Ringauduose ir Domeikavoje. Užsisakykite per Bolt Food, Wolt arba telefonu.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Yellow Moon",
          servesCuisine: "Pizza",
          priceRange: "€€",
          description:
            "Malkinėje krosnyje keptos picos Ringauduose ir Domeikavoje.",
          location: [
            {
              "@type": "Restaurant",
              name: "Yellow Moon Ringaudai",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saulės tak. 1",
                addressLocality: "Ringaudai",
                postalCode: "53348",
                addressCountry: "LT",
              },
              telephone: "+37066997676",
              openingHours: "Mo-Su 11:00-21:00",
            },
            {
              "@type": "Restaurant",
              name: "Yellow Moon Domeikava",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vandžiogalos pl. 106N",
                addressLocality: "Domeikava",
                postalCode: "54340",
                addressCountry: "LT",
              },
              telephone: "+37069905057",
              openingHours: "Mo-Su 11:00-21:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Menu />
        <Gallery />
        <Order />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}
