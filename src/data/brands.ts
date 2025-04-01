import caldiniLogo from '../assets/caldini.png';
import paxLogo from '../assets/pax.png';
import automecLogo from '../assets/automec-logo-transparent.png';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  videoLinks?: string[];
  specifications: Record<string, string>;
  modelTable?: {
    headers: string[];
    rows: string[][];
  };
  subtitle?: string;
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
        description: 'Highly special cleaning agent with intensive cleaning effect for oily and greasy machine parts, disc brakes and brake parts, such as brake choke, plates and clutch linings. Ideal as a cleaning agent for industry and trade, for repairs and assembly.\n\n- Optimum cleaning effect within a short space of time\n- Works without leaving any residues\n- Removes even hardened lubricants\n- Not corrosive and does not attack rubber or plastic parts',
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
        description: 'The use of chain sprey allows a long-term internal external lubrication of bearings, gear mechanisms, roller and ball bearings, O-rings seals and all sorts of joints clutches, chains and wire cables.\n\n- Resistant to temperatures ranging from -40˚C to +150˚C\n- Excellent corrosion protection, water-repellent and economics\n- Displaces moisture, does not drip or smear\n- Produces a smooth and quite running',
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
        description: 'Well-established lubricant and rust remover. Penetrating oil solves effortlessly and fast, many problems with servicing, repairs, maintenance and production.\n\n- Unfastening rust screwed joints, nuts and bolts\n- Offering lasting production from corrosion\n- Greasing sliding surfaces\n- Removing squeaking and creaking noises\n- Cleaning brake linkages, Bowden cables and chains of all sorts',
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
        description: 'Cleans, polishes and preserves dashboards, rubber, plastic, wood, leather and synthetic parts in interior of cars (e.g. cockpits, rubber, mats and vinyl roofs)\n\n- Cockpit spray is dust-repellent and silicon free\n- Makes synthetic material last longer\n- Protects from dirt, frictional electricity and moisture\n- Makes parts that have been treated appear as new\n- Gives protection from ultra-violet radiation and spreads a pleasant smell in the car.',
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
        description: 'Provide cleaning of engine, engine block and machine parts from burnt oil and dirt. Prevents corrosion and oxidation of the engine block. Does not harm the environment.\n\n- After thoroughly shake the box compress from a distance of 20 cm to the dirty surface and wait for penetrate\n- Then wash with water\n- For extremely dirty surfaces repeat the operation several times',
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
        description: 'It gives striking shine to plastic parts (spoiler, bumper guard, bumper, radiator grille, PVC outer roof lining, door trim, etc.) and prevents cracking. It takes care of rubber parts (door and hood tires, rubber protectors, engine belts, radiator pipes, car tires) and prevents loosening, sticking and freezing. It is used for lubricating seat rails, hinges of opening roofs and automatic seat belts. It provides waterproofing of convertible cloth ceilings and cover canvases. It eliminates squeaks and friction sounds, has anti-static properties. It acts as a lubricant during assembly, for example when connecting rubber pipes.\n\nIt is colorless and does not stain. It is not poisonous.',
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
        description: 'A special blend of cleaning agents formulated to give effective cleaning of both the interior and exterior of carburetor. Can also be used clean Butterfly Throttle Valves and Idle Speed Actuators. Because carburetor cleaner is formulated with added lubricant that will also lubricate any moving parts which have been cleaned.\n\n- Ideal as a cleaning agent for industry and trade\n- For repairs, assembly and routine maintenance\n- Removes all oil, grease and fuel residues',
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
        description: 'It can be used for chains, open gears, bearings, cogwheels, vehicle door, hinges, locks, rails, joints and nuts, steering gear joints etc.\n\nIt is used in many applications in the areas of service, repair, maintenance and production.\n\nIt has a sliding feature and prevents squeaks.\n\n- Endure the high pressure\n- Well penetrating characteristics\n- Long lasting\n- Effective lubricant\n- Anti-corrosion',
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
        description: 'Air Conditioning Cleaning Foam is a high quality product based on water and additives. The product cleans all kind of air-conditioning systems (car,houses,offices etc.) Due to the special ingredients the foam forming and cleaning properties are excellent. After the foam has disappeared, a clean surface remains.\n\n- Air conditioning cleaner is only use to clean air-conditioning\n- Cleaning properties by detergents against all pollutions\n- Deodorizes and prevents the formation of unpleasant odours',
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
        id: 1,
        name: 'Hot-Cold Water High Pressure Washer H-Series',
        description: 'Pax High Pressure Washing Machines are machines designed to achieve maximum performance with low water consumption and ease of use, using Italian pump technology.\n\nOur machines, which are produced in different models and pressures as cold and hot water according to the usage area, are suitable for use not only in car washes and car detailing, but also in many different areas such as industrial areas, highways, airlines, shipping, restaurants, hospitals, livestock farms and agriculture.',
        image: paxLogo,
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
        id: 2,
        name: 'Cold Water High Pressure Washer C-Series',
        description: 'Professional cold water high pressure washers with adjustable pressure control',
        image: paxLogo,
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
        id: 3,
        name: 'Steam Washers',
        subtitle: 'Pressured Steam Washer',
        description: 'Using Italian pump technology, Pax Pressure Steam Washer is manufactured in order to clean easily and quickly the places where it is difficult to reach and where water cannot be used.\n\nIt produces 200 °C hot steam, making it very easy to reach and clean successfully in places that are difficult to clean. It will allow you to achieve effective results in a short time. It is extremely useful in places where there are electrical and electronic parts are placed in a vehicle.',
        image: paxLogo,
        specifications: {
          'Product Code': 'B-200',
          'Max. Steam Pressure': '8 Bar',
          'Max. Steam Temperature': '160 - 200 °C',
          'Water Tank Capacity': '35 Lt.',
          'Steam Tank Capacity': '20 Lt.',
          'Motor Power': '380 Volt',
          'Voltage': '380 Volt',
          'Gun Type': '2 Pieces (2 Operators)',
          'Initial Heating Duration': '5 - 7 Min.',
          'Water Filling Type': 'Automatic - Manual',
          'Motor - Pump': 'Italian',
          'Safety Equipment': 'Valve - Pressure Stabilizer - Pressure Valve',
          'Technology': 'Italian pump technology'
        }
      },
      {
        id: 4,
        name: 'Foam Liquid Sprayer Series',
        description: 'Professional foam and liquid spraying systems with various tank capacities',
        image: paxLogo,
        specifications: {
          'Models': 'F-65, F-100',
          'Pressure': '6-8 bar',
          'Material': 'Stainless steel tank',
          'Construction': 'Professional grade'
        },
        modelTable: {
          headers: ['Model', 'Tank Capacity (L)', 'Power (kW)', 'Weight (kg)', 'Dimensions (mm)'],
          rows: [
            ['F-65', '65', '1.5', '85', '800x600x1200'],
            ['F-100', '100', '2.2', '120', '900x700x1300']
          ]
        }
      },
      {
        id: 5,
        name: 'Car Seat Cleaning Machine',
        description: 'Professional car seat cleaning machine with powerful suction and foam cleaning capabilities',
        image: paxLogo,
        specifications: {
          'Power': '2.2 kW',
          'Suction Power': '1200W',
          'Tank Capacity': '80 L',
          'Weight': '95 kg',
          'Dimensions': '900x700x1300 mm',
          'Material': 'Stainless steel construction'
        }
      },
      {
        id: 6,
        name: 'Hard Floor and Carpet Cleaning Machine',
        description: 'Versatile cleaning machine for both hard floors and carpets with professional cleaning capabilities',
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
        id: 7,
        name: 'Industrial Wet-Dry Vacuum Cleaner',
        subtitle: 'Two Motor and Three Motor Models',
        description: 'Pax Wet - Dry Industrial Type Vacuum Cleaners are produced for use in such a way that they can easily absorb solid and watery dirt that occurs on both wet and dry floors, with its specially designed stainless-steel body.\n\nThese highly professional vacuum cleaners are produced in different capacities as 2 motors and 3 motors. Only one motor power is 1200 Watts. It provides effective cleaning on all kinds of surfaces like carpet - armchair - curtain - rubber - marble - parquet - ceramic - glass etc.',
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
        id: 8,
        name: 'Hot Air Generator',
        description: 'Professional hot air generator for efficient drying and heating applications',
        image: paxLogo,
        specifications: {
          'Power': '2.2 kW',
          'Heat Output': '75,000 kcal/h',
          'Air Flow': '2000 m³/h',
          'Weight': '85 kg',
          'Dimensions': '900x700x1200 mm',
          'Material': 'Stainless steel construction'
        }
      },
      {
        id: 9,
        name: 'Hot Air Generator ECO',
        description: 'Energy-efficient hot air generator with advanced temperature control system',
        image: paxLogo,
        specifications: {
          'Power': '2.2 kW',
          'Heat Output': '75,000 kcal/h',
          'Air Flow': '2000 m³/h',
          'Weight': '90 kg',
          'Dimensions': '900x700x1200 mm',
          'Material': 'Stainless steel construction',
          'Energy Savings': 'Up to 30%'
        }
      },
      {
        id: 10,
        name: 'Cloth Squeezing Machine',
        description: 'Professional cloth squeezing machine for efficient water removal from fabrics and textiles',
        image: paxLogo,
        specifications: {
          'Power': '2.2 kW',
          'Pressure': '6-8 bar',
          'Capacity': '100 kg/hour',
          'Weight': '95 kg',
          'Dimensions': '1000x800x1300 mm',
          'Material': 'Stainless steel construction'
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
        id: 1,
        name: 'FDT4000',
        subtitle: 'Onboard Brake Disc Lathe Machine (Standard Model)',
        description: 'The FDT 4000 On-Vehicle Brake Disc Lathe Machine is designed to remove scratches, wear, and warping from brake discs over time, ensuring a longer lifespan for the brake disc. By grinding your old brake disc instead of replacing it, you gain economic benefits and, contrary to popular belief, a safer driving experience. This is because old brake discs become harder under high pressure and heat during use. When the brake discs meet the manufacturer\'s standards, turning them for reuse is both a safe and economical choice for you and your vehicle.\n\nThe FDT 4000 On-Vehicle Brake Disc Lathe Machine is designed to allow the user to easily place the lathe on the vehicle and perform the most efficient turning operation in the shortest time. The advantage of turning on the vehicle without removing the disc is that the brake disc\'s balance adjustment remains intact during the turning process. Additionally, you can quickly perform the turning operation as needed without wasting time. With high-quality diamond tips and precise adjustment capabilities, you can achieve a turning thickness of 0.004 mm. Furthermore, the built-in alarm allows you to attend to other tasks during the turning process, as the machine will automatically stop and alert you with both audible and visual signals when the process is complete. The machine comes with two stands, short and long, allowing application on a lift, jack, or workbench.\n\nDisc lathe is a method used to correct deformations that occur over time, solve vibration problems in the braking system, or address issues with contamination or vibration in newly replaced discs and pads. This method helps achieve a smooth surface similar to that of a new disc. It reduces costs for the vehicle owner and enhances customer satisfaction by providing high-quality and safe service. Users should ensure that the discs do not fall below the minimum thickness specified by the manufacturer\'s standards.\n\nLathe can be performed manually or automatically.\n\nDetailed information regarding the use of the machine is available in the user manual.',
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
        id: 2,
        name: 'FDT5000',
        subtitle: 'Onboard Brake Disc Lathe Machine (Practically Adjustable Height)',
        description: 'FDT5000 On-Vehicle Brake Disc Lathe Machine is designed to remove scratches, wear, and warping from brake discs over time, ensuring a longer lifespan for the brake disc. By grinding your old brake disc instead of replacing it, you gain economic benefits and, contrary to popular belief, a safer driving experience. This is because old brake discs become harder under high pressure and heat during use. When the brake discs meet the manufacturer\'s standards, turning them for reuse is both a safe and economical choice for you and your vehicle.\n\nFDT5000 On-Vehicle Brake Disc Lathe Machine is designed to allow the user to easily place the lathe on the vehicle and perform the most efficient turning operation in the shortest time. The advantage of turning on the vehicle without removing the disc is that the brake disc\'s balance adjustment remains intact during the turning process. Additionally, you can quickly perform the turning operation as needed without wasting time. With high-quality diamond tips and precise adjustment capabilities, you can achieve a turning thickness of 0.004 mm. Furthermore, the built-in alarm allows you to attend to other tasks during the turning process, as the machine will automatically stop and alert you with both audible and visual signals when the process is complete. The machine comes with two stands, short and long, allowing application on a lift, jack, or workbench.\n\nDisc lathe is a method used to correct deformations that occur over time, solve vibration problems in the braking system, or address issues with contamination or vibration in newly replaced discs and pads. This method helps achieve a smooth surface similar to that of a new disc. It reduces costs for the vehicle owner and enhances customer satisfaction by providing high-quality and safe service. Users should ensure that the discs do not fall below the minimum thickness specified by the manufacturer\'s standards.\n\nLathe can be performed manually or automatically.\n\nDetailed information regarding the use of the machine is available in the user manual.',
        image: automecLogo,
        videoLinks: [
          'https://www.youtube.com/embed/EDnaAlCNA5I',
          'https://www.youtube.com/embed/AKPiv5U-jhA',
          'https://www.youtube.com/embed/-c9IvSor30g',
          'https://www.youtube.com/embed/_mR7A0eNfrE'
        ],
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
        id: 3,
        name: 'FDT6000',
        subtitle: 'Brake Disc Lathe Machine (Stationary)',
        description: 'The FDT6000 Disc Lathe Machine, backed by Osm Automotive Ltd. Co., is designed for lathing discs with diameters ranging from 150 to 380 mm. It is suitable for discs of passenger cars, light commercial vehicles, and minibuses.\n\nDisc lathe is a method used to correct deformations that occur over time, resolve vibration problems in the braking system, or address contamination or vibration issues in newly replaced discs and pads. This process allows you to achieve a smooth surface similar to that of a new disc. It helps reduce the vehicle owner\'s costs and enhances customer satisfaction by providing high-quality and safe service. Users should ensure that the discs do not fall below the minimum thickness specified by the manufacturer\'s standards.\n\nOur machine can remove deformations on the disc surface through turning, achieving a surface comparable to that of a new disc. Lathe operations can be performed both automatically and manually. The brake disc grinding process grinds both surfaces simultaneously. The shaft thickness is 35 mm. All necessary attachments for the lathe process are included with the machine.\n\nOnce a disc is mounted right onto the shaft with the correct attachments, there will be no shaking or vibrations. Still, to minimize potential friction and vibration, vibration and noise-reducing plastic O-rings for the outer circumference of the discs and a support bracket for under the lathe tool are provided.\n\nOur machine, which is designed for efficient and easy use, comes with a 2-year warranty. A detailed user manual is included with the machine.',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/VIDEO_ID_FDT6000'],
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
        id: 4,
        name: 'FDT7000',
        subtitle: 'Brake Disc Lathe Machine (Stationary & Onboard)',
        description: 'FDT7000 Disc Lathe Machine is a two-function model. It has the feature of lathe both on the vehicle and outside with additional apparatuses to the existing disc lathe machine. It is produced for our customers who want to benefit from these two features. Its technical features and dimensions are the same as the FDT6000. All necessary apparatus for lathing are sent with the machine.',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/VIDEO_ID_FDT7000'],
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
        id: 5,
        name: 'ETM2000',
        subtitle: 'Engine Fuel System Cleaning Machine (Injection System)',
        description: 'ETM2000 Fuel System Cleaning Machine is designed as a long-lasting, reliable, versatile and effective machine. It is mechanically and electronically designed to test and clean both diesel and gasoline engines, including TDI, HDI and COMMON RAIL engines. It has two separate tanks for diesel and benzin.\n\nETM2000 is produced with the latest technology and adapted to the modern fuel differences used in the market and compatible with all fuel types, it effectively cleans all carbon wastes, pitch and other residues in the combustion chamber without leaving any waste in the engine, without damaging the catalyst or the engine, and increases the performance of the engine. The humidifying effect ensures that the dirt is dissolved and expelled in the form of small particles through the exhaust. The residues that cannot be discharged through the exhaust accumulate in the filter of the machine.\n\nCleans all of the diesel and gasoline engines without damaging any parts:\n\n- Mechanic injection\n- Single-point electronic injection\n- Multi-point electronic injection\n- TDI, HDI, CDI, JTD, CRDI, DTI and COMMON RAIL electronic systems\n- Direct gasoline injection systems\n- Automatic pump vehicles\n- Carbureted vehicles\n- Cleans electrical or spare pump engines.\n\nWhen you use the Automec fuel system cleaning machine provides the following advantages:\n\n- Reduction in fuel consumption\n- Increasing in capacity of vehicle\n- Renewal in gas emissions\n- Reduction in exhaust emission\n- Increasing performance of engine\n- Recovery of corrupted idling speed and misfire\n- Excellent work of your car.',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/VIDEO_ID_ETM2000'],
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
        id: 6,
        name: 'ETM1500',
        subtitle: 'Fuel System Cleaning Machine (Injection System)',
        description: 'ETM1500 is designed as a longevous, reliable, versatile and effective machine and is designed mechanically and electronically for testing and cleaning simultaneously both diesel engines and gasoline engines including TDI, HDI and COMMON RAIL engines. It has one tank for either benzin or diesel motors. It is preferred by those customers of ours who would use it for only one type of motor.\n\nAutomec products are the most advanced products of the market. Produced with the lastest tecnology and adapted as modern fuel diversity whıch ıs using at market compatible all the fuel types, not leave any waste at engine, without damaging the engine and catalyst effectively cleaning all the carbon waste, pitch and the other wastes in the combustion chamber and increase the performance of engıne. The effect of moistening provide resolved the dirt and throw as small particles with the way of exhaust. Sediments which can not be thrown through the exhaust, accumulating in the machine\'s filter.\n\nCleans all of the diesel and gasoline engines without damaging any parts:\n\n- Mechanic injection\n- Single-point electronic injection\n- Multi-point electronic injection\n- TDI, HDI, CDI, JTD, CRDI, DTI and COMMON RAIL electronic systems\n- Direct gasoline injection systems\n- Automatic pump vehicles\n- Carbureted vehicles\n- Cleans electrical or spare pump engines.\n\nWhen you use the Automec digital fuel system machine provides the following benefits:\n\n- Reduction in fuel consumption\n- Increasing in capacity of vehicle\n- Renewal in gas emissions\n- Reduction in exhaust emission\n- Increasing performance of engine\n- Recovery of corrupted idling speed and misfire\n- Excellent work of your car.',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/VIDEO_ID_ETM1500'],
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
        id: 7,
        name: 'AD3030',
        subtitle: 'Onboard DPF Cleaning Machine with Measuring Function',
        description: 'The Automec AD3030 S DPF Cleaning Machine with Measuring Function enables particulate filter cleaning without the need to remove the filter from the vehicle. Its built-in measuring function allows for visible observation of the cleaning results.\n\nThe Automec AD3030 S DPF Cleaning Machine represents the latest advancement in onboard DPF cleaning technology. Its fully automatic and user-friendly design ensures a practical solution for both professional users and vehicle owners. This machine not only saves time but also offers profitability through its efficient cleaning process, making it a valuable investment for maintaining optimal vehicle performance. Connection to the vehicle is made via the lambda sensor for both cleaning and measurement. Once connected and the cleaning process is started, the machine automatically completes the entire operation, which takes 20 minutes. For detailed instructions, please refer to the user manual.\n\nThe vehicle\'s engine remains running in neutral (N) throughout the entire operation. The discharge will exit through the exhaust. For visual examples, please refer to our videos.\n\nThe blue hose on the machine is used for measurement. Connect it through the lambda sensor, and the results will be displayed on the bar on the front panel of the machine. Before starting the cleaning operation, attach the blue measurement hose to the lambda sensor and ensure the car is running in neutral (N). On the front panel, use the first bar (before the test) to observe the blockage level by adjusting its pin. After the cleaning operation, use the second bar (after the test) to compare the results.\n\nThe cleaning is performed using the specialized liquids provided with the machine. No other liquids or chemicals should be used. The machine includes three 5-liter cans of liquid (A1, A2, A3) located at the back. These can be ordered from us or our partners at any time. For further details, please refer to the user manual.\n\nAll necessary tools are included with the machine.',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/VIDEO_ID_AD3030'],
        specifications: {
          'Power Supply': '220V',
          'Pump Pressure': '1.5 bar x3',
          'Liquid Capacity': '3x5 liters',
          'Weight': '40 kg',
          'Dimensions': '90x50x50 cm',
          'Certification': 'CE certified',
          'Warranty': '2 years',
          'Operation Time': '20 minutes',
          'Operation Mode': 'Full automatic',
          'Connection': 'Via lambda sensor',
          'Engine Status': 'Running in neutral (N)',
          'Liquids': '3 specialized liquids (A1, A2, A3)',
          'Features': 'Built-in measuring function, visible results display',
          'Support': 'Spare parts and service available',
          'Benefits': 'Time-saving, economic, no filter removal required, practical and easy to use'
        }
      },
      {
        id: 8,
        name: 'RDT3000',
        subtitle: 'Radiator and Heating Core Cleaning Machine',
        description: 'This machine allows you to save time by performing quick and effective cleaning of heater and radiator systems within 45 minutes without the need to remove the front panel or cover. It enhances customer satisfaction and trust. It is easy to use and comfortable, with the added advantage of being easily portable.\n\nKey Features:\n\n- Metal Filter: Easily removable and cleanable; durable.\n- Connection: Simple connection via hoses to the vehicle\'s heater inlet and outlet.\n- Control Panel: The screen on the front panel allows you to adjust water temperature, working time, and program settings. It has 4 working programs. Detailed usage information can be found in the user manual.\n- Heating and Cleaning: When the water in the tank reaches the set temperature, the machine signals that cleaning can begin.\n\nApplications:\n\n- Cleaning heater cores of all types of land vehicles.\n- Cleaning of passenger cars, light commercial vehicles, trucks, buses, trailers, and agricultural machinery.\n- Cleaning of cooling radiators in light commercial vehicles.\n- Cleaning of block interiors in light commercial vehicles.\n- Cleaning oil cooler recuperators in vehicles.\n- Cleaning LPG and CNG regulators in vehicles.\n\nUsage Instructions:\n\n1. Pour 250 ml of Automec Radiator Cleaning Solution into the machine\'s water tank and fill the tank with water.\n2. Plug in the machine and turn on the switch. The machine will automatically heat the water in the tank to 80°C.\n3. Connect the radiator to the machine\'s inlet and outlet. Once the screen shows 80°C, turn the black switch on the far right to start cleaning.\n4. The timer is set to 45 minutes and will alert you with sound and light when the time is up. (If water level drops during cleaning, stop the machine and add more water.)\n5. All debris causing blockages in the radiator will collect in the filter. Remove and clean the filter after each use.\n\nWarnings and Notes:\n\n1. If the machine does not switch to heating mode:\n   - Check the water level.\n   - Clean the water level sensor on the tank.\n\n2. If the heating light is on but heating is not occurring:\n   - The heating element may be faulty. Remove the rear bottom cover of the machine and connect the blue and brown wires from the heating element to the spare terminals, regardless of polarity.\n\n3. If the machine is running but the pump is not working:\n   - Use a flat screwdriver to turn the pump located at the back right.\n\n4. If the pump works but water is not being pumped:\n   - Remove the left side panel of the machine and bleed air from the yellow air release screw on the pump.\n\n5. If there is an issue with the machine\'s electronic board or buttons:\n   - Use the manual control switches behind the front screen to activate heating or the pump.\n\n6. To operate the machine in manual mode:\n   - Hold down the "pump off" button on the lower right to start the machine in manual mode. Use the "pump on" button to turn it on and the "pump off" button to turn it off.\n   - Use the right button to turn on the heating element and the left button to turn it off. Ensure the tank is filled with water.\n\n7. IMPORTANT NOTE:\n   - Do not use acid-based liquids during radiator cleaning as they can damage the pump and connection components. Damaged parts due to such use are not covered under warranty.',
        image: automecLogo,
        videoLinks: ['https://www.youtube.com/embed/VIDEO_ID_RDT3000'],
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
        id: 9,
        name: 'FHD1000',
        description: 'A versatile brake fluid bleeding and hydraulic system maintenance device designed for single-operator use, compatible with all vehicles and featuring a comprehensive cover set.',
        image: automecLogo,
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
        id: 10,
        name: 'KTM1000',
        subtitle: 'Brake Disc and Brake Drum Lathe Machine',
        description: 'The Automec KTM1000 Brake Drum and Brake Disc Lathe Machine is designed for lathing discs with diameters ranging from 150 to 380 mm, as well as drums of passenger cars, light commercial vehicles, and minibuses.',
        image: automecLogo,
        videoLinks: [
          'https://www.youtube.com/embed/NjBMiVHSk3M',
          'https://www.youtube.com/embed/3X9vYqbfY1E',
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