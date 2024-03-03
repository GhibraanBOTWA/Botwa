let handler = async (m, { conn }) => {
const Script =`*• I N F O   S C R I P T :*\n• ${Func.texted("monospace", `Ketik .owner`

conn.reply(m.chat, Script, m, {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363144038483540@newsletter',
                newsletterName: "[ ✓ ] Script Chat Owner",
                serverMessageId: -1
            },
            businessMessageForwardInfo: {
                businessOwnerJid: conn.user.jid
            },
            forwardingScore: 256,
externalAdReply: {
        title: `Dycal MD (ver ${version})`,
        body: wm,
        thumbnailUrl: "https://telegra.ph/file/831216e9d9382b222a7be.png",
        sourceUrl: "https://chat.whatsapp.com/GM9v4vqLjpY4iInbXnlvHR/",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }
    })
}
handler.help = ["Script","sc","sourcecode"].map(a => a + ' *[get script here]*')
handler.tags = ["info","main"]
handler.command = ["Script","sc","sourcecode"]

module.exports = handler