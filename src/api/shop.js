/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "美的电饭锅", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "太平洋一日游", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "环游太空之旅", "price": 19.99, "inventory": 5}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5) ? cb() : errorCb()
    }, 100)
  }
}
