import { getApp, AppConfig } from "server-i";
import { Server } from "http";

let server: Server;
export async function startServer() {
  return new Promise((resolve, reject) => {
    let setConfig = function() {
      AppConfig.dbConfig = {
        host: "localhost",
        user: "travis",
        database: "test",
        password: "",
        port: 3306
      };
    };
    setConfig();

    server = getApp().listen(3000, function() {
      let host = server.address().address;
      let port = server.address().port;

      console.log("Server listening at http://%s:%s", host, port);

      resolve();
    });
  });
}

export function stopServer() {
  console.log("Server will stop");
  server.close();
}
