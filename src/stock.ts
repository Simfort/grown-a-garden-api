import axios from "axios";
import * as cheerio from "cheerio";
import formating from "./formating.js";

async function checkForUpdates() {
  try {
    const response = await axios.get(
      "https://www.vulcanvalues.com/grow-a-garden/stock"
    );

    const $ = cheerio.load(response.data);

    // Получаем основной контент страницы
    const currentContent = $("ul").filter(function () {
      const text = $(this).parent().find("h2").text();
      return !text.includes("EVENT STOCK") && !text.includes("COSMETICS STOCK");
    });
    return formating(currentContent.text());
  } catch (error) {
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
