import { observable } from "mobx";
import randomstring from "randomstring";

// make it singleTon so we don't need to pass like props
export const Store = (function() {
  var instance;

  function createInstance() {
    var store = {
      products: observable([]),
      address: observable({}),
      payment: observable.box("Cash"),
      deliveryCode: observable.box(""),
      addProduct: product => {
        store.products.push(product);
      },
      removeProduct: product => {
        store.products = store.products.filter(item => {
          return item !== product;
        });
      },
      genDelivery: () => {
        store.deliveryCode.set(randomstring.generate());
      }
    };
    return store;
  }

  return {
    getInstance: function() {
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
