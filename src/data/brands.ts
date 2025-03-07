import caldiniLogo from '../assets/caldini.png';
import paxLogo from '../assets/pax.png';
import automecLogo from '../assets/automec.png';

export type ProductCategory = 
  | 'Diagnostic Equipment'
  | 'Alignment Systems'
  | 'Lifting Equipment'
  | 'Tire Equipment'
  | 'Testing Equipment'
  | 'Fluid Management'
  | 'Spray Systems'
  | 'Machine Tools';

export interface Product {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  features: string[];
  specifications: Record<string, string>;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  products: Product[];
}

export const brands: Record<string, Brand> = {
  caldini: {
    id: 'caldini',
    name: 'Caldini',
    description: 'Premium automotive diagnostic and repair equipment',
    logo: caldiniLogo,
    products: [
      {
        id: 1,
        name: 'DiagnosticPro X1',
        description: 'Advanced diagnostic scanner for modern vehicles',
        category: 'Diagnostic Equipment',
        image: caldiniLogo,
        features: [
          'Compatible with all major vehicle brands',
          'Real-time diagnostic data',
          'Wireless connectivity',
          'Software updates included',
        ],
        specifications: {
          'Display': '10.1" HD Touchscreen',
          'Battery Life': '8 hours',
          'Connectivity': 'Wi-Fi, Bluetooth 5.0',
          'Software': 'CaldiOS 4.0',
        },
      },
      {
        id: 2,
        name: 'Alignment System Pro',
        description: 'High-precision wheel alignment system',
        category: 'Alignment Systems',
        image: caldiniLogo,
        features: [
          '3D alignment technology',
          'Automatic vehicle recognition',
          'Cloud data storage',
          'Remote technical support',
        ],
        specifications: {
          'Accuracy': '0.01° precision',
          'Camera Resolution': '2MP HD',
          'Setup Time': '< 2 minutes',
          'Database': 'Over 50,000 vehicles',
        },
      },
    ],
  },
  pax: {
    id: 'pax',
    name: 'Pax',
    description: 'Innovative lifting and maintenance equipment',
    logo: paxLogo,
    products: [
      {
        id: 3,
        name: 'SmartLift 5000',
        description: 'Smart hydraulic lift system with advanced safety features',
        category: 'Lifting Equipment',
        image: paxLogo,
        features: [
          'Automatic safety locks',
          'Smartphone control capability',
          'Weight sensing technology',
          'Low-profile design',
        ],
        specifications: {
          'Capacity': '5,000 lbs',
          'Height': '72 inches',
          'Power': '220V/single phase',
          'Platform Width': '82 inches',
        },
      },
      {
        id: 4,
        name: 'TireMaster Pro',
        description: 'Advanced tire changing system',
        category: 'Tire Equipment',
        image: paxLogo,
        features: [
          'Touchless operation',
          'Automatic wheel sizing',
          'Built-in wheel lift',
          'Smart clamping system',
        ],
        specifications: {
          'Max Wheel Diameter': '30 inches',
          'Rim Width Range': '3-14 inches',
          'Motor Power': '1.5 HP',
          'Operating Pressure': '116-145 PSI',
        },
      },
    ],
  },
  automec: {
    id: 'automec',
    name: 'Automec',
    description: 'Cutting-edge automotive testing and maintenance solutions',
    logo: automecLogo,
    products: [
      {
        id: 5,
        name: 'BrakePro 2000',
        description: 'Professional brake testing and maintenance system',
        category: 'Testing Equipment',
        image: automecLogo,
        features: [
          'Digital force measurement',
          'Automated testing sequence',
          'Integrated printer',
          'Database management',
        ],
        specifications: {
          'Max Test Force': '2,000 kg',
          'Display Type': 'Digital LCD',
          'Test Types': 'Service, Emergency, Park',
          'Report Format': 'PDF, CSV',
        },
      },
      {
        id: 6,
        name: 'OilMaster Elite',
        description: 'Automatic oil change and fluid management system',
        category: 'Fluid Management',
        image: automecLogo,
        features: [
          'Automatic fluid detection',
          'Integrated waste management',
          'Digital control panel',
          'Multiple fluid capability',
        ],
        specifications: {
          'Tank Capacity': '50L',
          'Flow Rate': '10L/min',
          'Power Supply': '110V/60Hz',
          'Hose Length': '15 feet',
        },
      },
    ],
  },
}; 