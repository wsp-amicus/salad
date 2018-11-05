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
      if (method === 'GET')
        console.log(res)
    })
    .catch(err => console.log(err))
}

function up() {
  const greenOak = {
    name:'Green oak',
    price: 10,
    type:'vegetable',
    description: 'Fresh organic green oak lettuce',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTik1_lPPWIi67ExyNv9wdaj3TPW7Gg6fmQDghDuwdQ5eKKoNZuXg'
  }

  const redOak = {
    name:'Red oak',
    price: 10,
    type:'vegetable',
    description: 'Fresh organic red oak lettuce',
    imageUrl: 'https://www.coopathome.ch/img/produkte/880_880/RGB/3633411_001.jpg?_=1457546943675'
  }

  const greenCoral = {
    name:'Green coral',
    price: 10,
    type:'vegetable',
    description: 'Fresh organic green coral lettuce',
    imageUrl: 'https://www.kingfreshfarm.com/wp-content/uploads/2017/09/Leaf-Lettuce-7.jpg'
  }

  const redCoral = {
    name:'Red coral',
    price: 10,
    type:'vegetable',
    description: 'Fresh organic red coral lettuce',
    imageUrl: 'https://fp.lnwfile.com/_/fp/_raw/59/48/z2.jpg'
  }

  const corn = {
    name:'Corn',
    price: 5,
    type:'vegetable',
    description: 'Organic sweet corn',
    imageUrl: 'http://ku.90sjimg.com/element_origin_min_pic/00/16/05/08572eba0a06025.jpg!/fw/302/quality/90/unsharp/true/compress/true/canvas/302x302/cvscolor/F6F6F600'
  }

  const carrot = {
    name:'Corn',
    price: 5,
    type:'vegetable',
    description: 'Organic carrot',
    imageUrl: 'https://i5.walmartimages.ca/images/Enlarge/271/747/6000191271747.jpg'
  }

  const tomato = {
    name:'Tomato',
    price: 10,
    type:'vegetable',
    description: 'Fresh organic tomatoes',
    imageUrl: 'https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/13031/photos/280882/tomatoes20170321-8553-1jjgic5_960x960.jpg'
  }

  const onion = {
    name:'Onion',
    price: 10,
    type:'vegetable',
    description: 'Organic red onion',
    imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/large/144497.jpg'
  }

  const bacon = {
    name:'Bacon',
    price: 20,
    type:'meat',
    description: 'Fired bacon',
    imageUrl: 'https://banner2.kisspng.com/20180202/zde/kisspng-bacon-cooking-bacon-5a751760b2d1e9.7555443515176231367325.jpg'
  }

  const salmon = {
    name:'Salmon',
    price: 100,
    type:'meat',
    description: 'Salmon from Norway',
    imageUrl: 'https://www.south-stream-seafoods.com/upload/products/pe5ea945ca43a46189a14d37639587bfa.jpg?l=1500278473'
  }

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
}

function down() {
  fetchAPI('ingredients/delete?name=pork', 'DELETE')
  fetchAPI('ingredients/delete?name=chicken', 'DELETE')
}

if (require.main === module) {
  const args = Yargs.options({
    u: { type: 'boolean' }, // up
    d: { type: 'boolean' }, // doƒwn
  }).argv
  if (args.d) down()
  else if (args.u) up()
}
