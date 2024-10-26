"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchMessage = void 0;
const user_1 = require("./user");
const dispatchMessage = async (ws, type, data) => {
    switch (type) {
        case "reg":
            await (0, user_1.userConnect)(ws, data);
    }
};
exports.dispatchMessage = dispatchMessage;
//# sourceMappingURL=dispatcher.js.map