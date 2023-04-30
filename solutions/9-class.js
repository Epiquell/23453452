import _ from 'lodash';

// BEGIN
export default class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        this.items.push({ item: item, count: count });
        return this;
    }

    getItems() {
        return this.items;
    }

    getCost() {
        let cost = 0;
        for (let el of this.items) {
            cost += el.item.price * el.count;
        }
        return cost;
    }

    getCount() {
        let count = 0;
        for (let el of this.items) {
            count += el.count;
        }
        return count;
    }
}
// END