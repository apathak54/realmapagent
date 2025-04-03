export interface Listing {
    id: string;
    title: string;
    price: number;
    area: number;
    area_unit?: string;
    location: string;
    amenities: string[];
    contact: string;
    posted_on: string;
    images: string[];
    source: string;
    localities?: {
      schools?: string[];
      hospitals?: string[];
      markets?: string[];
      malls?: string[];
    };
    virtual_tour?: string;
  }
  