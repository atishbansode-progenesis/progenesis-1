import { imsiTreatmentData, picsiTreatmentData } from "@/components/data/treatments";
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
    // Add more cases for other treatments here
    // case "ivf":
    //   data = ivfTreatmentData;
    //   break;
    // case "icsi":
    //   data = icsiTreatmentData;
    //   break;
    // case "iui":
    //   data = iuiTreatmentData;
    //   break;
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
