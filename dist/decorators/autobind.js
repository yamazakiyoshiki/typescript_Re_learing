"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoBind = void 0;
function autoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
exports.autoBind = autoBind;
//# sourceMappingURL=autobind.js.map