import { Location } from "../interfaces";

export const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/locales", label: "Locales" },
  { to: "/contacto", label: "Contacto" },
];

export const locations: Location[] = [
  {
    slug: "paul-poblet",
    name: "Almacén Paul Poblet",
    short: "Almacén Principal",
    address: "Paul Poblet Lind Mz. A lote 9, Urb. Huertos de Lurín",
    district: "Pachacamac, Lima",
    phones: ["964 869 923", "972 022 177"],
    hours: { weekdays: "L-V: 7:30 am - 5:30 pm", saturday: "S: 7:30 am - 2:00 pm" },
    mapQuery: "Urb. Huertos de Lurín, Pachacamac, Lima, Perú",
  },
  {
    slug: "flavi",
    name: "Proyectos e Inversiones Flavi S.A.C",
    short: "Sede Comercial",
    address: "Av. Manuel Valle 33",
    district: "Lima 15823",
    phones: ["964 869 923", "972 022 177", "994 045 254"],
    hours: { weekdays: "L-V: 7:30 am - 5:30 pm", saturday: "S: 7:30 am - 2:00 pm" },
    mapQuery: "Av. Manuel Valle 33, Lima 15823, Perú",
  },
  {
    slug: "hanna",
    name: "Comercializadora Hanna S.A.C",
    short: "Villa El Salvador",
    address: "Mz. J Lote 18 sec. 3, Grupo Residencial 21",
    district: "Villa el Salvador, Lima",
    phones: ["922 730 720", "(01) 641 3127"],
    hours: { weekdays: "L-V: 7:30 am - 5:30 pm", saturday: "S: 7:30 am - 2:00 pm" },
    mapQuery: "Grupo Residencial 21 sector 3, Villa El Salvador, Lima, Perú",
  },
  {
    slug: "steel-house",
    name: "Steel House Valery S.A.C",
    short: "Pucusana",
    address: "Mz. C lote 13 A. V Asociación de Vivienda La Ponderosa",
    district: "Pucusana, Lima",
    phones: ["955 224 456", "949 999 525"],
    hours: { weekdays: "L-V: 7:30 am - 5:30 pm", saturday: "S: 7:30 am - 2:00 pm" },
    mapQuery: "Asociación de Vivienda La Ponderosa, Pucusana, Lima, Perú",
  },
  {
    slug: "fierro",
    name: "Comercializadora de Fierro S.A.C",
    short: "Villa Verde",
    address: "Urb. Villa Verde IV etapa Mz. A lote 18",
    district: "Pachacamac, Lima",
    phones: ["952 680 900", "(01) 758 9635"],
    hours: { weekdays: "L-V: 7:30 am - 5:30 pm", saturday: "S: 7:30 am - 2:00 pm" },
    mapQuery: "Urb. Villa Verde IV etapa, Pachacamac, Lima, Perú",
  },
];