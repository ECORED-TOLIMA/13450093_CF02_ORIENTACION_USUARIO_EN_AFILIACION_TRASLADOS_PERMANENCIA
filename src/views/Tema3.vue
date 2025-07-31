<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Sistema de Afiliación Transaccional (SAT)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      .col-lg-7
        .cajon.color-primario.p-4.mb-3
          p.mb-0 Es un portal creado con el propósito de facilitar a los ciudadanos la afiliación al Sistema General de Seguridad Social en Salud y a los afiliados el reporte de sus novedades.
        p Como afiliado se tiene disponible la consulta del estado actual de la afiliación, el historial de inscripciones que se haya realizado a diferentes EPS, el reporte de traslado para el usuario y todo el grupo familiar, la inclusión y exclusión de beneficiarios, la actualización de datos complementarios y del documento de identidad, entre otras.
        p Por su parte, los empleadores, entidades e instituciones, pueden registrar el rol de:
        ul.lista-ul--color
          li
            i.fas.fa-hand-point-right
            p.mb-0 #[b Empleador persona jurídica.]
          li
            i.fas.fa-hand-point-right
            p.mb-0 #[b Empleador persona natural.]
    p.mb-4 Este sistema suele estar compuesto por varias funciones clave:
    SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img2.svg' alt='AvatarTop')
        h5.text-center Registro de afiliados
        p.text-center Permite registrar de manera formal y ordenada a las personas o entidades que desean unirse a un programa, servicio o plataforma. Esto incluye recopilar datos relevantes, verificar información y crear perfiles de afiliados.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
        h5.text-center Gestión de transacciones
        p.text-center  Cada afiliación, actualización o cancelación se realiza mediante transacciones que quedan registradas en el sistema. Esto asegura un historial completo y transparente de todas las acciones relacionadas con los afiliados.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
        h5.text-center Seguridad y control
        p.text-center  El SAT implementa mecanismos para garantizar la integridad y confidencialidad de los datos, así como para evitar fraudes o errores en las transacciones.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
        h5.text-center Automatización y eficiencia
        p.text-center Al automatizar procesos de afiliación y gestión, el sistema reduce errores humanos, acelera los procesos y mejora la experiencia tanto para los administradores como para los afiliados.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
        h5.text-center Reportes y análisis
        p.text-center El sistema puede generar informes detallados sobre las afiliaciones, transacciones realizadas, tasas de retención, entre otros datos importantes para la toma de decisiones.
    p.mb-4 Este sistema es muy utilizado en diferentes ámbitos, como en programas de fidelización, plataformas de comercio electrónico, servicios de suscripción y en algunos casos, en sistemas gubernamentales o empresariales que requieren un control riguroso de afiliaciones y transacciones relacionadas.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 El SAT es una herramienta que centraliza y automatiza la gestión de afiliaciones mediante transacciones, garantizando transparencia, seguridad y eficiencia en el proceso. 
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Afiliación colectiva al sistema de salud en Colombia
    p.mb-4 Es un proceso que permite a un grupo de personas, como empleados de una empresa, instituciones o comunidades, inscribirse de manera conjunta en el sistema de seguridad social en salud. A continuación, se explica de manera amigable y detallada, cómo suele ser el procedimiento general:
    .tarjeta--BG043.p-4.px-lg-5.mb-4
      .tarjeta.tarjeta--BG04.p-4.mb-4
        PasosB.color-acento-botones
          .row(titulo="")
            .col-lg-5.order-2.order-lg-1
              h4 Identificación del grupo o entidad responsable
              p Generalmente, la afiliación colectiva la realiza la empresa, organización o entidad que actúa como responsable del grupo. Esta puede ser una empresa, una institución educativa, una organización sin ánimo de lucro, entre otras.
            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-5.order-2.order-lg-1
              h4 Recolección de información
              p La entidad responsable debe recopilar los datos de todos los integrantes del grupo que van a afiliarse. Esto incluye nombres completos, documentos 
            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img8.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-5.order-2.order-lg-1
              h4 Verificación de la elegibilidad
              p Se verifica que los afiliados cumplan con los requisitos para afiliarse, como no estar ya afiliados a otro sistema de salud o cumplir con las condiciones específicas según la categoría de afiliación (empleado, beneficiario, etc.).
            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img9.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-5.order-2.order-lg-1
              h4 Registro en el sistema
              p La entidad responsable realiza el proceso de afiliación, a través de los canales establecidos por el sistema de salud en Colombia, que puede ser en línea, en las oficinas de las EPS o mediante plataformas autorizadas. En algunos casos, se puede hacer por medio de un formulario físico o digital.
            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img10.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-5.order-2.order-lg-1
              h4 Pago de aportes
              p La afiliación colectiva implica que la entidad responsable asuma ciertos aportes económicos, que corresponden a la cotización del grupo. Estos pagos se realizan periódicamente y deben cumplir con los porcentajes establecidos por la ley.
            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img11.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-5.order-2.order-lg-1
              h4 Confirmación y entrega de carné
              p Una vez completados los pasos anteriores, se confirma la afiliación y se entregan los carnés o comprobantes de afiliación a cada beneficiario, quienes podrán acceder a los servicios de salud.

            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img12.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-5.order-2.order-lg-1
              h4 Seguimiento y actualización
              p Es importante mantener actualizada la información y realizar los cambios necesarios en caso de novedades, como cambios en la nómina, incorporación de nuevos miembros o bajas.

            .col-lg-6.col-12.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img13.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center
      .col-lg-10
        p Es importante destacar que el proceso puede variar ligeramente dependiendo de la EPS o del sistema particular que se utilice, pero en general, estos son los pasos básicos para la afiliación colectiva en Colombia.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2  3.2 Etapa de recolección de información en el proceso de afiliación colectiva
    p.mb-5 La recolección de información es súper importante para asegurarse de que todos los beneficiarios estén bien inscritos y puedan acceder a los servicios de salud sin problemas. Esto implica que la entidad responsable, como una empresa o institución, recopile todos los datos necesarios de las personas que van a estar en el sistema de salud, ya sea usando formularios físicos, digitales o plataformas en línea autorizadas por las EPS o el Ministerio de Salud. Es fundamental que la información sea precisa y completa para evitar errores en la afiliación y que la atención médica sea correcta. Los datos que suelen recopilar incluyen nombres completos, número de documento de identidad (como cédula o NIT), fecha de nacimiento, sexo, dirección de residencia, estado civil, información de contacto (teléfono y correo), datos laborales (cargo, salario, tipo de contrato) y otros detalles adicionales como grupo sanguíneo, antecedentes médicos o condiciones especiales que requieran atención particular.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="flip-up")
          img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
          h5.mb-0 ¿Cómo se realiza la recolección?
        p.mb-4 Mediante los siguientes procesos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema3/img14_1.svg', alt='Texto que describa la imagen')
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img14.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-contenido.p-3(x="92%" y="65%" numero="+")
            p En oficinas o sedes de la entidad responsable, llenando formularios en papel que luego se ingresan en el sistema.
          .tarjeta.color-acento-contenido.p-3(x="49%" y="42%" numero="+")
            p A través de plataformas en línea, portales web o aplicaciones móviles, donde los beneficiarios o responsables ingresan la información directamente.
          .tarjeta.color-acento-contenido.p-3(x="5%" y="65%" numero="+")
            p En algunos casos, se puede acceder a información previa si la persona ya está registrada en otros sistemas, siempre y cuando se tenga autorización y se garantice la protección de datos personales.
        .cajon.color-primario.p-4.mb-4
          p Es fundamental que la información sea correcta y esté actualizada para evitar problemas futuros, como errores en la atención médica, dificultades en la comunicación, o en la gestión administrativa. Además, la protección de los datos personales debe cumplirse en todo momento, siguiendo las normativas vigentes en protección de datos en Colombia.
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Gastos derivados de los planes de beneficio
    p.mb-4 Los costos asociados a la prestación de los servicios y beneficios que reciben los afiliados en el sistema de salud, son los gastos que las EPS y las instituciones de salud deben cubrir para poder brindar atención. Estos gastos se dividen en varias categorías principales: 

    .tarjeta--BG053.px-lg-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img15.svg' alt='AvatarTop')
              h5.text-center Atención médica y hospitalaria
              p.text-center Incluye consultas, cirugías, hospitalizaciones, emergencias y cuidados intensivos.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img16.svg' alt='AvatarTop')
              h5.text-center Medicamentos e insumos
              p.text-center Medicinas, vacunas y materiales médicos necesarios para el tratamiento.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img18.svg' alt='AvatarTop')
              h5.text-center Procedimientos diagnósticos
              p.text-center Abarcan exámenes de laboratorio, radiografías, resonancias y tomografías.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img19.svg' alt='AvatarTop')
              h5.text-center Servicios de rehabilitación y terapias
              p.text-center Fisioterapia, terapia ocupacional y psicológica.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img20.svg' alt='AvatarTop')
              h5.text-center Gastos administrativos
              p.text-center Son los costos relacionados con la gestión, administración y operación del sistema, incluyendo la gestión de afiliaciones, autorizaciones y pagos.
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure
            img(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen decorativa' style='margin-bottom: -23px;')
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 ¿Qué impacto tienen estos gastos?
    p El volumen y la gestión eficiente de estos gastos son fundamentales para mantener la sostenibilidad del sistema de salud. Un aumento en los costos puede afectar la calidad y la disponibilidad de los servicios, por lo que es importante que las EPS y las instituciones de salud gestionen estos recursos de manera responsable y transparente.
    p Conocer los gastos derivados de los planes de beneficio, ayuda a entender cómo funciona el sistema, cómo se financian los servicios y la importancia de la gestión eficiente para garantizar la cobertura y calidad en la atención a los afiliados.
    p.mb-4 Al respecto, es importante tener en cuenta los siguientes valores:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Unidad de Pago por Capitación (UPC)")
            .col-lg-12.order-lg-2.order-3
              p Es el valor anual que se reconoce por cada uno de los afiliados al Sistema General de Seguridad Social en Salud (SGSSS), para cubrir las prestaciones del Plan Obligatorio de Salud (POS), en los regímenes contributivo y subsidiado.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="UPC-Subsidiada (UPC-S)")
            .col-lg-12.order-lg-2.order-3
              p Es el valor reconocido para cubrir el POS subsidiado y también es referida como UPC plena o subsidio pleno. Ese valor es definido actualmente por la Comisión de Regulación en Salud (CRES) y hoy en día, el Acuerdo 19 de 2010 es el acuerdo vigente en esta materia.
              p El valor de la UPC-S plena está determinado por el artículo 7° del mencionado Acuerdo 19, que establece a la letra:

            .col-lg-12.order-lg-3.order-1.mb-md-4
              .bgblanco.p-3
                p “Fijar el valor anual de la Unidad de Pago por Capitación del Régimen Subsidiado (UPC-S) para el año 2011 en la suma anual de trescientos dos mil cuarenta pesos moneda corriente $302.040.00 equivalente a un valor diario de OCHOCIENTOS TREINTA Y NUEVE PESOS MONEDA CORRIENTE ($839,00).”
              figure
                img(src='@/assets/curso/temas/tema3/img22.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="UPC adicional")
            .col-lg-12.order-lg-2.order-3
              p Es una prima o valor adicional reconocido por la Comisión de Regulación en Salud (CRES) a diversas zonas geográficas por concepto de dispersión geográfica. Es decir, un valor aplicable para las áreas de algunos departamentos en los cuales hay una menor densidad poblacional, que a su vez puede representar un mayor gasto por los sobrecostos de atención en salud derivados entre otros del transporte de pacientes.
              p El artículo 10 del Acuerdo 19 de 2010 reconoce la UPC adicional en los siguientes términos:
            .col-lg-12.order-lg-3.order-1.mb-md-4
              .bgblanco.p-3
                p “Reconocer para el 2011, una prima adicional del 11,47 % a la Unidad de Pago por Capitación del Régimen Subsidiado (UPC-S) de los Departamentos de Amazonas, Arauca, Casanare, Caquetá, Chocó, Guajira, Guainía, Guaviare, Meta, Putumayo, San Andrés y Providencia, Sucre, Vaupés, Vichada y de la región de Urabá. Se exceptúan de este valor las ciudades de Arauca, Florencia, Riohacha, Sincelejo, Villavicencio, Yopal y sus respectivas áreas de influencia, en las cuales se aplicará la Unidad de Pago por Capitación del Régimen Subsidiado (UPC-S).”
              figure
                img(src='@/assets/curso/temas/tema3/img23.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="4" titulo="La UPC-S diferencial")
            .col-lg-12.order-lg-2.order-3
              p Con posterioridad a la creación de prima adicional para las zonas geográficas por dispersión geográfica, explicado en el numeral anterior, surge otro tipo de prima adicional llamada diferencial aplicable para las zonas geográficas que presenten mayor siniestralidad, respecto del resto de municipios del país. Se aplica por zona geográfica a los municipios conurbados; es decir, aquellos próximos a centros urbanos.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img24.png', alt="Imagen decorativa")

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Los pagos compartidos o copagos
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un aporte en dinero que corresponde a una parte del valor del servicio que se pide, con el fin de ayudar a financiar el sistema y lo pagan los afiliados beneficiarios tanto en el régimen contributivo como en el subsidiado. Todos los servicios y tecnologías en salud que se brinden en el SGSSS tienen copagos, excepto los servicios que llevan cuotas moderadoras o los que están exceptuados, como algunos tratamientos odontológicos, terapias y otros servicios complementarios que puedes consultar en la herramienta MIPRES.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Servicios exceptuados de cobro de copagos
    p.mb-4 En el régimen subsidiado, están cubiertos los niños durante su primer año de vida, las complicaciones que puedan surgir por el parto y la población del nivel 1 del Sisbén. También incluyen varias poblaciones especiales que se identifican mediante un listado censal, como niños, adolescentes y jóvenes que están en proceso de restablecimiento de derechos o bajo responsabilidad del Instituto Colombiano de Bienestar Familiar (ICBF), menores que han sido desvinculados del conflicto armado y están protegidos por la entidad, población infantil vulnerable en instituciones diferentes al ICBF, adultos mayores con pocos recursos y en situación de abandono en centros de protección, comunidades indígenas, personas privadas de la libertad a cargo de las entidades territoriales que tienen pocos recursos y son inimputables por trastorno mental, personas en situación de calle y adultos entre 18 y 60 años con discapacidad, en condición de pobreza y abandono en centros de protección. Además, otras poblaciones especiales y afiliados de oficio al régimen subsidiado que no tengan encuesta del Sisbén solo podrán ser exceptuados si permanecen en nivel I.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.mb-4.mb-md-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img26.png', alt='Texto que describa la imagen')
    .tarjeta-BG02.px-lg-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo.mb-5(data-aos="flip-up")
            img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
            h5.mb-0 Regímenes subsidiado y contributivo
          p.mb-4 En este tipo de régimenes, están contemplados las siguientes excepciones:
          ul.lista-ul--color
            li
              i.fas.fa-hand-point-right
              | Atención en el servicio de urgencias para los pacientes clasificados en las categorías de triage I, II, y III.
            li
              i.fas.fa-hand-point-right
              | Eventos y servicios de alto costo: trasplantes (renal, corazón, hígado, médula ósea, páncreas, pulmón, intestino, multivisceral y córnea).
            li
              i.fas.fa-hand-point-right
              | Atención integral de la insuficiencia renal.
            li
              i.fas.fa-hand-point-right
              | Atención integral manejo quirúrgico de enfermedades cardiacas, aorta, vena cava, vasos pulmonares y renales, hemodinamia y hospitalización en casos de infarto agudo de miocardio.
            li
              i.fas.fa-hand-point-right
              | Atención integral manejo quirúrgico del sistema nerviosos central, plastias de cráneo y su rehabilitación; casos de trauma que afectan columna vertebral y o canal raquídeo con daño o probable daño de médula.
            li
              i.fas.fa-hand-point-right
              | Atención integral corrección quirúrgica de la hernia de núcleo pulposo, incluyendo la rehabilitación.
            li
              i.fas.fa-hand-point-right
              | Atención integral para los reemplazos articulares.
            li
              i.fas.fa-hand-point-right
              | Eventos y servi Atención integral para los reemplazos articulares.
            li
              i.fas.fa-hand-point-right
              | Atención integral del gran quemado, incluyendo cirugía plástica, internación y rehabilitación.
            li
              i.fas.fa-hand-point-right
              | Atención integral del trauma mayor (lesión o lesiones graves provocadas por violencia exterior que requiere realización procedimientos o intervenciones terapéuticas múltiples y se efectúe en servicio de alta complejidad).
            li
              i.fas.fa-hand-point-right
              | Atención integral para manejo de VIH/SIDA.
            li
              i.fas.fa-hand-point-right
              | Atención integral de pacientes con cáncer Atención integral para manejo de pacientes en Unidad de Cuidados Intensivos (UCI).
            li
              i.fas.fa-hand-point-right
              | Atención integral para manejo quirúrgico de enfermedades congénitas.
            li
              i.fas.fa-hand-point-right
              | Atención integral para el manejo de enfermedades huérfanas (pacientes inscritos en el registro nacional de enfermedades huérfanas).

</template>

<script>
export default {
  name: 'Tema3',
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
