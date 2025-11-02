import React from "react";
// Import infertility data
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
// Import treatment data
import {
  artificialInseminationData,
  blastocystTransferData,
  class1000ModularLabData,
  cryopreservationData,
  fertilitySurgeryTreatmentData,
  frozenEmbryoTransferTreatmentData,
  imsiTreatmentData,
  ivfIcsiTreatmentData,
  ivfTreatmentData,
  lahTreatmentData,
  ovulationInductionData,
  pgdTreatmentData,
  picsiTreatmentData,
  sequentialEmbryoTransferData,
  trigasIncubatorsData,
  witnessSystemData,
} from "@/components/data/treatments";
import {
  eggEmbryoFreezingData,
  femaleAnalysisData,
  femaleFertilityPreservationData,
  maleFertilityPreservationData,
  semenAnalysisData,
} from "@/components/data/treatmentsnew";
// Import page components
import MainInfertility from "@/page-components/infertility-slug/MainInfertility";
import MainTreatment from "@/page-components/treatment-slug/MainTreatment";
import SingleCenter from '@/page-components/centers/SingleCenter';

type DynamicPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function DynamicPage({ params }: DynamicPageProps) {
  // ✅ Unwrap params Promise using React.use()
  const { slug } = React.use(params);

  let data;
  let pageType: "infertility" | "treatment" | "center" | null = null;
  console.log("slug", pageType);

  // Check infertility issues first
  switch (slug) {
    case "repeated-iui-failures":
      data = repeatedIUIFailuresData;
      pageType = "infertility";
      break;
    case "pregnancy-after-menopause":
      data = pregnancyAfterMenopauseData;
      pageType = "infertility";
      break;
    case "repeated-ivf-failures":
      data = repeatedIVFFailuresData;
      pageType = "infertility";
      break;
    case "low-amh":
      data = lowAMHData;
      pageType = "infertility";
      break;
    case "pcos":
      data = polycysticOvarianSyndromeData;
      pageType = "infertility";
      break;
    case "tubal-blockage":
      data = tubalBlockageData;
      pageType = "infertility";
      break;
    case "azoospermia":
      data = azoospermiaData;
      pageType = "infertility";
      break;
    case "low-sperm-count":
      data = lowSpermCountData;
      pageType = "infertility";
      break;
    case "fibroids":
      data = uterineFibroidsData;
      pageType = "infertility";
      break;
    case "endometriosis":
      data = endometriosisData;
      pageType = "infertility";
      break;
    case "erectile-dysfunction-ed":
      data = erectileDysfunctionData;
      pageType = "infertility";
      break;
    // Check treatment slugs
    case "imsi":
      data = imsiTreatmentData;
      pageType = "treatment";
      break;
    case "picsi":
      data = picsiTreatmentData;
      pageType = "treatment";
      break;
    case "lah":
      data = lahTreatmentData;
      pageType = "treatment";
      break;
    case "blastocyst-transfer":
      data = blastocystTransferData;
      pageType = "treatment";
      break;
    case "sequential-embryo-transfer":
      data = sequentialEmbryoTransferData;
      pageType = "treatment";
      break;
    case "pgd-pgs-pgt-a-a-boon-for-couples-with-genetic-issues":
      data = pgdTreatmentData;
      pageType = "treatment";
      break;
    case "class-1000-modular-lab":
      data = class1000ModularLabData;
      pageType = "treatment";
      break;
    case "trigas-incubators":
      data = trigasIncubatorsData;
      pageType = "treatment";
      break;
    case "witness-system":
      data = witnessSystemData;
      pageType = "treatment";
      break;
    case "cryopreservation-of-human-gametes":
      data = cryopreservationData;
      pageType = "treatment";
      break;
    case "ovulation-induction":
      data = ovulationInductionData;
      pageType = "treatment";
      break;
    case "artificial-insemination-iui":
      data = artificialInseminationData;
      pageType = "treatment";
      break;
    case "ivf-treatment":
      data = ivfTreatmentData;
      pageType = "treatment";
      break;
    case "icsi-treatment":
      data = ivfIcsiTreatmentData;
      pageType = "treatment";
      break;
    case "frozen-embryo-transfer":
      data = frozenEmbryoTransferTreatmentData;
      pageType = "treatment";
      break;
    case "fertility-surgery":
      data = fertilitySurgeryTreatmentData;
      pageType = "treatment";
      break;
    case "female-fertility-preservation":
      data = femaleFertilityPreservationData;
      pageType = "treatment";
      break;
    case "male-fertility-preservation":
      data = maleFertilityPreservationData;
      pageType = "treatment";
      break;
    case "egg-freezing-embryo-freezing":
      data = eggEmbryoFreezingData;
      pageType = "treatment";
      break;
    case "female-analysis":
      data = femaleAnalysisData;
      pageType = "treatment";
      break;
    case "semen-analysis":
      data = semenAnalysisData;
      pageType = "treatment";
      break;
    default:
      data = null;
      pageType = "center"
  }

  if (!data && !pageType) {
    return (
      <div className="p-6 text-red-600">
        Page not found for slug: {slug}
      </div>
    );
  }

  if (pageType === "infertility") {
    return <MainInfertility data={data} />;
  } else if (pageType === "treatment") {
    return <MainTreatment data={data} />;
  } else if (pageType === "center") {
    return <SingleCenter selectedSlug={slug} />;
  }

  return null;
}
