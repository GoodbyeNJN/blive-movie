const EventEmitter = require("events");
const DmListener = require("./DmListener");
const DmSender = require("./DmSender");

class DmService extends EventEmitter {
    constructor(roomID, postOption) {
        super();

        this.dmListener = new DmListener(roomID);
        this.dmSender = new DmSender(postOption);

        this.dmListener.on("onDmListenerStart", () => {
            this.emit("onDmServiceStart");
        });
        this.dmListener.on("onDmListenerStop", () => {
            this.emit("onDmServiceStop");
        });
        this.dmListener.on("onDmListenerError", err => {
            console.log(err);
        });
        this.dmListener.on("onGetNewDm", dm => {
            this.emit("onGetNewDm", dm);
            console.log(dm);
        });

        this.dmSender.on("onDmSenderError", err => {
            console.log(err);
        });
        this.dmSender.on("onSendNewDm", dm => {
            this.emit("onSendNewDm", dm);
            console.log(dm);
        });
    }
    start() {
        this.dmListener.start();
    }
    stop() {
        this.dmListener.stop();
    }
    send(dm) {
        this.dmSender.send(dm);
    }
}

module.exports = DmService;
