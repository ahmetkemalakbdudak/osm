import caldiniLogo from '../assets/caldini.png';
import paxLogo from '../assets/pax.png';
import automecLogo from '../assets/automec-logo-transparent.png';
import gulersanLogo from '../assets/gulersan.png';

// Define product categories
export type ProductCategory = 'aerosol' | 'carWash' | 'garage' | 'lubricationEquipment' | 'handTools';

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
        videoLinks: ['https://www.youtube.com/embed/X3vIdyyl4ms'],
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
        videoLinks: ['https://www.youtube.com/embed/1IY-2VqU6xw'],
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
        name: 'Steam Washer',
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
        videoLinks: ['https://www.youtube.com/embed/mSuj5HraQ6A'],
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
      },
      {
        id: 301,
        name: 'BDL3000 CARMEC',
        subtitle: 'Heavy Duty Brake Disc Lathe for Trucks and Commercial Vehicles',
        localeKey: 'bdl3000',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/zEt6Bbqqdqw', 'https://www.youtube.com/embed/BHwRquu5Olc'],
        specifications: {
          'Max. Disc Turning Diameter': '500 mm',
          'Min. Brake Disc Diameter': '120 mm',
          'Max. Brake Disc Thickness': '70 mm',
          'Maximum Working Width': '140 mm',
          'Disc Rotation Speed': '50 RPM',
          'Variable Feed Speed': '0÷28 mm/min',
          'Motor Power': '2 Hp (1.5 kW)',
          'Voltage': '400V - 50 Hz - 3 phases',
          'Dimensions (LxWxH)': '110 x 110 x 115 cm',
          'Weight': '235 kg',
          'Features': 'Motorized and electronically adjustable intermittent feeding, electronic controlled soft-start motor, adjustable and balancing trolley',
          'Equipment Included': 'Pair of disc cutting tools, flange adapter for 10 hole hub connection (Euro axle), set of service spanners, operating and maintenance manual',
          'Compatibility': 'Trucks, buses and light commercial vehicles',
          'Special Features': '360° positioning capability, no caliper dismantling required, dual-side precision turning in single operation',
          'Axle Types': 'Traditional axles and axles with hub reduction gear'
        }
      },
      {
        id: 302,
        name: 'BL650VS CARMEC',
        subtitle: 'Multi-Speed Brake Disc & Drum Lathe',
        localeKey: 'bl650vs',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/FvO4bvyHcQ8'],
        specifications: {
          'Min - Max Disc Diameter': '102 - 635 mm (4\" - 25\")',
          'Max Disc Thickness': '100 mm (4\")',
          'Min - Max Drum Diameter': '150 - 650 mm (6\" - 26\")',
          'Max Drum Depth': '200 mm (8\")',
          'Infinitely Variable Spindle Speed': '0 ÷ 350 RPM',
          'Infinitely Variable Disc/Drum Feed': '0 ÷ 72 mm/min (0 ÷ 2.85\"/min)',
          'Spindle Motor Power': '1.5 kW - 2 HP',
          'Drum Feed DC Motor': '185 W',
          'Disc Feed DC Motor': '185 W',
          'Voltage': '215/240 V ±15%',
          'Phases': '1 Ph',
          'Frequency': '50/60 Hz',
          'Net Weight': '250 kg (550 Lbs.)',
          'Machine Dimensions (LxWxH)': '1250x1100x1650 mm (49\" x 43\" x 65\")',
          'Shipping Dimensions (LxWxH)': '1150x1050x1750 mm (45\" x 41\" x 67\")',
          'Shipping Weight': '350 kg (770 Lbs.)',
          'Key Features': 'Separate DC gear-motors on drum and disc feed, electronically controlled variable spindle speed and cross feed speed, mounted tool board, quick changeover from disc to drum, automatic shut-off',
          'Standard Equipment': 'Low voltage electric controls (24V), heavy duty work bench, removable chip tray, tool storage boards, safety plexiglass guard, LED work light, adjustable twin cutter head for discs, drum boring bar, arbor sets, silencers',
          'Construction': '180 kg rigid cast iron body, heavy-duty work bench eliminates vibrations'
        }
      },
      {
        id: 111,
        name: 'Air-Operated Waste-Oil Extractor',
        localeKey: 'airOperatedWasteOilExtractor',
        category: 'garage',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/LrbEGOIFH_w'],
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
  gulersan: {
    id: 'gulersan',
    name: 'Gulersan',
    description: 'Professional Lubrication Equipment and Hand Tools',
    logo: gulersanLogo,
    products: [
      {
        id: 401,
        name: '9200 Pneumatic Washing Tank',
        subtitle: '80 Lt Air Operated Part Washing Machine',
        localeKey: 'pneumaticWashingTank9200',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': '9200',
          'Working Type': 'Air',
          'Discharge Pressure': '0,5 Bar',
          'Tank Capacity': '80 Lt',
          'Pan Capacity': '45 Lt',
          'Hose Length': '1,5 Mt',
          'Hose Dimension': '3/4″',
          'Box Dimensions': '58x61x103 Cm',
          'Weight': '40 Kg',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 402,
        name: 'AYT2 Waste Oil Pan',
        subtitle: '50 Lt Mobile Waste Oil Collection Pan',
        localeKey: 'ayt2WasteOilPan',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'AYT2',
          'Sump Capacity': '50 Lt',
          'Pan Dimensions': '70x45x15 Cm',
          'Warranty Period': '24 Month'
        }
      },
      {
        id: 403,
        name: 'AYT1 Waste Oil Pan',
        subtitle: '100 Lt Mobile Waste Oil Collection Pan',
        localeKey: 'ayt1WasteOilPan',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'AYT1',
          'Sump Capacity': '100 Lt',
          'Pan Dimensions': '100x65x15 Cm',
          'Warranty Period': '24 Month'
        }
      },
      {
        id: 405,
        name: '6650 Waste Oil Changer Extractor With Pantograph',
        subtitle: '80 Lt Telescopic Waste Oil Suction Machine - 40 Lt Pan',
        localeKey: 'wasteOilChanger6650_40',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': '6650.40',
          'Working Type': 'Air',
          'Working Temperature': '60 – 80 C°',
          'Working Pressure': '6 – 8 Bar',
          'Discharge Pressure': '0,5 Bar',
          'Tank Capacity': '80 Lt',
          'Hose Length': '2 Mt',
          'Hose Dimension': '10×16 Mm',
          'Pan Capacity': '40 Lt',
          'Box Dimensions': '57x67x138 Cm',
          'Weight': '47,80 Kg',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 407,
        name: '6640 Waste Oil Changer Extractor With Pantograph',
        subtitle: '80 Lt Telescopic Waste Oil Suction Machine - 40 Lt Pan',
        localeKey: 'wasteOilChanger6640_40',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': '6640.40',
          'Working Type': 'Air',
          'Working Temperature': '60 – 80 C°',
          'Working Pressure': '6 – 8 Bar',
          'Discharge Pressure': '0,5 Bar',
          'Tank Capacity': '80 Lt',
          'Hose Length': '2 Mt',
          'Hose Dimension': '10×16 Mm',
          'Pan Capacity': '40 Lt',
          'Box Dimensions': '57x67x138 Cm',
          'Weight': '44,3 Kg',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 409,
        name: '4295 Air Operated Waste Oil Drainers With Pantograph',
        subtitle: '80 Lt Telescopic Oil Drain Bucket - 40 Lt Pan',
        localeKey: 'wasteOilDrainers4295_40',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': '4295.40',
          'Working Type': 'Air',
          'Discharge Pressure': '0,5 Bar',
          'Tank Capacity': '80 Lt',
          'Pan Capacity': '40 Lt',
          'Hose Length': '1,5 Mt',
          'Hose Dimension': '3/4″',
          'Box Dimensions': '57x67x138 Cm',
          'Weight': '44,20 Kg',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 410,
        name: 'TYS4400 Oil Storage With Pump',
        subtitle: 'Complete Oil Storage System with Air Operated Pump',
        localeKey: 'tys4400OilStorage',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'TYS4400',
          'System Type': 'Complete Oil Storage System',
          'Tank Capacity': '208 Lt',
          'Air Operated Oil Pump': '4400',
          'Digital Oil Gun': '4106',
          'Drip Tray': '7110',
          'Oil Hose Reel': '4500N.1038',
          'Warranty Period': '24 Month'
        }
      },
      {
        id: 411,
        name: 'SVS4500 Portable Oil Drum System With Reel',
        subtitle: 'Portable Oil Drum System with Customizable Components',
        localeKey: 'svs4500OilDrumSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'SVS4500',
          'System Type': 'Portable Oil Drum System',
          'Air Operated Oil Pump': '4400',
          'Digital Oil Gun': '4106',
          'Barrel Trolley': '2420',
          'Oil Hose Reel': '4500N.1038',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 412,
        name: 'SVS4400 Portable Oil Drum System Without Reel',
        subtitle: 'Portable Oil Drum System with Flexible Hose Options',
        localeKey: 'svs4400OilDrumSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'SVS4400',
          'System Type': 'Portable Oil Drum System',
          'Air Operated Oil Pump': '4400',
          'Digital Oil Gun': '4106',
          'Barrel Trolley': '2410',
          'Hose Length': '5 Mt',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 413,
        name: 'DVS4500 Air Operated Stationary Drum System',
        subtitle: 'Stationary Oil Drum System with Customizable Components',
        localeKey: 'dvs4500StationaryDrumSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'DVS4500',
          'System Type': 'Stationary Oil Drum System',
          'Air Operated Oil Pump': '4400',
          'Digital Oil Gun': '4106',
          'Oil Hose Reel': '4500N.1038',
          'Hose Length': '2,5 Mt',
          'Drip Tray': '7110',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 414,
        name: 'IBC4500 IBC Oil System With Reel',
        subtitle: 'High Capacity IBC Oil System with Customizable Components',
        localeKey: 'ibc4500OilSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'IBC4500',
          'System Type': 'IBC Oil System',
          'Air Operated Oil Pump': '3045',
          'Digital Oil Gun': '4106',
          'Oil Hose Reel': '4500N.1038',
          'Drip Tray': '7160',
          'Hose': '1 Mt x 2 (Pump and IBC Connection)',
          'Warranty Period': '24 Month',
          'Box Dimensions': '20x70x113 Cm'
        }
      },
      {
        id: 415,
        name: 'IBC3045 IBC Oil System Without Reel',
        subtitle: 'High Capacity IBC Oil System Without Reel',
        localeKey: 'ibc3045OilSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'IBC3045',
          'System Type': 'IBC Oil System',
          'Air Operated Oil Pump': '3045',
          'Digital Oil Gun': '4106',
          'Hose': '5 Mt (Pump Outlet)',
          'Drip Tray': '7150',
          'IBC Connection Hose': '1 Mt',
          'Warranty Period': '24 Month',
          'Box Dimensions': '20x70x80 Cm'
        }
      },
      {
        id: 416,
        name: '4200 Air Operated Oil Pump 80 Lt',
        subtitle: 'Mobile Air Operated Oil Pump with 3:1 Pressure Ratio',
        localeKey: 'airOperatedOilPump4200',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': '4200',
          'Working Type': 'Air',
          'Working Pressure': '6 – 8 Bar',
          'Pressure Ratio': '3:1',
          'Output': '15 Lt/Min',
          'Capacity': '80 Lt',
          'Hose Length': '3 Mt',
          'Hose Dimension': 'R1-3/8″',
          'Box Dimensions': '48x49x113 Cm',
          'Weight': '28,30 Kg',
          'Warranty Period': '36 Month',
          'Delivery Content': '4105 Manual Oil Gun'
        }
      },
      {
        id: 417,
        name: 'DVS2500 Grease Stationary Drum System',
        subtitle: 'Stationary Grease Drum System with Customizable Components',
        localeKey: 'dvs2500GreaseStationaryDrumSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'DVS2500',
          'System Type': 'Stationary Grease Drum System',
          'Air Operated Grease Pump': '2400',
          'Grease Gun': '2305',
          'Grease Z Swivel': '2405',
          'Barrel Lid': '2085',
          'Follower Plate Weight': '2620',
          'Grease Hose Reel': '2500N.1014',
          'Follower Plate': '2621.185',
          'Hose': '2,5 Mt',
          'Drip Tray': '7110',
          'Warranty Period': '24 Month'
        }
      },
      {
        id: 418,
        name: 'SVS2500 Portable Grease Drum System With Reel',
        subtitle: 'Portable Grease Drum System with Customizable Components',
        localeKey: 'svs2500PortableGreaseDrumSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'SVS2500',
          'System Type': 'Portable Grease Drum System',
          'Air Operated Grease Pump': '2400',
          'Grease Gun': '2305',
          'Grease Z Swivel': '2405',
          'Barrel Lid': '2085',
          'Follower Plate Weight': '2620',
          'Follower Plate': '2621.185',
          'Barrel Trolley': '2420',
          'Grease Hose Reel': '2500N.1014',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 419,
        name: 'SVS2400 Portable Grease Drum System Without Reel',
        subtitle: 'Portable Grease Drum System Without Reel',
        localeKey: 'svs2400PortableGreaseDrumSystem',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': 'SVS2400',
          'System Type': 'Portable Grease Drum System',
          'Air Operated Grease Pump': '2400',
          'Grease Gun': '2305',
          'Grease Z Swivel': '2405',
          'Barrel Lid': '2085',
          'Follower Plate Weight': '2620',
          'Follower Plate': '2621.185',
          'Barrel Trolley': '2410',
          'Hose': '5 Mt',
          'Warranty Period': '36 Month'
        }
      },
      {
        id: 420,
        name: '2330 Air Operated Grease Pump 30 Kg',
        subtitle: 'Mobile Air Operated Grease Pump with 70:1 Pressure Ratio',
        localeKey: 'airOperatedGreasePump2330',
        category: 'lubricationEquipment',
        image: gulersanLogo,
        specifications: {
          'Model': '2330',
          'Working Type': 'Air',
          'Working Pressure': '6 – 8 Bar',
          'Pressure Ratio': '70:1',
          'Output': '1100 Gr/Min',
          'Capacity': '30 Kg',
          'Hose Length': '3 Mt',
          'Hose Dimension': 'R2 1/4″',
          'Box Dimensions': '48x50x104 Cm',
          'Weight': '23,50 Kg',
          'Warranty Period': '36 Month'
        }
      }
    ]
  }
};