module.exports = ({
    name: "weekly",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code: `
$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang];150000]]
$color[RANDOM]
$description[Kamu mengambil 150k💵 dari weekly!]
$cooldown[7d;{description: next hourly **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
