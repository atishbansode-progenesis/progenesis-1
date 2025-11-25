import ClientHome from "@/components/Home/ClientHome";

export const metadata = {
  title: "Best IVF Center in India | High Success Rate | Progenesis IVF",
  description:
    "Progenesis IVF is India's leading fertility & IVF center offering world-class infertility treatments with high success rates.",
  alternates: {
    canonical: "https://progenesisivf.com/",
  },
    openGraph: {
    title: "Best IVF Center in India | Progenesis IVF",
    description:
      "World-class IVF, ICSI, IUI, fertility preservation & advanced infertility treatment with high success rates.",
    url: "https://progenesisivf.com/",
    images: [
      {
        url: "https://progenesisivf.com/logo1.png",
        width: 800,
        height: 600,
        alt: "Progenesis IVF Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IVF Center in India | Progenesis IVF",
    description:
      "World-class IVF, ICSI, IUI, fertility preservation & advanced infertility treatment with high success rates.",
    images: ["https://progenesisivf.com/logo1.png"],
  },
};

export default function Home() {
  return <ClientHome />;
}