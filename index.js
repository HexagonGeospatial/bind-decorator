define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function bind(target, propertyKey, descriptor) {
        if (!descriptor || (typeof descriptor.value !== 'function')) {
            throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
        }
        return {
            configurable: true,
            get: function () {
                var bound = descriptor.value.bind(this);
                // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
                Object.defineProperty(this, propertyKey, {
                    value: bound,
                    configurable: true,
                    writable: true
                });
                return bound;
            }
        };
    }
    exports.bind = bind;
    exports.default = bind;
});
