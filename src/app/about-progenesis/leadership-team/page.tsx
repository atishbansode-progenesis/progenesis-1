import React from "react";
import LeadershipTeam from "@/page-components/our-team/OurLeaderShip";

export const metadata = {
  title: "Founders of Progenesis Fertility Center | Meet Our Expert Leadership Team",
  description: "Meet the visionary founders of Progenesis Fertility Center and discover the expert leadership team dedicated to advancing fertility care and helping couples achieve parenthood.",
  alternates: {
    canonical: "https://progenesisivf.com/about-progenesis/leadership-team",
  },
}

const page = () => {
  return (
    <div>
      <LeadershipTeam />
    </div>
  );
}
export default page;