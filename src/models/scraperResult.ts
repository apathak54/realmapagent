import { Listing } from "./listing";


export interface ScraperResult {
    status: 'success' | 'error';
    source: string;
    listings?: Listing[];
    error?: string;
    timestamp?: string;
    market_trends?: {
      avg_price_per_sqft?: number;
      price_trend?: string;
    };
  }
  