<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Estados del servicio al cliente frente a los servicios postales
    p Actualmente, las organizaciones tienen un gran compromiso con el proceso de servicio al cliente, incluso se ha instituido como política de servicio al cliente. El objetivo de esta política es garantizar la satisfacción de los clientes y que estos sean clientes constantes con la empresa, es decir, que sean clientes leales. Dentro de los estados del servicio al cliente frente a los servicios postales, se enumeran las premisas que la empresa prestadora del servicio debe garantizar al cliente:
    .row.mt-4.justify-content-center 
      .col-lg-6.mt-4
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img1.svg', alt='Texto que describa la imagen')

          .tarjeta.bg2.p-3(x="10%" y="94%" numero="")
            p.mb-0 <strong>Cliente rotativo</strong>
            p Es aquel que, con un alto porcentaje dentro de las relaciones comerciales, puede llegar a tener la rotación generalmente marcada o definida por dificultades en los cumplimientos del servicio.
          .tarjeta.bg2.p-3(x="8%" y="70%" numero="2")
            p.mb-0 <strong>Cliente fiel</strong>
            p Están definidos por el tiempo de relación comercial, son aportantes importantes a los ingresos de la compañía y manifiestan satisfacción en la atención y el servicio al cliente.
          .tarjeta.bg2.p-3(x="10%" y="50%" numero="3")
            p.mb-0 <strong>Cliente nuevo</strong>
            p Podemos decir que son clientes que presentan expectativas por el producto o servicio, han recibido una buena atención al cliente y las expectativas de servicio son importantes.
          .tarjeta.bg2.p-3(x="0%" y="20%" numero="4")
            p.mb-0 <strong>Cliente impulsivo</strong>
            p Se caracteriza por ser un comprador o consumidor impulsivo, es impaciente; con este tipo de clientes, se debe identificar de manera pronta la necesidad, es claro que compra el producto si es lo que necesita o busca.
          .tarjeta.bg2.p-3(x="20%" y="1%" numero="5")
            p.mb-0 <strong>Cliente indeciso</strong>
            p Para este cliente tomar la decisión de compra no es fácil, es importante prestar asesoría y acompañarlo en la toma de la decisión.
          .tarjeta.bg2.p-3(x="38%" y="28%" numero="6")
            p.mb-0 <strong>Cliente negociador</strong>
            p Es un tipo de cliente muy común, busca aprovechar las oportunidades, toma decisiones de compra si reconoce en ella un beneficio.
          .tarjeta.bg2.p-3(x="80%" y="1%" numero="7")
            p.mb-0 <strong>Cliente silencioso</strong>
            p Tiene como característica principal que escucha mucho y con atención, además sus intervenciones son pocas, muestra interés por lo que se le ofrece.
          .tarjeta.bg2.p-3(x="100%" y="25%" numero="8")
            p.mb-0 <strong>Cliente apóstol o embajador</strong>
            p Este tipo de clientes muestra gran interés por la marca; un alto porcentaje de este tipo de clientes comparte la experiencia con el producto o servicio.
          .tarjeta.bg2.p-3(x="90%" y="45%" numero="9")
            p.mb-0 <strong>Cliente informado</strong>
            p Cliente que está muy atento a todos los detalles, conoce sobre el producto o servicio, hace preguntas y presenta argumentos; se le debe prestar una atención al cliente precisa y objetiva, además de tener claro los compromisos organizacionales que se pueden adquirir.
          .tarjeta.bg2.p-3(x="97%" y="70%" numero="10")
            p.mb-0 <strong>Cliente discutidor</strong>
            p Tipo de cliente que se caracteriza por que, desde el acercamiento a la persona u organización, está predispuesto a discutir o a presentar quejas, se considera superior para tratar con las personas o con cualquier agente de atención al cliente, en el trato se le debe demostrar empatía y paciencia.
          .tarjeta.bg2.p-3(x="90%" y="90%" numero="11")
            p.mb-0 <strong>Cliente leal</strong>
            p Cliente que es muy comprometido, crea un impacto positivo con la imagen de la empresa y la multiplica.
    p Las empresas de servicios postales y transporte de paquetes deben trabajar para garantizar los derechos de los destinatarios, como son:
    .row.mt-4.justify-content-center 
      .col-lg-6.mt-4
        img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
