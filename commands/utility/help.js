module.exports = {
  name: "help",
  description: "Command List",
  code: `
  $title[Command List]
  $description[
  __**MODERATION**__
  **Banned** - \`$getServerVar[prefix]ban <@user> [Alasan]\`
  **Give Role** \`$getServerVar[prefix]giverole <@mention> <@role>\`
  **Kick** - \`$getServerVar[prefix]kick <@mention> [alasan]\`
  **Mute** - \`$getServerVar[prefix]mute\`
  **Nuke** - \`$getServerVar[prefix]nuke\`
  **Purge** - \`$getServerVar[prefix]clear <number>\`
  **Remove Role** - \`$getServerVar[prefix]removerole <@mention> <@role>\`
  **SetMute** - \`$getServerVar[prefix]setmute <@role>\`
  **TempMute** -\`$getServerVar[prefix]tempmute <@mention> <time>\`
  **TempRole** - \`$getServerVar[prefix]temprole <@mention> <@role>\`
  **Unbanned** -\`$getServerVar[prefix]unban <ID USER>\`
  **UnMute** - \`$getServerVar[prefix]unmute <@mention>\`
  **Lock Channel** - \`$getServerVar[prefix]lock\`
  **Unlock Channel** - \`$getServerVar[prefix]unlock\`
  
  __**MUSIC**__
  **Disconnect** \`$getServerVar[prefix]dc\`
  **Join** - \`$getServerVar[prefix]join\`
  **Play** - \`$getServerVar[prefix]play <name/url>\`
  **Skip** - \`$getServerVar[prefix]skip\`
  **Stop** - \`$getServerVar[prefix]stop\`
  **Volume** - \`$getServerVar[prefix]volume <1/200>\`
  **Antrian Music** - \`$getServerVar[prefix]qeue\`
  
  __**Bonus**__
  **SetPrefix** - \`$getServerVar[prefix]setprefix\`
  **Ping** - \`$getServerVar[prefix]ping\`
  **Bot Info** - \`$getServerVar[prefix]botinfo\`
  **Channel Info** - \`$getServerVar[prefix]channelinfo\`
  **Server Info** - \`$getServerVar[prefix]serverinfo\`
  **Role Info** - \`$getServerVar[prefix]roleinfo\`
  **User Info** - \`$getServerVar[prefix]userinfo\`
  **Rip** - \`$getServerVar[prefix]rip <@mention>\`
  **how gay** - \`$getServerVar[prefix]howgay <@mention>\`
  **embed** - \`$getServerVar[prefix]embed <Text>\`
  **Say** - \`$getServerVar[prefix]say\`
  **Avatar** - \`$getServerVar[prefix]avatar <@user>\`

  __**Economy**__ 
 **shop** - \`$getServerVar[prefix]shop\`
 **give** - \`$getServerVar[prefix]give\`
 **deposit** - \`$getServerVar[prefix]dep\`
 **with** - \`$getServerVar[prefix]with\`
 **hourly** - \`$getServerVar[prefix]hourly\`
 **daily** - \`$getServerVar[prefix]daily\`
 **weekly** - \`$getServerVar[prefix]weekly\`
 **monthly** - \`$getServerVar[prefix]monthly\`
  
  

  
  
  ]
$footer[N!<cmd>]
$color[RANDOM]`
}
  
