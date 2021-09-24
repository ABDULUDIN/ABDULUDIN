module.exports = ({
name: "balance", 
aliases: "bal",
description: "Check your or someone's balance",
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]] Balance]
$description[

💵 **$numberSeparator[$getGlobalUserVar[uang;$mentioned[1;yes]]]**

💳 **⏣$numberSeparator[$getGlobalUserVar[bank;$mentioned[1;yes]]]**

]`
})
