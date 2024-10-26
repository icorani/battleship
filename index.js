"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_server_1 = require("./src/http_server");
var HTTP_PORT = 8181;
console.log("Start static http server on the ".concat(HTTP_PORT, " port!"));
http_server_1.httpServer.listen(HTTP_PORT);
process.on('exit', function () { return wss.close(); });
process.on('SIGINT', function () {
    wss.close();
    process.exit();
});
