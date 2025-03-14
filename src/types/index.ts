export interface Project { 
    title:            string;
    tags:             string[];
    description:      string;
    thumbnail:        string;
    repo:             string;
    repoLinkExpired:  boolean;
    liveLink:         string;
    liveLinkExpired:  boolean;
    slug:             string;
    features:         string[];
    businessImpact:   string;
    additionalInfo:   string;
    companyName?:      string;
    industry:         string;
    location:         string;
    year:             number;
    isPortraitImages: boolean;
    images:           string[];
}

export interface BlogCardProps {
  guid: string;
  pubDate: string;
  content: HTMLAllCollection;
  title: string;
  description: any;
  link: string;
}

export interface WorkExperience {
  companyName: string;
  url: string;
  startingYear: number;
  endingYear: null;
  currentCompany: boolean;
  logoUrl: string;
  posistion: string;
}
