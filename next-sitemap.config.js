/** @type {import('next-sitemap').IConfig} */

export default {
  siteUrl: "https://progenesisivf.com",   // <-- Replace with your main site URL
  generateRobotsTxt: true,
  sitemapSize: 7000,                   // optional
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => {
    const result = [];

    // Fetch doctors
    try {
      const doctorsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctor/`, {
        cache: "no-store",
      });
      if (doctorsRes.ok) {
        const doctors = await doctorsRes.json();
        doctors.forEach((doctor) => {
          result.push({
            loc: `/doctors/${doctor.slug}`,
            changefreq: "monthly",
            priority: 0.6,
          });
        });
      }
    } catch (error) {
      console.error("Error fetching doctors for sitemap:", error);
    }

    // Treatments with categories
    const treatments = [
      { slug: "imsi", category: "advanced" },
      { slug: "picsi", category: "advanced" },
      { slug: "lah", category: "advanced" },
      { slug: "blastocyst-transfer", category: "advanced" },
      { slug: "sequential-embryo-transfer", category: "advanced" },
      { slug: "pgd-pgs-pgt-a", category: "advanced" },
      { slug: "class-1000-modular-lab", category: "advanced" },
      { slug: "trigas-incubators", category: "advanced" },
      { slug: "witness-system", category: "advanced" },
      { slug: "cryopreservation", category: "advanced" },
      { slug: "ovulation-induction", category: "basic" },
      { slug: "artificial-insemination-iui-treatment", category: "basic" },
      { slug: "ivf-comprehensive-in-vitro-fertilization-treatment", category: "basic" },
      { slug: "ivf-icsi-intracytoplasmic-sperm-injection", category: "basic" },
      { slug: "frozen-embryo-transfer", category: "advanced" },
      { slug: "fertility-surgery", category: "advanced" },
      { slug: "female-fertility-preservation", category: "fertility-preservation" },
      { slug: "male-fertility-preservation", category: "fertility-preservation" },
      { slug: "egg-embryo-freezing", category: "fertility-preservation" },
      { slug: "female-fertility-check", category: "basic" },
      { slug: "semen-analysis", category: "basic" },
    ];

    treatments.forEach((treatment) => {
      result.push({
        loc: `/treatments/${treatment.category}/${treatment.slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });


    const centersData = [
      { "slug": "best-ivf-center-in-thane", "name": "Thane" },
      { "slug": "best-ivf-center-in-andheri", "name": "Andheri" },
      { "slug": "best-ivf-center-in-ghatkopar", "name": "Ghatkopar" },
      { "slug": "best-ivf-center-in-virar", "name": "Virar" },
      { "slug": "best-ivf-center-in-kalyan", "name": "Kalyan" },
      { "slug": "best-ivf-center-in-borivali", "name": "Borivali" },
      { "slug": "best-ivf-center-in-vashi", "name": "Vashi" },
      { "slug": "best-ivf-center-in-panvel", "name": "Panvel" },
      { "slug": "best-ivf-center-in-pune", "name": "Pune" },
      { "slug": "best-ivf-center-in-nashik", "name": "Nashik" },
      { "slug": "best-ivf-center-in-jalgaon", "name": "Jalgaon" },
      { "slug": "best-ivf-center-in-ahilyanagar", "name": "Ahilyanagar" },
      { "slug": "best-ivf-center-in-amravati", "name": "Amravati" },
      { "slug": "best-ivf-center-in-kolhapur", "name": "Kolhapur" },
      { "slug": "best-ivf-center-in-nagpur", "name": "Nagpur" },
      { "slug": "best-ivf-center-in-solapur", "name": "Solapur" }
    ]

    // Centers
    centersData.forEach((center) => {
      result.push({
        loc: `/our-center/${center.slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });


    const FEMALE_INFERTILITY_ISSUES = [
          { "slug": "repeated-iui-failures", "title": "Repeated IUI Failures" },
          { "slug": "repeated-ivf-failures", "title": "Repeated IVF Failures" },
          { "slug": "pregnancy-after-menopause", "title": "Pregnancy after Menopause" },
          { "slug": "low-amh", "title": "Low AMH" },
          { "slug": "pcos", "title": "PCOS" },
          { "slug": "tubal-blockage", "title": "Tubal Blockage" },
          { "slug": "fibroids", "title": "Fibroids" },
          { "slug": "endometriosis", "title": "Endometriosis" }
        ]

    // Infertility female issues
    FEMALE_INFERTILITY_ISSUES.forEach((issue) => {
      result.push({
        loc: `/infertility/female/${issue.slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });


    const MALE_INFERTILITY_ISSUES = [
          { "slug": "azoospermia", "title": "Azoospermia" },
          { "slug": "low-sperm-count", "title": "Low Sperm Count" },
          { "slug": "erectile-dysfunction", "title": "Erectile Dysfunction (ED)" }
        ]

    // Infertility male issues
    MALE_INFERTILITY_ISSUES.forEach((issue) => {
      result.push({
        loc: `/infertility/male/${issue.slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });

    return result;
  },
};
