module.exports = ({
name: "deposit", 
category: "Economy",
usage: "c?deposit <amt>",
aliases: 'dep',
code: `$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$setGlobalUserVar[uang;$sub[$getGlobalUserVar[uang;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, Kamu deposited 💵 $numberSeparator[$message] ke bank kamu!]
$onlyIf[$isNumber[$message[1]]==true;Harap masukan jumlah uang!]
$onlyIf[$message<=$getGlobalUserVar[uang;$authorID];Uang kamu tidak cukup!]
$argsCheck[>1;Panduan: \`$getServerVar[prefix]dep <jumlH>\`]
$onlyIf[$getGlobalUserVar[Money;$authorID]>0;Kamu tidak memiliki uang]`
})
