import { Watch } from "lucide-react";

export interface Treatment {
  slug: string;
  category: "basic" | "advanced"; // optional grouping
  title: string;
  description: string;
  content: string; // full detail page content
}

// Individual treatment data exports
export const imsiTreatmentData = {
  slug: "imsi",
  category: "advanced",
  title: "IMSI – Intracytoplasmic Morphologically Selected Sperm Injection",
  hero_title: "IMSI Treatment",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/imsi/imsibg.png",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "Advanced Treatments", href: "/treatments/advanced" },
    { label: "IMSI", href: "/treatments/advanced/imsi" },
  ],
  basics_heading: "Precision sperm selection for healthier embryos and pregnancies",
  points_tag: "Why Choose IMSI",
  points_heading: "Targeted Selection for Higher IVF Success",
  procedure_tag: "The IMSI Procedure",
  procedure_heading: "Three steps closer to your parenthood journey",
  description:
    "IMSI allows embryologists to choose the healthiest sperm using high magnification, improving fertilization chances.",
  content: `
    <p>
      IMSI is a refinement of ICSI that uses high-power magnification to examine
      sperm morphology in great detail. This technique increases the chances
      of selecting the most viable sperm for injection.
    </p>
    <p>
      At our center, IMSI has shown better outcomes in severe male infertility cases.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Why Choose IMSI" },
    { id: "procedure", label: "The IMSI Procedure" },
    { id: "stories", label: "Success Stories" },
  ],
  basics: [
    {
      icon: "/treatments/imsi/imsi_icon1.png",
      title: "What IMSI Means",
      description:
        "IMSI (Intracytoplasmic Morphologically Selected Sperm Injection) is a technique to pick the healthiest sperm for fertilization.",
    },
    {
      icon: "/treatments/imsi/imsi_icon2.png",
      title: "High-Powered Microscopy",
      description:
        "Doctors use a microscope (up to 6600x) to examine sperm closely and choose the best one.",
    },
    {
      icon: "/treatments/imsi/imsi_icon3.png",
      title: "Who Needs IMSI",
      description:
        "Recommended for men with poor sperm shape, high DNA damage, or couples with repeated IVF/IUI failures.",
    },
    {
      icon: "/treatments/imsi/imsi_icon4.png",
      title: "How It Works",
      description:
        "Eggs are retrieved from the female partner, and the selected healthy sperm is injected directly into the egg for fertilization.",
    },
    {
      icon: "/treatments/imsi/imsi_icon5.png",
      title: "Benefits of IMSI",
      description:
        "IMSI improves the chances of healthy embryo development, successful implantation, and full-term pregnancy.",
    },
    {
      icon: "/treatments/imsi/imsi_icon6.png",
      title: "Proven Success",
      description:
        "IMSI is a preferred method worldwide for couples struggling with severe male-factor infertility.",
    },
  ],
  procedure_steps: [
    {
      title: "Egg collection process",
      description: "Retrieving eggs for future fertility preservation.",
      image: "/treatments/egg.png",
    },
    {
      title: "Healthy sperm selection",
      description: "Choosing optimal sperm for successful fertilization outcomes.",
      image: "/treatments/sperm.png",
    },
    {
      title: "Fertilization and transfer",
      description: "Combining eggs and sperm, implanting embryo.",
      image: "/treatments/Fertilization.png",
    },
  ],
  gradient_data: "78%",
  gradient_text: "Couples achieve successful embryo development with IMSI",
  points: [
    {
      id: "01",
      title: "Poor Sperm Morphology",
      description: "IMSI helps doctors select healthy sperm, improving fertilization when abnormal shapes hinder success.",
      image: "/treatments/imsi/C1.png"
    },
    {
      id: "02",
      title: "High DNA Fragmentation",
      description: "Sperm DNA damage harms embryo quality, implantation. IMSI selects sperm for better results.",
      image: "/treatments/imsi/C2.png"
    },
    {
      id: "03",
      title: "Failed IVF/IUI Cycles",
      description: "When standard treatments fail, precise sperm selection can boost pregnancy chances.",     
      image: "/treatments/imsi/C3.png"
    },
    {
      id: "04",
      title: "Benefits & Success Rates",
      description: "Enhances embryo quality, improves implantation, and increases chances of a healthy live birth.",      
      image: "/treatments/imsi/C4.png"
    }
  ],
  bottom_footer: "Your dream of parenthood deserves the best. Our specialists offer advanced fertility treatments for higher success.",
};

// For backward compatibility and list views
export const treatments: Treatment[] = [
  {
    slug: "imsi",
    category: "advanced",
    title: "IMSI – Intracytoplasmic Morphologically Selected Sperm Injection",
    description:
      "IMSI allows embryologists to choose the healthiest sperm using high magnification, improving fertilization chances.",
    content: "",
  },
  {
    slug: "icsi",
    category: "advanced",
    title: "ICSI – Intracytoplasmic Sperm Injection",
    description:
      "ICSI involves injecting a single sperm directly into an egg, commonly used in male infertility cases.",
    content: `
      <p>
        ICSI is performed as part of IVF when sperm count or motility is low.
        It bypasses natural selection barriers and ensures fertilization by
        direct sperm injection.
      </p>
    `,
  },
  {
    slug: "ivf",
    category: "basic",
    title: "IVF – In Vitro Fertilization",
    description:
      "IVF is a widely used assisted reproductive technology where eggs are fertilized outside the body.",
    content: `
      <p>
        IVF involves ovarian stimulation, egg retrieval, fertilization in a
        laboratory, and embryo transfer. It is one of the most effective
        infertility treatments available today.
      </p>
    `,
  },
];


// PICSI Treatment Data
export const picsiTreatmentData = {
  slug: "picsi",
  category: "advanced",
  title: "PICSI – Physiologic Intracytoplasmic Sperm Injection",
  hero_title: "PICSI Treatment",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/picsi/picsibg.png",
  breadcrumbs: [
    { "label": "Home", "href": "/", id: "home" },
    { "label": "Treatments", "href": "/treatments", id: "treatments" },
    { "label": "Advanced Treatments", "href": "/treatments/advanced", id: "advanced" },
    { "label": "PICSI", "href": "/treatments/advanced/picsi", id: "picsi" }
  ],
  basics_heading: "Precision Sperm Selection for Embryo Health",
  points_tag: "Why Choose PICSI",
  points_heading: "Why PICSI Makes a Real Difference in Your IVF Journey",
  procedure_tag: "The PICSI Procedure",
  procedure_heading: "Three Steps Closer to Your Parenthood Journey",
  description: "PICSI enhances IVF by selecting the most mature and healthy sperm using hyaluronic acid binding, improving embryo development and pregnancy rates.",
  content: "<p>PICSI is an advanced form of ICSI that uses hyaluronic acid to identify mature sperm with better DNA integrity, increasing the chances of successful fertilization.</p><p>Our center has seen improved outcomes with PICSI, especially for couples facing challenges with sperm quality.</p>",
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Why Choose PICSI" },
    { id: "procedure", label: "The PICSI Procedure" },
    { id: "stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/picsi/picsibg_icon1.png",
      title: "What PICSI Means",
      description: "PICSI is an advanced fertility technique used to select the healthiest, most mature sperm for fertilization."
    },
    {
      icon: "/treatments/picsi/picsibg_icon2.png",
      title: "DNA Integrity First",
      description: "PICSI helps select sperm with intact DNA, reducing the chances of embryo arrest or implantation failure."
    },
    {
      icon: "/treatments/picsi/picsibg_icon3.png",
      title: "Enhanced Embryo Development",
      description: "By using only mature sperm that naturally bind to hyaluronic acid, the resulting embryos show stronger growth potential."
    },
    {
      icon: "/treatments/picsi/picsibg_icon4.png",
      title: "Improved IVF Outcomes",
      description: "PICSI is shown higher pregnancy and live birth rates in couples with sperm DNA fragmentation or recurrent ICSI failures."
    },
    {
      icon: "/treatments/picsi/picsibg_icon5.png",
      title: "Scientifically Guided Selection",
      description: "Mimics the body's natural process of sperm selection -- choosing those capable of successful fertilization and embryo development."
    },
    {
      icon: "/treatments/picsi/picsibg_icon6.png",
      title: "Who Can Benefit from PICSI?",
      description: "PICSI can benefit couples with sperm DNA issues, repeated IVF/ICSI failures, unexplained infertility, poor embryo quality, or miscarriages."
    }
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Step-by-step selection of healthy sperm for stronger embryos.",
    main_tag: "The PICSI Procedure",
    data: [
    {
    title: "Collection & Preparation",
    description: "Semen samples are collected and processed to separate motile sperm."
    },
    {
    title: "Accurate Diagnosis",
    description: "Sperm are placed in an HA dish, where only DNA-intact ones bind naturally."
    },
    {
    title: "Selection for Injection",
    description: "Bound sperm are carefully picked and injected into the eggs (oocytes) through ICSI."
    },
    {
    title: "Fertilization & Embryo Transfer",
    description: "Resulting embryos are cultured, and the best-quality ones are transferred into the uterus."
    }
    ]
    },
  gradient_data: "82%",
  gradient_text: "Couples undergoing PICSI improved embryo quality and higher implantation success rates",
  points: [
    {
      id: "01",
      title: "DNA Integrity First",
      description: "PICSI helps select sperm with intact DNA, reducing the chances of embryo arrest or implantation failure.",
      image: "/treatments/picsi/picsibg_c1.png"
    },
    {
      id: "02",
      title: "Improved Embryo Growth",
      description: "Using mature sperm that bind to hyaluronic acid leads to stronger embryo growth.",
      image: "/treatments/picsi/picsibg_c2.png"
    },
    {
      id: "03",
      title: "Improved IVF Outcomes",
      description: "PICSI shows higher pregnancy rates in couples with sperm DNA issues or repeated ICSI failures.",
      image: "/treatments/picsi/picsibg_c3.png"
    },
    {
      id: "04",
      title: "Science-Guided Selection",
      description: "It mimics natural sperm selection, choosing those fit for fertilization and embryo development.",
      image: "/treatments/picsi/picsibg_c4.png"
    }
  ],
  bottom_footer :"Your dream of parenthood deserves the best. Our specialists offer advanced fertility treatments for higher success."
}


// LAH Treatment Data
export const lahTreatmentData = {
  slug : "lah",
  category : "advanced",
  title : "Laser Assisted Hatching - LAH",
  hero_title : "Laser Assisted Hatching - LAH",
  hero_button_text : "Watch Now",
  hero_button_link : "/watch-now",
  hero_image : "/treatments/lah/lahbg.png",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "Advanced Treatments", href: "/treatments/advanced" },
    { label: "LAH", href: "/treatments/advanced/lah" }
  ],
  basics_heading: "Why LAH Can Make a Difference in Your Journey",
  points_tag: "Why Choose LAH",
  points_heading: "Precision and care that give every embryo the best start",
  procedure_tag: "The LAH Procedure",
  procedure_heading: "Three steps closer to your parenthood journey",
  description: "LAH uses a precise laser to thin the embryo's outer layer, enhancing implantation success.",
  content: `
    <p>
      Laser Assisted Hatching (LAH) is a technique that uses a laser to create a small opening in the zona pellucida, the outer layer of the embryo, to assist with implantation.
    </p>
    <p>
      This method has been shown to improve pregnancy rates, especially for women with thicker zona pellucida or repeated implantation failures.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Why Choose LAH" },
    { id: "procedure", label: "The LAH Procedure" },
    { id: "stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/lah/lah_icon1.svg",
      title: "What LAH Means",
      description: "Laser Assisted Hatching (LAH) is an advanced technique that helps embryos implant better during IVF."
    },
    {
      icon: "/treatments/lah/lah_icon2.svg",
      title: "Supports Difficult Implantations",
      description: "Helps embryos hatch and attach to the uterus when natural hatching is limited due to a thick or hardened shell."
    },
    {
      icon: "/treatments/lah/lah_icon3.svg",
      title: "Ideal for Women Above 35",
      description: "As age advances, the outer layer of embryos can become tougher; LAH enhances implantation success in such cases."
    },
    {
      icon: "/treatments/lah/lah_icon4.svg",
      title: "Boosts IVF Success Rates",
      description: "Improves pregnancy rates in couples with multiple IVF failures or implantation history."
    },
    {
      icon: "/treatments/lah/lah_icon5.svg",
      title: "Precision & Safety",
      description: "Modern laser technology offers precise, safe, and faster results with minimal embryo handling."
    },
    {
      icon: "/treatments/lah/lah_icon6.svg",
      title: "Boosts Embryo Transfer Results",
      description: "During frozen embryo transfers, the embryo's shell may harden; LAH gently assists hatching to improve implantation success."
    }
  ],
  procedure_steps: [
    {
      title: "Embryo preparation",
      description: "Selection of high-quality embryos for treatment",
      image: "/treatments/lah/lah_t1.png"
    },
    {
      title: "Laser-assisted hatching",
      description: "Controlled thinning or opening of zona pellucida",
      image: "/treatments/lah/lah_t2.png"
    },
    {
      title: "Embryo transfer",
      description: "Placement into uterus for improved implantation",
      image: "/treatments/lah/lah_t3.png"
    }
  ],
  gradient_data: "74%",
  gradient_text: "Couples experience higher implantation rates and improved pregnancy after LAH treatment.",
  points: [
    {
      id: "01",
      title: "Embryo preparation",
      description:"Selection of high-quality embryos for treatment",
      image: "/treatments/lah/lah_c1.png",
    },
    {
      id: "02",
      title: "Laser-assisted hatching",
      description:"Controlled thinning or opening of zona pellucida.",
      image: "/treatments/lah/lah_c2.png",
    },
    {
      id: "03",
      title: "Embryo transfer",
      description:
        "Placement into uterus for improved implantation",
      image: "/treatments/lah/lah_c3.png",
    },
  ],
  bottom_footer : "Your dream of parenthood deserves the best. Our specialists offer advanced fertility treatments for higher success."
}



// Blastocyst Transfer Data
export const blastocystTransferData = {
  slug: "blastocyst-transfer",
  category: "advanced",
  title: "Blastocyst Transfer",
  hero_title: "Blastocyst Transfer",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/blastocyst/blastocystbg.png",
  breadcrumbs: [
    { "label": "Home", "href": "/", id: "home" },
    { "label": "Treatments", "href": "/treatments", id: "treatments" },
    { "label": "Advanced Treatments", "href": "/treatments/advanced", id: "advanced" },
    { "label": "Blastocyst Transfer", "href": "/treatments/advanced/blastocyst-transfer", id: "blastocyst-transfer" }
  ],
  basics_heading: "Why Blastocyst Transfer Can Make a Difference in Your IVF Journey",
  points_tag: "Why Blastocyst Transfer",
  points_heading: "High Pregnancy Rates",
  procedure_tag: "The Blastocyst Transfer",
  procedure_heading: "A journey nurturing just embryo from creation to conception",
  description: "Blastocyst transfer involves transferring embryos at a more advanced stage of development (Day 5), improving implantation rates and pregnancy success.",
  content: "<p>Blastocyst transfer is an advanced IVF technique where embryos are cultured for 5-6 days until they reach the blastocyst stage before being transferred to the uterus.</p><p>This approach allows for better embryo selection and higher implantation rates, making it ideal for patients seeking optimal IVF outcomes.</p>",
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Why Blastocyst Transfer" },
    { id: "procedure", label: "The Blastocyst Transfer" },
    { id: "stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/blastocyst/blastocyst_icon1.png",
      title: "What blastocyst Means",
      description: "A blastocyst is an embryo about 5-6 days after fertilization, developed to the stage where it's ready to implant in the uterus."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon2.png",
      title: "Why It's Performed",
      description: "Only the strongest embryos become blastocysts, and transferring them enhances implantation and pregnancy success."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon3.png",
      title: "Higher Pregnancy Rates",
      description: "Embryos transferred at the blastocyst stage are more likely to implant successfully and result in a healthy pregnancy."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon4.png",
      title: "Better Embryo Selection",
      description: "Culturing embryos for 5-6 days helps identify and select the most viable ones for transfer."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon6.png",
      title: "Lower Risk of Multiple Pregnancies",
      description: "Since the success rate per embryo is higher, fewer embryos are transferred, reducing the risk of twins or triplets."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon5.png",
      title: "Blastocyst Transfer Benefits",
      description: "Blastocyst transfer suits those with good embryos, past IVF failures, or who want higher success with lower multiple pregnancy risk."
    }
  ],
  points: [
    {
      id: "01",
      title: "Cutting-Edge Technology",
      description: "Our labs use time-lapse monitoring and precision culture systems for the best embryo development.",
      image: "/treatments/blastocyst/blastocyst_c1.png"
    },
    {
      id: "02",
      title: "Expert Embryologists",
      description: "Specialists ensure that only the healthiest embryos reach the transfer stage, maximizing success.",
      image: "/treatments/blastocyst/blastocyst_c2.png"
    },
    {
      id: "03",
      title: "Personalized IVF Planning",
      description: "Every treatment plan is tailored to your fertility profile for optimal results.",
      image: "/treatments/blastocyst/blastocyst_c3.png"
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "A journey nurturing your embryo from creation to conception.",
    main_tag: "The Blastocyst Transfer Procedure",
    data: [
      {
        title: "Egg Fertilization",
        description: "Eggs are fertilized in the lab using advanced IVF or ICSI techniques for precise results."
      },
      {
        title: "Embryo Culture",
        description: "Embryos are cultured in specialized incubators for 5-6 days until they reach the blastocyst stage."
      },
      {
        title: "Embryo Selection & Transfer",
        description: "The best-quality blastocyst(s) are selected and gently transferred into the uterus for higher success."
      },
      {
        title: "Implantation & Pregnancy",
        description: "After transfer, the blastocyst implants into the uterine lining, marking the start of pregnancy."
      },
    ]
  },
  gradient_data: "90%",
  gradient_text: "Couples who opted for blastocyst transfer saw embryos cultured for 5 days, developed into a blastocyst with improved implantation rates",
  bottom_footer : "Your dream of parenthood deserves the best. Our specialists offer advanced fertility treatments for higher success."
}

// Sequential Embryo Transfer Data
export const sequentialEmbryoTransferData = {
  slug: "sequential-embryo-transfer",
  category: "advanced",
  title: "Sequential Embryo Transfer",
  hero_title: "Sequential Embryo Transfer",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/sequential/sequentialbg.png",
  breadcrumbs: [
    { "label": "Home", "href": "/", id: "home" },
    { "label": "Treatments", "href": "/treatments", id: "treatments" },
    { "label": "Advanced", "href": "/treatments/advanced", id: "advanced" },
    { "label": "Sequential Embryo Transfer", "href": "/treatments/advanced/sequential-embryo-transfer", id: "sequential-embryo-transfer" }
  ],
  basics_heading: "Advanced IVF protocol to boost implantation and pregnancy success",
  points_tag: "Why Choose Sequential Embryo Transfer",
  points_heading: "Personalized implantation. Better timing. Proven results.",
  procedure_tag: "Steps of Sequential Embryo Transfer",
  procedure_heading: "Two-stage transfer boosting implantation and pregnancy.",
  description: "Sequential Embryo Transfer (SET) involves transferring embryos at two different stages to optimize uterine receptivity and improve implantation rates.",
  content: "<p>Sequential Embryo Transfer is an innovative IVF technique where embryos are transferred in two stages - first at the cleavage stage (Day 2-3) and then at the blastocyst stage (Day 5-6).</p><p>This dual-transfer approach mimics natural conception more closely and can enhance implantation success for patients with previous IVF failures.</p>",
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Why Sequential Transfer" },
    { id: "procedure", label: "Steps of Sequential Embryo Transfer" },
    { id: "stories", label: "Success Stories" }
  ],
  basics: [
    {
    icon: "/treatments/sequential/sequential_icon1.svg",
    title: "Understanding SET",
    description: "Sequential Embryo Transfer (SET) transfers two sets of embryos at different cycle stages to boost implantation and pregnancy success."
    },
    {
    icon: "/treatments/sequential/sequential_icon2.svg",
    title: "Why It's Performed",
    description: "This method implants the best-developed embryos at the optimal time, boosting implantation and pregnancy success."
    },
    {
    icon: "/treatments/sequential/sequential_icon3.svg",
    title: "Higher Implantation Rates",
    description: "By transferring embryos at two stages, SET aligns embryo and uterine timing to enhance implantation."
    },
    {
    icon: "/treatments/sequential/sequential_icon4.svg",
    title: "Better Embryo Utilization",
    description: "Using early and late-stage embryos lets specialists choose the healthiest ones, boosting success rates."
    },
    {
    icon: "/treatments/sequential/sequential_icon5.svg",
    title: "Improved Pregnancy Outcomes",
    description: "Sequential transfer ensures that if the first set fails, the second can still achieve pregnancy in the same cycle."
    },
    {
    icon: "/treatments/sequential/sequential_icon6.svg",
    title: "Who Benefits Most",
    description: "SET is effective for women over 40, those with past IVF failures, or couples seeking higher success without extra cycles."
    }
    ],
  points: [
    {
      id: "01",
      title: "Dual Transfer Precision",
      description: "SET performs two transfers (days 2–3, 5–6) to place embryos at optimal stages, maximizing implantation.",
      image: "/treatments/sequential/sequential_c1.png"
    },
    {
      id: "02",
      title: "Better Embryo-Uterine Sync",
      description: "Two-point embryo transfer aligns growth with the uterus, boosting success.",
      image: "/treatments/sequential/sequential_c2.png"
    },
    {
      id: "03",
      title: "Better Results for Cases",
      description: "Ideal for women 40+ or with past IVF failures, SET boosts success and reduces extra cycles.",
      image: "/treatments/sequential/sequential_c3.png"
    }
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Two-stage transfer boosting implantation and pregnancy.",
    main_tag: "Steps of Sequential Embryo Transfer",
    data: [
      {
        title: "Dual Transfer Plan",
        description: "Two embryo sets are scheduled for transfer on days 2–3 and 5–6 of the same cycle."
      },
      {
        title: "Early Transfer",
        description: "The first set of good-quality embryos is transferred after 2–3 days for early implantation."
      },
      {
        title: "Mature Transfer",
        description: "The second set, transferred after 5–6 days, reaches the blastocyst stage for higher success."
      },
      {
        title: "Better Uterine Response",
        description: "Mature embryos release cytokines that improve uterine receptivity and implantation."
      }
    ]
  },
  gradient_data: "80%",
  gradient_text: "Patients who undergo higher embryo implantation rates through dual stage transfer, bringing advanced embryo selection",
  bottom_footer : "Your dream of parenthood deserves the best. Our specialists offer advanced fertility treatments for higher success."
}


// PGD / PGS / PGT-A Treatment Data
export const pgdTreatmentData = {
  slug: "pgd-pgs-pgt-a",
  category: "advanced",
  title: "PGD/PGS/PGT-A – Preimplantation Genetic Testing",
  hero_title: "PGD/PGS/PGT-A",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/pgd/pgd-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "Advanced", href: "/treatments/advanced" },
    { label: "PGD/PGS/PGT-A", href: "/treatments/advanced/pgd-pgs-pgt-a" },
  ],
  basics_heading: "Why Preimplantation Genetic Testing Matters in IVF",
  points_tag: "Advanced screening: Healthier results. Informed choices.",
  points_heading: "Advanced screening. Healthier results. Informed choices.",
  procedure_tag: "Steps of Preimplantation Genetic Testing",
  procedure_heading: "Steps of Preimplantation Genetic Testing",
  description:
    "Preimplantation genetic testing screens embryos for genetic disorders and chromosomal abnormalities before transfer, increasing the chances of a healthy pregnancy.",
  content: `
    <p>
      PGD/PGS/PGT-A are advanced genetic screening techniques that analyze embryos
      before implantation. These tests help identify genetic disorders, chromosomal
      abnormalities, and ensure the selection of the healthiest embryos for transfer.
    </p>
    <p>
      At our center, genetic testing has significantly improved success rates and
      reduced the risk of genetic disorders in newborns.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "types-of-testing", label: "Types of Testing" },
    { id: "why-choose", label: "Why Choose Genetic Testing" },
    { id: "stories", label: "Success Stories" },
  ],
  
  // New section for genetic testing cards
  genetic_testing_cards: {
    tag: "Types of Testing",
    heading: "Genetic tests ensure healthy embryos.",
    cards: [
      {
        abbreviation: "PGD",
        title: "Preimplantation Genetic Diagnosis",
        description: "Detects specific genetic disorders carried by parents."
      },
      {
        abbreviation: "PGS / PGT-A",
        title: "Preimplantation Genetic Screening / Testing for Aneuploidy",
        description: "Checks for chromosomal abnormalities to ensure embryo health."
      }
    ]
  },

  basics: [
    {
      icon: "/treatments/pgd/pgd_icon1.svg",
      title: "What It Means",
      description: "Preimplantation Genetic Testing (PGT) is a method used to identify genetic or chromosomal defects in embryos before implantation."
    },
    {
      icon: "/treatments/pgd/pgd_icon2.svg",
      title: "Why It's Done",
      description: "PGT helps select only healthy embryos for transfer, improving pregnancy success and minimizing the risk of inherited disorders."
    },
    {
      icon: "/treatments/pgd/pgd_icon3.svg",
      title: "When It's Recommended",
      description: "Ideal for couples with known genetic disorders, recurrent IVF failures, or women above 35 years of age."
    },
    {
      icon: "/treatments/pgd/pgd_icon4.svg",
      title: "What It Helps Prevent",
      description: "Reduces risks of miscarriages, chromosomal abnormalities, and hereditary diseases in offspring."
    },
    {
      icon: "/treatments/pgd/pgd_icon5.svg",
      title: "Success Outcome",
      description: "Enables higher pregnancy rates and healthier babies through precision embryo selection."
    },
    {
      icon: "/treatments/pgd/pgd_icon6.svg",
      title: "Long-Term Advantage",
      description: "Supports informed family planning by preventing the transmission of genetic conditions to future generations."
    },
  ],

  procedure_steps: [
    {
      "step": "01",
      "title": "Embryo Culturing & Biopsy",
      "description": "Embryos are developed to the blastocyst stage (5-6 days), and a few cells are gently extracted for testing without affecting embryo quality.",
      "image": "/treatments/pgd/pgd_t1.png"
    },
    {
      "step": "02",
      "title": "Genetic Screening",
      "description": "Cells are analyzed using advanced sequencing to detect abnormalities.",
      "image": "/treatments/pgd/pgd_t2.png"
    },
    {
      "step": "03",
      "title": "Healthy Embryo Transfer",
      "description": "Only normal embryos are selected and transferred for better success and healthier pregnancies.",
      "image": "/treatments/pgd/pgd_t3.png"
    }
  ],

  gradient_data: "85%",
  gradient_text: "Couples experience improved pregnancy outcomes with genetically screened embryos. Healthy embryos. Healthier pregnancies.",
  
  points: [
    {
      id: "01",
      title: "Genetic Accuracy",
      description:"Detects chromosomal abnormalities early, ensuring only genetically normal embryos are transferred.",
            image: "/treatments/pgd/pgd_c1.png",
    },
    {
      id: "02",
      title: "Expert Embryologists",
      description:"Performed by experts using NGS and advanced biopsy techniques.",
            image: "/treatments/pgd/pgd_c2.png",
    },
    {
      id: "03",
      title: "Personalized Genetic Care",
      description:
        "Tailored testing protocols designed for couples’ unique fertility and genetic profiles.",
      image: "/treatments/pgd/pgd_c3.png",
    },
  ],
};

// Class-1000 Modular Lab Data
export const class1000ModularLabData = {
  slug: "class-1000-modular-lab",
  category: "advanced",
  title: "Class-1000 Modular Lab",
  hero_title: "Class-1000 Modular Lab",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/modular-lab/lab-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Advanced", href: "/treatments/advanced", id: "advanced" },
    { label: "Class-1000 Modular Lab", href: "/treatments/advanced/class-1000-modular-lab", id: "class-1000-modular-lab" },
  ],
  basics_heading: "Why a Class-1000 Modular Lab Matters in IVF",
  points_tag: "Why Choose a Class-1000 Modular Lab",
  points_heading: "Advanced cleanroom ensures optimal embryo growth.",
  procedure_tag: "Class-1000 Lab Features",
  procedure_heading: "Class-1000 Lab ensures sterile optimal embryo environment.",
  description:
    "Class-1000 Modular Lab provides a controlled, sterile environment with advanced air filtration to ensure optimal embryo development and higher IVF success rates.",
  content: `
    <p>
      Our Class-1000 Modular Lab maintains the highest standards of cleanliness and environmental control,
      crucial for embryo culture and development. The lab features HEPA filtration, positive pressure systems,
      and strict temperature and humidity control.
    </p>
    <p>
      This advanced infrastructure ensures that embryos develop in optimal conditions, significantly
      improving fertilization and pregnancy success rates.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "procedure", label: "Lab Features" }, // Maps to procedure steps
    { id: "why-choose", label: "Why It Matters" }, // Maps to why section
    { id: "stories", label: "Success Stories" },
  ],
  basics: [
    {
      icon: "/treatments/modular-lab/lab_icon1.png",
      title: "What It Means",
      description:"A Class-1000 Modular Lab maintains a sterile, contaminant-free environment for embryo growth."
        },
    {
      icon: "/treatments/modular-lab/lab_icon2.png",
      title: "Why It's Important",
      description:
"In IVF, even tiny particles can affect embryos. A Class-1000 lab ensures clean, optimal air."    },
    {
      icon: "/treatments/modular-lab/lab_icon3.png",
      title: "How It Works",
      description:
"The lab filters air to limit particle count to fewer than 1,000 particles per cubic foot — far cleaner than regular environments."    },
    {
      icon: "/treatments/modular-lab/lab_icon4.png",
      title: "Where It's Used",
      description:
"Used during critical stages like fertilization, culture, and embryo transfer to protect embryo integrity."    },
    {
      icon: "/treatments/modular-lab/lab_icon5.png",
      title: "End Result",
      description:
"Creates ideal lab conditions for successful fertilization, healthier embryos, and higher pregnancy success rates."   },
    {
      icon: "/treatments/modular-lab/lab_icon6.png",
      title: "Added Advantage",
      description:"Ensures long-term equipment reliability and consistent laboratory performance, maintaining the highest IVF safety and success standards."    },
  ],
  points: [
    {
      id: "01",
      title: "Precision-Controlled",
      description:"Maintains ISO air purity with continuous monitoring of temperature, humidity, and particles.",
      image: "/treatments/modular-lab/lab_c1.png",
    },
    {
      id: "02",
      title: "High-Tech Filtration",
      description:"High-Tech Filtration HEPA filters remove 99.97% of contaminants, ensuring sterile embryology conditions.",
      image: "/treatments/modular-lab/lab_c2.png",
    },
    {
      id: "03",
      title: "FDA & ISO Materials",
      description:"Built with FDA-approved materials and ISO 5/6 standards for IVF labs.",
      image: "/treatments/modular-lab/lab_c3.png",
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Class-1000 Lab ensures sterile optimal embryo environment.",
    main_tag: "Steps of Lab Operation Process",
    data: [
      {
        title: "Air Filtration Setup",
        description:
          "Air passes through multi-stage HEPA filters to maintain ultra-clean conditions.",
      },
      {
        title: "Embryo Culture Environment",
        description:"Temperature, humidity, and air purity are carefully regulated for stable embryo growth.",    },
      {
        title: "Ongoing Quality Checks",
        description:"Regular monitoring ensures zero contamination and compliance with ISO cleanroom standards."
      },
      {
        title: "Advanced Safety Protocols",
        description: "Strict handling and sterilization procedures protect embryos and ensure a contamination-free workspace."
      },
    ],
  },
  gradient_data: "99.97%",
  gradient_text:
    "Purity maintained via advanced filtration and controlled air, ensuring safe embryo development.",
};

// Trigas Incubators Data
export const trigasIncubatorsData = {
  slug: "trigas-incubators",
  category: "advanced",
  title: "Trigas Incubators",
  hero_title: "Trigas Incubators",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/trigas/trigas-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Advanced", href: "/treatments/advanced", id: "advanced" },
    { label: "Trigas Incubators", href: "/treatments/advanced/trigas-incubators", id: "trigas-incubators" },
  ],
  basics_heading: "Why Trigas Incubators Are Essential in IVF",
  points_tag: "Why Choose Trigas Incubators",
  points_heading: "Trigas Incubators ensure precise, stable embryo growth.",
  procedure_tag: "Steps of Trigas Incubator Process",
  procedure_heading: "Ensuring stable, safe, and precise embryo growth.",
  description:
    "Trigas Incubators maintain optimal oxygen, CO2, and nitrogen levels to create a womb-like environment for embryo development, maximizing IVF success.",
  content: `
    <p>
      Trigas Incubators use a three-gas system (oxygen, carbon dioxide, and nitrogen) to precisely
      control the embryo culture environment. This technology mimics the natural conditions of the
      human body, providing the ideal atmosphere for embryo growth.
    </p>
    <p>
      By maintaining stable gas concentrations and temperature, trigas incubators significantly
      improve embryo quality and development rates, leading to higher pregnancy success.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "procedure", label: "Why Choose Trigas Incubators" }, // Maps to procedure steps
    { id: "why-choose", label: "Steps of Embryo Incubation Process" }, // Maps to why section
    { id: "stories", label: "Success Stories" },
  ],
  basics: [
    {
      icon: "/treatments/trigas/trigas_icon1.png",
      title: "What It Is",
      description:
        "Advanced incubators controlling temperature, humidity, and key gases (O2, CO2, N2) for embryo growth.",
    },
    {
      icon: "/treatments/trigas/trigas_icon2.png",
      title: "How It Differs",
      description:
        "Unlike over CO2-only incubators, Trigas balances all gases for stable conditions.",
    },
    {
      icon: "/treatments/trigas/trigas_icon3.png",
      title: "Why It Matters",
      description:
        "Creates low-stress, natural-like environment for better embryo quality and implantation potential.",
    },
    {
      icon: "/treatments/trigas/trigas_icon4.png",
      title: "Where It's Used",
      description:
        "Used in embryo culture to mimic womb conditions for optimal development.",
    },
    {
      icon: "/treatments/trigas/trigas_icon5.png",
      title: "Result",
      description:
        "Reduced contamination, improved embryo viability, and higher IVF success.",
    },
    {
      icon: "/treatments/trigas/trigas_icon6.png",
      title: "Unique Advantage",
      description:
        "Lower oxygen levels minimize oxidative stress, supporting healthier development.",
    },
  ],
  points: [
    {
      id: "01",
      title: "Advanced Gas Control",
      description:
        "Stable Conditions. Supports AH Outcomes.",
      image: "/treatments/trigas/trigas_c1.png",
    },
    {
      id: "02",
      title: "Stable Conditions",
      description:
        "Maintains precise conditions, preventing fluctuations that affect embryos.",
      image: "/treatments/trigas/trigas_c2.png",
    },
    {
      id: "03",
      title: "Superior IVF Outcomes",
      description:
        "Supports consistent growth, improving embryo quality and success rates.",
      image: "/treatments/trigas/trigas_c3.png",
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Ensuring stable, safe, and precise embryo growth.",
    main_tag: "Steps of Trigas Incubator Process",
    data: [
      {
        title: "Controlled Environment Setup",
        description:
          "Incubators are configured to optimal temperature, humidity, and gas composition before embryo placement.",
      },
      {
        title: "Embryo Culture Phase",
        description:
          "Embryos are placed inside individual chambers to minimize air exposure, prevent contamination.",
      },
      {
        title: "Continuous Monitoring",
        description:
          "Real-time tracking of temperature, gas balance, and humidity ensures embryos develop under ideal conditions.",
      },
      {
        title: "Secure Data & System Control",
        description:
          "Advanced digital systems monitor and log every stage, ensuring precision, safety, and full traceability of embryo development.",
      },
    ],
  },
  gradient_data: "95%",
  gradient_text:
    "environmental stability ensures consistent lab conditions for optimal embryo growth and IVF success.",
  our_story: "From Hope to Happiness Watch Now!"
};

// Witness System Data
export const witnessSystemData = {
  slug: "witness-system",
  category: "advanced",
  title: "Advanced Technology -<br/> Witness System",
  hero_title: "Advanced Technology -<br/> Witness System",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/witness/witness-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Advanced", href: "/treatments/advanced", id: "advanced" },
    { label: "Advanced Technology - Witness system", href: "/treatments/advanced/witness-system", id: "witness-system" },
  ],
  basics_heading: "Why the Witness System Is Vital in IVF",
  points_tag: "Why Choose Witness System",
  points_heading: "Digital tracking ensures precise, safe IVF.",
  procedure_tag: "Steps of Witness System Process",
  procedure_heading: "Smart tracking ensures zero human error.",
  description:
    "Witness System uses RFID technology to track and verify every step of the IVF process, ensuring complete safety and eliminating human error.",
  content: `
    <p>
      The Witness System is an advanced RFID-based tracking technology that monitors and verifies
      every critical step in the IVF laboratory. From egg retrieval to embryo transfer, the system
      ensures that the right samples are matched to the right patients at all times.
    </p>
    <p>
      This electronic witnessing system provides an additional layer of safety and quality control,
      giving patients complete confidence and peace of mind throughout their IVF journey.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "procedure", label: "Why Choose the Witness System" }, // Maps to procedure steps
    { id: "why-choose", label: "Steps of the Witness System Process" }, // Maps to why section
    { id: "stories", label: "Success Stories" },
  ],
  basics: [
    {
      icon: "/treatments/witness/witness_icon1.png",
      title: "What It Is",
      description:
        "The Witness System digitally tracks all samples, gametes, and embryos during IVF.",
    },
    {
      icon: "/treatments/witness/witness_icon2.png",
      title: "Why It's Needed",
      description:
        "Prevents errors, ensures traceability, and handles each patient's material safely.",
    },
    {
      icon: "/treatments/witness/witness_icon3.png",
      title: "How It Works",
      description:
        "Each sample has an electronic ID, with sensors ensuring only one patient's material is processed at a time.",
    },
    {
      icon: "/treatments/witness/witness_icon4.png",
      title: "When It's Used",
      description:
        "From egg collection to embryo transfer — every critical step is verified and recorded through the Witness System.",
    },
    {
      icon: "/treatments/witness/witness_icon5.png",
      title: "Outcome",
      description:
        "Improved accuracy, enhanced trust, and peace of mind knowing that every step of your IVF treatment is fully protected.",
    },
    {
      icon: "/treatments/witness/witness_icon6.png",
      title: "Added Advantage",
      description:
        "Ensures compliance with international safety standards and boosts patient confidence through transparent monitoring.",
    },
  ],
  points: [
    {
      id: "01",
      title: "Total Safety & Accuracy",
      description:
        "Ensures 100% traceability of samples and eliminates human errors or mix-ups during IVF procedures.",
      image: "/treatments/witness/witness_c1.png",
    },
    {
      id: "02",
      title: "Smart Real-Time Monitoring",
      description:
        "Tracks each step with ID tags, ensuring one patient’s material at a time.",
      image: "/treatments/witness/witness_c2.png",
    },
    {
      id: "03",
      title: "Trust & Transparency",
      description:
        "Meets global IVF standards, ensuring confidence and peace of mind.",
      image: "/treatments/witness/witness_c3.png",
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Smart tracking ensures zero human error.",
    main_tag: "Steps of Lab Operation Process",
    data: [
      {
        title: "Identity Tagging",
        description:
          "Each sample is assigned a unique electronic ID, enabling real-time tracking throughout the entire IVF process.",
      },
      {
        title: "Automated Verification",
        description:
          "Every handling step is validated electronically to ensure correct matching of gametes and embryos.",
      },
      {
        title: "Continuous Monitoring",
        description:
          "The system tracks every activity until embryo transfer, preventing human error and maintaining complete accuracy.",
      },
      {
        title: "Secure Data Recording",
        description:
          "All tracking information is digitally stored, ensuring full traceability, accountability, and compliance with IVF safety standards.",
      },
    ],
  },
  gradient_data: "100%",
  gradient_text:
    "Accuracy ensures all samples and embryos verified, with zero errors and full patient confidence.",
  our_story: "From Hope to Happiness Watch Now!"
};



// Cryopreservation Data
export const cryopreservationData = {
  slug: "cryopreservation",
  category: "advanced",
  title: "Cryopreservation of Human <br/> Gametes",
  hero_title: "Cryopreservation of Human <br/> Gametes",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/cryopreservation/cryo-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Advanced Treatment ", href: "/treatments/advanced", id: "advanced" },
    { label: "Advanced Technology - Cryopreservation", href: "/treatments/advanced/cryopreservation", id: "cryopreservation" },
  ],
  basics_heading: "Why Cryopreservation Is Important in Fertility Care",
  points_tag: "Why Choose Cryopreservation at Progenesis",
  points_heading: "Preserving fertility safely, effectively, and for longer.",
  procedure_tag: "Steps of Cryopreservation Process",
  procedure_heading: "Safely freezing life for future possibilities.",
  description:
    "Cryopreservation safely freezes and stores eggs, sperm, or embryos for future use, preserving fertility options for medical, personal, or family planning reasons.",
  content: `
    <p>
      Cryopreservation uses advanced vitrification technology to rapidly freeze reproductive cells
      and embryos at ultra-low temperatures (-196°C), preventing ice crystal formation and preserving
      their viability for years or even decades.
    </p>
    <p>
      This technique offers individuals and couples the flexibility to preserve their fertility for
      future family building, whether due to medical treatments, career planning, or personal choice.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "procedure", label: "Why Choose Cryopreservation at Progenesis" }, // Maps to procedure steps
    { id: "why-choose", label: "Steps of the Cryopreservation Process" }, // Maps to why section
    { id: "stories", label: "Success Stories" },
  ],
  basics: [
    {
      icon: "/treatments/cryopreservation/cryo_icon1.png",
      title: "What It Is",
      description:"Cryopreservation freezes sperm or eggs at ultra-low temperatures for future use.",
        },
    {
      icon: "/treatments/cryopreservation/cryo_icon2.png",
      title: "Why It's Needed",
      description:"The gametes are cooled using advanced vitrification methods that prevent ice formation, maintaining their structure and viability for years."    },
    {
      icon: "/treatments/cryopreservation/cryo_icon3.png",
      title: "Why It’s Done",
      description:"Ideal for individuals or couples who want to delay pregnancy, preserve fertility before medical treatments, or use donor gametes later.",
    },
    {
      icon: "/treatments/cryopreservation/cryo_icon4.png",
      title: "Who It Helps",
      description:"Men with low sperm counts, women with limited egg reserve, or couples undergoing IVF who wish to save embryos for future cycles.",
    },
    {
      icon: "/treatments/cryopreservation/cryo_icon5.png",
      title: "Result",
      description:"Cryopreserved samples retain their fertility potential even after thawing — offering flexibility, reassurance, and hope."    },
    {
      icon: "/treatments/cryopreservation/cryo_icon6.png",
      title: "Added Advantage",
      description:"A proven, safe, and effective method for preserving reproductive cells without compromising quality or success rates."    },
  ],
  points: [
    {
      id: "01",
      title: "Advanced Vitrification",
      description:
        "Rapid freezing prevents ice formation and preserves cell integrity.",
      image: "/treatments/cryopreservation/cryo_c1.png",
    },
    {
      id: "02",
      title: "Safe Long-Term Storage",
      description:
        "Samples are securely stored in liquid nitrogen under strict monitoring.",
      image: "/treatments/cryopreservation/cryo_c2.png",
    },
    {
      id: "03",
      title: "High Post-Thaw Survival",
      description:"Ensures excellent quality and fertility potential for future use.",
      image: "/treatments/cryopreservation/cryo_c3.png",
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Safely freezing life for future possibilities.",
    main_tag: "Steps of Cryopreservation Process",
    data: [
      {
        title: "Gamete Collection",
        description:
          "Eggs or sperm are collected and evaluated for quality before freezing.",
      },
      {
        title: "Vitrification (Freezing)",
        description:
          "Gametes are rapidly frozen using cryoprotectants to prevent ice damage.",
      },
      {
        title: "Storage & Preservation",
        description:
          "Samples are stored in liquid nitrogen at -196°C, maintaining viability for years.",
      },
      {
        title: "Thawing & Quality Assessment",
        description:
          "When ready, samples are carefully thawed and assessed for quality before being used in IVF or other fertility treatments.",
      },
    ],
  },
  gradient_data: "98%",
  gradient_text:
    "Post-thaw viability ensures cryopreserved eggs, sperm, and embryos retain quality for successful future IVF outcomes.",
  success_stories: "From Hope to Happiness Watch Now!",
  success_tag:"Success Stories",
};




// Ovulation Induction Data
export const ovulationInductionData = {
  slug: "ovulation-induction",
  category: "fertility-treatments",
  title: "Ovulation Induction –<br/> Stimulating Egg Release",
  hero_title: "Ovulation Induction –<br/> Stimulating Egg Release",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/ovulation-induction/ovulation-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Infertility Treatments", href: "/treatments/infertility", id: "infertility" },
    { label: "Ovulation Induction", href: "/treatments/infertility/ovulation-induction", id: "ovulation-induction" },
  ],
  path_section :{
    tag:"Know the Basics",
    mainHeading: "What Is Ovulation Induction?",
    subHeading:"Regulate cycles naturally.",
    description1:"Ovulation Induction is a fertility treatment that uses oral medications or hormone injections to stimulate egg development and release during a woman’s menstrual cycle.",
    description2:"It helps women who experience irregular or absent ovulation achieve natural conception or prepare for assisted fertility treatments such as IUI or IVF."
  },
  basics_heading: "What Is Ovulation Induction?",
  points_tag: "Why Choose Ovulation Induction at Progenesis",
  points_heading: "Safe. Personalized. Proven results you can trust.",
  procedure_tag: "Guided stimulation for natural conception success",
  procedure_heading: "Safe, personalized, and proven treatment trusted by fertility experts.",
  description:
    "Ovulation Induction helps women who have irregular or absent ovulation to produce and release eggs naturally. Using mild hormonal medications, this treatment regulates menstrual cycles, increases ovulation frequency, and improves chances of conception — either naturally or with fertility treatments like IUI or IVF.",
  content: `
    <p>
      Ovulation Induction is a carefully monitored treatment that stimulates the ovaries to release mature eggs.
      It is ideal for women with irregular cycles, PCOS, or unexplained infertility who struggle with regular ovulation.
    </p>
    <p>
      Through expert supervision and customized medication, ovulation is triggered naturally, improving the likelihood
      of conception with minimal intervention and side effects.
    </p>
  `,
  // Updated categories for consistent and unique navigation IDs
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Who Can Benefit?" }, // Maps to "Who Can Benefit?" section
    { id: "procedure", label: "Why Choose Ovulation Induction at Progenesis" }, // Maps to procedure steps
    { id: "steps", label: "Steps of the Ovulation Induction Process" }, // Maps to procedure steps
    { id: "success-rate", label: "Success Rate" }, // Unique tab for this treatment
  ],
  who_can_benefit:{
    tag:"Who Can Benefit?",
    title:"Ideal for those facing ovulation challenges.",
    cards:[
      {
        icon: "/treatments/ovulation-induction/icon1.png",
        title: "Women with irregular or absent ovulation",
      },
      {
        icon: "/treatments/ovulation-induction/icon2.png",
        title: "Those with polycystic ovary syndrome (PCOS)",
      },
      {
        icon: "/treatments/ovulation-induction/icon3.png",
        title: "Women preparing for IUI or IVF cycles",
      },
      {
        icon: "/treatments/ovulation-induction/icon4.png",
        title: "Couples struggling with unexplained infertility",
      },
    ]
  },
  basics: null,
  points: [
    {
      id: "01",
      title: "Expert Monitoring",
      description:
        "Fertility specialists track follicle growth and hormones to ensure optimal egg release and minimize risks.",
      image: "/treatments/ovulation-induction/ovulation_c1.png",
    },
    {
      id: "02",
      title: "Personalized Medication",
      description:
        "Treatment is customized to your cycle and hormonal profile for best results.",
      image: "/treatments/ovulation-induction/ovulation_c2.png",
    },
    {
      id: "03",
      title: "Holistic Care",
      description:
        "We combine medical precision with nutrition and stress guidance to support healthy ovulation.",
      image: "/treatments/ovulation-induction/ovulation_c3.png",
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Guided stimulation for natural conception success.",
    main_tag: "Step-by-Step Treatment Process",
    data: [
      {
        title: "Baseline Evaluation",
        description:"Ultrasound and hormone testing are performed to assess the ovaries and rule out existing conditions."
      },
      {
        title: "Medication Phase",
        description:"Fertility medications are administered during the early days of your menstrual cycle to stimulate egg production."
      },
      {
        title: "Monitoring & Ovulation Trigger",
        description:"Ultrasound and hormone tracking help determine the ideal time for egg release; an ovulation trigger injection may be given for precision."
      },
      {
        title: "Timed Intercourse or IUI",
        description:"Once ovulation is confirmed, couples are guided on the best time for conception or IUI scheduling."
      },
    ],
  },
  gradient_data: "78%",
  gradient_text:
    "Success in Regulating Ovulation: Most women at Progenesis achieve regular cycles within few treatments, improving conception chances.",
    success_stories: "From Hope to Happiness Watch Now!",
    success_tag:"Success Stories",
};




// Artificial Insemination (IUI) Treatment Data
export const artificialInseminationData = {
  slug: "artificial-insemination-iui-treatment",
  category: "fertility-treatments",
  title: "Artificial Insemination – IUI <br/> Treatment",
  hero_title: "Artificial Insemination – IUI <br/> Treatment",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/iui/iui-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Infertility Treatments", href: "/treatments/infertility", id: "infertility" },
    { label: "Artificial Insemination – IUI Treatment", href: "/treatments/infertility/artificial-insemination-iui-treatment", id: "artificial-insemination-iui-treatment" },
  ],
  path_section: {
    tag: "Overview",
    mainHeading: "What Is IUI Treatment?",
    subHeading: "Simple. Targeted. Effective.",
    description1:
      "Intrauterine Insemination (IUI) is a simple and minimally invasive fertility treatment that involves placing processed sperm directly into the uterus around the time of ovulation.",
    description2:
      "This technique increases the chances of sperm reaching the egg, making fertilization more likely, especially for couples facing mild fertility issues.",
  },
  basics_heading: "What Is IUI Treatment?",
  points_tag: "Why Choose IUI at Progenesis",
  points_heading: "Expert care. Proven success. Real results.",
  procedure_tag: "Steps of the IUI Procedure",
  procedure_heading: "Precise process for natural conception success.",
  description:
    "Artificial Insemination (IUI) at Progenesis helps couples conceive naturally through a simple, well-timed, and medically supervised procedure. The process involves preparing and placing healthy sperm into the uterus, ensuring the best chances for fertilization and pregnancy in a natural cycle or with mild stimulation.",
  content: `
    <p>
      IUI is often the first-line treatment for couples experiencing unexplained infertility, mild male factor infertility, or issues related to cervical mucus. It is a safe, targeted, and effective fertility solution that helps many couples achieve pregnancy without complex procedures.
    </p>
    <p>
      At Progenesis, we use advanced monitoring and precision timing to maximize IUI success rates while ensuring the utmost comfort and care throughout your journey.
    </p>
  `,
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Who", label: "Who Can Benefit?" },
    { id: "Process", label: "Why Choose IUI at Progenesis" },
    { id: "Steps", label: "Steps of the IUI Procedure" },
    { id: "Success", label: "Success Rate" },
  ],
  who_can_benefit: {
    tag: "Who Can Benefit?",
    title: "Helping couples overcome common fertility barriers.",
    cards: [
      {
        icon: "/treatments/iui/icon1.png",
        title: "Women with ovulation issues or mild infertility",
      },
      {
        icon: "/treatments/iui/icon2.png",
        title: "Men with low sperm count or mild motility problems",
      },
      {
        icon: "/treatments/iui/icon3.png",
        title: "Couples with unexplained infertility",
      },
      {
        icon: "/treatments/iui/icon4.png",
        title: "Women with cervical mucus abnormalities",
      },
    ],
  },
  basics: null,
  points: [
    {
      id: "01",
      title: "Personalized Fertility Care",
      description:"Customized treatment plans designed by expert fertility specialists.",
      image: "/treatments/iui/iui_c1.png",
    },
    {
      id: "02",
      title: "Advanced Lab Techniques",
      description:"State-of-the-art sperm preparation and insemination methods.",
      image: "/treatments/iui/iui_c2.png",
    },
    {
      id: "03",
      title: "Safe & Painless Procedure",
      description:"Quick and comfortable, with minimal side effects or downtime.",
      image: "/treatments/iui/iui_c3.png",
    },
  ],
  procedure_no_image_steps: null,
  procedure_steps: [
    {
      image:"/treatments/iui/iui_t1.png",
      title: "Ovulation Monitoring",
      description:"The woman’s menstrual cycle is tracked using scans and hormone tests to identify the fertile window."
    },
    {
      image:"/treatments/iui/iui_t2.png",
      title: "Sperm Preparation",
      description:"The semen sample is washed and processed to isolate the healthiest, most motile sperm."
    },
    {
      image:"/treatments/iui/iui_t3.png",
      title: "Insemination Process",
      description:"The prepared sperm is gently placed into the uterus using a fine catheter at the optimal time for conception."
    },
  ],
  gradient_data: "20%",
  gradient_text:
    "Pregnancy success per cycle — achieved through advanced monitoring, precise timing, and expert sperm selection at Progenesis.",
    success_stories: "From Hope to Happiness Watch Now!",
    success_tag:"Success Stories",
};



// IVF Treatment Data
export const ivfTreatmentData = {
  slug: "ivf-treatment",
  category: "fertility-treatments",
  title: "IVF – Comprehensive In Vitro <br/> Fertilization Treatment",
  hero_title: "IVF – Comprehensive In Vitro <br/> Fertilization Treatment",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/ivf/ivf-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Infertility Treatments", href: "/treatments/infertility", id: "infertility" },
    { label: "IVF Treatment", href: "/treatments/infertility/ivf-treatment", id: "ivf-treatment" },
  ],
  path_section: {
    tag: "Know the Basics",
    mainHeading: "What is IVF Treatment?",
    subHeading: "Advanced. Precise. Hopeful.",
    description1:
      "In Vitro Fertilization (IVF) is an advanced fertility treatment where eggs are retrieved from a woman’s ovaries and fertilized with sperm in a laboratory. The resulting healthy embryos are then transferred into the uterus, increasing the chances of pregnancy.",
    description2:
      "IVF is ideal for couples facing severe infertility factors such as blocked fallopian tubes, low sperm count, endometriosis, or unexplained infertility.",
  },
  basics_heading: "What is IVF Treatment?",
  points_tag: "Why Choose IVF at Progenesis",
  points_heading: "Innovation, expertise, and empathy, all in one place.",
  procedure_tag: "Steps of IVF Process",
  procedure_heading: "Science meets precision for successful conception.",
  description:
    "IVF at Progenesis offers couples the most advanced and comprehensive fertility treatment available. Through expert care, cutting-edge technology, and personalized protocols, we help overcome complex fertility challenges and bring hope to families worldwide.",
  content: `
    <p>
      IVF is recommended for couples facing male or female infertility, advanced maternal age, blocked fallopian tubes,
      endometriosis, or unexplained infertility. With decades of research and innovation, IVF has become the gold standard
      in assisted reproduction.
    </p>
    <p>
      At Progenesis, we combine state-of-the-art laboratories, experienced embryologists, and compassionate care to maximize
      your chances of success while ensuring safety and comfort throughout your journey.
    </p>
  `,
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Who", label: "Who Can Benefit from IVF" },
    { id: "Process", label: "Why Choose IVF at Progenesis" },
    { id: "Steps", label: "Steps of the IVF Process" },
    { id: "Success", label: "Success Rate" },
  ],
  who_can_benefit: {
    tag: "Who Can Benefit?",
    title: "Expanding possibilities for every parenthood journey.",
    cards: [
      {
        icon: "/treatments/ivf/icon1.png",
        title: "Women with blocked or damaged fallopian tubes",
      },
      {
        icon: "/treatments/ivf/icon2.png",
        title: "Men with low sperm count or motility issues",
      },
      {
        icon: "/treatments/ivf/icon3.png",
        title: "Women with endometriosis or ovarian disorders",
      },
      {
        icon: "/treatments/ivf/icon4.png",
        title: "Couples who have had failed IUI or other treatments",
      },
    ],
  },
  basics: null,
  points: [
    {
      id: "01",
      title: "Advanced Labs",
      description:"Equipped with advanced embryology and culture systems.",
      image: "/treatments/ivf/ivf_c1.png",
    },
    {
      id: "02",
      title: "High Success Rates",
      description:"Personalized protocols and skilled embryologists ensure optimal outcomes.",
      image: "/treatments/ivf/ivf_c2.png",
    },
    {
      id: "03",
      title: "Expert Team",
      description:"Fertility specialists with years of IVF expertise and patient-centered care.",
      image: "/treatments/ivf/ivf_c3.png",
    },
  ],
  procedure_no_image_steps: null,
  procedure_steps: [
    {
      image: "/treatments/ivf/ivf_t1.png",
      title: "Ovarian Stimulation & Monitoring",
      description:"Hormonal medications are administered to stimulate egg production, and regular ultrasounds track follicle growth."
    },
    {
      image: "/treatments/ivf/ivf_t2.png",
      title: "Egg Retrieval & Fertilization",
      description:"Mature eggs are collected and fertilized with sperm in a controlled lab environment."
    },
    {
      image: "/treatments/ivf/ivf_t3.png",
      title: "Embryo Culture & Transfer",
      description:"Healthy embryos are cultured for 3–5 days and then transferred into the uterus for implantation.",
    },
  ],
  gradient_data: "60%",
  gradient_text:
    "Success in IVF cycles: Progenesis combines personalized protocols, advanced labs, and expert embryologists for top results in India.",
};




// IVF-ICSI Treatment Data
export const ivfIcsiTreatmentData = {
  slug: "ivf-icsi-intracytoplasmic-sperm-injection",
  category: "fertility-treatments",
  title: "IVF-ICSI – Intracytoplasmic <br/> Sperm Injection",
  hero_title: "IVF-ICSI – Intracytoplasmic <br/> Sperm Injection",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/ivf-icsi/ivf-icsi-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Infertility Treatments", href: "/treatments/infertility", id: "infertility" },
    {
      label: "IVF-ICSI – Intracytoplasmic Sperm Injection",
      href: "/treatments/infertility/ivf-icsi-intracytoplasmic-sperm-injection",
      id: "ivf-icsi-intracytoplasmic-sperm-injection",
    },
  ],
  path_section: {
    tag: "Know the Basics",
    mainHeading: "What is ICSI Treatment?",
    subHeading: "Precision. Expertise. Innovation.",
    description1:"Intracytoplasmic Sperm Injection (ICSI) is an advanced fertility treatment designed for couples struggling with male-factor infertility. In this procedure, a single healthy sperm is directly injected into an egg to achieve fertilization.",
    description2:"ICSI offers new hope for men with low sperm count, poor motility, or abnormal morphology, helping couples achieve biological parenthood.",
  },
  basics_heading: "What is ICSI Treatment?",
  points_tag: "Why Choose ICSI at Progenesis",
  points_heading: "Where science transforms possibilities into parenthood.",
  procedure_tag: "Steps of ICSI Process",
  procedure_heading: "High precision meets advanced embryology.",
  description:
    "ICSI at Progenesis offers a breakthrough in male infertility treatment. With expert embryologists, state-of-the-art micromanipulation tools, and advanced laboratory precision, we help couples overcome fertilization barriers and achieve parenthood with confidence.",
  content: `
    <p>
      ICSI is recommended for couples where sperm motility, morphology, or count is compromised, or in cases where
      previous IVF attempts have resulted in poor fertilization. It is also beneficial when sperm must be surgically
      retrieved or in cases of unexplained infertility.
    </p>
    <p>
      Using advanced micromanipulation techniques, a single healthy sperm is carefully injected into a mature egg.
      This process significantly increases fertilization rates and improves embryo quality for higher pregnancy success.
    </p>
  `,
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Who", label: "Who Can Benefit from ICSI" },
    { id: "Process", label: "Why Choose ICSI at Progenesis" },
    { id: "Steps", label: "Steps of the ICSI Procedure" },
    { id: "Success", label: "Success Rate" },
  ],
  who_can_benefit: {
    tag: "Who Can Benefit from ICSI",
    title: "Tailored solutions for complex fertility challenges.",
    cards: [
      {
        icon: "/treatments/ivf-icsi/icon1.png",
        title: "Cases of poor sperm morphology or function",
      },
      {
        icon: "/treatments/ivf-icsi/icon2.png",
        title: "Couples with failed fertilization in previous IVF cycles",
      },
      {
        icon: "/treatments/ivf-icsi/icon3.png",
        title: "Men with ejaculatory or duct blockages",
      },
      {
        icon: "/treatments/ivf-icsi/icon4.png",
        title: "Couples seeking treatment for severe male infertility",
      },
    ],
  },
  basics: null,
  points: [
    {
      id: "01",
      title: "Expert Embryologists",
      description: "Skilled specialists with advanced micromanipulation expertise.",
      image: "/treatments/ivf-icsi/c1.png",
    },
    {
      id: "02",
      title: "Custom Treatment Plans",
      description: "Each cycle is customized to the couple’s unique fertility profile.",
      image: "/treatments/ivf-icsi/c2.png",
    },
    {
      id: "03",
      title: "Holistic Care",
      description: "Emotional and medical support at every stage of your journey.",
      image: "/treatments/ivf-icsi/c3.png",
    },
  ],
  procedure_no_image_steps: {
    main_heading: "High precision meets advanced embryology.",
    main_tag: "Steps of the ICSI Procedure",
    data: [
      {
        title: "Ovarian Stimulation & Egg Retrieval",
        description:"The female partner undergoes hormonal stimulation to produce mature eggs, which are then retrieved for fertilization."
      },
      {
        title: "Sperm Collection & Selection",
        description:"Sperm are collected from the partner (or retrieved surgically if needed). The healthiest, most active sperm are selected under a microscope."
      },
      {
        title: "Sperm Injection & Fertilization",
        description:"A single sperm is injected directly into the egg using micromanipulation technology to achieve fertilization."
      },
      {
        title: "Embryo Transfer",
        description:"Once fertilization occurs, healthy embryos are cultured and transferred to the uterus for implantation."
      },
    ],
  },
  procedure_steps: null,
  gradient_data: "70%",
  gradient_text:
    "Fertilization success with ICSI – advanced lab precision and expert embryology ensure high embryo quality and pregnancy success.",
    success_stories: "From Hope to Happiness Watch Now!",
    success_tag:"Success Stories",
};







// Frozen Embryo Transfer Treatment Data
export const frozenEmbryoTransferTreatmentData = {
  slug: "frozen-embryo-transfer",
  category: "fertility-treatments",
  title: "Frozen Embryo Transfer",
  hero_title: "Frozen Embryo Transfer",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/frozen-embryo-transfer/frozen-embryo-transfer-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Infertility Treatments", href: "/treatments/infertility", id: "infertility" },
    {
      label: "Frozen Embryo Transfer",
      href: "/treatments/infertility/frozen-embryo-transfer",
      id: "frozen-embryo-transfer",
    },
  ],
  path_section: {
    tag: "Know the Basics",
    mainHeading: "Precise. Planned. Promising.",
    subHeading: "Precision. Expertise. Innovation.",
    description1:"Frozen Embryo Transfer (FET) is an advanced IVF procedure in which previously frozen embryos are carefully thawed and then transferred into the woman’s uterus, offering a higher chance of successful implantation and pregnancy.",
    description2:"It allows couples to use high-quality embryos from earlier IVF cycles, optimizing success without needing a new egg retrieval. FET provides flexibility, cost efficiency, and excellent pregnancy outcomes — especially when the uterine environment is perfectly prepared.",
  },
  basics_heading: "What is Frozen Embryo Transfer?",
  points_tag: "Why Choose FET at Progenesis",
  points_heading: "Cutting-edge science with compassionate care.",
  procedure_tag: "Steps of Frozen Embryo Transfer Process",
  procedure_heading: "High precision meets advanced embryology.",
  description:
    "Frozen Embryo Transfer at Progenesis offers a breakthrough in male infertility treatment. With expert embryologists, state-of-the-art micromanipulation tools, and advanced laboratory precision, we help couples overcome fertilization barriers and achieve parenthood with confidence.",
  content: `
    <p>
      ICSI is recommended for couples where sperm motility, morphology, or count is compromised, or in cases where
      previous IVF attempts have resulted in poor fertilization. It is also beneficial when sperm must be surgically
      retrieved or in cases of unexplained infertility.
    </p>
    <p>
      Using advanced micromanipulation techniques, a single healthy sperm is carefully injected into a mature egg.
      This process significantly increases fertilization rates and improves embryo quality for higher pregnancy success.
    </p>
  `,
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Who", label: "Who Can Benefit from FET" },
    { id: "Process", label: "Why Choose FET at Progenesis" },
    { id: "Steps", label: "Steps of the FET Procedure" },
    { id: "Success", label: "Success Rate" },
  ],
  who_can_benefit: {
    tag: "Who Can Benefit from FET",
    title: "Tailored solutions for complex fertility challenges.",
    cards: [
      {
        icon: "/treatments/ivf-icsi/icon1.png",
        title: "Couples with surplus embryos from a prior IVF cycle",
      },
      {
        icon: "/treatments/ivf-icsi/icon2.png",
        title: "Women with hormone-related implantation delays",
      },
      {
        icon: "/treatments/ivf-icsi/icon3.png",
        title: "Patients with medically cancelled fresh transfers",
      },
      {
        icon: "/treatments/ivf-icsi/icon4.png",
        title: "Couples undergoing genetic testing (PGT-A/PGS)",
      },
    ],
  },
  basics: null,
  points: [
    {
      id: "01",
      title: "High-Tech Cryopreservation",
      description: "Uses rapid vitrification techniques to safely protect embryo viability.",
      image: "/treatments/frozen-embryo-transfer/c1.png",
    },
    {
      id: "02",
      title: "Low Hormonal Stress",
      description: "Natural or medicated cycles carefully and precisely tailored to your body.",
      image: "/treatments/frozen-embryo-transfer/c3.png",
    },
    {
      id: "03",
      title: "Expert Fertility Team",
      description: "Decades of extensive experience in IVF and advanced embryology techniques.",
      image: "/treatments/frozen-embryo-transfer/c2.png",
    },
  ],
  procedure_no_image_steps: {
    main_heading: "Every step synchronized for higher success.",
    main_tag: "Steps of the Frozen Embryo Transfer Process",
    data: [
      {
        title: "Endometrial Preparation",
        description:"Medications and hormonal support prepare the uterine lining to receive the embryo. Regular scans ensure optimal thickness and blood flow."
      },
      {
        title: "Embryo Thawing",
        description:"Embryos are carefully thawed using specialized vitrification techniques to preserve cell integrity."
      },
      {
        title: "Embryo Transfer",
        description:"The healthiest thawed embryo is gently placed into the uterus under ultrasound guidance."
      },
      {
        title: "Post-Transfer Support",
        description:"Hormonal medications continue to support implantation and early pregnancy development."
      },
    ],
  },
  procedure_steps: null,
  gradient_data: "75%",
  gradient_text:
    "pregnancy success with FET — Progenesis transfers embryos in optimal conditions for better implantation and pregnancy.",
};




// Fertility Surgery Treatment Data
export const fertilitySurgeryTreatmentData = {
  slug: "fertility-surgery",
  category: "fertility-treatments",
  title: "Fertility Surgery",
  hero_title: "Fertility Surgery",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/fertility-surgery/fertility-surgery-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Infertility Treatments", href: "/treatments/infertility", id: "infertility" },
    {
      label: "Fertility Surgery",
      href: "/treatments/infertility/fertility-surgery",
      id: "fertility-surgery",
    },
  ],
  path_section: {
    tag: "Know the Basics",
    mainHeading: "What Is Fertility Surgery?",
    subHeading: "Restoring Health. Renewing Hope.",
    description1:"Fertility surgery helps treat anatomical or structural conditions that interfere with conception. It’s performed to correct issues such as fibroids, endometriosis, blocked fallopian tubes, uterine septum, adhesions, or cysts — restoring the reproductive organs to normal function.",
    description2:"Both men and women can benefit from fertility surgery, which is often a minimally invasive, daycare procedure using laparoscopy or hysteroscopy.",
  },
  basics_heading: "What is Fertility Surgery?",
  points_tag: "Why Choose Fertility Surgery at Progenesis",
  points_heading: "Precision care that promotes natural conception.",
  procedure_tag: "Steps of Frozen Embryo Transfer Process",
  procedure_heading: "High precision meets advanced embryology.",
  description:
    "Frozen Embryo Transfer at Progenesis offers a breakthrough in male infertility treatment. With expert embryologists, state-of-the-art micromanipulation tools, and advanced laboratory precision, we help couples overcome fertilization barriers and achieve parenthood with confidence.",
  content: `
    <p>
      ICSI is recommended for couples where sperm motility, morphology, or count is compromised, or in cases where
      previous IVF attempts have resulted in poor fertilization. It is also beneficial when sperm must be surgically
      retrieved or in cases of unexplained infertility.
    </p>
    <p>
      Using advanced micromanipulation techniques, a single healthy sperm is carefully injected into a mature egg.
      This process significantly increases fertilization rates and improves embryo quality for higher pregnancy success.
    </p>
  `,
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Who", label: "Who Can Benefit from Fertility Surgery" },
    { id: "Process", label: "Why Choose Fertility Surgery at Progenesis" },
    { id: "Steps", label: "Steps of the Fertility Surgery Procedure" },
    { id: "Success", label: "Success Rate" },
  ],
  who_can_benefit: {
    tag: "Who Can Benefit from Fertility Surgery",
    title: "Personalized correction. Enhanced conception potential.",
    cards: [
      {
        icon: "/treatments/ivf-icsi/icon1.png",
        title: "Women with fibroids, endometriosis, or ovarian cysts",
      },
      {
        icon: "/treatments/ivf-icsi/icon2.png",
        title: "Those with blocked or damaged fallopian tubes",
      },
      {
        icon: "/treatments/ivf-icsi/icon3.png",
        title: "Patients with uterine septum or adhesions",
      },
      {
        icon: "/treatments/ivf-icsi/icon4.png",
        title: "Men with varicocele or vasectomy reversal needs",
      },
    ],
  },
  basics: null,
  points: [
    {
      id: "01",
      title: "Expert Surgeons",
      description: "Highly experienced fertility and laparoscopic specialists.",
      image: "/treatments/fertility-surgery/c1.png",
    },
    {
      id: "02",
      title: "Advanced Technology",
      description: "Precision surgical instruments and high-definition imaging technology.",
      image: "/treatments/fertility-surgery/c3.png",
    },
    {
      id: "03",
      title: "Daycare Procedures",
      description: "Most patients are safely discharged the same day after treatment.",
      image: "/treatments/fertility-surgery/c2.png",
    },
  ],
  procedure_no_image_steps: {
    main_heading: "Advanced, minimally invasive solutions for reproductive health.",
    main_tag: "Types of Fertility Surgery",
    data: [
      {
        title: "Laparoscopic Surgery",
        description:"A keyhole procedure used to treat endometriosis, ovarian cysts, fibroids, or blocked tubes."
      },
      {
        title: "Hysteroscopic Surgery",
        description:"A minimally invasive technique via the cervix to remove polyps, fibroids, or uterine septum."
      },
      {
        title: "Tubal Recanalization",
        description:"Reopens blocked fallopian tubes to safely restore natural fertility and improve chances of conception."
      },
      {
        title: "Varicocele Repair",
        description:"Improves sperm count and motility by treating enlarged veins in the scrotum."
      },
    ],
  },
  procedure_steps: null,
  gradient_data: "75%",
  gradient_text:
    "improvement in fertility — Progenesis surgeries restore function and boost conception with expert care.",
    success_stories: "From Hope to Happiness Watch Now!",
    success_tag:"Success Stories",
};




// Female Fertility Preservation Data
export const femaleFertilityPreservationData = {
  slug: "female-fertility-preservation",
  category: "fertility-preservation",
  title: "Female Fertility Preservation",
  hero_title: "Female Fertility Preservation",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/male-fertility-preservation/malepreservationbg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Fertility Preservation", href: "/treatments/fertility-preservation", id: "fertility-preservation" },
    { label: "Female Fertility Preservation", href: "/treatments/fertility-preservation/female-fertility-preservation", id: "female-fertility-preservation" }
  ],
  basics_heading: "Why Female Fertility Preservation Matters",
  points_tag: "Why Choose Fertility Preservation at Progenesis",
  points_heading: "Ensuring Fertility for a Confident Tomorrow",
  description:"Safe. Smart. Secure. Always Protected.",
  content:
    "<p>At our center, we specialize in preserving male fertility through cutting-edge sperm banking and cryostorage techniques. Whether due to medical treatments, lifestyle choices, or age-related factors, men can take proactive steps to protect their ability to father children in the future.</p><p>Our expert team ensures each sample is processed and stored under precise conditions, maintaining high viability for use in assisted reproduction whenever needed.</p>",
  categories: [
    { id: "basics", label: "Know the Basics" },
    { id: "why-choose", label: "Why Preservation Matters" },
    { id: "procedure", label: "The Preservation Process" },
    { id: "stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/male-fertility-preservation/icon1.png",
      title: "What It Is",
      description: "Fertility preservation allows women to freeze eggs, embryos, or ovarian tissue to maintain their ability to conceive later in life."
    },
    {
      icon: "/treatments/male-fertility-preservation/icon2.png",
      title: "Why It’s Important",
      description: "It helps women undergoing medical treatments like chemotherapy or those delaying pregnancy due to personal or professional reasons."
    },
    {
      icon: "/treatments/male-fertility-preservation/icon3.png",
      title: "Who It Work",
      description: "Eggs are collected, frozen using advanced vitrification, and safely stored for future use — maintaining quality and reproductive potential."
    },
    {
      icon: "/treatments/male-fertility-preservation/icon4.png",
      title: "When It’s Recommended",
      description:"Ideal for women facing surgeries, cancer therapies, or genetic conditions that may affect fertility."
    },
    {
      icon: "/treatments/male-fertility-preservation/icon4.png",
      title: "Result",
      description:"Enables women to conceive with their own healthy eggs or embryos, even years after preservation."
    },
    {
      icon: "/treatments/male-fertility-preservation/icon4.png",
      title: "Added Advantage",
      description:"Provides emotional assurance, flexibility, and reproductive independence for women planning motherhood on their own terms."
    }
  ],
  procedure_no_image_steps: {
    main_heading: "Ensuring stable, safe, and precise embryo growth.",
    main_tag: "Steps of the Fertility Preservation Process",
    data: [
      {
        title: "Hormonal Stimulation & Egg Retrieval",
        description: "Fertility hormones are used to produce mature eggs, which are then collected from the ovaries."
      },
      {
        title: "Vitrification (Freezing)",
        description: "The collected eggs or embryos are frozen at sub-zero temperatures using advanced vitrification technology.",
      },
      {
        title: "Storage & Future Use",
        description: "Preserved samples are stored in liquid nitrogen and thawed when the patient is ready for conception through IVF.",
      },
      {
        title: "Varicocele Repair",
        description: "Each sample is regularly monitored to ensure temperature stability and long-term viability."      }
    ]
  },
  gradient_data: "95%",
  gradient_text:
    "post-thaw survival rate ensures preserved eggs and embryos retain quality for successful IVF outcomes.",
  points: [
    {
      id: "01",
      title: "High-Tech Freezing",
      description:"Ultra-rapid vitrification keeps eggs and embryos healthy and viable for future use.",
      image: "/treatments/male-fertility-preservation/point1.png"
    },
    {
      id: "02",
      title: "Expert Fertility Care",
      description:"Our specialists design personalized preservation plans for every woman’s unique needs.",
      image: "/treatments/male-fertility-preservation/point2.png"
    },
    {
      id: "03",
      title: "Secure Long-Term Storage",
      description:"Samples are safely stored under constant monitoring, ensuring maximum protection and stability.",
      image: "/treatments/male-fertility-preservation/point3.png"
    },
  ]
}





























