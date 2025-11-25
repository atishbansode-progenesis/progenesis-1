require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Function to create sitemap XML
function createSitemap(urls, filename) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com";
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${siteUrl}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'public', filename), sitemap);
  console.log(`Generated ${filename}`);
}

// Main sitemap URLs (all static pages except centers, doctors & blogs)
const mainUrls = [
  // Home and main pages
  '/',
  '/about-progenesis/leadership-team',
  '/about-progenesis',
  '/careers',
  '/emi-options',
  '/infertility',
  '/international-patient',
  '/online-consultations',
  '/our-center', // listing page
  '/privacy-policy',
  '/second-opinion',
  '/success-stories',
  '/thank-you',
  '/treatments', // listing page
  '/blog',
  '/doctors',


  // Treatments
  '/treatments/advanced/imsi',
  '/treatments/advanced/picsi',
  '/treatments/advanced/lah',
  '/treatments/advanced/blastocyst-transfer',
  '/treatments/advanced/sequential-embryo-transfer',
  '/treatments/advanced/pgd-pgs-pgt-a',
  '/treatments/advanced/class-1000-modular-lab',
  '/treatments/advanced/trigas-incubators',
  '/treatments/advanced/witness-system',
  '/treatments/advanced/cryopreservation',
  '/treatments/basic/ovulation-induction',
  '/treatments/basic/artificial-insemination-iui-treatment',
  '/treatments/basic/ivf-comprehensive-in-vitro-fertilization-treatment',
  '/treatments/basic/ivf-icsi-intracytoplasmic-sperm-injection',
  '/treatments/advanced/frozen-embryo-transfer',
  '/treatments/advanced/fertility-surgery',
  '/treatments/fertility-preservation/female-fertility-preservation',
  '/treatments/fertility-preservation/male-fertility-preservation',
  '/treatments/fertility-preservation/egg-embryo-freezing',
  '/treatments/basic/female-fertility-check',
  '/treatments/basic/semen-analysis',
  // Infertility issues
  '/infertility/female/repeated-iui-failures',
  '/infertility/female/repeated-ivf-failures',
  '/infertility/female/pregnancy-after-menopause',
  '/infertility/female/low-amh',
  '/infertility/female/pcos',
  '/infertility/female/tubal-blockage',
  '/infertility/female/fibroids',
  '/infertility/female/endometriosis',
  '/infertility/male/azoospermia',
  '/infertility/male/low-sperm-count',
  '/infertility/male/erectile-dysfunction'
];

createSitemap(mainUrls, 'sitemap-main.xml');

// Centers
const centers = [
  'best-ivf-center-in-thane',
  'best-ivf-center-in-andheri',
  'best-ivf-center-in-ghatkopar',
  'best-ivf-center-in-virar',
  'best-ivf-center-in-kalyan',
  'best-ivf-center-in-borivali',
  'best-ivf-center-in-vashi',
  'best-ivf-center-in-panvel',
  'best-ivf-center-in-pune',
  'best-ivf-center-in-nashik',
  'best-ivf-center-in-jalgaon',
  'best-ivf-center-in-ahilyanagar',
  'best-ivf-center-in-amravati',
  'best-ivf-center-in-kolhapur',
  'best-ivf-center-in-nagpur',
  'best-ivf-center-in-solapur',
  'best-ivf-center-in-sambhajinagar',
  'best-ivf-center-in-kalyaninagar'
];

const centerUrls = centers.map(slug => `/our-center/${slug}`);
createSitemap(centerUrls, 'sitemap-centers.xml');

// Doctors - fetch from API
async function generateDoctorsSitemap() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctor/`);
    if (response.ok) {
      const doctors = await response.json();
      const doctorUrls = doctors.map(doctor => `/doctors/${doctor.slug}`);
      createSitemap(doctorUrls, 'sitemap-doctors.xml');
    }
  } catch (error) {
    console.error('Error fetching doctors:', error);
  }
}

// Blogs - fetch from API
async function generateBlogsSitemap() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post-seo-meta/?page_size=1000&page=1`);
    if (response.ok) {
      const data = await response.json();
      const blogUrls = data.results.map(blog => `/${blog.post_url}`);
      console.log("blogUrls", data.results.length)
      createSitemap(blogUrls, 'sitemap-blogs.xml');
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}

// Generate sitemap index
function createSitemapIndex() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com";
  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-main.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-centers.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-doctors.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-blogs.xml</loc>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), index);
  console.log('Generated sitemap.xml index');
}

async function main() {
  createSitemapIndex();
  await generateDoctorsSitemap();
  await generateBlogsSitemap();
}

main();
