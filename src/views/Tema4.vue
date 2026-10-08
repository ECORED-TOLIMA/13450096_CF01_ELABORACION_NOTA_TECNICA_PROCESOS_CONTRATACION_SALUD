<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Calidad y atención en el contexto de la contratación en salud

    .row.align-items-stretch.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure.h-100
          img.tema4-apertura__imagen(src="@/assets/curso/temas/t4/img1.png" alt="")
      .col-lg-8
        p La calidad de la atención en salud constituye un elemento fundamental en la prestación de servicios y tecnologías y se relaciona con las condiciones bajo las cuales se desarrollan los acuerdos de voluntades entre las entidades responsables de pago, los prestadores de servicios de salud y los proveedores de tecnologías en salud. Por esta razón, la contratación en salud no se limita a establecer condiciones económicas, sino que también debe considerar aspectos relacionados con la capacidad de prestación, la calidad de la atención, la gestión del riesgo y la seguridad del paciente.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En Colombia, estos aspectos se articulan con el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud (SOGCS), que establece mecanismos orientados a promover y mantener las condiciones de calidad en la prestación de los servicios de salud. Dentro de este sistema se encuentran componentes como la habilitación de servicios, la auditoría para el mejoramiento de la calidad, el Sistema Único de Acreditación y el Sistema de Información para la Calidad.
        .row
          .col-lg-2
            img.tema4-icono.d-none.d-lg-block(src="@/assets/curso/temas/t4/img2.svg" alt="")
          .col-lg-10
            p.mb-0 En el contexto de la nota técnica, el análisis de la calidad adquiere importancia porque las características de los servicios contratados, las condiciones de prestación y los resultados de la atención pueden relacionarse con el comportamiento de las frecuencias de uso, los costos y los riesgos asociados al acuerdo de voluntades. De igual manera, la disponibilidad de servicios habilitados y las condiciones de atención constituyen elementos que deben considerarse al analizar la oferta y las necesidades de la población objeto.

    p.mb-0 La seguridad del paciente también se relaciona con este contexto. La aplicación de guías de práctica clínica, protocolos de atención, barreras de seguridad y mecanismos para identificar y gestionar eventos adversos contribuye a reducir riesgos asociados a la prestación. Estas condiciones se relacionan, a su vez, con el riesgo técnico que puede presentarse cuando existen variaciones en la utilización de recursos, complicaciones o resultados de la atención que podrían estar asociados con factores relacionados con la prestación.
    .BGF05.px-5.p-4
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          role="img"
          :style="{'background-image':`url(${require_src('@/assets/curso/temas/t4/img3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Asimismo, las Rutas Integrales de Atención en Salud (RIAS) proporcionan referentes para organizar las intervenciones requeridas de acuerdo con las características de la población, las condiciones de salud y los grupos de riesgo. Su consideración en la construcción de la nota técnica permite relacionar las intervenciones y frecuencias de atención con las necesidades identificadas en la población objeto.

      p.mb-4 En este contexto, el apartado aborda los siguientes elementos:

      ul.lista-ul.mb-4
        li
          i.fas.fa-file-lines
          p.mb-0
            strong Sistema Obligatorio de Garantía de Calidad en Salud: 
            | estructura y componentes relacionados con la calidad de la atención.
        li
          i.fas.fa-file-lines
          p.mb-0
            strong Habilitación de servicios de salud: 
            | condiciones que deben cumplir los prestadores para ofertar y prestar los servicios habilitados.
        li
          i.fas.fa-file-lines
          p.mb-0
            strong Gestión del riesgo y seguridad del paciente: 
            | elementos relacionados con la identificación, prevención y seguimiento de riesgos asociados a la atención.
        li
          i.fas.fa-file-lines
          p.mb-0
            strong Rutas Integrales de Atención en Salud (RIAS): 
            | organización de las intervenciones de atención de acuerdo con las condiciones y necesidades de la población.

      p.mb-0 El análisis conjunto de estos elementos permite comprender cómo las condiciones de calidad y atención se relacionan con la prestación de los servicios y tecnologías, la gestión de los riesgos y la información que sustenta la construcción y seguimiento de la nota técnica.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Sistema Obligatorio de Garantía de Calidad de la Atención de Salud

    .row.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t4/img4.png" alt="")
      .col-lg-7
        p.mb-4 El Sistema Obligatorio de Garantía de Calidad de la Atención de Salud (SOGCS) establece el conjunto de condiciones, mecanismos y procesos orientados a promover y mantener la calidad de la atención en salud. Su funcionamiento se relaciona con las condiciones en las que los servicios son prestados y con los procesos de seguimiento y mejoramiento de la atención.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El SOGCS se encuentra reglamentado en el Decreto 780 de 2016 y comprende cuatro componentes: el Sistema Único de Habilitación, la Auditoría para el Mejoramiento de la Calidad de la Atención de Salud (PAMEC), el Sistema Único de Acreditación y el Sistema de Información para la Calidad.

    p.mb-4 Estos componentes cumplen funciones diferentes y se relacionan entre sí:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.tema4-tarjeta--a.p-4
        img.tema4-tarjeta__icono.mb-4(src="@/assets/curso/temas/t4/img5.svg" alt="")
        h5.text-center Sistema Único de Habilitación
        p.mb-0 Establece las condiciones que deben cumplir los prestadores para su inscripción y para la habilitación de los servicios de salud que ofertan y prestan.
      .col-md.tarjeta.tema4-tarjeta--b.p-4
        img.tema4-tarjeta__icono.mb-4(src="@/assets/curso/temas/t4/img6.svg" alt="")
        h5.text-center Auditoría para el Mejoramiento de la Calidad de la Atención de Salud (PAMEC)
        p.mb-0 Comprende procesos de evaluación y seguimiento orientados al mejoramiento de la calidad de la atención y a la identificación de desviaciones que requieren intervención.
      .col-md.tarjeta.tema4-tarjeta--c.p-4
        img.tema4-tarjeta__icono.mb-4(src="@/assets/curso/temas/t4/img7.svg" alt="")
        h5.text-center Sistema Único de Acreditación
        p.mb-0 Corresponde a un proceso voluntario de evaluación de estándares superiores de calidad por parte de las instituciones que participan en este proceso.
      .col-md.tarjeta.tema4-tarjeta--d.p-4
        img.tema4-tarjeta__icono.mb-4(src="@/assets/curso/temas/t4/img8.svg" alt="")
        h5.text-center Sistema de Información para la Calidad
        p.mb-0 Proporciona información e indicadores para el monitoreo de la calidad y el seguimiento de su comportamiento. La Resolución 256 de 2016 establece disposiciones relacionadas con este sistema y con los indicadores para el monitoreo de la calidad en salud.

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 En el contexto de los acuerdos de voluntades, estos componentes permiten relacionar las condiciones de calidad con la prestación de los servicios y tecnologías contratados. Por ejemplo, la habilitación permite verificar que los servicios incluidos en el acuerdo correspondan a servicios que cuentan con las condiciones requeridas para su prestación. A su vez, los procesos de auditoría y los sistemas de información aportan elementos para realizar seguimiento al comportamiento de la atención y a sus resultados.
        .cajon.color-secundario.p-4
          p.mb-0 Esta relación también es importante para la construcción de la nota técnica. La información sobre la población, los servicios y tecnologías, las frecuencias de uso y los costos debe guardar correspondencia con las condiciones reales de prestación. Por ello, la capacidad de los prestadores, los servicios habilitados y los resultados asociados a la atención constituyen elementos que pueden complementar el análisis realizado durante la estructuración y seguimiento del acuerdo de voluntades.

    p.mb-0 De esta manera, el SOGCS proporciona un marco para comprender que la contratación en salud debe considerar no solamente qué servicios se requieren y con qué frecuencia, sino también bajo qué condiciones pueden ser prestados y cómo se realiza el seguimiento de su calidad. Estos elementos se relacionan con la gestión del riesgo, la seguridad del paciente y la sostenibilidad de los acuerdos de voluntades.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Habilitación de servicios de salud

    .row.g-0.align-items-stretch.tema4-panel.mb-4
      .col-lg-5
        figure.h-100
          img.tema4-panel__imagen(src="@/assets/curso/temas/t4/img9.png" alt="")
      .col-lg-7.p-4
        img.tema4-icono.d-none.d-lg-block.ms-0.mb-4(src="@/assets/curso/temas/t4/img10.svg" alt="")
        p La habilitación tiene una relación directa con la contratación de servicios de salud, debido a que permite establecer si un prestador cuenta con los servicios habilitados que corresponden a las atenciones que pretende ofertar o contratar.
        p.mb-0 En este contexto, el Registro Especial de Prestadores de Servicios de Salud (REPS) constituye una referencia para identificar los servicios habilitados y las condiciones registradas de los prestadores. Esta información también puede relacionarse con la identificación y codificación de servicios desarrollada anteriormente en el componente.

    p.mb-4 Por esta razón, antes de incluir un servicio en un acuerdo de voluntades, es necesario verificar que corresponda a un servicio habilitado y que exista coherencia entre la oferta disponible, las necesidades de la población y los servicios y tecnologías considerados en la nota técnica. El insumo señala que un servicio no habilitado no debe incorporarse al acuerdo de voluntades, independientemente de que se hayan calculado sus frecuencias de uso o costos.
    p.mb-4 La relación entre habilitación y nota técnica puede comprenderse a partir de tres elementos:

    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t4/img11.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center A. Población y necesidades
              p.mb-0.text-center Permiten determinar qué servicios y tecnologías pueden requerirse.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t4/img12.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center B. Oferta disponible
              p.mb-0.text-center Permite establecer si existen prestadores con capacidad para atender las necesidades identificadas.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t4/img13.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center C. Servicios habilitados
              p.mb-0.text-center Permiten verificar que los servicios considerados en el acuerdo correspondan a aquellos que el prestador está habilitado para prestar.

    .row.justify-content-center.mb-0
      .col-lg-10
        p.mb-4 De esta manera, la información sobre habilitación contribuye a que las proyecciones de servicios, frecuencias y costos de la nota técnica correspondan con las condiciones reales de prestación.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Por ejemplo, si el análisis de la población susceptible establece la necesidad de proyectar un determinado servicio especializado, la construcción de la nota técnica debe considerar no solo la frecuencia esperada y el costo asociado. También debe verificarse que el prestador o la red definida para el acuerdo cuente con dicho servicio habilitado y con las condiciones requeridas para su prestación.

        .row.align-items-center.mb-0
          .col-lg-1
            img.tema4-icono.d-none.d-lg-block(src="@/assets/curso/temas/t4/img14.svg" alt="")
          .col-lg-11
            p.mb-0 En consecuencia, la habilitación constituye un elemento que articula la calidad, la oferta de servicios y la contratación en salud, y aporta información necesaria para establecer la correspondencia entre los servicios proyectados en la nota técnica y la capacidad efectiva de prestación.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Gestión del riesgo y seguridad del paciente

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t4/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La gestión del riesgo y la seguridad del paciente son elementos relacionados con la calidad de la atención en salud. En el contexto de los acuerdos de voluntades, permiten identificar situaciones que pueden afectar los resultados de la atención, la utilización de los servicios y tecnologías y los costos asociados a su prestación.
        p.mb-0 La gestión del riesgo clínico se relaciona con los procesos de Auditoría para el Mejoramiento de la Calidad de la Atención de Salud, mediante los cuales se identifican y corrigen desviaciones en los procesos de atención. Por su parte, la seguridad del paciente se orienta a prevenir y reducir los daños evitables asociados con la atención.

    p.mb-4 Aunque ambos conceptos están relacionados, es posible diferenciarlos de la siguiente manera:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 6.
      span Diferencias entre gestión del riesgo y seguridad del paciente
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th Gestión del riesgo
            th Seguridad del paciente
        tbody
          tr
            td Identifica y gestiona situaciones que pueden afectar los resultados de la atención.
            td Busca prevenir y reducir daños evitables asociados a la atención.
          tr
            td Considera los riesgos asociados con los procesos de prestación.
            td Se concentra en las condiciones de seguridad durante la atención.
          tr
            td Puede apoyarse en auditorías, indicadores y seguimiento de resultados.
            td Incluye la aplicación de guías y protocolos, el seguimiento de eventos adversos y las barreras de seguridad.
          tr
            td Permite identificar situaciones que pueden generar variaciones en la utilización de servicios y tecnologías.
            td Contribuye a prevenir complicaciones y eventos adversos durante la atención.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Entre las acciones relacionadas con la seguridad del paciente se encuentran la adherencia a las guías de práctica clínica y protocolos de atención, el seguimiento de los eventos adversos y la implementación de barreras de seguridad en procesos asistenciales que presentan mayores riesgos.

    p.mb-4 Estos elementos se relacionan con el riesgo técnico, que corresponde a las variaciones en la utilización de recursos, la ocurrencia de complicaciones o la severidad asociadas con factores no previsibles en la atención o que no se encuentran soportados en la evidencia científica. El riesgo técnico comprende dos componentes:

    .tema4-slyder.mb-4
      SlyderB(:datos="riesgosTecnicos")

    p.mb-4 La relación entre estos elementos y la nota técnica puede comprenderse mediante un ejemplo. Una complicación asociada con una falla en la atención puede generar nuevas consultas, procedimientos, medicamentos u hospitalizaciones. Esto puede modificar las frecuencias de uso y los costos inicialmente proyectados. De igual manera, la utilización de servicios o tecnologías que no esté sustentada en la evidencia puede generar diferencias frente a las frecuencias esperadas.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Por esta razón, la gestión del riesgo y la seguridad del paciente deben considerarse junto con la información sobre la población, los servicios y tecnologías, las frecuencias de uso y las condiciones de prestación. Su análisis permite relacionar la calidad de la atención con los riesgos y las variaciones que pueden presentarse durante la ejecución del acuerdo de voluntades y que deben ser consideradas en el seguimiento de la nota técnica.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Rutas Integrales de Atención en Salud (RIAS)
    .BGF05.px-5.p-4
      p.mb-4 Las Rutas Integrales de Atención en Salud (RIAS) constituyen una herramienta para organizar las intervenciones en salud de acuerdo con las necesidades de las personas, las familias y las comunidades. Su implementación permite articular las acciones de promoción de la salud, prevención de la enfermedad, diagnóstico, tratamiento, rehabilitación y cuidados paliativos, según las condiciones y riesgos identificados en la población.

      .row.align-items-center.mb-4
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t4/img18.png" alt="")
        .col-lg-8
          .row.mb-3
            .col-lg-2
              img.tema4-icono.d-none.d-lg-block(src="@/assets/curso/temas/t4/img19.svg" alt="")
            .col-lg-10
              p.mb-0 Las RIAS se desarrollan en el marco del Modelo Integral de Atención en Salud (MIAS) y se encuentran reglamentadas principalmente por la Resolución 3280 de 2018, mediante la cual se adoptaron los lineamientos técnicos y operativos de las rutas para la promoción y mantenimiento de la salud y para la atención de grupos de riesgo.
          p En este contexto, las RIAS permiten organizar la atención de acuerdo con las características y necesidades de diferentes grupos de población. Su aplicación contempla intervenciones individuales, colectivas y poblacionales, así como la participación de los diferentes actores responsables de la atención.
          p.mb-0 Para la construcción de la nota técnica, las RIAS pueden aportar elementos para identificar los servicios y tecnologías que pueden requerirse de acuerdo con las características de la población objeto y sus condiciones de salud. También pueden constituir un referente para analizar las frecuencias esperadas de determinadas intervenciones, cuando estas se encuentran definidas dentro de las rutas correspondientes.

      .row.justify-content-center.mb-4
        .col-lg-10
          .cajon.color-secundario.p-4
            p.mb-0 Por ejemplo, si la población objeto incluye personas con condiciones de salud que hacen parte de un grupo de riesgo contemplado en una RIAS, las intervenciones establecidas en la ruta pueden considerarse como referente para identificar los servicios requeridos y analizar su frecuencia de utilización.

    p.mb-4 De esta manera, la relación entre las RIAS y la nota técnica puede establecerse a partir de:

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Características de la población") Permiten identificar los grupos de población y de riesgo a los que pueden dirigirse las intervenciones.
          p.mb-0(numero="2" titulo="Servicios y tecnologías") Orientan la identificación de las intervenciones requeridas según las condiciones de salud y los grupos de riesgo.
          p.mb-0(numero="3" titulo="Frecuencias de uso") Proporcionan referentes para analizar la utilización esperada de determinadas intervenciones.
          p.mb-0(numero="4" titulo="Gestión del riesgo") Contribuyen a orientar intervenciones relacionadas con la prevención y el manejo de condiciones de salud.
          p.mb-0(numero="5" titulo="Planeación de la atención") Permiten relacionar las necesidades identificadas con la organización de los servicios requeridos.
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/t4/img20.png" alt="")

    p.mb-0 En consecuencia, las RIAS constituyen un referente para relacionar las necesidades de la población con las intervenciones y servicios de salud requeridos. En la nota técnica, esta información puede complementar el análisis de la población susceptible, los servicios y tecnologías y las frecuencias de uso que sustentan las proyecciones del acuerdo de voluntades.
</template>

<script>
import img16 from '@/assets/curso/temas/t4/img16.png'
import img17 from '@/assets/curso/temas/t4/img17.png'

export default {
  name: 'Tema4',
  data: () => ({
    riesgosTecnicos: [
      {
        titulo: 'Riesgo técnico de morbilidad evitable',
        texto:
          'Se relaciona con complicaciones clínicas o aumento de la severidad de una condición de salud asociados con fallas en el modelo de prestación, la seguridad del paciente, la coordinación entre prestadores o la aplicación de guías de práctica clínica y protocolos.',
        imagen: img16,
      },
      {
        titulo: 'Riesgo técnico de utilización',
        texto:
          'Corresponde a la variabilidad en el uso de servicios y tecnologías en salud que no se encuentra soportada en la evidencia científica.',
        imagen: img17,
      },
    ],
  }),
}
</script>
