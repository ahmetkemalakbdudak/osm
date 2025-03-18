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
    description: 'Professional high-pressure washing machines using Italian pump technology, designed for maximum performance with low water consumption.',
    logo: paxLogo,
    products: [
      {
        id: 1,
        name: 'C-Series C150',
        description: 'Cold Water High Pressure Washer with Italian pump technology, designed for professional cleaning in car washes, industrial areas, and various commercial applications.',
        category: 'Pressure Washers',
        image: paxLogo,
        features: [
          'Adjustable pressure control',
          '3 Cylinder Ceramic Piston pump',
          'Italian pump technology',
          'Low water consumption',
          'Professional grade performance',
          'Versatile applications'
        ],
        specifications: {
          'Pump Pressure': '150 bar',
          'Operating Pressure': '30-150 bar (Adjustable)',
          'Water Flow': '15 L/min (Adjustable)',
          'Motor Power': '4 kW / 5.5 HP',
          'Voltage': '220V - Single phase',
          'Pump Type': '3 Cylinder Ceramic Piston',
          'Hose Length': 'R2 / 12 meters'
        }
      },
      {
        id: 2,
        name: 'C-Series C200',
        description: 'Professional Cold Water High Pressure Washer with enhanced power, suitable for industrial cleaning, highways, airlines, and heavy-duty applications.',
        category: 'Pressure Washers',
        image: paxLogo,
        features: [
          'High pressure capability',
          '3 Cylinder Ceramic Piston pump',
          'Italian pump technology',
          'Industrial grade performance',
          'Adjustable settings',
          'Robust construction'
        ],
        specifications: {
          'Pump Pressure': '200 bar',
          'Operating Pressure': '30-200 bar (Adjustable)',
          'Water Flow': '15 L/min (Adjustable)',
          'Motor Power': '5.5 kW / 7.5 HP',
          'Voltage': '380V - Three phase',
          'Pump Type': '3 Cylinder Ceramic Piston',
          'Hose Length': 'R2 / 12 meters'
        }
      },
      {
        id: 3,
        name: 'E-Series E150',
        description: 'Advanced Cold Water High Pressure Washer designed for professional cleaning with enhanced efficiency and user-friendly operation.',
        category: 'Pressure Washers',
        image: paxLogo,
        features: [
          'Adjustable pressure system',
          '3 Cylinder Ceramic Piston pump',
          'Italian pump technology',
          'Energy efficient design',
          'Professional performance',
          'Versatile applications'
        ],
        specifications: {
          'Pump Pressure': '150 bar',
          'Operating Pressure': '30-150 bar (Adjustable)',
          'Water Flow': '15 L/min (Adjustable)',
          'Motor Power': '4 kW / 5.5 HP',
          'Voltage': '220V - Single phase',
          'Pump Type': '3 Cylinder Ceramic Piston',
          'Hose Length': 'R2 / 12 meters'
        }
      },
      {
        id: 4,
        name: 'B-200 Steam Washer',
        description: 'Professional Pressure Steam Washer utilizing Italian pump technology, designed for cleaning hard-to-reach areas and surfaces where water usage is restricted.',
        category: 'Cleaning Equipment',
        image: paxLogo,
        features: [
          'High-temperature steam cleaning',
          'Dual operator capability',
          'Automatic and manual filling',
          'Italian motor and pump',
          'Safety valve system',
          'Pressure stabilization'
        ],
        specifications: {
          'Max Steam Pressure': '8 bar',
          'Steam Temperature': '160-200°C',
          'Tank Capacity': 'Water 35L / Steam 20L',
          'Power Supply': '380V',
          'Heating Time': '5-7 minutes',
          'Gun Type': '2 Pieces (2 Operators)',
          'Safety Features': 'Valve, Pressure Stabilizer, Pressure Valve'
        }
      },
      {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        description: 'The FDT 4000 On-Vehicle Brake Disc Lathe Machine is designed to remove scratches, wear, and warping from brake discs over time, ensuring a longer lifespan for the brake disc.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'On-vehicle disc turning without removal',
          'Maintains brake disc balance',
          'High-quality diamond tips',
          'Precise adjustment (0.004mm)',
          'Built-in completion alarm',
          'Includes short and long stands'
        ],
        specifications: {
          'Max Disc Diameter': '330 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50HZ, 4.5A, 0.55KW',
          'Max Height': '100 cm',
          'Weight': '55 kg',
          'Certification': 'CE certified',
          'Warranty': '2 years'
        }
      },
      {
        id: 2,
        name: 'FDT5000',
        description: 'FDT5000 On-Vehicle Brake Disc Lathe Machine is designed to remove scratches, wear, and warping from brake discs over time, ensuring a longer lifespan for the brake disc.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'On-vehicle disc turning without removal',
          'Maintains brake disc balance',
          'High-quality diamond tips',
          'Precise adjustment (0.004mm)',
          'Built-in completion alarm',
          'Height adjustment mechanism with turner'
        ],
        specifications: {
          'Max Disc Diameter': '330 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50HZ, 4.5A, 0.55KW',
          'Max Height': '75 cm',
          'Weight': '65 kg',
          'Certification': 'CE certified',
          'Warranty': '2 years'
        }
      },
      {
        id: 3,
        name: 'FDT6000',
        description: 'The FDT6000 Disc Lathe Machine is designed for lathing discs with diameters ranging from 150 to 380 mm. It is suitable for discs of passenger cars, light commercial vehicles, and minibuses.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'Simultaneous dual-side disc lathing',
          'Automatic and manual operation',
          '35mm shaft thickness',
          'Vibration reduction system',
          'Complete mounting equipment included',
          '7 disc mounting apparatus'
        ],
        specifications: {
          'Max Disc Diameter': '380 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50Hz, 4.5A, 0.55KW',
          'Power Type': 'Mono-phase',
          'Weight': '80 kg',
          'Dimensions': '120x80x40 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years'
        }
      },
      {
        id: 4,
        name: 'FDT7000',
        description: 'FDT7000 Disc Lathe Machine is a dual-function model capable of performing lathe operations both on-vehicle and off-vehicle, combining the features of a standard disc lathe with on-vehicle functionality.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'On-vehicle and off-vehicle lathing capability',
          'Simultaneous dual-side disc lathing',
          'Complete on-board operation tools',
          '7 disc mounting apparatus',
          'All mounting equipment included',
          'Practical dual-function design'
        ],
        specifications: {
          'Max Disc Diameter': '380 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50HZ, 4.5A, 0.55KW',
          'Power Type': 'Mono-phase',
          'Weight': '95 kg',
          'Dimensions': '120x90x40 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years'
        }
      },
      {
        id: 6,
        name: 'ETM2000',
        description: 'ETM2000 Fuel System Cleaning Machine is designed as a long-lasting, reliable, versatile and effective machine for testing and cleaning both diesel and gasoline engines, including TDI, HDI and COMMON RAIL engines.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'Dual independent tanks for diesel and gasoline',
          'Compatible with all fuel types',
          'Electronic circuit control',
          'Digital operation panel',
          'Sound-light alarm system',
          'Independent pressure settings'
        ],
        specifications: {
          'Voltage': '12V DC - 16A',
          'Pressure (Gasoline)': '10 bar',
          'Pressure (Diesel)': '6 bar',
          'Dimensions': '1003x530x400 mm',
          'Weight': '40 kg',
          'Sound Level': '60 dBA',
          'Filters': '2 independent'
        }
      },
      {
        id: 7,
        name: 'ETM1500',
        description: 'ETM1500 is a versatile fuel system cleaning machine designed for either diesel or gasoline engines, including TDI, HDI and COMMON RAIL systems, with a single tank configuration for focused operation.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'Single tank design for focused operation',
          'Compatible with all fuel types',
          'Electronic control panel',
          'Digital operation display',
          'Sound-light alarm system',
          'Pressure regulation system'
        ],
        specifications: {
          'Voltage': '12V DC - 16A',
          'Pressure': '10 bar (0.8 for diesel)',
          'Motor Speed': '3300 rpm',
          'Dimensions': '1100x440x300 mm',
          'Weight': '25 kg',
          'Sound Level': '40 dBA',
          'Tank': 'Single configuration'
        }
      },
      {
        id: 8,
        name: 'AD3030',
        description: 'The Automec AD3030 S DPF Cleaning Machine with Measuring Function enables particulate filter cleaning without removing the filter from the vehicle, featuring built-in measurement capabilities for visible cleaning results.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'On-vehicle DPF cleaning',
          'Built-in measuring function',
          'Fully automatic operation',
          'Lambda sensor connection',
          '20-minute cleaning cycle',
          'Three-liquid system (A1, A2, A3)'
        ],
        specifications: {
          'Power Supply': '220V',
          'Pump Pressure': '1.5 bar x3',
          'Liquid Capacity': '3x5 liters',
          'Weight': '40 kg',
          'Dimensions': '90x50x50 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years'
        }
      },
      {
        id: 9,
        name: 'RDT3000',
        description: 'Radiator and Heater/Cooling System Cleaning Machine designed for quick and effective cleaning of heater and radiator systems within 45 minutes, without requiring front panel or cover removal.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'Digital temperature control',
          'Programmable operation',
          'Removable metal filter',
          'Multiple vehicle compatibility',
          'Automatic program termination',
          'Water level sensing'
        ],
        specifications: {
          'Power': '220V ±10% / 50Hz',
          'Pump': '0.37 kW, 35 L/min',
          'Tank Capacity': '9 liters',
          'Heating Element': '3500W',
          'Operation Time': '45 minutes',
          'Body Type': 'Metal construction',
          'Warranty': '2 years'
        }
      },
      {
        id: 10,
        name: 'FHD1000',
        description: 'A versatile brake fluid bleeding and hydraulic system maintenance device designed for single-operator use, compatible with all vehicles and featuring a comprehensive cover set.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'Dual power operation (12W/220W)',
          'Adjustable pressure system',
          'Universal vehicle compatibility',
          'Portable design',
          'Complete apparatus set',
          'Easy single-person operation'
        ],
        specifications: {
          'Power Options': '12W and 220W',
          'Pressure Range': '1-5 bar',
          'Tank Capacity': '2.2 liters',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Compatibility': 'All vehicles',
          'Fluid Type': 'Hydraulic/Pentosil'
        }
      },
      {
        id: 11,
        name: 'KTM1000',
        description: 'The Automec KTM1000 Brake Drum and Brake Disc Lathe Machine is designed for lathing discs with diameters ranging from 150 to 380 mm, as well as drums of passenger cars, light commercial vehicles, and minibuses.',
        category: 'Machine Tools',
        image: automecLogo,
        features: [
          'Combined disc and drum lathe capability',
          'Single shaft (25mm) design',
          'Easy tool mounting/dismounting',
          'Automatic and manual operation',
          'Vibration reduction system',
          'Complete mounting equipment included'
        ],
        specifications: {
          'Max Disc Diameter': '380 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '230/400V, 50HZ, 4.95/2.85A, 1.1KW, 3-phase',
          'Dimensions': '90x85x120 cm',
          'Weight': '170 kg',
          'Shaft Thickness': '25 mm',
          'Warranty': '2 years'
        }
      }
    ]
  }
}; 