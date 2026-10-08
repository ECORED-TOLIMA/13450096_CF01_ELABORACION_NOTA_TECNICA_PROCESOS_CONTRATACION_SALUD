<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
import imagen1 from '@/assets/actividad/imagen1.png'
import imagen2 from '@/assets/actividad/imagen2.png'
import imagen3 from '@/assets/actividad/imagen3.png'
import imagen4 from '@/assets/actividad/imagen4.png'
import imagen5 from '@/assets/actividad/imagen5.png'
import imagen6 from '@/assets/actividad/imagen6.png'
import imagen7 from '@/assets/actividad/imagen7.png'
import imagen8 from '@/assets/actividad/imagen8.png'
import imagen9 from '@/assets/actividad/imagen9.png'
import imagen10 from '@/assets/actividad/imagen10.png'

const imagenesActividad = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
]

const preguntasBase = [
  {
    texto:
      '¿Cuál es el propósito de caracterizar la población objeto en la construcción de una nota técnica?',
    opciones: [
      ['Definir únicamente las tarifas de los servicios.', false],
      ['Identificar características y necesidades de atención.', true],
      ['Registrar exclusivamente las glosas generadas.', false],
      ['Establecer solamente la modalidad de pago.', false],
    ],
  },
  {
    texto:
      '¿Cuál de los siguientes aspectos puede considerarse como un determinante de la población?',
    opciones: [
      ['Código de la factura.', false],
      ['Número de glosa.', false],
      ['Modalidad de pago.', false],
      ['Condiciones socioeconómicas.', true],
    ],
  },
  {
    texto:
      '¿Qué diferencia existe entre la población objeto total y la población susceptible?',
    opciones: [
      [
        'La población susceptible es un subconjunto de la población objeto total.',
        true,
      ],
      [
        'La población objeto siempre es menor que la población susceptible.',
        false,
      ],
      ['Ambas representan exactamente el mismo grupo poblacional.', false],
      [
        'La población susceptible corresponde únicamente al personal de salud.',
        false,
      ],
    ],
  },
  {
    texto:
      '¿Cuál de los siguientes es un parámetro epidemiológico útil para analizar la población objeto?',
    opciones: [
      ['Tarifa contractual.', false],
      ['Modalidad de pago.', false],
      ['Prevalencia.', true],
      ['Código de habilitación.', false],
    ],
  },
  {
    texto:
      '¿Qué función cumple la codificación de servicios y tecnologías en la nota técnica?',
    opciones: [
      ['Sustituir la caracterización poblacional.', false],
      ['Permitir su identificación estandarizada.', true],
      ['Eliminar el análisis de frecuencias de uso.', false],
      ['Determinar automáticamente las glosas.', false],
    ],
  },
  {
    texto:
      '¿Cuál de las siguientes constituye una fuente de información relevante para analizar la prestación de servicios de salud?',
    opciones: [
      ['Registro Individual de Prestación de Servicios de Salud (RIPS).', true],
      ['Manual de convivencia institucional.', false],
      ['Contrato laboral del personal de salud.', false],
      ['Reglamento interno de una institución.', false],
    ],
  },
  {
    texto:
      '¿Qué representa la frecuencia de uso de un servicio o tecnología en una nota técnica?',
    opciones: [
      ['El valor individual de una tarifa.', false],
      ['El número de profesionales disponibles.', false],
      ['El número de glosas recibidas.', false],
      ['El número estimado de utilizaciones en un periodo.', true],
    ],
  },
  {
    texto:
      '¿Qué aspecto debe analizarse al estudiar la oferta y la demanda de servicios de salud?',
    opciones: [
      ['Únicamente el valor de las facturas.', false],
      ['Únicamente las glosas generadas.', false],
      ['La capacidad disponible y la utilización esperada.', true],
      ['Solamente la modalidad de pago.', false],
    ],
  },
  {
    texto: '¿Cuál es una finalidad de validar los soportes de atención?',
    opciones: [
      ['Establecer la política de envejecimiento.', false],
      ['Comprobar su correspondencia y consistencia.', true],
      ['Determinar los determinantes sociales.', false],
      ['Reemplazar los RIPS.', false],
    ],
  },
  {
    texto:
      '¿Cuál de los siguientes elementos forma parte de los fundamentos de los acuerdos de voluntades en salud?',
    opciones: [
      ['El marco normativo aplicable.', true],
      ['Únicamente la historia clínica.', false],
      ['Únicamente las glosas.', false],
      ['Solo los parámetros epidemiológicos.', false],
    ],
  },
  {
    texto: '¿Cuál es una característica de una modalidad de pago prospectiva?',
    opciones: [
      [
        'El reconocimiento económico ocurre únicamente después de cada servicio.',
        false,
      ],
      ['El pago depende exclusivamente de una glosa.', false],
      ['El reconocimiento se establece previamente.', true],
      ['No requiere información sobre la población.', false],
    ],
  },
  {
    texto:
      '¿Qué información aportan los RIPS para la construcción de una nota técnica?',
    opciones: [
      ['Únicamente información sobre tarifas futuras.', false],
      ['Únicamente información sobre habilitación.', false],
      ['Únicamente información sobre glosas.', false],
      ['Información sobre la prestación realizada.', true],
    ],
  },
  {
    texto:
      '¿Cuál de los siguientes hace parte del Sistema Obligatorio de Garantía de Calidad en Salud?',
    opciones: [
      ['Sistema de facturación.', false],
      ['Sistema Único de Habilitación.', true],
      ['Manual tarifario.', false],
      ['Registro presupuestal.', false],
    ],
  },
  {
    texto:
      '¿Qué relación tiene la habilitación de servicios con la nota técnica?',
    opciones: [
      ['Permite considerar servicios habilitados.', true],
      ['Define automáticamente la frecuencia de uso.', false],
      ['Determina por sí sola el valor total del contrato.', false],
      ['Reemplaza el análisis epidemiológico.', false],
    ],
  },
  {
    texto:
      '¿Cuál es la relación entre la gestión del riesgo y la seguridad del paciente en el contexto de la contratación en salud?',
    opciones: [
      ['Ambas se limitan a establecer tarifas.', false],
      ['Ambas sustituyen los procesos de habilitación.', false],
      ['Ambas determinan únicamente la población objeto.', false],
      ['Ambas contribuyen a una atención segura y de calidad.', true],
    ],
  },
  {
    texto:
      '¿Cuál es el propósito general de las Rutas Integrales de Atención en Salud (RIAS)?',
    opciones: [
      ['Establecer únicamente tarifas para los servicios.', false],
      ['Registrar exclusivamente las glosas.', false],
      ['Organizar intervenciones según las necesidades de atención.', true],
      ['Determinar únicamente la modalidad de pago.', false],
    ],
  },
  {
    texto:
      '¿Qué caracteriza a los manuales tarifarios en el contexto de la contratación en salud?',
    opciones: [
      ['Sirven como referentes para establecer valores.', true],
      ['Sustituyen la nota técnica.', false],
      ['Determinan siempre el valor de cualquier contrato.', false],
      ['Registran exclusivamente eventos adversos.', false],
    ],
  },
  {
    texto: '¿Qué es una glosa en la contratación de servicios de salud?',
    opciones: [
      ['Una modalidad de pago prospectiva.', false],
      ['Un parámetro epidemiológico.', false],
      ['Un tipo de población susceptible.', false],
      ['Una objeción relacionada con la auditoría de una cuenta.', true],
    ],
  },
  {
    texto:
      '¿Cuál de los siguientes elementos debe relacionarse en una nota técnica?',
    opciones: [
      ['Únicamente los nombres de las instituciones.', false],
      ['Servicios, tecnologías y frecuencias de uso.', true],
      ['Únicamente los resultados de las glosas.', false],
      ['Solo los datos financieros históricos.', false],
    ],
  },
  {
    texto:
      '¿Qué diferencia general existe entre riesgo primario y riesgo técnico en la nota técnica?',
    opciones: [
      [
        'El riesgo primario corresponde a tarifas y el técnico a glosas.',
        false,
      ],
      [
        'El riesgo primario corresponde a habilitación y el técnico a afiliación.',
        false,
      ],
      [
        'El riesgo primario se relaciona con condiciones de salud y el técnico con variaciones en la utilización.',
        true,
      ],
      ['El riesgo primario corresponde a RIPS y el técnico a RIAS.', false],
    ],
  },
]

const letras = ['a', 'b', 'c', 'd']
const mensajeCorrecto =
  '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la nota técnica en salud.'
const mensajeIncorrecto =
  'Revise nuevamente el contenido del componente formativo.'

const preguntas = preguntasBase.map((pregunta, indice) => ({
  id: indice + 1,
  texto: pregunta.texto,
  imagen: imagenesActividad[indice % imagenesActividad.length],
  barajarRespuestas: true,
  opciones: pregunta.opciones.map(([texto, esCorrecta], opcionIndice) => ({
    id: letras[opcionIndice],
    texto,
    esCorrecta,
  })),
  mensaje_correcto: mensajeCorrecto,
  mensaje_incorrecto: mensajeIncorrecto,
}))

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Análisis normativo y población para la construcción de la nota técnica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> reconocer los principales conceptos, elementos y procesos relacionados con la caracterización de la población, el análisis de información, la contratación, la calidad, las tarifas, las glosas y la construcción de la nota técnica en salud.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas,
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
