/**
 * @typedef {{
 *   offer_id: string;
 *   name: string;
 *   currency_code: string;
 *   price: string;
 *   quantity: number;
 *   sku: number;
 * }} App.Product
 */

/**
 * @typedef {{
 *   marketplace_service_item_deliv_to_customer: number;
 *   marketplace_service_item_direct_flow_trans: number;
 * }} App.ItemServices
 */

/**
 * @typedef {{
 *   products: App.FinProduct[];
 * }} App.FinData
 */

/**
 * @typedef {{
 *   product_id: string;
 *   old_price: number;
 *   item_services: App.ItemServices;
 * }} App.FinProduct
 */

/**
 * @typedef {{
 *   order_id: number;
 *   products: App.Product[];
 *   order_number: string;
 *   financial_data: App.FinData
 * }} App.Order
 */

/**
 * @typedef {{
 *   result: App.Order[];
 * }} App.Result
 */

function myFunction() {
  const dataAsStr = DriveApp.getFileById('12sf84EOMAsoQtvKRFkEGsUbEpMhDHW1f').getBlob().getDataAsString();
  /** @type {App.Result} */
  const data = JSON.parse(dataAsStr);

  //  Через поиск продукта
  //   const values = data.result.reduce((a, v) => {
  //   v.financial_data.products.forEach(finProduct => {
  //     const product = v.products.find(product => finProduct.product_id === product.sku);
  //     a.push([v.order_id, v.order_number, finProduct.price, product.offer_id, product.name, product.currency_code, product.price, product.quantity, product.sku]);
  //   });
  //   return a;
  // }, []);

  // Через словарь (когда в одном оправлении много продуктов этот вариант выгоднее)
  const values = data.result.reduce((a, v) => {
    const p = v.products.reduce((a, v) => {
      a[v.sku] = v;
      return a;
    }, {});
    v.financial_data.products.forEach((finProduct) => {
      const product = p[finProduct.product_id];
      a.push([
        v.order_id,
        v.order_number,
        finProduct.price,
        product.offer_id,
        product.name,
        product.currency_code,
        product.price,
        product.quantity,
        product.sku,
        finProduct.item_services.marketplace_service_item_deliv_to_customer,
        finProduct.item_services.marketplace_service_item_direct_flow_trans,
      ]);
    });
    return a;
  }, []);

  console.log(values);
}

/**
 * @param {App.Order[]} data
 */
function dataOzonPostingReduce_(data) {
  const headers = [
    'order_id',
    'order_number',
    'price',
    'offer_id',
    'name',
    'currency_code',
    'price',
    'quantity',
    'sku',
    'marketplace_service_item_deliv_to_customer',
    'marketplace_service_item_direct_flow_trans',
  ];
  const values = data.reduce((a, v) => {
    v.financial_data.products.forEach((finProduct) => {
      const product = v.products.find((product) => finProduct.product_id === product.sku);
      a.push([
        v.order_id,
        v.order_number,
        finProduct.price,
        product.offer_id,
        product.name,
        product.currency_code,
        product.price,
        product.quantity,
        product.sku,
      ]);
    });
    return a;
  }, []);
  return { values, headers };
}
