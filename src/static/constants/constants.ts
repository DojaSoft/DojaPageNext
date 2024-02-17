import Web from "../../images/services/web.webp";
import Android from "../../images/services/android.webp";
import Data from "../../images/services/data.webp";
import Security from "../../images/services/security.webp";
import { ICard } from "@/components/services/card/model";

const servicesData: ICard[] = [
  {
    title: "Desarrollo Web",
    src: Web,
    alt: "Desarrollo web imagen",
    description:
      "Diseñamos entornos agradables para tu marca, dándote control total sobre los contenidos de tu página.",
  },
  {
    title: "Desarrollo Móvil",
    src: Android,
    alt: "Desarrollo móvil imagen",
    description: "Creamos aplicaciones que fluyan al mismo ritmo de tus ideas.",
  },
  {
    title: "Análisis de datos",
    src: Data,
    alt: "Análisis de datos imagen",
    description:
      "La información es el oro del futuro, convertimos los datos de tu negocio en rentabilidad y optimizamos tus recursos para que crezcas junto a tu negocio.",
  },
  {
    title: "Seguridad informática",
    src: Security,
    alt: "Seguridad informatica imagen",
    description:
      "Cuidamos tus datos, manteniendote al día y protegido de amenazas cibernéticas frecuentes del mundo de hoy.",
  },
];

export default servicesData;
