import axios from "axios";
import * as cheerio from "cheerio";
import { formatingCOSMETICS, formatingEGG_GEAR_SEED, formatingEVENT, } from "./formating.js";
async function checkForUpdates() {
    try {
        const response = await axios.get("https://www.vulcanvalues.com/grow-a-garden/stock");
        const $ = cheerio.load(response.data);
        // Получаем основной контент страницы
        const currentContent = $("ul").filter(function () {
            const text = $(this).parent().find("h2").text();
            return !text.includes("EVENT STOCK") && !text.includes("COSMETICS STOCK");
        });
        const event_stock = $("ul").filter(function () {
            const text = $(this).parent().find("h2").text();
            return text.includes("EVENT STOCK");
        });
        const cosmetics_stock = $("ul").filter(function () {
            const text = $(this).parent().find("h2").text();
            return text.includes("COSMETICS STOCK");
        });
        const obj = {
            ...formatingEGG_GEAR_SEED(currentContent.text()),
            ...formatingEVENT(event_stock.text()),
            ...formatingCOSMETICS(cosmetics_stock.text()),
        };
        return obj;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Ошибка при проверке обновлений:", error.message);
        }
    }
}
/*
 !Функция для автоматического перезапуска при ошибке*/
// async function startMonitoring() {
//   await checkForUpdates();
//   // Запускаем мониторинг каждые 5 минут
//   await setInterval(checkForUpdates, 10000);
// }
// Запуск мониторинга
export default checkForUpdates;
