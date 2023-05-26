import images from './images';

const nigirit = [{
        imgUrl: images.default_menu_img,
        title: 'Lohi',
        price: '3,50€',
        tags: '2pcs | Riisi, tuore lohi',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Grillatua Lohta',
        price: '3,50€',
        tags: '2pcs | Riisi, keitetty lohi',

    },
    {
        imgUrl: images.default_menu_img,
        title: 'Tsuna',
        price: '2,50€',
        tags: '2pcs | Riisi, tonnikala, majonessi',

    },
    {
        imgUrl: images.default_menu_img,
        title: 'Ravunliha',
        price: '2,50€',
        tags: '2pcs | Riisi, surimi, majonessi',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Jättikatkarapu',
        price: '3,50€',
        tags: '2pcs | Riisi, jättikatkarapu',
    },
];

const makit = [{
        imgUrl: images.default_menu_img,
        title: 'Lohi Maki',
        price: '4,00€',
        tags: '6pcs | Riisi, nori paahdettu merilevä, lohi',
    },
    {
        imgUrl: images.default_menu_img,
        title: "Grillatua Lohi Maki",
        price: '4,50€',
        tags: '6pcs | Riisi, nori paahdettu merilevä, grillatua lohi, majonessi',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Kurkku Maki',
        price: '3,00€',
        tags: '6pcs | Riisi, nori paahdettu merilevä, kurkku',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Avokado Maki',
        price: '3,50€',
        tags: '6pcs | Riisi, nori paahdettu merilevä, avokado',
    },
];

const laijtelmat = [{
        imgUrl: images.default_menu_img,
        title: 'Laijtelma 10kpl',
        price: '14,80€',
        tags: '10pcs | 2pcs lohi, 1pc grillatua lohi, 1pc jättikatkarapu, 1pc ankerias, 1pc avokado, 1pc ravunliha, 2pcs tsuna, 1pc tofu',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Laijtelma 12kpl',
        price: '15,80€',
        tags: '12pcs | 2pcs lohi, 1pc grillatua lohi, 1pc jättikatkarapu, 1pc ankerias, 1pc avokado, 1pc ravunliha, 2pcs tsuna, 1pc tofu, 1pc merileväsalaatti, 1pc tonnikala',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Laijtelma 16kpl',
        price: '18,80€',
        tags: '16pcs | 2pcs lohi, 2pcs jättikatkarapu, 2pcs avokado, 2pcs tsuna, 4pcs futomaki, 4pcs grillatua lohi uramaki',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Laijtelma 36kpl',
        price: '34,80€',
        tags: '36pcs | 4pcs lohi, 4pcs jättikatkarapu, 4pcs avokado, 4pcs tsuna, 4pcs futomaki, 4pcs grillatua lohi uramaki, 4pcs lohi uramaki, 2pcs ankerias, 2pcs ravunliha, 2pcs tonnikala, 2pcs tofu',
    },
];

const foods = [{
        imgUrl: images.default_menu_img,
        title: 'Paistettua riisiä kanaa',
        price: '12,90€',
        tags: 'Riisi, kana, porkkana, parsakaali, sipuli, kanamuna ja seesamiöljy',
    },
    {
        imgUrl: images.default_menu_img,
        title: "Paistettua riisiä katkarapuja",
        price: '14,90€',
        tags: 'Riisi, katkarapu, porkkana, parsakaali, sipuli, kanamuna ja seesamiöljy',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Paistettua nuudelia ja nautaa (chilikastikkeessa) 🌶🌶',
        price: '13,90€',
        tags: 'Naudanliha, parsakaali, vihreät pavut, porkkana ja sipuli',
    },
    {
        imgUrl: images.default_menu_img,
        title: 'Paistettua nuudelia ja kanaa (chilikastikkeessa) 🌶🌶',
        price: '12,90€',
        tags: 'Kana, parsakaali, vihreät pavut, porkkana ja sipuli',
    },
];

const drinks = [{
        imgUrl: images.default_menu_img,
        title: 'Coca-cola',
        price: '3,50€',
        tags: '500ml | Bottle',
    },
    {
        imgUrl: images.default_menu_img,
        title: "Pepsi",
        price: '3,50€',
        tags: '500ml | Bottle',
    },
    {
        imgUrl: images.default_menu_img,
        title: "Pepsi max",
        price: '3,50€',
        tags: '500ml | Bottle',
    },
    {
        imgUrl: images.default_menu_img,
        title: "7Up",
        price: '3,50€',
        tags: '500ml | Bottle',
    },
];
// eslint-disable-next-line
export default { nigirit, makit, laijtelmat, foods, drinks };