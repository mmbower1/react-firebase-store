const SHOP_DATA = [
  {
    title: "Hats",
    items: [
      {
        id: 1,
        name: "White hat",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-new-era-white-philadelphia-eagles-throwback-adventure-perform-9seventy-adjustable-hat_ss5_p-201125177+u-be0almailjqz6ljul55i+v-ntoksriy0lvopl54slnf.jpg?_hv=2",
        price: 30,
      },
      {
        id: 2,
        name: "Midnight Green hat",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuczj500c3JPvdN8waynDW5rHqLhFYB24P4A&s",
        price: 30,
      },
      {
        id: 3,
        name: "Kelly Green hat",
        imageUrl:
          "https://cdn.shoplightspeed.com/shops/604906/files/71375737/1500x4000x3/new-era-philadelphia-eagles-tb-green.jpg",
        price: 30,
      },
    ],
  },
  {
    title: "Rings",
    items: [
      {
        id: 1,
        name: "2017-18 Superbowl Replica Ring",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71V7JpHlANL._SS400_.jpg",
        price: 60,
      },
      {
        id: 2,
        name: "2024-25 Superbowl Replica Ring",
        imageUrl:
          "https://sportsmemorabilianj.com/cdn/shop/files/Philadelphia-Eagles-Super-Bowl-LIX-Ring4-960x960_82baf11e-da2d-4b00-b924-aaa69c37e1f5.webp?v=1756915016",
        price: 60,
      },
    ],
  },
  {
    title: "Jerseys",
    items: [
      {
        id: 1,
        name: "J. Hurts jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-jalen-hurts-midnight-green-philadelphia-eagles-super-bowl-lix-game-player-jersey_ss5_p-202849307+u-r3us083nsp2gzmqxlcoj+v-ejnv9uxd6bwnccnkzdsl.jpg?_hv=2",
        price: 100,
      },
      {
        id: 2,
        name: "D. Smith jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-devonta-smith-midnight-green-philadelphia-eagles-player-game-jersey_pi4301000_altimages_ff_4301172-31101e4ec58eedc8e028alt1_full.jpg?_hv=2&w=1018",
        price: 80,
      },
      {
        id: 3,
        name: "AJ Brown jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-aj-brown-midnight-green-philadelphia-eagles-team-game-jersey_ss5_p-201398347+u-uyjykuzksk486vtphtqh+v-k4sjuv8mbbbojvolo4l7.jpg?_hv=2",
        price: 80,
      },
      {
        id: 4,
        name: "S. Barkley jersey",
        imageUrl:
          "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/31495696_fpx.tif",
        price: 80,
      },
      {
        id: 5,
        name: "B. Graham jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-brandon-graham-midnight-green-philadelphia-eagles-super-bowl-lix-game-player-jersey_ss5_p-202850682+u-srdt6uiccnz9nxvsbx30+v-6e05tk46z62q36szbgh2.jpg?_hv=2",
        price: 80,
      },
      {
        id: 6,
        name: "J. Kelce jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-jason-kelce-midnight-green-philadelphia-eagles-game-jersey_pi3892000_altimages_ff_3892996-4fa443a35b165cb45da4alt1_full.jpg?_hv=2&w=1018",
        price: 80,
      },
      {
        id: 7,
        name: "D. McNabb jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-donovan-mcnabb-midnight-green-philadelphia-eagles-game-retired-player-jersey_pi3994000_ff_3994178-37965e494d50c78bec3b_full.jpg?_hv=2",
        price: 80,
      },
      {
        id: 8,
        name: "B. Westbrook jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-brian-westbrook-midnight-green-philadelphia-eagles-game-retired-player-jersey_pi3974000_altimages_ff_3974230-14a8ad2700733bf10d63alt1_full.jpg?_hv=2&w=1018",
      },
      {
        id: 9,
        name: "L. McCoy jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/youth-philadelphia-eagles-lesean-mccoy-nike-midnight-green-team-color-game-jersey_pi787000_ff_787764_xl.jpg?_hv=2",
        price: 80,
      },
      {
        id: 9,
        name: "M. Vick jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/nike-michael-vick-philadelphia-eagles-youth-game-jersey-white_pi787000_ff_787769_xl.jpg?_hv=2",
        price: 80,
      },
      {
        id: 9,
        name: "B. Dawkins jersey",
        imageUrl: "https://i.ebayimg.com/images/g/frEAAOSw4qdl6pLI/s-l1200.jpg",
        price: 80,
      },
      {
        id: 9,
        name: "D. Jackson jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-nike-desean-jackson-midnight-green-philadelphia-eagles-game-player-jersey_pi3465000_altimages_ff_3465539-5b480fa77bd55be12a49alt1_full.jpg?_hv=2&w=1018",
        price: 80,
      },
      {
        id: 9,
        name: "R. White jersey",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-mitchell-and-ness-reggie-white-green-philadelphia-eagles-authentic-throwback-retired-player-jersey_pi3614000_altimages_ff_3614858-840b901c61efb07036c2alt1_full.jpg?_hv=2&w=1018",
        price: 80,
      },
    ],
  },
  {
    title: "Jackets",
    items: [
      {
        id: 1,
        name: "White Jacket",
        imageUrl:
          "https://www.jacketsmasters.com/wp-content/uploads/2024/03/philadelphia-eagles-midweight-white-jacket.jpg",
        price: 120,
      },
      {
        id: 2,
        name: "Midnight Green Jacket",
        imageUrl:
          "https://fanatics.frgimages.com/philadelphia-eagles/mens-new-era-midnight-green-philadelphia-eagles-3rd-down-raglan-quarter-zip-windbreaker-jacket_ss5_p-201035221+pv-2+u-ohw0gaxb23pvesoeatkk+v-m2kvxwlaqurug1tlej19.jpg?_hv=2&w=1018",
        price: 120,
      },
      {
        id: 3,
        name: "Kelly Green Jacket",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7js3EUVUkBJebmjKM1Lo5rpuRzFPVGN9reA&s",
        price: 120,
      },
      {
        id: 4,
        name: "Christmas Sweater",
        imageUrl:
          "https://www.uglychristmassweaterparty.com/cdn/shop/products/51_KHNvWTeL.jpg?v=1638386925",
        price: 70,
      },
    ],
  },
  {
    title: "Accessories",
    items: [
      {
        id: 1,
        name: "Flag",
        imageUrl: "https://m.media-amazon.com/images/I/71jryhMdo7L.jpg",
        price: 20,
      },
      {
        id: 2,
        name: "Bumper Stickers",
        imageUrl: "https://m.media-amazon.com/images/I/71PwLp4JU5L.jpg",
        price: 15,
      },
    ],
  },
];

export default SHOP_DATA;
