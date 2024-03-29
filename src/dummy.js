export const promos = [
    {
        id: 1,
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979305/food_delivery_app/promos/uhvwc6v5yxbfw8vlsd1u.jpg'
    },
    {
        id: 2,
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979303/food_delivery_app/promos/rrcghplk3bp9mchtio8a.jpg'
    },
    {
        id: 3,
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979303/food_delivery_app/promos/xcebbwgtqiclptumbxvo.jpg'
    }
]

export const categories = [
    {
        id: 1,
        name: 'Breakfast',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979726/food_delivery_app/categories/xjylicsipcjlouzjx55t.png',
    },
    {
        id: 2,
        name: 'Coffee',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979726/food_delivery_app/categories/xjylicsipcjlouzjx55t.png',
    },
    {
        id: 3,
        name: 'Drink',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979726/food_delivery_app/categories/ihvyuzqzzbmjogryru0p.png',
    },
    {
        id: 4,
        name: 'Fast Food',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979725/food_delivery_app/categories/ybmnnx1mohecshgqumov.png',
    },
    {
        id: 5,
        name: 'Cake',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627979924/food_delivery_app/categories/mgprzdzabtyxo5g4tn4h.jpg',
    }
]

export const restaurants = [
    {
        id: 1,
        name: "Kichi Coffe & Drink",
        address: '76A Eight Avenue New York',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980500/food_delivery_app/restaurants/uu4kph76reiiqsulipvg.jpg'
    },
    {
        id: 2,
        name: "Chill Lands Cofee",
        address: '76A Eight Avenue New York',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980483/food_delivery_app/restaurants/chlamucsjmij9gyh2cnl.jpg'
    },
    {
        id: 3,
        name: "Coco Restaurant",
        address: '76A Eight Avenue New York',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980480/food_delivery_app/restaurants/agn2qcym3pgfl2xzi5df.jpg'
    },
    {
        id: 4,
        name: "Tsunami Foods",
        address: '76A Eight Avenue New York',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980457/food_delivery_app/restaurants/yekzeo3ffzarrxoksczo.jpg'
    },
    {
        id: 5,
        name: "Brakus Port Drink",
        address: '76A Eight Avenue New York',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980448/food_delivery_app/restaurants/xnvthlr2y0v4mmleaqrp.jpg'
    },
    {
        id: 6,
        name: "BB & BG Coffee",
        address: '76A Eight Avenue New York',
        photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980443/food_delivery_app/restaurants/eufgzje3b8bwh3p58tk4.jpg'
    }
]


export const products = [
    {
        id: 1,
        name: 'Fried Noodles',
        photoURL: "https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980032/food_delivery_app/products/dz9k6k9hwt5binafwsvn.png",
        restaurant: {...restaurants[0]},
        price: 3.4
    },
    {
        id: 2,
        name: 'Peach Tea Sp',
        photoURL: "https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980032/food_delivery_app/products/helkcmzzkf6d5s2dbvso.png",
        restaurant: {...restaurants[1]},
        price: 3.6
    },
    {
        id: 3,
        name: 'Steamed Aslwdwdww',
        photoURL: "https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980344/food_delivery_app/products/erw7is3nnmheffya5h0t.jpg",
        restaurant: {...restaurants[2]},
        price: 33.4
    },
    {
        id: 4,
        name: 'Fried Noodles',
        photoURL: "https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980303/food_delivery_app/products/lrni0fekc1voynh1hvgu.jpg",
        restaurant: {...restaurants[3]},
        price: 63.4
    },
    {
        id: 5,
        name: 'Peach Tea Sp',
        photoURL: "https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980288/food_delivery_app/products/n00is2ojici9wcuvfrcv.jpg",
        restaurant: {...restaurants[4]},
        price: 3.6
    },
    {
        id: 6,
        name: 'Steamed Aslwdwawwwwdww',
        photoURL: "https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980242/food_delivery_app/products/i5wfeuj65qlouxowspsl.jpg",
        restaurant: {...restaurants[5]},
        price: 33.4
    }
]

export const reviews = [
    {
        id: 1,
        rating: 4,
        user: {
            name: 'Pauline MacGur',
            photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627990202/food_delivery_app/user/qty3akvzzp41glomd0aw.jpg'
        },
        text: 'Mieke aeaes ss hish siht',
        photos: [],
        createdAt: '3 hr ago'
    },
    {
        id: 2,
        rating: 4,
        user: {
            name: 'Chjerkes Moarris',
            photoURL: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627990202/food_delivery_app/user/xg8kxqy397dglf2i5vsm.jpg'
        },
        text: 'Mieke aeaes ss hish siht',
        photos: [
            'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980448/food_delivery_app/restaurants/xnvthlr2y0v4mmleaqrp.jpg',
            'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980242/food_delivery_app/products/i5wfeuj65qlouxowspsl.jpg',
            'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980448/food_delivery_app/restaurants/xnvthlr2y0v4mmleaqrp.jpg',
            'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980242/food_delivery_app/products/i5wfeuj65qlouxowspsl.jpg'

        ],
        createdAt: '2 hr ago'
    }
]
