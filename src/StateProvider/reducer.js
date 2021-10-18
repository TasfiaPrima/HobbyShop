//import { SwitchCameraTwoTone } from "@material-ui/icons";

export const initialState = {
  basket: [],
  user: null,
  product: [
    {
      title: 'Cloths',
      imageUrl:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      body: 'A nice collection of cloths',
    },
    {
      title: 'Food',
      imageUrl:
        'https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=',
      body: 'This is the food isle',
    },
    {
      title: 'Crafts',
      imageUrl:
        'https://thumbs.dreamstime.com/b/craft-supplies-knitting-creative-handmade-yellow-top-view-set-organizing-diy-elements-border-design-craft-159372040.jpg',
      body: 'handy crafts',
    },
    {
      title: 'Plants',
      imageUrl:
        'https://media.istockphoto.com/vectors/collection-of-different-decor-house-indoor-garden-plants-in-pots-and-vector-id1009948020?s=170667a',
      body: 'Go green',
    },
    {
      title: 'Decorative items',
      imageUrl:
        'https://static.toiimg.com/thumb/msid-55063637,width-1200,height-900,resizemode-4/.jpg',
      body: 'items for making your house attractive',
    },
    {
      title: 'Techs',
      imageUrl:
        'https://cdn.trendhunterstatic.com/thumbs/tech-accessories-line.jpeg',
      body: 'everyday needs',
    },
    {
      title: 'Arts',
      imageUrl:
        'https://media.istockphoto.com/photos/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett-picture-id577949148?k=20&m=577949148&s=612x612&w=0&h=iukaE3sYvHROgJcNM6VumPkZkJw1U5B48FSiG9o7KrE=',
      body: 'lets appreciate some arts',
    },
    {
      title: 'Toys',
      imageUrl:
        'https://static6.depositphotos.com/1061185/632/i/950/depositphotos_6323622-stock-photo-toys-on-a-carpet.jpg',
      body: 'Buy something for your kids',
    },
  ],

  Allproducts: [
    {
      category: 'Food',

      title: 'Burger',
      imageUrl:
        'https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      body: 'A delecious Burger',
    },

    {
      category: 'Food',
      title: 'Pizza',
      imageUrl:
        'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
      body: 'This is a pizza',
    },

    {
      category: 'Food',
      title: 'Pasta',
      imageUrl:
        'https://assets.bonappetit.com/photos/5f48ef0f683772f4cb97e816/6:9/w_1312,h_1968,c_limit/Basically-ZucchiniPasta05.jpg',
      body: 'Delecious creamy pasta',
    },

    {
      category: 'Food',
      title: 'Dessert',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Desserts.jpg/220px-Desserts.jpg',
      body: 'I guess you have a sweet tooth',
    },
    {
      category: 'Plants',
      title: 'Rose',
      imageUrl:
        'https://i.pinimg.com/564x/2a/77/56/2a7756cd83712b840aa725eb7afce663--white-roses-red-roses.jpg',
      body: 'This is a home grown beauty',
    },
    {
      category: 'Plants',
      title: 'Cactus',
      imageUrl: 'https://i.ytimg.com/vi/Bbnk-7XpcCg/maxresdefault.jpg',
      body: 'Cactus you can grow on your own',
    },
    {
      category: 'Plants',
      title: 'Cylindrica',
      imageUrl:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623878386-costa-farms-house-plants-10sansl-64_1000.jpg?crop=1xw:1xh;center,top&resize=480:*',
      body: 'Good for home decotation',
    },
    {
      category: 'Cloths',
      title: 'Shirts',
      imageUrl:
        'https://catseye.com.bd/pub/media/catalog/product/cache/567684e3cc8a45c771d2515d5dbe779e/c/e/ce_x_shirt_tss2629_3085_8_439_9_tk_1950_vat.jpg',
      body: 'A nice collection of Shirts',
    },
    {
      category: 'Cloths',
      title: 'Jeans',
      imageUrl:
        'https://static-01.daraz.com.bd/p/0031e84af4ba30d6a84f397a19e4f13b.jpg',
      body: 'This are jeans',
    },

    {
      category: 'Cloths',
      title: 'T-shirt',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdHGbdmFlhLqoFbADot-7HwhNiFoBm_JHQjvbh4kS9hQwNs2GjXsKFBs73gn3nsPvWRw&usqp=CAU',
      body: 'Comphy T-shrits',
    },
    {
      category: 'Crafts',
      title: 'Paper rainbow',
      imageUrl:
        'https://hips.hearstapps.com/clv.h-cdn.co/assets/17/47/1511217803-simple-and-cute-paper-rainbow-kid-craft.jpg',
      body: 'Kids can make this themselves',
    },
    {
      category: 'Crafts',
      title: 'Unicorns',
      imageUrl:
        'https://cdn.cdnparenting.com/articles/2020/03/20141530/1303540096.jpg',
      body: 'Raiinbow unicorns for kids',
    },
    {
      category: 'Crafts',
      title: 'paper dragons',
      imageUrl:
        'https://1.bp.blogspot.com/-2YBHFjVRunU/X53SbeuPIQI/AAAAAAAAsUk/E3L67cnkg0cvQ1M4XdnPIqYQD7vIDb9PQCLcBGAsYHQ/s1200/Dragon%2BCrafts.jpg',
      body: 'DYI paper ddragons',
    },
    {
      category: 'Decorative items',
      title: 'Swan set',
      imageUrl:
        'https://tiimg.tistatic.com/fp/1/005/712/swan-set-for-home-decorative-items-232.jpg',
      body: 'Adds a nice asthetics to your house',
    },
    {
      category: 'Decorative items',
      title: 'wall tree',
      imageUrl:
        'https://ii1.pepperfry.com/media/catalog/product/g/o/800x880/gold-metal-antique-tree-with-led-light-wall-hanging-by-malik-design-gold-metal-antique-tree-with-led-lobcyf.jpg',
      body: 'beautiful addition to your walls',
    },
    {
      category: 'Decorative items',
      title: 'Wood decorative items',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQ6kz0I7TkRs_wwxdNSbP1l7K-FG9WKUYww&usqp=CAU',
      body: 'A wide range of wood decorative items',
    },
    {
      category: 'Techs',
      title: 'Phone',
      imageUrl:
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      body: 'I phones',
    },
    {
      category: 'Techs',
      title: 'TV',
      imageUrl:
        'https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      body: 'This are smart TVs',
    },
    {
      category: 'Techs',
      title: 'Headphones',
      imageUrl:
        'https://www.startech.com.bd/image/cache/catalog/headphone/hyperx/cloud/cloud-228x228.jpg',
      body: 'good collection of headphones',
    },
    {
      category: 'Arts',
      title: 'Painting',
      imageUrl:
        'https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc=',
      body: 'A very brautiful painting',
    },
    {
      category: 'Arts',
      title: 'art tools',
      imageUrl:
        'https://media.istockphoto.com/photos/back-to-school-painting-supplies-picture-id153499035?k=20&m=153499035&s=612x612&w=0&h=P9jolr2N6Ze_6BxD-l_IflYyDzBP1CknVcsFUQYgp2A=',
      body: 'Art tools up for sale',
    },
    {
      category: 'Arts',
      title: 'Art Books',
      imageUrl:
        'https://i2.wp.com/www.culturetype.com/wp-content/uploads/2019/01/FEAT-2018-Best-Black-Art-Books-Photo-by-Victoria-L.-Valentine.jpg?ssl=1',
      body: 'A Wide varity of art books',
    },
    {
      category: 'Toys',
      title: 'bunny',
      imageUrl:
        'https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: 'Fluffy bunnies!',
    },
    {
      category: 'Toys',
      title: 'Train',
      imageUrl:
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMHRveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      body: 'Toy trains for children',
    },
    {
      category: 'Toys',
      title: 'leggo',
      imageUrl:
        'https://www.todaysparent.com/wp-content/uploads/2019/10/best-toys-for-big-kids-feature.jpg',
      body: 'Who doesnt love leggos',
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
