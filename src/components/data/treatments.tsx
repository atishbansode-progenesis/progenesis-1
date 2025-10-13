// data/treatments.ts
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
    { label: "Advanced", href: "/treatments/advanced" },
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "IMSI", label: "Why Choose IMSI" },
    { id: "Why", label: "Why Choose IMSI" },
    { id: "Stories", label: "Success Stories" },
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
      description:
        "IMSI helps doctors select healthy sperm, improving fertilization when abnormal shapes hinder success.",
      image: "/treatments/image1.png",
    },
    {
      id: "02",
      title: "High DNA Fragmentation",
      description:
        "Better sperm selection reduces DNA fragmentation and increases the likelihood of viable embryos.",
      image: "/treatments/image2.png",
    },
    {
      id: "03",
      title: "Failed IVF/IUI Cycles",
      description:
        "For couples who have experienced failed cycles, IMSI offers a more precise method of sperm selection.",
      image: "/treatments/image3.png",
    },
    {
      id: "04",
      title: "Benefits & Success Rates",
      description:
        "Targeted sperm selection enhances IVF outcomes, boosting confidence in long-term fertility success.",
      image: "/treatments/image4.png",
    },
  ],
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
    { "label": "Advanced", "href": "/treatments/advanced", id: "advanced" },
    { "label": "PICSI", "href": "/treatments/advanced/picsi", id: "picsi" }
  ],
  basics_heading: "Precision Sperm Selection for Embryo Health",
  points_tag: "Why Choose PICSI",
  points_heading: "Targeted Selection for Higher IVF Success",
  procedure_tag: "The PICSI Procedure",
  procedure_heading: "Three Steps Closer to Your Parenthood Journey",
  description: "PICSI enhances IVF by selecting the most mature and healthy sperm using hyaluronic acid binding, improving embryo development and pregnancy rates.",
  content: "<p>PICSI is an advanced form of ICSI that uses hyaluronic acid to identify mature sperm with better DNA integrity, increasing the chances of successful fertilization.</p><p>Our center has seen improved outcomes with PICSI, especially for couples facing challenges with sperm quality.</p>",
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "PICSI", label: "Why Choose PICSI" },
    { id: "Why", label: "Why Choose PICSI" },
    { id: "Stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/picsi/picsibg_icon1.png",
      title: "What PICSI Means",
      description: "PICSI (Physiologic Intracytoplasmic Sperm Injection) selects mature sperm using hyaluronic acid for better fertilization outcomes."
    },
    {
      icon: "/treatments/picsi/picsibg_icon2.png",
      title: "Hyaluronic Acid Selection",
      description: "Mature sperm bind to hyaluronic acid, allowing selection of the healthiest sperm for injection."
    },
    {
      icon: "/treatments/picsi/picsibg_icon3.png",
      title: "Who Needs PICSI",
      description: "Ideal for couples with poor sperm maturity, high DNA fragmentation, or previous IVF failures."
    },
    {
      icon: "/treatments/picsi/picsibg_icon4.png",
      title: "How It Works",
      description: "Healthy sperm are selected using hyaluronic acid and injected directly into the egg for fertilization."
    },
    {
      icon: "/treatments/picsi/picsibg_icon5.png",
      title: "Benefits of PICSI",
      description: "Improves embryo quality, implantation rates, and chances of a successful pregnancy."
    },
    {
      icon: "/treatments/picsi/picsibg_icon6.png",
      title: "Proven Success",
      description: "PICSI is widely recognized for enhancing IVF success in cases of male infertility."
    }
  ],
  procedure_steps : null,
  procedure_no_image_steps: {
    main_heading:  "Step-by-step selection of healthy sperm for stronger embryos.",
    main_tag: "The PICSI Procedure",
    data: [
      {
        title: "Collection & Preparation",
        description: "Retrieving eggs from the female partner for fertilization."
      },
      {
        title: "Egg Collection Process",
        description: "Retrieving eggs from the female partner for fertilization."
      },
      {
        title: "Mature Sperm Selection",
        description: "Selecting mature sperm using hyaluronic acid for optimal fertilization."
      },
      {
        title: "Fertilization and Transfer",
        description: "Injecting selected sperm into eggs and transferring the embryo."
      }
    ]
  },
  gradient_data: "82%",
  gradient_text: "Couples undergoing PICSI improved embryo quality and higher implantation success rates",
  points: [
    {
      id: "01",
      title: "Immature Sperm Issues",
      description: "PICSI targets mature sperm, improving fertilization when immaturity is a concern.",
      image: "/treatments/picsi/picsibg_c1.png"
    },
    {
      id: "02",
      title: "High DNA Fragmentation",
      description: "Selects sperm with lower DNA damage, enhancing embryo viability.",
      image: "/treatments/picsi/picsibg_c2.png"
    },
    {
      id: "03",
      title: "Failed IVF Cycles",
      description: "Offers a precise solution for couples with repeated IVF or IUI failures.",
      image: "/treatments/picsi/picsibg_c3.png"
    },
    {
      id: "04",
      title: "Improved Success Rates",
      description: "Boosts IVF outcomes with targeted sperm selection for better pregnancy chances.",
      image: "/treatments/picsi/picsibg_c4.png"
    }
  ]
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
    { label: "Advanced", href: "/treatments/advanced" },
    { label: "LAH", href: "/treatments/advanced/lah" }
  ],
  basics_heading: "Why LAH Can Make a Difference in Your Journey",
  points_tag: "Why Choose LAH",
  points_heading: "Improved Implantation Rates",
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "LAH", label: "Why Choose LAH" },
    { id: "Why", label: "Why Choose LAH" },
    { id: "Stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/lah/lah_icon1.png",
      title: "What LAH Means",
      description: "LAH (Laser Assisted Hatching) helps embryos hatch by thinning their outer shell for better implantation."
    },
    {
      icon: "/treatments/lah/lah_icon2.png",
      title: "Laser Precision",
      description: "A controlled laser thins the zona pellucida, aiding the embryo's natural hatching process."
    },
    {
      icon: "/treatments/lah/lah_icon3.png",
      title: "Who Needs LAH",
      description: "Recommended for women over 35, those with thick zona pellucida, or after multiple failed IVF cycles."
    },
    {
      icon: "/treatments/lah/lah_icon4.png",
      title: "How It Works",
      description: "A laser creates a small opening in the embryo's shell before transfer to the uterus."
    },
    {
      icon: "/treatments/lah/lah_icon5.png",
      title: "Benefits of LAH",
      description: "Increases implantation and pregnancy rates, especially in challenging fertility cases."
    },
    {
      icon: "/treatments/lah/lah_icon6.png",
      title: "Proven Success",
      description: "LAH has helped many couples achieve successful pregnancies worldwide."
    }
  ],
  procedure_steps: [
    {
      title: "Embryo preparation",
      description: "Preparing the embryo with laser-assisted thinning of the zona pellucida.",
      image: "/treatments/lah/lah_c1.png"
    },
    {
      title: "Laser hatching",
      description: "Using a laser to create a precise opening for embryo hatching.",
      image: "/treatments/lah/lah_c2.png"
    },
    {
      title: "Embryo transfer",
      description: "Transferring the hatched embryo to the uterus for implantation.",
      image: "/treatments/lah/lah_c3.png"
    }
  ],
  gradient_data: "74%",
  gradient_text: "Couples experience higher implantation rates and improved pregnancy after LAH treatment.",
  points: [
    {
      id: "01",
      title: "Embryo preparation",
      description:"Selection of high-quality embryos for treatment",
      image: "/treatments/lah/lah_t1.png",
    },
    {
      id: "02",
      title: "Laser-assisted hatching",
      description:"Controlled thinning or opening of zona pellucida.",
      image: "/treatments/lah/lah_t2.png",
    },
    {
      id: "03",
      title: "Embryo transfer",
      description:
        "Placement into uterus for improved implantation",
      image: "/treatments/lah/lah_t3.png",
    },
  ],
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
    { "label": "Advanced", "href": "/treatments/advanced", id: "advanced" },
    { "label": "Blastocyst Transfer", "href": "/treatments/advanced/blastocyst-transfer", id: "blastocyst-transfer" }
  ],
  basics_heading: "Why Blastocyst Transfer Can Make a Difference in Your IVF Journey",
  points_tag: "Why Blastocyst Transfer",
  points_heading: "High Pregnancy Rates",
  procedure_tag: "The Blastocyst Transfer",
  procedure_heading: "A journey nurturing just embryo from creation to conception",
  description: "Blastocyst transfer involves transferring embryos at a more advanced stage of development (Day 5), improving implantation rates and pregnancy success.",
  content: "<p>Blastocyst transfer is an advanced IVF technique where embryos are cultured for 5-6 days until they reach the blastocyst stage before being transferred to the uterus.</p><p>This approach allows for better embryo selection and higher implantation rates, making it ideal for patients seeking optimal IVF outcomes.</p>",
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Blastocyst", label: "Why Blastocyst Transfer" },
    { id: "Why", label: "Why Choose Blastocyst Transfer" },
    { id: "Stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/blastocyst/blastocyst_icon1.png",
      title: "What Is Blastocyst Transfer",
      description: "Embryos are cultured until Day 5 or 6, reaching the blastocyst stage before transfer to the uterus."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon2.png",
      title: "Better Embryo Selection",
      description: "Extended culture allows identification of embryos with the highest implantation potential."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon3.png",
      title: "Who Benefits from It",
      description: "Ideal for patients with good embryo quality, multiple embryos, or previous IVF failures."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon4.png",
      title: "Higher Implantation Rates",
      description: "Blastocyst-stage embryos have better synchronization with the uterine lining, improving success rates."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon5.png",
      title: "Reduced Multiple Pregnancy Risk",
      description: "Fewer embryos need to be transferred, lowering the risk of twins or triplets."
    },
    {
      icon: "/treatments/blastocyst/blastocyst_icon6.png",
      title: "Advanced Lab Technology",
      description: "Requires specialized incubators and lab expertise to support extended embryo culture."
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
    main_heading: "A journey nurturing just embryo from creation to conception",
    main_tag: "The Blastocyst Transfer",
    data: [
      {
        title: "Egg Fertilization",
        description: "Eggs are fertilized with sperm in the laboratory."
      },
      {
        title: "Embryo Culture",
        description: "Embryos are cultured for 5-6 days until they reach the blastocyst stage."
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Sequential", label: "Why Sequential Transfer" },
    { id: "Why", label: "Why Choose Sequential Transfer" },
    { id: "Stories", label: "Success Stories" }
  ],
  basics: [
    {
      icon: "/treatments/sequential/sequential_icon1.png",
      title: "Understanding SET",
      description: "Sequential Embryo Transfer involves two embryo transfers at different developmental stages for optimal results."
    },
    {
      icon: "/treatments/sequential/sequential_icon2.png",
      title: "Why It Is Performed",
      description: "SET prepares the uterus for implantation through dual-stage embryo placement, improving receptivity."
    },
    {
      icon: "/treatments/sequential/sequential_icon3.png",
      title: "Higher Implantation Rates",
      description: "The two-stage approach enhances uterine-embryo synchronization, leading to better implantation outcomes."
    },
    {
      icon: "/treatments/sequential/sequential_icon4.png",
      title: "Better Embryo Utilization",
      description: "Maximizes the use of available embryos by transferring at both cleavage and blastocyst stages."
    },
    {
      icon: "/treatments/sequential/sequential_icon5.png",
      title: "Improved Pregnancy Outcomes",
      description: "Studies show higher pregnancy rates with sequential transfer compared to single-stage transfers."
    },
    {
      icon: "/treatments/sequential/sequential_icon6.png",
      title: "Who Benefits Most",
      description: "Ideal for patients with repeated implantation failures or those with multiple good-quality embryos."
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
}


// PGD / PGS / PGT-A Treatment Data
export const pgdTreatmentData = {
  slug: "pgd-pgs-pgt-a",
  category: "advanced",
  title: "PGD/PGS/PGT-A – Preimplantation Genetic Testing",
  hero_title: "PGD/PGS/PGT-A Treatment",
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
  points_heading: "Advanced Screening for Better Outcomes",
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Testing", label: "Types of Testing" },
    { id: "Why", label: "Why Choose Genetic Testing" },
    { id: "Stories", label: "Success Stories" },
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
      icon: "/treatments/pgd/pgd_icon1.png",
      title: "What It Means",
      description:
        "Preimplantation Genetic Testing (PGT) is a method used to identify genetic or chromosomal defects in embryos before implantation.",
    },
    {
      icon: "/treatments/pgd/pgd_icon2.png",
      title: "Why It's Done",
      description:
        "PGT helps select only healthy embryos for transfer, improving pregnancy success and minimizing the risk of inherited disorders.",
    },
    {
      icon: "/treatments/pgd/pgd_icon3.png",
      title: "When It's Recommended",
      description:
        "Ideal for couples with known genetic disorders, recurrent IVF failures, or women above 35 years of age.",
    },
    {
      icon: "/treatments/pgd/pgd_icon4.png",
      title: "What It Helps Prevent",
      description:
        "Reduces risks of miscarriages, chromosomal abnormalities, and hereditary diseases in offspring.",
    },
    {
      icon: "/treatments/pgd/pgd_icon5.png",
      title: "Success Outcome",
      description:
        "Enables higher pregnancy rates and healthier babies through precision embryo selection.",
    },
    {
      icon: "/treatments/pgd/pgd_icon6.png",
      title: "Long-Term Advantage",
      description:
        "Supports informed family planning by preventing the transmission of genetic conditions to future generations.",
    },
  ],

  procedure_steps: [
    {
      step: "01",
      title: "Embryo Development",
      description: "Following IVF, embryos are cultured in the lab until they reach the blastocyst stage for biopsy.",
      image: "/treatments/pgd/pgd_t1.png",
    },
    {
      step: "02",
      title: "Genetic Screening",
      description: "A few cells are carefully removed from each embryo and sent for detailed genetic analysis.",
      image: "/treatments/pgd/pgd_t2.png",
    },
    {
      step: "03",
      title: "Healthy Embryo Transfer",
      description: "Only genetically healthy embryos are selected and transferred to the uterus for implantation.",
      image: "/treatments/pgd/pgd_t3.png",
    },
  ],

  gradient_data: "85%",
  gradient_text: "Couples experience improved pregnancy outcomes with genetically screened embryos. Healthy embryos. Healthier pregnancies.",
  
  points: [
    {
      id: "01",
      title: "Genetic Accuracy",
      description:
        "Advanced testing ensures precise identification of genetic abnormalities, improving embryo selection and IVF success rates.",
      image: "/treatments/pgd/pgd_c1.png",
    },
    {
      id: "02",
      title: "Expert Embryologists",
      description:
        "Performed by experts using NGS and advanced biopsy techniques.",
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Features", label: "Lab Features" },
    { id: "Why", label: "Why It Matters" },
    { id: "Stories", label: "Success Stories" },
  ],
  basics: [
    {
      icon: "/treatments/modular-lab/lab_icon1.png",
      title: "What It Means",
      description:
        "A Class-1000 lab allows no more than 1,000 particles (≥0.5 microns) per cubic foot of air, ensuring ultra-clean conditions.",
    },
    {
      icon: "/treatments/modular-lab/lab_icon2.png",
      title: "Why It's Important",
      description:
        "Clean air and controlled environment are critical for embryo culture, reducing contamination and improving development.",
    },
    {
      icon: "/treatments/modular-lab/lab_icon3.png",
      title: "Expert Teams",
      description:
        "Our embryologists work in this sterile environment with strict protocols to ensure the highest quality care.",
    },
    {
      icon: "/treatments/modular-lab/lab_icon4.png",
      title: "Where It's Used",
      description:
        "The Class-1000 lab is used for all critical IVF procedures including embryo culture, ICSI, and assisted hatching.",
    },
    {
      icon: "/treatments/modular-lab/lab_icon5.png",
      title: "Excellence",
      description:
        "State-of-the-art modular design with HEPA filtration and positive pressure maintains optimal conditions 24/7.",
    },
    {
      icon: "/treatments/modular-lab/lab_icon6.png",
      title: "Better Advantage",
      description:
        "Advanced environmental control translates to healthier embryos, higher implantation rates, and better pregnancy outcomes.",
    },
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
        description:"Temperature, humidity, and air purity are carefully regulated for stable embryo growth.",      },
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Features", label: "Incubator Features" },
    { id: "Why", label: "Why It Matters" },
    { id: "Stories", label: "Success Stories" },
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
          "Records all incubator parameters and log every stage, ensuring precision, safety, and full traceability of embryo development.",
      },
    ],
  },
  gradient_data: "95%",
  gradient_text:
    "Embryos maintained stability ensures consistent IVF conditions for optimal embryo growth and IVF success.",
};

// Witness System Data
export const witnessSystemData = {
  slug: "witness-system",
  category: "advanced",
  title: "Advanced Technology - Witness System",
  hero_title: "Advanced Technology - Witness System",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/witness/witness-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Advanced", href: "/treatments/advanced", id: "advanced" },
    { label: "Witness System", href: "/treatments/advanced/witness-system", id: "witness-system" },
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Features", label: "System Features" },
    { id: "Why", label: "Why It Matters" },
    { id: "Stories", label: "Success Stories" },
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
};



// Cryopreservation Data
export const cryopreservationData = {
  slug: "cryopreservation",
  category: "advanced",
  title: "Cryopreservation of Human Gametes",
  hero_title: "Cryopreservation of Human Gametes",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/cryopreservation/cryo-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Advanced", href: "/treatments/advanced", id: "advanced" },
    { label: "Cryopreservation", href: "/treatments/advanced/cryopreservation", id: "cryopreservation" },
  ],
  basics_heading: "Why Cryopreservation Is Important in Fertility Care",
  points_tag: "Why Choose Cryopreservation",
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Process", label: "Preservation Process" },
    { id: "Why", label: "Why It Matters" },
    { id: "Stories", label: "Success Stories" },
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
        "The gametes are cooled using advanced vitrification methods that prevent ice formation, maintaining their structure and viability for years.",
    },
    {
      icon: "/treatments/witness/witness_icon3.png",
      title: "How It Works",
      description:
        "Ideal for individuals or couples who want to delay pregnancy, preserve fertility before medical treatments, or use donor gametes later.",
    },
    {
      icon: "/treatments/witness/witness_icon4.png",
      title: "Who It Helps",
      description:
        "Men with low sperm counts, women with limited egg reserve, or couples undergoing IVF who wish to save embryos for future cycles.",
    },
    {
      icon: "/treatments/witness/witness_icon5.png",
      title: "Result",
      description:"Cryopreserved samples retain their fertility potential even after thawing — offering flexibility, reassurance, and hope."    },
    {
      icon: "/treatments/witness/witness_icon6.png",
      title: "Added Advantage",
      description:"A proven, safe, and effective method for preserving reproductive cells without compromising quality or success rates."    },
  ],
  points: [
    {
      id: "01",
      title: "Advanced Vitrification",
      description:
        "Rapid freezing prevents ice formation and preserves cell integrity.",
      image: "/treatments/witness/witness_c1.png",
    },
    {
      id: "02",
      title: "Safe Long-Term Storage",
      description:
        "Samples are securely stored in liquid nitrogen under strict monitoring.",
      image: "/treatments/witness/witness_c2.png",
    },
    {
      id: "03",
      title: "High Post-Thaw Survival",
      description:"Ensures excellent quality and fertility potential for future use.",
      image: "/treatments/witness/witness_c3.png",
    },
  ],
  procedure_steps: null,
  procedure_no_image_steps: {
    main_heading: "Smart tracking ensures zero human error.",
    main_tag: "Steps of Lab Operation Process",
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
};




// Ovulation Induction Data
export const ovulationInductionData = {
  slug: "ovulation-induction",
  category: "fertility-treatments",
  title: "Ovulation Induction – Stimulating Egg Release",
  hero_title: "Ovulation Induction – Stimulating Egg Release",
  hero_button_text: "Book Your Appointment",
  hero_button_link: "/book-appointment",
  hero_image: "/treatments/ovulation-induction/ovulation-bg.png",
  breadcrumbs: [
    { label: "Home", href: "/", id: "home" },
    { label: "Treatments", href: "/treatments", id: "treatments" },
    { label: "Fertility Treatments", href: "/treatments/fertility-treatments", id: "fertility-treatments" },
    { label: "Ovulation Induction", href: "/treatments/fertility-treatments/ovulation-induction", id: "ovulation-induction" },
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
  categories: [
    { id: "Basics", label: "Know the Basics" },
    { id: "Who", label: "Who It Helps" },
    { id: "Process", label: "Treatment Process" },
    { id: "Success", label: "Success Rate" },
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
};
