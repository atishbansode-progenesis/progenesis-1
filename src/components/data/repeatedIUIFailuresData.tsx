// data/infertilityIssuesData.ts
export const repeatedIUIFailuresData = {
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Infertility", href: "/infertility" },
        { label: "Female Infertility", href: "/infertility" },
        { label: "Repeated IUI Failures", href: "infertility/repeated-iui-failures/" },
      ],
      title: "Repeated IUI Failures",
      buttonText: "Book Your Appointment",
      buttonLink: "/book-appointment",
      overlayImage: "/InfertilityIssues/s-1bg1.png",
    },
  
    categories: [
      { id: "path", label: "What is Infertility" },
      { id: "fertility-section", label: "Female Infertility Causes" },
      { id: "fertility-mini-section", label: "Male Infertility Causes" },
      { id: "stories-section", label: "Real Stories. Real Miracles." },
    ],
  
    infoGrid: {
      tag: "Know the Basics",
      heading: "Repeated IUI failures: causes, signs, <br />and treatments for parenthood.",
      items: [
        {
          id: 1,
          title: "Definition",
          description:
            "Multiple IUI failure occurs when repeated attempts at intrauterine insemination (IUI) do not result in pregnancy, often after 3–4 cycles.",
        },
        {
          id: 2,
          title: "Possible Reasons",
          description:
            "Poor sperm/egg quality, age, timing issues, endometrial problems, hormonal imbalance.",
        },
        {
          id: 3,
          title: "Symptoms & Impact",
          description:
            "The primary sign is the inability to conceive after multiple cycles, often leading to emotional distress, financial strain, and frustration.",
        },
        {
          id: 4,
          title: "Treatment Options",
          description:
            "Depending on the cause, options like IVF, ICSI, or other advanced treatments are advised with expert guidance.",
        },
        {
          id: 5,
          title: "Emotional Impact",
          description:
            "Repeated failures can lead to frustration, anxiety, and strain on relationships, making emotional support and counseling vital.",
        },
        {
          id: 6,
          title: "When to Seek Expert Help",
          description:
            "If IUI fails after several cycles, consult a fertility specialist to assess causes and explore advanced treatment options.",
        },
      ],
    },
  
    carousel: {
      tag: "Causes",
      heading: "Key Reasons Behind IUI Failure and Their<br/> Impact on Conception",
      slides: [
        {
          id: "01",
          title: "Poor Egg Quality",
          description:
            "Eggs that are not healthy or mature enough can reduce the chances of successful fertilization and embryo development.",
          image: "/InfertilityIssues/rght 1.png",
        },
        {
          id: "02",
          title: "Low Sperm Quality",
          description:
            "Issues like low sperm count, poor motility, or abnormal shape can reduce the chances of sperm reaching and fertilizing the egg.",
          image: "/InfertilityIssues/rght 2.png",
        },
        {
          id: "03",
          title: "Hormonal Imbalance",
          description:
            "Irregular hormone levels can disrupt ovulation or affect the uterine environment, making conception difficult.",
          image: "/InfertilityIssues/rght 3.png",
        },
        {
          id: "04",
          title: "Uterine Abnormalities",
          description:
            "Conditions like fibroids or polyps can interfere with implantation, lowering the success rate of IUI.",
          image: "/InfertilityIssues/rght 4.png",
        },
      ],
    },
  
    // statistics: {
    //   tag: "IVF Failures Explained",
    //   heading: "Learn the numbers, Take control of your fertility journey",
    //   circles: [
    //     {
    //       value: "60–70%",
    //       description:
    //         "For women under the age of 35, IVF success rates are encouraging, ranging between 60–70%.",
    //       position: { right: "52%", top: "23%" },
    //       size: { width: "150px", height: "150px" },
    //       bgColor: "bg-[#E5F1FF]",
    //       lineWidth: "470px",
    //       textPosition: { right: "70%", top: "38%" },
    //     },
    //     {
    //       value: "5–10%",
    //       description:
    //         "Only a small percentage—around 5–10% of couples—face repeated failures even after multiple attempts.",
    //       position: { right: "22%", top: "0%" },
    //       size: { width: "180px", height: "180px" },
    //       bgColor: "bg-[#C3DCFB]",
    //       lineWidth: "670px",
    //       textPosition: { right: "0%", top: "25%" },
    //     },
    //     {
    //       value: "3–4<br />Cycles",
    //       description:
    //         "In many cases, it may take 3 to 4 cycles before achieving a successful pregnancy, which is completely normal in fertility treatments.",
    //       position: { right: "28%", bottom: "10%" },
    //       size: { width: "160px", height: "160px" },
    //       bgColor: "bg-[#E4F8B6]",
    //       lineWidth: "570px",
    //       textPosition: { right: "5%", bottom: "35%" },
    //     },
    //   ],
    // },
  

    statistics: {
        tag: "IVF Failures Explained",
        heading: "Learn the numbers, Take control of your fertility journey",
        circles: [
          {
            value: "5–10%",
            description:
              "For women under the age of 35, IVF success rates are encouraging, ranging between 60–70%.",
            circleClass: "absolute right-[8%] md:right-[22%] w-[180px] h-[180px] md:w-[596px] md:h-[596px] rounded-full bg-[#C3DCFB] flex items-center justify-center text-center shadow-sm",
            textClass: "absolute font-normal right-[5%] md:right-[0%] top-[30%] md:top-[25%] w-[160px] md:w-[240px] text-[#606060] text-xs md:text-sm leading-[18px] md:leading-[22px] before:content-[''] before:absolute before:top-0 before:right-0 before:w-[670px] before:h-[0.5px] before:bg-[#7a7a7a]",
          },
          {
            value: "60–70%",
            description:
              "Only a small percentage—around 5–10% of couples—face repeated failures even after multiple attempts.",
            circleClass: "absolute right-[8%] md:right-[52%] top-[23%] w-[150px] h-[150px] md:w-[386px] md:h-[386px] rounded-full bg-[#E5F1FF] flex items-center justify-center text-center shadow-sm",
            textClass: "absolute right-[0%] md:right-[70%] top-[28%] md:top-[38%] w-[140px] md:w-[220px] text-[#606060] text-xs md:text-sm leading-[18px] md:leading-[22px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[470px] before:h-[0.5px] before:bg-[#7a7a7a]",
          },
          {
            value: "3–4<br />Cycles",
            description:
              "In many cases, it may take 3 to 4 cycles before achieving a successful pregnancy, which is completely normal in fertility treatments.",
            circleClass: "absolute right-[20%] md:right-[28%] bottom-[10%] w-[160px] h-[160px] md:w-[432px] md:h-[432px] rounded-full bg-[#E4F8B6] flex items-center justify-center text-center shadow-sm",
            textClass: "absolute right-[6%] md:right-[5%] bottom-[35%] w-[180px] md:w-[260px] text-[#606060] text-xs md:text-sm leading-[18px] md:leading-[22px] before:content-[''] before:absolute before:top-0 before:right-0 before:w-[570px] before:h-[0.5px] before:bg-[#7a7a7a]",
          },
        ],
      },
    steps: {
      tag: "Fast Facts",
      heading: "Recommended Next Steps After Repeated IVF Failures",
      steps: [
        {
          id: 1,
          label: "Advanced Testing & Diagnosis",
          title: "Diagnosing Critical Barriers to Successful Implantation",
          items: [
            "Genetic testing screens embryos for chromosomal abnormalities, reducing miscarriage risks.",
            "Hormonal profiling identifies deficiencies affecting implantation.",
            "Uterine evaluation detects structural or lining issues.",
            "Immune system assessment ensures proper maternal tolerance of embryo.",
          ],
          image: "/InfertilityIssues/rght 1.png",
        },
        {
          id: 2,
          label: "Personalized Treatment Plan",
          title: "Tailored Interventions for Your IVF Journey",
          items: [
            "Customized medication protocol for optimal response.",
            "Lifestyle and nutrition guidance to enhance implantation.",
            "Targeted therapies for recurrent implantation failure.",
            "Continuous monitoring to adjust treatment as needed.",
          ],
          image: "/InfertilityIssues/rght 2.png",
        },
        {
          id: 3,
          label: "Holistic & Emotional Support",
          title: "Supporting Mind, Body & Emotions",
          items: [
            "Stress reduction strategies and counseling.",
            "Mind-body therapies to improve fertility outcomes.",
            "Support groups for emotional well-being.",
            "Education and guidance for informed decisions.",
          ],
          image: "/InfertilityIssues/rght 3.png",
        },
      ],
    },
  
    banner: {
      text: "Repeated failures don't mean the end; they mean it's time for a new plan.",
      textColor: "#94BA3D",
      leftGradientColor: "#94BA3D",
      rightGradientColor: "#1656A5",
    },
  };
  
  // You can create additional data configurations for other pages
  export const anotherIssueData = {
    // Similar structure for different infertility issues
    hero: {
      // ... different data
    },
    // ... etc
  };