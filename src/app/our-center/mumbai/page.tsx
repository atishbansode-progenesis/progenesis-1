import { Metadata } from 'next';
import MumbaiCenterPage from './MumbaiCenterPage';

export const metadata: Metadata = {
  title: "Best IVF Center in Mumbai | Top IVF Clinic in Mumbai",
  description:
    "Best fertility center in Mumbai, Progenesis provides fertility treatments with the highest success rates on fertility treatments. Click to know more.",
  alternates: {
    canonical: "https://progenesisivf.com/our-center/mumbai",
  },
};

export default function Page() {
  return <MumbaiCenterPage />;
}