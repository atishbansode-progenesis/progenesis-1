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
    image: "/Infertility/infertility1.png",
  },
  {
    id: "2",
    title: "Repeated IVF Failures",
    slug: "repeated-ivf-failures",
    image: "/Infertility/infertility2.png",
  },
  {
    id: "3",
    title: "Pregnancy after Menopause",
    slug: "pregnancy-after-menopause",
    image: "/Infertility/infertility3.png",
  },
  {
    id: "4",
    title: "Low AMH",
    slug: "low-amh",
    image: "/Infertility/infertility4.png",
  },
  {
    id: "5",
    title: "PCOS",
    slug: "pcos",
    image: "/Infertility/infertility5.png",
  },
  {
    id: "6",
    title: "Tubal Blockage",
    slug: "tubal-blockage",
    image: "/Infertility/infertility6.png",
  },
  {
    id: "7",
    title: "Fibroids",
    slug: "fibroids",
    image: "/Infertility/infertility7.png",
  },
  {
    id: "8",
    title: "Endometriosis",
    slug: "endometriosis",
    image: "/Infertility/infertility8.png",
  },
];

export const MALE_INFERTILITY_ISSUES: InfertilityIssue[] = [
  {
    id: "1",
    title: "Azoospermia",
    slug: "azoospermia",
    image: "/Infertility/Azoospermia.png",
  },
  {
    id: "2",
    title: "Low Sperm Count",
    slug: "low-sperm-count",
    image: "/Infertility/LowSpermCount.png",
  },
  {
    id: "3",
    title: "Erectile Dysfunction (ED)",
    slug: "erectile-dysfunction",
    image: "/Infertility/ErectileDysfunction.png",
  },
];
