module.exports = ({
    name: "hourly",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code: `
$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang];100000]]
$color[RANDOM]
$description[Kamu mengambil 100k💵 dari hourly!]
$cooldown[1h;{description: next hourly **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
