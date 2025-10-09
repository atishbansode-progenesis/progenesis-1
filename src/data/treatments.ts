// data/treatments.ts
export interface Treatment {
  slug: string;
  category: "basic" | "advanced"; // optional grouping
  title: string;
  description: string;
  content: string; // full detail page content
}

export const treatments: Treatment[] = [
  {
    slug: "imsi",
    category: "advanced",
    title: "IMSI – Intracytoplasmic Morphologically Selected Sperm Injection",
    hero_title: "IMSI Treatment",
    hero_button_text: "Book Your Appointment",
    hero_button_link: "/book-appointment",
    hero_image: "/treatments/imsi/imsibg.png",

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
    preservation: [
      {
        title: "Egg collection process",
        image: "/treatments/Ivf3_17_12.png", // replace with actual path
      },
      {
        title: "Healthy sperm selection",
        image: "/treatments/Ivf3_17_13.png",
      },
      {
        title: "Fertilization and transfer",
        image: "/treatments/Ivf3_17_14.png",
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
      },
      {
        id: "02",
        title: "High DNA Fragmentation",
        description:
          "Better sperm selection reduces DNA fragmentation and increases the likelihood of viable embryos.",
      },
      {
        id: "03",
        title: "Failed IVF/IUI Cycles",
        description:
          "For couples who have experienced failed cycles, IMSI offers a more precise method of sperm selection.",
      },
      {
        id: "04",
        title: "Benefits & Success Rates",
        description:
          "Targeted sperm selection enhances IVF outcomes, boosting confidence in long-term fertility success.",
      },
    ],
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
