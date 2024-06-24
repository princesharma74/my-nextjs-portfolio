export interface ProjectBase {
    title: string;
    description: string;
    expand?: {
      skills: any[];
    };
    github: string;
    hosted_link: string;
    images: string[];
    collectionName: string;
    id: string;
}


export interface Project {
    title: string;
    description: string;
    skills: string[];
    github: string;
    hosted_link: string;
    images: string[];
    collectionName: string;
    id: string;
}

export interface SocialBase {
  collectionId: string,
  collectionName: string,
  icon: string,
  id: string,
  title: string,
  url: string
}

export interface Social {
  collectionId: string,
  collectionName: string,
  icon: string,
  id: string,
  title: string,
  url: string
}

export interface ExperienceBase {
  collectionId: string,
  collectionName: string,
  company: string,
  description: string,
  end_time: Date,
  id: string
  start_time: Date,
  title: string
  updated: Date
}


export interface Experience {
  collectionId: string,
  collectionName: string,
  company: string,
  description: string,
  end_time: Date,
  id: string
  start_time: Date,
  title: string
  updated: Date
}

export interface TemplateBase{
  collectionId: string,
  collectionName: string,
  id: string,
  title: string,
  description: string,
  purchase_link: string,
  url: string
  images: string[]
  price: 5,
}

export interface Template {
  collectionId: string,
  collectionName: string,
  id: string,
  title: string,
  description: string,
  purchase_link: string,
  url: string
  images: string[]
  price: 5,
}