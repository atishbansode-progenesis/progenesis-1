export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com";
  const { category } = await params;

  let title = "Fertility Issues | Causes of Infertility";
  let description = "Learn about common infertility causes, from hormonal imbalances to lifestyle factors. Get comprehensive solutions and expert guidance at Progenesis IVF.";
  let canonical = `${baseUrl}/infertility`;

  if (category === 'female') {
    title = "Female Infertility Causes | Progenesis IVF";
    description = "Explore female infertility causes like PCOS, low AMH, tubal blockage, endometriosis, and fibroids. Get personalized treatment at Progenesis IVF.";
    canonical = `${baseUrl}/infertility/female`;
  } else if (category === 'male') {
    title = "Male Infertility Causes | Progenesis IVF";
    description = "Discover male infertility factors including low sperm count, azoospermia, and erectile dysfunction. Find effective treatments at Progenesis IVF.";
    canonical = `${baseUrl}/infertility/male`;
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
