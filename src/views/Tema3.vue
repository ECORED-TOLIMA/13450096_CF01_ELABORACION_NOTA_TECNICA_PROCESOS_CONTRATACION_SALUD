<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fundamentos de la contratación en salud

    figure.mb-4
      img(src="@/assets/curso/temas/t3/img1.png" alt="")

    p.mb-4 La construcción de una nota técnica requiere comprender el contexto en el que se establecen los acuerdos de voluntades entre las entidades responsables del pago, los prestadores de servicios de salud y los proveedores de tecnologías en salud. Estos acuerdos definen las condiciones bajo las cuales se organiza y desarrolla la prestación de los servicios y tecnologías requeridos por una población determinada.

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t3/img2.png" alt="")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En este contexto, la contratación en salud se relaciona con aspectos normativos, administrativos, técnicos y financieros que deben considerarse al establecer las condiciones del acuerdo. Entre ellos se encuentran las modalidades de pago, la identificación de los servicios y tecnologías, las condiciones de prestación, los mecanismos de seguimiento y la información que sustenta las estimaciones realizadas.
        .row
          .col-lg-1
            img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img3.svg" alt="")
          .col-lg-11
            p.mb-0 El Decreto 441 de 2022, que modificó y adicionó disposiciones del Decreto 780 de 2016 en materia de acuerdos de voluntades, establece elementos relacionados con la contratación entre las entidades responsables de pago, los prestadores de servicios de salud y los proveedores de tecnologías en salud. Dentro de este marco, la nota técnica constituye un elemento asociado a los acuerdos de voluntades y proporciona información para sustentar aspectos relacionados con la población, los servicios y tecnologías, las frecuencias de uso y los riesgos considerados.

    p.mb-4 El análisis de estos fundamentos permite comprender cómo se relacionan las condiciones de contratación con la información utilizada para construir y hacer seguimiento a la nota técnica. Para ello, este apartado aborda:

    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img4.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center Marco normativo aplicable a los acuerdos de voluntades
              p.mb-0.text-center Principales disposiciones que regulan las relaciones entre los actores que participan en la contratación de servicios y tecnologías en salud.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img5.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center Modalidades de pago
              p.mb-0.text-center Mecanismos mediante los cuales se establece la forma de reconocimiento y pago de los servicios y tecnologías contratados.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img6.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center Registro Individual de Prestación de Servicios de Salud (RIPS)
              p.mb-0.text-center Información relacionada con las atenciones realizadas, utilizada como fuente para analizar la utilización de servicios y tecnologías y sustentar las frecuencias de uso.

    p.mb-0 El conocimiento de estos elementos permite relacionar la información poblacional y de utilización analizada en los apartados anteriores con las condiciones bajo las cuales se estructuran los acuerdos de voluntades y se desarrolla la contratación en salud.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Marco normativo aplicable a los acuerdos de voluntades

    p.mb-4 Los acuerdos de voluntades en el sector salud establecen las condiciones bajo las cuales se organizan y desarrollan las relaciones entre las Entidades Responsables de Pago (ERP), los Prestadores de Servicios de Salud (PSS) y los Proveedores de Tecnologías en Salud (PTS). Su regulación busca establecer condiciones para la prestación de servicios y tecnologías, así como para el reconocimiento y pago de las atenciones realizadas.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t3/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marco normativo aplicable a estos acuerdos se encuentra principalmente en el Decreto 780 de 2016, Decreto Único Reglamentario del Sector Salud y Protección Social, y en las disposiciones que lo han modificado y adicionado. Entre estas se encuentra el Decreto 441 de 2022, que incorporó disposiciones específicas relacionadas con los acuerdos de voluntades y la nota técnica.

    p.mb-4 Dentro de este marco, los acuerdos de voluntades deben establecer de manera clara las condiciones relacionadas con la prestación de los servicios y tecnologías en salud. Entre los elementos que pueden considerarse se encuentran:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img8.svg" alt="")
        h5.text-center Actores que intervienen
        p.mb-5.text-center Identificación de las entidades responsables de pago, los prestadores de servicios de salud y los proveedores de tecnologías en salud que participan en el acuerdo.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img9.svg" alt="")
        h5.text-center Población objeto
        p.mb-5.text-center Definición de la población a la cual se dirige la prestación de los servicios y tecnologías.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img10.svg" alt="")
        h5.text-center Servicios y tecnologías
        p.mb-5.text-center Identificación de las atenciones que hacen parte del acuerdo, utilizando las codificaciones correspondientes.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img11.svg" alt="")
        h5.text-center Frecuencias de uso
        p.mb-5.text-center Estimación de la utilización esperada de los servicios y tecnologías durante el periodo establecido.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img12.svg" alt="")
        h5.text-center Condiciones económicas
        p.mb-5.text-center Definición de los valores y condiciones de reconocimiento y pago de acuerdo con la modalidad pactada.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img13.svg" alt="")
        h5.text-center Nota técnica
        p.mb-5.text-center Incorporación de la información que sustenta las estimaciones de servicios, tecnologías, frecuencias, costos y demás elementos requeridos según el acuerdo.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img14.svg" alt="")
        h5.text-center Seguimiento
        p.mb-5.text-center Establecimiento de mecanismos que permitan analizar el comportamiento de los servicios, las frecuencias de uso, los costos y los riesgos durante la ejecución del acuerdo.

    p.mb-4 El Decreto 441 de 2022 establece que la nota técnica hace parte de los elementos asociados a los acuerdos de voluntades y la define como una herramienta de transparencia y eficiencia entre las partes. Esta refleja información detallada sobre los servicios y tecnologías de salud, sus frecuencias de uso estimadas, los costos individuales y el valor total correspondiente a la población o grupo de riesgo, de acuerdo con la duración y la modalidad de pago pactada.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Por otra parte, el marco de los acuerdos de voluntades se relaciona con la gestión del riesgo en salud y con el seguimiento de los resultados de la atención. La nota técnica proporciona información que puede utilizarse para analizar desviaciones en las frecuencias de uso y los costos, así como para identificar situaciones que requieran ajustes durante la ejecución del acuerdo.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1
        img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img15.svg" alt="")
      .col-lg-9
        p.mb-0 En este sentido, el conocimiento del marco normativo permite comprender que la contratación en salud no se limita a establecer un valor económico por los servicios prestados. Los acuerdos de voluntades articulan elementos relacionados con la población, las necesidades de atención, los servicios y tecnologías, las modalidades de pago, la gestión del riesgo y el seguimiento de la prestación. Estos elementos constituyen el contexto normativo y operativo en el que se construye y utiliza la nota técnica.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Modalidades de pago

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t3/img16.png" alt="")
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Las modalidades de pago establecen la forma en que se reconoce económicamente la prestación de los servicios y tecnologías en salud dentro de un acuerdo de voluntades. Su elección se relaciona con las características de la población, los servicios contratados, las frecuencias de uso estimadas y la distribución de los riesgos entre las partes.
        p.mb-4 De acuerdo con el enfoque presentado en el insumo, las modalidades de pago pueden clasificarse en prospectivas y retrospectivas, según el momento en que se establece el reconocimiento económico frente a la prestación de los servicios.

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.align-items-center(titulo="A. Modalidades de pago prospectivas")
        .col-lg-7.mb-4.mb-lg-0
          p El reconocimiento económico se establece antes de que se produzca la atención, a partir de una proyección de la población, los servicios o tecnologías y las frecuencias de uso esperadas. Entre las modalidades señaladas se encuentran la capitación, el pago global prospectivo (PGP), el pago por paquete o canasta y otras formas de pago previamente acordadas.
          p Estas modalidades requieren estimaciones que permitan establecer los recursos necesarios para atender a la población durante el periodo definido. Por ello, la nota técnica adquiere especial importancia como instrumento para sustentar las frecuencias de uso, los costos y los valores asociados a los servicios y tecnologías incluidos en el acuerdo.
          p Entre las modalidades prospectivas pueden considerarse:
          .bg-white.p-4.mb-4
            ul.lista-ul.mb-0
              li
                i.fas.fa-check
                p.mb-0
                  strong Pago por capitación: 
                  | establece un valor por persona durante un periodo determinado, de acuerdo con las condiciones definidas en el acuerdo de voluntades.
              li
                i.fas.fa-check
                p.mb-0
                  strong Pago global prospectivo (PGP): 
                  | establece anticipadamente un valor global para atender un conjunto determinado de servicios, población y condiciones pactadas.
              li
                i.fas.fa-check
                p.mb-0
                  strong Pago por paquete o canasta: 
                  | establece un valor para un conjunto definido de servicios y tecnologías relacionados con una atención o proceso determinado.          
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/t3/img17.png" alt="")
        p.mb-0 En estas modalidades, las estimaciones de población y frecuencia de uso tienen una relación directa con la planeación de los recursos requeridos para la prestación. El comportamiento real de la utilización puede generar diferencias frente a las proyecciones iniciales, por lo que el seguimiento de la ejecución del acuerdo constituye un elemento relevante.
      .row.align-items-center(titulo="B. Modalidades de pago retrospectivas")
        .col-lg-7.mb-4.mb-lg-0
          p El reconocimiento económico se determina después de realizada la prestación, de acuerdo con los servicios y tecnologías efectivamente utilizados. El insumo identifica el pago por evento como ejemplo de esta modalidad.
          p.mb-0 En este caso, el valor reconocido depende de las atenciones efectivamente realizadas y de las condiciones económicas establecidas entre las partes. Por esta razón, la información relacionada con los servicios prestados, los soportes de atención y los registros de utilización adquiere especial importancia para el proceso de reconocimiento y pago.
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/t3/img18.png" alt="")

    p.mb-4 La modalidad de pago seleccionada debe guardar correspondencia con los elementos definidos en el acuerdo de voluntades y con la información utilizada para construir la nota técnica. Esta última permite relacionar la población objeto, los servicios y tecnologías, las frecuencias de uso, los costos y el periodo de contratación.
    p.mb-4 De esta manera, las modalidades de pago pueden organizarse así:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 5.
      span Modalidades de pago en los acuerdos de voluntades
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th Tipo de modalidad
            th Momento del reconocimiento económico
            th Ejemplos señalados en el insumo
            th Relación con la nota técnica
        tbody
          tr
            td Prospectiva
            td Antes de la prestación, con base en proyecciones.
            td Capitación, PGP, paquete o canasta.
            td Sustenta las estimaciones de población, frecuencias, costos y recursos requeridos.
          tr
            td Retrospectiva
            td Después de la prestación, según la utilización efectiva.
            td Pago por evento.
            td Utiliza información de los servicios efectivamente prestados para determinar el reconocimiento.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En consecuencia, comprender las modalidades de pago permite interpretar cómo las estimaciones realizadas en la nota técnica se relacionan con las condiciones económicas y operativas del acuerdo de voluntades. La modalidad seleccionada también determina qué información debe analizarse para realizar el seguimiento del comportamiento de los servicios, las frecuencias de uso y los costos durante la ejecución del acuerdo.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Registro Individual de Prestación de Servicios de Salud (RIPS)

    .row.align-items-center
      .col-lg-1
        img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img19.svg" alt="")
      .col-lg-11
        p.mb-0 El Registro Individual de Prestación de Servicios de Salud (RIPS) es el conjunto de datos que contiene información relacionada con la prestación o provisión de servicios y tecnologías de salud a los usuarios. Esta información se utiliza en los procesos de prestación y facturación, así como en actividades de dirección, regulación y control del sector salud.

    .BGF05.px-5.p-5
      .row.align-items-center
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/t3/img20.png" alt="")
        .col-lg-8
          p.mb-0 De acuerdo con la Resolución 2275 de 2023, el RIPS es generado, validado y enviado como soporte de la factura de venta por los facturadores electrónicos del sector salud, entre ellos los prestadores de servicios de salud y los proveedores de tecnologías en salud.

          p.mb-4 La información registrada se organiza en diferentes grupos de datos, entre los que se encuentran:

          ul.lista-ul.mb-4
            li
              i.fas.fa-file-lines
              p.mb-0
                strong Datos de la transacción: 
                | información relacionada con la operación registrada.
            li
              i.fas.fa-file-lines
              p.mb-0
                strong Datos de los usuarios: 
                | información necesaria para identificar y caracterizar al usuario de los servicios.
            li
              i.fas.fa-file-lines
              p.mb-0
                strong Datos de los servicios y tecnologías de salud y valores facturados: 
                | información relacionada con las atenciones realizadas y los valores correspondientes.

          p.mb-4 Dentro de los servicios y tecnologías registrados se incluyen datos de consultas, procedimientos, urgencias con observación, hospitalización, recién nacidos, medicamentos y otros servicios.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En la construcción de la nota técnica, el RIPS constituye una fuente de información para analizar el comportamiento histórico de los servicios y tecnologías efectivamente utilizados. Su análisis permite establecer frecuencias de uso y relacionarlas con la población objeto y susceptible previamente identificada.

    p.mb-4 La información histórica debe ser analizada teniendo en cuenta el periodo de referencia, la población objeto, los servicios o tecnologías considerados y las condiciones en las que se produjeron las atenciones. Además, es necesario realizar procesos de validación y depuración para identificar posibles duplicidades, inconsistencias o registros que no correspondan con el análisis que se pretende realizar.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t3/img21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, si se requiere establecer la frecuencia histórica de un procedimiento, los registros del RIPS pueden utilizarse para determinar cuántas veces fue realizado durante un periodo y relacionar este resultado con la población correspondiente. De esta manera, el RIPS aporta información para estimar el comportamiento de utilización que posteriormente puede considerarse en las proyecciones de la nota técnica.

    .row.justify-content-center.mb-0
      .col-lg-10
        p.mb-4 En este sentido, el RIPS no debe analizarse de manera aislada. Su información puede complementarse con otras fuentes, como la BDUA, para delimitar la población; el SIVIGILA, para analizar determinados eventos de interés en salud pública; y la caracterización poblacional y el ASIS, para contextualizar las condiciones de salud y del territorio.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 En síntesis, el RIPS aporta información sobre las atenciones efectivamente realizadas y constituye un insumo para analizar la utilización histórica de los servicios y tecnologías. Su adecuada validación y análisis contribuyen a sustentar las frecuencias de uso empleadas en la construcción de la nota técnica.
</template>

<script>
export default {
  name: 'Tema3',
}
</script>
