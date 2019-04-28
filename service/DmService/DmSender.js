const EventEmitter = require("events");
const Request = require("request");

class DmSend extends EventEmitter {
    constructor(postOption) {
        super();

        this.postOption = postOption;
    }
    send(dm) {
        this._set(dm);
        Request.post(this.postOption, (err, res, body) => {
            let oBody = JSON.parse(body);
            if (!err && res.statusCode === 200 && oBody.code === 0) {
                this.emit("onSendNewDm", dm);
            } else {
                this.emit("onDmSenderError", { funcName: "DmSender.send()", msg: err });
            }
        });
    }
    _set(dm) {
        this.postOption.form.msg = dm;
    }
}

module.exports = DmSend;
