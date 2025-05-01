import caldiniLogo from '../assets/caldini.png';
import paxLogo from '../assets/pax.png';
import automecLogo from '../assets/automec-logo-transparent.png';

// Define product categories
export type ProductCategory = 'aerosol' | 'carWash' | 'garage';

export interface Product {
  id: number;
  name: string;
  image: string;
  videoLinks?: string[];
  specifications: Record<string, string>;
  modelTable?: {
    headers: string[];
    rows: string[][];
  };
  subtitle?: string;
  localeKey?: string;
  category: ProductCategory;
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
    description: 'Professional Aerosol Products',
    logo: caldiniLogo,
    products: [
      {
        id: 1,
        name: 'Brake Cleaner',
        localeKey: 'brakeCleaner',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Application': 'Brake parts, machine parts',
          'Features': 'Non-corrosive, residue-free',
          'Safe for': 'Rubber and plastic parts'
        }
      },
      {
        id: 2,
        name: 'Chain Spray',
        localeKey: 'chainSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '400 ml',
          'Temperature Range': '-40˚C to +150˚C',
          'Features': 'Water-repellent, non-drip',
          'Applications': 'Bearings, chains, cables, O-rings'
        }
      },
      {
        id: 3,
        name: 'Penetrating Oil',
        localeKey: 'penetratingOil',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '400 ml',
          'Type': 'Lubricant and rust remover',
          'Applications': 'Joints, nuts, bolts, sliding surfaces',
          'Features': 'Fast-acting, noise-reducing'
        }
      },
      {
        id: 4,
        name: 'Cockpit Spray',
        localeKey: 'cockpitSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Type': 'Interior care spray',
          'Features': 'Dust-repellent, silicon-free, UV protection',
          'Suitable for': 'Dashboard, rubber, plastic, wood, leather'
        }
      },
      {
        id: 5,
        name: 'Motor Cleaner Spray',
        localeKey: 'motorCleanerSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Application': 'Engine and machine parts',
          'Features': 'Anti-corrosion, eco-friendly',
          'Usage Distance': '20 cm'
        }
      },
      {
        id: 6,
        name: 'Silicone Spray',
        localeKey: 'siliconeSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Temperature Range': '-20°C to +230°C',
          'Features': 'Colorless, non-toxic, anti-static',
          'Applications': 'Plastic, rubber, fabric parts'
        }
      },
      {
        id: 7,
        name: 'Carburetor Spray',
        localeKey: 'carburetorSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Type': 'Carburetor cleaner with lubricant',
          'Applications': 'Carburetors, throttle valves',
          'Features': 'Interior and exterior cleaning'
        }
      },
      {
        id: 8,
        name: 'MSS Multi-Super Spray',
        localeKey: 'mssMultiSuperSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Features': 'High pressure resistant, long-lasting',
          'Applications': 'Multi-purpose maintenance',
          'Properties': 'Anti-corrosion, penetrating'
        }
      },
      {
        id: 9,
        name: 'Air Conditioning Spray',
        localeKey: 'airConditioningSpray',
        category: 'aerosol',
        image: caldiniLogo,
        specifications: {
          'Volume': '500 ml',
          'Type': 'Foam cleaner',
          'Applications': 'All AC systems',
          'Features': 'Deodorizing, foam-forming'
        }
      }
    ]
  },
  pax: {
    id: 'pax',
    name: 'Pax',
    description: 'Car Wash and Industrial Cleaning Equipment',
    logo: paxLogo,
    products: [
      {
        id: 101,
        name: 'Hot-Cold Water High Pressure Washer H-Series',
        localeKey: 'hotColdWaterHighPressureWasher',
        category: 'carWash',
        image: paxLogo,
        videoLinks: ['https://youtube.com/shorts/X3vIdyyl4ms?si=IlJ4zwSSbm-B4fv3'],
        specifications: {
          'Models': 'H-150, H-200, H-250, H-300',
          'Pump Pressure': '150-300 bar (AR)',
          'Operating Pressure': '30-300 bar (Adjustable)',
          'Flow': '15 L/min (Adjustable)',
          'Temperature': '120°C (Adjustable)',
          'Pump Type': '3 Cylinder Ceramic Piston',
          'Fuel Type': 'Motorin',
          'Fuel Consumption': '3-6 L/S',
          'Hose Length': 'R2 / 12 mt.'
        },
        modelTable: {
          headers: ['Model', 'Pump Pressure (Bar)', 'Operating Pressure (Bar)', 'Flow (L/min)', 'Temperature (°C)', 'Motor Power (kW-Hp)', 'Voltage (Phase-Volt)', 'Pump Type', 'Fuel Type', 'Fuel Consumption (L/S)', 'Hose Length'],
          rows: [
            ['H-150', '150 - AR', '30 - 150 Adjustable', '15 Adjustable', '120 Adjustable', '4 / 5.5', '220 - 1', '3 Cylinder Ceramic Piston', 'Motorin', '3-6', 'R2 / 12 mt.'],
            ['H-200', '200 - AR', '30 - 200 Adjustable', '15 Adjustable', '120 Adjustable', '5.5 / 7.5', '380 - 3', '3 Cylinder Ceramic Piston', 'Motorin', '3-6', 'R2 / 12 mt.'],
            ['H-250', '250 - AR', '30 - 250 Adjustable', '15 Adjustable', '120 Adjustable', '7.5 / 10', '380 - 3', '3 Cylinder Ceramic Piston', 'Motorin', '3-6', 'R2 / 12 mt.'],
            ['H-300', '300 - AR', '30 - 300 Adjustable', '15 Adjustable', '120 Adjustable', '11 / 15', '380 - 3', '3 Cylinder Ceramic Piston', 'Motorin', '3-6', 'R2 / 12 mt.']
          ]
        }
      },
      {
        id: 102,
        name: 'Cold Water High Pressure Washer C-Series',
        localeKey: 'coldWaterHighPressureWasher',
        category: 'carWash',
        image: paxLogo,
        videoLinks: ['https://youtube.com/shorts/1IY-2VqU6xw?si=VG0yORe8HkaSRg5W'],
        specifications: {
          'Models': 'C-150, C-200, C-250, C-300',
          'Pump Pressure': '150-300 bar (AR)',
          'Operating Pressure': '30-300 bar (Adjustable)',
          'Flow': '15 L/min (Adjustable)',
          'Pump Type': '3 Cylinder Ceramic Piston',
          'Hose Length': 'R2 / 12 mt.'
        },
        modelTable: {
          headers: ['Model', 'Pump Pressure (Bar)', 'Operating Pressure (Bar)', 'Flow (L/min)', 'Motor Power (kW-Hp)', 'Voltage (Phase-Volt)', 'Pump Type', 'Hose Length'],
          rows: [
            ['C-150', '150 - AR', '30 - 150 Adjustable', '15 Adjustable', '4 / 5.5', '220 - 1', '3 Cylinder Ceramic Piston', 'R2 / 12 mt.'],
            ['C-200', '200 - AR', '30 - 200 Adjustable', '15 Adjustable', '5.5 / 7.5', '380 - 3', '3 Cylinder Ceramic Piston', 'R2 / 12 mt.'],
            ['C-250', '250 - AR', '30 - 250 Adjustable', '15 Adjustable', '7.5 / 10', '380 - 3', '3 Cylinder Ceramic Piston', 'R2 / 12 mt.'],
            ['C-300', '300 - AR', '30 - 300 Adjustable', '15 Adjustable', '11 / 15', '380 - 3', '3 Cylinder Ceramic Piston', 'R2 / 12 mt.']
          ]
        }
      },
      {
        id: 103,
        name: 'Manual Steam Washers',
        localeKey: 'steamWashers',
        category: 'carWash',
        image: paxLogo,
        videoLinks: ['https://www.youtube.com/embed/Iq1FHNra9Uc'],
        specifications: {
          'Product Code': 'BE-200-1T',
          'Operation Type': 'Manual',
          'Max. Steam Pressure': '6 - 12 Bar',
          'Max. Steam Temperature': '140 - 170 °C',
          'Warm-Up Time': '20 min.',
          'Tank Capacity': '20 Lt.',
          'Voltage': '220 V / 5 kW',
          'Gun Type': 'Single Gun',
          'Dimensions': '46x44x93 cm',
          'Safety Equipment': 'Thermodynamic Heat Control, Electrical Fuse, Safety Control'
        }
      },
      {
        id: 104,
        name: 'Foam Liquid Sprayer Series',
        localeKey: 'foamLiquidSprayerSeries',
        category: 'carWash',
        image: paxLogo,
        videoLinks: ['https://youtube.com/shorts/mSuj5HraQ6A?si=NWHDSqsQ749MAyD2'],
        specifications: {
          'Models': 'K-65, K-100',
          'Pressure': '5 bar',
          'Material': 'Stainless steel tank',
          'Construction': 'Professional grade',
          'Function': 'Foam - Liquid',
          'Hose Thickness': '8 mm'
        },
        modelTable: {
          headers: ['Product Code', 'Pressure (Bar)', 'Capacity', 'Function', 'Weight', 'Dimensions', 'Hose Length', 'Hose Thickness'],
          rows: [
            ['K-65', '5 Bar', '65 Lt.', 'Foam - Liquid', '20 Kg.', '50 x 50 x 95 cm', '8 mt.', '8 mm.'],
            ['K-100', '5 Bar', '65 Lt.', 'Foam - Liquid', '20 Kg.', '50 x 50 x 110 cm', '8 mt.', '8 mm.']
          ]
        }
      },
      {
        id: 105,
        name: 'Car Seat and Carpet Cleaning Machine',
        localeKey: 'carSeatAndCarpetCleaningMachine',
        category: 'carWash',
        image: paxLogo,
        specifications: {
          'Product Code': 'PX-60',
          'Power': '2800 W Duble Fan Motor',
          'Vacuum': '245 mbar / 24,5 kPa x 2',
          'Air Flow': '61 Lt/Sn',
          'Motor': '1400 W x 2',
          'Function': 'Wet - Dry',
          'Voltage': '220 - 240 V',
          'Tank Capacity (Dirty Water)': '60 Lt.',
          'Tank Capacity (Clean Water)': '15 Lt.',
          'Dimensions': '56x70x106 cm',
          'Cable Length': '10 mt.'
        }
      },
      {
        id: 106,
        name: 'Hard Floor and Carpet Cleaning Machine',
        localeKey: 'hardFloorAndCarpetCleaningMachine',
        category: 'carWash',
        image: paxLogo,
        specifications: {
          'Power': '2.2 kW',
          'Suction Power': '1200W',
          'Tank Capacity': '100 L',
          'Weight': '110 kg',
          'Dimensions': '1000x800x1400 mm',
          'Material': 'Stainless steel construction'
        }
      },
      {
        id: 107,
        name: 'Industrial Wet-Dry Vacuum Cleaner',
        subtitle: 'Two Motor and Three Motor Models',
        localeKey: 'industrialWetDryVacuumCleaner',
        category: 'carWash',
        image: paxLogo,
        specifications: {
          'Material': 'Stainless steel construction',
          'Features': 'Professional grade industrial vacuum cleaner',
          'Voltage': '220 - 240 V 50-60 Hz',
          'Noise Level': '68 dB',
          'Hose Length': '10 Mt.'
        },
        modelTable: {
          headers: ['Product Code', 'Function', 'Voltage', 'Motor Power', 'Vacuum Power', 'Air Flow', 'Tank Capacity', 'Noise Level', 'Hose Length'],
          rows: [
            ['PX 602-S', 'Wet - Dry', '220 - 240 V 50-60 Hz', '1400 W x 2', '245mbar / 24,5 kPa x 2', '60 L/s x 2', '60 Lt.', '68 dB', '10 Mt.'],
            ['PX 603-S', 'Wet - Dry', '220 - 240 V 50-60 Hz', '1400 W x 3', '245mbar / 24,5 kPa x 3', '60 L/s x 3', '60 Lt.', '68 dB', '10 Mt.']
          ]
        }
      },
      {
        id: 108,
        name: 'Hot Air Generator ECO',
        localeKey: 'hotAirGeneratorEco',
        category: 'carWash',
        image: paxLogo,
        specifications: {
          'Motor': '0,37 kW',
          'Heat Temperature': '0 - 90°',
          'Cable Length': '5 mt.',
          'Dimensions': '42 x 42 x 62 cm',
          'Weight': '22 Kg.'
        },
        modelTable: {
          headers: ['Product Code', 'Heating Power', 'Voltage'],
          rows: [
            ['SH-220-E', '1500 W x 4', '220 V'],
            ['SH-380-E', '6000 W x 4', '380 V Trifaz']
          ]
        }
      },
      {
        id: 109,
        name: 'Cloth Squeezing Machine',
        localeKey: 'clothSqueezingMachine',
        category: 'carWash',
        image: paxLogo,
        specifications: {
          'Width': '35 cm',
          'Mounting': 'Can be mounted to walls'
        }
      },
      {
        id: 111,
        name: 'Air-Operated Waste-Oil Extractor',
        localeKey: 'airOperatedWasteOilExtractor',
        category: 'garage',
        image: paxLogo,
        videoLinks: ['https://youtube.com/shorts/LrbEGOIFH_w?si=JEhUNGLl6LVl5pQv'],
        specifications: {},
        modelTable: {
          headers: ['Product Code', 'Operating Type', 'Operating Pressure', 'Operating Temperature', 'Discharging Pressure', 'Capacity', 'Hose Length', 'Dimensions', 'Weight'],
          rows: [
            ['KY-01', 'Air', '6 - 8 Bar', '60 - 80 °C', '0,5 Bar', '100 + 9 Lt.', '1,5 Mt.', '50x55x120 Cm', '28 Kg.'],
            ['KY-02', 'Air', '6 - 8 Bar', '60 - 80 °C', '0,5 Bar', '100 + 9 Lt.', '1,5 Mt.', '50x55x120 Cm', '31 Kg.']
          ]
        }
      }
    ]
  },
  automec: {
    id: 'automec',
    name: 'Automec',
    description: 'Professional Car Service & Garage Equipment',
    logo: automecLogo,
    products: [
      {
        id: 201,
        name: 'FDT4000',
        subtitle: 'Onboard Brake Disc Lathe Machine (Standard Model)',
        localeKey: 'fdt4000',
        category: 'garage',
        image: automecLogo,
        videoLinks: [
          'https://www.youtube.com/embed/zq5lMbxyvSE',
          'https://www.youtube.com/embed/pIRkxUBctAY'
        ],
        specifications: {
          'Max Disc Diameter': '330 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50HZ, 4.5A, 0.55KW',
          'Max Height': '100 cm',
          'Weight': '55 kg',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Compatibility': 'Personal and light commercial vehicles and minibuses',
          'Working Positions': 'Car lift, jack lift, and ground',
          'Features': 'Practical and easy to move',
          'Support': 'Service and spare parts available',
          'Equipment': 'Includes 2 legs (long leg for lift, short leg for jack)'
        }
      },
      {
        id: 202,
        name: 'FDT5000',
        subtitle: 'Onboard Brake Disc Lathe Machine',
        localeKey: 'fdt5000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/a61uUSpygXs'],
        specifications: {
          'Max Disc Diameter': '330 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50HZ, 4.5A, 0.55KW',
          'Max Height': '75 cm',
          'Weight': '65 kg',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Compatibility': 'Personal and light commercial vehicles and minibuses',
          'Working Positions': 'Car lift, jack lift, and ground',
          'Features': 'Practical and easy to move',
          'Support': 'Service and spare parts available',
          'Special Feature': 'Height adjustment mechanism with turner at top'
        }
      },
      {
        id: 203,
        name: 'FDT6000',
        subtitle: 'Brake Disc Lathe Machine (Stationary)',
        localeKey: 'fdt6000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/g2yaa4UvWpA', 'https://www.youtube.com/embed/cMNt1PGjLso'],
        specifications: {
          'Max Disc Diameter': '380 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50Hz, 4.5A, 0.55KW',
          'Power Type': 'Mono-phase',
          'Weight': '80 kg',
          'Dimensions': '120x80x40 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Support': 'Service and spare parts available',
          'Shaft Thickness': '35 mm',
          'Operation': 'Automatic and manual',
          'Features': 'Simultaneous dual-side disc lathing',
          'Equipment': 'All necessary apparatus and 7 pieces of mounting equipment included',
          'Additional Features': 'Vibration and noise-reducing plastic O-rings, support bracket for lathe tool'
        }
      },
      {
        id: 204,
        name: 'FDT7000',
        subtitle: 'Brake Disc Lathe Machine (Stationary & Onboard)',
        localeKey: 'fdt7000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/g2yaa4UvWpA', 'https://www.youtube.com/embed/cMNt1PGjLso'],
        specifications: {
          'Max Disc Diameter': '380 mm',
          'Max Disc Thickness': '42 mm',
          'Motor': '220V, 50HZ, 4.5A, 0.55KW',
          'Power Type': 'Mono-phase',
          'Weight': '95 kg',
          'Dimensions': '120x90x40 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Support': 'Service and spare parts available',
          'Features': 'Dual-function (on-vehicle and off-vehicle operation)',
          'Operation': 'Both sides of disc lathed simultaneously',
          'Equipment': 'All necessary apparatus for mounting disc onto shaft included',
          'Mounting Equipment': '7 pieces of apparatus for mounting disc on the axle',
          'Additional Features': 'Complete onboard operation tools included, practical design'
        }
      },
      {
        id: 205,
        name: 'ETM2000',
        subtitle: 'Engine Fuel System Cleaning Machine (Injection System)',
        localeKey: 'etm2000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/IKGd_sOLxy8'],
        specifications: {
          'Voltage': '12V DC - 16A',
          'Pressure (Gasoline)': '10 bar',
          'Pressure (Diesel)': '6 bar',
          'Dimensions': '1003x530x400 mm',
          'Weight': '40 kg',
          'Sound Level': '60 dBA',
          'Filters': '2 independent',
          'Pumps': 'Two independent pressure pumps for gasoline and diesel',
          'Engines': 'Two engines',
          'Control': 'Electronic control for circuits',
          'Display': 'Digital panel for sequential and independent operations',
          'Alarm': '60 dBA sound-light alarm',
          'Timers': 'Two independent indicators for elapsed time and cleaning',
          'Pressure Control': 'Two pressure setting buttons (Regulator)',
          'Equipment': 'Full link titles, injection system hose and record set, pole connecting cable and ratchets',
          'Special Features': 'Independent pressure and recycling spiral hose for diesel and gasoline'
        }
      },
      {
        id: 206,
        name: 'ETM1500',
        subtitle: 'Fuel System Cleaning Machine (Injection System)',
        localeKey: 'etm1500',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/IKGd_sOLxy8'],
        specifications: {
          'Voltage': '12V DC - 16A',
          'Pressure': '10 bar (0.8 for diesel)',
          'Motor Speed': '3300 rpm',
          'Dimensions': '1100x440x300 mm',
          'Weight': '25 kg',
          'Sound Level': '40 dBA',
          'Tank': 'Single configuration',
          'Power Supply': 'Car battery connection',
          'Control': 'Electronic control panel for circuits',
          'Display': 'Digital panel for operations',
          'Alarm': '40 dBA sound-light alarm',
          'Timer': 'Independent indicator for elapsed time and cleaning',
          'Pressure Control': 'One pressure setting button (Regulator)',
          'Filter': 'One filter in the machine',
          'Equipment': 'Full link titles, injection system hose and record set, battery connection cable',
          'Special Features': 'Independent pressure and recycling spiral hose for diesel or gasoline'
        }
      },
      {
        id: 207,
        name: 'AD3030',
        subtitle: 'Onboard DPF Cleaning Machine with Measuring Function',
        localeKey: 'ad3030',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/4yOQjopf_Qo', 'https://www.youtube.com/embed/67ogVRCChBk'],
        specifications: {
          'Power Supply': '220V / 50Hz',
          'Pump Pressure': '1.5 bar x3',
          'Liquid Capacity': '3x5 liters',
          'Weight': '40 kg',
          'Dimensions': '90x50x50 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Operation Time': '20-30 minutes',
          'Operation Mode': 'Full automatic',
          'Connection': 'Via lambda sensor',
          'Engine Status': 'Running in neutral (N)',
          'Liquids': '3 specialized liquids (A1, A2, A3)',
          'Features': 'Built-in measuring function, visible results display',
          'Support': 'Spare parts and service available',
          'Benefits': 'Time-saving, economic, no filter removal required, practical and easy to use',
          'User Manual': 'Provided in local language'
        }
      },
      {
        id: 208,
        name: 'RDT3000',
        subtitle: 'Radiator and Heater Cleaning Machine',
        localeKey: 'rdt3000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/PM3_FYtqL2c'],
        specifications: {
          'Power Source': '220V ±10% / 50Hz',
          'Pump': '220 AC/50Hz, 0.37 kW, 35 L/min',
          'Tank Capacity': '9 liters chrome tank',
          'Body': 'Metal body',
          'Heating Element': '3500 watt chrome tube',
          'Operation Time': '45 minutes',
          'Temperature': '80°C',
          'Warranty': '2 years',
          'Display': 'Digital timer and temperature display',
          'Alarm': 'End-of-operation audible alert system',
          'Filter': 'Special filter system for rust, sediment, and scale cleaning',
          'Safety Features': 'Water tank level sensor, automatic program termination',
          'Additional Features': 'Water drainage faucet, 4 working programs'
        }
      },
      {
        id: 209,
        name: 'FHD1000',
        subtitle: 'Brake Fluid Change and Hydraulic Air Bleed Machine',
        localeKey: 'fhd1000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/lVc3116380s'],
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
        id: 210,
        name: 'KTM1000',
        subtitle: 'Brake Disc and Brake Drum Lathe Machine',
        localeKey: 'ktm1000',
        category: 'garage',
        image: automecLogo,
        videoLinks: [
          'https://www.youtube.com/embed/3X9vYqbfY1E',
          'https://www.youtube.com/embed/NjBMiVHSk3M',
          'https://www.youtube.com/embed/r7ZEf4M4fPM'
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