import React from "react";
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
    slug: string;
  }>;
};

export default function InfertilityIssues({ params }: InfertilityIssuesProps) {
  // ✅ Unwrap params Promise using React.use()
  const { slug } = React.use(params);

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
