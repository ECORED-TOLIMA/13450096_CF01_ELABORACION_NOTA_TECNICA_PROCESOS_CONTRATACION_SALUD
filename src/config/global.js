export default {
  global: {
    Name: 'Análisis normativo y población para la construcción de la nota técnica',
    Description:
      'El componente aborda el análisis de la población objeto, sus necesidades y características, a partir de fuentes de información del sector salud. Asimismo, presenta los fundamentos normativos, epidemiológicos y metodológicos relacionados con la nota técnica y su aplicación en los procesos de contratación de servicios y tecnologías en salud.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caracterización de la población objeto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y contexto de la caracterización poblacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Regímenes de afiliación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Determinantes de la población',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Necesidades de la población objeto',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Población objeto total y población susceptible',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Parámetros epidemiológicos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Identificación y codificación de servicios y tecnologías',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de la información en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fuentes de información del sector salud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Frecuencia de uso de servicios y tecnologías',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis de la oferta y la demanda de servicios',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Validación de los soportes de atención',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentos de la contratación en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Marco normativo aplicable a los acuerdos de voluntades',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modalidades de pago',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Registro Individual de Prestación de Servicios de Salud (RIPS)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Calidad y atención en el contexto de la contratación en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Sistema Obligatorio de Garantía de Calidad de la Atención de Salud',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Habilitación de servicios de salud',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión del riesgo y seguridad del paciente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Rutas Integrales de Atención en Salud (RIAS)',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manuales tarifarios y glosas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de tarifas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Lineamientos normativos de los manuales tarifarios',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Glosas en la contratación de servicios de salud',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elementos generales de la nota técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Características y elementos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Servicios, tecnologías y frecuencias de uso',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Riesgo primario y riesgo técnico',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acuerdo de voluntades',
      significado:
        'Acto mediante el cual las partes establecen las condiciones para la prestación y pago de servicios y tecnologías en salud.',
    },
    {
      termino: 'Caracterización poblacional',
      significado:
        'Proceso de identificación y análisis de las características, condiciones y necesidades de una población determinada.',
    },
    {
      termino: 'Demanda de servicios de salud',
      significado:
        'Cantidad de servicios y tecnologías en salud que son solicitados o utilizados por una población.',
    },
    {
      termino: 'Frecuencia de uso',
      significado:
        'Número estimado de veces que un servicio o tecnología puede ser utilizado por una población durante un periodo determinado.',
    },
    {
      termino: 'Glosa',
      significado:
        'Objeción formulada durante la auditoría de una factura o cuenta relacionada con la prestación de servicios de salud.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Conjunto de acciones orientadas a identificar, analizar y gestionar situaciones que pueden afectar los resultados en salud.',
    },
    {
      termino: 'Habilitación',
      significado:
        'Proceso mediante el cual se verifican las condiciones que deben cumplir los prestadores para ofrecer servicios de salud.',
    },
    {
      termino: 'Manual tarifario',
      significado:
        'Referente que contiene valores o criterios para establecer tarifas aplicables a determinados servicios y tecnologías en salud.',
    },
    {
      termino: 'Nota técnica',
      significado:
        'Herramienta que integra información sobre población, servicios, tecnologías, frecuencias de uso, costos y riesgos para sustentar técnicamente un acuerdo de voluntades.',
    },
    {
      termino: 'Oferta de servicios de salud',
      significado:
        'Capacidad disponible para prestar servicios y tecnologías de salud, de acuerdo con los recursos y condiciones existentes.',
    },
    {
      termino: 'Población susceptible',
      significado:
        'Grupo de personas dentro de la población objeto que puede requerir determinados servicios o tecnologías en salud.',
    },
    {
      termino: 'RIAS',
      significado:
        'Rutas que organizan las intervenciones de atención en salud de acuerdo con las necesidades de las personas, familias y comunidades.',
    },
    {
      termino: 'Riesgo primario',
      significado:
        'Riesgo relacionado con la ocurrencia de condiciones o eventos de salud que pueden generar la necesidad de atención.',
    },
    {
      termino: 'Riesgo técnico',
      significado:
        'Riesgo asociado con variaciones en la utilización de servicios y tecnologías o en los recursos requeridos para la atención.',
    },
    {
      termino: 'RIPS',
      significado:
        'Registro que contiene información relacionada con la prestación de servicios y tecnologías en salud y que sirve como fuente para el análisis de su utilización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES). (2026). Consulta afiliados BDUA.',
      link: 'https://servicios.adres.gov.co/BDUA/Consulta-Afiliados-BDUA',
    },
    {
      referencia:
        'Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES). (s. f.). Base de Datos Única de Afiliados (BDUA).',
      link: 'https://www.adres.gov.co/eps/bdua/Paginas/afiliados-por-departamento-y-estado-de-afiliacion.aspx',
    },
    {
      referencia: 'Cuenta de Alto Costo. (s. f.). Cuenta de Alto Costo.',
      link: 'https://cuentadealtocosto.org/',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2026). SIVIGILA: Sistema Nacional de Vigilancia en Salud Pública.',
      link: 'https://portalsivigila.ins.gov.co/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Clasificación Única de Procedimientos en Salud (CUPS).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Resolución 3280 de 2018.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Rutas Integrales de Atención en Salud (RIAS).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Decreto 441 de 2022.',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20No.%20441%20de%202022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Resolución 2275 de 2023.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Resolución 2284 de 2023.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Resolución 2706 de 2025.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). Resolución 100 de 2024.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). Resolución 1885 de 2024.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2026). Facturación electrónica de venta en salud y Registro Individual de Prestación de Servicios de Salud (RIPS).',
      link: 'https://www.sispro.gov.co/central-financiamiento/Pages/facturacion-electronica.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Análisis de Situación de Salud (ASIS).',
      link: 'https://www.minsalud.gov.co/salud/epidemiologia-demografia/Paginas/analisis-de-situacion-de-salud.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema de Información para la Calidad.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Integrado de Información de la Protección Social (SISPRO).',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Obligatorio de Garantía de Calidad de la Atención de Salud (SOGCS).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Único de Habilitación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Único de Acreditación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2026). Código Único de Medicamentos (CUM).',
      link: '',
    },
    {
      referencia:
        'Politécnico de Colombia. (2026). Guía paso a paso: qué es el PAMEC en salud y cómo implementarlo en Colombia.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1996). Decreto 2423 de 1996. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76014',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2016). Decreto 780 de 2016. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Milena Enríquez Tróchez',
          cargo: 'Instructora experta',
          centro: 'Centro de Comercio y Servicios - Regional Cauca',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
