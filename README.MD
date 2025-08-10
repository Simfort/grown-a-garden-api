# To start using the API,

**run the command `npm i garden-grown-api` . Then import the checkForUpdates function and use it :)**.

## Example

```js
import checkForUpdates from "garden-grown-api";

console.log(await checkForUpdates());
// {
//   eggs: [
//     { count: 1, name: 'CommonEgg' },
//     { count: 1, name: 'CommonEgg' },
//     { count: 1, name: 'CommonEgg' }
//   ],
//   seeds: [
//     { count: 1, name: 'Carrot' },
//     { count: 3, name: 'Strawberry' },
//     { count: 1, name: 'Coconut' },
//     { count: 3, name: 'Tomato' },
//     { count: 5, name: 'Blueberry' }
//   ],
//   gears: [
//     { count: 3, name: 'RecallWrench' },
//     { count: 1, name: 'Trowel' },
//     { count: 3, name: 'WateringCan' },
//     { count: 1, name: 'FavoriteTool' },
//     { count: 1, name: 'MagnifyingGlass' },
//     { count: 1, name: 'HarvestTool' }
//   ],
//   event: [
//     { name: 'Zenflare', count: 2 },
//     { name: 'CorruptRadar', count: 2 },
//     { name: 'ZenSeedPack', count: 2 },
//     { name: 'SakuraBush', count: 2 },
//     { name: 'ZenSand', count: 2 },
//     { name: 'TranquilRadar', count: 2 }
//   ],
//   cosmetics: [
//     { name: 'BeachCrate', count: 2 },
//     { name: 'LogBench', count: 1 },
//     { name: 'CompostBin', count: 1 },
//     { name: 'Torch', count: 1 },
//     { name: 'SmallCircleTile', count: 4 },
//     { name: 'WoodPile', count: 1 },
//     { name: 'CurvedCanopy', count: 1 },
//     { name: 'RoundMetalArbour', count: 1 },
//     { name: 'MediumPathTile', count: 2 }
//   ]
// }
```

### The library is at an early stage...
