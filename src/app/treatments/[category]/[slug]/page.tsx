import React from "react";
import { Metadata } from "next";
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

// Function to get metadata based on slug
function getTreatmentMetadata(slug: string): { title: string; description: string } | null {
  const metadataMap: Record<string, { title: string; description: string }> = {
    "imsi": {
      title: "IMSI Treatment, Procedure, & success rate | Progenesis IVF",
      description: "IMSI has a high success rate of IVF overcoming male infertility. This is a preferred mode of treatment for patients suffering with Teratozoospermia. This is one of the trusted ways of achieving good quality embryos."
    },
    "picsi": {
      title: "PICSI Treatment & success rate in India | Progenesis IVF",
      description: "PICSI has a higher success rate in developing good quality embryos resulting in good changes of implantation and pregnancy."
    },
    "lah": {
      title: "Laser Assisted Hatching Procedure | LAH Treatment for Fertility",
      description: "An improved IVF result can be achieved with the help of Laser Assisted Hatching. This process improves chances of the embryo implantation into the uterus."
    },
    "blastocyst-transfer": {
      title: "Blastocyst embryo transfer for IVF treatment | Progenesis IVF",
      description: "With the help of blastocyst transfer, the chances of getting pregnant is exceptionally high. Compared to embryo transfer at an early stage, there is a 7% increase in the odds of pregnancy occurring."
    },
    "sequential-embryo-transfer": {
      title: "Procedure of Sequential Embryo Transfer | Progenesis IVF",
      description: "Sequential embryo transfer involves the transfer of two sets of developing embryos into the uterus at different phases of her menstrual cycle."
    },
    "pgd-pgs-pgt-a": {
      title: "PGD/PGS: Advanced Genetic Testing for IVF Success",
      description: "Preimplantation genetic testing (PGT) is done on embryos created through IVF to screen for genetic conditions. Book an appointment today"
    },
    "class-1000-modular-lab": {
      title: "Class-1000 Modular Lab - Progenesis",
      description: "A cleanroom is an artificially-controlled environment used in laboratories. It provides the laboratory with a lower and controlled measure of pollutants and"
    },
    "trigas-incubators": {
      title: "Tri-gas Incubators: What is IVF incubator | Progenesis IVF center",
      description: "For an IVF lab, the IVF incubators are its most important equipment. For embryos to grow in a laboratory, the conditions need to be perfect."
    },
    "witness-system": {
      title: "Witness system in IVF | Advanced Fertility Technology | Progenesis",
      description: "The witness system is a recent innovation in IVF (in vitro fertilization). It is common in developed countries where specific legislation for it is being mandated."
    },
    "cryopreservation": {
      title: "Cryopreservation of Human Gametes and Embryos | Progenesis IVF",
      description: "Cryopreservation of human gametes is one of the most commonly used clinical fertilization methods. This whole process is a very effective method of having assisted reproduction."
    },
    "ovulation-induction": {
      title: "Ovulation Induction Fertility Treatment & Medication | Progenesis",
      description: "Ovulation induction is an reproductive treatment. Hormone-based medication are used in the process to regulate female reproductive hormones."
    },
    "artificial-insemination-iui-treatment": {
      title: "IUI Treatment in India | iui success stories india",
      description: "IUI treatment is recommended by doctors to couples who are having trouble conceiving. Progenesis experts tell you more about the IUI procedure."
    },
    "ivf-comprehensive-in-vitro-fertilization-treatment": {
      title: "IVF Treatment & Process | IVF pregnancy in affordable cost in India",
      description: "IVF treatment at Progenesis can help couples with infertility problems by using various IVF procedures for a healthy IVF pregnancy."
    },
    "ivf-icsi-intracytoplasmic-sperm-injection": {
      title: "ICSI Treatment in India | Procedure for successful icsi - Progenesis",
      description: "ICSI treatment is one of the best ways to overcome male infertility and get viable embryo of good quality. ICSI has proven good results."
    },
    "frozen-embryo-transfer": {
      title: "Frozen embryo transfer treatment in India | FET | Progenesis",
      description: "Frozen embryo transfer (FET) is one of the important procedures in the fertility treatment. Consult the FET experts at Progenesis IVF fertility center."
    },
    "fertility-surgery": {
      title: "Laparoscopic Surgery: Reasons, Risk & What to Expect | Progenesis IVF",
      description: "Fertility surgery is offered to infertile women or men for correcting anatomical defects that may impair the ability to conceive. Progenesis offers multiple fertility surgeries to help infertility."
    },
    "female-fertility-preservation": {
      title: "Female Fertility Preservation - Progenesis IVF",
      description: "Female fertility preservation is a method by which eggs, embryos, or ovarian tissue of a female are preserved in a laboratory setting in order to use them during a later stage."
    },
    "male-fertility-preservation": {
      title: "Male Fertility Preservation - Progenesis IVF",
      description: "Male Fertility Preservation means that we can preserve the malefactor of pregnancy for future uses. The arrival of such techniques has been a breakthrough for male fertility treatments."
    },
    "egg-embryo-freezing": {
      title: "Egg Freezing and Embryo Freezing: which one is right? | Progenesis IVF",
      description: "The procedure entails removing eggs from the ovaries, fertilizing them to form embryos, allowing them to develop for several days, and then freezing them."
    },
    "female-fertility-check": {
      title: "Female Fertility Analysis and Treatments Related to Fertility | Progenesis",
      description: "To help a couple conceive, modern science has come up with a lot of solutions & treatments. Various fertility tests are conducted to help indicate the source of the issue, according to which the treatment begins."
    },
    "semen-analysis": {
      title: "Semen Analysis Test: Purpose, Procedure, & Results | Progenesis IVF",
      description: "The sperm count test, also called Semen analysis, checks the health of a man's sperm. Semen is the spermatic fluid released during ejaculation."
    }
  };

  return metadataMap[slug] || null;
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getTreatmentMetadata(slug);

  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
    };
  }

  return {
    title: "Fertility Treatment | Progenesis IVF",
    description: "Advanced fertility treatments and procedures at Progenesis IVF center.",
  };
}

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