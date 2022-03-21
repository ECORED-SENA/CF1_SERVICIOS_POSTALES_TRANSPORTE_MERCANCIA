<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mt-4
      .col-md-8
        <br><br>
        p <strong>El ser humano siempre busca satisfacer necesidades, con el transcurrir del tiempo, la forma de adquirir  productos para suplir dichas necesidades ha cambiado.</strong> En un comienzo, se debía desplazar a grandes distancias para adquirir productos;  luego, se crearon los centros de abastecimiento; y más adelante, dada la competencia entre quienes comercializaban productos o prestaban servicios, empezaron a ser segmentados por el cliente. Esta segmentación se generaba  según la atención que se recibiera y, con ello, se crea una nueva mirada para las ventas y la prestación del servicio, es lo que hoy se conoce como servicio al cliente.
        p La calidad es una disposición en la que las empresas trabajan constantemente, y está determinada por el cumplimiento y satisfacción de las expectativas de los consumidores o clientes. Dichos puntos determinan el grado de calidad del servicio. Por lo anterior, se invita a observar el siguiente video.
      .col-lg-4
        img(src='@/assets/curso/intro/img1.png' alt='AvatarTop')

    
    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aG6B7IrfdMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      figcaption Video: Leyenda del video
    
    p.mb-5 Para la elaboración de este componente, se abordaron varios autores conocidos en <strong>caracterización del servicio al cliente,</strong> de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de <strong>servicios postales y transporte de mercancías.</strong>


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
