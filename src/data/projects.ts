import type { ProjectItem } from '../types';

// NOTE: image URLs are placeholders (picsum.photos, seeded for consistency).
// Replace with licensed photography of real installations before production use.
export const projects: ProjectItem[] = [
  {
    id: 'limpopoeco-arena&heritagevillage',
    name: 'The Limpopo Eco-Arena & Heritage Village',
    social_impact: 'State-of-the-art educational facility providing vocational training, computer literacy, and academic support to 500+ students annually.',
    environment_type: "Rural & Township Interface Corridor",
    "land_size_hectares": 12.5,
    category: 'Education',
    location: 'Zebediela, Limpopo, South Africa',
    startDate: 'Wednesday, Sepetember 15, 2027 at 08:00 SAST',
    projectactvity:'To Be Launched',
    image: 'https://images.unsplash.com/photo-1778826372073-1d8e77d4162c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D=crop',
    core_infrastructure: [
        "1,500-Seater Indoor Futsal & Tennis Arena, ",
        "Traditional Culinary Kitchen & Heritage Market Stalls, ",
        "Solar Micro-Grid Substation, ",
        "Greywater Recycling System "
      ],
      sustainability_metrics: [
        { label: "Renewable energy share", value: "100%" },
        { label: "Water recycle rate", value: "90%" },
        { label: "Local employment rate", value: "92%" },
      ],
    impact: '500+ students trained annually, 82% employment rate',
  },
//Card 2
];

export const projectFilters = ['All', 'Company Acquitision','Education', 'Health', 'Infrastructure', 'Renewable Energy','Manufacturing','Environment','Peace Treaty','Other'] as const;

