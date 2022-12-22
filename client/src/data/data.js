import airConditioning from "../assests/images/services/AirConditioning.jpg"
import electrical from "../assests/images/services/electrical.jpg"
import plumbing from "../assests/images/services/plumbing.jpg"
import testing from "../assests/images/services/Testing.jpg"
import tiling from "../assests/images/services/FloorWallTiling.jpg"
import painting from "../assests/images/services/Painting.jpg"
import plaster from "../assests/images/services/Plaster.jpg"
import falseCeiling from "../assests/images/services/FalseCeiling.jpg"
import partition from "../assests/images/services/PartitionInstallation.jpg"
import carpentry from "../assests/images/services/Carpentry.jpg"
import wallpaper from "../assests/images/services/Wallpaper.jpg"
import handyman from "../assests/images/services/Handyman.jpg"

export const services = [
    {
        path: "air-conditioning",
        img: airConditioning,
        icon: "fa-screwdriver",
        name: "Air Conditioning",
        description: "The installation, testing & commissioning, maintenance of the air conditioning and ventilation system shall be carried out by a specialist in order to ensure proper operation.",
        details: {
            para1: "The installation, testing & commissioning, maintenance of the air conditioning and ventilation system shall be carried out by a specialist in order to ensure proper operation",
            para2: "V-Expert provides high-quality air conditioning, ventilation, and filtration system installation services to private and corporate clients.",
            label: "Our teams of qualified technicians are highly qualified to install/replace the range of air conditioning, ventilation and filtration systems, notably: ",
            features: ["Design/Build Installations", "Chilled Water Piping Works", "All types of Duct Works", "All types of Grills", "Exhaust Fans", "FCU/FAHU/AHU/Chillers", "Chilled Water Pumps", "HEXs", "Fire Dampers", "Central cooling system", "DX cooling system", "District cooling system", "Smoke and pressure extract system"],
        }
    },
    {
        path: "electrical",
        img: electrical,
        icon: "fa-screwdriver",
        name: "Electrical",
        description: "The installation, testing & commissioning, maintenance of the Electrical & ELV system shall be carried out by a specialist in order to ensure proper operation.",
        details: {
            para1: "The installation, testing & commissioning, maintenance of the Electrical & ELV system shall be carried out by a specialist in order to ensure proper operation",
            para2: "V-Expert provides high-quality Electrical & ELV system installation services to private and corporate clients",
            label: "Our technicians are highly qualified to install/replace the range of air Electrical & ELV systems, notably: ",
            features: ["Design/Build Installations & Maintenance","Bus Bar , MDB , SMDB,MCC& DB installations","Power & Lighting Wiring and accessories installations","Voice/Data/ Fiber Optics Systems","Lighting Control Systems","Intercom Systems","Inverters","Security Systems","Solar Panels","Meter Box","Power Cables Installation","Containments - Tray , trucking & Ladder","PVC & GI Conduit Installations","Cables glanding & Terminations"],
        }
    },
    {
        path: "plumbing",
        img: plumbing,
        icon: "fa-hammer",
        name: "Plumbing",
        description: "The installation, testing & commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation",
        details: {
            para1: "The installation, testing & commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation.",
            para2: "V-Expert provides high-quality Plumbing system installation services to private and corporate clients",
            label: "Our technicians are highly qualified to install/replace the range of Plumbing systems, notably:",
            features: ["Design/Build Installations", "Transfer Pumps / Control Panels", "Booster Pumps / Control Panels", "Sump Pumps", "HDPE Pipe works with Electrofusion / Butt Weld Joints", "PPR Pipe Work", "Pex Pipe Work", "U-PVC Pipe Works", "Sanitaryware's", "Bathroom Accessories / Final Fix Works", "Electrical Water Heaters / Solar Water Heaters", "RO Water System", "Rain water Outlets"],
        }
    },
    {
        path: "testing",
        img: testing,
        icon: "fa-screwdriver",
        name: "Testing",
        description: "Testing and commissioning activities of Electromechanical systems shall be carried out by a specialist in order to ensure proper operation",
        details: {
            para1: "Testing and commissioning activities of Electromechanical systems shall be carried out by a specialist in order to ensure proper operation.",
            para2: "V-Expert provides high-quality Testing and commissioning activities of Electromechanical systems to our clients.",
            label: "Our technicians are highly qualified in Testing and commissioning range , notably",
            description: ["Chilled water Piping System", "Air conditioning Equipment's", "Chilled water pumps", "Air Balancing", "Chilled Water Balancing", "Hot Water Balancing", "Cold Water network Pressure setting", "Transfer / Booster Pumps", "All special valves like Thermostatic Mixing valves , DRV , PICV , PRV etc.", "Electrical Water Heaters / Solar Water Heaters", "RO Water System", "Bus Bars", "Lighting Control System", "MDB , SMDB,MCC& DB", "Voice/Data/ Fiber Optics Systems", "Intercom Systems", "Inverters", "Security Systems", "Solar Panels"],
        }
    },
    {
        path: "tiling",
        img: tiling,
        icon: "fa-hammer",
        name: "Tiling",
        description: "Exceptional products and entire lines of foreign and domestic manufacturers of supreme and most unique tile products and accessories. Our technical services also involve floor and wall tile work.",
    },
    {
        path: "painting",
        img: painting,
        icon: "fa-hammer",
        name: "Painting",
        description: "Specialized in internal and external painting for commercial and residential buildings, we render our services with utmost care and concern."
    },
    {
        path: "plaster",
        img: plaster,
        icon: "fa-hammer",
        name: "Plaster",
        description: "We have tremendous experience and expertise in the field and are able to deliver outstanding plaster services. We undertake both official and residential requirements."
    },
    {
        path: "false-ceiling",
        img: falseCeiling,
        icon: "fa-hammer",
        name: "False Ceiling",
        description: "We specialize in installing false (suspended) ceilings covering all commercial and domestic areas across."
    },
    {
        path: "partition-installing",
        img: partition,
        icon: "fa-screwdriver",
        name: "Partition Installation",
        description: "We specialize in installing partitioning covering all commercial and domestic areas across. Our Organization put immense effort in the delivery of such services."
    },
    {
        path: "carpentry",
        img: carpentry,
        icon: "fa-hammer",
        name: "Carpentry",
        description: "We provide customized commercial and residential joinery services. Our well-trained carpenters are experienced in installing new kitchen cabinets and counters for the construction of custom decks and patios."
    },
    {
        path: "wallpaper",
        img: wallpaper,
        icon: "fa-screwdriver",
        name: "Wallpaper",
        description: "Wallpaper fixing is a tedious task for the average person. Hiring a professional wallpaper fixing company can give you great peace of mind."
    },
    {
        path: "handyman",
        img: handyman,
        icon: "fa-screwdriver",
        name: "Handyman",
        description: "Our reliable handyman service includes all DIY tasks such as picture hanging, TV assembly, curtain hanging, furniture assembly, etc., in the most effective and time-saving way."
    }
];

export const packages = [
    {
        name: "First"
    },
    {
        name: "Buisness"
    },
    {
        name: "Economy"
    }
];

export const reviews = [
    {
        name: "Mark",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, pharetra facilisis orci, nec condimentum arcu scelerisque sed. Sed et mauris eros. Pellentesque tincidunt augue quis tempor ornare.",
    },
    {
        name: "Harry",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum volutpat ligula ac commodo. Suspendisse sit amet eros turpis. Donec suscipit tincidunt turpis non euismod. Integer pharetra facilisis orci, nec condimentum arcu scelerisque sed. Sed et mauris eros. Pellentesque tincidunt augue quis tempor ornare.",
    },
    {
        name: "John Doe",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, Donec suscipit tincidunt turpis non euismod. Integer pharetra facilisis orci, nec condimentum arcu scelerisque sed. Sed et mauris eros. Pellentesque tincidunt augue quis tempor ornare.",
    }
];