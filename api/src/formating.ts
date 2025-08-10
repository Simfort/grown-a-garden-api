import { StockItem } from "./types.js";

export function formatingEGG_GEAR_SEED(str: string) {
  let format: string[] | string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "\n" || str[i] == " ") {
      continue;
    }
    format += str[i];
    if (str[i - 1] == "x" && Number.isInteger(+str[i])) {
      format += " ";
    }
  }
  format = format.split(" ");
  const gears: StockItem[] = [];
  const seeds: StockItem[] = [];
  const eggs: StockItem[] = [];
  for (let i = 1; i < format.length; i++) {
    if (format[i].includes("Egg")) {
      const egg = {} as StockItem;
      let strEgg = "";

      for (let j = 0; j < format[i].length; j++) {
        const formatChar = format[i];
        if (Number.isInteger(+formatChar[j])) {
          continue;
        }
        strEgg += formatChar[j];
        if (formatChar[j + 1] == "x" && Number.isInteger(+formatChar[j + 2])) {
          egg.count = +formatChar[j + 2];
          break;
        }
      }
      if (strEgg) {
        egg.name = strEgg;
        eggs.push(egg);
      }
    }
    if (!eggs[0]) {
      const gear = {} as StockItem;
      let strGear = "";

      for (let j = 0; j < format[i].length; j++) {
        const formatChar = format[i];
        if (Number.isInteger(+formatChar[j])) {
          continue;
        }
        strGear += formatChar[j];

        if (formatChar[j + 1] == "x" && Number.isInteger(+formatChar[j + 2])) {
          gear.count = +formatChar[j + 2];
          break;
        }
      }
      if (strGear) {
        gear.name = strGear;
        gears.push(gear);
      }
    }

    if (eggs[0] && !format[i].includes("Egg")) {
      const seed = {} as StockItem;
      let strSeed = "";

      for (let j = 0; j < format[i].length; j++) {
        const formatChar = format[i];
        if (Number.isInteger(+formatChar[j])) {
          continue;
        }
        strSeed += formatChar[j];

        if (formatChar[j + 1] == "x" && Number.isInteger(+formatChar[j + 2])) {
          seed.count = +formatChar[j + 2];
          break;
        }
      }
      if (strSeed) {
        seed.name = strSeed;
        seeds.push(seed);
      }
    }
  }

  return { eggs, seeds, gears };
}
export function formatingEVENT(str: string) {
  let format: string[] | string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "\n" || str[i] == " ") {
      continue;
    }
    format += str[i];
    if (str[i - 1] == "x" && Number.isInteger(+str[i])) {
      format += " ";
    }
  }
  format = format.split(" ");
  const event: StockItem[] = [];
  for (let i = 0; i < format.length - 1; i++) {
    const item = format[i];
    event.push({
      name: item.slice(0, item.length - 2),
      count: Number(item[item.length - 1]),
    });
  }

  return { event };
}
export function formatingCOSMETICS(str: string) {
  let format: string[] | string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "\n" || str[i] == " ") {
      continue;
    }
    format += str[i];
    if (str[i - 1] == "x" && Number.isInteger(+str[i])) {
      format += " ";
    }
  }
  format = format.split(" ");
  console.log(format);
  const cosmetics: StockItem[] = [];
  for (let i = 0; i < format.length - 1; i++) {
    const item = format[i];
    cosmetics.push({
      name: item.slice(0, item.length - 2),
      count: Number(item[item.length - 1]),
    });
  }

  return { cosmetics };
}
