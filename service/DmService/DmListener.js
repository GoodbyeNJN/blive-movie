const EventEmitter = require("events");
const DmClient = require("bilibili-danmaku-client");

class DmListener extends EventEmitter {
    constructor(roomID) {
        super();

        this.client = new DmClient(roomID);

        this.client.on("open", () => {
            this.emit("onDmListenerStart");
        });
        this.client.on("close", () => {
            this.emit("onDmListenerStop");
        });
        this.client.on("error", err => {
            this.emit("onDmListenerError", err);
        });
        this.client.on("event", ({ name, content }) => {
            this.emit("onGetNewDm", { name, content });
        });
    }
    start() {
        this.client.start();
    }
    stop() {
        this.client.terminate();
    }
}

module.exports = DmListener;
