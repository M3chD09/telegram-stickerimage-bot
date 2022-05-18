module.exports = {
    // telegram bot token and username, get from @BotFather
    token: process.env.BOT_TOKEN,
    webhook: process.env.BOT_WEBHOOK,

    // imagemagick convert path, defaults to 'convert'
    im_convert_path: 'convert',

    // max images allowed in one pack
    maximages: process.env.MAX_IMAGES || 50,
    // file storage path
    file_storage: './storage',

    // recognized sticker sources
    sticker_sources: [
        'https://t.me/addstickers/',
        'https://telegram.me/addstickers/'
    ],
    // use language
    default_lang: 'en',
    available_lang: {
        'en': ['English', 'English'],
        'de': ['German', 'Deutsch'],
        'zh-hans': ['简体中文', '中国'],
        'zh-hant': ['正體中文', '中國'],
        'pt': ['Português (Portugal)']
    }
};
