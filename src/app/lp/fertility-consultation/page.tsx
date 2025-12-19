import { Metadata } from 'next';
import FertilityPage from './FertilityPage';

export const metadata = {
  title: "Best IVF Treatment in India | Top Fertility Specialist - Progenesis IVF",
  description: "Looking for the best IVF treatment in India? Progenesis IVF offers advanced fertility solutions with top specialists. Book your consultation today and start your parenthood journey.",
  alternates: {
    canonical: "https://progenesisivf.com/lp/fertility-consultation",
  },
};

export default function Page() {
  return (
    <>
      <FertilityPage />
    </>
  );
}