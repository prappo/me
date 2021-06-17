import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { anim } from './libs/animation'

createApp(App).mount('#app')
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const sections = document.querySelectorAll("section");

function goToSection(section, anim) {
    gsap.to(window, {
        scrollTo: { y: section, autoKill: false },
        duration: 1
    });

    anim && anim.restart();
}

sections.forEach((section) => {
    // const intoAnim = gsap.from(section.querySelector(".right-col"), {
    //   yPercent: 50,
    //   duration: 1,
    //   paused: true
    // });

    ScrollTrigger.create({
        trigger: section,
        end: "bottom top+=1",
        onEnter: () => goToSection(section),
        onEnterBack: () => goToSection(section)
    });
});


anim.moveMyImage()

