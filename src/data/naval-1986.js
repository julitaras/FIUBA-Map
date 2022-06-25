export const naval = [
  {
    id: "CBC28",
    materia: "Análisis Matemático",
    creditos: 9,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC27",
    materia: "Álgebra",
    creditos: 9,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC24",
    materia: "Introducción al Conocimiento de la Sociedad y el Estado",
    creditos: 4,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC3",
    materia: "Física",
    creditos: 6,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC5",
    materia: "Química",
    creditos: 6,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC40",
    materia: "Introducción al Pensamiento Científico",
    creditos: 4,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC",
    materia: "Ciclo Básico Común",
    creditos: 0,
    categoria: "CBC",
    level: 0,
    correlativas: "CBC28-CBC27-CBC3-CBC5-CBC24-CBC40",
  },
  {
    id: "61.08",
    materia: "Álgebra II A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "61.03",
    materia: "Análisis Matemático II A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "62.01",
    materia: "Física I A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "75.01",
    materia: "Computación",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "63.01",
    materia: "Química",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "62.03",
    materia: "Física II A",
    creditos: 8,
    correlativas: "61.03-62.01",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "67.02",
    materia: "Medios de Representación B",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "75.12",
    materia: "Análisis Numérico I",
    creditos: 6,
    correlativas: "61.03-61.08-75.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "62.06",
    materia: "Mecánica I",
    creditos: 6,
    correlativas: "61.03-61.08-62.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "67.13",
    materia: "Conocimiento de Materiales I",
    creditos: 6,
    correlativas: "63.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "64.11",
    materia: "Estabilidad I B",
    creditos: 6,
    correlativas: "62.01-67.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "67.07",
    materia: "Dibujo Mecánico",
    creditos: 2,
    correlativas: "67.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "71.23",
    materia: "Economía",
    creditos: 4,
    correlativas: "61.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "61.06",
    materia: "Probabilidad y Estadística A",
    creditos: 4,
    correlativas: "61.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "64.12",
    materia: "Estabilidad II B",
    creditos: 8,
    correlativas: "61.03-61.08-64.11-67.13",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "73.01",
    materia: "Arquitectura Naval I",
    creditos: 6,
    correlativas: "64.11-67.02",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "67.04",
    materia: "Termodinámica I A",
    creditos: 8,
    correlativas: "61.08-62.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "67.39",
    materia: "Dibujo para Ingenieros",
    creditos: 6,
    correlativas: "67.07",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "65.30",
    materia: "Electrotecnia General D",
    creditos: 6,
    correlativas: "62.03",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "73.02",
    materia: "Construcción Naval I",
    creditos: 6,
    correlativas: "73.01",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "67.18",
    materia: "Mecánica de Fluidos B",
    creditos: 6,
    correlativas: "67.04",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "66.04",
    materia: "Electrónica I",
    creditos: 8,
    correlativas: "62.03",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "73.40",
    materia: "Prácticas en Astilleros I",
    creditos: 4,
    correlativas: "73.01-73.02",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "64.13",
    materia: "Estabilidad III B",
    creditos: 6,
    correlativas: "64.12",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "73.03",
    materia: "Arquitectura Naval II",
    creditos: 8,
    correlativas: "73.01",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "73.05",
    materia: "Introducción a Máquinas Marinas",
    creditos: 6,
    correlativas: "67.04",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "66.05",
    materia: "Electrónica II",
    creditos: 6,
    correlativas: "66.04",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "61.16",
    materia: "Matemática para Ingenieros",
    creditos: 8,
    correlativas: "61.03-61.08",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "73.04",
    materia: "Estructura de Buques",
    creditos: 6,
    correlativas: "64.13-73.02",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "73.07",
    materia: "Construcción Naval II",
    creditos: 6,
    correlativas: "73.02",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "67.12",
    materia: "Mecanismos B",
    creditos: 6,
    correlativas: "64.12",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "73.11",
    materia: "Máquinas Marinas I",
    creditos: 6,
    correlativas: "67.04",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "73.41",
    materia: "Prácticas en Astilleros II",
    creditos: 4,
    correlativas: "73.40",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "73.09",
    materia: "Proyecto de Buques I",
    creditos: 6,
    correlativas: "73.03-73.05-73.07",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "73.10",
    materia: "Proyecto de Buques II",
    creditos: 6,
    correlativas: "73.09",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "73.06",
    materia: "Vibraciones de Estructuras",
    creditos: 6,
    correlativas: "64.13-73.07-73.12",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "73.12",
    materia: "Máquinas Marinas II",
    creditos: 6,
    correlativas: "67.04",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "64.14",
    materia: "Método de los Elementos Finitos",
    creditos: 4,
    correlativas: "64.13",
    categoria: "Materias Electivas",
  },
  {
    id: "64.15",
    materia: "Estabilidad IV B",
    creditos: 6,
    correlativas: "64.13",
    categoria: "Materias Electivas",
  },
  {
    id: "64.16",
    materia: "Análisis Experimental de Tensiones",
    creditos: 2,
    correlativas: "64.13",
    categoria: "Materias Electivas",
  },
  {
    id: "67.23",
    materia: "Conversión de la Energía",
    creditos: 2,
    requiere: 120,
    categoria: "Materias Electivas",
  },
  {
    id: "67.38",
    materia: "Tecnología Mecánica B",
    creditos: 6,
    correlativas: "67.02-67.13",
    categoria: "Materias Electivas",
  },
  {
    id: "67.61",
    materia: "Fundamentos Matemáticos de la Visión en Robótica",
    creditos: 6,
    correlativas: "61.08-67.02",
    categoria: "Materias Electivas",
  },
  {
    id: "68.03",
    materia: "Puertos y Vías Navegables",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Electivas",
  },
  {
    id: "68.08",
    materia: "Planeamiento del Transporte",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Electivas",
  },
  {
    id: "71.07",
    materia: "Investigación Operativa",
    creditos: 8,
    correlativas: "71.31",
    categoria: "Materias Electivas",
  },
  {
    id: "71.36",
    materia: "Gestión de Calidad",
    creditos: 4,
    correlativas: "61.06-73.07",
    categoria: "Materias Electivas",
  },
  {
    id: "71.38",
    materia: "Legislación General",
    creditos: 4,
    correlativas: "73.07",
    categoria: "Materias Electivas",
  },
  {
    id: "71.34",
    materia: "Gestión Presupuestaria",
    creditos: 4,
    correlativas: "71.50-71.51",
    categoria: "Materias Electivas",
  },
  {
    id: "71.51",
    materia: "Ingeniería Económica II",
    creditos: 4,
    correlativas: "71.50",
    categoria: "Materias Electivas",
  },
  {
    id: "72.06",
    materia: "Automatización Industrial",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Electivas",
  },
  {
    id: "73.14",
    materia: "Navegación",
    creditos: 4,
    correlativas: "73.02",
    categoria: "Materias Electivas",
  },
  {
    id: "73.15",
    materia: "Máquinas Marinas III",
    creditos: 6,
    correlativas: "73.05-73.11-73.12",
    categoria: "Materias Electivas",
  },
  {
    id: "73.16",
    materia: "Construcción Naval III",
    creditos: 6,
    correlativas: "73.07",
    categoria: "Materias Electivas",
  },
  {
    id: "77.01",
    materia: "Higiene y Seguridad del Trabajo",
    creditos: 4,
    correlativas: "73.02",
    categoria: "Materias Electivas",
  },
  {
    id: "77.02",
    materia: "Introducción a la Ingeniería Ambiental",
    creditos: 4,
    correlativas: "73.09",
    categoria: "Materias Electivas",
  },
  {
    id: "78.xx",
    materia: "Idioma",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Electivas",
  },
  {
    id: "71.31",
    materia: "Organización de la Producción",
    creditos: 6,
    correlativas: "73.02",
    categoria: "Materias Electivas",
  },
  {
    id: "71.50",
    materia: "Ingeniería Económica I",
    creditos: 4,
    correlativas: "71.31",
    categoria: "Materias Electivas",
  },
  {
    id: "73.00",
    materia: "Tesis de Ingeniería Naval y Mecánica",
    creditos: 18,
    requiere: 140,
    categoria: "Fin de Carrera",
  },
  {
    id: "73.99",
    materia: "Trabajo Profesional de Ingeniería Naval y Mecánica",
    creditos: 0,
    categoria: "Fin de Carrera",
  },
];
