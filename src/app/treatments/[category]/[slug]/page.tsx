import React from "react";
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
import MainTreatment from "@/page-components/treatment-slug/MainTreatment";

type TreatmentPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default function TreatmentPage({ params }: TreatmentPageProps) {
  // ✅ Unwrap params
  const { category, slug } = React.use(params);

  let data;

  switch (slug) {
    case "imsi":
      data = imsiTreatmentData;
      break;
    case "picsi":
      data = picsiTreatmentData;
      break;
    case "lah":
      data = lahTreatmentData;
      break;
    case "blastocyst-transfer":
      data = blastocystTransferData;
      break;
    case "sequential-embryo-transfer":
      data = sequentialEmbryoTransferData;
      break;
    case "pgd-pgs-pgt-a":
      data = pgdTreatmentData;
      break;
    case "class-1000-modular-lab":
      data = class1000ModularLabData;
      break;
    case "trigas-incubators":
      data = trigasIncubatorsData;
      break;
    case "witness-system":
      data = witnessSystemData;
      break;
    case "cryopreservation":
      data = cryopreservationData;
      break;
    case "ovulation-induction":
      data = ovulationInductionData;
      break;
    case "artificial-insemination-iui-treatment":
      data = artificialInseminationData;
      break;
    case "ivf-comprehensive-in-vitro-fertilization-treatment":
      data = ivfTreatmentData;
      break;
    case "ivf-icsi-intracytoplasmic-sperm-injection":
      data = ivfIcsiTreatmentData;
      break;
    case "frozen-embryo-transfer":
      data = frozenEmbryoTransferTreatmentData;
      break;
    case "fertility-surgery":
      data = fertilitySurgeryTreatmentData;
      break;
    case "female-fertility-preservation":
      data = femaleFertilityPreservationData;
      break;
    case "male-fertility-preservation":
      data = maleFertilityPreservationData;
      break;
    case "egg-embryo-freezing":
      data = eggEmbryoFreezingData;
      break;
    case "female-fertility-check":
      data = femaleAnalysisData;
      break;
    case "semen-analysis":
      data = semenAnalysisData;
      break;
    default:
      data = null;
  }

  if (!data) {
    return (
      <div className="p-6 text-red-600">
        Treatment not found. Please add data for slug: {slug}
      </div>
    );
  }

  return <MainTreatment data={data} />;
}