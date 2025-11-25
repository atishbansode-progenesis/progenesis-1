import React from "react";
import { Metadata } from "next";
import {
  repeatedIUIFailuresData,
  pregnancyAfterMenopauseData,
  repeatedIVFFailuresData,
  lowAMHData,
  polycysticOvarianSyndromeData,
  tubalBlockageData,
  azoospermiaData,
  lowSpermCountData,
  uterineFibroidsData,
  endometriosisData,
  erectileDysfunctionData,
} from "@/components/data/infertilityissues";
import MainInfertility from "@/page-components/infertility-slug/MainInfertility";

type InfertilityIssuesProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

// Function to get metadata based on slug
function getInfertilityMetadata(slug: string): { title: string; description: string } | null {
  const metadataMap: Record<string, { title: string; description: string }> = {
    "repeated-iui-failures": {
      title: "Repeated IUI Failures | Causes & Solutions | Progenesis IVF",
      description: "Experiencing repeated IUI failures? Learn about the causes and advanced solutions available at Progenesis IVF to help you achieve successful pregnancy."
    },
    "pregnancy-after-menopause": {
      title: "Pregnancy After Menopause | IVF Treatment | Progenesis IVF",
      description: "Discover how Progenesis IVF helps women achieve pregnancy after menopause using advanced reproductive technologies and donor egg procedures."
    },
    "repeated-ivf-failures": {
      title: "Repeated IVF Failures | Causes & Treatment | Progenesis IVF",
      description: "Understanding repeated IVF failures and exploring advanced treatment options at Progenesis IVF to improve your chances of successful pregnancy."
    },
    "low-amh": {
      title: "Low AMH Treatment | Diminished Ovarian Reserve | Progenesis IVF",
      description: "Low AMH levels indicate diminished ovarian reserve. Learn about treatment options and fertility preservation at Progenesis IVF center."
    },
    "pcos": {
      title: "PCOS Treatment | Polycystic Ovary Syndrome | Progenesis IVF",
      description: "Effective PCOS treatment solutions at Progenesis IVF. Learn how we help women with PCOS achieve successful pregnancy through personalized care."
    },
    "tubal-blockage": {
      title: "Tubal Blockage Treatment | Fallopian Tube Issues | Progenesis IVF",
      description: "Advanced treatment for tubal blockage and fallopian tube issues. Progenesis IVF offers comprehensive solutions for female infertility causes."
    },
    "azoospermia": {
      title: "Azoospermia Treatment | Male Infertility | Progenesis IVF",
      description: "Complete azoospermia treatment solutions at Progenesis IVF. Advanced techniques to help men with zero sperm count achieve fatherhood."
    },
    "low-sperm-count": {
      title: "Low Sperm Count Treatment | Oligospermia | Progenesis IVF",
      description: "Treatment for low sperm count (oligospermia) at Progenesis IVF. Comprehensive male infertility solutions to improve fertility and conception chances."
    },
    "fibroids": {
      title: "Uterine Fibroids & Fertility | Treatment | Progenesis IVF",
      description: "How uterine fibroids affect fertility and available treatment options. Progenesis IVF provides comprehensive care for fibroid-related infertility."
    },
    "endometriosis": {
      title: "Endometriosis & Infertility | Treatment | Progenesis IVF",
      description: "Understanding endometriosis and its impact on fertility. Advanced treatment options at Progenesis IVF for endometriosis-related infertility."
    },
    "erectile-dysfunction": {
      title: "Erectile Dysfunction & Fertility | Treatment | Progenesis IVF",
      description: "How erectile dysfunction affects male fertility and available treatment solutions. Progenesis IVF offers comprehensive male infertility care."
    }
  };

  return metadataMap[slug] || null;
}

export async function generateMetadata({ params }: InfertilityIssuesProps): Promise<Metadata> {
  const { category, slug } = await params;
  const metadata = getInfertilityMetadata(slug);

  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com"}/infertility/${category}/${slug}`,
      },
    };
  }

  return {
    title: "Infertility Issues | Causes & Treatment | Progenesis IVF",
    description: "Learn about various infertility issues, their causes, and advanced treatment solutions at Progenesis IVF center.",
  };
}


export default function InfertilityIssues({ params }: InfertilityIssuesProps) {
  // ✅ Unwrap params Promise using React.use()
  const { category, slug } = React.use(params);

  let data;

  switch (slug) {
    case "repeated-iui-failures":
      data = repeatedIUIFailuresData;
      break;
    case "pregnancy-after-menopause":
      data = pregnancyAfterMenopauseData;
      break;
    case "repeated-ivf-failures":
      data = repeatedIVFFailuresData;
      break;
    case "low-amh":
      data = lowAMHData;
      break;
    case "pcos":
      data = polycysticOvarianSyndromeData;
      break;
    case "tubal-blockage":
      data = tubalBlockageData;
      break;
    case "azoospermia":
      data = azoospermiaData;
      break;
    case "low-sperm-count":
      data = lowSpermCountData;
      break;
    case "fibroids":
      data = uterineFibroidsData;
      break;
    case "endometriosis":
      data = endometriosisData;
      break;
    case "erectile-dysfunction":
      data = erectileDysfunctionData;
      break;
    default:
      data = null;
  }

  if (!data) {
    return <div className="p-6 text-red-600">Page not found for slug: {slug}</div>;
  }

  return <MainInfertility data={data} />;
}