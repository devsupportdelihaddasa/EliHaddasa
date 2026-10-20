import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface GlobalSupplyItem {
  id: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
  spec: string;
  location:string;
  status: string;
  ideal_high_value_products_or_crops: string[];
  soil_and_climate_profile:string;
  ideal_industrial_sectors: string[];
  hadassa_turnkey_services: string[];
  availabilityDate: string;
  client_operational_model?:string;
  target_buyer_profile?:string;
  allocation_status?:string;
  available_land_hectares?: number;
  availableworkers?: number;
  complianceCertifications?: string[];
  featured_creative_catalysts_knowledge_Architects?: string[];
}

// export interface GlobalSupplyItem {
//     id: string;
//     index: string;
//     icon: LucideIcon;
//     title: string;
//     description: string;
//     spec: string;
//   }

{/*Projects / Legacy Projects */}

// export type ProjectCategory = 'Commercial' | 'Industrial' | 'Residential' | 'Renewable Energy';
export type ProjectCategory = 'Company Acquitision' | 'Education' | 'Health' | 'Infrastructure' | 'Renewable Energy' | 'Manufacturing' | 'Environment' |'Peace Treaty' | 'Other';

export interface ProjectItem {
  id: string;
  name: string;
  social_impact:string;
  environment_type:string;
  land_size_hectares?:number;
  category: ProjectCategory;
  location: string;
  startDate: string;
  projectactvity:string;
  image: string;
  core_infrastructure: string[];
  sustainability_metrics: {
    label: string;
    value: string;
  }[];
    impact: '500+ students trained annually, 82% employment rate',
}


{/*Arena Dashboard */}

export type ArenaDashboardCategory = 'Upcoming Matches' | 'Past Legacies' | 'Future Drafts' | 'Other';

export interface ArenaDashboardItem {
  id: string;
  name: string;
  tournamenttitle: string;
  maineventbout:string;
  category: ArenaDashboardCategory;
  location: string;
  eventdate: string;
  eventdescription: string;
  image: string;
  projectconceptandeventdetailedDescription: string;
  ///////////////////////////////////////////////////////
  thechallengertier: {
    label: string;
    value: string;
  }[];
  thetitlecontendertier: {
    label: string;
    value: string;
  }[];
  //////////////////////////////////////////
  eventdetails: {
    label: string;
    value: string;
  }[];
  targetprojectname: {
    label: string;
    value: string;
  }[];
  deployedinfrastructureprojects?: {
    label: string;
    value: string;
  }[];
  impactcategory?:string;
  impactcategorydescription?: string;
//   deployedinfrastructureprojectdescription?: string; //Card 2 - Past Legacies
  partnershipsAndaffiliates: string[];
  guestInvitations: string[];
  sporttype?: string;
  teamone_challenger: string;
  teamtwo_contender: string;
  bouttype?: string;
  financialyieldestimate?:string;
  totalcapitaltargeted?: string;//Card 2 - Past Legacies
  totalcapitalraised?: string;//Card 2 - Past Legacies
  publicticketprice?: string;//Card 2 - Past Legacies

//   grade?: string;
//   purity?: string;
  available: boolean;
//   packaging?: string;
//   minimumOrder?: string;
}

{/*Competitors Profiles */}

export type CompetitorsCategory = 'Executive'|'StartUp Founder' | 'Venture Capitalist' | 'Investor' | 'Other';


export interface CompetitorsItem {
  id: string;
  name: string;
  nationality:string;
  position: string;
  companyname: string;
  companydescription:string;
  category: CompetitorsCategory;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
  companywebsite?:string;
  industryField?:string;
  countryOfOrigin?: string;
  chosenImpactPillar?:string;
}


export interface HadassaEcosystem {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
  image: string;
}

export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  size: 'lg' | 'md';
}
