// BEGIN
export default (list, callback) => {
    for (let el of list) {
        callback.bind(el)();
    }
};
// END