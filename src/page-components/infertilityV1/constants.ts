import { Category, InfertilityIssue } from "./types";

export const CATEGORIES: Category[] = [
  { id: "path", label: "What is Infertility" },
  { id: "fertility-section", label: "Female Infertility Causes" },
  { id: "fertility-mini-section", label: "Male Infertility Causes" },
  { id: "stories-section", label: "Real Stories. Real Miracles." },
];

export const FEMALE_INFERTILITY_ISSUES: InfertilityIssue[] = [
  {
    id: "1",
    title: "Repeated IUI Failures",
    slug: "repeated-iui-failures",
    image: "/Infertility/F1.png",
  },
  {
    id: "2",
    title: "Repeated IVF Failures",
    slug: "repeated-ivf-failures",
    image: "/Infertility/F2.png",
  },
  {
    id: "3",
    title: "Pregnancy after Menopause",
    slug: "pregnancy-after-menopause",
    image: "/Infertility/F3.png",
  },
  {
    id: "4",
    title: "Low AMH",
    slug: "low-amh",
    image: "/Infertility/F4.png",
  },
  {
    id: "5",
    title: "PCOS",
    slug: "pcos",
    image: "/Infertility/F5.png",
  },
  {
    id: "6",
    title: "Tubal Blockage",
    slug: "tubal-blockage",
    image: "/Infertility/F6.png",
  },
  {
    id: "7",
    title: "Fibroids",
    slug: "fibroids",
    image: "/Infertility/F7.png",
  },
  {
    id: "8",
    title: "Endometriosis",
    slug: "endometriosis",
    image: "/Infertility/F8.png",
  },
];

export const MALE_INFERTILITY_ISSUES: InfertilityIssue[] = [
  {
    id: "1",
    title: "Azoospermia",
    slug: "azoospermia",
    image: "/Infertility/M1.png",
  },
  {
    id: "2",
    title: "Low Sperm Count",
    slug: "low-sperm-count",
    image: "/Infertility/M2.png",
  },
  {
    id: "3",
    title: "Erectile Dysfunction (ED)",
    slug: "erectile-dysfunction",
    image: "/Infertility/M3.png",
  },
];