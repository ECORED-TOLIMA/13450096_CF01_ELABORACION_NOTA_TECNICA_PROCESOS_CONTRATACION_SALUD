<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente aborda los fundamentos para la elaboración de una nota técnica en los procesos de contratación en salud, partiendo de la caracterización de la población objeto, sus regímenes de afiliación, determinantes, necesidades, parámetros epidemiológicos y población susceptible, así como de la identificación y codificación de los servicios y tecnologías requeridos. También desarrolla el análisis de las fuentes de información, las frecuencias de uso, la oferta y demanda de servicios y la validación de los soportes de atención. Además, presenta los principales elementos de la contratación en salud, su marco normativo, las modalidades de pago y el RIPS, junto con aspectos relacionados con la calidad, la habilitación, la gestión del riesgo, la seguridad del paciente y las RIAS. Finalmente, aborda los manuales tarifarios, las glosas y los elementos generales de la nota técnica, incluyendo los servicios y tecnologías, las frecuencias de uso, el riesgo primario y el riesgo técnico.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="En la síntesis se presentan los seis ejes temáticos: caracterización de la población, análisis de información en salud, contratación, calidad y atención, tarifas y glosas, y elementos generales de la nota técnica.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
