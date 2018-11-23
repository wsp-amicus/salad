import vegetableMain from './ingredients/vegetableMain.js'
import vegetable from './ingredients/vegetable.js'
import meat from './ingredients/meat.js'
import dressing from './ingredients/dressing.js'

import menu from './menu.js'

const fetch = require('node-fetch')
const Yargs = require('yargs')

function fetchAPI(path, method, body) {
  fetch(`http://localhost:5000/${path}`, {
      headers: {
        'Content-Type': 'application/json'
      },
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
  const saladIngredients = {
    vegetableMain,
    vegetable,
    meat,
    dressing
  }
  fetchAPI('ingredients/createMany', 'POST', JSON.stringify(saladIngredients))
  fetchAPI('products/createMany', 'POST', JSON.stringify(menu))

}

function down() {
  fetchAPI('ingredients/delete', 'DELETE')
  fetchAPI('products/delete', 'DELETE')
}

if (require.main === module) {
  const args = Yargs.options({
    u: {
      type: 'boolean'
    }, // up
    d: {
      type: 'boolean'
    }, // down
  }).argv
  if (args.d) down()
  else if (args.u) up()
}
