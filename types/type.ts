export type CaseStudy = {
  id: number;
  imageSrc: string;
  logo: string;
  name: string;
  slug: string;
  coloredPartTitle: string;
  regularTitle: string;
  heroInfo: {
    id: number;
    icon: string;
    alt: string;
    title: string;
    subtitle: string;
  }[];
  overviewParagraphs: string[];
  overviewImage: string;
  aboutParagraph: string;
  aboutProjectInfo: {
    id: number;
    subtitle: string;
    title: string;
    logo: string;
  }[];
  solutionParagraph: string;
  solutionPoints: string[];
  solutionImage: string;
  keyFuncParagraph: string;
  keypoints1: string[];
  keyFuncImage: string;
  resultParagraph: string;
  resultPoints1: string[];
  resultPoints2: string[];
};
