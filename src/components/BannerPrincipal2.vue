<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .imagen_flotante_1: img(src='@/assets/curso/banner/img01.svg')
        .imagen_flotante_2: img(src='@/assets/curso/banner/img02.svg')
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1.text-white Ver más
            i.fas.fa-angle-right.text-white

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          .imagen_flotante_3: img(src='@/assets/curso/banner/img03.svg')
          //- .imagen_flotante_4: img(src='@/assets/curso/float4.svg')
          //- .imagen_flotante_5: img(src='@/assets/curso/float5.svg')
          img(:src="globalData.imagenBannerPrincipal")
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    z-index: 1000
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    z-index: 1000
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative
.imagen_flotante
  &_1
    animation: float 3s ease-out infinite alternate
    position: absolute
    width: 240px
    top: 10%
    left: -10%
  &_2
    animation: float 2s ease-out infinite alternate
    animation-delay: 1s
    position: absolute
    transform-origin: top
    width: 130px
    left: 17%
    bottom: -10%
  &_3
    animation: float 2s ease-out infinite alternate
    animation-delay: 0.8s
    position: absolute
    transform-origin: top
    width: 220px
    right: -30%
    top: 20%
  &_4
    animation: float 2s ease-out infinite alternate
    animation-delay: 1.5s
    position: absolute
    transform-origin: top
    width: 52px
    left: 78%
    top: 8%
  &_5
    animation: float 2s ease-out infinite alternate
    animation-delay: 0.8s reverse
    position: absolute
    transform-origin: top
    width: 42px
    left: 90%
    bottom: 15%

@keyframes float
  0%
    transform: translateY(0)
  100%
    transform: translateY(-15px)
</style>
