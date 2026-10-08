<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manuales tarifarios y glosas

    figure.mb-4
      img(src="@/assets/curso/temas/t5/img1.png" alt="")

    p.mb-4 Los manuales tarifarios y las glosas se relacionan con los procesos económicos y administrativos asociados a la prestación y al reconocimiento de los servicios y tecnologías en salud. Su análisis permite comprender cómo se establecen los valores de referencia para los servicios contratados y cómo se gestionan las diferencias o inconsistencias identificadas durante los procesos de facturación y auditoría.

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/img2.png" alt="")
      .col-lg-8
        p En el contexto de los acuerdos de voluntades, las partes deben establecer las condiciones económicas bajo las cuales se reconocerán y pagarán los servicios y tecnologías contratados. Para ello, pueden utilizar diferentes referentes tarifarios, de acuerdo con la modalidad de contratación y las condiciones pactadas.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los manuales tarifarios contienen referencias para la identificación y valoración económica de determinados servicios y procedimientos. Su utilización debe relacionarse con las condiciones establecidas en el acuerdo de voluntades y con los servicios y tecnologías que hacen parte de este.
        .row.align-items-center
          .col-lg-2
            img.tema5-icono.d-none.d-lg-block(src="@/assets/curso/temas/t5/img3.png" alt="")
          .col-lg-10
            p.mb-0 Por otra parte, las glosas corresponden a objeciones o diferencias identificadas frente a las facturas presentadas por los servicios y tecnologías en salud. Estas pueden estar relacionadas con aspectos administrativos, de prestación, facturación o soportes, y requieren procesos de revisión, respuesta y gestión entre las partes.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, ambos elementos guardan relación con la información utilizada en la construcción y seguimiento de la nota técnica. Las tarifas permiten establecer los valores asociados a los servicios y tecnologías considerados, mientras que el análisis de las glosas puede aportar información sobre inconsistencias o situaciones que afectan el reconocimiento y pago de los servicios.
    .BGF05.px-5.p-4
      p.mb-4 Este apartado aborda los siguientes temas:

      ol.lista-ol--cuadro.lista-ol--separador.mb-4
        li
          .lista-ol--cuadro__vineta
            span 1
          | Tipos de tarifas, de acuerdo con los referentes utilizados para establecer los valores de los servicios y tecnologías.
        li
          .lista-ol--cuadro__vineta
            span 2
          | Lineamientos normativos de los manuales tarifarios, que permiten comprender el marco aplicable a su utilización en los procesos de contratación.
        li
          .lista-ol--cuadro__vineta
            span 3
          | Glosas en la contratación de servicios de salud, sus características y su relación con los procesos de facturación, auditoría y reconocimiento de los servicios prestados.

      p.mb-0 El análisis conjunto de estos elementos permite relacionar las condiciones económicas de la contratación con la prestación efectiva de los servicios y tecnologías y con los procesos de reconocimiento y pago derivados de los acuerdos de voluntades.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Tipos de tarifas

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/img5.png" alt="")
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los manuales tarifarios son referentes utilizados para establecer o acordar el valor económico de los servicios y tecnologías en salud. En los acuerdos de voluntades, las partes pueden definir las condiciones económicas de la contratación y establecer los referentes tarifarios que utilizarán para reconocer los servicios contratados.
        p.mb-0 En Colombia existen diferentes referentes tarifarios que pueden utilizarse en los procesos de contratación en salud. Entre los más conocidos se encuentran el Manual Tarifario SOAT y el Manual Tarifario ISS 2001. También pueden establecerse tarifas propias mediante acuerdos entre las partes, de acuerdo con las condiciones definidas en el acuerdo de voluntades.

    .BGF02.p-5.mb-4
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.p-4
            .col-md-6.mb-4.mb-md-0
              h5 Manual Tarifario SOAT
              p El Manual Tarifario SOAT tiene como antecedente el régimen tarifario establecido mediante el Decreto 2423 de 1996, posteriormente compilado en el Decreto 780 de 2016. Este referente establece la nomenclatura, clasificación y tarifas para determinados procedimientos médico-quirúrgicos y hospitalarios.
              p.mb-0 Su aplicación obligatoria está asociada a situaciones específicas establecidas en la normativa, entre ellas la atención de víctimas de accidentes de tránsito y determinados eventos catastróficos, así como la atención inicial de urgencias cuando no existe un acuerdo previo entre las partes. Para otros procesos de contratación, puede utilizarse como referente cuando así se establezca en el acuerdo de voluntades.
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t5/img6.png" alt="")
          .row.justify-content-center.align-items-center.p-4
            .col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t5/img7.png" alt="")
            .col-md-6
              h5 Manual Tarifario ISS 2001
              p El denominado Manual Tarifario ISS 2001 corresponde a un referente histórico utilizado en procesos de negociación de servicios de salud. Aunque no ha tenido una actualización oficial posterior a su expedición, puede encontrarse como referencia en algunos procesos de contratación cuando las partes acuerdan utilizarlo.
              p.mb-0 Es importante diferenciar entre un manual utilizado como referente de negociación y una tarifa de aplicación obligatoria. La utilización de un manual como referente depende de las condiciones pactadas por las partes y del marco normativo aplicable al acuerdo.

    p.mb-4 En aquellos acuerdos de voluntades en los que no exista una tarifa de aplicación obligatoria para el servicio o tecnología correspondiente, las partes pueden establecer los valores que reconocerán, de acuerdo con las condiciones de contratación y el referente tarifario que hayan definido.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Por esta razón, antes de utilizar una tarifa para construir la nota técnica es necesario identificar qué referente tarifario se utilizará, cuáles son las condiciones pactadas y qué servicios y tecnologías están incluidos en el acuerdo de voluntades.

    p.mb-4 En la construcción de la nota técnica, esta definición es importante porque los valores tarifarios se relacionan con las frecuencias de uso y con la población objeto. La combinación de estos elementos permite estimar los costos asociados a los servicios y tecnologías que serán considerados en el acuerdo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, si un acuerdo de voluntades establece como referente una tarifa determinada para un procedimiento y la nota técnica proyecta una frecuencia de utilización para la población objeto, el valor tarifario y la frecuencia estimada constituyen elementos para calcular el costo esperado de ese procedimiento durante el periodo de contratación.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Lineamientos normativos de los manuales tarifarios

    p.mb-4 Los manuales tarifarios hacen parte de los referentes utilizados para establecer los valores de los servicios y tecnologías en salud. Su aplicación debe analizarse de acuerdo con el marco normativo vigente y con las condiciones establecidas en el acuerdo de voluntades entre las partes.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 7.
      span Principales referentes normativos relacionados con las tarifas en salud
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th Norma
            th Aspecto relacionado con las tarifas
            th Aplicación en la contratación
        tbody
          tr
            td Decreto 2423 de 1996
            td Establece la nomenclatura, clasificación y régimen tarifario de determinados procedimientos médico-quirúrgicos y hospitalarios.
            td Su aplicación obligatoria corresponde a los casos establecidos en la normativa.
          tr
            td Decreto 780 de 2016
            td Compila las disposiciones reglamentarias del sector salud, incluidas las relacionadas con el régimen tarifario.
            td Constituye un referente normativo para la aplicación de las disposiciones tarifarias.
          tr
            td Decreto 441 de 2022
            td Regula aspectos de los acuerdos de voluntades y establece disposiciones relacionadas con las tarifas y las modalidades de pago.
            td Orienta la definición de las condiciones económicas entre las partes.

    p.mb-4 El Decreto 2423 de 1996 estableció la nomenclatura y clasificación de los procedimientos médico-quirúrgicos y hospitalarios y determinó un régimen tarifario para estos servicios. Posteriormente, sus disposiciones fueron incorporadas al Decreto 780 de 2016, como parte del régimen reglamentario del sector salud.

    .row.g-0.align-items-stretch.tema5-panel.mb-4
      .col-lg-5
        figure.h-100
          img.tema5-panel__imagen(src="@/assets/curso/temas/t5/img9.png" alt="")
      .col-lg-7.p-4
        img.tema5-icono.d-none.d-lg-block.ms-0.mb-4(src="@/assets/curso/temas/t5/img10.png" alt="")
        p Es importante precisar que las tarifas establecidas en este régimen no constituyen una tarifa de aplicación general para todos los contratos de servicios de salud. Su aplicación obligatoria corresponde a los casos establecidos por la normativa, entre ellos determinados eventos como accidentes de tránsito, desastres naturales, atentados terroristas y otros eventos catastróficos, así como la atención inicial de urgencias cuando no existe un acuerdo previo entre las partes.
        p.mb-0 Para los demás procesos de contratación, las partes pueden establecer las condiciones económicas del acuerdo de voluntades, de acuerdo con el marco normativo y con el referente tarifario que hayan definido.

    p.mb-4 En este sentido, el Decreto 441 de 2022 establece disposiciones relacionadas con los acuerdos de voluntades y señala que las tarifas deben guardar correspondencia con la modalidad de pago pactada.
    p.mb-4 En la construcción de la nota técnica, estos lineamientos deben relacionarse con:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t5/img11.png" alt="")
        h5.text-center Servicios y tecnologías contratados
        p.mb-5.text-center Identificar los servicios y tecnologías a los cuales corresponde cada valor tarifario.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t5/img12.png" alt="")
        h5.text-center Referente tarifario
        p.mb-5.text-center Establecer el manual o referente utilizado para determinar los valores.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t5/img13.png" alt="")
        h5.text-center Modalidad de pago
        p.mb-5.text-center Verificar que las tarifas sean coherentes con la modalidad de pago pactada en el acuerdo.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t5/img14.png" alt="")
        h5.text-center Condiciones económicas
        p.mb-5.text-center Considerar los valores acordados entre las partes para los servicios y tecnologías incluidos.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t5/img15.png" alt="")
        h5.text-center Vigencia
        p.mb-5.text-center Utilizar valores que correspondan al periodo objeto del acuerdo y a las disposiciones aplicables.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t5/img16.png" alt="")
        h5.text-center Nota técnica
        p.mb-5.text-center Relacionar los valores tarifarios con la población objeto, las frecuencias de uso y los servicios y tecnologías proyectados.

    p.mb-0 Por ejemplo, si la nota técnica proyecta una determinada frecuencia de utilización para un procedimiento, el valor tarifario acordado permite establecer el costo esperado asociado a dicho servicio. De esta manera, las tarifas constituyen uno de los elementos económicos que se relacionan con las proyecciones realizadas en la nota técnica.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Glosas en la contratación de servicios de salud

    .row.mb-4
      .col-lg-1
        img.tema5-icono.d-none.d-lg-block(src="@/assets/curso/temas/t5/img17.png" alt="")
      .col-lg-11
        p.mb-0 Las glosas son objeciones formuladas durante el proceso de auditoría de las cuentas presentadas por los prestadores de servicios de salud o proveedores de tecnologías en salud. Estas pueden generar el no reconocimiento total o parcial de los valores facturados cuando se identifica alguna inconsistencia relacionada con la prestación, facturación, soportes o condiciones establecidas para el reconocimiento de los servicios.

    .row.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/img18.png" alt="")
      .col-lg-7
        p.mb-4 El proceso de glosas hace parte de la revisión de las cuentas en salud y se encuentra relacionado con los procesos de facturación, auditoría y reconocimiento de los servicios y tecnologías prestados. Actualmente, la Resolución 2284 de 2023 establece los soportes de cobro y adopta el Manual Único de Devoluciones, Glosas y Respuestas. Esta resolución fue modificada, entre otras disposiciones, por la Resolución 1885 de 2024.
        .cajon.color-secundario.p-4
          p.mb-0 Para comprender el proceso, es importante diferenciar las devoluciones de las glosas. Las devoluciones corresponden a situaciones que impiden continuar con el trámite de la factura y tienen un procedimiento específico, mientras que las glosas corresponden a objeciones formuladas durante la auditoría de las cuentas. La Resolución 2284 de 2023 establece los procedimientos y soportes aplicables a estos procesos.

    p.mb-4 En la gestión de las glosas deben considerarse, entre otros, los siguientes aspectos:

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Causal de la glosa") La objeción debe corresponder a una causal establecida en el Manual Único de Devoluciones, Glosas y Respuestas. No pueden aplicarse causales diferentes a las allí establecidas.
          p.mb-0(numero="2" titulo="Soportes") La objeción debe relacionarse con la información y los soportes que respaldan la prestación y facturación de los servicios o tecnologías.
          p.mb-0(numero="3" titulo="Respuesta") El prestador o proveedor debe analizar la objeción y presentar la respuesta correspondiente dentro de los términos establecidos.
          p.mb-0(numero="4" titulo="Trazabilidad") Las actuaciones relacionadas con la glosa deben permitir identificar la factura, la causal, los valores involucrados y la respuesta presentada.
          p.mb-0(numero="5" titulo="Términos") Las glosas y sus respuestas deben tramitarse dentro de los plazos establecidos en la normativa aplicable.
          p.mb-0(numero="6" titulo="Nuevas glosas") Una vez formuladas las glosas a una factura, no pueden formularse nuevas glosas sobre la misma, salvo aquellas que surjan de hechos nuevos detectados en la respuesta a la glosa inicial.
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/t5/img19.png" alt="")

    p.mb-4 La Circular Conjunta 007 de 2025, expedida por el Ministerio de Salud y Protección Social y la Superintendencia Nacional de Salud, reiteró que las entidades responsables de pago no pueden aplicar glosas o devoluciones injustificadas o por fuera de los plazos establecidos. También señaló que deben utilizarse las causales definidas en el Manual Único de Devoluciones, Glosas y Respuestas y que no pueden exigirse soportes adicionales a los establecidos para el trámite de las facturas.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Las glosas también guardan relación con los manuales tarifarios. Por ejemplo, cuando una factura presenta un valor diferente al que corresponde a la tarifa establecida en el acuerdo de voluntades, puede generarse una objeción relacionada con el valor facturado. Por esta razón, la definición clara de las tarifas y condiciones económicas desde la estructuración del acuerdo contribuye a reducir inconsistencias durante la facturación y auditoría.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la construcción y seguimiento de la nota técnica, las glosas pueden proporcionar información sobre diferencias entre los servicios y tecnologías proyectados, las condiciones pactadas y los valores efectivamente facturados. Sin embargo, la nota técnica no sustituye el proceso de auditoría de cuentas; su función es proporcionar información para la planeación, estimación y seguimiento de los servicios, tecnologías, frecuencias y costos asociados al acuerdo de voluntades.
</template>

<script>
export default {
  name: 'Tema5',
}
</script>
