module.exports = ({
    name: "pay",
    aliases: ['give'],
    description: "Pay/give money to a user",
    usage: "pay <amount> <user>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$messageSlice[1]]];$userAvatar[$findMember[$messageSlice[1]]]]
    $description[<@$findMember[$messageSlice[1]]> Telah dibayar/diberikan $message[1]💴 oleh <@$authorID>!]
    $setGlobalUserVar[uang;$sum[$getGLobalUserVar[uang;$findMember[$messageSlice[1]]];$message[1]];$findMember[$messageSlice[1]]]
    $setGlobalUserVar[uang;$sub[$getGLobalUserVar[uanh];$message[1]]]
    $onlyIf[$getGlobalUserVar[uang]>=$message[1];{description: Kamu tidak memiliki $message[1]💴 untuk menyelesaikan transaksi itu!}{color:RANDOM}]
    $onlyIf[$isBot[$findMember[$messageSlice[1]]]==false;{description:Saya tidak membutuhkan uang!}{color:RANDOM}]
    $onlyIf[$checkContains[$findMember[$messageSlice[1]];$authorID]==false;{description: Harap tag seseorang untuk diberikan 💴!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Argument berupa angka!}{color:RANDOM}]
    $onlyIf[$message[1]!=;{description:Tentukan jumlah 💴 untuk di beri !}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{description:Panduan: $getServerVar[prefix]give <jumlah> <user>}{color:RANDOM}]
    `
})
