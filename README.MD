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
//     { count: 1, name: 'Bamboo' },
//     { count: 3, name: 'Strawberry' },
//     { count: 1, name: 'Tomato' },
//     { count: 2, name: 'OrangeTulip' },
//     { count: 3, name: 'Blueberry' }
//   ],
//   gears: [
//     { count: 1, name: 'MagnifyingGlass' },
//     { count: 3, name: 'HarvestTool' },
//     { count: 2, name: 'TradingTicket' },
//     { count: 2, name: 'RecallWrench' },
//     { count: 2, name: 'WateringCan' },
//     { count: 2, name: 'FavoriteTool' },
//     { count: 3, name: 'Trowel' },
//     { count: 3, name: 'BasicSprinkler' }
//   ]
// }
```

### The library is at an early stage...
