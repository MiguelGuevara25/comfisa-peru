import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { ResponsivePictureSource } from "../components/ResponsivePicture";

export interface Location {
  slug: string;
  name: string;
  short: string;
  address: string;
  district: string;
  phones: string[];
  hours: { weekdays: string; saturday: string };
  mapQuery: string;
  image: ResponsivePictureSource;
}

export interface Category {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: StaticImageData;
  items: string[];
}

export interface Values {
  icon: LucideIcon;
  title: string;
  desc: string;
}

