import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'


class Animation {
    constructor(){
        

    }
    getMyImage() {
        return document.getElementById('me');
    }

    getScreenWidth() {
        return window.innerWidth;
    }

    getMyImageWidth() {
        return this.getMyImage().getBoundingClientRect().width;
    }


    moveMyImage() {
        gsap.registerPlugin(ScrollTrigger)
    
        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: '#about',
                start: 'center center',
                scrub: true,
                // markers: true,
            }
        });

        

        tl.to('#me',{
            y: window.innerHeight - 200,
            width:"100px",
            borderRadius:"50%",
            border:"1px solid #E4E7EB",
            padding:"5px",
            duration:150,
            
            onComplete: () => {
                // alert('done')
                
            }
        })

        tl.to('#scrollIcon', {
            opacity: 0,
            duration: 1,
        })

        const t2 = gsap.timeline({

            scrollTrigger: {
                trigger: '#worksSection',
                start: 'top center',
                scrub: true,
                // markers: true,
            }
        });
        tl.to('#skillIcons',{
            opacity: 1,
        })
        // t2.to('#me',{
        //    yPercent:80,
        //    duration:5,
        // });

        
    }
}


let anim = new Animation();


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
  
    ScrollTrigger.create({
        trigger: section,
        
        end: "bottom top+=1",
        onEnter: () => goToSection(section),
        onEnterBack: () => goToSection(section)
    });
});


anim.moveMyImage()