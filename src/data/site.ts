// =====================================================
// WES Agencia de Seguros — Datos del sitio
// =====================================================

export const site = {
  name: "WES Agencia de Seguros",
  shortName: "WES",
  tagline: "Deja que nuestra familia cuide la tuya",
  claim: "La mejor cobertura de seguros",
  yearsOfTrust: 50,
  description:
    "Más de cinco décadas asesorando familias y empresas en Colombia con soluciones a medida en seguros de vida, salud, autos, hogar y empresariales.",
  phone: "+57 317 767 4325",
  phoneLink: "tel:+573177674325",
  whatsapp:
    "https://wa.me/573177674325?text=Hola%20WES%2C%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20personalizada.",
  email: "soporte@wesagenciadeseguros.com",
  emailLink: "mailto:soporte@wesagenciadeseguros.com",
  address: "Calle 5ta Norte 18-54, Of. 202",
  city: "Armenia, Quindío — Colombia",
  hours: "Lun a Vie · 8:00 a 18:00",
  social: {
    instagram: "https://www.instagram.com/wesagenciadeseguros/",
    facebook: "https://www.facebook.com/wesagenciadeseguros",
    whatsapp:
      "https://wa.me/573177674325?text=Hola%20WES%2C%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20personalizada.",
  },
};

export const navLinks = [
  { label: "Coberturas", href: "#coberturas" },
  { label: "Por qué WES", href: "#por-que" },
  { label: "Cotizar", href: "#cotizar" },
  { label: "Pagos", href: "#pagos" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    id: "auto",
    title: "Seguro de Auto",
    summary:
      "Cobertura completa contra accidentes, robo, pérdida total y daños a terceros, con asistencia 24/7.",
    bullets: ["Asistencia en vías", "Carro de reemplazo", "Conductor elegido"],
    icon: "auto",
  },
  {
    id: "vida",
    title: "Seguro de Vida",
    summary:
      "Tranquilidad financiera para tu familia ante cualquier eventualidad, con coberturas a tu medida.",
    bullets: ["Indemnización inmediata", "Coberturas adicionales", "Renta diaria por hospital"],
    icon: "vida",
  },
  {
    id: "salud",
    title: "Seguro de Salud",
    summary:
      "Atención médica de primer nivel, hospitalización, especialistas y exámenes con la mejor red.",
    bullets: ["Red nacional", "Sin tiempos de espera", "Cobertura internacional"],
    icon: "salud",
  },
  {
    id: "hogar",
    title: "Seguro de Hogar",
    summary:
      "Protege tu casa, tus electrodomésticos y a tu familia frente a daños, robos y emergencias.",
    bullets: ["Daños por agua", "Plomería y cerrajería", "Equipos electrónicos"],
    icon: "hogar",
  },
  {
    id: "empresarial",
    title: "Seguros Empresariales",
    summary:
      "Cubre tu operación, tu equipo y tus activos con pólizas pensadas para la realidad de tu negocio.",
    bullets: ["Cumplimiento", "Manejo y RC", "Lucro cesante"],
    icon: "empresa",
  },
  {
    id: "rc",
    title: "Responsabilidad Civil",
    summary:
      "Respaldo ante reclamaciones por daños a terceros, perfecto para profesionales y empresas.",
    bullets: ["Daños a terceros", "Defensa jurídica", "Coberturas extendidas"],
    icon: "rc",
  },
];

export const partners = [
  {
    name: "Allianz",
    logo: "/media/allianz-logo.jpg",
    scale: 1.0,
    paymentUrl: "https://www.allianz.co/clientes/todos-los-clientes/pagos.html",
  },
  {
    name: "SURA",
    logo: "/media/sura-logo-1.webp",
    scale: 1.0,
    paymentUrl: "https://pagos.segurossura.com.co/pagos",
  },
  {
    name: "Seguros Bolívar",
    logo: "/media/seguros-bolivar.png",
    scale: 0.95,
    paymentUrl: "https://recaudos.segurosbolivar.com/",
  },
  {
    name: "HDI Seguros",
    logo: "/media/hdiseguros2019-png_iaa-66e313838dea60.67420692.png",
    scale: 0.7,
    paymentUrl: "https://portal.cliente.hdiseguros.com.co/",
  },
  {
    name: "Liberty Seguros",
    logo: "/media/liberty-logo-1.webp",
    scale: 0.95,
    paymentUrl: "https://portal.cliente.libertyseguros.co/",
  },
  {
    name: "La Previsora",
    logo: "/media/previsora-logo-1.webp",
    scale: 0.95,
    paymentUrl: "https://www.previsora.gov.co/previpagos",
  },
  {
    name: "Seguros del Estado",
    logo: "/media/estado-logo-1.webp",
    scale: 0.9,
    paymentUrl: "https://portaldepago.segurosdelestado.com/",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "años de trayectoria" },
  { value: 7000, suffix: "+", label: "familias protegidas" },
  { value: 12, suffix: "", label: "aseguradoras aliadas" },
  { value: 24, suffix: "/7", label: "respaldo y atención" },
];

export const values = [
  {
    title: "Asesoría a la medida",
    text: "No vendemos pólizas, diseñamos coberturas. Estudiamos tu vida, tu familia y tu patrimonio antes de proponer.",
  },
  {
    title: "Trato humano y cercano",
    text: "Somos una familia atendiendo familias. Tu asesor te conoce por nombre, no por número de póliza.",
  },
  {
    title: "Acompañamiento en siniestros",
    text: "Cuando más lo necesitas, estamos contigo: gestionamos el siniestro de principio a fin para que solo te ocupes de lo importante.",
  },
  {
    title: "Independencia profesional",
    text: "Trabajamos con +12 aseguradoras top, así te ofrecemos la mejor relación costo-beneficio sin presiones comerciales.",
  },
];

export const process = [
  {
    n: "01",
    title: "Conversamos contigo",
    text: "Una llamada o reunión sin compromiso para entender tu realidad, tus prioridades y tus riesgos.",
  },
  {
    n: "02",
    title: "Diseñamos tu cobertura",
    text: "Cotizamos con varias aseguradoras y te presentamos las opciones de forma clara y comparable.",
  },
  {
    n: "03",
    title: "Te acompañamos siempre",
    text: "Renovaciones, reclamaciones, cambios y dudas: tu asesor está disponible cuando lo necesites.",
  },
];

// NOTA: Estos testimonios son ejemplos editoriales mientras se incorporan
// los reales. Reemplázalos por testimonios verificados de clientes WES.
export const testimonials = [
  {
    quote:
      "Lo que más valoro de WES es que cuando hubo un siniestro grave, ellos se encargaron de todo. Es como tener un asesor en la familia.",
    author: "Cliente persona natural",
    role: "Cobertura Auto · Vida · Hogar",
  },
  {
    quote:
      "Renové mi seguro empresarial con WES y ahorré pagando lo mismo en cobertura. El equipo es profesional, claro y siempre responde.",
    author: "Cliente corporativo",
    role: "Cobertura Empresarial",
  },
  {
    quote:
      "Mi asesora me acompañó durante todo el siniestro del apartamento. Pensé que iba a ser una pesadilla y resultó lo contrario: rápido, transparente y justo.",
    author: "Cliente persona natural",
    role: "Cobertura Hogar",
  },
];

export const faqs = [
  {
    q: "¿Cómo elijo la cobertura adecuada para mí o mi familia?",
    a: "Empezamos por entender tu estilo de vida, tus bienes y tus prioridades. Luego comparamos opciones de varias aseguradoras y te explicamos cada cláusula en lenguaje simple para que decidas con tranquilidad.",
  },
  {
    q: "¿Tienen costo las asesorías?",
    a: "No. Nuestras asesorías son totalmente gratuitas y sin compromiso. Solo cobramos si terminas tomando una póliza con nosotros, y nuestro pago lo asume directamente la aseguradora.",
  },
  {
    q: "¿Qué pasa si tengo un siniestro?",
    a: "Nos llamas o nos escribes y nuestro equipo se encarga de gestionar todo el proceso con la aseguradora hasta que recibas la indemnización o el servicio. Tú no peleas con nadie: lo hacemos nosotros por ti.",
  },
  {
    q: "¿Trabajan con empresas además de personas naturales?",
    a: "Sí. Tenemos un área especializada en seguros corporativos: cumplimiento, RC, manejo, lucro cesante, vida grupo, salud colectiva y flotas vehiculares.",
  },
  {
    q: "¿Puedo cambiar mi póliza actual a WES?",
    a: "Por supuesto. Estudiamos tu póliza vigente, te presentamos opciones equivalentes o mejores y te acompañamos en la transición sin que pierdas continuidad ni cobertura.",
  },
];
