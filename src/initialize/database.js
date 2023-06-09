const {sequelize, Product } = require('../models');

sequelize
  .sync({force: true})
  .then(() => {
    return Product.bulkCreate([
      {
        productName: 'Whiskas',
        brand: 'Whiskas',
        price: 120,
        productType: 'food',
        foodType: 'dry',
        petType: 'cat',
        productWeight: 1.2,
        petAge: 1,
        detail: 'For adult cats and indoor use',
        image1: 'https://cdn.onemars.net/sites/whiskas_th_r81SA_mwh5/image/wks__ocean-fish-flavour_1-2kg_1652270605343.png'
      },
      {
        productName: 'Meow Mix',
        brand: 'Meow Mix',
        price: 90,
        productType: 'food',
        foodType: 'wet',
        petType: 'cat',
        productWeight: 400,
        petAge: 2,
        detail: 'High-quality wet food for cats of all ages',
        image1: 'https://m.media-amazon.com/images/I/91+mcNUBBBL.jpg'
      },
      {
        productName: 'Royal Canin',
        brand: 'Royal Canin',
        price: 150,
        productType: 'food',
        foodType: 'dry',
        petType: 'cat',
        productWeight: 2.5,
        petAge: 1,
        detail: 'Specially formulated for Persian cats',
        image1: 'https://zooroyal.md/wp-content/uploads/2019/04/280419_3.jpg'
      },
      {
        productName: 'Purina ONE',
        brand: 'Purina ONE',
        price: 100,
        productType: 'food',
        foodType: 'dry',
        petType: 'cat',
        productWeight: 1.8,
        petAge: 1,
        detail: 'Balanced nutrition for adult cats',
        image1: 'https://backend.tops.co.th/media/catalog/product/8/8/8850127004847_14-03-2022.jpg'
      },
      {
        productName: 'Pedigree',
        brand: 'Pedigree',
        price: 150,
        productType: 'food',
        foodType: 'dry',
        petType: 'dog',
        productWeight: 3,
        petAge: 2,
        detail: 'For adult dogs and promotes healthy digestion',
        image1: 'https://tailybuddy.com/products/702/pedigree-adult-chicken-veg1.jpg'
      },
      {
        productName: 'Royal Canin',
        brand: 'Royal Canin',
        price: 200,
        productType: 'food',
        foodType: 'wet',
        petType: 'dog',
        productWeight: 400,
        petAge: 3,
        detail: 'Formulated for small breed dogs with sensitive stomachs',
        image1: 'https://cf.shopee.co.th/file/f8ef114b80a54bffcd75fa3183c92ba6'
      },
      {
        productName: 'Blue Buffalo',
        brand: 'Blue Buffalo',
        price: 180,
        productType: 'food',
        foodType: 'dry',
        petType: 'dog',
        productWeight: 2.5,
        petAge: 4,
        detail: 'Grain-free recipe for adult dogs with food sensitivities',
        image1: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/1055542-center-11'
      },
      {
        productName: 'Hill\'s Science Diet',
        brand: 'Hill\'s Science Diet',
        price: 160,
        productType: 'food',
        foodType: 'dry',
        petType: 'dog',
        productWeight: 2.3,
        petAge: 2,
        detail: 'Veterinarian recommended nutrition for large breed puppies',
        image1: 'https://www.hills.co.th/content/dam/pim/hills/th_th/sd/dry/sd-canine-adult-7-plus-dry-productShot_zoom.jpg'
      }
    ]
    )
  }).then(()=>process.exit(0))
  .catch((err) => console.log(err.message));