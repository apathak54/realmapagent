import { Page, chromium } from "playwright";
import { SearchParams } from "../models/searchParams";
import { ScraperResult } from "../models/scraperResult";
import { Listing } from "../models/listing";
import { DateTime } from "luxon";

export async function scrapeNoBroker(params: SearchParams): Promise<ScraperResult> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    const url = `https://www.nobroker.in/property/rent/${params.city}`;
    await page.goto(url, { waitUntil: "networkidle" });

    // Wait for listings to load
    await page.waitForSelector(".card");

    // Extract property details
    const listings: Listing[] = await page.evaluate(() => {
      return Array.from(card.querySelectorAll(".card")).map(card => ({
        id: card.getAttribute("data-id") || `NB${Math.floor(Math.random() * 90000) + 10000}`,
        title: card.querySelector(".title")?.textContent?.trim() || "No Title",
        price: parseInt(card.querySelector(".price")?.textContent?.replace(/\D/g, "") || "0"),
        area: parseInt(card.querySelector(".area")?.textContent?.replace(/\D/g, "") || "500"),
        location: card.querySelector(".location")?.textContent?.trim() || "Unknown",
        amenities: ["Power Backup", "Lift", "Security", "Park"],
        contact: "N/A", // NoBroker hides contact details
        posted_on: DateTime.now().toFormat('yyyy-MM-dd'),
        images: [card.querySelector("img")?.getAttribute("src") || ""],
        source: "NoBroker"
      }));
    });

    await browser.close();
    return { status: "success", source: "NoBroker", listings, timestamp: DateTime.now().toISO() };
  } catch (error) {
    await browser.close();
    return { status: "error", source: "NoBroker", error: error instanceof Error ? error.message : String(error) };
  }
}
