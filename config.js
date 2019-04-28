const global = {
    // 账号信息
    cookie:
        "fts=1519145956; im_notify_type_12127770=0; LIVE_BUVID=e12a3ad8588d22bf279dc56e4c3e97aa; LIVE_BUVID__ckMd5=6e1977f4159565d8; buvid3=BFCF9B31-4836-4D30-9DAD-F3671D40E6FC29843infoc; stardustvideo=1; CURRENT_FNVAL=16; _cnt_dyn=undefined; _cnt_pm=0; _cnt_notify=0; uTZ=-480; sid=cnciiv0v; CURRENT_QUALITY=80; pgv_pvi=4600257536; _qddaz=QD.4hstr4.1mbzrz.jt4ckhve; DedeUserID=12127770; DedeUserID__ckMd5=e3ba2d1df79bc561; Hm_lvt_8a6e55dbd2870f0f5bc9194cddf32a02=1553517626; SESSDATA=1779c979%2C1557311882%2Cac098541; bili_jct=c6ec8087a7cab513859e406c1b49c82b; LIVE_PLAYER_TYPE=1; rpdid=|(k|YkuJR~km0J'ullY|Jl)Ym; _dfcaptcha=956443be73c7e01ba10d629cfbad193f; bp_t_offset_12127770=247080912965779653",
    csrf: "c6ec8087a7cab513859e406c1b49c82b",

    // 直播间id
    roomID: 1024814,
    // roomID: 8945256,
};

const config = {
    global: global,
    // 发送弹幕的相关配置，请勿改动
    dmSender: {
        url: "https://api.live.bilibili.com/msg/send",
        headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: global.cookie,
            DNT: "1",
            Host: "api.live.bilibili.com",
            Origin: "https://live.bilibili.com",
            Referer: "https://live.bilibili.com/" + global.roomID,
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
        },
        form: {
            color: "16777215",
            fontsize: "25",
            mode: "1",
            msg: "",
            rnd: "1556373430",
            roomid: global.roomID,
            bubble: "0",
            csrf_token: global.csrf,
            csrf: global.csrf,
        },
    },
};

module.exports = config;
