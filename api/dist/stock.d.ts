declare function checkForUpdates(): Promise<{
    cosmetics: import("./types.js").StockItem[];
    event: import("./types.js").StockItem[];
    eggs: import("./types.js").StockItem[];
    seeds: import("./types.js").StockItem[];
    gears: import("./types.js").StockItem[];
} | undefined>;
export default checkForUpdates;
