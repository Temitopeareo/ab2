"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "bmw", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝚃𝙷𝙸𝚂 𝙸𝚂 𝚄𝙽𝙸𝚀𝚄𝙴 𝙼𝙳 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚆𝙰𝚂𝙸 𝚃𝙴𝙲𝙷🥷 🚗 \n\n ' + "║❒ 𝗥𝗲𝗽𝗼https://github.com/Itxxwasi/UNIQUE-MD ";
    let d = '       ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@wasitech1';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/789ff523af28f7292aa9c.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")

async(Void, citel, text, isAdmins) => {
Void.sendMessage(citel.chat, { 
              react: { 
                  text: "🚘", 
                  key: citel.key 
              } 
          }) 
          await Void.sendPresenceUpdate('recording', citel.chat);
          await Void.sendMessage(citel.chat, { audio: {url : 'https://a.uguu.se/lOZETVDW.mp4'',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *BMW-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *BMW-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
