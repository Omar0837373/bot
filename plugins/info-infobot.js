import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
╠➥ [🤴🏻] المنشئ: *Omar Ashraf*
╠➥ [#️⃣] الرقم: *+201050079089*
╠➥ [🔐] الدردشة الخاصة: *${chats.length - groups.length}*
╠➥ [🦜] الدردشة الجماعية: *${groups.length}* 
╠➥ [💡] إجمالي الدردشات: *${chats.length}* 
╠➥ [🚀] النشاط: *${uptime}*
╠➥ [🎩] المستخدمون: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [☑️] القرا~ة التلقائية: ${autoread ? "*مفعل*" : "*غير مفعل*"}
╠➥ [❗] تقيد: ${restrict ? "*مفعل*" : "*غير مفعل*"} 
╠➥ [💬] 𝙿𝙲𝙾𝙽𝙻𝚈: ${pconly ? "*مفعل*" : "*غير مفعل*"}
╠➥ [🏢] 𝙶𝙲𝙾𝙽𝙻𝚈: ${gconly ? "*مفعل*" : "*غير مفعل*"}
╠➥ [🌎] الوضع: ${self ? "*خاص*" : "*عام*"}
╠➥ [💬] منع الخاص: ${antiprivado ? "*مفعل*" : "*غير مفعل*"}
╠➥ [🤖] 𝙼𝙾𝙳𝙴𝙹𝙰𝙳𝙸𝙱𝙾𝚃: ${modejadibot ? "*مفعل*" : "*غير مفعل*"}
╠➥ [📵] 𝙰𝙽𝚃𝙸𝙻𝙻𝙰𝙼𝙰𝙳𝙰: ${antiCall ? "*مفعل*" : "*غير مفعل*"}
╠➥ [👨‍🦯] السرعة: 
╠  *${speed} ms* 
╠
╠═〘 THE KODZI - 𝐁𝐨𝐭 〙 ═
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/BrunoSobrino/TheMystic-Bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://whatsapp.com/channel/0029VagmAyE1NCraaaxjNr0d",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot|من انت)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
