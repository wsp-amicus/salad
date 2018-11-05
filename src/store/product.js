import { observable } from "mobx";

// make it singleTon so we don't need to pass like props
export const Store = (function() {
  var instance;

  function createInstance() {
    var store = {
      products: observable([]),
      addProduct: product => {
        store.products.push(product);
      },
      removeProduct: product => {
        store.products = store.products.filter(item => {
          return item !== product;
        });
      }
    };
    return store;
  }

  return {
    getInstance: function() {
      console.log(instance);
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const _store = Store.getInstance();

export const addProduct2Cart = product => {
  _store.addProduct(product);
};

export const removeProduct = product => {
  _store.removeProduct(product);
};
