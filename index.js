const Aoijs = require("aoi.js");

const bot = new Aoijs.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: process.env.TOKEN, // change TOKEN with your bot token
  prefix: ["$getServerVar[prefix]", "<@!$clientID>", "<@$clientID>"],
  autoUpdate: "true", // you may change the bot's main prefix in vars.js
});

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
});

bot.status({
  text: ` N!help | $serverCount Servers`, // put any text
  type: "LISTENING", // LISTENING, PLAYING, WATCHING, COMPETING
  status: "online", // online, dnd, idle, invisible
  time: 75 // amount of times where you can change the bot status (if have multiple statuses)
});

// FOR STREAMING STATUS USE THIS
// bot.status({
// text: "text",
// type: "STREAMING",
// url: "enter url/link"
//   })
// remove `//` in each side




bot.loopCommand({
  name: "test",
  code: `
  
  $description[yes?]
  $globalCooldown[5s]
  
  `
  
})

bot.musicStartCommand({
  channel: "$channelID",
  code: `$sendMessage[{description:▶ Memulai Music - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
});

bot.musicEndCommand({
  channel: "$channelID",
  code: `$sendMessage[{description:⏹ Tidak Memulai Music dan saya keluar!}{color:RANDOM}{delete:10s};no]`
});

bot.command({
  name: "embed",
  code: `$color[BLUE]
  $description[$message]
  $deletecommand
  `
})

bot.command({
  name: "say",
  code: `$message
  $deletecommand
  `
})

bot.command({
  name: "lol",
  code: `$createSlashCommand[$guildID;inviteme;Invite Me]`
});
bot.interactionCommand({
  name: "inviteme",
  code: `$interactionReply[$getBotInvite]`
});
bot.onInteractionCreate();

bot.joinCommand({ 
        channel: "884597413057273876", 
        code: `
        $description[Selamat Datang $username di $serverName 
        
        
        ]
        `
})
bot.onJoined()

bot.leaveCommand({ 
        channel: "884597413057273876", 
        code: `**Selamat tinggal $username, Kembali lagi ya**`
})
bot.onLeave()

bot.command({
name: "add-cmd",
code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cmd-list\` to see all available commands
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>2;{description:Correct use \n\`\`\`\n$getservervar[prefix]add-cmd <trigger> <response>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
`
})


bot.command({
name: "del-cmd",
code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
Successfully cleared command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` not available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>1;{description:Correct use \n\`\`\`\n$getservervar[prefix]del-cmd <trigger>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
`
}) 

bot.command({
name: "cmd-list",
code: `
$title[**__Custom Commands__**]
$color[RANDOM]
$thumbnail[$servericon]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}]
$textsplit[$getservervar[ccmd];/] 
`
}) 

bot.command({
name: "$alwaysExecute",
code: `
$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]
$onlyif[$isbot[$authorid]==false;]
$textsplit[$getservervar[ccmd];/] 
`
}) 



bot.variables({
  prefix: "N!",
  uang: "0",
  bio: "ketik N!setbio <Text>",
  bank: "",
  gender: "",
  buy: "",
  suggest: "",
  lock: "",
  unlock: "",
  Cookie: "0",
  Pizza: "0",
  Bronze: "0",
  Platinum: "0",
  Gold: "0",
  Silver: "0",
  SpaceCoin: "0",
  SpaceTro: "0",
  premium: "false",
  antilink: "false",
  Utm: "0",
  guess_the_number_channel: "0",
  winning_number: "0",
  muted: "",
  Rob: "false",
  ccmd: "",
  cdes: "",
});

bot.loadCommands("./commands/");
