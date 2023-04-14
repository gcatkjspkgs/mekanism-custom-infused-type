onEvent('mekanism.infuse_type.registry', event => {
    Object.keys(global.infuse).forEach(i => {
        event.create(i).color(global.infuse[i]).texture("kubejs:infuse_types/texture.png")
    })
})