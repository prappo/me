<template>
<div>
  <IntroSection/>
  <SkillsSection/>
  </div>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



// gsap.registerPlugin(ScrollTrigger);

export default {
  mounted(){

    gsap.registerPlugin(ScrollTrigger)
    var timeline = gsap.timeline({
      scrollTrigger:{
        trigger:'#scrollIcon',
        scrub:1,
        start:'top center',
        // markers:true,
      }
    });

    timeline
    .to('#me',{
     
      y: window.screen.height,
      borderRadius:'50%',
      opacity:0.1,
      duration:5,
    })
    .to('#me',{
     
      // position:'absolute',
      // left:'0px',
      duration:3,
    })
    

  }
}
</script>
