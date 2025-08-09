<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Las cuotas moderadoras 
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    
    .p.mb-5 Son un aporte en dinero que corresponden al valor que deben cancelar los afiliados cotizantes y sus beneficiarios del régimen contributivo por la utilización de los servicios de salud, con el objetivo de racionalizar y estimular el buen uso de estos. Algunos servicios que deben pagar cuotas moderadoras son:
    
    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img2.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Las consultas externas.
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img3.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Los medicamentos para tratamientos ambulatorios.
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img4.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Los exámenes de diagnóstico por laboratorio clínico y por imagenología como radiologías y ecografías.
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img5.svg' alt="Imagen decorativa")
        p.text-center.mb-0 La atención en el servicio de urgencias en las categorías de triage IV y V.
    
    p Estos son algunos de los servicios que se ofrecen para atender diferentes necesidades de salud.
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Servicios exceptuados de cobro de cuotas moderadoras

    p.mb-5 Son exentos si hacen parte de alguno de los siguientes casos:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.mb-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='Imagen decorativa')
      .col-lg-8
        ul.lista-ul--color
          li(data-aos="fade-right")
            i.fas.fa-hand-point-right
            | Los afiliados en el régimen subsidiado, en todos los servicios que requieran.
          li(data-aos="fade-right")
            i.fas.fa-hand-point-right
            p.mb-0 Los afiliados en el régimen contributivo, que deban someterse a prescripciones regulares en los siguientes diagnósticos con sus tratamientos integrales:
          .tarjeta-cuadro.color-primario.p-3.m-4.mb-0.mt-0
            ul.lista-ul--color.mb-0
              li(data-aos="fade-right")
                i.fas.fa-check
                | Atención de pacientes con diabetes mellitus tipo I y II.
              li(data-aos="fade-right")
                i.fas.fa-check
                | Atención de pacientes con hipertensión arterial.
              li(data-aos="fade-right")
                i.fas.fa-check
                | Atención del paciente trasplantado.
              li(data-aos="fade-right")
                i.fas.fa-check
                | Atención de pacientes con enfermedades huérfanas y ultra huérfanas.
              li(data-aos="fade-right")
                i.fas.fa-check
                | Alteraciones nutricionales en personas menores de 5 años (anemia o desnutrición aguda).
              li(data-aos="fade-right")
                i.fas.fa-check
                | Problemas o trastornos mentales.
        ul.lista-ul--color
          li(data-aos="fade-right")
            i.fas.fa-hand-point-right
            | Atención de pacientes con Enfermedad Pulmonar Obstructiva Crónica (EPOC).

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
