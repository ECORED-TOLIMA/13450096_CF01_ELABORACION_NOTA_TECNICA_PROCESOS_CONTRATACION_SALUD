<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de la información en salud

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t2/img1.png" alt="")
      .col-lg-7
        .row.align-items-start
          .col-md-2.mb-3.mb-md-0
            img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img2.svg" alt="")
          .col-md-10
            p La construcción de una nota técnica requiere información que permita sustentar las estimaciones relacionadas con la población, las necesidades de atención, la utilización de los servicios y tecnologías en salud y las condiciones en las que se desarrolla la prestación. Por esta razón, el análisis de información constituye una etapa fundamental para transformar los datos disponibles en insumos que permitan realizar proyecciones acordes con las características de la población objeto.
        p.mb-0 Las fuentes de información del sector salud aportan datos desde diferentes perspectivas. Algunas permiten identificar la población y sus condiciones de afiliación; otras contienen información sobre las atenciones efectivamente realizadas, los eventos de interés en salud pública, las condiciones de salud o el comportamiento de determinadas enfermedades y grupos de riesgo. La integración de estas fuentes permite obtener una visión más completa de la población y reducir el riesgo de realizar estimaciones a partir de una única fuente de información.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t2/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A partir de la información disponible, es posible analizar el comportamiento histórico de los servicios y tecnologías utilizados, establecer frecuencias de uso y reconocer diferencias asociadas con las características de la población o con las condiciones operativas de la prestación. Este análisis constituye un insumo para proyectar las necesidades esperadas durante el periodo de vigencia del acuerdo de voluntades.


    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Asimismo, el análisis debe considerar la relación entre la oferta y la demanda de servicios de salud. La información sobre los servicios disponibles, la capacidad de prestación y las atenciones efectivamente realizadas permite identificar condiciones que pueden influir en el comportamiento observado y que deben tenerse en cuenta al interpretar los datos utilizados para la construcción de la nota técnica.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Fuentes de información del sector salud
    .BGF00.px-5.p-4
      p.mb-4 La construcción de la nota técnica requiere información que permita caracterizar la población objeto, identificar sus necesidades de atención, analizar las condiciones de salud y establecer el comportamiento de los servicios y tecnologías utilizados. Para ello, se dispone de diferentes fuentes de información del sector salud, cada una de las cuales aporta datos que pueden complementar el análisis.

      .row.justify-content-center.align-items-center.mb-4
        .col-md-2.col-lg-1.mb-3.mb-md-0
          img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img4.svg" alt="")
        .col-md-10.col-lg-9
          p.mb-0 Entre las principales fuentes se encuentran el Sistema Integrado de Información de la Protección Social (SISPRO), el Registro Individual de Prestación de Servicios de Salud (RIPS), la Base de Datos Única de Afiliados (BDUA), el Sistema de Vigilancia en Salud Pública (SIVIGILA), la Cuenta de Alto Costo (CAC) y la información relacionada con la caracterización poblacional y el Análisis de Situación de Salud (ASIS).
    .BGF04.px-5.p-5.mb-4
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/img5.png" alt="")
            .col-md-6.mb-4.mb-md-0
              h5 Sistema Integrado de Información de la Protección Social (SISPRO)
              p.mb-4 Integra información proveniente de diferentes registros del sector salud y proporciona datos relacionados con la población, la afiliación, la prestación de servicios y las condiciones de salud. Su consulta permite disponer de información para caracterizar la población y apoyar el análisis requerido en la construcción de la nota técnica. Para mayor información acceder a: 
              p.mb-0
                a(href="https://www.sispro.gov.co/Pages/Home.aspx" target="_blank" rel="noopener noreferrer") https://www.sispro.gov.co/Pages/Home.aspx
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/img6.png" alt="")
            .col-md-6.mb-4.mb-md-0
              h5 Registro Individual de Prestación de Servicios de Salud (RIPS)
              p.mb-4 Contiene información relacionada con las atenciones realizadas a los usuarios de los servicios de salud. Su análisis permite identificar el comportamiento histórico de la prestación y establecer las frecuencias de utilización de los servicios y tecnologías. Para este propósito, resulta necesario contar con información consistente y depurada. Para mayor información acceder a:
              p.mb-0
                |  
                a(href="https://www.sispro.gov.co/central-financiamiento/Pages/facturacion-electronica.aspx" target="_blank" rel="noopener noreferrer") https://www.sispro.gov.co/central-financiamiento/Pages/facturacion-electronica.aspx
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/img7.png" alt="")
            .col-md-6.mb-4.mb-md-0
              h5 Base de Datos Única de Afiliados (BDUA)
              p.mb-4 Contiene información relacionada con la afiliación de las personas al Sistema General de Seguridad Social en Salud. Permite identificar aspectos como la población afiliada y el régimen al que pertenece, información que contribuye a delimitar y caracterizar la población objeto del acuerdo de voluntades. Para mayor información acceder a:
              p.mb-0
                |  
                a(href="https://servicios.adres.gov.co/BDUA/Consulta-Afiliados-BDUA" target="_blank" rel="noopener noreferrer") https://servicios.adres.gov.co/BDUA/Consulta-Afiliados-BDUA
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/img8.png" alt="")
            .col-md-6.mb-4.mb-md-0
              h5 Sistema de Vigilancia en Salud Pública (SIVIGILA)
              p.mb-4 Proporciona información sobre eventos de interés en salud pública que son objeto de vigilancia. Estos datos pueden contribuir al análisis de las condiciones epidemiológicas de una población y a la identificación de situaciones que deben considerarse en la proyección de servicios y tecnologías en salud. Para mayor información acceder a:
              p.mb-0
                |  
                a(href="https://portalsivigila.ins.gov.co/Paginas/inicio.aspx" target="_blank" rel="noopener noreferrer") https://portalsivigila.ins.gov.co/Paginas/inicio.aspx
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/img9.png" alt="")
            .col-md-6.mb-4.mb-md-0
              h5 Cuenta de Alto Costo (CAC)
              p.mb-4 Genera información e indicadores relacionados con la gestión del riesgo de determinadas enfermedades crónicas y condiciones de alto costo. Esta información puede ser utilizada para analizar poblaciones que presentan condiciones específicas y establecer elementos relacionados con sus necesidades de atención. Para mayor información acceder a:
              p.mb-0
                |  
                a(href="https://cuentadealtocosto.org/" target="_blank" rel="noopener noreferrer") https://cuentadealtocosto.org/
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/img10.png" alt="")
            .col-md-6.mb-4.mb-md-0
              h5 Caracterización poblacional y Análisis de Situación de Salud (ASIS)
              p.mb-4 La caracterización poblacional aporta información sobre las condiciones de salud y las características demográficas, sociales, económicas y territoriales de una población. El Análisis de Situación de Salud (ASIS) integra información que permite reconocer las condiciones de salud, las necesidades y las particularidades de los territorios, constituyéndose en un insumo para la planeación de las intervenciones en salud. Para mayor información acceder a:
              p.mb-0
                |  
                a(href="https://www.minsalud.gov.co/salud/epidemiologia-demografia/Paginas/analisis-de-situacion-de-salud.aspx" target="_blank" rel="noopener noreferrer") https://www.minsalud.gov.co/salud/epidemiologia-demografia/Paginas/analisis-de-situacion-de-salud.aspx
            

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t2/img11.png" alt="")
      .col-lg-7
        p.mb-4 Las diferentes fuentes de información aportan datos complementarios y su utilización depende del aspecto que se pretenda analizar. Por ejemplo, la información de afiliación permite delimitar la población objeto, mientras que los registros de prestación facilitan el análisis de los servicios utilizados y las fuentes epidemiológicas aportan información sobre las condiciones de salud y los riesgos de la población.
        .row.align-items-start
          .col-md-2.mb-3.mb-md-0
            img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img12.svg" alt="")
          .col-md-10
            p.mb-0 Por esta razón, la construcción de la nota técnica requiere analizar la información de manera articulada, considerando la población objeto, el periodo de análisis, las características del territorio y el propósito del acuerdo de voluntades. La integración de las fuentes proporciona elementos para sustentar las estimaciones de utilización y las proyecciones de los servicios y tecnologías en salud.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 4.
      span Principales fuentes de información para la construcción de la nota técnica
    .tabla-a.color-acento-contenido.tema2-tabla.mb-0
      table
        thead
          tr
            th Fuente de información
            th Información que aporta
            th Utilidad en la nota técnica
        tbody
          tr
            td SISPRO
            td Información integrada de diferentes registros del sector salud.
            td Apoyar el análisis de la población, las condiciones de salud y la prestación de servicios.
          tr
            td RIPS
            td Información de las atenciones realizadas a los usuarios.
            td Analizar la utilización histórica de servicios y tecnologías y establecer frecuencias de uso.
          tr
            td BDUA
            td Información relacionada con la afiliación al sistema de salud.
            td Delimitar y caracterizar la población objeto.
          tr
            td SIVIGILA
            td Información sobre eventos de interés en salud pública.
            td Identificar condiciones y eventos epidemiológicos relevantes para el análisis.
          tr
            td CAC
            td Información e indicadores sobre determinadas enfermedades crónicas y condiciones de alto costo.
            td Analizar poblaciones y condiciones específicas de riesgo.
          tr
            td Caracterización poblacional y ASIS
            td Información sobre condiciones de salud, características poblacionales y territoriales.
            td Identificar necesidades, riesgos y particularidades de la población y el territorio.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Frecuencia de uso de servicios y tecnologías
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t2/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez identificada la población objeto y analizadas sus características y necesidades, es necesario establecer la frecuencia con la que se espera que utilice los servicios y tecnologías en salud incluidos en el acuerdo de voluntades. Esta información constituye un elemento fundamental para realizar las estimaciones requeridas en la nota técnica.
       

    p.mb-4 La frecuencia de uso corresponde a la cantidad de veces que un determinado servicio o tecnología puede ser utilizado por una población durante un periodo establecido. Su determinación requiere analizar información histórica de utilización y relacionarla con las características de la población objeto, las condiciones de salud y las particularidades de la prestación.
    p.mb-4 Para establecer las frecuencias de uso pueden considerarse los siguientes elementos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img14.svg" alt="")
        h5.text-center Población objeto
        p.mb-5.text-center Permite determinar el grupo sobre el cual se realizará la estimación.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img15.svg" alt="")
        h5.text-center Información histórica
        p.mb-5.text-center Los registros de utilización de periodos anteriores constituyen un insumo para identificar comportamientos y establecer estimaciones.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img16.svg" alt="")
        h5.text-center Servicio o tecnología
        p.mb-5.text-center Cada servicio o tecnología requiere establecer su propia frecuencia de utilización.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img17.svg" alt="")
        h5.text-center Condiciones operativas
        p.mb-5.text-center La disponibilidad de servicios, las características del territorio y las condiciones de prestación pueden influir en la utilización.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img18.svg" alt="")
        h5.text-center Periodo de análisis
        p.mb-5.text-center Permite determinar el comportamiento de la utilización durante un intervalo definido.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img19.svg" alt="")
        h5.text-center Características de la población
        p.mb-5.text-center Las diferencias demográficas, epidemiológicas y territoriales pueden generar frecuencias de uso diferentes.

    p.mb-4 Las frecuencias no necesariamente son iguales para toda la población. Cuando un mismo servicio o tecnología presenta comportamientos diferentes entre grupos poblacionales, es necesario analizar nuevamente las características de estos grupos y establecer los ponderadores correspondientes. Por esta razón, en algunos casos resulta necesario dividir la población inicialmente definida en grupos que presenten características o condiciones operativas diferenciadas.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Por ejemplo, un servicio puede presentar una frecuencia de utilización diferente entre grupos de población debido a sus características epidemiológicas, edad, ubicación territorial o condiciones de acceso. En estos casos, aplicar una única frecuencia al total de la población podría generar una estimación que no represente adecuadamente el comportamiento esperado.

    .row.align-items-center.mb-0
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t2/img20.png" alt="")
      .col-lg-7
        p.mb-4 La información histórica de utilización constituye, por tanto, un elemento importante para establecer las frecuencias. En este proceso, los datos provenientes de los registros de prestación deben analizarse teniendo en cuenta la población objeto y las condiciones bajo las cuales se produjeron las atenciones. La información debe ser consistente y encontrarse depurada para evitar que registros que no correspondan a la población o al servicio analizado afecten las estimaciones.
        .row.align-items-start
          .col-md-2.mb-3.mb-md-0
            img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img21.svg" alt="")
          .col-md-10
            p.mb-0 En la construcción de la nota técnica, las frecuencias de uso permiten relacionar la población susceptible, los servicios y tecnologías en salud y la utilización esperada durante el periodo del acuerdo de voluntades. De esta manera, se generan insumos para las proyecciones que posteriormente se relacionarán con los costos y demás elementos de la nota técnica.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Análisis de la oferta y la demanda de servicios

    p.mb-4 El análisis de la oferta y la demanda permite relacionar las necesidades de la población con la capacidad disponible para atenderlas y con el comportamiento observado en la utilización de los servicios de salud. Esta información contribuye a interpretar los datos históricos y a establecer proyecciones coherentes con las condiciones de la población objeto y del territorio.

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h5 La oferta de servicios de salud
          p.mb-0 se relaciona con la capacidad disponible para prestar los servicios y tecnologías requeridos por una población. Para su análisis pueden considerarse aspectos como la disponibilidad de talento humano, los servicios habilitados, la infraestructura, los equipos, los horarios de atención y las condiciones territoriales que pueden influir en la prestación.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/img22.png', alt='n')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/t2/img23.png', alt='n')
        .col-md-6
          h5 La demanda de servicios de salud
          p.mb-0 corresponde a los servicios que la población solicita o utiliza efectivamente. Como se explicó anteriormente, la demanda observada no necesariamente representa la totalidad de las necesidades de una población, debido a que pueden existir condiciones que faciliten o limiten el acceso a los servicios.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img24.svg" alt="")
      .col-md-10.col-lg-9
        .cajon.color-primario.p-4
          p.mb-0 Por esta razón, el análisis debe considerar tanto la oferta disponible como el comportamiento de la demanda. La relación entre ambas puede variar según las características de la población, el territorio, las condiciones epidemiológicas y las posibilidades de acceso a los servicios.

    p.mb-4 El análisis de la oferta y la demanda no debe limitarse a una observación puntual. El comportamiento registrado durante diferentes periodos permite identificar tendencias y variaciones relevantes para las proyecciones de la nota técnica. Para este análisis pueden considerarse los siguientes aspectos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img25.svg" alt="")
        h5.text-center Comportamiento de la utilización
        p.mb-5.text-center Analizar los servicios y tecnologías utilizados durante diferentes periodos, teniendo en cuenta las condiciones en las que se produjeron las atenciones.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img26.svg" alt="")
        h5.text-center Frecuencia esperada
        p.mb-5.text-center Cuando existen guías de práctica clínica o Rutas Integrales de Atención en Salud (RIAS) que permiten establecer una frecuencia esperada, estas pueden utilizarse como referentes para analizar la utilización de determinados servicios.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img27.svg" alt="")
        h5.text-center Información histórica
        p.mb-5.text-center Cuando la demanda presenta mayor variabilidad, la información histórica de la misma población o de poblaciones comparables puede aportar elementos para establecer las estimaciones correspondientes.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img28.svg" alt="")
        h5.text-center Cambios en la población
        p.mb-5.text-center Considerar las variaciones en el tamaño y las características demográficas o epidemiológicas de la población durante el periodo analizado.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img29.svg" alt="")
        h5.text-center Cambios en la oferta
        p.mb-5.text-center Identificar modificaciones en la disponibilidad de servicios, talento humano, infraestructura u otras condiciones que puedan influir en el comportamiento observado.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t2/img30.svg" alt="")
        h5.text-center Condiciones de acceso y prestación
        p.mb-5.text-center Considerar factores que puedan facilitar o limitar la utilización de los servicios, como las condiciones territoriales y operativas.

    p.mb-4 Una variación en el número de atenciones no necesariamente significa que hayan cambiado las necesidades de salud de la población; también puede estar relacionada con modificaciones en la población, la oferta disponible, el acceso o las condiciones de prestación.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 En la construcción de la nota técnica, el análisis conjunto de la oferta y la demanda permite relacionar la capacidad disponible, la utilización observada y las necesidades de la población objeto. Esta información complementa el análisis de las frecuencias de uso y proporciona elementos para sustentar las proyecciones de servicios y tecnologías durante el periodo del acuerdo de voluntades.

    .tema2-destacado-imagen.mb-0
      .row.g-0.align-items-center
        .col-lg-7.p-4.order-2.order-lg-1
          .tema2-destacado-imagen__texto.p-4
            p.mb-0 Por ejemplo, una población puede presentar una necesidad determinada de atención, pero la utilización registrada puede ser inferior debido a dificultades de acceso, disponibilidad limitada de servicios o condiciones territoriales. En este caso, analizar únicamente el número histórico de atenciones podría no representar adecuadamente las necesidades de la población. Por ello, la interpretación de los datos debe considerar conjuntamente las características de la población, la demanda observada y la capacidad de oferta disponible.
        .col-lg-5.order-1.order-lg-2
          figure.mb-0
            img(src="@/assets/curso/temas/t2/img31.png" alt="")

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Validación de los soportes de atención

    p.mb-4 La información utilizada para establecer las frecuencias de uso debe corresponder a atenciones efectivamente realizadas. Por esta razón, antes de utilizar los datos históricos como insumo para la construcción de la nota técnica, es necesario validar los soportes que respaldan la prestación de los servicios y tecnologías en salud.

    .row.g-0.align-items-stretch.tema2-panel.mb-4
      .col-lg-5
        figure.h-100
          img.tema2-panel__imagen(src="@/assets/curso/temas/t2/img32.png" alt="")
      .col-lg-7.p-4
        img.tema2-icono.d-none.d-lg-block.ms-0.mb-4(src="@/assets/curso/temas/t2/img33.svg" alt="")
        p.mb-0
          strong Los soportes de atención
          |  corresponden a la documentación clínica y administrativa que permite acreditar la prestación de un servicio o tecnología en salud. Entre estos pueden encontrarse la historia clínica, la orden médica, el Registro Individual de Prestación de Servicios de Salud (RIPS) asociado y los documentos relacionados con la facturación electrónica en salud.

    p.mb-4 La validación de estos soportes permite comprobar que la información utilizada para analizar las frecuencias de uso corresponde a servicios efectivamente prestados y que los registros guardan relación con la población objeto y con los servicios analizados. Para este proceso pueden considerarse los siguientes aspectos:

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Correspondencia de la atención") Verificar que el soporte permita establecer que el servicio o tecnología fue efectivamente prestado.
          p.mb-0(numero="2" titulo="Identificación del servicio") Comprobar que el servicio o tecnología registrado corresponda al código y denominación utilizados en el análisis.
          p.mb-0(numero="3" titulo="Correspondencia con la población") Verificar que la atención corresponda a personas que hacen parte de la población objeto o susceptible definida para el análisis.
          p.mb-0(numero="4" titulo="Consistencia de los registros") Identificar posibles duplicidades, inconsistencias o errores de codificación que puedan alterar las frecuencias de uso.
          p.mb-0(numero="5" titulo="Relación entre los soportes") Comprobar la correspondencia entre los documentos clínicos, los registros de prestación y la información utilizada para el análisis histórico.
          p.mb-0(numero="6" titulo="Soportes de facturación") Considerar la documentación asociada a la factura electrónica en salud y los requisitos establecidos para respaldar la prestación de los servicios.
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/t2/img34.png" alt="")

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0
            | La validación también debe considerar el marco normativo relacionado con la auditoría, las devoluciones, las glosas y las respuestas. La 
            strong Resolución 2284 de 2023
            | , modificada por la 
            strong Resolución 1885 de 2024
            | , establece disposiciones relacionadas con estos procesos, mientras que la 
            strong Circular Conjunta 007 de 2025
            |  del Ministerio de Salud y Protección Social y la Superintendencia Nacional de Salud aborda aspectos relacionados con la justificación de las glosas y su utilización dentro de los procesos de facturación.

    p.mb-4 Es importante diferenciar la validación de los soportes de la función de la nota técnica. La nota técnica utiliza información histórica para analizar el comportamiento de las frecuencias de uso y sustentar proyecciones; por tanto, la validación busca garantizar la calidad y correspondencia de los datos utilizados como insumo, pero no convierte la nota técnica en un mecanismo de auditoría de cada servicio prestado.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t2/img35.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, para proyectar la frecuencia de un determinado servicio, se dispone de registros históricos de atención. Antes de utilizar estos datos, se identifican registros duplicados, atenciones correspondientes a personas que no pertenecen a la población objeto y registros cuyo código no corresponde al servicio analizado. Después de realizar la validación y depuración, los datos que cumplen las condiciones establecidas pueden utilizarse como insumo para analizar el comportamiento histórico y establecer las frecuencias correspondientes.
</template>

<script>
export default {
  name: 'Tema2',
}
</script>
