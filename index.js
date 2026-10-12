const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const triggerMap = {
  "bibi gufi": "Meeska, Mooska, Bibi Gufi <@i4cats777>",
  "i love rie": "i love rie 4eva <@rssntment>",
  "masc": "huy <@myrowanempire> may masc",
  "ap": "gumawa ka na ba ng assignment mo? <@maximiffy>",
  "araling panglipunan": "drop mo na yan <@maximiffy>",
  "ano tangina": "ANO TANGINA <@oneduhnot_52622>",
  "ay nakatulog": "gising na <@slimnpickin>",
  "ghoster": "ghost project ka na pala <@zi3eppy_>",
  "steak": "gising na <@dazliaz> yung streaks mo",
  "ex": "im still rocking your hoodie, ex-pecially for you <@y.zke>",
  "oh hey": "oh hey <@slimnpickin>",
  "dwight ramos": "hi <@rosseustace6451> sarap mo",
  "carlos yulo": "<@rosseustace6451> ano masasabi mo sa step bro mo na si rene?",
  "ows rely": "ows rely? ows rely? ows rely? ows rely? <@slimnpickin>",
  "pakyu": "pakyu raw teh oh <@oneduhnot_52622>",
  "ganda": "hi ganda <@riesworld>",
  "yelena": "hi <@nmdrll> i miss you penge 350"
};

client.once('ready', () => {
  console.log(`Bot status: Online as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const contentLower = message.content.toLowerCase();


  const sortedTriggers = Object.keys(triggerMap).sort((a, b) => b.length - a.length);

  for (const trigger of sortedTriggers) {
    if (contentLower.includes(trigger)) {
      await message.channel.send(triggerMap[trigger]);
      break;
    }
  }
});


client.login(process.env.DISCORD_TOKEN);
