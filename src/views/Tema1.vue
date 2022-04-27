<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Servicio al cliente
    .row.mb-5.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-6
        p <strong>El servicio al cliente está relacionado con todos y cada uno de los procesos implementados durante la prestación de un servicio o la comercialización de un producto.</strong>
        p También se denomina servicio de atención al cliente. Es un instrumento del 
          span.it marketing
          |  que se encarga de generar contacto con los clientes, implementando el uso de diferentes canales que permiten generar relación con el cliente antes, durante y después de la compra o la prestación del servicio.
        p El servicio al cliente se enmarca como la estrategia que implementan las empresas en busca de la satisfacción del cliente. Se diferencia de la atención al cliente, ya que esta es la acción que se aplica en el día a día. De acuerdo con la conceptualización, se puede ver el siguiente video más detallado:                   
      .col-lg-6(data-aos="zoom-in-right")

        img.img-t1(src='@/assets/curso/tema1/img1.png' alt='AvatarTop')

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/p2I7GFzVh44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    p.mb-5 En la cotidianidad, se tiende a confundir los conceptos y se considera que en las organizaciones el tema de servicio al cliente y atención al cliente es únicamente responsabilidad de los colaboradores de dicha área, pero esto es un gran error, considere el siguiente caso en una tienda de ropa:
    
    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hMGYHU8p-wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    p.mb-5 De acuerdo con este contexto, la empresa se comunica con María y le explica la situación presentada y refiere que no puede atender su pedido solo hasta 10 días después del compromiso inicial de entrega.
    h4 ¿El contexto que se presenta es falla de atención al cliente o una falla de servicio al cliente?
    p Se está frente a un contexto de falla de servicio al cliente, ya que la atención al cliente que prestó Ana fue la adecuada y dio cumplimiento al protocolo establecido para ello.  Ahora, hablar de servicio al cliente con calidad involucra el servicio y la atención, conceptos de relación estrecha en el tema, ya que, para ofrecer una excelente atención, es preciso que quienes tienen contacto con el cliente tengan habilidades de empatía, asertividad y comunicación, así como una mirada integral de la organización y específicamente del servicio.
    .tarjeta.tarjeta--azul.p-4(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center 
          .col-lg-11   
            .titulo-sexto.color-acento-contenido
              h5 Óptima atención al cliente
            img.hove1.img-a.img-t(src='@/assets/curso/tema1/img2.png' alt='AvatarTop')

        .row.justify-content-center.align-items-center 
          .col-lg-11
            .titulo-sexto.color-acento-contenido
              h5 Deficiente servicio al cliente
            img.hove2.img-a.img-t(src='@/assets/curso/tema1/img3.png' alt='AvatarTop')    
    .row-md-12.mt-4
      p Por lo anterior, se concluye que atención al cliente hace referencia a la interacción con el cliente, al trato que se le da al cliente, y el servicio al cliente es la integración técnica de los procesos con los cuales se busca generar la satisfacción del mismo.    
    .tarjeta.color-primario.p-3.mb-5(data-aos="zoom-out-up")
      .row.justify-content-around.align-items-center.p-2
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/ico1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Para profundizar los conocimientos, se invita a revisar el material complementario, donde se puede visualizar el video <strong>“Calidad en el Servicio al Cliente”.</strong>
            .col-sm-auto
              a.boton.color-acento-acento-botones.texto-blanco(:href="('https://www.youtube.com/embed/3Kc6eRdy0kY')" target="_blank")
                span Ver más
                i.fas.fa-link
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-up")
      h2 1.1 Contexto de servicio

    p <strong>Lograr una buena comunicación con el cliente es construir una buena relación con él; dicha comunicación debe ser fluida, pero ante todo, muy clara y asertiva. </strong> Se debe concebir que, fundamentalmente, esta relación es una relación humana, entre dos personas que tienen unas expectativas que se deben escuchar y respetar; lograr esto es generar una buena prestación de servicio al cliente. 

    p Actualmente, la estrategia de servicio demanda especial atención en las organizaciones, la competencia permite que los clientes exijan cada vez mayor y mejor atención. Disponer de un producto o un servicio para comercializar, por sí solo, no es garantía de éxito o de participación en el mercado. Por ello, cuando los clientes manifiestan que un producto es de su agrado, la empresa debe valorar el proceso de servicio y atención que aplicó  para con este cliente, para potencializarlo, aplicarlo con los demás clientes y lograr brindar la misma experiencia positiva con clientes futuros; esto se enmarca como el contexto de relación entre las partes que permite fidelizar clientes.
    .row.justify-content-center.align-items-center.mt-4(data-aos="zoom-in-up")
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Es un valor agregado.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Busca la satisfacción del cliente.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Todos los trabajadores forman parte de la estrategia, por tanto, debe ser integral.

          li 
            .lista-ol--cuadro__vineta
              span 4
            | Debe ser permanente y continuo para todos los clientes.
      .col-lg-7
        img.img-a.img-t.img-t1-1(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')

      p.mt-4 Para prestar un adecuado proceso de servicio al cliente, las empresas deben trabajar en: 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-2.mb-4.mb-lg-0.tarjeta--boton.color-primario.br-white.p-3
        p <strong>Perfiles de clientes</strong> 
        p.mb-0 Tener conocimiento de los perfiles de los clientes.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0.tarjeta--boton.color-primario.br-white.p-3
        p <strong>Bases de datos de los clientes</strong> 
        p.mb-0 Disponer de bases de datos de los clientes

      .col-sm-6.col-lg-2.mb-4.mb-lg-0.tarjeta--boton.color-primario.br-white.p-3
        p <strong>Investigación sobre los clientes</strong> 
        p.mb-0 Desarrollar investigaciones sobre los clientes, buscando conocer sus necesidades.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0.tarjeta--boton.color-primario.br-white.p-3
        p <strong>Evaluar nivel de satisfacción</strong> 
        p.mb-0 Evaluar el nivel de satisfacción con los servicios prestados.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0.tarjeta--boton.color-primario.br-white.p-3
        p <strong>Implementación de auditorías</strong> 
        p.mb-0 Implementar constantemente auditorías de los servicios.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0.tarjeta--boton.color-primario.br-white.p-3
        p <strong>Acciones de mejora</strong> 
        p.mb-0 Desarrollar acciones de mejora.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 1.2 Procedimiento del servicio      
    p Las organizaciones, ya sea empresa de producción, comercialización o servicios, establecen procesos de servicio al cliente con el objeto de establecer contacto con este y atender las peticiones, quejas, reclamos y las felicitaciones, pues no siempre los clientes llaman para interponer quejas. En muchas ocasiones, el cliente interno trabaja en brindar una buena atención en el engranaje organizacional, ya que activa cumpliendo el proceso de servicio de forma satisfactoria.
    p El procedimiento de servicio al cliente debe tener componentes como:      
    
    .row.mt-4.p-4.bg1(data-aos="zoom-in-up")
      .col-sm.mb-5.mb-sm-0.mt-4.p-4
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p Las organizaciones deben tener definidos y establecidos los medios y/o las herramientas disponibles para el proceso de servicio al cliente, generalmente, es correo electrónico, línea telefónica, formato para trámite de forma presencial. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            p Definir el tiempo de respuesta, para ello, se tiene establecido como tiempo 15 días hábiles.

          li 
            .lista-ol--cuadro__vineta
              span 3 
            .col-lg-12             
              p.mb-1 El formato debe contener información como: <br>
              P.mb-1 <strong>a.</strong> Fecha de recepción. <br> 
              P.mb-1 <strong>b.</strong> Datos del solicitante o peticionario. <br> 
              P.mb-1 <strong>c.</strong> Nombres y apellidos <br> 
              P.mb-1 <strong>d.</strong> Documento de identidad y tipo de documento <br> 
              P.mb-1 <strong>e.</strong> Datos de contacto, así: dirección de correspondencia, correo electrónico, números telefónicos.  <br> 
              P.mb-1 <strong>f.</strong> Espacio amplio y suficiente para que se registre la situación presentada o se haga la descripción de los hechos.   <br> 
              P <strong>g.</strong> Espacio para la firma del peticionario. Es importante tener en cuenta que, en ocasiones, se presentan solicitudes en anónimo. En ese caso, la empresa debe tener definido el procedimiento para dar la respuesta y, de hecho, no se diligencian los datos del peticionario y se debe registrar que es una petición anónima.<strong>(MinTIC, 2020)</strong>
      
    .row.mt-4.justify-content-center
      .col-lg-8.mt-4
        p.mt-4 En ocasiones, se encuentra que, pese al esfuerzo realizado por los clientes internos de la organización, el cliente externo manifiesta inconformidad y presenta una queja. Por ello, siempre se debe escuchar con amabilidad, respeto y cortesía, incluso, el cliente interno debe conservar la serenidad y el profesionalismo, pese a que en ocasiones el cliente externo se manifieste incomprendido e incómodo. 
        p En ningún momento, se debe entrar en discusiones. Se debe recibir de forma amable y atenta cualquier reclamación, esta debe ser valorada como oportunidad de mejora del servicio; asimismo, debe ser resuelta con prontitud y se debe escalar al área de la empresa correspondiente para que se actúe sobre el problema o la situación que genera la reclamación y, de esta manera, minimizar futuros requerimientos por situaciones iguales o similares.
      .col-lg-4(data-aos="zoom-out-left")
        img(src='@/assets/curso/tema1/img5.png' alt='AvatarTop')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
