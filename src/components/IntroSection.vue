<template>
  <section class="bg-gray-200 flex-col gap-5 text-center">
    <img id="me" class="w-40 rounded shadow-lg" :src="myImage" />
    <transition name="fade"
      ><h1
        v-if="helloText"
        id="hello"
        style="font-weight: 900"
        class="text-6xl"
      >
        {{ helloText }}
      </h1></transition
    >
    <p id="about" style="font-weight: 100">
      I'm
      <b
        class="
          font-extrabold
          text-transparent
          bg-clip-text bg-gradient-to-br
          from-pink-400
          to-red-600
        "
        >Prappo</b
      >
      a web
      <b
        class="
          font-extrabold
          text-transparent
          bg-clip-text bg-gradient-to-br
          from-blue-400
          to-green-600
        "
        >Artisan 🪄</b
      >
      and also
      <b
        class="
          font-extrabold
          text-transparent
          bg-clip-text bg-gradient-to-br
          from-yellow-400
          to-red-600
        "
        >Fullstack 🚀</b
      >
      if you had any doubt <b style="font-weight:700">¯\_(ツ)_/¯</b>
    </p>
    <p style="font-weight: 100" class="text-sm text-gray-500">
      Want to know about me? Scroll down 👇
    </p>
    <a id="scrollIcon" style="position: absolute; bottom: 20px; cursor: default;" href="#">
      <img class="w-14" :src="scrollImage" />
    </a>
  </section>
</template>

<script>
import scrollImage from "../assets/scroll1.gif";
import myImage from "../assets/me.jpg";
export default {
  data() {
    return {
      helloText: "Hello",
      scrollImage: scrollImage,
      myImage: myImage,
    };
  },
  methods: {
    changeText: function () {
      var text = ["Hello", "সালাম","नमस्ते","Hola","مرحبا","你好","ہیلو","γεια","こんにちは","Привет"];
      var count = 0;

      

      setInterval(()=>{
          setTimeout(()=>{
              this.helloText = null;
          },500)
          

          if(text.length == (count)){
              count = 0;
          }
          this.helloText = text[count];
          count++;
      },1000)
    },
  },
  mounted() {
      this.changeText();
  },
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>