const settings = require('../settings');

async function ownerCommand(sock, from, msg) {
    const ownerText = `👤 *BOT OWNER:* ${settings.ownerName}\n` +
                    `📱 *NUMBER:* +${settings.ownerNumber}\n` +
                    `🔗 *OFFICIAL WHATSAPP CHANNEL:*\n` +
                    `> *https://whatsapp.com/channel/0029Vb9SC0t8kyyI9pg06q34*`;
    await sock.sendMessage(from, { text: ownerText }, { quoted: msg });
}

module.exports = ownerCommand;
