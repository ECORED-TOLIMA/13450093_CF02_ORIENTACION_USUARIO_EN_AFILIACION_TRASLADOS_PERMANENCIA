export default {
  global: {
    Name: 'Gestión para la afiliación a los planes de beneficio en salud',
    componenteFormativo:
      'Gestión para la afiliación a los planes de beneficio en salud',
    descripcionCurso:
      'Este componente permite a los aprendices entender cómo gestionar la afiliación a los Planes de Beneficio en Salud (PBS), según procedimiento, usuario y régimen. Esto asegura cumplir con las normativas, brindar atención eficiente, adaptar el proceso a diferentes regímenes y mejorar la gestión administrativa. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo:
          'Los Planes de Beneficios en Salud (PBS) del sistema de salud colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conformación del Plan de Beneficios en Salud (PBS)',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Los regímenes de atención contributivo y subsidiado en salud en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Marco legal del sistema de salud colombiano',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Fuentes principales de financiamiento del sistema de salud colombiano',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de Afiliación Transaccional (SAT)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Afiliación colectiva al sistema de salud en Colombia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Etapa de recolección de información en el proceso de afiliación colectiva',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Los pagos compartidos o copagos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Las cuotas moderadoras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Servicios exceptuados de cobro de cuotas moderadoras',
            hash: 't_4_1',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_00000000_DU.pdf',
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
  complementario: [
    {
      tema:
        '2. Los regímenes de atención contributivo y subsidiado en salud en Colombia.',
      referencia:
        'Superintendencia Nacional de Salud. (2018). Cómo realizar un traslado de EPS a través de miseguridadsocial.gov.co. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8JH76MYWtvM&t=109s',
    },
    {
      tema:
        '2. Los regímenes de atención contributivo y subsidiado en salud en Colombia.',
      referencia:
        'Desarrollo-SAT MinSalud. (2020). Inclusión de beneficiario. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KUioHBNxZ_Y&t=2s',
    },
    {
      tema: '3. Sistema de Afiliación Transaccional (SAT).',
      referencia:
        'Desarrollo-SAT MinSalud. (2020). Actualización datos complementarios. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zSDVh6TxiG4',
    },
    {
      tema:
        '3.2. Etapa de recolección de información en el proceso de afiliación colectiva.',
      referencia: 'ADRES Colombia. (2024). ¿Qué es UPC? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wq19zo6I4Q8',
    },
  ],
  glosario: [
    {
      termino: 'Afiliación',
      significado:
        'es la inscripción al Sistema General de Seguridad Social en Salud (SGSSS) y en ese trámite se asigna la EPS correspondiente.',
    },
    {
      termino: 'Aporte',
      significado:
        'es el pago que hace de manera mensual cada persona y los empleadores con motivo del aseguramiento al Sistema General de Seguridad Social en Salud (SGSSS).',
    },
    {
      termino: 'Datos complementarios',
      significado:
        'hace referencia a otros datos de identificación relacionados con asuntos sociodemográficos.',
    },
    {
      termino: 'Inscripción a la EPS',
      significado:
        'es la manifestación de voluntad libre y espontánea del afiliado de vincularse a una EPS, a través de la cual recibirá la cobertura en salud.',
    },
    {
      termino: 'Movilidad',
      significado:
        'es la posibilidad que tiene la persona de cambiar de régimen de afiliación dentro del sistema.',
    },
    {
      termino: 'Novedades',
      significado:
        'son los cambios que presente el afiliado en términos de afiliación, como, por ejemplo, variación en los ingresos, inclusión de beneficiarios, traslados de domicilio, etc.',
    },
    {
      termino: 'Usuario',
      significado:
        'son todas las personas que hicieron afiliación al Sistema General de Seguridad Social en Salud (SGSSS).',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2010). Acuerdo 19 de 2010. Por el cual se fija el valor de la Unidad de Pago por Capitación del Plan Obligatorio de Salud de los Regimenes Contributivo y Subsidiado para el año 2011.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Acuerdo%20019%20de%202010.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Decreto 064 de 2020. Por el cual se modifican artículos 2.1.3.11, 2.1.3.13, 2.1.5.1, 2.1 2.1 y 2.1.3.17, y se adicionan los artículos 1.5.4 y 2.1.5.5 del Decreto 780 201 en relación con los afiliados régimen subsidiado, la afiliación de oficio y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/decreto-64-de-2020.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Decreto No. 1652 de 2022. Determinación del régimen aplicable al cobro de pagos compartidos o copagos y cuotas moderadoras.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/copagos-cuotas-moderadoras-2022-decreto-1652-2022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Aseguramiento en salud.',
      link:
        'https://www.minsalud.gov.co/salud/Documents/Contenidos/aseguramiento-salud.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). ¿Qué es mi Seguridad Social?.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Paginas/afiliacion-transaccional-sat.aspx',
    },
    {
      referencia:
        'Secretaría del Senado. (1991). Constitución Política de Colombia.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html',
    },
    {
      referencia:
        'Secretaría del Senado. (1993). Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
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
