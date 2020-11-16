"use strict";

const http = require("http");

function main(){
    const server = http.createServer((req, res) => {
        console.info("[" + new Date() + "] Requested by " + req.connection.remoteAddress);
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        switch(req.method){
            case 'GET':
                res.write('GETリクエスト' + "\n" + req.headers['user-agent'] + "\n" + "現在時刻：　" + new Date());
                break;
            case 'POST':
                res.write('POSTリクエスト' + "\n" + req.headers['user-agent'] + "\n" + "現在時刻：　" + new Date());
                let rawData = '';
                req.on('data', (chunk) => {
                    rawData = rawData + chunk;
                }).on('end', () => {
                    console.info('[' + new Date() + '] Data posted: ' + rawData);
                });
                break;
            default:
                break;
        }
        res.end();
    }).on("error", e => {
        console.error("[" + new Date() + "] Server Error", e);
    }).on("clientError", e => {
        console.error("[" + new Date() + "] Client Error", e);
    });

    //サーバーを起動
    const port = 8000;
    server.listen(port, () => {
        console.log("[" + new Date() + "] Listening on " + port);
    });
}

main();