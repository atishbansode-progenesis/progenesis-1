export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com";
  const { category } = await params;

  let title = "Treatments for Infertility | Advanced Fertility Treatments";
  let description = "Progenesis IVF offers comprehensive fertility treatments including IVF, ICSI, IUI, and advanced procedures. Get expert care in one location.";
  let canonical = `${baseUrl}/treatments`;

  if (category === 'advanced') {
    title = "Advanced Infertility Treatments | Progenesis IVF";
    description = "Explore advanced fertility treatments like IMSI, PICSI, laser-assisted hatching, and blastocyst transfer for higher success rates at Progenesis IVF.";
    canonical = `${baseUrl}/treatments/advanced`;
  } else if (category === 'infertility') {
    title = "Infertility Treatments | IVF, ICSI & More | Progenesis IVF";
    description = "Comprehensive infertility treatments including IVF, ICSI, IUI, ovulation induction, and fertility surgery. Personalized care at Progenesis IVF.";
    canonical = `${baseUrl}/treatments/infertility`;
  } else if (category === 'fertility-preservation') {
    title = "Fertility Preservation | Egg & Sperm Freezing | Progenesis IVF";
    description = "Preserve fertility with egg freezing, embryo freezing, and sperm banking. Advanced preservation techniques at Progenesis IVF.";
    canonical = `${baseUrl}/treatments/fertility-preservation`;
  } else if (category === 'fertility-evaluation') {
    title = "Fertility Evaluation | Diagnostic Tests | Progenesis IVF";
    description = "Comprehensive fertility evaluation with semen analysis, hormonal tests, and imaging. Identify infertility causes at Progenesis IVF.";
    canonical = `${baseUrl}/treatments/fertility-evaluation`;
  } else if (category === 'stories') {
    title = "Success Stories | Fertility Treatment Results | Progenesis IVF";
    description = "Read success stories from couples who achieved parenthood through Progenesis IVF treatments. Real journeys to successful pregnancies.";
    canonical = `${baseUrl}/treatments/stories`;
  }

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
