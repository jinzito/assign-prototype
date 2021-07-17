export default class ProductService {

  getClients() {
    return fetch('data/clients.json').then(res => res.json()).then(d => d.data);
  }

  getProductsSmall() {
    return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
  }

  getProducts() {
    return fetch('data/products.json').then(res => res.json()).then(d => d.data);
  }

  getProductsWithOrdersSmall() {
    return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
  }
}