const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const why = `*[❗] مثال علي الأستخدام الصحيح.*\n\n*—◉ أستخدام غير صحيح للأمر:*\n*◉ ${usedPrefix + command} @${m.sender.split('@')[0]}*\n*◉ ${usedPrefix + command} ${m.sender.split('@')[0]}*\n*◉ ${usedPrefix + command} <mensaje citado>*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) return conn.reply(m.chat, why, m, {mentions: [m.sender]});
  switch (command) {
    case 'إضافة مطور':
      const nuevoNumero = who;
      global.owner.push([nuevoNumero]);
      await conn.reply(m.chat, '*[❗] تمت إضافته إلي المطورين.*', m);
      break;
    case 'حذف مطور':
      const numeroAEliminar = who;
      const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
      if (index !== -1) {
        global.owner.splice(index, 1);
        await conn.reply(m.chat, '*[❗] تم حذف الرقم من قائمة المطورين.*', m);
      } else {
        await conn.reply(m.chat, '*[❗] الرقم دا مش مطور أصلا.*', m);
      }
      break;
  }
};
handler.command = /^(إضافة مطور|حذف مطور)$/i;
handler.rowner = true;
export default handler;
