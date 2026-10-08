<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elementos generales de la nota técnica

    .row.align-items-stretch.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure.h-100
          img.tema6-apertura__imagen(src="@/assets/curso/temas/t6/img1.png" alt="")
      .col-lg-8
        p La nota técnica integra información relacionada con la población objeto, los servicios y tecnologías en salud, las frecuencias de uso, los costos y los riesgos asociados a la atención. Su construcción requiere analizar las características y necesidades de la población, la información histórica de utilización y las condiciones establecidas en el acuerdo de voluntades.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 De acuerdo con el #[strong Decreto 441 de 2022], la nota técnica constituye una herramienta de transparencia y eficiencia entre las partes que suscriben un acuerdo de voluntades. En ella se detallan los servicios y tecnologías de salud, las frecuencias de uso estimadas, los costos individuales y el valor total correspondiente a la población o grupo de riesgo, considerando el periodo de duración del acuerdo y la modalidad de pago pactada.
        .row.align-items-center
          .col-lg-2
            img.tema6-icono.d-none.d-lg-block(src="@/assets/curso/temas/t6/img2.svg" alt="")
          .col-lg-10
            p.mb-0 La información que hace parte de la nota técnica se construye a partir de los análisis desarrollados previamente. La caracterización de la población permite establecer quiénes hacen parte de la población objeto y cuáles son sus necesidades; las fuentes de información y los registros de atención permiten analizar cómo se utilizan los servicios y tecnologías; y las condiciones de contratación, las tarifas y los riesgos permiten establecer los valores y condiciones que deben considerarse en las proyecciones.

    p.mb-4 Por esta razón, la nota técnica no corresponde únicamente a un cálculo económico. Su construcción articula información poblacional, epidemiológica, asistencial y financiera para sustentar las estimaciones que hacen parte del acuerdo de voluntades.
    p.mb-4 En este apartado se abordarán tres elementos fundamentales:

    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t6/img3.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center Características y elementos
              p.mb-0.text-center Permiten comprender la finalidad de la nota técnica y la información que debe integrar.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t6/img4.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center Servicios, tecnologías y frecuencias de uso
              p.mb-0.text-center Relacionan la población susceptible con las atenciones que pueden requerirse y la frecuencia esperada de utilización.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t6/img5.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center Riesgo primario y riesgo técnico
              p.mb-0.text-center Permiten reconocer los riesgos asociados a las condiciones de salud de la población y a la utilización y prestación de los servicios y tecnologías.

    p.mb-0 De esta manera, los elementos generales de la nota técnica permiten integrar los contenidos desarrollados durante el componente y comprender cómo la información de la población, los servicios, las frecuencias, los costos y los riesgos se relaciona con la planeación y el seguimiento de los acuerdos de voluntades.

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Características y elementos

    p.mb-4 La nota técnica es una herramienta que permite a las partes de un acuerdo de voluntades planear los procesos de atención, estimar los recursos necesarios para garantizar la prestación de los servicios y tecnologías en salud y realizar el seguimiento de la ejecución del acuerdo.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t6/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con el #[strong Decreto 441 de 2022], la nota técnica constituye una herramienta de transparencia y eficiencia entre las partes que suscriben el acuerdo de voluntades. En ella se detallan los servicios y tecnologías de salud, las frecuencias de uso estimadas, los costos individuales y el valor total correspondiente a la población o grupo de riesgo, considerando el periodo de duración pactado y las situaciones que puedan presentarse durante la ejecución del acuerdo.

    p.mb-4 Por sus características, la nota técnica debe permitir relacionar la información de la población con los servicios y tecnologías requeridos y con los valores económicos asociados. Para ello, debe considerar, entre otros, los siguientes elementos:

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t6/img7.png" alt="")
      .col-lg-7
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Población a cargo") Corresponde a la población objeto del acuerdo y constituye la base para realizar las estimaciones.
          p.mb-0(numero="2" titulo="Servicios y tecnologías en salud") Identifica las atenciones que hacen parte del acuerdo de voluntades.
          p.mb-0(numero="3" titulo="Frecuencia de uso estimada") Establece la cantidad esperada de utilización de cada servicio o tecnología durante el periodo definido.
          p.mb-0(numero="4" titulo="Costos individuales") Relaciona cada servicio o tecnología con el valor económico correspondiente.
          p.mb-0(numero="5" titulo="Valor total") Integra los valores estimados para el conjunto de servicios y tecnologías incluidos.
          p.mb-0(numero="6" titulo="Periodo de contratación") Delimita el tiempo durante el cual se realizan las proyecciones y se ejecuta el acuerdo.
          p.mb-0(numero="7" titulo="Población o grupo de riesgo") Permite realizar estimaciones diferenciadas cuando las características de la población o sus condiciones de salud así lo requieren.

    p.mb-4 Estos elementos no deben analizarse de manera independiente. La nota técnica relaciona la población, los servicios y tecnologías, las frecuencias de uso y los valores económicos para sustentar las condiciones del acuerdo de voluntades. Por ejemplo, la estimación de una frecuencia de uso para un procedimiento debe relacionarse con la población susceptible de recibirlo y con el valor establecido para dicho procedimiento.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Asimismo, las frecuencias de uso pueden expresarse mediante estimaciones que consideren intervalos de frecuencias esperados, de acuerdo con la metodología utilizada para la construcción de la nota técnica. El insumo señala como referencia intervalos de confianza entre el 90 % y el 99 %.

    p.mb-4 En este sentido, una nota técnica se caracteriza por ser:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t6/img8.svg" alt="")
        h5.text-center Técnica
        p.mb-5.text-center Se fundamenta en información poblacional, epidemiológica, asistencial y económica.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t6/img9.svg" alt="")
        h5.text-center Estimativa
        p.mb-5.text-center Utiliza información disponible para proyectar frecuencias, costos y valores esperados.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t6/img10.svg" alt="")
        h5.text-center Detallada
        p.mb-5.text-center Relaciona los servicios y tecnologías con sus frecuencias y valores.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t6/img11.svg" alt="")
        h5.text-center Relacionada con la población
        p.mb-5.text-center Las estimaciones corresponden a una población o grupo de riesgo determinado.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t6/img12.svg" alt="")
        h5.text-center Vinculada al acuerdo de voluntades
        p.mb-5.text-center Sus elementos deben guardar correspondencia con las condiciones y modalidad de pago pactadas.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t6/img13.svg" alt="")
        h5.text-center Útil para el seguimiento
        p.mb-5.text-center Permite comparar el comportamiento observado durante la ejecución con las estimaciones realizadas

    p.mb-0 Así, la nota técnica puede entenderse como un instrumento que integra información para sustentar la planeación económica y asistencial del acuerdo de voluntades. Su construcción parte de la caracterización de la población y de sus necesidades y relaciona esta información con los servicios y tecnologías, las frecuencias de uso, los costos y los riesgos que pueden presentarse durante la ejecución.

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Servicios, tecnologías y frecuencias de uso

    p.mb-4 La nota técnica relaciona los servicios y tecnologías en salud que hacen parte del acuerdo de voluntades con la frecuencia esperada de utilización por parte de la población objeto. Esta relación permite estimar la cantidad de atenciones o tecnologías que podrían requerirse durante el periodo establecido en el acuerdo.

    .row.g-0.align-items-stretch.tema6-panel.mb-4
      .col-lg-5
        figure.h-100
          img.tema6-panel__imagen(src="@/assets/curso/temas/t6/img13.png" alt="")
      .col-lg-7.p-4
        img.tema6-icono.d-none.d-lg-block.ms-0.mb-4(src="@/assets/curso/temas/t6/img14.svg" alt="")
        p Los servicios y tecnologías deben identificarse de manera precisa y corresponder a las necesidades de la población analizada. Para cada uno se establece una frecuencia de uso de acuerdo con las características de la población, la información histórica disponible y las condiciones en las que se desarrolla la atención.
        p.mb-0 La frecuencia de uso corresponde a la cantidad estimada de veces que un servicio o tecnología será utilizado por una población durante un periodo determinado. Esta frecuencia no necesariamente es igual para toda la población, debido a que pueden existir diferencias relacionadas con las condiciones de salud, las características demográficas, el territorio o las condiciones operativas de la prestación.

    p.mb-4 Por esta razón, las frecuencias se establecen teniendo en cuenta:

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Servicio o tecnología") Cada servicio o tecnología requiere una estimación de frecuencia de uso.
          p.mb-0(numero="2" titulo="Población") La frecuencia debe relacionarse con la población que puede requerir el servicio o tecnología.
          p.mb-0(numero="3" titulo="Características de la población") Las condiciones demográficas, epidemiológicas o de riesgo pueden generar diferencias en la utilización.
          p.mb-0(numero="4" titulo="Información histórica") Los registros de utilización permiten identificar comportamientos que pueden servir como referencia para las estimaciones.
          p.mb-0(numero="5" titulo="Condiciones operativas") Aspectos como la disponibilidad de servicios, el talento humano y las características del territorio pueden modificar la forma en que se utilizan los servicios.
          p.mb-0(numero="6" titulo="Periodo de contratación") La frecuencia debe corresponder al tiempo durante el cual se realizará la proyección.
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/t6/img15.png" alt="")

    p.mb-4 Cuando un mismo servicio o tecnología presenta frecuencias diferentes entre grupos de población, puede ser necesario dividir la población inicialmente definida y establecer los ponderadores correspondientes. Esto permite que la estimación represente las particularidades de cada grupo y evita aplicar una única frecuencia a poblaciones que presentan comportamientos diferentes.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Por ejemplo, si un servicio presenta una frecuencia de uso diferente entre población adulta y población mayor debido a sus características epidemiológicas, la estimación puede realizarse de manera diferenciada para cada grupo. Posteriormente, las frecuencias obtenidas pueden integrarse para establecer la estimación correspondiente al conjunto de la población objeto.

        .row.align-items-center.mb-0
          .col-lg-1
            img.tema6-icono.d-none.d-lg-block(src="@/assets/curso/temas/t6/img16.svg" alt="")
          .col-lg-11
            p.mb-0 La información histórica constituye un insumo importante para este proceso, pero debe analizarse en relación con la población objeto y con las condiciones bajo las cuales se produjeron las atenciones. De esta manera, los datos utilizados permiten establecer frecuencias que guarden correspondencia con el comportamiento observado y con las características de la población que será atendida.

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Riesgo primario y riesgo técnico

    p.mb-4 En los acuerdos de voluntades, la estimación de los servicios y tecnologías en salud debe considerar los riesgos asociados a la población objeto y a la forma en que se prestan y utilizan los servicios. Estos riesgos pueden influir en las frecuencias de uso, los costos y los resultados esperados durante la ejecución del acuerdo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t6/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El riesgo primario se relaciona con la posibilidad de que se presenten condiciones de salud o eventos que requieran atención por parte de la población objeto. Su comportamiento está relacionado con las características demográficas y epidemiológicas de la población, así como con la ocurrencia de enfermedades, condiciones de salud y otros eventos que pueden generar necesidades de atención.

    p El riesgo técnico, por su parte, se relaciona con las variaciones en la utilización de recursos, la ocurrencia de complicaciones o la severidad de las condiciones de salud, cuando estas se asocian con factores no previsibles en la atención o con situaciones no soportadas en la evidencia científica.
    p.mb-4 Para diferenciar estos conceptos, puede utilizarse la siguiente tabla:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 8.
      span Diferencias entre riesgo primario y riesgo técnico
    .tabla-a.color-acento-contenido.tema6-tabla.mb-5
      table
        thead
          tr
            th Aspecto
            th Riesgo primario
            th Riesgo técnico
        tbody
          tr
            td Relación principal
            td Se relaciona con la ocurrencia de condiciones de salud en la población.
            td Se relaciona con la forma en que se utilizan los recursos y se prestan los servicios.
          tr
            td Origen
            td Características y condiciones de salud de la población objeto.
            td Factores relacionados con la prestación, utilización o gestión de la atención.
          tr
            td Manifestación
            td Aparición de enfermedades, condiciones de salud o eventos que generan necesidad de atención.
            td Variaciones en la utilización, complicaciones o cambios en la severidad de las condiciones de salud.
          tr
            td Relación con la nota técnica
            td Contribuye a estimar las necesidades de atención y la población susceptible.
            td Permite considerar variaciones que pueden afectar las frecuencias, los costos y los resultados esperados.

    p.text-center.mb-4 El riesgo técnico comprende dos componentes principales:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.tema6-tarjeta--a.p-4
        img.tema6-tarjeta__icono.mb-4(src="@/assets/curso/temas/t6/img18.svg" alt="")
        h5.text-center Riesgo técnico de morbilidad evitable
        p.mb-5 Corresponde a la ocurrencia de complicaciones clínicas o al aumento de la severidad de una condición de salud asociado con fallas en el modelo de prestación, la seguridad del paciente, la coordinación entre prestadores o la aplicación de guías de práctica clínica y protocolos de atención.
      .col-md.tarjeta.tema6-tarjeta--b.p-4
        img.tema6-tarjeta__icono.mb-4(src="@/assets/curso/temas/t6/img19.svg" alt="")
        h5.text-center Riesgo técnico de utilización
        p.mb-5 Corresponde a la variabilidad en el uso de servicios y tecnologías en salud que no se encuentra soportada en la evidencia científica.

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 La consideración de estos riesgos permite comprender que las proyecciones de una nota técnica no dependen únicamente del número de personas que conforman la población objeto. También es necesario analizar las condiciones de salud de dicha población y las situaciones que pueden modificar la utilización de los servicios y tecnologías.
        .cajon.color-primario.p-4
          p.mb-0 Por ejemplo, una población con una mayor presencia de determinadas condiciones de salud puede presentar una necesidad de atención superior a la estimada inicialmente. De igual manera, una complicación asociada con fallas en la prestación puede generar servicios adicionales y modificar las frecuencias y los costos proyectados.

    p.mb-0 En este sentido, el análisis del riesgo primario contribuye a establecer las necesidades esperadas de la población, mientras que el riesgo técnico permite considerar posibles variaciones relacionadas con la prestación y utilización de los servicios. Ambos constituyen elementos que pueden incorporarse en las estimaciones y en el seguimiento de la nota técnica.
</template>

<script>
export default {
  name: 'Tema6',
}
</script>
