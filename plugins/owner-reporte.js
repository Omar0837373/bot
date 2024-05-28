const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]أكتب التقرير*\n\n*مثال:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`;
  if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗]يجب ان يكون اقل شئ  10 حروف!*`;
  if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] يجب ان لا تتخطي 1000 حرف!*`;
  const teks = `*❒═════[تقرير]═════❒*\n*┬*\n*├❧ رقمك *wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ الرسالة:* ${text}\n*┴*`;
  conn.reply('5219992095479@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('584125778026@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[ ✔️ ]تم تسليم التقرير بنجاح*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|تقرير)$/i;
export default handler;
