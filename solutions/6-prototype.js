// BEGIN
export function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function() {
    return this.value;
};

Money.prototype.getCurrency = function() {
    return this.currency;
};

Money.prototype.exchangeTo = function(curr) {
    if (this.currency != curr) {
        let currency = curr,
            value = 0;
        if (currency == "usd")
            value = this.value * 1.2;
        else
            value = this.value * 0.7;
        return new Money(value, currency);
    }
    return new Money(this.value, this.currency);
};

Money.prototype.add = function(money) {
    let value = this.value + money.exchangeTo(this.currency).getValue();
    return new Money(value, this.currency);
};

Money.prototype.format = function() {
    return this.value.toLocaleString("en-US", { style: "currency", currency: this.currency });
};
export default Money;
// END