// BEGIN
export default (obj, func) => {
    return (...args) => {
        obj["\\"] = func;
        let res = obj["\\"](...args);
        delete obj["\\"];
        return res;
    };
};;
// END