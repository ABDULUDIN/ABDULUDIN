module.exports = ({
 name: "work",
 description: "You can earn money by working",
 category: "Economy",
 code: `
$title[Work]
$description[
KAMU SEDANG KERJA DI MALL XZR MALL 

PENGHASILAN
GAJI 💵 500k
BONUS 💳 100K

RATE BOS XzRKiLLeR
KAMU CUKUP GIAT BEKERJA
LEBIH GIAT LAGI YA,JANGAN KORUPSI,PAKAI UANG UNTUK MEMBELI DI STORE²
]
$setGlobalUserVar[uang;$sum[$getGlobalUserVar[uang];500000]]
$color[RANDOM]
$cooldown[10m;{description: Cooldown **%time%**} {color: FF0000}]`
})
