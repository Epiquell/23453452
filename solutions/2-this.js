// BEGIN
let Fraction = (numer, denom) => ({
    numer,
    denom,
    getNumer() { return this.numer },
    getDenom() { return this.denom },
    setNumer(numer) { this.numer = numer },
    setDenom(denom) { this.denom = denom },
    toString() {
        return `${this.numer}/${this.denom}`
    },
    add(other) {
        return Fraction((this.numer * other.denom + this.denom * other.numer), (other.denom * this.denom));
    }
});
export default (numer = null, denom = null) => Fraction(numer, denom);
// END