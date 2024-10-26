import {httpServer} from "./src/http_server";


const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);


process.on('exit', () => wss.close());
process.on('SIGINT', () => {
    wss.close();
    process.exit()
})
