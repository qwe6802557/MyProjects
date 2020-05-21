/**
 * 通用公具类
 */

exports.defineProperty = (obj, property, value) => {
    Object.defineProperty(obj, property, {
        value,
        writable: true,
        enumerable: true,
    })
};