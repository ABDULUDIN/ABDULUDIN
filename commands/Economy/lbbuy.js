module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check the money leaderboard",
    usage: "",
    category: "economy",
    code: `
    $If[$message==buy]
    $title[Leaderboard Buy]
    $color[RANDOM]
    $description[$globalUserLeaderBoard[buy;asc; {top}. **{username}**- 📦{value}]]
    $cooldown[5s;{description: Cooldown **time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;
    $endIf]`
})
