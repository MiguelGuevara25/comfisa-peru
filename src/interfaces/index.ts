export interface Location {
  slug: string;
  name: string;
  short: string;
  address: string;
  district: string;
  phones: string[];
  hours: { weekdays: string; saturday: string };
  mapQuery: string;
}