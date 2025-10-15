export interface Category {
  id: string;
  label: string;
}

export interface InfertilityIssue {
  id: string;
  title: string;
  slug: string;
  image: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  foregroundImage?: string;
  overlayImage?: string;
}
