<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El #[b Plan de Beneficios en Salud (PBS)] garantiza el acceso a servicios médicos, medicamentos y tecnologías para todos los afiliados. Se estructura en componentes como promoción, prevención, diagnóstico, tratamiento, rehabilitación y atención en salud mental, y se adapta al régimen del usuario.
    p El #[b régimen contributivo] está dirigido a personas con capacidad de pago, financiado con aportes de empleadores y trabajadores. Por otro lado, el #[b régimen subsidiado] cubre a personas vulnerables sin capacidad económica, financiado por el Estado a través del ADRES. Ambos regímenes buscan garantizar el derecho a la salud de manera equitativa.
    p La #[b Unidad de Pago por Capitación (UPC)] representa el valor anual por afiliado para cubrir el PBS y puede variar según ubicación o riesgo. El documento también aborda la #[b afiliación colectiva], el uso del #[b Sistema de Afiliación Transaccional (SAT)] para inscripciones y novedades, y la importancia de la recolección precisa de datos.
    p Los #[b copagos y cuotas moderadoras,] son aportes económicos aplicables en ciertos servicios, con exenciones para grupos vulnerables. Este enfoque integral permite formar personal competente en la gestión administrativa del sistema de salud colombiano.

    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Gestión para la afiliación a los planes de beneficio en salud, se explica la proceso de la afiliación al Sistema General de Seguridad Social en Salud (SGSSS), con base en la normativa vigente, adaptado a los diferentes tipos de usuario y regímenes (contributivo y subsidiado); además, se relacionan los procesos que se deben llevar a cabo en dichas afiliaciones por medio de portales y se dan a conocer las acciones en las cuotas moderadoras y sus excepciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
