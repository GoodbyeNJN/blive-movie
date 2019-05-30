const EventEmitter = require("events");
const ReadLine = require("readline");

class CmdInput extends EventEmitter {
    constructor() {
        super();

        this.readLine = ReadLine.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        this.readLine.setPrompt("> ");

        this.readLine.on("line", line => {
            let [cmd, ...args] = line.trim().split(" ");
            const router = {
                send: args => {
                    if (args.length !== 1) {
                        this.emit("onCmdInputError");
                        return;
                    }
                    this.emit("onSendDm");
                },
                help: args => {
                    if (args.length !== 0) {
                        this.emit("onCmdInputError");
                        return;
                    }
                    this.emit("onShowHelp");
                },
            };
            if (!router.hasOwnProperty(cmd)) {
                cmd = "help";
            }

            router[cmd](args);
            this.waitInput();
        });
    }
    input(cmd, ...args) {}
    waitInput() {
        this.readLine.prompt();
    }
    _parseLine(line) {
        // let [cmd, ...args] = line.trim().split(" ");
        
    }
}

module.exports = CmdInput;
