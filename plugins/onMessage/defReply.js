const langData = {
  "en_US": {
    "defaultReply": "»» গ্রুপে কোনো মেসেজ  দিবেন না প্লিজ ⚠️\n\n»» কোনো কিছু বলার  থাকলে এডমিন কে মেসেজ দিন ✅"
  },
  "vi_VN": {
    "defaultReply": "Đây là phản hồi mặc định"
  }
};

function onCall({ message, getLang, data }) {
  // Check if sender's ID is 100011055013593 and do not reply if true
  if (message.senderID === '100011055013593') return;
  if (message.body.length == 0) return;

  const prefix = data?.thread?.data?.prefix || global.config.PREFIX;
  if (message.body.startsWith(prefix)) return;
  let msg = "";
  switch(message.body.toLowerCase()) {
     case "hi": msg = "➵ জী কিছু্ বলার থাকলে এডমিন কে বলুন"; break;
     case "hlw": msg = "➵ জী কিছু্ বলার থাকলে এডমিন কে বলুন"; break;
     case "admin": msg = "°•~━━✥ ADMIN OF S2F SHOP ✥━━~•°\n↫↫↫↫ ----------------- ↬↬↬↬\n\n¤°´✿.｡.:* SF SHIHAB UDDIN *.:｡.✿`°¤\n\nΝႮᎷᏴᎬᎡ: +8801747397037\nҒᏴ ᏆᎠ: https://cutt.ly/sffb\nͲᎬᏞᎬᏀᎡᎪᎷ : https://cutt.ly/sftg\nᏔᎻᎪͲՏᎪᏢᏢ : https://cutt.ly/sfwp"; break;
      case "এডমিন": msg = "°•~━━✥ ADMIN OF S2F SHOP ✥━━~•°\n↫↫↫↫ ----------------- ↬↬↬↬\n\n¤°´✿.｡.:* SF SHIHAB UDDIN *.:｡.✿`°¤\n\nΝႮᎷᏴᎬᎡ: +8801747397037\nҒᏴ ᏆᎠ: https://cutt.ly/sffb\nͲᎬᏞᎬᏀᎡᎪᎷ : https://cutt.ly/sftg\nᏔᎻᎪͲՏᎪᏢᏢ : https://cutt.ly/sfwp"; break;
     default: msg = getLang("defaultReply"); break;
     case "রুলস": msg = "* ☆::. S2F SHOP  GROUP RULes .::.☆*\n\n➵ গ্রুপে কেউ কোনো মেসেজ দিবেন না ⤫\n➵ গ্রুপে কোনো লিংক দিতে পারবেন না \n➵ গ্রুপ এর কাউকে কোনো মেসেজ দিবেন না \n➵ কোনো কিছু বলার থাকলে এডমিন কে মেসেজ দিন \n➵ টপ আপ করতে পেজে মেসেজ  দিন\n➵ কাউকে রিপোর্ট দিতে তার মেসেজ টি রিপ্লাই করে +report লিখে দিবেন\n\n⚠️ আশা করি সব কিছু মেনে চলবেন ⚠️"; break;
     case "rules": msg = "* ☆::. S2F SHOP  GROUP RULes .::.☆*\n\n➵ গ্রুপে কেউ কোনো মেসেজ দিবেন না ⤫\n➵ গ্রুপে কোনো লিংক দিতে পারবেন না \n➵ গ্রুপ এর কাউকে কোনো মেসেজ দিবেন না \n➵ কোনো কিছু বলার থাকলে এডমিন কে মেসেজ দিন \n➵ টপ আপ করতে পেজে মেসেজ  দিন\n➵ কাউকে রিপোর্ট দিতে তার মেসেজ টি রিপ্লাই করে +report লিখে দিবেন\n\n⚠️ আশা করি সব কিছু মেনে চলবেন ⚠️"; break;


  }

  // Default reply for all other senders
  message.reply(msg);

  return;
}

export default {
  langData,
  onCall
};