import { AgentState } from './agentState';
import { scrapeNoBroker, scrapeHousing } from '../scrapers/scrapeNoBroker'; // Add all scrapers

export function initializeAgent(state: AgentState, inputData: Record<string, any>): AgentState {
  state.search_params = inputData.search_params;
  state.websites_to_scrape = inputData.websites;
  return state;
}

export async function scrapeWebsites(state: AgentState): Promise<AgentState> {
  const scrapers = {
    'NoBroker': scrapeNoBroker,
    'Housing': scrapeHousing,
    // Add other websites
  };

  const promises = state.websites_to_scrape.map(async (site) => {
    try {
      state.scraped_data[site] = await scrapers[site]();
    } catch (error) {
      state.failed_scrapes[site] = error.message;
      state.retry_count[site] = (state.retry_count[site] || 0) + 1;
    }
  });

  await Promise.all(promises);
  state.status = 'scraping';
  return state;
}

export function shouldRetry(state: AgentState): "retry" | "process" {
  return Object.keys(state.failed_scrapes).length > 0 ? "retry" : "process";
}
