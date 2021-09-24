module.exports = ({
    name: "mounthly",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code: `
$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang];500000]]
$color[RANDOM]
$description[Kamu mengambil 500k💵 dari mounthly!]
$cooldown[1m;{description: next hourly **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
