<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-down")
      .titulo-principal__numero
        span.text-white 3
      h1 Estados del servicio al cliente frente a los servicios postales
    p Actualmente, las organizaciones tienen un gran compromiso con el proceso de servicio al cliente, incluso se ha instituido como política de servicio al cliente. El objetivo de esta política es garantizar la satisfacción de los clientes y que estos sean clientes constantes con la empresa, es decir, que sean clientes leales. Dentro de los estados del servicio al cliente frente a los servicios postales, se enumeran las premisas que la empresa prestadora del servicio debe garantizar al cliente:
    .row.mt-4.justify-content-center(data-aos="zoom-in-left") 
      .col-lg-6.mt-4
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img1.svg', alt='Texto que describa la imagen')

          .tarjeta.bg2.p-3(x="21%" y="31%" numero="")
            p Debe asumir el pago de indemnizaciones por pérdidas y averías de los objetos postales o paquetes
          .tarjeta.bg2.p-3(x="50%" y="20%" numero="")
            p Los objetos postales son propiedad de quién los envía, es decir, del remitente, hasta el momento de la entrega del objeto.
          .tarjeta.bg2.p-3(x="77%" y="33%" numero="")
            p La empresa prestadora del servicio postal o encomienda debe guardar secreto e inviolabilidad del objeto postal o paquete.
          .tarjeta.bg2.p-3(x="84%" y="64%" numero="")
            p Debe garantizar el respeto a la intimidad y el manejo de la información en las bases de datos.
          .tarjeta.bg2.p-3(x="65%" y="87%" numero="")
            p Debe procurar la neutralidad y confidencialidad de los servicios postales.
          .tarjeta.bg2.p-3(x="33%" y="89%" numero="")
            p Debe garantizar la igualdad de trato.
          .tarjeta.bg2.p-3(x="15%" y="64%" numero="")
            p Debe divulgar y dar a conocer las condiciones del servicio que ofrecen, en cuanto a frecuencias de rutas.
         
    p Las empresas de servicios postales y transporte de paquetes deben trabajar para garantizar los derechos de los destinatarios, como son:
    .row.mt-4.justify-content-center(data-aos="zoom-in-left") 
      .col-lg-6.mt-4
        img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
    #t_3_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="zoom-out")
      h2 3.1 Protocolos de Servicio  
    .row.mt-4.justify-content-center(data-aos="zoom-out")
      .col-5
        p <strong>Es el documento que las organizaciones tienen establecido para la prestación del servicio al cliente, en él, se registran las actuaciones de los empleados o colaboradores en lo referente al proceso de atención o comercialización.</strong>
      .col-7
        p Los protocolos son las guías u orientaciones que describen detalladamente el proceso o la forma en que un colaborador debe actuar con el cliente al momento de realizar contacto, dicho protocolo se enmarca por los criterios y la visión de la organización respecto al buen servicio.
        p A continuación, puede observar un video, donde se explica el protocolo de atención al cliente:       
    figure.mb-5(data-aos="zoom-out-up")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XYAVlOvXrnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .row.mt-4.justify-content-center
      .col-lg-6.bg4.p-4.aa(data-aos="zoom-out-up") 
        .col-12.p-4
          p Los protocolos de servicio al cliente son documentos controlados donde la organización registra el paso a paso que se debe seguir al realizar atención al cliente; el documento en su encabezado debe tener información como.
          .row.mt-4.justify-content-center           
            .tarjeta.fon1.p-4.mb-5
              SlyderF
                .row
                  .col-md-12.mb-4.mb-md-0.p-5
                    p.mb-0 <strong>Definición</strong>
                    p Este documento registra el protocolo para la atención y el servicio al cliente, es la guía para que los colaboradores de la organización conozcan las directrices establecidas para el servicio y la óptima atención al cliente.
                .row.p-4
                  .col-md-12.mb-4.mb-md-0
                    p.mb-0 <strong>Título</strong>
                    p Protocolo para atención y servicio al cliente.
                .row.p-4
                  .col-md-12.mb-4.mb-md-0
                    p.mb-0 <strong>Política</strong>
                    p Los clientes accederán de forma rápida y precisa a la información y obtendrán el acompañamiento que necesiten por parte de la organización en el proceso que soliciten.                    



      .col-lg-6.bg3.p-4.bb(data-aos="zoom-out-left")
        .col-12.p-4
          p Los protocolos para atención presencial contienen el accionar del asesor o persona que atiende el cliente, en aspectos como:
          <br>
          .row.mt-4.justify-content-center           
            .tarjeta.fon2.p-4.mb-5.mt-2
              SlyderF
                .row
                  .col-md-12.mb-4.mb-md-0.p-5
                    p.mb-0 <strong>Saludo</strong>
                    p Se describe la forma en que se debe realizar el saludo, teniendo presente la actitud del colaborador con el cliente y el acercamiento haciendo uso del guion establecido por la organización; hacer contacto visual con el cliente.
                .row.p-4
                  .col-md-12.mb-4.mb-md-0
                    p Comportamiento y actitudes durante la atención.
                .row.p-4
                  .col-md-12.mb-4.mb-md-0
                    p Despedida, haciendo uso del protocolo y del guion establecido para el cierre del contacto.
    p.mt-4 También especifica el trato personal con el cliente, las expresiones faciales, postura corporal, presentación personal, comportamientos en los diferentes espacios de la organización y todas las demás acciones que se enmarcan en el proceso de atención.

    .row.mt-4.p-4.bg1(data-aos="zoom-out-left")
      .col-lg-1
      .col-lg-3
        img(src='@/assets/curso/tema3/img3.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-7
        #t_9_9.titulo-segundo.color-acento-contenido.mt-4
          h2 Etiqueta Telefónica 
        p Los protocolos para atención telefónica son las orientaciones o reglas que se deben seguir para atender una llamada; la etiqueta telefónica permite disponer de las orientaciones adecuadas para atender de forma más amable y oportuna las llamadas, así como lograr más eficacia al momento de realizar comunicaciones con los clientes. Este protocolo también garantiza que, al tener contacto con el cliente desde cualquier área o dependencia de la organización, este va a ser atendido y orientado de la misma manera.
        .col-sm-auto
          a.boton.color-acento-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=egkOLUiEdx4')" target="_blank")
            span Ver más
            i.fas.fa-link
    p.mt-4 A continuación, se encuentra ejemplo de contenido de un protocolo de atención al cliente para atención telefónica.
    p <strong> Un protocolo de servicio al cliente para llamada telefónica contiene orientaciones en aspectos como:</strong>
    .tarjeta.bg1.p-4.mb-5(data-aos="zoom-out-right")
      SlyderA
        .row.p-4
          .col-md-12.mb-4.mb-md-0.p-4
            ol.lista-ol--cuadro.lista-ol--separador.p-4            
              li 
                p <strong>a.</strong> El teléfono se debe responder al sonar entre una y tres veces.
              li
                p <strong>b.</strong> La forma de saludar al interlocutor.
        .row.p-4
          .col-md-12.mb-4.mb-md-0.p-4
            ol.lista-ol--cuadro.lista-ol--separador.p-4           
              li 
                p <strong>c.</strong> La presentación de quien responde la llamada.
              li
                p <strong>d.</strong> Interrogar al cliente sobre la situación en la que se le puede ayudar.
        .row.p-4
          .col-md-12.mb-4.mb-md-0.p-4
            ol.lista-ol--cuadro.lista-ol--separador.p-4           
              li 
                p <strong>e.</strong> Siempre se debe tratar al cliente de usted.
              li
                p <strong>f.</strong> Si se pone al cliente a esperar en la línea, se le debe informar cuánto tiempo promedio debe esperar.
        .row.p-4
          .col-md-12.mb-4.mb-md-0.p-4
            ol.lista-ol--cuadro.lista-ol--separador.p-4           
              li 
                p <strong>g.</strong> Informar claramente al cliente por qué se va a dejar en espera, es decir, el motivo de la espera..
              li
                p <strong>h.</strong> En caso de que el cliente requiera una persona que no está presente en la compañía, se debe ofrecer la ayuda si es posible, de lo contrario, tomar nota del mensaje o transferir la llamada a quien pueda prestar ayuda.
        .row.p-4
          .col-md-12.mb-4.mb-md-0.p-4
            ol.lista-ol--cuadro.lista-ol--separador.p-4           
              li 
                p <strong>i.</strong> La llamada se debe responder en un tono adecuado y con buena vocalización.
              li
                p <strong>j.</strong> Si la llamada se transfiere a otra persona, se debe informar a quien la recibe quién llama y cuál es el motivo de la llamada.
        .row.p-4
          .col-md-12.mb-4.mb-md-0.p-4
            ol.lista-ol--cuadro.lista-ol--separador.p-4           
              li 
                p <strong>k.</strong> Para terminar la llamada, agradecer al cliente por la llamada y que se espera atenderle nuevamente.
              li
                p <strong>l.</strong> Esperar que el cliente termine la llamada y no cortarla si aún está hablando.
    #t_3_2.titulo-segundo.color-acento-contenido.mt-4(data-aos="zoom-out-right")
      h2 3.2 Triángulo del servicio
    P El triángulo del servicio es una representación gráfica compuesta por elementos que permiten una mejor gestión de las organizaciones y la garantía de satisfacción del cliente; los elementos que integran esta representación son 4 y el principal es el cliente. Los elementos que integran la representación gráfica son:
    .row.mt-4.justify-content-center 
      .col-lg-10.mt-4(data-aos="zoom-in-left")
        img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')
    <br>
    .tarjeta.color-primario.p-3.mb-5.mt-4
      .row.justify-content-around.align-items-center.p-2
        .col-1
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/ico1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p Los anteriores elementos deben trabajar de forma colaborativa y de forma constructiva. Todo procedimiento de servicio al cliente se debe diseñar teniendo como base los clientes.
            .col-sm-auto
              a.boton.color-acento-acento-botones.texto-blanco(:href="('https://repository.unilibre.edu.co/bitstream/handle/10901/20095/PRINCIPALES%20EXPONENTES%20Y%20CONCEPTOS.pdf?sequence=1&isAllowed=yhttps://www.freepik.es/fotos-premium/todos-somos-rompecabezas-importante-trabajo_2047292.htm#page=1&query=grupos%20de%20trabajo&position=10&from_view=search')" target="_blank")
                span Ver más
                i.fas.fa-file-download
    #t_3_3.titulo-segundo.color-acento-contenido.mt-4(data-aos="zoom-in-left")
      h2 3.3 Momentos de verdad
    p Conozca algunas definiciones:
    p <strong>Según Jan Carlzon.</strong> Como afirma el autor en su libro “El momento de la verdad”, una empresa orientada al producto puede ser reemplazada fácilmente por un nuevo competidor que ofrece un producto similar/igual a un costo menor. (Carlzon, 1996)
    .row.mt-4
      .col-md-4(data-aos="zoom-out-right")
        img(src='@/assets/curso/tema3/img5.png' alt='AvatarTop')
      .col-lg-8
        <br><br>
        p El autor Jan Carlzon, en el libro <strong>“Momento de la verdad”</strong>, refiere una forma distinta de gestionar organizaciones, Jan Carlzon invierte la pirámide jerárquica que tradicionalmente establecen las organizaciones y en la cual los directivos y ejecutivos ocupan la cima y quienes tienen contacto directo con los clientes ocupan la base piramidal.

        p Debido a los cambios y crecimiento de los mercados y al incremento de la competencia, es primordial que las organizaciones se concentren en el cliente y no en el producto; de esta manera, pueden diseñar productos dirigidos a satisfacer las necesidades de los clientes. Una empresa u organización orientada al cliente genera mayores oportunidades para fidelizar al cliente y permite la generación de ingresos para la sostenibilidad y permanencia en el mercado.   (Carlzon, 1996)
    p Los momentos de verdad, en sí, no generan una valoración positiva o negativa, lo que genera esta valoración es el manejo que se le dé al acercamiento con el cliente y que convierta dicho encuentro en una experiencia positiva. La organización debe anticiparse a la identificación y a la generación de posibles momentos de verdad, y dar el manejo, logrando experiencias positivas al cliente.  
    .row.mt-4
      .col-lg-12.p-4
        .cajon.color-primario.p-4.mb-4(data-aos="zoom-out-right")
          .col-lg-12.p-4
            p.mb-0 <strong>Reflexione sobre lo siguiente</strong>
            p Juan debe enviar un sobre con documentos desde la ciudad de Medellín a la ciudad de Bogotá. Los documentos deben estar en manos del destinatario antes de 24 horas. Juan se desplaza a la empresa <strong>Entrega Inmediata</strong>, que es una empresa de servicios postales y paquetería ubicada cerca de su lugar de trabajo, pero, al llegar a las oficinas de la empresa, encuentra que no tienen parqueadero disponible, los 4 parqueaderos asignados a sus clientes ya están ocupados y no puede ocupar los parqueaderos disponibles, el servicio de seguridad no se lo permite. Se ve en la obligación de desplazarse a la empresa <strong>Entrega Hora Exacta</strong> y, pese a que tampoco había parqueadero disponible asignado a la empresa, el servicio de seguridad le permitió ubicar el vehículo por un periodo de tiempo en otro parqueadero. Al llegar a la empresa, había varios clientes esperando atención, pero la empresa tiene habilitada una ventanilla de recepción de envíos catalogados como urgentes; este servicio tiene un valor un poco más alto que el habitual, pero garantiza la entrega oportuna. Juan tomó este servicio y agradeció la oportunidad. <strong>¿Cree usted que Juan obtuvo momentos de verdad?</strong>
    
    .row.mt-4.justify-content-center
      .col-6
        p <strong>El portafolio de servicios es una herramienta de la que dispone la empresa para dar a conocer los productos o servicios. </strong>
      .col-6
        p Se puede disponer de esta herramienta en formato impreso o en digital. En el caso de las empresas de envíos postales y mercancías, los portafolios de servicios contienen información como:
    .row.mt-4.justify-content-center(data-aos="zoom-out-down")
      .col-lg-10
        img(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
    <br>
    TabsB.color-acento-contenido.mb-5.mt-4(data-aos="zoom-out-down")
      .py-4.py-md-5(titulo="Trazabilidad" :icono="require('@/assets/curso/tema3/ico2.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p <strong>Trazabilidad</strong>
            p Las empresas de servicio o de producción deben estructurar procesos de trazabilidad, esto les permite hacer un rastreo que va desde la compra de materias primas e insumos, hasta la producción y la entrega; tiene como objetivo controlar todos y cada uno de los procesos de producción, asegurar la calidad y el óptimo estado de los productos, desde el origen hasta entregarlo al consumidor final. En las empresas de servicios postales, la trazabilidad va desde la recepción del paquete o mercancía por parte del remitente, hasta la entrega al destinatario.
            p Se tienen dos tipos de trazabilidad: la trazabilidad interna y la trazabilidad externa. Cuando se habla de la trazabilidad interna, se hace referencia al registro que deja un producto cuando avanza por los procesos internos de la organización, lo que incluye las máquinas utilizadas, turnos, almacenajes, disposición para carga y demás procesos. Por consiguiente, la trazabilidad externa son los procesos implementados para obtener información entre la cadena de abastecimiento o suministro.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Canales de distribución" :icono="require('@/assets/curso/tema3/ico3.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p <strong>Canales de distribución</strong>
            p Ahora, como elemento integral del proceso de servicios postales y transporte de mercancía, se abordan los canales de distribución, que representan la  estructura organizacional que presta un servicio desde un lugar de origen, donde se encuentra el remitente, hasta un lugar destino, donde se encuentra el destinatario. 
            p Los canales de distribución satisfacen necesidades específicas de los clientes en el traslado de envíos postales, paquetes y mercancías; para ello, realizan un proceso interno de distribución física. La distribución física es la manera en que se trasladan o mueven los productos por los canales de distribución, que son: almacenamiento, empaque, manejo de materiales, procesamiento de pedidos, transporte y control de inventarios.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')
    p Las solicitudes que las organizaciones o personas realizan a las empresas de servicios postales y transporte de mercancías son las correspondientes al traslado de paquetes y de mercancías a través del uso de los recursos que la empresa tiene disponibles para la prestación del servicio y que este se haga dentro de parámetros de confiabilidad. Por lo tanto, se deben realizar controles en el proceso; estos controles los aplican tanto la empresa remitente como la prestadora del servicio. Esto permite conocer algunos de los controles disponibles:    
    .row.mt-4(data-aos="zoom-out-down")
      .col-sm.mb-5.mb-sm-0.mt-4
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Registro y seguimiento de cada servicio.


          li 
            .lista-ol--cuadro__vineta
              span 2
            | Uso del software de la empresa que provee el servicio para hacer seguimiento al envió.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Revisión de reportes del seguimiento y aplicación de controles a las inconformidades.
    .row.mt-4.justify-content-center(data-aos="zoom-out-left")
        .cajon.color-primario.p-4.mb-4
          .row.mt-4.justify-content-center
            .col-lg-1
            .col-lg-2
              img(src='@/assets/curso/tema3/img9.svg', alt='Texto que describa la imagen')
            .col-lg-8
              p Las entregas de los envíos postales o de mercancías se hacen según el protocolo y los tiempos establecidos para ello. Sin embargo, las empresas ofrecen algunos servicios que dan priorización, uno de ellos se llama servicio de mensajería expresa, es un servicio postal urgente, la prestación de este servicio exige la aplicación de unas condiciones diferentes y especiales en la recepción, recolección, clasificación, transporte y entrega; es importante considerar que este servicio es para envíos postales o mercancías de hasta máximo 5 kilos. <strong>(Superintendencia de Industria y Comercio, s. f.)</strong>
            .col-lg-1                      
    p Según los servicios de mensajería expresa, deben cumplir con las siguientes características: 
    .row.mt-4(data-aos="zoom-out-left")
      .col-sm.mb-5.mb-sm-0.mt-4
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Registro individual 


          li 
            .lista-ol--cuadro__vineta
              span 2
            | Puede ser recogido a domicilio

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Tiempo de entrega
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Prueba de entrega
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Rastre          

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
