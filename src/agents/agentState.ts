import { Listing, ScraperResult, SearchParams } from "..";

export class AgentState {
    search_params: SearchParams = {};
    websites_to_scrape: string[] = [];
    scraped_data: Record<string, ScraperResult> = {};
    failed_scrapes: Record<string, string> = {};
    retry_count: Record<string, number> = {};
    final_results: Listing[] = [];
    status: 'initializing' | 'initialized' | 'scraping' | 'retrying' | 'processing' | 'completed' | 'all_failed' | 'partial_success' | 'success' = 'initializing';
  
    constructor(searchParams: SearchParams, websites: string[]) {
      this.search_params = searchParams;
      this.websites_to_scrape = websites;
      this.status = 'initialized';
    }
  }
  