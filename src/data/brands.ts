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
  | 'Machine Tools'
  | 'Cleaning Equipment'
  | 'Pressure Washers'
  | 'Industrial Equipment';

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
    description: 'Premium automotive maintenance and cleaning solutions',
    logo: caldiniLogo,
    products: [
      {
        id: 1,
        name: 'Brake Cleaner',
        description: 'Professional brake cleaning solution',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Quick drying formula',
          'Leaves no residue',
          'Removes brake dust and oil',
          'Professional grade'
        ],
        specifications: {
          'Volume': '500ml',
          'Application': 'All brake systems',
          'Drying Time': '60 seconds',
          'VOC Compliant': 'Yes'
        }
      },
      {
        id: 2,
        name: 'Chain Spray',
        description: 'Heavy-duty chain lubricant spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Long-lasting lubrication',
          'Corrosion protection',
          'Water resistant',
          'Reduces wear'
        ],
        specifications: {
          'Volume': '400ml',
          'Temperature Range': '-30°C to +150°C',
          'Application': 'All chain types',
          'Coverage': 'Full penetration'
        }
      },
      {
        id: 3,
        name: 'Penetrating Oil',
        description: 'Fast-acting penetrating oil spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Deep penetration',
          'Rust dissolving',
          'Moisture displacement',
          'Lubricating properties'
        ],
        specifications: {
          'Volume': '400ml',
          'Penetration Rate': 'Fast',
          'Application': 'Multi-purpose',
          'Contains': 'Rust inhibitors'
        }
      },
      {
        id: 4,
        name: 'Cockpit Spray',
        description: 'Dashboard and interior care spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'UV protection',
          'Anti-static',
          'Dust repellent',
          'Fresh scent'
        ],
        specifications: {
          'Volume': '500ml',
          'Finish': 'Satin',
          'Protection': 'UV resistant',
          'Suitable for': 'All interior surfaces'
        }
      },
      {
        id: 5,
        name: 'Motor Cleaner Spray',
        description: 'Professional engine degreaser spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Powerful degreasing',
          'Safe on all engine parts',
          'Easy rinsing',
          'Professional strength'
        ],
        specifications: {
          'Volume': '600ml',
          'Application': 'All engine types',
          'Cleaning Power': 'Industrial grade',
          'Safe for': 'Electrical components'
        }
      },
      {
        id: 6,
        name: 'Silicone Spray',
        description: 'Multi-purpose silicone lubricant',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Water repellent',
          'Plastic safe',
          'Non-staining',
          'Long-lasting'
        ],
        specifications: {
          'Volume': '400ml',
          'Temperature Range': '-50°C to +200°C',
          'Application': 'Multi-surface',
          'Type': 'Food grade silicone'
        }
      },
      {
        id: 7,
        name: 'Carburetor Spray',
        description: 'Professional carburetor cleaning spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Dissolves deposits',
          'Improves starting',
          'Cleans fuel system',
          'Restores performance'
        ],
        specifications: {
          'Volume': '500ml',
          'Application': 'All carburetors',
          'Cleaning Power': 'Professional grade',
          'Safe for': 'Oxygen sensors'
        }
      },
      {
        id: 8,
        name: 'MSS Multi-Super Spray',
        description: 'All-in-one maintenance spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Lubricates',
          'Protects',
          'Cleans',
          'Displaces moisture'
        ],
        specifications: {
          'Volume': '400ml',
          'Application': 'Universal',
          'Features': 'Multi-function',
          'Contains': 'Corrosion inhibitors'
        }
      },
      {
        id: 9,
        name: 'Air Conditioning Spray',
        description: 'AC system cleaning and freshening spray',
        category: 'Spray Systems',
        image: caldiniLogo,
        features: [
          'Eliminates odors',
          'Kills bacteria',
          'Fresh scent',
          'Easy application'
        ],
        specifications: {
          'Volume': '300ml',
          'Treatment Area': 'Complete AC system',
          'Duration': 'Long-lasting',
          'Type': 'Professional formula'
        }
      }
    ]
  },
  pax: {
    id: 'pax',
    name: 'Pax',
    description: 'Professional cleaning and maintenance equipment',
    logo: paxLogo,
    products: [
      {
        id: 1,
        name: 'H-Series H150',
        description: 'Hot/Cold Water High Pressure Washer',
        category: 'Pressure Washers',
        image: paxLogo,
        features: [
          'Hot and cold water operation',
          'Professional grade pump',
          'Adjustable temperature control',
          'Heavy-duty frame'
        ],
        specifications: {
          'Pressure': '150 bar',
          'Water Flow': '15 L/min',
          'Max Temperature': '140°C',
          'Power': '380V/3-phase'
        }
      },
      {
        id: 2,
        name: 'C-Series C200',
        description: 'Cold Water High Pressure Washer',
        category: 'Pressure Washers',
        image: paxLogo,
        features: [
          'Industrial grade pump',
          'Robust construction',
          'Easy maintenance',
          'Professional performance'
        ],
        specifications: {
          'Pressure': '200 bar',
          'Water Flow': '18 L/min',
          'Motor': '5.5 HP',
          'Power': '220V/single phase'
        }
      },
      {
        id: 3,
        name: 'Steam Master Pro',
        description: 'Industrial Steam Washer',
        category: 'Cleaning Equipment',
        image: paxLogo,
        features: [
          'High-temperature steam',
          'Multiple attachments',
          'Continuous refill',
          'Professional grade'
        ],
        specifications: {
          'Steam Pressure': '8 bar',
          'Temperature': '175°C',
          'Tank Capacity': '5L',
          'Power': '3600W'
        }
      },
      {
        id: 4,
        name: 'FoamPro 2000',
        description: 'Professional Foam/Liquid Sprayer',
        category: 'Spray Systems',
        image: paxLogo,
        features: [
          'Adjustable foam density',
          'Chemical resistant',
          'Multiple spray patterns',
          'Large capacity tank'
        ],
        specifications: {
          'Tank Capacity': '20L',
          'Pressure': '6 bar',
          'Spray Distance': '8m',
          'Material': 'Stainless Steel'
        }
      },
      {
        id: 5,
        name: 'CarSeat Pro',
        description: 'Car Seat and Carpet Cleaning Machine',
        category: 'Cleaning Equipment',
        image: paxLogo,
        features: [
          'Deep cleaning action',
          'Hot water extraction',
          'Powerful suction',
          'Multiple attachments'
        ],
        specifications: {
          'Tank Capacity': '25L',
          'Vacuum Motor': '1200W',
          'Pump Pressure': '4 bar',
          'Cable Length': '7.5m'
        }
      },
      {
        id: 6,
        name: 'Industrial Vacuum X3000',
        description: 'Heavy-Duty Industrial Vacuum Cleaner',
        category: 'Cleaning Equipment',
        image: paxLogo,
        features: [
          'Wet & dry operation',
          'HEPA filtration',
          'Stainless steel tank',
          'High capacity'
        ],
        specifications: {
          'Capacity': '80L',
          'Motor Power': '3000W',
          'Airflow': '3600 L/min',
          'Noise Level': '72 dB'
        }
      },
      {
        id: 7,
        name: 'HotAir 5000',
        description: 'Industrial Hot Air Generator',
        category: 'Industrial Equipment',
        image: paxLogo,
        features: [
          'High heat output',
          'Adjustable temperature',
          'Safety features',
          'Portable design'
        ],
        specifications: {
          'Heat Output': '50kW',
          'Airflow': '2500 m³/h',
          'Temperature Range': '20-80°C',
          'Fuel Type': 'Diesel'
        }
      },
      {
        id: 8,
        name: 'Pro Squeezer',
        description: 'Industrial Water Extraction System',
        category: 'Cleaning Equipment',
        image: paxLogo,
        features: [
          'High pressure extraction',
          'Quick drying',
          'Professional grade',
          'Easy operation'
        ],
        specifications: {
          'Pressure': '8 bar',
          'Water Flow': '10 L/min',
          'Motor': '2.2 kW',
          'Tank': '30L'
        }
      }
    ]
  },
  automec: {
    id: 'automec',
    name: 'Automec',
    description: 'Advanced diagnostic and testing equipment',
    logo: automecLogo,
    products: [
      {
        id: 1,
        name: 'FDT4000',
        description: 'Professional Diagnostic Testing System',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'Advanced diagnostics',
          'Multi-vehicle compatibility',
          'Real-time data',
          'Wireless connectivity'
        ],
        specifications: {
          'Display': '10" HD Screen',
          'Battery': 'Li-ion 5000mAh',
          'Connectivity': 'Wi-Fi/Bluetooth',
          'Memory': '256GB SSD'
        }
      },
      {
        id: 2,
        name: 'FDT5000',
        description: 'Enhanced Vehicle Diagnostic Platform',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'Full system diagnosis',
          'Coding capabilities',
          'OE-level access',
          'Cloud updates'
        ],
        specifications: {
          'Processor': 'Quad-core 2.0GHz',
          'Memory': '4GB RAM',
          'Storage': '500GB',
          'OS': 'AutoOS 5.0'
        }
      },
      {
        id: 3,
        name: 'FDT6000',
        description: 'Premium Diagnostic Testing Unit',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'Advanced programming',
          'Bi-directional control',
          'Oscilloscope function',
          'Remote diagnosis'
        ],
        specifications: {
          'Screen': '12" Touch HD',
          'Voltage': '12-24V',
          'Coverage': 'All brands',
          'Updates': 'Lifetime'
        }
      },
      {
        id: 4,
        name: 'FDT7000',
        description: 'Professional Diagnostic Master System',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'AI-powered diagnostics',
          'Advanced coding',
          'Wireless VCI',
          'Technical database'
        ],
        specifications: {
          'Processor': 'Octa-core',
          'RAM': '8GB',
          'Storage': '1TB SSD',
          'Battery Life': '8 hours'
        }
      },
      {
        id: 5,
        name: 'KT1000',
        description: 'Key Programming System',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'All key lost solution',
          'Proximity key programming',
          'Immobilizer codes',
          'Token system'
        ],
        specifications: {
          'Coverage': 'Multi-brand',
          'Updates': 'Online',
          'Interface': 'USB/Bluetooth',
          'Security': 'Advanced encryption'
        }
      },
      {
        id: 6,
        name: 'ETM2000',
        description: 'Engine Testing Module',
        category: 'Testing Equipment',
        image: automecLogo,
        features: [
          'Compression testing',
          'Fuel system analysis',
          'Sensor simulation',
          'Live data graphing'
        ],
        specifications: {
          'Measurement Range': '0-300 PSI',
          'Accuracy': '±1%',
          'Sampling Rate': '1MS/s',
          'Channels': '4'
        }
      },
      {
        id: 7,
        name: 'ETM1500',
        description: 'Electronic Testing Module',
        category: 'Testing Equipment',
        image: automecLogo,
        features: [
          'Circuit testing',
          'Component analysis',
          'Voltage testing',
          'Resistance measurement'
        ],
        specifications: {
          'Voltage Range': '0-500V',
          'Resistance': '0-40MΩ',
          'Current': '0-10A',
          'Display': 'Digital LCD'
        }
      },
      {
        id: 8,
        name: 'AD3030SX',
        description: 'Advanced Diagnostic Scanner',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'Full system scan',
          'Live data streaming',
          'ECU programming',
          'Wireless diagnosis'
        ],
        specifications: {
          'Protocol': 'All OBD2',
          'Screen': '7" Touch',
          'Memory': '32GB',
          'Battery': '4000mAh'
        }
      },
      {
        id: 9,
        name: 'RDT3000',
        description: 'Remote Diagnostic Terminal',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'Remote diagnosis',
          'Cloud connectivity',
          'Multi-user support',
          'Real-time collaboration'
        ],
        specifications: {
          'Connection': '4G/Wi-Fi',
          'Range': 'Unlimited',
          'Security': 'AES-256',
          'Cloud Storage': '100GB'
        }
      },
      {
        id: 10,
        name: 'FHD1000',
        description: 'Fleet Health Diagnostic System',
        category: 'Diagnostic Equipment',
        image: automecLogo,
        features: [
          'Fleet management',
          'Health monitoring',
          'Predictive maintenance',
          'Asset tracking'
        ],
        specifications: {
          'Fleet Size': 'Unlimited',
          'Data Storage': 'Cloud-based',
          'Reports': 'Customizable',
          'Integration': 'API available'
        }
      }
    ]
  }
}; 