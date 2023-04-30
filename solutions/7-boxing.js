// BEGIN
export let magic = (...args) => {
    let sum = args.reduce((prev, el) => prev + el, 0);
    let newmagic = (...ars) => magic(sum, ...ars);
    newmagic.valueOf = () => sum;
    return newmagic;
};
export default magic;
// END