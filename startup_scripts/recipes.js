onEvent("loaded", e => {
    global.mekInfuseItem = (event, input, infuseType, amount) => {
        if (amount == undefined) { amount = 10 }
        event.custom({
            "type": "mekanism:infusion_conversion",
            "input": { "ingredient": { "item": input }},
            "output": { "infuse_type": infuseType, "amount": amount }
            })
    }
})