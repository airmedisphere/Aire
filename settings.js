// Made by Tuhin
// Visit https://tu.hin.life
// Contact me@mailtuhin.ml

module.exports = {

    // Bot API key from environment variable or fallback
    bot_api_key: process.env.BOT_API_KEY || "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

    // JioSaavn API URL from env or fallback
    jiosaavn_api_url: process.env.JIOSAAVN_API_URL || "https://jiosaavn-api.vercel.app/",

    // Musicder API URL from env or fallback
    musicder_url: process.env.MUSICDER_URL || "https://musicder.net/",

    // /start message
    start_message: process.env.START_MESSAGE || "<b>Hey, 👋👋</b>\n\n<em>Welcome to <b>Musicder Bot</b>.\n\nJust send the Song's Name or, Jiosaavn Song's Link & You will get Best Matched Result(s) with their Download Link(s).\n\nBrought you by @tprojects</em>",

    // /about message
    about_message: process.env.ABOUT_MESSAGE || "Created by <a href='https://tu.hin.life'>Tuhin Kanti Pal</a>.",

    // /help message
    help_message: process.env.HELP_MESSAGE || "Created by <a href='https://tu.hin.life'>Tuhin Kanti Pal</a>.",

};
