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
import first from "../assests/images/packages/First.jpg";
import buisness from "../assests/images/packages/Business.jpg";
import economy from "../assests/images/packages/Economy.jpg";

export const services = [
    {
        price: 100,
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
        price: 200,
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
        price: 100,
        path: "plumbing",
        img: plumbing,
        icon: "fa-hammer",
        name: "Plumbing",
        description: "The installation, testing & commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation",
        details: {
            para1: "The installation, testing & commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation",
            para2: "V-Expert provides high-quality Plumbing system installation services to private and corporate clients.",
            label: "Our technicians are highly qualified to install/replace the range of Plumbing systems, notably: ",
            features: ["Design/Build Installations", "Transfer Pumps / Control Panels", "Booster Pumps / Control Panels", "Sump Pumps", "HDPE Pipe works with Electrofusion / Butt Weld Joints", "PPR Pipe Work", "Pex Pipe Work", "U-PVC Pipe Work", "Sanitaryware's", "Bathroom Accessories / Final Fix Works", "Electrical Water Heaters / Solar Water Heaters", "RO Water System", "Rain water Outlets"],
        }
    },
    {
        price: 200,
        path: "testing",
        img: testing,
        icon: "fa-screwdriver",
        name: "Testing",
        description: "Testing and commissioning activities of Electromechanical systems shall be carried out by a specialist in order to ensure proper operation",
        details: {
            para1: "Testing and commissioning activities of Electromechanical systems shall be carried out by a specialist in order to ensure proper operation",
            para2: "V-Expert provides high-quality Testing and commissioning activities of Electromechanical systems to our clients.",
            label: "Our technicians are highly qualified in Testing and commissioning range , notably: ",
            features: ["Chilled water Piping System", "Air conditioning Equipment's", "Chilled water pumps", "Air Balancing", "Chilled Water Balancing", "Hot Water Balancing", "Cold Water network Pressure setting", "Transfer / Booster Pumps", "All special valves like Thermostatic Mixing valves, DRV, PICV, PRV etc.", "Electrical Water Heaters / Solar Water Heaters", "RO Water System", "Bus Bars", "Lighting Control System","MDB, SMDB, MCC & DB","Voice/Data/ Fiber Optics Systems","Intercom Systems","Inverters","Security Systems","Solar Panels"],
        }
    },
    {
        price: 100,
        path: "tiling",
        img: tiling,
        icon: "fa-hammer",
        name: "Tiling",
        description: "Exceptional products and entire lines of foreign and domestic manufacturers of supreme and most unique tile products and accessories. Our technical services also involve floor and wall tile work.",
        details: {
            para1: "We are committed to delivering exceptional products and represents entire lines of foreign and domestic manufacturers of supreme and most unique tile products and accessories. Our technical services also involve floor and wall tile work. If you plan on renovating your space or simply looking for a decor, we can do it for you. We specialize in tiles, marble, stone masonry, fill and all kinds of decorating. We cater to all types of domestic, commercial or business tiling services",
            para2: "",
            label: "",
            features: [],
        }
    },
    {
        price: 200,
        path: "painting",
        img: painting,
        icon: "fa-hammer",
        name: "Painting",
        description: "Specialized in internal and external painting for commercial and residential buildings, we render our services with utmost care and concern.",
        details: {
            para1: "Specialized in internal and external painting for commercial and residential buildings, we render our services with utmost care and concern. A painting process involves many aspects other than painting the surface.",
            para2: "There are various surface contaminants that need to be removed, appropriate color for each room must be selected, sampling of the chosen color should be done to ensure that the client is happy with it. surface preparation which includes dent filling, sealing hairline cracks and smoothening should be completed, water penetration must be prevented, putty work, application of required number of coats and finishing touches need to be taken care of, and also help with the extras like wallpaper and tips to maintain the colors should be offered.",
            label: "",
            features: [],
        }
    },
    {
        price: 100,
        path: "plaster",
        img: plaster,
        icon: "fa-hammer",
        name: "Plaster",
        description: "We have tremendous experience and expertise in the field and are able to deliver outstanding plaster services. We undertake both official and residential requirements.",
        details: {
            para1: "Our team will deliver the best services with the best and perfect completion of the work. We have tremendous experience and expertise in the field and are able to deliver outstanding plaster services. We undertake both official and residential requirements. Our Organization has been extremely active in providing these services. The use of premium raw materials improves the quality of our services. Our knowledgeable technocrats and workers have performed numerous services in this regard and can meet every need of our clients.",
            para2: "",
            label: "",
            features: [],
        }
    },
    {
        price: 200,
        path: "false-ceiling",
        img: falseCeiling,
        icon: "fa-hammer",
        name: "False Ceiling",
        description: "We specialize in installing false (suspended) ceilings covering all commercial and domestic areas across.",
        details: {
            para1: "We specialize in installing false (suspended) ceilings and partitioning covering all commercial and domestic areas across.",
            para2: "We have extensive experience and expertise in this field and are capable of delivering leading false ceiling and partitions services. We undertake both official and residential needs. Organization put immense effort in the delivery of such services. The use of raw materials of optimal quality improves the quality of the services we provide. Our knowledgeable technocrats and workers have performed numerous services in this regard and can meet every need of our clients",
            label: "",
            features: [],
        }
    },
    {
        price: 100,
        path: "partition-installing",
        img: partition,
        icon: "fa-screwdriver",
        name: "Partition Installation",
        description: "We specialize in installing partitioning covering all commercial and domestic areas across. Our Organization put immense effort in the delivery of such services.",
        details: {
            para1: "We specialize in installing partitioning covering all commercial and domestic areas across.",
            para2: "We have extensive experience and expertise in this field and are capable of delivering leading false ceiling and partitions services. We undertake both official and residential needs. Organization put immense effort in the delivery of such services. The use of raw materials of optimal quality improves the quality of the services we provide. Our knowledgeable technocrats and workers have performed numerous services in this regard and can meet every need of our clients",
            label: "",
            features: [],
        }
    },
    {
        price: 200,
        path: "carpentry",
        img: carpentry,
        icon: "fa-hammer",
        name: "Carpentry",
        description: "We provide customized commercial and residential joinery services. Our well-trained carpenters are experienced in installing new kitchen cabinets and counters for the construction of custom decks and patios.",
        details: {
            para1: "We provide customized commercial and residential joinery services. Our well-trained carpenters are experienced in installing new kitchen cabinets and counters for the construction of custom decks and patios. Our work includes: kitchens, wardrobes, tables, shelves and storage, children's and garden furniture, office and restaurant furniture, counters and reception desks. . Our skilled technocrats and workers offer many services in this regard and are able to meet all your needs.",
            para2: "",
            label: "",
            features: [],
        }
    },
    {
        price: 100,
        path: "wallpaper",
        img: wallpaper,
        icon: "fa-screwdriver",
        name: "Wallpaper",
        description: "Wallpaper fixing is a tedious task for the average person. Hiring a professional wallpaper fixing company can give you great peace of mind.",
        details: {
            para1: "We provide high quality wallpaper installation services. Wallpaper fixing is a tedious task for the average person. Hiring a professional wallpaper fixing company can give you great peace of mind. V-Expert provides our customers with the most professional staff at very reasonable prices.",
            para2: "",
            label: "",
            features: [],
        }
    },
    {
        price: 200,
        path: "handyman",
        img: handyman,
        icon: "fa-screwdriver",
        name: "Handyman",
        description: "Our reliable handyman service includes all DIY tasks such as picture hanging, TV assembly, curtain hanging, furniture assembly, etc., in the most effective and time-saving way.",
        details: {
            para1: "We offer the best handyman services with quality tools, techniques and highly skilled technicians. Our reliable handyman service includes all DIY tasks such as picture hanging, TV assembly, curtain hanging, furniture assembly, etc., in the most effective and time-saving way. It is done. Our unique handyman service in Dubai ensures that your job is completed in one go with high efficiency and high quality.",
            para2: "",
            label: "",
            features: [],
        }
    }
];

export const packages = [
    {
        path: "economy",
        img: economy,
        name: "Economy",
        price: 1099,
        pm: 1,
        rsc: 6,
        properties: {
            "Apartment - Studio / 1 Br / 2 Br": 1099,
            "Apartment - 3 Br / 4 Br": 1599,
            "Apartment - 5 Br / Pent House": 2999,
            "Villa - 2 Br / 3 Br": 3299,
            "Villa - 4 Br / 5 Br": 3999,
            "Villa - 6 Br / 7 Br": 4999,
        },
    },
    {
        path: "buisness",
        img: buisness,
        name: "Buisness",
        price: 2099,
        pm: 2,
        rsc: 8,
        hs: 2,
        properties: {
            "Apartment - Studio / 1 Br / 2 Br": 2099,
            "Apartment - 3 Br / 4 Br": 2699,
            "Apartment - 5 Br / Pent House": 3299,
            "Villa - 2 Br / 3 Br": 4699,
            "Villa - 4 Br / 5 Br": 5899,
            "Villa - 6 Br / 7 Br": 7399,
        },
    },
    {
        path: "first",
        img: first, 
        name: "First",
        price: 3099,
        pm: 3,
        rsc: 12,
        hs: 3,
        properties: {
            "Apartment - Studio / 1 Br / 2 Br": 3099,
            "Apartment - 3 Br / 4 Br": 4199,
            "Apartment - 5 Br / Pent House": 5399,
            "Villa - 2 Br / 3 Br": 6299,
            "Villa - 4 Br / 5 Br": 7499,
            "Villa - 6 Br / 7 Br": 8899,
        },
    },    
];

export const packageDetails = {
    pm:{
        description: "Upon signing the contract, our team of experts will visit, inspect and perform the necessary maintenance work. Please find below the checklists.",
        details: ["Air conditioning- Filter Cleaning,  AirOutlet Cleaning & Functional Checks. Gas Top up for Split AC if applicable", "Electrical functional checks for components and panels, including light fittings and switch sockets.","Santeryware Maintenance (such as floor drain, sink, kitchen sink, toilet, bidet and bath)", "Washing machine and dishwasher associated with water supply and drainage connection problem only." ]
    },
    hs: "Handyman Services limited to Fixing of mirror, book shelves, minor carpentry, door hinges and cabinet hinges fixing, wall hanging and picture frame fixing on walls"
}

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
        rating: 4,
        review: "When I had just moved into the new villa. I spotted the V-Expert Technical Services & Decided to call them to enquire about maintenance packages. An engineer arranged to meet me at my villa and went over what preventive maintenance would need for the equipment’s. they quoted a fair price for my villa annual maintenance. They always come on time do a clean job and the engineer always call back to check if everything was ordered. Highly recommended maintenance company in Dubai.",
        name: "Abdul Rahim"
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