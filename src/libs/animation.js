import { gsap } from 'gsap'

class Animation {

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
        gsap.to('#me', {
            x: this.getScreenWidth() - this.getMyImageWidth(),
            duration: 2,
        })
    }
}


let anim = new Animation();
export { anim }