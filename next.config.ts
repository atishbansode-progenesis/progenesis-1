import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    domains: ['admin.progenesisivf.com'],
  },
  async redirects() {
    return [
      {
        source: '/best-ivf-center-in-nashik',
        destination: '/our-center/best-ivf-center-in-nashik',
        permanent: true,
      },
      {
        source: '/ivf-center-thane',
        destination: '/our-center/best-ivf-center-in-thane',
        permanent: true,
      },
      {
        source: '/ivf-center-in-pune',
        destination: '/our-center/best-ivf-center-in-pune',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-panvel',
        destination: '/our-center/best-ivf-center-in-panvel',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-jalgaon',
        destination: '/our-center/best-ivf-center-in-jalgaon',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-vashi',
        destination: '/our-center/best-ivf-center-in-vashi',
        permanent: true,
      },
      {
        source: '/ivf-center-in-virar',
        destination: '/our-center/best-ivf-center-in-virar',
        permanent: true,
      },
      {
        source: '/ivf-center-in-andheri',
        destination: '/our-center/best-ivf-center-in-andheri',
        permanent: true,
      },
      {
        source: '/best-ivf-center-kalyan',
        destination: '/our-center/best-ivf-center-in-kalyan',
        permanent: true,
      },
      {
        source: '/our-center/kolhapur',
        destination: '/our-center/best-ivf-center-in-kolhapur',
        permanent: true,
      },
      {
        source: '/ivf-center-in-ghatkopar',
        destination: '/our-center/best-ivf-center-in-ghatkopar',
        permanent: true,
      },
      {
        source: '/fertility-consultation',
        destination: '/',
        permanent: true,
      },
      {
        source: '/repeated-iui-failures',
        destination: '/infertility/female/repeated-iui-failures',
        permanent: true,
      },
      {
        source: '/repeated-ivf-failure',
        destination: '/infertility/female/repeated-ivf-failures',
        permanent: true,
      },
      {
        source: '/pregnancy-after-menopause',
        destination: '/infertility/female/pregnancy-after-menopause',
        permanent: true,
      },
      {
        source: '/low-amh',
        destination: '/infertility/female/low-amh',
        permanent: true,
      },
      {
        source: '/pcos',
        destination: '/infertility/female/pcos',
        permanent: true,
      },
      {
        source: '/tubal-blockage',
        destination: '/infertility/female/tubal-blockage',
        permanent: true,
      },
      {
        source: '/fibroids',
        destination: '/infertility/female/fibroids',
        permanent: true,
      },
      {
        source: '/endometriosis',
        destination: '/infertility/female/endometriosis',
        permanent: true,
      },

      // Male Infertility Pages
      {
        source: '/azoospermia',
        destination: '/infertility/male/azoospermia',
        permanent: true,
      },
      {
        source: '/low-sperm-count',
        destination: '/infertility/male/low-sperm-count',
        permanent: true,
      },
      {
        source: '/erectile-dysfunction-ed',
        destination: '/infertility/male/erectile-dysfunction',
        permanent: true,
      },

      // Advanced Treatments
      {
        source: '/imsi',
        destination: '/treatments/advanced/imsi',
        permanent: true,
      },
      {
        source: '/picsi',
        destination: '/treatments/advanced/picsi',
        permanent: true,
      },
      {
        source: '/lah',
        destination: '/treatments/advanced/lah',
        permanent: true,
      },
      {
        source: '/blastocyst-transfer',
        destination: '/treatments/advanced/blastocyst-transfer',
        permanent: true,
      },
      {
        source: '/sequential-embryo-transfer',
        destination: '/treatments/advanced/sequential-embryo-transfer',
        permanent: true,
      },
      {
        source: '/pgd-pgs-pgt-a-a-boon-for-couples-with-genetic-issues',
        destination: '/treatments/advanced/pgd-pgs-pgt-a',
        permanent: true,
      },
      {
        source: '/class-1000-modular-lab',
        destination: '/treatments/advanced/class-1000-modular-lab',
        permanent: true,
      },
      {
        source: '/trigas-incubators',
        destination: '/treatments/advanced/trigas-incubators',
        permanent: true,
      },
      {
        source: '/witness-system',
        destination: '/treatments/advanced/witness-system',
        permanent: true,
      },
      {
        source: '/cryopreservation-of-human-gametes',
        destination: '/treatments/advanced/cryopreservation',
        permanent: true,
      },

      // Infertility Treatments
      {
        source: '/ovulation-induction',
        destination: '/treatments/infertility/ovulation-induction',
        permanent: true,
      },
      {
        source: '/artificial-insemination-iui',
        destination: '/treatments/infertility/artificial-insemination-iui-treatment',
        permanent: true,
      },
      {
        source: '/ivf-treatment',
        destination: '/treatments/infertility/ivf',
        permanent: true,
      },
      {
        source: '/icsi-treatment',
        destination: '/treatments/infertility/ivf-icsi',
        permanent: true,
      },
      {
        source: '/frozen-embryo-transfer',
        destination: '/treatments/infertility/frozen-embryo-transfer',
        permanent: true,
      },
      {
        source: '/fertility-surgery',
        destination: '/treatments/infertility/fertility-surgery',
        permanent: true,
      },

      // Preservation Treatments
      {
        source: '/female-fertility-preservation',
        destination: '/treatments/preservation/female-fertility-preservation',
        permanent: true,
      },
      {
        source: '/male-fertility-preservation',
        destination: '/treatments/preservation/male-fertility-preservation',
        permanent: true,
      },
      {
        source: '/egg-freezing-embryo-freezing',
        destination: '/treatments/preservation/female-fertility-preservation',
        permanent: true,
      },

      // Evaluation/Analysis
      {
        source: '/female-analysis',
        destination: '/treatments/evaluation/female-analysis-complete-reproductive-health-check',
        permanent: true,
      },
      {
        source: '/semen-analysis',
        destination: '/treatments/evaluation/male-analysis',
        permanent: true,
      },

      // Other Services
      {
        source: '/international-patient-',
        destination: '/international-patient',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
