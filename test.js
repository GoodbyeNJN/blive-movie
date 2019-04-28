const config = require("./config");
const DmService = require("./service/DmService");

const dmService = new DmService(config.global.roomID, config.dmSender);

dmService.start();
dmService.send("波波去哪了");
