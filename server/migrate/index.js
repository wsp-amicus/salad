const fetch = require('node-fetch')
const Yargs = require('yargs')

function fetchAPI(path, method, body) {
  fetch(`http://localhost:5000/${path}`, {
    headers: { 'Content-Type': 'application/json' },
    method,
    body,
  })
    .then(res => method !== 'GET' ? console.log(res) : res.json())
    .then(res => {
      if (method === 'GET') {
        console.log(res)
        return res
      }
    })
    .catch(err => console.log(err))
}

function up() {

  const greenOak = {
    name: 'Green oak',
    price: 10,
    type: 'Vegetable (Main)',
    description: 'Fresh organic green oak lettuce',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0206/9470/products/Living_Lettuce-green-oak_1024x1024.JPG?v=1503108940'
  }

  const redOak = {
    name: 'Red oak',
    price: 10,
    type: 'Vegetable (Main)',
    description: 'Fresh organic red oak lettuce',
    imageUrl: 'https://www.coopathome.ch/img/produkte/880_880/RGB/3633411_001.jpg?_=1457546943675'
  }

  const greenCoral = {
    name: 'Green coral',
    price: 10,
    type: 'Vegetable (Main)',
    description: 'Fresh organic green coral lettuce',
    imageUrl: 'https://www.kingfreshfarm.com/wp-content/uploads/2017/09/Leaf-Lettuce-7.jpg'
  }

  const redCoral = {
    name: 'Red coral',
    price: 10,
    type: 'Vegetable (Main)',
    description: 'Fresh organic red coral lettuce',
    imageUrl: 'https://fp.lnwfile.com/_/fp/_raw/59/48/z2.jpg'
  }

  const avocado = {
    name: 'Avocado',
    price: 30,
    type: 'Vegetable',
    description: 'Fresh organic avocado',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81LKLCmdAQL._SY355_.jpg'
  }

  const corn = {
    name: 'Corn',
    price: 5,
    type: 'Vegetable',
    description: 'Organic sweet corn',
    imageUrl: 'https://ae01.alicdn.com/kf/HTB12mQ3JVXXXXbRXXXXq6xXFXXXi/Pengiriman-gratis-20-benih-jagung-manis-buah-sayur-untuk-musim-gugur-panen.jpg'
  }

  const carrot = {
    name: 'Carrot',
    price: 5,
    type: 'Vegetable',
    description: 'Organic carrot',
    imageUrl: 'https://i5.walmartimages.ca/images/Enlarge/271/747/6000191271747.jpg'
  }

  const tomato = {
    name: 'Tomato',
    price: 5,
    type: 'Vegetable',
    description: 'Fresh organic tomatoes',
    imageUrl: 'https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/13031/photos/280882/tomatoes20170321-8553-1jjgic5_960x960.jpg'
  }

  const olive = {
    name: 'Olive',
    price: 5,
    type: 'Vegetable',
    description: 'Organic black olive',
    imageUrl: 'http://papaginofoods.com/wp-content/uploads/2015/02/Whole-black-pitted-olvies-N.jpg'
  }

  const onion = {
    name: 'Onion',
    price: 5,
    type: 'Vegetable',
    description: 'Organic red onion',
    imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/large/144497.jpg'
  }

  const bacon = {
    name: 'Bacon',
    price: 40,
    type: 'Meat',
    description: 'Fired bacon',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuCI4G-ERqmD_W9dHyR92SzdiN2p-Fsz871M3URGOm5ifYpdv'
  }

  const salmon = {
    name: 'Salmon',
    price: 120,
    type: 'Meat',
    description: 'Salmon from Norway',
    imageUrl: 'https://www.south-stream-seafoods.com/upload/products/pe5ea945ca43a46189a14d37639587bfa.jpg?l=1500278473'
  }

  const beef = {
    name: 'Beef',
    price: 80,
    type: 'Meat',
    description: 'High quality grilled beef',
    imageUrl: 'https://naughtygrapett.com/wp-content/uploads/2016/06/t-bone-steak-1.png'
  }

  const shrimp = {
    name: 'Shrimp',
    price: 60,
    type: 'Meat',
    description: 'Fresh shrimp from southern',
    imageUrl: 'https://th.all.biz/img/th/catalog/29996.jpeg'
  }

  const chicken = {
    name: 'Chicken',
    price: 20,
    type: 'Meat',
    description: 'Fresh chicken breast',
    imageUrl: 'https://mbtskoudsalg.com/images/chicken-breast-png-7.png'
  }

  const pork = {
    name: 'Pork',
    price: 30,
    type: 'Meat',
    description: 'High quality pork',
    imageUrl: 'https://png2.kisspng.com/sh/d27fefcb7b7cd342b04447721b929b27/L0KzQYm3U8I6N5VriZH0aYP2gLBuTfJmbZd4jNdqaz3qgrrzjPlvb154iNtsZT3ldbbtTgRmdpVqit54aX6wg8XsgfsuPZJnfNM6NHPkSIa6WMYvPGg7TaU5MkK0RYO5U8c4OGQ7TqoENT7zfri=/kisspng-beefsteak-grilling-spice-beef-tenderloin-steak-5abda14ca85386.4765302215223770366895.png'
  }

  const ham = {
    name: 'Ham',
    price: 40,
    type: 'Meat',
    description: 'High quality ham',
    imageUrl: 'https://www.shafferfamilymeats.com/wp-content/uploads/2017/04/38945868_l.jpg'
  }

  const egg = {
    name: 'Quail eggs',
    price: 40,
    type: 'Meat',
    description: 'Organic quail eggs',
    imageUrl: 'https://atlas-content-cdn.pixelsquid.com/stock-images/quail-eggs-egg-w14qJa8-600.jpg'
  }

  const caesar = {
    name: 'Caesar',
    price: 10,
    type: 'Dressing',
    description: 'Ceasar salad dressing',
    imageUrl: 'https://www.madgreens.com/sites/default/files/styles/adaptive/public/dressing-caesar_thumb.png?itok=-x3IWdLX'
  }

  const sesame = {
    name: 'Sesame',
    price: 10,
    type: 'Dressing',
    description: 'Sesame salad dressing',
    imageUrl: 'https://www.madgreens.com/sites/default/files/styles/adaptive/public/dressing-sherry-mollasses_thumb.png?itok=xg2wd0Ey'
  }

  const thousandIsland = {
    name: 'Thousand Island',
    price: 10,
    type: 'Dressing',
    description: 'Thousand Island salad dressing',
    imageUrl: 'https://www.madgreens.com/sites/default/files/styles/adaptive/public/dressing-chipotle-caesar_thumb.png?itok=W7UvEtdc'
  }

  const cream = {
    name: 'Cream',
    price: 10,
    type: 'Dressing',
    description: 'Creamy salad dressing',
    imageUrl: 'https://www.madgreens.com/sites/default/files/styles/adaptive/public/dressing-creamy-ginger_thumb.png?itok=r-oYJqEA'
  }

  const blueCheese= {
    name : 'Blue Cheese',
    price : 10,
    type: 'Dressing',
    description: 'Blue Cheese Dressing',
    imageUrl: 'https://www.madgreens.com/sites/default/files/styles/adaptive/public/dressing-blue-cheese_thumb.png?itok=MLe-wcaT'
  }

  const balsamicVinaigrette= {
    name : 'Balsamic Vinaigrette',
    price : 10,
    type: 'Dressing',
    description: 'Balsamic Vinaigrette Dressing',
    imageUrl: 'https://www.madgreens.com/sites/default/files/styles/adaptive/public/dressing-balsamic_thumb.png?itok=wZ2cT1wH'
  }

  const ceasarSalad = {
    name : 'Autumn ceasar salad',
    imageUrl: 'https://media.justsalad.com/assets/Fall_Autumn_Caesar.png',
    ingredients: ['Green oak','Green coral','Chicken','Mozzarella Cheese','Ceasar dressing'],
    price : 100,
    description : '410 CAL'
  }

  const pestoSalad = {
    name : 'Pesto chicken paradise',
    imageUrl: 'https://media.justsalad.com/assets/Fall_Pesto_Chicken_Paradise.png',
    ingredients: ['Green oak','Red oak','Tomatoes','Chicken','Mozzarella Cheese','Pesto dressing'],
    price : 120,
    description : '560 CAL'
  }

  const california = {
    name : 'The California',
    imageUrl: 'https://media.justsalad.com/assets/img/pages/menu/salads/the-california.png',
    ingredients: ['Green coral','Red oak','Tomatoes','Chicken','Roast almonds','Eggs','Balsamic dressing'],
    price : 120,
    description : '310 CAL'
  }

  const salmonSalad = {
    name : 'Salmon ranch salad',
    imageUrl: 'https://media.justsalad.com/assets/JS_Menu_Salads_Buffalo_Chicken_Salad.png',
    ingredients: ['Green oak','carrot','salmon','Pepper Jack cheese','Chips','Ranch dressing'],
    price : 180,
    description : '320 CAL'
  }

  const sweetValley = {
    name : 'Sweet Valley',
    imageUrl: 'https://media.justsalad.com/assets/JS_Menu_Salads_Modern_Greek.png',
    ingredients: ['Green oak','carrot','pork','Goat Cheese','Eggs','Agave dressing'],
    price : 150,
    description : '380 CAL'
  }

  const smokehouseSteak= {
    name : 'Smokehouse steak',
    imageUrl: 'https://media.justsalad.com/assets/JS_Menu_Salads_Smokehouse_Steak_Salad.png',
    ingredients: ['Green oak','corn','Grilled beef','Goat Cheese','Thousand island dressing'],
    price : 180,
    description : '380 CAL'
  }

  const TuscanZoodleBowl= {
    name : 'Tuscan Zoodle Bowl',
    imageUrl: 'https://media.justsalad.com/assets/Fall_Tuscan_Zoodle_Bowl.png',
    ingredients: ['Red oak','Zoodles','Onions','Tomatoes','Grilled beef','Shaved Parmesan Cheese','Pesto dressing'],
    price : 180,
    description : '350 CAL'
  }

  const RoastedTurkeyHealthCobb= {
    name : 'Roasted TurkeyHealth Cobb',
    imageUrl: 'https://media.justsalad.com/assets/JS_Menu_Salads_Roasted_Turkey_Health_Cobb.png',
    ingredients: ['Roasted Turkey', 'Egg', 'Tomatoes', 'Avocado', 'Sharp White Cheddar','Buttermilk Ranch dressing'],
    price : 140,
    description : '340 CAL'
  }

  const TokyoGrilledChicken= {
    name : 'Tokyo grilled chicken',
    imageUrl: 'https://media.justsalad.com/assets/img/pages/menu/salads/tokyo-supergreens.png',
    ingredients: ['Green coral', 'Grilled Chicken', 'Carrot', 'Avocado', 'Broccoli', 'Roasted Almonds','Miso Ginger Vinaigrette'],
    price : 120,
    description : '380 CAL'
  }

  fetchAPI('ingredients/create', 'POST', JSON.stringify(avocado))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(greenOak))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(redOak))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(greenCoral))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(redCoral))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(corn))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(carrot))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(tomato))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(onion))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(bacon))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(salmon))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(beef))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(shrimp))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(pork))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(chicken))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(ham))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(egg))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(caesar))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(sesame))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(thousandIsland))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(cream))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(blueCheese))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(balsamicVinaigrette))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(olive))
  fetchAPI('products/create', 'POST', JSON.stringify(ceasarSalad))
  fetchAPI('products/create', 'POST', JSON.stringify(pestoSalad))
  fetchAPI('products/create', 'POST', JSON.stringify(california))
  fetchAPI('products/create', 'POST', JSON.stringify(salmonSalad))
  fetchAPI('products/create', 'POST', JSON.stringify(sweetValley))
  fetchAPI('products/create', 'POST', JSON.stringify(smokehouseSteak))
  fetchAPI('products/create', 'POST', JSON.stringify(TuscanZoodleBowl))
  fetchAPI('products/create', 'POST', JSON.stringify(RoastedTurkeyHealthCobb))
  fetchAPI('products/create', 'POST', JSON.stringify(TokyoGrilledChicken))
}

function down() {
  fetchAPI('ingredients/delete', 'DELETE')
  fetchAPI('products/delete', 'DELETE')
}

if (require.main === module) {
  const args = Yargs.options({
    u: { type: 'boolean' }, // up
    d: { type: 'boolean' }, // down
  }).argv
  if (args.d) down()
  else if (args.u) up()
}
