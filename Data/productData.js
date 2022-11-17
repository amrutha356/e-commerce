const products = [
   
    { 
         id:"products1",
        url: 'https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY218_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY218_.jpg',
        title: {
            shortTitle: 'MOTOROLA Edge 30 ',
            longTitle: 'MOTOROLA Edge 30 (Aurora Green, 128 GB)  (8 GB RAM)',
        }, 
        price: {
            mrp: 78999,
            cost: 69999,
            discount: '42%'
        },
        description: `An MOTOROLA Edge 30 and a wireless plan with unlimited data/talk/text. Unlimited talk, text, and data with mobile hotspot, nationwide coverage, and international reach. No long-term contract required.`,
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
         id:"products2",
        url: 'https://rukminim1.flixcart.com/image/416/416/l2xmqvk0/mobile/3/k/f/-original-image674nvdc4aws.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/l2xmqvk0/mobile/3/k/f/-original-image674nvdc4aws.jpeg?q=70', 
        title: {
            shortTitle: `iPhone SE 64GB `,
            longTitle:  `  iPhone SE 64GB Factory Unlocked, Rose Gold`
        }, 
        price: {
            mrp: 64999,
            cost:60500.00,
            discount: '40%'
        },
        description: '',
        discount:` From ₹64,999`, 
        tagline: 'iPhone SE 64GB' 
    },
    {
        id: "products3",
        url: 'https://m.media-amazon.com/images/I/41bIlvE1rdL._AC_SX679_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/41bIlvE1rdL._AC_SX679_.jpg',
        title: {
            shortTitle: 'Apple iPhone 12, 128GB, Black',
            longTitle: 'Apple iPhone 12, 128GB, Black - Fully Unlocked (Renewed)'
        },
        price: {
            mrp: 64999.00,
            cost:59999.00,
            discount: '-56%'
        },
        description: `This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.
        - This product is in "Good condition". The screen has no scratches; body shows light scratches barely visible from 12 inches away.`,
        discount: 'Grab Now',
        tagline: 'Apple iPhone 12'
    },
    {
        id: "products4",
        url: 'https://m.media-amazon.com/images/I/71cNd+SKqUL._FMwebp__.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71cNd+SKqUL._FMwebp__.jpg',
        title: {
            shortTitle: 'Apple iPhone 6S 64GB  ',
            longTitle: 'iPhone 6S 64GB Unlocked ATT Tmobile Verizon - Gray'
        },
        price: {
            mrp: 89999,
            cost:78990 ,
            discount: '12%'
        },
        description: ` The product is refurbished, fully functional, and in good condition. Backed by the 90-day Amazon Renewed Guarantee.
        - This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.`,
        discount: 'From ₹78990.00',
        tagline: 'Apple iPhone'
    },
    {
        id: "products5",
        url: 'https://m.media-amazon.com/images/I/51EknP3PutL._SX679_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51EknP3PutL._SX679_.jpg',
        title: {
            shortTitle: 'Lava Blaze 5G ',
            longTitle: 'Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | 5000 mAh Battery'
        },
        price: {
            mrp:14999,
            cost:9999.00,
            discount: '33%'
        },
        description: ` Dual SIM, Expandable Memory, Mobile Hotspot Capability`,
        discount: `From ₹9,999.00`,
        tagline: 'Lava Blaze 5G'
    },
    {
        id: "products6",
        url: 'https://images-eu.ssl-images-amazon.com/images/I/31qrsfYb7+L._AC_SR400,600_.jpg',
        detailUrl: 'https://images-eu.ssl-images-amazon.com/images/I/31qrsfYb7+L._AC_SR400,600_.jpg',
        title: {
            shortTitle: 'Noise Buds VS201 V2 Truly Wireless Earbuds ',
            longTitle: 'Noise Buds VS201 V2 Truly Wireless Earbuds with Dual Equalizer | Total 14-Hour Playtime | Full Touch Control | IPX5 Water Resistance and Bluetooth v5.1 (Charcoal Black)'
        },
        price: {
            mrp: 2999,
            cost:1099.00,
            discount: '63%'
        },
        description: ` Dual equalizer: Enjoy your music the way you like it. Switch between bass or normal mode to get the best sound`,
        discount: `From ₹1,099.00`,
        tagline: 'Noise Buds VS201 V2'
    },
    {
        id: "products7",
        url: 'https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SY300_SX300_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SY300_SX300_.jpg',
        title: {
            shortTitle: `Apple iPhone 13 Pro Max ` ,
            longTitle: `Apple iPhone 13 Pro Max, 128GB, Sierra Blue - Unlocked (Renewed)`
        },
        price: {
            mrp: 24000,
            cost:11999.00,
            discount: '-52%'
        },
        description: ` Dimensions: 81.3 x 85.7 x 90.2 cm
        Sofa Type: 1 seater sofa; Upholstery Material: Fabric; Frame Material: Pine Wood; Color: Steel Grey`,
        discount: '-52%',
        tagline: 'Apple iPhone 13 '
    },
    {
        id: "products8",
        url: 'https://m.media-amazon.com/images/I/71ouXIR8m+L._AC_SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71ouXIR8m+L._AC_SL1500_.jpg',
        title: {
            shortTitle: ` SAMSUNG Galaxy S20 FE 5G  ` ,
            longTitle: `SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, Pro Grade Camera, 30X Space Zoom, Night Mode, US Version, Cloud Lavender`
        },
        price: {
            mrp: 59900,
            cost:49999.00,
            discount: '-12%'
        },
        description: ` PRO-GRADE CAMERA: Features high-powered, pro lenses for beautiful photographs in any light with 3X optical zoom.Form_factor : Smartphone
        30X SPACE ZOOM: Zoom in close from afar or magnify details of something nearby with the power of 30X Space Zoom`,
        discount: 'Grab Now',
        tagline: 'SAMSUNG Galaxy S20 FE 5G'
    },
    {
        id: "products9",
        url: 'https://m.media-amazon.com/images/I/51liVatCv-L._AC_SL1200_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51liVatCv-L._AC_SL1200_.jpg',
        title: {
            shortTitle: `Xiaomi Redmi 9A   ` ,
            longTitle: `
            Xiaomi Redmi 9A - Smartphone 2 GB + 32 GB, Dual Sim, Verde (Peacook Green)`
        },
        price: {
            mrp: 20000,
            cost:15999.00,
            discount: '-10%'
        },
        description: `Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.`,
        discount: 'From ₹15999.00',
        tagline: 'Xiaomi Redmi 9A'
    }
];

module.exports = products;