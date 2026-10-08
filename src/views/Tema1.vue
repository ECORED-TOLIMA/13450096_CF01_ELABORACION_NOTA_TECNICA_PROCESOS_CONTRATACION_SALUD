<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caracterización de la población objeto

    figure.mb-4
      img(src="@/assets/curso/temas/t1/img1.png" alt="")

    p.mb-4 La caracterización de la población objeto constituye un punto de partida para la construcción de la nota técnica, debido a que permite identificar las características, condiciones y necesidades de las personas que hacen parte del ámbito de atención definido en un acuerdo de voluntades. Este proceso requiere analizar información demográfica, epidemiológica y territorial, entre otros aspectos relevantes para establecer la población que puede requerir los servicios y tecnologías en salud.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 El análisis de esta información permite diferenciar la población objeto total de la población susceptible, así como reconocer factores que pueden modificar las necesidades de atención y la utilización de los servicios. Para ello, se consideran fuentes de información y parámetros que contribuyen a sustentar las estimaciones utilizadas en la nota técnica.

    .row.justify-content-center
      .col-lg-10
        p.mb-0 De esta manera, la caracterización poblacional proporciona elementos para comprender a quiénes se dirige la atención, cuáles son sus principales necesidades y qué condiciones deben considerarse para proyectar los servicios y tecnologías requeridos.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto y contexto de la caracterización poblacional

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t1/img2.svg" alt="")
      .col-lg-7
        p.mb-4 La caracterización poblacional es un proceso de análisis que permite identificar las condiciones de salud, características y particularidades de una población determinada. Su desarrollo considera información demográfica, epidemiológica, territorial y social, con el propósito de reconocer riesgos, necesidades y grupos que requieren atención específica.
        .row.align-items-center
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img3.svg" alt="")
          .col-md-10
            p.mb-0 En el contexto de la nota técnica, la caracterización de la población constituye un insumo para establecer las necesidades de servicios y tecnologías en salud y determinar las poblaciones a las que estos pueden estar dirigidos. Para ello, se requiere analizar información proveniente de diferentes fuentes y considerar las condiciones particulares del territorio y de la población objeto.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0
          | La 
          strong Resolución 100 de 2024
          |  reorganizó el proceso de planeación integral para la salud y estableció orientaciones para el análisis de las condiciones de salud de la población a cargo de las entidades responsables, con desagregación territorial. En este contexto, el análisis poblacional se articula con el 
          strong Análisis de Situación de Salud (ASIS)
          |  y constituye un insumo para la planeación de las intervenciones en salud.

    p.mb-0 Por tanto, la caracterización poblacional no debe entenderse como un dato único o estático. Su análisis debe responder al propósito del acuerdo de voluntades y a las características de la población que requiere los servicios o tecnologías en salud.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Regímenes de afiliación

    .row.align-items-center.mb-4
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img5.svg" alt="")
      .col-md-10.col-lg-11
        p.mb-0 La población objeto de un acuerdo de voluntades puede estar conformada por personas pertenecientes a diferentes regímenes de afiliación del Sistema General de Seguridad Social en Salud (SGSSS). Identificar esta condición permite delimitar las características de la población que será considerada en el análisis y relacionarla con sus necesidades de atención en salud.

    p.mb-4 En el contexto colombiano, el documento plantea principalmente los siguientes regímenes:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 1.
      span Regímenes de afiliación y su relación con la caracterización poblacional
    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Régimen
            th Características generales
            th Relación con la caracterización de la población
        tbody
          tr
            td Contributivo
            td Comprende a las personas con capacidad de pago que realizan aportes al sistema, de acuerdo con su condición de afiliación.
            td Permite identificar una población con características de afiliación y condiciones socioeconómicas que pueden considerarse en el análisis.
          tr
            td Subsidiado
            td Está dirigido a la población que, de acuerdo con sus condiciones socioeconómicas, requiere el acceso a los servicios de salud mediante el mecanismo de subsidio.
            td Facilita la identificación de poblaciones con características sociales y económicas particulares y sus posibles necesidades de atención.
          tr
            td Regímenes especiales y de excepción
            td Corresponden a grupos de población que cuentan con condiciones particulares de afiliación y cobertura dentro del sistema.
            td Su identificación permite diferenciar las poblaciones que presentan condiciones específicas de afiliación frente a los demás regímenes.

    p.mb-0 La identificación del régimen de afiliación constituye, por tanto, un elemento de la caracterización poblacional. Su análisis, junto con variables demográficas, epidemiológicas, sociales, económicas y territoriales, contribuye a establecer las características de la población objeto y a sustentar el análisis de sus necesidades de servicios y tecnologías en salud.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Determinantes de la población

    .row.g-0.align-items-stretch.tema1-panel.mb-4
      .col-lg-5
        figure.h-100
          img.tema1-panel__imagen(src="@/assets/curso/temas/t1/img6.png" alt="")
      .col-lg-7.p-4
        img.tema1-icono.tema1-icono--izquierda.d-none.d-lg-block.mb-4(src="@/assets/curso/temas/t1/img7.svg" alt="")
        p.mb-4 La pertenencia a un régimen de afiliación constituye solamente uno de los elementos que pueden considerarse en la caracterización de la población. Las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen también pueden influir en sus condiciones de salud y en las posibilidades de acceder y utilizar los servicios de salud. Estas condiciones son reconocidas como determinantes sociales de la salud.
        p.mb-0 En Colombia, el Ministerio de Salud y Protección Social aborda los determinantes sociales de la salud mediante factores estructurales e intermedios. Entre ellos se encuentran aspectos relacionados con el contexto socioeconómico y político, los ingresos, la educación, la ocupación, las condiciones de vivienda y trabajo, el entorno, las redes de apoyo, los factores biológicos y conductuales y el acceso a los servicios de salud.

    p.mb-4 Estos factores pueden generar diferencias en las necesidades de atención y en la utilización de servicios y tecnologías. Por ejemplo, una población ubicada en una zona rural dispersa puede presentar condiciones de acceso diferentes a las de una población urbana, debido a factores como la distancia, la disponibilidad de talento humano, la oferta de servicios, las condiciones de transporte o la posibilidad de utilizar modalidades de atención a distancia.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Por esta razón, la caracterización utilizada como insumo para la nota técnica debe considerar las particularidades de la población y del territorio. El Análisis de Situación de Salud (ASIS) incorpora información relacionada con las condiciones sociales, económicas y de calidad de vida desde el enfoque de determinantes sociales, además de elementos asociados con la situación de salud, las necesidades y las respuestas existentes en el territorio.

    p.mb-4 En este sentido, el análisis de los determinantes complementa la información sobre afiliación, características demográficas y condiciones epidemiológicas, y permite contar con una perspectiva más amplia de los factores que pueden relacionarse con las necesidades de atención y la utilización de los servicios y tecnologías en salud.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 2.
      span Aspectos de la población que pueden considerarse en la caracterización
    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Aspecto
            th Elementos que pueden analizarse
            th Relación con la nota técnica
        tbody
          tr
            td Afiliación
            td Régimen contributivo, subsidiado y esquemas especiales o de excepción.
            td Permite delimitar y caracterizar la población objeto del análisis.
          tr
            td Demografía
            td Edad, sexo, distribución territorial y composición de la población.
            td Contribuye a identificar diferencias en las necesidades y en la utilización de servicios.
          tr
            td Condiciones epidemiológicas
            td Morbilidad, mortalidad, incidencia y prevalencia.
            td Permiten identificar riesgos y necesidades de atención.
          tr
            td Condiciones socioeconómicas
            td Ingresos, educación, ocupación y condiciones de vida.
            td Pueden influir en el estado de salud y en las posibilidades de acceso.
          tr
            td Características territoriales
            td Zona urbana o rural, dispersión geográfica y disponibilidad de servicios.
            td Pueden modificar la forma, oportunidad y disponibilidad de los servicios.
          tr
            td Acceso a servicios
            td Disponibilidad de talento humano, infraestructura, transporte y modalidades de atención.
            td Permite considerar condiciones que pueden afectar la utilización de servicios y tecnologías.

    p.mb-0 En la construcción de la nota técnica, esta información debe relacionarse con las características específicas de la población objeto y con el propósito del acuerdo de voluntades, de manera que contribuya a sustentar las estimaciones y proyecciones requeridas para los servicios y tecnologías en salud.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Necesidades de la población objeto

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las necesidades de salud de una población se relacionan con las condiciones que requieren atención para mantener, recuperar o mejorar su estado de salud. Su identificación requiere analizar las características de la población, sus condiciones epidemiológicas, los riesgos presentes y las particularidades del territorio. Por esta razón, la necesidad de atención no debe establecerse únicamente a partir de los servicios que la población solicita o utiliza.

    p.mb-4 En este contexto, es importante diferenciar los conceptos de necesidad, demanda y riesgo, debido a que cada uno aporta información diferente para el análisis de la población objeto:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.tema1-tarjeta--a.p-4
        img.tema1-tarjeta__icono.mb-4(src="@/assets/curso/temas/t1/img9.svg" alt="")
        h5.text-center Necesidad
        p.mb-0 Corresponde a los servicios y tecnologías que una población requiere de acuerdo con sus condiciones de salud, riesgos y características epidemiológicas. Su identificación permite establecer las atenciones que pueden requerirse para responder a las condiciones de salud de la población objeto.
      .col-md.tarjeta.tema1-tarjeta--b.p-4
        img.tema1-tarjeta__icono.mb-4(src="@/assets/curso/temas/t1/img10.svg" alt="")
        h5.text-center Demanda
        p.mb-0 Corresponde a los servicios que la población solicita o utiliza efectivamente. Esta puede diferir de la necesidad debido a condiciones que facilitan o limitan el acceso a los servicios de salud. Por ello, la demanda observada no necesariamente representa la totalidad de las necesidades de la población.
      .col-md.tarjeta.tema1-tarjeta--c.p-4
        img.tema1-tarjeta__icono.mb-4(src="@/assets/curso/temas/t1/img11.svg" alt="")
        h5.text-center Riesgo
        p.mb-0 Se relaciona con la probabilidad de ocurrencia de un evento en salud y sus posibles consecuencias. Su análisis permite considerar condiciones que pueden modificar las necesidades de atención y las proyecciones realizadas en la nota técnica.

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t1/img12.png" alt="")
      .col-lg-7
        p.mb-4 El análisis de las necesidades requiere utilizar información epidemiológica y poblacional que permita aproximarse a las condiciones de salud de la población.
        p.mb-4 Para la construcción de la nota técnica, el reconocimiento de estas necesidades permite establecer los servicios y tecnologías que deben considerarse en el acuerdo de voluntades. El análisis puede abarcar las diferentes intervenciones requeridas de acuerdo con las condiciones de la población, desde acciones de promoción y mantenimiento de la salud hasta aquellas relacionadas con el diagnóstico, tratamiento, rehabilitación y demás atenciones que correspondan al objeto del acuerdo.
        .row.align-items-center
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img13.svg" alt="")
          .col-md-10
            p.mb-0 Por ejemplo, una población con una determinada condición de salud puede requerir actividades de educación, seguimiento y control, además de los servicios destinados al tratamiento de la enfermedad. De esta manera, el análisis de necesidades permite considerar las intervenciones requeridas de manera integral y no limitar la proyección únicamente a las atenciones que ya han sido utilizadas.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 En la construcción de la nota técnica, las necesidades identificadas deben relacionarse con la población objeto, las condiciones epidemiológicas, los riesgos en salud y las características del territorio. Esta información constituye un insumo para sustentar la selección y proyección de los servicios y tecnologías que harán parte del acuerdo de voluntades.

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Población objeto total y población susceptible

    p.mb-4 Una vez identificadas las necesidades de la población y los servicios y tecnologías relacionados con estas, es necesario determinar cuál es la población que será considerada en el acuerdo de voluntades. Para ello, se diferencian la población objeto total y la población susceptible, conceptos que permiten establecer el alcance de los servicios y tecnologías que serán proyectados en la nota técnica.

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.tema1-tarjeta--a.p-4
        img.tema1-tarjeta__icono.mb-4(src="@/assets/curso/temas/t1/img14.svg" alt="")
        h5.text-center Población objeto total
        p.mb-0 Corresponde al universo de personas que se encuentra comprendido dentro del objeto del acuerdo de voluntades. Su tamaño depende de las condiciones y del alcance definido en dicho acuerdo y generalmente se expresa mediante un número absoluto.
      .col-md.tarjeta.tema1-tarjeta--b.p-4
        img.tema1-tarjeta__icono.mb-4(src="@/assets/curso/temas/t1/img15.svg" alt="")
        h5.text-center Población susceptible
        p.mb-0 Corresponde al grupo de personas dentro de la población objeto total que, de acuerdo con sus características, condiciones de salud, riesgos o necesidades, puede requerir un servicio o tecnología específico. Por esta razón, la población susceptible puede variar de un servicio o tecnología a otro y no necesariamente corresponde al total de la población objeto.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 3.
      span Diferencias entre población objeto total y población susceptible
    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Aspecto
            th Población objeto total
            th Población susceptible
        tbody
          tr
            td Definición
            td Universo de personas comprendido en el acuerdo de voluntades.
            td Parte de la población objeto que puede requerir un servicio o tecnología específico.
          tr
            td Alcance
            td Corresponde al conjunto general de personas definido para el acuerdo.
            td Se delimita de acuerdo con las características, condiciones de salud, riesgos o necesidades relacionadas con cada servicio o tecnología.
          tr
            td Expresión
            td Generalmente se expresa como un número absoluto.
            td Puede establecerse mediante proporciones, porcentajes, prevalencias, incidencias o tasas de uso, según la información disponible.
          tr
            td Aplicación
            td Permite establecer el universo sobre el cual se desarrolla el análisis.
            td Permite realizar estimaciones más específicas de utilización de los servicios y tecnologías.

    p.mb-4 Para establecer la población susceptible de cada servicio o tecnología, se deben considerar diferentes elementos:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t1/img16.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-md-6")
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img17.svg" alt="")
              p.mb-0.text-center La población que requiere el servicio o tecnología, de acuerdo con las rutas integrales de atención en salud, las guías de práctica clínica o los consensos de expertos disponibles.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img18.svg" alt="")
              p.mb-0.text-center Los parámetros epidemiológicos, como prevalencia, incidencia o tasa de uso, preferiblemente obtenidos de información correspondiente a la población y al territorio analizados.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img19.svg" alt="")
              p.mb-0.text-center Las condiciones operativas y territoriales, entre ellas la distribución urbana o rural, el acceso a telemedicina y la disponibilidad de talento humano especializado.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img20.svg" alt="")
              p.mb-0.text-center Los riesgos primarios o técnicos asociados con la población y con los servicios o tecnologías objeto del análisis.

    p.mb-4 Por ejemplo, si un acuerdo de voluntades comprende la atención de una población con una determinada condición de salud, no todas las personas incluidas en el acuerdo necesariamente requerirán los mismos servicios. La población susceptible de una consulta especializada puede ser diferente de la población que requiere actividades de promoción, seguimiento o control. Esta diferenciación permite realizar proyecciones de utilización más ajustadas a las características y necesidades de cada grupo.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En la construcción de la nota técnica, la diferenciación entre población objeto total y población susceptible permite relacionar el alcance del acuerdo de voluntades con las necesidades específicas de cada servicio o tecnología. De esta manera, las estimaciones pueden sustentarse en las características reales de la población y no únicamente en el número total de personas cubiertas.

    Separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Parámetros epidemiológicos

    p.mb-4 Los parámetros epidemiológicos permiten describir y analizar la ocurrencia de eventos y condiciones de salud en una población determinada. En la construcción de la nota técnica, estos parámetros aportan información para estimar la población susceptible y proyectar la utilización de los servicios y tecnologías de salud.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img21.svg" alt="")
      .col-md-10.col-lg-9
        .cajon.color-secundario.p-4
          p.mb-0 Entre los parámetros considerados se encuentran la incidencia, la prevalencia y la tasa de uso, cuya selección depende de las características de la población y del servicio o tecnología que se pretenda analizar.

    .BGF02.p-5.mb-4
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")          
            .row.justify-content-center.align-items-center.p-4
              .col-md-6.mb-4.mb-md-0
                h5 Incidencia
                p.mb-4 La incidencia se relaciona con la aparición de casos nuevos de una enfermedad o evento de salud en una población durante un periodo determinado. Este parámetro resulta útil para analizar eventos que se presentan por primera vez y estimar el comportamiento esperado de nuevos casos.
                p.mb-0 En la nota técnica, la incidencia puede utilizarse cuando el servicio o tecnología está relacionado con la atención de eventos o condiciones cuya aparición durante un periodo sea relevante para establecer la población susceptible.
              .col-md-6
                figure
                  img(src="@/assets/curso/temas/t1/img22.png" alt="")
            .row.justify-content-center.align-items-center.p-4
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src="@/assets/curso/temas/t1/img23.png" alt="")
              .col-md-6
                h5 Prevalencia
                p.mb-4 La prevalencia se refiere a la proporción de personas de una población que presenta una determinada enfermedad, condición o evento de salud en un momento o periodo específico. A diferencia de la incidencia, considera los casos existentes en la población analizada.
                p.mb-0 Este parámetro puede ser útil para establecer el tamaño de poblaciones que requieren seguimiento, control o atención de condiciones de salud ya presentes.
            .row.justify-content-center.align-items-center.p-4
              .col-md-6.mb-4.mb-md-0
                h5 Tasa de uso
                p.mb-4 La tasa de uso permite relacionar la utilización de un servicio o tecnología con una población determinada durante un periodo. Su análisis aporta información sobre el comportamiento observado de la utilización de los servicios y puede contribuir a establecer las frecuencias esperadas para la nota técnica.
                p.mb-0 Para determinar los parámetros epidemiológicos asociados con las poblaciones definidas, pueden considerarse prevalencia, incidencia, tasas de uso, entre otros, y recomienda priorizar fuentes correspondientes al territorio o al contexto poblacional analizado.
              .col-md-6
                figure
                  img(src="@/assets/curso/temas/t1/img24.png" alt="")

    p.mb-4
      | Los parámetros epidemiológicos no deben analizarse de manera aislada. Su utilidad depende de la población a la que se aplican, del servicio o tecnología objeto del análisis y de las fuentes utilizadas para obtener la información. Por ello, al establecer la 
      strong población susceptible
      | , es necesario seleccionar el parámetro que corresponda a la condición o servicio analizado y utilizar información que permita sustentar la estimación.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img25.svg" alt="")
      .col-md-10.col-lg-9
        p.mb-0 Las fuentes para establecer estos parámetros deben priorizar, en su orden, la caracterización poblacional o el ASIS del territorio, la caracterización poblacional nacional y otras fuentes locales, nacionales o internacionales disponibles, según corresponda.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En la construcción de la nota técnica, los parámetros epidemiológicos constituyen un insumo para relacionar las condiciones de salud de la población con la estimación de la población susceptible y la frecuencia esperada de utilización de los servicios y tecnologías.

    Separador
    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7 Identificación y codificación de servicios y tecnologías

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t1/img26.png" alt="")
      .col-lg-7
        p.mb-4 Una vez caracterizada la población, identificadas sus necesidades y determinada la población susceptible, es necesario establecer con precisión los servicios y tecnologías que serán considerados en el acuerdo de voluntades. Para ello, estos deben identificarse mediante los códigos correspondientes a las tablas de referencia estandarizadas señaladas en el documento de Lineamientos de la Nota Técnica.
        .row.align-items-center
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img27.svg" alt="")
          .col-md-10
            p.mb-0 La codificación permite utilizar una denominación estandarizada de los servicios y tecnologías y facilita su seguimiento, facturación y reporte dentro del Sistema General de Seguridad Social en Salud (SGSSS). Por esta razón, la identificación no debe limitarse a una descripción en lenguaje libre, sino que debe corresponder al código oficial aplicable.

    p.mb-4 Entre las principales codificaciones mencionadas en el documento se encuentran:

    .tema1-slyder.tema1-slyder--codificaciones.mb-4
      SlyderB(:datos="codificaciones")

    .row.g-0.align-items-stretch.tema1-panel.mb-4
      .col-lg-5
        figure.h-100
          img.tema1-panel__imagen(src="@/assets/curso/temas/t1/img31.png" alt="")
      .col-lg-7.p-4
        .row.align-items-center.mb-4
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img32.svg" alt="")
          .col-md-10
            h5.mb-0 Actualización de los códigos
        p.mb-4
          | Los códigos y las tablas de referencia pueden presentar modificaciones. Por ello, el documento recomienda verificar la información histórica frente a la clasificación vigente antes de elaborar el listado definitivo de servicios y tecnologías. En el caso de los procedimientos, debe consultarse la 
          strong Clasificación Única de Procedimientos en Salud (CUPS)
          |  vigente, de acuerdo con la normativa aplicable.
        p.mb-0 Esta verificación resulta relevante porque un código puede haber sido modificado, dividido o retirado de una clasificación posterior. En consecuencia, utilizar códigos desactualizados puede afectar la identificación de los servicios y tecnologías incluidos en la nota técnica y generar dificultades en los procesos posteriores de seguimiento y facturación.

    p.mb-0 En la construcción de la nota técnica, la identificación y codificación de los servicios y tecnologías debe realizarse a partir de las tablas y referencias vigentes, de manera que la información utilizada corresponda al objeto del acuerdo de voluntades y pueda ser reconocida de forma estandarizada por las partes.
</template>

<script>
import img28 from '@/assets/curso/temas/t1/img28.png'
import img29 from '@/assets/curso/temas/t1/img29.png'
import img30 from '@/assets/curso/temas/t1/img30.png'

export default {
  name: 'Tema1',
  data: () => ({
    codificaciones: [
      {
        titulo: 'Clasificación Única de Procedimientos en Salud (CUPS)',
        texto:
          'Permite identificar los procedimientos en salud mediante códigos estandarizados. La Resolución 2706 de 2025 establece la CUPS vigente y sus modificaciones, por lo que debe consultarse esta clasificación al momento de identificar y codificar los procedimientos incluidos en la nota técnica.',
        imagen: img28,
      },
      {
        titulo:
          'Código Único de Medicamentos (CUM) e Identificador Único de Medicamento (IUM)',
        texto:
          'Corresponden a los identificadores utilizados para los medicamentos, de acuerdo con la información presentada en el documento y las referencias allí señaladas.',
        imagen: img29,
      },
      {
        titulo: 'Dispositivos médicos e insumos',
        texto:
          'El documento señala que, mientras no exista una codificación única definida para estos elementos, las partes que suscriben el acuerdo pueden establecer su identificación de manera conjunta.',
        imagen: img30,
      },
    ],
  }),
}
</script>
