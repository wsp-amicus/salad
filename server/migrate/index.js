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
  const pork = {
    name: 'pork',
    price: 30,
    type: 'meat',
    description: 'pork grill',
    imageUrl: 'https://www.pork.org/wp-content/uploads/2017/11/grilled-new-york-pork-chop_preview-1024x801.png'
  }
  const chicken = {
    name: 'chicken',
    price: 25,
    type: 'meat',
    description: 'chicken grill',
    imageUrl: 'http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fv.img.com.ua%2Fb%2Forig%2Fb%2Fae%2F420538d460ed65df3729c000ca2f2aeb.jpg'
  }
  fetchAPI('ingredients/create', 'POST', JSON.stringify(pork))
  fetchAPI('ingredients/create', 'POST', JSON.stringify(chicken))
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
