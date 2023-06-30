# Add custom mekanism infuse types

[![kjspkg-available](https://github-production-user-asset-6210df.s3.amazonaws.com/79367505/250114674-fb848719-d52e-471b-a6cf-2c0ea6729f1c.svg)](https://kjspkglookup.modernmodpacks.site/#mekanism-custom-infused-type)

## Config

```js
global.infuse = {
    "<infuse_id>": <color, ex. 0xffffff>
}
```

## Functions

```js
global.mekInfuseItem(event, input, infuseType, amount) // Add an item that transforms into the infuse type
```
