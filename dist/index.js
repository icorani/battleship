"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_server_1 = require("./src/http_server");
const HTTP_PORT = 8181;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
http_server_1.httpServer.listen(HTTP_PORT);
process.on('exit', () => wss.close());
process.on('SIGINT', () => {
    wss.close();
    process.exit();
});
//# sourceMappingURL=index.js.map