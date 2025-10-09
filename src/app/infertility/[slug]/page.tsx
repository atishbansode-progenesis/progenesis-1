import { repeatedIUIFailuresData, pregnancyAfterMenopauseData } from "@/components/data/infertilityissues";
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
    default:
      data = null;
  }

  if (!data) {
    return <div>Page not found</div>;
  }

  return <MainInfertility data={data} />;
}
