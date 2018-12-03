import { observable } from "mobx";
import axios from "axios";

// make it singleTon so we don't need to pass like props
export const Store = (function () {
  var instance;

  function createInstance() {
    var store = {
      products: observable([]),
      address: observable({}),
      payment: observable.box("Cash"),
      deliveryCode: observable.box(""),
      addProduct: product => {
        store.products.push(product);
        localStorage.setItem('products', store.products)
      },
      removeProduct: product => {
        store.products = store.products.filter(item => {
          return item !== product;
        });
        localStorage.setItem('products', store.products)
      },
      transactions: observable([]),
      getTransactions: async () => {
        if (store.transactions.length === 0)
          await axios.get("/transactions").then(res => {
            res.data.forEach(item => {
              store.transactions[store.transactions.length] = item;
            });
          });
        return store.transactions;
      },
      genDelivery: user => {
        return new Promise(async (resolved, reject) => {
          let price = 0;
          store.products.forEach(product => {
            price += product.price;
          });
          const productnames = store.products.map(product => product.name);
          await axios
            .post("/transactions", {
              products: JSON.stringify(productnames),
              price: price,
              username: user.username,
              payment: store.payment.get()
            })
            .then(res => {
              store.deliveryCode.set(res.data[0]._id);
              resolved(res);
            })
            .catch(err => reject(err));
        });
      }
    };
    const _products = localStorage.getItem('products')
    if (_products)
      store.products.push(_products)
    return store;
  }


  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const _store = Store.getInstance();

export const addProduct2Cart = product => {
  localStorage.getItem('products').forEach(item => console.log(item))
  console.log(product)
  _store.addProduct({ ...product, key: _store.products.length });
};

export const removeProduct = product => {
  const finded = _store.products.find(item => item.name === product.name)
  _store.removeProduct(finded);
};
