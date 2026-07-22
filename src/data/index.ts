import { CheckCircle2, Package, Truck, Users } from "lucide-react";
import { Category, Location, Values } from "../interfaces";
import cementoInka from "../assets/cemento-inka.jpeg";
import bacoAceros from "../assets/baco-aceros.jpeg";
import bacoImportadas from "../assets/baco-importadas.jpeg";
import planchasTecnopor from "../assets/planchas-tecnopor.jpeg";
import ladrillosPiramide from "../assets/ladrillos-piramide.jpeg";
import adoquinesBloques from "../assets/adoquines-bloques.jpeg";
import separadoresConcreto from "../assets/separadores-concreto.jpeg";
import alambresClavos from "../assets/alambres-clavos.jpeg";
import almacenPaul from "../assets/almacen-paul-poblet.jpeg";
import localFlavi from "../assets/local-flavi.jpeg";
import localVilla from "../assets/local-villa.jpeg";
import localValery from "../assets/local-valery.jpeg";

export const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/locales", label: "Locales" },
  { to: "/contacto", label: "Contacto" },
];

export const locations: Location[] = [
  {
    slug: "flavi",
    name: "Proyectos e Inversiones Flavi S.A.C",
    short: "Sede Comercial",
    address: "Av. Manuel Valle 33",
    district: "Lima 15823",
    phones: ["922 730 199"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Av. Manuel Valle 33, Lima 15823, Perú",
    image: localFlavi,
  },

  {
    slug: "paul-poblet",
    name: "Almacén Los Rosales",
    short: "Almacén Principal",
    address: "Paul Poblet Lind Mz. A lote 9, Urb. Huertos de Lurín",
    district: "Pachacamac, Lima",
    phones: ["922 730 199"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Urb. Huertos de Lurín, Pachacamac, Lima, Perú",
    image: almacenPaul,
  },

  {
    slug: "hanna",
    name: "Sede Villa el salvador",
    short: "Villa El Salvador",
    address: "Auxiliar Av. Pachacutec, Mz 6, Lte 2, Parcela 2A",
    district: "Villa el Salvador, Lima",
    phones: ["922 730 199"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "-12.213989, -76.922895",
    image: localVilla,
  },

  {
    slug: "steel-house",
    name: "Steel House Valery S.A.C",
    short: "Pucusana",
    address: "Mz. C lote 13 Av. Asociación de Vivienda La Ponderosa",
    district: "Pucusana, Lima",
    phones: ["908 913 608", "955 224 456"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Asociación de Vivienda La Ponderosa, Pucusana, Lima, Perú",
    image: localValery,
  },
];

export const categories: Category[] = [
  {
    slug: "cemento",
    name: "Cemento Inka",
    short: "Portland Tipo I, IP, V y cementos especialses",
    description:
      "Fabricado bajo altos estándares de calidad, Cemento Inka ofrece resistencia, rendimiento y durabilidad para construcciones seguras y confiables.",
    image: cementoInka,
    items: ["Portland Tipo GU", "Portland Tipo 1Co", "Portland Tipo HS"],
  },
  {
    slug: "fierro",
    name: "BACO - Aceros Arequipa",
    short: "Corrugado, liso y perfiles estructurales",
    description:
      "Las barras corrugadas Aceros Arequipa ofrecen alta resistencia, excelente adherencia y calidad certificada, brindando mayor seguridad y durabilidad para todo tipo de obras.",
    image: bacoAceros,
    items: ['BACO - 1", 3/4, 5/8, 1/2, 3/8', "BACO - 12mm, 8mm, 6mm"],
  },

  {
    slug: "fierro-importado",
    name: "BACO - Importado",
    short: "Corrugado, liso y perfiles estructurales",
    description:
      "Las barras corrugadas importadas cumplen con las normas técnicas vigentes, ofreciendo alta resistencia, calidad y seguridad para todo tipo de construcciones.",
    image: bacoImportadas,
    items: ['BACO - 1", 3/4, 5/8, 1/2, 3/8', "BACO - 12mm, 8mm, 6mm"],
  },

  {
    slug: "alambres-clavos",
    name: "Alambres y Clavos",
    short: "King Kong, pandereta y techo",
    description:
      "Alambres y clavos de aceros de alta calidad, diseñados para ofrecer resistencia, durabilidad y un excelente desempeño en todo tipo de trabajos de construcción",
    image: alambresClavos,
    items: ["Alambre #16 - #08", 'Clavos 2", 2 1/2", 3", 4"'],
  },

  {
    slug: "ladrillos",
    name: "Ladrillos Pirámide",
    short: "King Kong, pandereta y techo",
    description:
      "Ladrillos de arcilla cocida para muros portantes, tabiquería y aligerado de techos. Alta resistencia.",
    image: ladrillosPiramide,
    items: [
      "Techos 20, 15, 12, 8",
      "Ladrillo King kong 18 - KK 30%",
      "Ladrillo Pandereta",
      "Ladrillo Caravista 9, 6",
      "Ladrillo Pastelero",
      "Tejas",
    ],
  },

  {
    slug: "prefabricados-concreto",
    name: "Prefabricados de Concreto",
    short: "King Kong, pandereta y techo",
    description:
      "Fabricamos adoquines y bloques de concreto de alta calidad, diseñados para brindar resistencia, durabilidad y un excelente acabado en proyectos de construcción, pavimentación y urbanización.",
    image: adoquinesBloques,
    items: ["Adoquines natural rojo y negro", "Bloques de concreto"],
  },

  {
    slug: "separadores",
    name: "Separadores de Concreto",
    short: "King Kong, pandereta y techo",
    description:
      "Somos fabricantes de separadores prefabricados de concreto de alta resistencia, elaborados con estrictos controles de calidad para asegurar el recubrimiento adecuado del acero",
    image: separadoresConcreto,
    items: ["Separadores 2, 2.5, 3, 4, 5, 7, 7.5"],
  },

  {
    slug: "tecnopor",
    name: "Planchas de Tecnopor",
    short: "King Kong, pandereta y techo",
    description:
      "Comercializamos planchas y casetones de tecnopor de alta calidad, disponibles en diferentes medidas para satisfacer las necesidades de todo tipo de proyectos de construcción",
    image: planchasTecnopor,
    items: ['Planchas 1/2", 3/4", 1", 1 1/2", 2"', 'Casetones 12 y 15'],
  },
];

export const values: Values[] = [
  {
    icon: Package,
    title: "Stock permanente",
    desc: "Reposición diaria en todos nuestros locales.",
  },
  {
    icon: Truck,
    title: "Entregas rápidas",
    desc: "Delivery a obra en toda Lima.",
  },
  {
    icon: Users,
    title: "Asesoría experta",
    desc: "Te ayudamos a elegir el material correcto.",
  },
  {
    icon: CheckCircle2,
    title: "Marcas líderes",
    desc: "Trabajamos solo con productos certificados.",
  },
];
