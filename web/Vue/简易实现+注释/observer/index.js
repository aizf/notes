import { arrayMethods } from './array'

class Observer {
    constructor(obj) {
        if (Array.isArray(obj)) {
            Object.setPrototypeOf(obj, arrayMethods);
        }
        else {
            this.walk(obj);
        }
    }
    /**
     * 将object定义为响应式
     */
    walk(obj) {
        const keys = Object.keys(obj);
        for (let key of keys) {
            defineReactive(obj, key, obj[key])
        }
    }
}

function defineReactive(obj, key, value) {
    // 递归定义响应式
    if (typeof value === "object") {
        new Observer(value);
    }

    // 添加getter,setter
    Object.defineProperty(obj, key, {
        get() {
            console.log(key + ":get");
            return value;
        },
        set(newVal) {
            if (value === newVal) return;
            console.log(key + ":set");
            value = newVal;
        }
    })
}

export { Observer, defineReactive }