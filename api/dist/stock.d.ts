declare function checkForUpdates(): Promise<{
    eggs: import("./types.js").StockItem[];
    seeds: import("./types.js").StockItem[];
    gears: import("./types.js").StockItem[];
} | undefined>;
export default checkForUpdates;
