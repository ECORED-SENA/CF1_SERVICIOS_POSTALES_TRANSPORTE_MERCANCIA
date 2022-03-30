export default {
  global: {
    componenteFormativo: 'Caracterización del servicio al cliente',
    descripcionCurso:
      'Actualmente, la comercialización de productos a través de plataformas ha permitido el crecimiento de algunas organizaciones y el emprendimiento de muchas personas. El comercio electrónico ha unido las demandas y las ofertas en todos los sectores de la economía, esta unión demanda el apoyo de un tercer integrante en la cadena y es el prestador de servicios postales y transporte de mercancías.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Contexto de servicio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Procedimiento del servicio',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cliente interno',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cliente externo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estados del servicio al cliente frente a los servicios postales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Protocolos de Servicio',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Triángulo del servicio',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Momentos de verdad',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Carlzon, J. (1996). El momento de la verdad. Ediciones Díaz De Santos.',
      link: 'https://pocketbook4you.com/es/read/moments-of-truth',
    },
    {
      referencia:
        'Gastalver, C. (2019). Técnicas de Información y Atención al Cliente/consumidor. Editorial Elearning.',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2020). Plan de modernización del sector postal 2020-2024. ',
      link: 'https://mintic.gov.co/portal/715/articles-150820_recurso_1.pdf',
    },
    {
      referencia:
        'Servicios Postales Nacionales Vicepresidencia de Servicio al Cliente. (2015). Planta automatizada 472 [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=h7BG28An0Tk&t=60s',
    },
    {
      referencia:
        'Grupo Proikos. (2015). Atención y Servicio al Cliente [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=5xGoNUkHpZQ',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (s. f.). Servicios Postales. Gov.co. ',
      link: 'https://www.sic.gov.co/servicios-postales',
    },
  ],
  glosario: [
    {
      termino: 'Atención:',
      significado: 'proceso cognitivo y conductual de concentración.',
    },
    {
      termino: 'Ciclo:',
      significado:
        'estados o fases en los que se desarrollan unos procesos o procedimientos.',
    },
    {
      termino: 'Cliente:',
      significado:
        'organización o persona que hace uso de los servicios o productos de una empresa o persona.',
    },
    {
      termino: 'Destinatario:',
      significado: 'empresa o persona a quien se dirige algo.',
    },
    {
      termino: 'Mensajería Expresa:',
      significado:
        'es el servicio postal catalogado como urgente, que requiere de la aplicación de condiciones o características especiales en el proceso de recepción, recolección, clasificación, transporte y entrega de los objetos postales o las mercancías.',
    },
    {
      termino: 'Petición:',
      significado: 'acción de solicitar algo.',
    },
    {
      termino: 'Procedimiento:',
      significado: 'plan o forma de gestionar o ejecutar una cosa.',
    },
    {
      termino: 'Remitente:',
      significado:
        'persona o empresa que despacha algo haciendo uso del servicio de correo o servicio postal.',
    },
    {
      termino: 'Servicio de correo:',
      significado:
        'servicios postales prestados por una organización denominada operador postal o concesionario de correo.',
    },
    {
      termino: 'Servicios postales:',
      significado:
        'acción de recepción, clasificación, transporte y entrega de elementos postales, haciendo uso de las redes postales establecidas en el mercado.',
    },
    {
      termino: 'Solicitud',
      significado: 'proceso o procedimiento que se realiza para pedir algo.',
    },
    {
      termino: 'Sugerencia:',
      significado:
        'realizar una recomendación o sugerir algo dentro de un proceso.',
    },
    {
      termino: 'Queja:',
      significado:
        'manifestación de un disgusto que se genera por un comportamiento o una acción.',
    },
    {
      termino: 'Trámite:',
      significado:
        'proceso que se realiza de forma sucesiva para dar solución a una situación.',
    },
    {
      termino: 'Usuario:',
      significado: 'empresas o personas que usan un servicio con frecuencia.',
    },
  ],
  complementario: [
    {
      texto:
        '1.Atención al cliente., (2015). Peña, J. (2015). Calidad en el Servicio al Cliente. Aprende las Claves del Servicio [Video]. YouTube. https://www.youtube.com/watch?v=3Kc6eRdy0kY ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3Kc6eRdy0kY',
    },
    {
      texto:
        '2.1 Cliente interno, (1998). Bien Pensado. (2018). Cómo derretir al cliente interno [Video]. YouTube. https://www.youtube.com/watch?v=2Wsop8Jnd3w',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2Wsop8Jnd3w',
    },
    {
      texto:
        '3.1 Julca, S. (2016). Protocolo de Atención al Cliente [Video]. YouTube. https://www.youtube.com/watch?v=egkOLUiEdx4',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=egkOLUiEdx4',
    },
    {
      texto:
        '3.2 Protocolo de servicio al cliente para llamadas.Vivianamilagro Veracaamaño. (2017). Etiqueta Telefónica [Video]. YouTube. https://youtu.be/aza8VUDHYmo',
      tipo: 'Video',
      link: 'https://youtu.be/aza8VUDHYmo',
    },
    {
      texto:
        '3.3 Triángulo del servicio.Pulgarín, S. y Urueña, L. (2019). Principales Exponentes y Conceptos de la Gerencia del Servicio. Universidad Libre Seccional Pereira. ',
      tipo: 'Documento Repositorio',
      link: 'https://n9.cl/3ivpc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado        ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar        ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
