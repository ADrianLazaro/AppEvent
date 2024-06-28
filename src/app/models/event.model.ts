import { Organizer } from "./organizer.model";

 export interface Event {
  _id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  price: number;
  organizer: Organizer;
  category: string;
  image: string;
 }
