import { ShieldCheck, BadgeCheck, Layers, Clock3, ReceiptText, Headset } from 'lucide-react';
import type { FeatureItem } from '../types';

export const features: FeatureItem[] = [
  {
    id: 'certified',
    icon: BadgeCheck,
    title: 'Certified Professionals',
    description:
      'Every technician on site holds current electrical certification and completes ongoing safety training.',
    metric: '100%',
    metricLabel: 'Certified crew on every job',
    size: 'lg',
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Zero-incident protocols enforced from planning through handover.',
    size: 'md',
  },
  {
    id: 'materials',
    icon: Layers,
    title: 'Quality Materials',
    description: 'Sourced from certified suppliers, rated for long-term industrial use.',
    size: 'md',
  },
  {
    id: 'delivery',
    icon: Clock3,
    title: 'On-Time Delivery',
    description: 'Fixed timelines held through structured project management.',
    metric: '96%',
    metricLabel: 'Projects delivered on schedule',
    size: 'md',
  },
  {
    id: 'pricing',
    icon: ReceiptText,
    title: 'Transparent Pricing',
    description: 'Itemized quotes with no hidden costs, ever.',
    size: 'md',
  },
  {
    id: 'support',
    icon: Headset,
    title: '24/7 Support',
    description: 'Emergency response line staffed around the clock, every day of the year.',
    size: 'md',
  },
];
