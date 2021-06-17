<template>
    <section class="bg-gray-200 flex-col gap-5 text-center">
        <img id="myImage" class="w-40 rounded shadow-lg" :src="myImage" />
        <h1 id="hello" style="font-weight:900" class="text-6xl">Hello!</h1>
        <p style="font-weight:100">I'm <b class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Prappo</b> a web <b class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600">Artisan 🪄</b> and also <b class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">Fullstack 🚀</b> if you had any doubt ¯\_(ツ)_/¯</p>
        <p style="font-weight:100" class="text-sm text-gray-500">Want to know about me? Scroll down 👇</p>
        <a style="position:absolute; bottom:20px" href="#">
            <img class="w-14" :src="scrollImage">
        </a>
    </section>
</template>

<script>
import scrollImage from '../assets/scroll1.gif'
import myImage from '../assets/me.jpg';
export default {
    data(){
        return {
            scrollImage: scrollImage,
            myImage : myImage
        }
    }
}
</script>
