const arrayProto = Array.prototype;
/**
 * 数组对象的拦截层，arrayMethods带有数组的所有方法
 */
const arrayMethods = Object.create(arrayProto);

// 需要拦截的方法
const methodsToProxy = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];

// 设置拦截内容
methodsToProxy.forEach((method) => {
    const original = arrayProto[method];
    Object.defineProperty(arrayMethods, method, {
        value(...args) {
            console.log(method, ":", args);
            const res = original.apply(this, args);
            return res;
        }
    })
})


export { arrayMethods }
