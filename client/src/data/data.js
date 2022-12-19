import electrical from "../assests/images/services/electrical.jpg"
import plumbing from "../assests/images/services/plumbing.jpg"
import plastering from "../assests/images/services/plastring.jpg"
import airConditioning from "../assests/images/services/airCond.jpg"
import falseCeiling from "../assests/images/services/falseCeling.jpg"

export const services = [
    {
        path: "air-conditioning",
        img: airConditioning,
        icon: "fa-screwdriver",
        name: "Air Conditioning",
        description: "The installation, testing & commissioning, maintenance of the air conditioning and ventilation system shall be carried out by a specialist in order to ensure proper operation."
    },
    {
        path: "plumbing",
        img: plumbing,
        icon: "fa-hammer",
        name: "Plumbing",
        description: "The installation, testing & commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation"
    },
    {
        path: "electrical",
        img: electrical,
        icon: "fa-screwdriver",
        name: "Electrical",
        description: "The installation, testing & commissioning, maintenance of the Electrical & ELV system shall be carried out by a specialist in order to ensure proper operation."
    },
    {
        path: "plaster",
        img: plastering,
        icon: "fa-hammer",
        name: "Plaster",
        description: "We have tremendous experience and expertise in the field and are able to deliver outstanding plaster services. We undertake both official and residential requirements."
    },
    {
        path: "floor-tiling",
        img: electrical,
        icon: "fa-hammer",
        name: "Floor Tiling",
        description: "We specialize in tiles, marble, stone masonry, fill and all kinds of decorating. We cater to all types of domestic, commercial or business tiling services."
    },
    {
        path: "false-ceiling",
        img: falseCeiling,
        icon: "fa-hammer",
        name: "False Ceiling",
        description: "We specialize in installing false (suspended) ceilings and partitioning covering all commercial and domestic areas across."
    },
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