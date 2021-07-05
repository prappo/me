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
    .to('#scrollIcon',{
      opacity:0,
    })
    .to('#me',{
     
      y: window.screen.height - 250,
      borderRadius:'50%',
      // opacity:0,
      duration:5,
    })
    .from('#goodAt',{
      x:500
    })
    .to('#goodAt',{
      opacity:1,
      background:'#2C2C2C',
      padding:'0px 10px',
      borderRadius:'5px',
      // position:'absolute',
      // left:'0px',
      duration:3,
    })

    .to('#skillIcons',{
      background:'white',
      padding:'20px',
    })
    .to('#skillIcons',{
      borderRadius:'5px',
      duration:5,
    })

  
    

  }
}
</script>
