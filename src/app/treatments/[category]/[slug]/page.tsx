import { artificialInseminationData, blastocystTransferData, class1000ModularLabData, cryopreservationData, imsiTreatmentData, ivfTreatmentData, lahTreatmentData, ovulationInductionData, pgdTreatmentData, picsiTreatmentData, sequentialEmbryoTransferData, trigasIncubatorsData, witnessSystemData } from "@/components/data/treatments";
import { eggEmbryoFreezingData, femaleAnalysisData, maleFertilityPreservationData, semenAnalysisData } from "@/components/data/treatmentsnew";
import MainTreatment from "@/page-components/treatment-slug/MainTreatment";

type TreatmentPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export default function TreatmentPage({ params }: TreatmentPageProps) {
  const { category, slug } = params;

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
    case "ivf-treatment":
      data = ivfTreatmentData;
      break;
    case "male-fertility-preservation":
      data = maleFertilityPreservationData;
      break;
    case "egg-embryo-freezing":
      data = eggEmbryoFreezingData;
      break;
    case "female-analysis-complete-reproductive-health-check":
      data = femaleAnalysisData;
      break;
    case "male-analysis":
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
