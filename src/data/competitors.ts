import type { CompetitorsItem } from '../types';

// NOTE: image URLs are placeholders (picsum.photos, seeded for consistency).
// Replace with licensed photography of real installations before production use.
export const competitors: CompetitorsItem[] = [
  {
    //- Card 1 - Startup Founder
    id: '1',
    name: 'Sipho Nxumalo',
    nationality:"South African",
    position: 'CEO',
    companyname:"PayVuka",
    companydescription:"PayVuka is a south african based B2B payment solutions",
    category: 'StartUp Founder',
    image: 'https://images.unsplash.com/photo-1588178454780-441fa5b99fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D=crop',
    bio: 'Sipho is a veteran software architect who spent 12 years scaling secure cross-border digital wallets across SADC. Known in the boardroom for his aggressive scaling tactics, he is entering the boxing arena to prove that tech founders possess the physical grit required to fund and anchor critical rural infrastructure.',
    linkedin: '',
    email: '',
    companywebsite:"",
    industryField:"Financial Technology / B2B Payment Solutions",
    countryOfOrigin:"South Africa",
    chosenImpactPillar:"Sustainable Infrastructure & Circular Water",
 
  },
    //- Card 2 - Executive
    {
        id: '2',
        name: 'Dr. Shunzuki Kai',
        nationality:"North Korean",
        category:"Executive",
        companyname:"Giu Metropolitan Group",
        companydescription:"Gui Metropolitan Group is an investment software company that facilitates cross-border transations",
        position: 'CFO',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        bio: 'Shunzuki is a veteran software architect who spent 12 years scaling secure cross-border digital wallets. Known in the boardroom for his aggressive scaling tactics, he is entering the boxing arena to prove that tech founders possess the physical grit required to fund and anchor critical rural infrastructure.',
        linkedin: '',
        email: '',
        companywebsite:'',
        industryField:"Financial Technology / B2B Payment Solutions",
        countryOfOrigin:"North Korea",
        chosenImpactPillar:"Sustainable Infrastructure & Circular Water",
      },

       //- Card 3 - Venture Capitalist
    {
        id: '3',
        name: 'Dr. Xui-jen Chen',
        nationality:"North Korean",
        category:"Venture Capitalist",
        companyname:"Judia Financial Insitution",
        companydescription:"Judia Financial Insitution provides business loans to entreprenuers in the Fintech sector",
        position: 'Managing Director',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        bio: 'Xui-jen is a veteran software architect who spent 12 years scaling secure cross-border digital wallets. Known in the boardroom for his aggressive scaling tactics, he is entering the boxing arena to prove that tech founders possess the physical grit required to fund and anchor critical rural infrastructure.',
        linkedin: '',
        email: '',
        companywebsite:'',
        industryField:"Financial Technology / B2B Payment Solutions",
        countryOfOrigin:"North Korea",
        chosenImpactPillar:"Sustainable Infrastructure & Circular Water",
      },
      
       //- Card 4 - Executive
      {
        id: '4',
        name: 'Maria Rodriguez',
        nationality:"Mexican",
        category:"Investor",
        companyname:"Guadulahara Investments",
        companydescription:"Guadulahara Investments offers pre-seed funding,series A and series B to mining startups",
        position: 'Group CEO',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
        bio: 'Maria is a veteran software architect who spent 12 years scaling secure cross-border digital wallets. Known in the boardroom for his aggressive scaling tactics, he is entering the boxing arena to prove that tech founders possess the physical grit required to fund and anchor critical rural infrastructure.',
        linkedin: '',
        email: '',
        companywebsite:"",
        industryField:"Mining & Engineering Technology Investments",
        countryOfOrigin:"Mexico",
        chosenImpactPillar:"Sustainable Infrastructure & Circular Water",
      },

];

export const competitorsFilters = ['All', 'Executive', 'StartUp Founder', 'Venture Capitalist','Investor' ,'Other'] as const;



