<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='Imagen decorativa')
      .col-lg-8
        p Este componente formativo pretende que los aprendices del SENA desarrollen las competencias necesarias para gestionar de manera eficiente y efectiva la afiliación a los Planes de Beneficios en Salud (PBS), siguiendo los procedimientos establecidos por el sistema de salud colombiano. Esto implica comprender y aplicar correctamente los pasos requeridos, según el tipo de usuario (afiliado, beneficiario, empleador) y el régimen al que pertenezca (contributivo, subsidiado, especial). Además, busca que puedan identificar las diferentes etapas del proceso, asegurando que la afiliación se realice de forma oportuna y en cumplimiento con las normativas vigentes, para garantizar una atención adecuada a los usuarios. 
        .cajon.color-primario.p-4
          p.mb-0 Al adquirir estos conocimientos y habilidades, estarán mejor preparados para desempeñarse en roles administrativos o de gestión en instituciones de salud, contribuyendo a mejorar la calidad del servicio y promoviendo la protección social en salud. Este componente fomenta la responsabilidad y el compromiso con la correcta gestión del sistema de salud en Colombia.
    
    p Este enfoque integral busca fortalecer competencias que contribuyan a mejorar la experiencia del usuario y la eficiencia en la prestación de servicios de salud en Colombia.
    p.mb-5 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1493" height="840" src="https://www.youtube.com/embed/QsLPIkuIqqY" title="Gestión para la afiliación a los Planes de Beneficios en Salud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Gestión para la afiliación a las Planes de Beneficios en Salud

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
