import { Listing } from "./listing";
import { SearchParams } from "./searchParams";


export interface FinalReport {
    timestamp: string;
    search_params: SearchParams;
    results_count: number;
    successful_sources: string[];
    failed_sources: string[];
    price_stats: {
      avg_price_per_sqft?: number;
      median_price?: number;
    };
    listings: Listing[];
  }
  