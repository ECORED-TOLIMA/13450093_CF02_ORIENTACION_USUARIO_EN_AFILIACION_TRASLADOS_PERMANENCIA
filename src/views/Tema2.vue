<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Los regímenes de atención contributivo y subsidiado en salud en Colombia
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    .p.mb-4 Desde la implementación del Sistema General de Seguridad Social en Salud (SGSSS) en 1993, Colombia ha estructurado su sistema de atención en salud en torno a dos principales regímenes que buscan garantizar el acceso universal y equitativo a los servicios médicos: el #[b régimen contributivo] y el #[b régimen subsidiado]. Estos esquemas se complementan con otros mecanismos y programas especiales destinados a atender diferentes segmentos poblacionales y necesidades específicas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 El objetivo central del sistema es ofrecer protección social en salud, promoviendo la prevención, el diagnóstico oportuno, el tratamiento adecuado y la rehabilitación. Sin embargo, a lo largo de los años, estos regímenes han enfrentado múltiples desafíos relacionados con la cobertura, la calidad del servicio, la financiación y las desigualdades sociales. En el siguiente análisis, se profundiza en las características, funcionamiento, ventajas, desventajas y retos de cada uno de estos regímenes:
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Régimen contributivo
    p.mb-5 Fue establecido para cubrir a las personas que tienen capacidad económica para pagar sus aportes al sistema de salud. 

    .titulo.mb-5(data-aos="flip-up")
      h5.mb-0 •	Marco legal
    p La base legal principal está contenida en la Ley 100 de 1993 y sus reglamentos posteriores, que definen las obligaciones de cotización y los derechos asociados. Este régimen está dirigido principalmente a empleados formales del sector privado y público, independientes con ingresos superiores a un umbral definido por la ley, pensionados y ciertos beneficiarios que cumplen con los requisitos económicos establecidos por el Estado.
    p.mb-4 Sus características principales son: 
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img2.svg' alt='AvatarTop')
        h5.text-center Afiliación
        p.text-center La afiliación se realiza mediante una EPS (Entidad Promotora de Salud), que actúa como intermediaria entre el usuario y los prestadores de servicios.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img3.svg' alt='AvatarTop')
        h5.text-center Aportes
        p.text-center  Los cotizantes aportan un porcentaje fijo sobre sus ingresos mensuales (actualmente alrededor del 12.5 %), que incluye contribuciones tanto del empleador como del trabajador.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img4.svg' alt='AvatarTop')
        h5.text-center Cobertura
        p.text-center  El Plan de Beneficios en Salud (PBS,) cubre una amplia gama de servicios médicos, incluyendo atención primaria, especializada, hospitalaria, medicamentos, procedimientos diagnósticos y terapéuticos.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img5.svg' alt='AvatarTop')
        h5.text-center Beneficiarios
        p.text-center Además del afiliado principal, pueden incluirse dependientes económicos como cónyuge e hijos menores o mayores con discapacidad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="flip-up")
          h5.mb-0 •	Funcionamiento
        p El sistema funciona de manera solidaria, donde las cotizaciones no solo cubren la atención de cada persona, sino también aspectos colectivos del sistema. La EPS se encarga de asignar o seleccionar a los prestadores autorizados para asegurar que los servicios se brinden de manera eficiente. La gestión incluye procesos como afiliarse, autorizar servicios, pagar a los prestadores y hacer seguimiento a la calidad. La regulación dice que las EPS deben garantizar una cobertura completa, según lo establecido en el PBS. Entre las ventajas están que hay más acceso a tecnologías avanzadas y servicios especializados gracias a los recursos, una cobertura más completa para quienes tienen capacidad económica y mejores incentivos para mejorar la calidad del servicio por la competencia entre EPS. Sin embargo, también hay desafíos, como la desigualdad social, ya que no todos pueden cotizar, lo que puede generar exclusión o fragmentación; problemas con fraudes y evasión en los aportes; la fragmentación administrativa por la gran cantidad de EPS, que puede afectar la calidad y eficiencia; y las dificultades en zonas rurales, donde la distribución geográfica hace más difícil acceder a los servicios.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Régimen subsidiado 
    p.mb-4 Forma parte fundamental del Sistema General de Seguridad Social en Salud (SGSSS) en Colombia. Fue establecido con el objetivo de garantizar el acceso a servicios de salud a las poblaciones más vulnerables y en situación de pobreza, quienes no tienen la capacidad económica para realizar aportes al sistema contributivo. Desde su creación en la década de 1990, este régimen ha sido clave para promover la equidad en salud y reducir las desigualdades sociales.
    .titulo.mb-5(data-aos="flip-up")
      h5.mb-0 •	Marco legal y contexto histórico
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El régimen subsidiado fue formalizado principalmente por la Ley 100 de 1993, que estableció el Sistema General de Seguridad Social en Salud. Posteriormente, diversas normativas complementarias han definido sus reglas específicas. Su finalidad es garantizar que toda persona sin recursos económicos suficientes tenga acceso a una atención integral en salud sin costo directo para el usuario. La Constitución Política de Colombia (artículo 48), también establece el derecho fundamental a la protección social en salud para todos los ciudadanos.
    .tarjeta--BG020.px-lg-5.px-4
      p El régimen ha evolucionado con reformas regulatorias que buscan ampliar su cobertura, mejorar la calidad del servicio y fortalecer la gestión pública.
      p.mb-4 Dentro de sus características principales se encuentran:
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-md-4
          figure
            img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
        .col-lg-9
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Población objetivo")
              h4 Población objetivo
              p El régimen subsidiado está pensado para las personas que están en situación de pobreza o que tienen dificultades económicas. Para saber quiénes pueden acceder, las entidades locales usan programas sociales y registros administrativos. 
            .tarjeta.color-acento-botones--borde.p-4(titulo="Beneficiarios")
              h4 Beneficiarios
              p Los principales beneficiarios son quienes están en programas como Familias en Acción, personas que viven en zonas rurales o en barrios marginados, comunidades indígenas y afrodescendientes, personas desplazadas por conflictos armados, adultos mayores que no tienen recursos y personas con discapacidad que no pueden sostenerse por sí mismas.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Afiliación")
              h4 Afiliación
              p La afiliación se realiza a través de la Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES), antes llamado Fondo de Solidaridad y Garantías (FOSYGA). Las entidades territoriales son responsables de identificar e inscribir a los beneficiarios mediante registros administrativos y programas sociales existentes. 
              p Una vez afiliados, estos usuarios reciben un carné que acredita su condición como beneficiarios del régimen subsidiado.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Financiamiento")
              h4 Financiamiento
              p El financiamiento del régimen subsidiado proviene principalmente del Estado colombiano mediante recursos fiscales nacionales y transferencias territoriales. La ley establece que el presupuesto destinado a este régimen debe ser suficiente para cubrir las necesidades básicas en salud de la población vulnerable.
              p El dinero se canaliza, a través del ADRES que administra los recursos destinados a pagar los servicios prestados por hospitales públicos o privados autorizados.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Cobertura y plan de beneficios")
              h4 Cobertura y plan de beneficios
              p El PBS para el régimen subsidiado, es parecido al del régimen contributivo, pero ajustado a lo que el presupuesto puede cubrir. Incluye aspectos de atención primaria, como consultas médicas y vacunación; atención en hospitales, como cirugías y emergencias; servicios de diagnóstico, como exámenes clínicos y de imagen; medicamentos esenciales; y también, programas para prevenir enfermedades y promover la salud.
    separador
    .tarjeta-BG02.px-lg-5.px-4
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Marco legal del sistema de salud colombiano
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-2.col-4.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imagen decorativa')
        .col-lg-8
          p El sistema de salud colombiano, ha sido objeto de múltiples reformas y debates desde su establecimiento en la década de 1990. La Ley 100 de 1993, marcó un hito al crear un sistema mixto que combina recursos públicos y privados, con el fin de garantizar el acceso universal a servicios de salud. Sin embargo, la sostenibilidad financiera del sistema ha sido uno de los principales desafíos a lo largo del tiempo.
          p.mb-5 El financiamiento es la columna vertebral que sostiene toda la estructura del sistema; sin recursos adecuados, no es posible garantizar la calidad, cobertura ni la eficiencia en la prestación de servicios. Por ello, entender las diversas fuentes que alimentan financieramente al sistema es fundamental.
      .titulo.mb-5(data-aos="flip-up")
        h5.mb-0 •	La Constitución Política de 1991 y los derechos sociales
    p.mb-5 La Constitución Política de Colombia (artículo 48) establece que “toda persona tiene derecho a acceder a los servicios sociales necesarios para su bienestar” y que “el Estado promoverá las condiciones para el acceso a la seguridad social”. Esto sienta las bases constitucionales para un sistema que garantice derechos universales mediante mecanismos financieros adecuados. 
    .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img9.png', alt='Imagen decorativa')
        .col-lg-8
          .titulo.mb-4(data-aos="flip-up")
            h5.mb-0 •	Ley 100 de 1993: el pilar fundamental 
          p La Ley 100 es la base principal que organizó el Sistema General de Seguridad Social en Salud en Colombia y en ella se establecieron ideas como la solidaridad, la subsidiaridad y la eficiencia. 
          .cajon.color-secundario.p-4.mb-3
            p.mb-0 En cuanto a lo financiero, la ley creó el Fondo de Solidaridad y Garantías (que ahora es ADRES), hizo que quienes tienen capacidad económica deban cotizar y estableció que hay dos regímenes: uno contributivo y otro subsidiado. Además, el Estado participa en la financiación usando recursos fiscales.
          p.mb-0 Después de la Ley 100, se hicieron otras reformas con leyes como la 1438 de 2011 y la 1753 de 2015, que buscaron mejorar cómo se financia el sistema para que sea más sostenible y justo. Además, hay regulaciones específicas, como el Decreto 806 de 1998, que se encarga de los detalles técnicos sobre las cotizaciones y otras resoluciones que establecen cómo se recaudan y distribuyen los recursos.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Fuentes principales de financiamiento del sistema de salud colombiano
    p.mb-5 El sistema de salud en Colombia, se financia con varias fuentes que trabajan juntas para que todo funcione bien, cubra a la gente y tenga buena calidad. Las principales son las cotizaciones o aportes del trabajo, los recursos del gobierno o presupuesto, aportes específicos del Estado, contribuciones privadas y otros mecanismos complementarios, además de algunos recursos innovadores. Cada una de estas fuentes tiene sus propias características y se tratarán a continuación, con más detalle:
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Régimen contributivo
    p El régimen contributivo es la principal fuente de ingresos para financiar la atención en salud para la población con capacidad económica. Se basa en las cotizaciones que realizan los empleadores y los trabajadores formales e independientes.
    p.mb-5 Su funcionamiento y estructura se lleva a cabo de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Base de cotización")
            .col-md-12.mb-5.mb-md-0
              p Se calcula sobre los ingresos mensuales del afiliado, que pueden ser declarados formalmente o estimados.
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
          .row(titulo="Porcentaje de aporte")
            .col-lg-12
              p La ley establece un aporte total aproximado del 12.5 % sobre la base salarial, distribuido así:
              .bgblanco.p-3.mb-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    | Trabajador: aproximadamente el 4 %.
                  li
                    i.fas.fa-circle
                    p.mb-0 Empleador: aproximadamente el 8.5 %.
              p Este porcentaje puede variar ligeramente según cambios normativos o acuerdos sectoriales.
            div
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='')
    .tarjeta-BG02.px-lg-5.px-4
      .titulo.mb-5(data-aos="flip-up")
        h5.mb-0 •	Recaudación y administración
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.order-2.order-lg-1
          p Las EPS son las encargadas de recoger los aportes, que se hacen automáticamente en la nómina y los empleadores deben enviar ese dinero a las EPS en los tiempos que dice la regulación. Es importante que el recaudo se maneje bien para que el sistema siga funcionando sin problemas y tenga liquidez.
          p La ventaja es que son una fuente de ingresos estable y predecible y que está directamente relacionada con el trabajo formal, lo que ayuda a tener un ingreso fijo y seguro. Pero también tiene sus desafíos: depende mucho del empleo formal, por lo que muchas personas que trabajan en la informalidad quedan fuera y hay riesgos de que algunos no paguen o evadan sus obligaciones. Además, es difícil ampliar la cobertura a quienes trabajan en sectores informales o que no tienen la capacidad de contribuir, lo que limita que más personas puedan acceder a estos beneficios.
        .col-lg-3.col-6.mb-lg-0.mb-4.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema2/img22.svg', alt='')
    .titulo.mb-5(data-aos="flip-up")
      h5.mb-0 •	Afiliación al régimen contributivo
    p Hoy en día, para afiliarse a una EPS o EOC, hay que llenar un formulario físico que se entrega al Ministerio de Salud y Protección Social y tanto para inscribirse como para hacer cambios o traslados, se usa ese mismo formulario. 
    p.mb-5 Su proceso se lleva a cabo en los siguientes casos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Dependiente") Si es dependiente, también el empleador debe firmar el formulario y elegir la EPS que prefiere y se lo comunica al jefe junto con los datos de la familia. Lo mismo pasa con los aprendices en etapa lectiva y productiva.
          p(numero="2" titulo="Pensionados") En el caso de los pensionados, deben decirle a su fondo de pensiones a qué EPS quieren que les hagan las cotizaciones, ya sea la misma de antes o una diferente si deciden cambiarse, siempre que cumplan con los requisitos. El fondo se encarga de llenar el formulario y pagar la cotización mensual a la EPS elegida. 
          p(numero="3" titulo="Independientes") Los trabajadores independientes también deben inscribirse por su cuenta en la EPS que elijan, llenando el formulario correspondiente y haciendo los pagos mensuales, a través de la planilla integrada. Además, con el sistema de afiliación transaccional y el formulario electrónico que adopte el ministerio, la afiliación ahora puede hacerse directamente por el cotizante, registrándose en el sistema y usando el formulario digital.
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Régimen subsidiado
    p Como ya se mencionó, para quienes no tienen capacidad económica para cotizar, existe un esquema subsidiado financiado principalmente con recursos públicos. La financiación proviene principalmente del presupuesto general de la nación, transferido a través del Fondo de Solidaridad y Garantías (FOSYGA), hoy denominado Administradora de Recursos del Sistema General de Seguridad Social en Salud (ADRES).
    p.mb-5 Por parte del Estado, se aplican las siguientes acciones:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.tarjcone.p-5
        .row.justify-content-center.mb-5
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center  Participación estatal
            p El Estado asume el costo por medio de transferencias directas a las EPS que prestan servicios a esta población vulnerable.
      .col-md.tarjeta.color-secundario.tarjcone.p-5
        .row.justify-content-center.mb-5
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center  Recursos fiscales o presupuestales
            p El Estado colombiano asigna recursos fiscales al sistema de salud mediante presupuestos nacionales y departamentales.
    p.mb-5 Igualmente, es importante mencionar que sus componentes principales son:
    .row.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta--BG03.h-100
          figure
            img(src='@/assets/curso/temas/tema2/img15.png', alt='Texto que describa la imagen')
          .p-4
            h5 Transferencias nacionales
            p Incluyen fondos destinados a programas específicos, subsidios y financiamiento estructural.
      .col-lg-6
        .tarjeta.tarjeta--BG03.h-100
          figure
            img(src='@/assets/curso/temas/tema2/img16.png', alt='Texto que describa la imagen')         
          .p-4
            h5 Presupuesto local
            p Los municipios y departamentos también destinan recursos propios para financiar servicios básicos relacionados con salud pública, atención primaria y programas preventivos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Estos recursos son fundamentales para garantizar la cobertura universal, especialmente para poblaciones vulnerables o en zonas rurales alejadas; aunque, como una limitante, se tiene que la asignación presupuestal puede ser insuficiente.
    .titulo.mb-5(data-aos="flip-up")
        h5.mb-0 •	Afiliación de oficio al régimen subsidiado
    p.mb-5 Es un instrumento que se crea a partir de lo establecido en el artículo 4 del Decreto 064 de 2020, el cual busca la afiliación de aquella población que se encuentre sin aseguramiento en salud en el SGSSS o con la novedad de terminación de la inscripción en una EPS y que no le ha haya sido aplicada la encuesta Sisbén. Dicha afiliación la puede realizar directamente la IPS, si entrase por una atención en salud o la entidad territorial si es focalizada por esta entidad, conforme a las siguientes reglas:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Cumple condiciones")
            .col-lg-12.order-lg-2.order-3
              p Cuando la persona reúna condiciones para pertenecer al régimen contributivo, la registrará en el Sistema Afiliación Transaccional y la inscribirá en una EPS de dicho régimen.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img17.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="Sisbén I y II")          
            .col-lg-12.order-lg-2.order-3
              p Cuando la persona declare que no cumple las condiciones para pertenecer al régimen contributivo y se encuentre clasificado en los niveles I y II del Sisbén, la registrará en el Sistema de Afiliación Transaccional y lo inscribirá en una EPS del Régimen Subsidiado en el respectivo municipio.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img18.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="Encuesta Sisbén")          
            .col-lg-12.order-lg-2.order-3
              p Cuando la persona declare que no cumple las condiciones para pertenecer al régimen contributivo y que no le ha sido aplicada la encuesta Sisbén o que no pertenece a alguna población especial de las señaladas en el artículo 2.1.5.1 del presente decreto, la registrará en el Sistema de Afiliación Transaccional y la inscribirá en una EPS del régimen subsidiado que opere en el municipio de domicilio. Cuando se trate de afiliados a los que no les ha sido aplicada la encuesta del Sisbén, la entidad territorial deberá gestionar de manera inmediata el trámite necesario para la aplicación de la encuesta Sisbén al afiliado.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img19.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="4" titulo="Elección EPS")          
            .col-lg-12.order-lg-2.order-3
              p La persona deberá elegir la EPS, de no hacerlo, el Sistema de Afiliación Transaccional seleccionará la EPS que tenga mayor cobertura en la jurisdicción. La entidad territorial o la institución prestadora de Servicios de Salud le informara a la persona dicha inscripción.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img20.png', alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Sin embargo, la persona podrá ejercer el derecho a la libre escogencia de EPS dentro de los noventa (90) días calendario contados a partir de la inscripción. (…)
    .tarjeta.color-adicional-2.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img21.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-5
              h5 Recurso electrónico
              p Para estos efectos de la afiliación, se puede realizar través de la página https://www.miseguridadsocial.gov.co, Sistema de Afiliación Transaccional (SAT), para lo cual la IPS o la entidad territorial deben estar registradas para realizar los respectivos trámites mediante esta herramienta.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://www.miseguridadsocial.gov.co')" target="_blank")
                span Enlace web
                i.fas.fa-file-code
    p La afiliación será temporal, mientras la entidad territorial verifica en un plazo no mayor a cuatro (4) meses, una vez sea implementado el Sisbén metodología IV, si la persona acredita las condiciones para pertenecer al régimen subsidiado.
</template>

<script>
export default {
  name: 'Tema2',
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
