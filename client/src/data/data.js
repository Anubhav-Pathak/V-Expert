import airConditioning from "../assests/images/services/AirConditioning.jpg"
import electrical from "../assests/images/services/Electrical.jpg"
import plumbing from "../assests/images/services/Plumbing.jpg"
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
        description: "The installation, testing & commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation"
    },
    {
        path: "testing",
        img: testing,
        icon: "fa-screwdriver",
        name: "Testing",
        description: "Testing and commissioning activities of Electromechanical systems shall be carried out by a specialist in order to ensure proper operation"
    },
    {
        path: "tiling",
        img: tiling,
        icon: "fa-hammer",
        name: "Tiling",
        description: "Exceptional products and entire lines of foreign and domestic manufacturers of supreme and most unique tile products and accessories. Our technical services also involve floor and wall tile work."
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
        name: "First",
        path: "first",
    },
    {
        name: "Buisness",
        path: "buisness",
    },
    {
        name: "Economy",
        path: "economy",
    }
];

export const reviews = [
    {
        rating:5,
        review:"We are very much happy with the Service provided by V-Expert Technical Services. when things need a service in our flat, they are always prompt with our call outs. And while calling for assistance, they consistently exceed our expectations. they also do their service done with high quality of work.",
        name:"Saad Zaghloul"
    },
    {
        rating:4.5,
        review:"The V-Expert Technical Services team did a great job on some painting and other repair works in my villa. The teams were on time they covered all our furniture before painting and sorted everything in time..",
        name: "Faizal"
    },
    {
        rating:4,
        review:"I had some pipe extension works in my villa. V-Expert Technical Services team came right away and fixed it. Really appreciate their response time and services.",
        name: "Mohamed"
    },	
    {
        rating:4.5,
        review:"My experience with V-Expert Technical Services home maintenance was excellent both in terms of service and quality of works. The team who did the job for our home were neat and professional. Thanks for the stress-free experience. best maintenance company. Recommended.",
        name: "Charles"
    },
    {
        rating:5,
        review:"I have been using the service of the V-Expert Technical Services team to maintenance and do modification to my apartments. They have been very professional, and quality of work is of the highest standard. ",
        name: "Sridhar"
    },
    {
        rating:4,
        review:"Fantastic service from the V-Expert Technical Services team. Quick, efficient, and knowledgeable. A special mention to Michelle who coordinated our appointment and coped admirably with all the changes and requests. Much appreciated!",
        name: "Abhishek"
    },
    {
        rating:4.5,
        review:"This is the 2nd time I've contacted the V-Expert Technical Services team for an office repair, and again they never fail to exceed my expectation.",
        name: "Abhishek"
    },
    {
        rating:4.5,
        review:"I am so glad I found this company. Good maintenance companies are hard to find these days. We have our annual AMC contract with them, and they have been responsive to our requests.",
        name: "Santhosh"
    },
];