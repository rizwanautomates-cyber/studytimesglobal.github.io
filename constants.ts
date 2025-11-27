import { Destination, Service, Testimonial } from './types';

export const COMPANY_NAME = "StudyTimes Global Consultants";
export const COMPANY_PHONE = "+923358710682";
export const COMPANY_ADDRESS = "Opposite WAPDA House, Sargogdha Road Near Shaheen Chowk, Gujrat";
export const COMPANY_EMAIL = "info@studytimes.com";

export const DESTINATIONS: Destination[] = [
  {
    id: 'georgia',
    name: 'Georgia',
    shortDescription: 'Affordable quality education in the heart of the Caucasus.',
    fullDescription: 'Georgia offers a unique blend of European and Asian cultures, providing high-quality medical and business education at affordable rates.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    benefits: ['Low Tuition Fees', 'No IELTS Required (Conditional)', 'European Standard Education', 'Safe Environment'],
    eligibility: ['High School Diploma', 'Valid Passport', 'Interview Success'],
    documents: ['Passport Copy', 'Academic Transcripts', 'Photos', 'Medical Certificate']
  },
  {
    id: 'finland',
    name: 'Finland',
    shortDescription: 'World-class education system with high student satisfaction.',
    fullDescription: 'Finland is renowned for having one of the best education systems in the world, focusing on innovation and student well-being.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    benefits: ['Top-ranked Universities', 'Work Permit Options', 'Cleanest Air & Nature', 'Innovative Learning'],
    eligibility: ['IELTS/TOEFL Score', 'Bachelor Degree (for Masters)', 'Entrance Exam'],
    documents: ['CV/Resume', 'Motivation Letter', 'Language Certificate', 'Recommendation Letters']
  },
  {
    id: 'usa',
    name: 'USA',
    shortDescription: 'The land of opportunity with diverse academic programs.',
    fullDescription: 'The United States is home to many of the world’s top universities and offers unparalleled research and career opportunities.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    benefits: ['Global Recognition', 'Diverse Culture', 'Scholarship Opportunities', 'OPT/CPT Work Options'],
    eligibility: ['SAT/ACT/GRE', 'IELTS/TOEFL', 'Strong Academic Record'],
    documents: ['Financial Proof', 'Statement of Purpose', 'Transcripts', 'Standardized Test Scores']
  },
  {
    id: 'sweden',
    name: 'Sweden',
    shortDescription: 'Sustainable living and innovative research-based studies.',
    fullDescription: 'Sweden offers an open, inclusive environment with a strong focus on sustainability, innovation, and critical thinking.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    benefits: ['Free PhD Education', 'English Taught Programs', 'Work-Life Balance', 'Stay Back Option'],
    eligibility: ['IELTS 6.5+', 'Relevant Previous Studies', 'Motivation Letter'],
    documents: ['Passport', 'Degree Certificates', 'English Proficiency Proof', 'Letter of Intent']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'admission',
    title: 'Admission Guidance',
    description: 'Expert advice on selecting the right university and course based on your profile.',
    iconName: 'GraduationCap'
  },
  {
    id: 'visa',
    title: 'Visa Processing',
    description: 'Complete assistance with visa applications, including form filling and interview prep.',
    iconName: 'FileCheck'
  },
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Meticulous verification and organization of all required academic and legal documents.',
    iconName: 'BookOpen'
  },
  {
    id: 'counseling',
    title: 'Career Counseling',
    description: 'Helping you map out a future career path that aligns with your international studies.',
    iconName: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ali Khan',
    destination: 'Georgia',
    text: 'StudyTimes made my dream of studying medicine in Georgia a reality. The process was smooth and transparent.',
    rating: 5
  },
  {
    id: '2',
    name: 'Fatima Ahmed',
    destination: 'Finland',
    text: 'Highly professional team! They helped me with my documentation for Finland and I got my visa approved in weeks.',
    rating: 5
  },
  {
    id: '3',
    name: 'Usman Riaz',
    destination: 'USA',
    text: 'Excellent interview preparation guidance for the US visa. I felt confident and prepared.',
    rating: 4
  }
];
