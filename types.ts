export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'GraduationCap' | 'FileCheck' | 'Globe' | 'Users' | 'BookOpen' | 'Plane';
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  text: string;
  rating: number;
}
