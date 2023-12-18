export interface simplifiedPackage {
  _id: string,
  days: string,
  location: string,
  slug: string,
  destinationName: string,
  imageUrl: string
}

export interface fullDestination {
  _id: string,
  imageUrl: any
  slug: string,
  destinationName: string,
  description: string
}

export interface packageList {
  _id: string,
  imageUrl: any
  slug: string,
  destinationRef: string,
  days: string
  packageName: string
  flights: string
  hotels: string
  transfers: string
  activities: string
  location: string
  filter: any
}