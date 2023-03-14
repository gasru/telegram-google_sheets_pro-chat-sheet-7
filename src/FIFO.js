/**
 * @typedef {{
 *   quantity: number;
 *   cost: number;
 * }} IQueue.Item
 */

/* exported Queue */
/**
 *
 */
class Queue {
  constructor() {
    this._queue = [];
  }
  /**
   *
   * @param {IQueue.Item} item
   * @returns {Queue}
   */
  enqueue(item) {
    this._queue.push(item);
    return this;
  }
  /**
   *
   * @param {IQueue.Item} item
   * @returns {IQueue.Item[]}
   */
  dequeue(item) {
    let quantity = item.quantity;
    const out = [];
    while (quantity > 0) {
      const peek = this.peek();
      if (!peek) throw new Error('Ошибка ввода очереди! Недостаточно поставок');
      if (peek.quantity > quantity) {
        out.push({
          quantity,
          cost: peek.cost,
        });
        this._queue[0].quantity = this._queue[0].quantity - quantity;
        return out;
      }
      if (peek.quantity === quantity) {
        out.push({
          quantity,
          cost: peek.cost,
        });
        this._queue.splice(0, 1);
        return out;
      }
      if (peek.quantity < quantity) {
        out.push({
          quantity,
          cost: peek.cost,
        });
        quantity = quantity - peek.quantity;
        this._queue.splice(0, 1);
      }
    }
  }
  /**
   *
   * @returns {IQueue.Item}
   */
  peek() {
    return this._queue[0];
  }
  /**
   * @returns {IQueue.Item[]}
   */
  get queue() {
    return this._queue;
  }
  /**
   * @returns {number}
   */
  get rest() {
    return this._queue.reduce((a, e) => a + e.quantity, 0);
  }
}

/**
 * @typedef {{
 *   period: string;
 *   name: string;
 *   quantity: number;
 *   price: number;
 *   type: 'in';
 * }} IAccounting.IncomesItem
 */

/**
 * @typedef {{
 *   period: string;
 *   name: string;
 *   quantity: number;
 *   type: 'out';
 * }} IAccounting.OutcomesItem
 */

/* exported Accounting */
class Accounting {
  /**
   * @param {IAccounting_Item[]} data
   */
  constructor(data) {
    /** @type {IAccounting_Item[]} */
    this.data = data;
  }

  /**
   *
   * @param {any[]} arr
   * @returns {IAccounting.IncomesItem}
   */
  rowToIncome(arr) {
    const [period, name, quantity, price] = arr;
    return { period, name, quantity, price, type: 'in' };
  }

  /**
   *
   * @param {any[]} arr
   * @returns {IAccounting.OutcomesItem}
   */
  rowToOutcome(arr) {
    const [period, name, quantity] = arr;
    return { period, name, quantity, type: 'out' };
  }

  /**
   *
   * @param {IAccounting.IncomesItem[]} incomes
   * @param {IAccounting.OutcomesItem[]} outcomes
   * @returns
   */
  fifo(incomes, outcomes) {
    const incomeData = incomes.map(this.rowToIncome);
    const outcomeData = outcomes.map(this.rowToOutcome);
    /**
     * @type {{
     *   [key:string]: Queue
     * }}
     */
    const queues = {};
    const out = [];
    [...incomeData, ...outcomeData]
      .sort((a, b) => (a.period < b.period ? -1 : a.period > b.period ? 1 : 0))
      .forEach((come) => {
        if (!queues[come.name]) {
          queues[come.name] = new Queue();
        }
        const { quantity, price: cost } = come;
        if (come.type === 'in')
          queues[come.name].enqueue({
            quantity,
            cost,
          });
        else if (come.type === 'out') {
          const dequeue = queues[come.name].dequeue({ quantity });
          const summary = dequeue.reduce(
            (a, c) => {
              a.quantity += c.quantity;
              a.costSum += c.cost * c.quantity;
              return a;
            },
            { quantity: 0, costSum: 0 },
          );
          summary.cost = summary.costSum / summary.quantity;
          out.push(summary);
        }
      });

    return out.map((item) => [item.cost]);
  }
}

/* exported FIFO */
/**
 *
 * @param {any[][]} incomes
 * @param {any[][]} outcomes
 * @returns
 */
function FIFO(incomes, outcomes) {
  const acc = new Accounting();
  return acc.fifo(
    incomes
      .filter((row) => row[0])
      .map((row) => {
        row[0] = row[0].getTime ? new Date(row[0]).toISOString().split('T')[0] : String(row[0]);
        return row;
      }),
    outcomes
      .filter((row) => row[0])
      .map((row) => {
        row[0] = row[0].getTime ? new Date(row[0]).toISOString().split('T')[0] : String(row[0]);
        return row;
      }),
  );
}
