<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .BGF00.px-5
      .row.mb-4
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/intro/img1.png" alt="")
        .col-lg-7
          .row.justify-content-center.mb-4
            .col-lg-2.mb-4.mb-md-0
              img.introduccion__icono(src="@/assets/curso/temas/intro/img2.svg" alt="")
            .col-lg-10
              p.mb-0 La nota técnica constituye un instrumento relacionado con la planeación, el seguimiento y la gestión de los acuerdos de voluntades entre los actores que participan en la prestación de servicios y tecnologías en salud. Su construcción requiere integrar información sobre la población objeto, sus necesidades, los servicios requeridos, las frecuencias de uso, los riesgos en salud y las condiciones establecidas en el marco normativo aplicable.
          p.mb-0 El análisis de las características de la población permite identificar necesidades y comportamientos relacionados con la utilización de los servicios de salud. Para ello, se consideran fuentes de información del sector, parámetros epidemiológicos y demográficos, así como elementos relacionados con la oferta y la demanda de servicios. Esta información constituye un insumo para establecer proyecciones y sustentar técnicamente los servicios y tecnologías que hacen parte de los acuerdos de voluntades.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En este contexto, el componente aborda los fundamentos necesarios para comprender la caracterización de la población, el análisis de información en salud, los principales lineamientos normativos relacionados con la contratación y las generalidades de la nota técnica. El desarrollo de estos contenidos proporciona las bases para interpretar la información requerida en su construcción y comprender su importancia como herramienta de planeación y seguimiento en los procesos de contratación en salud.
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
