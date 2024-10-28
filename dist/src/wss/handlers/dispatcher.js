"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchMessage = void 0;
const user_1 = require("./user");
const updateRoom_1 = require("./updateRoom");
const ws_1 = require("ws");
const dispatchMessage = async (ws, type, data) => {
    switch (type) {
        case "reg":
            await (0, user_1.userConnect)(ws, data);
            await (0, updateRoom_1.updateRoom)(ws, ws_1.WebSocket);
            break;
        case "create_room":
            await (0, updateRoom_1.createRoom)(ws);
            break;
        case "update_room":
            await (0, updateRoom_1.updateRoom)(ws);
            break;
    }
};
exports.dispatchMessage = dispatchMessage;
//# sourceMappingURL=dispatcher.js.map