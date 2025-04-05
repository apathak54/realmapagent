// import * as dotenv from 'dotenv';
// dotenv.config();
// import { chromium, Browser, Page } from 'playwright';
// import { DateTime } from 'luxon';
// import * as fs from 'fs';
// import * as path from 'path';
// import { setTimeout as sleep } from 'timers/promises';
// import { v4 as uuidv4 } from 'uuid';

// // Library imports for LangChain/LLM functionality
// import { HumanMessage, AIMessage } from '@langchain/core/messages';
// import { JsonOutputParser } from '@langchain/core/output_parsers';
// import { ChatPromptTemplate } from '@langchain/core/prompts';
// import { ChatOpenAI } from '@langchain/openai';
// import { RunnablePassthrough } from '@langchain/core/runnables';
// import { StateGraph, END } from '@langchain/langgraph';

// // Type definitions
// interface SearchParams {
//   city?: string;
//   property_type?: string;
//   bhk?: string;
//   budget_min?: number;
//   budget_max?: number;
//   locality?: string;
//   amenities?: string[];
// }

// interface Listing {
//   id: string;
//   title: string;
//   price: number;
//   area: number;
//   area_unit?: string;
//   location: string;
//   amenities: string[];
//   contact: string;
//   posted_on: string;
//   images: string[];
//   source: string;
//   localities?: {
//     schools?: string[];
//     hospitals?: string[];
//     markets?: string[];
//     malls?: string[];
//   };
//   virtual_tour?: string;
// }

// interface ScraperResult {
//   status: 'success' | 'error';
//   source: string;
//   listings?: Listing[];
//   error?: string;
//   timestamp?: string;
//   market_trends?: {
//     avg_price_per_sqft?: number;
//     price_trend?: string;
//   };
// }

// interface PriceStats {
//   min: number;
//   max: number;
//   avg: number;
// }

// interface FinalReport {
//   timestamp: string;
//   search_params: SearchParams;
//   results_count: number;
//   successful_sources: string[];
//   failed_sources: string[];
//   price_stats: PriceStats;
//   listings: Listing[];
// }

// // Define agent state
// class AgentState {
//   search_params: SearchParams = {};
//   websites_to_scrape: string[] = [];
//   scraped_data: Record<string, ScraperResult> = {};
//   failed_scrapes: Record<string, string> = {};
//   retry_count: Record<string, number> = {};
//   final_results: Listing[] = [];
//   status: 'initializing' | 'initialized' | 'scraping' | 'retrying' | 'processing' | 'completed' | 'all_failed' | 'partial_success' | 'success' = 'initializing';
// }

// // Define website scraper functions using Playwright
// async function scrapeNoBroker(page: Page, params: SearchParams): Promise<ScraperResult> {
//   try {
//     // This is where you would implement the Playwright scraper
//     // Example structure:
//     // 1. Navigate to the URL
//     // 2. Fill in search parameters
//     // 3. Extract listing data

//     // Just returning a mock result here as you'll implement Playwright scraping
//     await sleep(1000 + Math.random() * 500);
    
//     // Mock data - replace with actual Playwright implementation
//     const listings: Listing[] = [];
//     for (let i = 0; i < 5; i++) {
//       listings.push({
//         id: `NB${Math.floor(Math.random() * 90000) + 10000}`,
//         title: `${params.bhk || '2'} BHK Apartment in ${(params.city || 'bangalore').charAt(0).toUpperCase() + (params.city || 'bangalore').slice(1)}`,
//         price: Math.floor(Math.random() * ((params.budget_max || 50000) - (params.budget_min || 10000))) + (params.budget_min || 10000),
//         area: Math.floor(Math.random() * 1500) + 500,
//         location: `Locality ${i+1}, ${(params.city || 'bangalore').charAt(0).toUpperCase() + (params.city || 'bangalore').slice(1)}`,
//         amenities: ["Power Backup", "Lift", "Security", "Park"],
//         contact: `+91 9${Math.floor(Math.random() * 900000000) + 100000000}`,
//         posted_on: DateTime.now().toFormat('yyyy-MM-dd'),
//         images: [`https://nobroker.in/images/property${i+1}.jpg`],
//         source: "NoBroker"
//       });
//     }
    
//     return {
//       status: 'success',
//       source: 'NoBroker',
//       listings,
//       timestamp: DateTime.now().toISO()
//     };
//   } catch (e) {
//     return { 
//       status: 'error', 
//       source: 'NoBroker', 
//       error: e instanceof Error ? e.message : String(e) 
//     };
//   }
// }

// async function scrapeHousing(page: Page, params: SearchParams): Promise<ScraperResult> {
//   try {
//     // Implement your Playwright scraping logic here
//     await sleep(1200 + Math.random() * 500);
    
//     // Mock data - replace with your implementation
//     const listings: Listing[] = [];
//     // Mock listings generation code...
    
//     return {
//       status: 'success',
//       source: 'Housing.com',
//       listings,
//       timestamp: DateTime.now().toISO()
//     };
//   } catch (e) {
//     return { 
//       status: 'error', 
//       source: 'Housing.com', 
//       error: e instanceof Error ? e.message : String(e) 
//     };
//   }
// }

// async function scrape99Acres(page: Page, params: SearchParams): Promise<ScraperResult> {
//   // Implement with Playwright
//   return { status: 'error', source: '99Acres', error: 'Not implemented yet' };
// }

// async function scrapeMagicBricks(page: Page, params: SearchParams): Promise<ScraperResult> {
//   // Implement with Playwright
//   return { status: 'error', source: 'MagicBricks', error: 'Not implemented yet' };
// }

// async function scrapeOLX(page: Page, params: SearchParams): Promise<ScraperResult> {
//   // Implement with Playwright
//   return { status: 'error', source: 'OLX', error: 'Not implemented yet' };
// }

// async function scrapePropTiger(page: Page, params: SearchParams): Promise<ScraperResult> {
//   // Implement with Playwright
//   return { status: 'error', source: 'PropTiger', error: 'Not implemented yet' };
// }

// async function scrapeMakaan(page: Page, params: SearchParams): Promise<ScraperResult> {
//   // Implement with Playwright
//   return { status: 'error', source: 'Makaan', error: 'Not implemented yet' };
// }

// async function scrapeSquareYards(page: Page, params: SearchParams): Promise<ScraperResult> {
//   // Implement with Playwright
//   return { status: 'error', source: 'SquareYards', error: 'Not implemented yet' };
// }

// // LLM for understanding and processing
// function getLLM() {
//   return new ChatOpenAI({
//     temperature: 0,
//     modelName: "gpt-4-turbo", // Use appropriate model for your needs
//   });
// }

// // Function to initialize the agent
// function initializeAgent(state: AgentState, inputData: Record<string, any>): AgentState {
//   const websites = [
//     "NoBroker", "Housing", "99Acres", "MagicBricks", 
//     "OLX", "PropTiger", "Makaan", "SquareYards"
//   ];
  
//   // Extract search parameters from user input
//   state.search_params = {
//     city: inputData.city || "bangalore",
//     property_type: inputData.property_type || "rent",
//     bhk: inputData.bhk || "2",
//     budget_min: inputData.budget_min || 15000,
//     budget_max: inputData.budget_max || 50000,
//     locality: inputData.locality || undefined,
//     amenities: inputData.amenities || [],
//   };
  
//   // Set websites to scrape
//   state.websites_to_scrape = inputData.websites || websites;
//   state.status = "initialized";
  
//   return state;
// }

// // Function to scrape websites
// async function scrapeWebsites(state: AgentState): Promise<AgentState> {
//   state.status = "scraping";
  
//   // Map website names to scraper functions
//   const scrapers: Record<string, (page: Page, params: SearchParams) => Promise<ScraperResult>> = {
//     "NoBroker": scrapeNoBroker,
//     "Housing": scrapeHousing,
//     "99Acres": scrape99Acres,
//     "MagicBricks": scrapeMagicBricks,
//     "OLX": scrapeOLX,
//     "PropTiger": scrapePropTiger,
//     "Makaan": scrapeMakaan,
//     "SquareYards": scrapeSquareYards,
//   };
  
//   // Launch browser
//   const browser = await chromium.launch();
  
//   try {
//     // Run scrapers concurrently
//     const scrapePromises: Promise<{ website: string; result: ScraperResult }>[] = [];
    
//     for (const website of state.websites_to_scrape) {
//       if (website in scrapers) {
//         scrapePromises.push(
//           (async () => {
//             try {
//               const context = await browser.newContext();
//               const page = await context.newPage();
//               const result = await scrapers[website](page, state.search_params);
//               await context.close();
//               return { website, result };
//             } catch (error) {
//               return { 
//                 website, 
//                 result: { 
//                   status: 'error', 
//                   source: website, 
//                   error: error instanceof Error ? error.message : String(error) 
//                 } 
//               };
//             }
//           })()
//         );
//       }
//     }
    
//     // Wait for all scrapers to complete
//     const results = await Promise.all(scrapePromises);
    
//     // Process results
//     for (const { website, result } of results) {
//       if (result.status === 'success') {
//         state.scraped_data[website] = result;
//       } else {
//         // Add to failed scrapes for retry
//         state.failed_scrapes[website] = result.error || 'Unknown error';
//         state.retry_count[website] = state.retry_count[website] || 0;
//       }
//     }
//   } catch (error) {
//     console.error('Error during scraping:', error);
//   } finally {
//     await browser.close();
//   }
  
//   if (Object.keys(state.failed_scrapes).length > 0 && Object.keys(state.scraped_data).length === 0) {
//     state.status = "all_failed";
//   } else if (Object.keys(state.failed_scrapes).length > 0) {
//     state.status = "partial_success";
//   } else {
//     state.status = "success";
//   }
  
//   return state;
// }

// // Function to retry failed scrapes
// async function retryFailedScrapes(state: AgentState): Promise<AgentState> {
//   state.status = "retrying";
  
//   // Map website names to scraper functions
//   const scrapers: Record<string, (page: Page, params: SearchParams) => Promise<ScraperResult>> = {
//     "NoBroker": scrapeNoBroker,
//     "Housing": scrapeHousing,
//     "99Acres": scrape99Acres,
//     "MagicBricks": scrapeMagicBricks,
//     "OLX": scrapeOLX,
//     "PropTiger": scrapePropTiger,
//     "Makaan": scrapeMakaan,
//     "SquareYards": scrapeSquareYards,
//   };
  
//   // Get websites to retry
//   const toRetry = Object.keys(state.failed_scrapes);
  
//   if (toRetry.length === 0) {
//     return state;
//   }
  
//   // Launch browser
//   const browser = await chromium.launch();
  
//   try {
//     for (const website of toRetry) {
//       // Skip if max retries reached
//       if ((state.retry_count[website] || 0) >= 3) {
//         continue;
//       }
      
//       // Exponential backoff
//       const backoffTime = Math.pow(2, state.retry_count[website] || 0);
//       await sleep(backoffTime * 1000);
      
//       // Increment retry count
//       state.retry_count[website] = (state.retry_count[website] || 0) + 1;
      
//       try {
//         // Create new context and page for each retry
//         const context = await browser.newContext();
//         const page = await context.newPage();
        
//         // Retry scraping
//         const result = await scrapers[website](page, state.search_params);
        
//         await context.close();
        
//         if (result.status === 'success') {
//           // Success, add to scraped data
//           state.scraped_data[website] = result;
//           delete state.failed_scrapes[website];
//         } else {
//           // Still failed
//           state.failed_scrapes[website] = result.error || 'Unknown error';
//         }
//       } catch (error) {
//         // Still failed
//         state.failed_scrapes[website] = error instanceof Error ? error.message : String(error);
//       }
//     }
//   } finally {
//     await browser.close();
//   }
  
//   // Update status
//   if (Object.keys(state.failed_scrapes).length === 0) {
//     state.status = "success";
//   } else {
//     state.status = "partial_success";
//   }
  
//   return state;
// }

// // Function to process results
// function processResults(state: AgentState): AgentState {
//   state.status = "processing";
  
//   const processedListings: Listing[] = [];
  
//   // Process data from each successful website
//   for (const [website, data] of Object.entries(state.scraped_data)) {
//     if (data.listings) {
//       for (const listing of data.listings) {
//         // Ensure consistent structure
//         const normalizedListing: Listing = {
//           id: listing.id || `Unknown-${Math.floor(Math.random() * 9000) + 1000}`,
//           title: listing.title || "Untitled Property",
//           price: listing.price || 0,
//           area: listing.area || 0,
//           area_unit: listing.area_unit || "sq.ft",
//           location: listing.location || "Unknown",
//           amenities: listing.amenities || [],
//           contact: listing.contact || "No contact information",
//           posted_on: listing.posted_on || "Unknown",
//           images: listing.images || [],
//           source: listing.source || website,
//         };
        
//         // Add optional locality insights if available
//         if (listing.localities) {
//           normalizedListing.localities = listing.localities;
//         }
        
//         // Add virtual tour if available
//         if (listing.virtual_tour) {
//           normalizedListing.virtual_tour = listing.virtual_tour;
//         }
        
//         processedListings.push(normalizedListing);
//       }
//     }
//   }
  
//   // Sort by price (could use different criteria)
//   processedListings.sort((a, b) => a.price - b.price);
  
//   // Store results
//   state.final_results = processedListings;
//   state.status = "completed";
  
//   return state;
// }

// function generateReport(state: AgentState): FinalReport {
//   // Count results
//   const totalListings = state.final_results.length;
//   const successfulSources = Object.keys(state.scraped_data);
//   const failedSources = Object.keys(state.failed_scrapes);
  
//   // Calculate stats
//   const priceStats: PriceStats = {
//     min: totalListings > 0 ? Math.min(...state.final_results.map(listing => listing.price)) : 0,
//     max: totalListings > 0 ? Math.max(...state.final_results.map(listing => listing.price)) : 0,
//     avg: totalListings > 0 ? state.final_results.reduce((sum, listing) => sum + listing.price, 0) / totalListings : 0
//   };
  
//   // Prepare report
//   const report: FinalReport = {
//     timestamp: DateTime.now().toISO() || new Date().toISOString(),
//     search_params: state.search_params,
//     results_count: totalListings,
//     successful_sources: successfulSources,
//     failed_sources: failedSources,
//     price_stats: priceStats,
//     listings: state.final_results
//   };
  
//   return report;
// }

// // Define the decision logic
// function shouldRetry(state: AgentState): "retry" | "process" {
//   if (state.status === "all_failed") {
//     // All scrapes failed, definitely retry
//     return "retry";
//   } else if (state.status === "partial_success" && Object.keys(state.failed_scrapes).length > 0) {
//     // Some scrapes failed, check if we've retried too many times
//     for (const [website, count] of Object.entries(state.retry_count)) {
//       if (count < 3 && website in state.failed_scrapes) {
//         return "retry";
//       }
//     }
//     // We've retried enough
//     return "process";
//   } else {
//     // No failures or already processed
//     return "process";
//   }
// }

// // Define the graph with the correct channel structure
// function buildAgentGraph() {
//     // Initialize state graph with the correct structure
//     const workflow = new StateGraph({
//       channels: {
//         // Use the root channel as required by LangGraph
//         root: {
//           state: new AgentState(),
//           input_data: {}
//         }
//       }
//     });
    
//     // Update the nodes accordingly
//     workflow.addNode("initialize", {
//       invoke: async ({ root }) => {
//         const { state, input_data } = root;
//         return { 
//           root: {
//             state: initializeAgent(state, input_data || {}),
//             input_data
//           }
//         };
//       }
//     });
    
//     workflow.addNode("scrape", {
//       invoke: async ({ root }) => {
//         const { state, input_data } = root;
//         const newState = await scrapeWebsites(state);
//         return { 
//           root: {
//             state: newState,
//             input_data
//           }
//         };
//       }
//     });
    
//     workflow.addNode("retry", {
//       invoke: async ({ root }) => {
//         const { state, input_data } = root;
//         const newState = await retryFailedScrapes(state);
//         return { 
//           root: {
//             state: newState,
//             input_data
//           }
//         };
//       }
//     });
    
//     workflow.addNode("process", {
//       invoke: ({ root }) => {
//         const { state, input_data } = root;
//         const newState = processResults(state);
//         return { 
//           root: {
//             state: newState,
//             input_data
//           }
//         };
//       }
//     });
    
//     // Add edges with the correct API
//     workflow.addEdge("__start__", "initialize");
//     workflow.addEdge("initialize", "scrape");
    
//     // Conditional branching
//     workflow.addConditionalEdge(
//       "scrape",
//       ({ root }) => shouldRetry(root.state),
//       {
//         "retry": "retry",
//         "process": "process"
//       }
//     );
    
//     workflow.addConditionalEdge(
//       "retry",
//       ({ root }) => shouldRetry(root.state),
//       {
//         "retry": "retry",
//         "process": "process"
//       }
//     );
    
//     // Set end node
//     workflow.addEdge("process", END);
    
//     // Compile
//     return workflow.compile();
//   }
  
//   // Update the runRealEstateAgent function
//   async function runRealEstateAgent(searchParams: SearchParams): Promise<FinalReport> {
//     // Build the agent graph
//     const agent = buildAgentGraph();
    
//     // Create initial state
//     const initialState = new AgentState();
    
//     // Execute the graph with the correct API
//     const result = await agent.invoke({
//       state: initialState,
//       input_data: searchParams
//     });
    
//     // Generate final report
//     const finalReport = generateReport(result.state);
    
//     return finalReport;
//   }

// // Example usage
// async function main() {
//   const searchParams: SearchParams = {
//     city: "bangalore",
//     property_type: "rent",
//     bhk: "2",
//     budget_min: 15000,
//     budget_max: 40000,
//     amenities: ["Gym", "Security"]
//   };
  
//   const result = await runRealEstateAgent(searchParams);
  
//   // Pretty print first few results
//   console.log(`Found ${result.listings.length} properties`);
//   console.log(`Price range: ₹${result.price_stats.min} - ₹${result.price_stats.max}`);
//   console.log("\nSample listings:");
//   for (const listing of result.listings.slice(0, 3)) {
//     console.log(`\n${listing.title} - ₹${listing.price}`);
//     console.log(`Location: ${listing.location}`);
//     console.log(`Source: ${listing.source}`);
//   }
// }

// // Run the example if this file is executed directly
// if (require.main === module) {
//   main().catch(console.error);
// }

// export { 
//   runRealEstateAgent, 
//   SearchParams, 
//   ScraperResult, 
//   Listing, 
//   FinalReport 
// };
