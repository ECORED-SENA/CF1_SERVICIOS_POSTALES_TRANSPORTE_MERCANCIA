<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Tipos de cliente
    .row.mt-4.justify-content-center 
      .col-lg-9.mt-4
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            <br>
            h5 Conozca la definición de los tipos de cliente según el autor:
            <br>
            p Definiendo cliente como la persona, empresa o entidad que adquiere un producto o servicio y realiza un pago por este; también se puede definir como “empresa o persona que recibe un bien o producto y genera un pago por este”. <strong>(Robles, 2019).</strong>
            <br><br>
    
    .row.mt-4.justify-content-center
      .col-lg-6.mt-4
        p <strong>Los clientes son la razón de ser de las organizaciones, sin clientes, las organizaciones no tendrían a quién venderles los productos o servicios, de hecho, no percibirían ingresos y, por tanto, no tendrían éxito en el mercado.</strong>
      .col-lg-6.mt-4
        p Los clientes son muy diferentes entre sí y las empresas trabajan en conocerlos, sus características y necesidades. Todos los clientes determinan las compras según factores como las experiencias pasadas, gustos personales, necesidades a satisfacer, valores de los productos o servicios, poder adquisitivo, entre otros.

    p Sin embargo, todos los clientes poseen unas características que permiten agruparlos; la empresa comprende mejor las necesidades y direcciona de forma más acertada sus ofertas. A continuación, puede ver los tipos de clientes que se presentan en la actualidad:
    .row.mt-4.justify-content-center 
      .col-lg-10.mt-4
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')

          .tarjeta.bg2.p-3(x="10%" y="94%" numero="1")
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
    
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Cliente interno

    .row.justify-content-center.mt-4
      .col-lg-8.mt-4
        p Este cliente es el que está al interior de la organización, es parte activa en la producción o en la prestación de los servicios. Cada trabajador entrega un producto o servicio a otro trabajador y con ello toma la connotación de cliente interno, y es un proveedor de servicios a la organización, indiferente del grado de jerarquía que ocupe en la misma.
        p Uno de los principales agentes que puede generar valor al consumidor final es el cliente interno; la atención, el soporte al servicio que se presta, la empatía generan credibilidad, imagen y sostenibilidad a la organización. Partiendo de que el cliente interno realiza acciones de fidelización, se debe hacer seguimiento y  medir la satisfacción del personal y de los equipos de trabajo, analizando impresiones o percepciones, como capacidad de respuesta, productividad, comunicación y demás elementos relevantes que puedan afectar al cliente interno.
        p Se encuentran tres tipos de clientes internos:
      .col-lg-4
        img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
    #MapaGroup01.row.justify-content-center.p-4.mb-4
      .col-lg-2.col-sm-4.mb-4
        button.buttom.color-primario.p-3.w-100.position-relative(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
          .row.justify-content-center
            .col-lg-12.col-sm-6.mb-4
              img(src='@/assets/curso/tema2/img4.png')
      .col-lg-2.col-sm-4.mb-4
        button.buttom.color-primario.p-3.w-100.position-relative(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='true' aria-controls='.multi-collapse2')
          .row.justify-content-center
            .col-lg-12.col-sm-6.mb-4
              img(src='@/assets/curso/tema2/img5.png')
      .col-lg-2.col-sm-4.mb-4
        button.buttom.color-primario.p-3.w-100.position-relative(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='true' aria-controls='.multi-collapse3')
          .row.justify-content-center
            .col-lg-12.col-sm-6.mb-4
              img(src='@/assets/curso/tema2/img6.png')
      
      .col-lg-12.justify-content-center
        .multi-collapse1.collapse.show(data-bs-parent='#MapaGroup01')
          .row.mb-4.justify-content-center
            .col-lg-4
              .titulo-sexto.color-secundario
                p Son los colaboradores de la organización que tienen cargos directivos.
      .col-lg-12.justify-content-center
        .multi-collapse2.collapse(data-bs-parent='#MapaGroup01')
          .row.mb-4.justify-content-center
            .col-lg-4
              .titulo-sexto.color-primario
                p Son los clientes internos que se encargan de la producción de cada uno de los productos o la prestación del servicio, tienen contacto directo con el cliente externo, por ejemplo: vendedores, técnicos, electricistas, transportadores, etc.
      .col-lg-12.justify-content-center
        .multi-collapse3.collapse(data-bs-parent='#MapaGroup01')
          .row.mb-4.justify-content-center
            .col-lg-4
              .titulo-sexto.color-acento-contenido
                p Son los clientes encargados del direccionamiento de las personas  y de las operaciones en la organización. 


      


    p.mt-4 Para las organizaciones es significativo tener claridad sobre las funciones que desarrolla su cliente interno dentro del proceso productivo o de prestación del servicio, así como tener claro las necesidades y prioridades que lo mueven, haciéndolo sentir importante dentro del engranaje de la organización.  
    SlyderD.mb-5(:datos="datosSlyder")
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center.p-2
        .col-1
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/ico1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p Para profundizar los conocimientos, se invita a revisar el material complementario, donde se puede visualizar el video <strong>“Cómo derretir al cliente interno”.</strong>
            .col-sm-auto
              a.boton.color-acento-acento-botones.texto-blanco(:href="('https://www.youtube.com/embed/2Wsop8Jnd3w')" target="_blank")
                span Ver más
                i.fas.fa-link

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Cliente externo
    p Este término hace referencia a personas u organizaciones que adquieren, pagan y utilizan productos o servicios que tiene en el mercado una empresa o persona. Cuando una organización o persona crea un producto o servicio, busca satisfacer necesidades de los clientes externos, es importante tener en cuenta que los clientes externos son el origen o la fuente de los ingresos de las organizaciones, les  permiten el desarrollo, avance y trabajo, y esto es posible  a través de las compras, que generan  estabilidad económica a la organización o a la persona.
    p Se tienen grupos de clientes externos, estos son: 
    .row.justify-content-center.mt-4.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/sl1.png')})`}")
              img(src="@/assets/curso/tema2/sl1.png")            
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.ps(src="@/assets/curso/tema2/ico1.svg")
              p.mb-0 <strong>Clientes proveedores</strong> 
              p Son los que proveen a la empresa los productos y servicios para que la empresa desarrolle la actividad económica

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.p-4.p-xl-5
              img.ps(src="@/assets/curso/tema2/ico2.svg")
              p.mb-0 <strong>Clientes propiamente dichos</strong> 
              p Es el grupo que adquiere los productos o servicios de la organización, pagan por estos y es el grupo al cual la empresa busca satisfacer las necesidades.
            .tarjeta-slide__contenido(:style="{'background-image': `url(${require('@/assets/curso/tema2/sl2.png')})`}")
              img(src="@/assets/curso/tema2/sl2.png")
      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.izquierda.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.p-4.p-xl-5
              img.ps(src="@/assets/curso/tema2/ico3.svg")
              p.mb-0 <strong>Entorno social</strong> 
              p Es el entorno de la organización, es decir, la sociedad que está rodeando la empresa.
            .tarjeta-slide__contenido(:style="{'background-image': `url(${require('@/assets/curso/tema2/sl3.png')})`}")
              img(src="@/assets/curso/tema2/sl3.png")
    p Brindar atención al cliente de un modo eficaz es sencillamente saber cómo acercarse a cada uno de ellos, lograr su satisfacción con la atención que se les brinda, con el objetivo que no se presenten quejas y que se colmen las expectativas planteadas por el cliente.

</template>

<script>
export default {
  name: 'Muestras',
  data: () => ({
    mostrarIndicador: true,
    indicadorImagenZoom: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    modal1: false,
    modal2: false,

    datosSlyder: [
      {
        titulo: 'Cliente interno operativo',
        texto: 'Producción o prestación del servicio',
        imagen: require('@/assets/curso/tema2/fon1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cliente interno comercial',
        texto: 'Relacionados con todos los grupos de trabajadores.',
        imagen: require('@/assets/curso/tema2/fon2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cliente interno ejecutivo',
        texto: 'Relacionados con los clientes externos.',
        imagen: require('@/assets/curso/tema2/fon3.png'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
