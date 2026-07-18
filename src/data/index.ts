import { CheckCircle2, Package, Truck, Users } from "lucide-react";
import { Category, Location, Values } from "../interfaces";
import img from "../assets/hero-warehouse.jpg";

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
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Urb. Huertos de Lurín, Pachacamac, Lima, Perú",
    image: img,
  },
  {
    slug: "flavi",
    name: "Proyectos e Inversiones Flavi S.A.C",
    short: "Sede Comercial",
    address: "Av. Manuel Valle 33",
    district: "Lima 15823",
    phones: ["964 869 923", "972 022 177", "994 045 254"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Av. Manuel Valle 33, Lima 15823, Perú",
    image: img,
  },
  {
    slug: "hanna",
    name: "Comercializadora Hanna S.A.C",
    short: "Villa El Salvador",
    address: "Mz. J Lote 18 sec. 3, Grupo Residencial 21",
    district: "Villa el Salvador, Lima",
    phones: ["922 730 720", "(01) 641 3127"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Grupo Residencial 21 sector 3, Villa El Salvador, Lima, Perú",
    image: img,
  },
  {
    slug: "steel-house",
    name: "Steel House Valery S.A.C",
    short: "Pucusana",
    address: "Mz. C lote 13 A. V Asociación de Vivienda La Ponderosa",
    district: "Pucusana, Lima",
    phones: ["955 224 456", "949 999 525"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Asociación de Vivienda La Ponderosa, Pucusana, Lima, Perú",
    image: img,
  },
  {
    slug: "fierro",
    name: "Comercializadora de Fierro S.A.C",
    short: "Villa Verde",
    address: "Urb. Villa Verde IV etapa Mz. A lote 18",
    district: "Pachacamac, Lima",
    phones: ["952 680 900", "(01) 758 9635"],
    hours: {
      weekdays: "L-V: 7:30 am - 5:30 pm",
      saturday: "S: 7:30 am - 2:00 pm",
    },
    mapQuery: "Urb. Villa Verde IV etapa, Pachacamac, Lima, Perú",
    image: img,
  },
];

export const categories: Category[] = [
  {
    slug: "cemento",
    name: "Cemento",
    short: "Portland Tipo I, IP, V y cementos especiales",
    description:
      "Cemento de las marcas líderes del mercado peruano. Ideal para estructuras, contrapisos, columnas y todo tipo de obras.",
    image: img,
    items: [
      "Cemento Sol",
      "Cemento Andino",
      "Cemento Pacasmayo",
      "Cemento Antisalitre",
    ],
  },
  {
    slug: "fierro",
    name: "Fierro y Acero",
    short: "Corrugado, liso y perfiles estructurales",
    description:
      "Fierro de construcción grado 60, en varillas de 1/4″ a 1″. Mallas electrosoldadas, alambre negro y perfiles.",
    image: img,
    items: [
      'Fierro corrugado 1/2"',
      "Alambrón",
      "Malla electrosoldada",
      "Alambre #16",
    ],
  },
  {
    slug: "ladrillos",
    name: "Ladrillos",
    short: "King Kong, pandereta y techo",
    description:
      "Ladrillos de arcilla cocida para muros portantes, tabiquería y aligerado de techos. Alta resistencia.",
    image: img,
    items: [
      "King Kong 18 huecos",
      "Pandereta",
      "Ladrillo techo 12/15/20",
      "Ladrillo caravista",
    ],
  },
  {
    slug: "agregados",
    name: "Agregados",
    short: "Arena, piedra y hormigón",
    description:
      "Agregados seleccionados y zarandeados: arena fina, arena gruesa, piedra chancada 1/2″ y 3/4″, confitillo.",
    image: img,
    items: ["Arena fina", "Arena gruesa", 'Piedra chancada 1/2"', "Hormigón"],
  },
  {
    slug: "herramientas",
    name: "Herramientas",
    short: "Manuales y eléctricas profesionales",
    description:
      "Todo para el maestro de obra: palas, carretillas, taladros, amoladoras, escuadras, wincha y equipos de protección.",
    image: img,
    items: [
      "Carretilla buggy",
      "Taladros percutores",
      "Amoladoras",
      "EPP y guantes",
    ],
  },
  {
    slug: "gasfiteria",
    name: "Gasfitería",
    short: "Tuberías PVC y accesorios",
    description:
      "Sistemas de agua fría, caliente y desagüe. Tuberías PVC, CPVC y accesorios de las mejores marcas.",
    image: img,
    items: [
      "Tubería PVC SAP/SAL",
      "Codos y tees",
      "Válvulas de bola",
      "Pegamento PVC",
    ],
  },
  {
    slug: "electrico",
    name: "Eléctrico",
    short: "Cableado, canalización y accesorios",
    description:
      "Conductores THW, tuberías conduit, tableros, interruptores termomagnéticos, tomacorrientes y accesorios.",
    image: img,
    items: [
      "Cable THW 14/12/10",
      "Interruptores termo.",
      "Tomacorrientes",
      "Tubo PVC-SEL",
    ],
  },
  {
    slug: "techos",
    name: "Techos y Coberturas",
    short: "Calamina, planchas y tejas",
    description:
      "Coberturas para viviendas, almacenes y proyectos industriales. Calamina galvanizada, tejaandina y policarbonato.",
    image: img,
    items: [
      "Calamina galvanizada",
      "Teja Andina Eternit",
      "Planchas onduladas",
      "Policarbonato",
    ],
  },
  {
    slug: "pinturas",
    name: "Pinturas y Acabados",
    short: "Látex, esmaltes, imprimantes",
    description:
      "Línea completa de pinturas para interiores y exteriores. Imprimantes, selladores, esmaltes y rodillos.",
    image: img,
    items: [
      "Látex satinado",
      "Esmalte sintético",
      "Imprimante",
      "Rodillos y brochas",
    ],
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
