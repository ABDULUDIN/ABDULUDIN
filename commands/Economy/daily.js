module.exports = ({
    name: "daily",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code: `
$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang];50000]]
$color[RANDOM]
$description[Kamu mengambil 50k💵 dari daily!]
$cooldown[1d;{description: next daily **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
