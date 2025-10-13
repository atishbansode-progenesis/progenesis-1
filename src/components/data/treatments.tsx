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
      icon: "Search",
      title: "What IMSI Means",
      description:
        "IMSI (Intracytoplasmic Morphologically Selected Sperm Injection) is a technique to pick the healthiest sperm for fertilization.",
    },
    {
      icon: "Microscope",
      title: "High-Powered Microscopy",
      description:
        "Doctors use a microscope (up to 6600x) to examine sperm closely and choose the best one.",
    },
    {
      icon: "Syringe",
      title: "Who Needs IMSI",
      description:
        "Recommended for men with poor sperm shape, high DNA damage, or couples with repeated IVF/IUI failures.",
    },
    {
      icon: "Lightbulb",
      title: "How It Works",
      description:
        "Eggs are retrieved from the female partner, and the selected healthy sperm is injected directly into the egg for fertilization.",
    },
    {
      icon: "HeartPulse",
      title: "Benefits of IMSI",
      description:
        "IMSI improves the chances of healthy embryo development, successful implantation, and full-term pregnancy.",
    },
    {
      icon: "CheckCircle",
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
      icon: "Search",
      title: "What PICSI Means",
      description: "PICSI (Physiologic Intracytoplasmic Sperm Injection) selects mature sperm using hyaluronic acid for better fertilization outcomes."
    },
    {
      icon: "Microscope",
      title: "Hyaluronic Acid Selection",
      description: "Mature sperm bind to hyaluronic acid, allowing selection of the healthiest sperm for injection."
    },
    {
      icon: "Syringe",
      title: "Who Needs PICSI",
      description: "Ideal for couples with poor sperm maturity, high DNA fragmentation, or previous IVF failures."
    },
    {
      icon: "Lightbulb",
      title: "How It Works",
      description: "Healthy sperm are selected using hyaluronic acid and injected directly into the egg for fertilization."
    },
    {
      icon: "HeartPulse",
      title: "Benefits of PICSI",
      description: "Improves embryo quality, implantation rates, and chances of a successful pregnancy."
    },
    {
      icon: "CheckCircle",
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
      image: "/treatments/image1.png"
    },
    {
      id: "02",
      title: "High DNA Fragmentation",
      description: "Selects sperm with lower DNA damage, enhancing embryo viability.",
      image: "/treatments/image2.png"
    },
    {
      id: "03",
      title: "Failed IVF Cycles",
      description: "Offers a precise solution for couples with repeated IVF or IUI failures.",
      image: "/treatments/image3.png"
    },
    {
      id: "04",
      title: "Improved Success Rates",
      description: "Boosts IVF outcomes with targeted sperm selection for better pregnancy chances.",
      image: "/treatments/image4.png"
    }
  ]
}
