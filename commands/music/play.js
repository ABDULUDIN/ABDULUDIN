module.exports = ({
    name: "play",
    aliases: ['p'],
    description: "Play some music!",
    usage: "play <song/url>",
    category: "music",
    code: `$color[RANDOM]
    $title[Music ditambahkan ke antrian!;$songInfo[url]]
    $description[✅ Ditambahkan **$playSong[$message;1m;yes;yes;{color:RANDOM}{description:Terjadi Kesalahan! Harap laporkan ini ke pihak developer!}]**]
    $footer[Requested by $userTag]
    $addTimestamp
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Anda harus berada di Voice Channel!}]
    $onlyIf[$message!=;{description: Anda harus memberi name/url Music untuk diputar!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:Terjadi kesalahan! Harap laporkan ini ke pihak developer!}]
    $onlyBotPerms[speak;connect;{description:❌ Saya memerlukan permissions - **Speak** dan **Connect**}{color:RANDOM}]
    $botTyping[3s]`   
})