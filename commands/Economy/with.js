module.exports = ({
  name: 'withdraw',
  category: "Economy",
  usage: "c?dep <amt>",
  aliases: 'with',
  code: `$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang;$authorID];$message];$authorID]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$title[Withdraw]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, kamu mengambil 💵
$numberSeparator[$message]💵 dari bank kamu!]
$onlyIf[$isNumber[$message[1]]==true;Berupa nomor!]
$onlyIf[$message<=$getGlobalUserVar[bank;$authorID];kamu tidak bisa mengambil lebih dari jumlah uang di bank kamu!]
$argsCheck[>1;Berapa yang and ingin tarik?]
$onlyIf[$getGlobalUserVar[bank;$authorID]>0;Tidak ada yang bisa di tarik!]`
})
