<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El servicio y la atención al cliente son los procesos que establece la organización y que están direccionados a lograr la satisfacción total de las necesidades y requerimientos de los clientes. Estos son vitales para que la organización permanezca en el mercado. Es por ello que las empresas dirigen esfuerzos para conocer las necesidades de los clientes, tanto los actuales como los prospectos de clientes, y buscan satisfacer en calidad, oportunidad, eficiencia y servicio.

    p.mb-5 Para implementar y sostener la imagen de la organización, es necesario una excelente atención, trabajar constantemente en mejorar, enfocados en la calidad, atención, eficiencia, oportunidad y todas las demás estrategias que permitan la conservación de los clientes y consecución de clientes nuevos, así como mayor participación en el mercado para ser más rentables y permanecer en el tiempo.

    .row.justify-content-center
      .col-lg-12
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")



</template>

<script>
export default {
  name: 'Sintesis',
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
