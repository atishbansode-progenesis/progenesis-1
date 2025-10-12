import { repeatedIUIFailuresData, pregnancyAfterMenopauseData, repeatedIVFFailuresData, lowAMHData, polycysticOvarianSyndromeData, tubalBlockageData, azoospermiaData, lowSpermCountData, uterineFibroidsData, endometriosisData, erectileDysfunctionData } from "@/components/data/infertilityissues";
import MainInfertility from "@/page-components/infertility-slug/MainInfertility";

type InfertilityIssuesProps = {
  params: {
    slug: string;
  };
};

export default function InfertilityIssues({ params }: InfertilityIssuesProps) {
  const { slug } = params;

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
    return <div>Page not found</div>;
  }

  return <MainInfertility data={data} />;
}
