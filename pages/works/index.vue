<template>
  <div class="container mx-auto">
    <div class="w-full my-10">
      <h1 class="font-bold text-3xl py-5 px-5">Projects</h1>
      <div class="grid md:grid-cols-4 px-5 gap-10">
        <div v-for="(project, index) in projects" :key="index" class="
            bg-gray-100
            flex flex-col
            gap-4
            rounded-md
            shadow-xl
            justify-between
          ">
          <img class="rounded-t-md shadow" :src="project.image" />
          <h1 v-html="project.name" class="mx-2 text-center text-xl font-bold">

          </h1>
          <div class="w-full flex flex-col">
            <p class="text-gray-600 px-2 text-sm py-2">
              Tech stack
              <span :key="i" v-for="(s, i ) in project.stack"
                class="bg-black text-gray-300 px-2 py-1 mx-1 rounded shadow">{{ s }}</span>

            </p>
            <p class="text-gray-600 px-2 text-sm py-2">
              Platform
              <span v-for="(p, i) in project.platform" :key="i"
                class="bg-purple-300 text-black px-2 py-1 mx-1 rounded shadow">{{ p }}</span>
            </p>
            <a target="__blank" class="bg-blue-300 rounded-b-md text-center w-full text-white py-2"
              :href="project.link">{{ project.buttonText }}</a>
          </div>
        </div>

      </div>
    </div>
    <hr>
    <div class="w-full my-10">
      <h1 class="font-bold text-3xl py-5 px-5">Contributions</h1>
      <span class="my-10 text-xl px-5 text-gray-400"> I contributed following projects. </span>

      <p class="py-10 px-5">

      <ul>
        <li>I was one of the lead developer of Elements kit plugin</li>
        <li>I was team lead of Metform plugin</li>
        <li>I was core architect , team lead and lead developer of Devmonsta plugin</li>
      </ul>
      </p>
      <div class="grid md:grid-cols-3 px-5 gap-10">
        <div v-for="(project, index) in contributions" :key="index" class="
            bg-gray-100
            flex flex-col
            gap-4
            rounded-md
            shadow-xl
            justify-between
          ">
          <img class="rounded-t-md shadow" :src="project.image" />
          <h1 v-html="project.name" class="mx-2 text-center text-xl font-bold">

          </h1>
          <div class="w-full flex flex-col">

            <a target="__blank" class="bg-blue-300 rounded-b-md text-center w-full text-white py-2"
              :href="project.link">{{ project.buttonText }}</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contributions: [
        {
          name: 'Elements kit Elementor addons <br> <small>(Header & Footer Builder, Mega Menu Builder, Layout Library)</small>',
          image: 'https://ps.w.org/elementskit-lite/assets/banner-772x250.png?rev=2118488',
          link: 'https://wordpress.org/plugins/elementskit-lite/',
          buttonText: 'View Details',

        },
        {
          name: 'Metform Elementor Addon <br> <small> Most flexible and design-friendly Contact Form builder </small>',
          image: 'https://ps.w.org/metform/assets/banner-772x250.png?rev=2544152',
          link: 'https://wordpress.org/plugins/metform/',
          buttonText: 'View Details',

        },
        {
          name: 'Propovoice CRM <br> <small>Best CRM & Invoicing Plugin to Manage Leads, Clients and Billings automation</small>',
          image: 'https://ps.w.org/propovoice/assets/banner-772x250.png?rev=2924607',
          link: 'https://wordpress.org/plugins/propovoice/',
          buttonText: 'View Details',

        },

        {
          name: 'Devmonsta',
          image: 'https://ps.w.org/devmonsta/assets/banner-772x250.png?rev=2390849',
          link: 'https://wordpress.org/plugins/devmonsta/',
          buttonText: 'View Details',

        },
      ],
      projects: [
        {
          name: 'Banner, Popup, Thumbnail, WooCommerce Product Image, Apps,Label maker',
          image: 'https://ps.w.org/labelbaker/assets/screenshot-1.png',
          buttonText: 'View Details',
          link: 'https://wordpress.org/plugins/labelbaker/',
          stack: ['PHP', 'WordPress'],
          platform: ['WordPress']
        },
        {
          name: 'WooCommerce Product Image Background Removal Plugin',
          image: '/bgxremover.jpg',
          buttonText: 'View Details',
          link: 'https://wpcox.com/bgxremover',
          stack: ['PHP', 'WordPress','AI'],
          platform: ['WordPress']
        },
        {
          name: 'Website contents personalizer <br> <small>( Wordpress Plugin )</small>',
          image: '/wpcondify.png',
          buttonText: 'View Details',
          link: 'https://wordpress.org/plugins/wpcondify/',
          stack: ['PHP', 'WordPress'],
          platform: ['WordPress']
        },
        {
          name: 'Wordpress Email Customizer <br> <small>( Wordpress Plugin )</small>',
          image: '/nonaki.png',
          buttonText: 'View Details',
          link: 'https://wordpress.org/plugins/nonaki-email-template-customizer/',
          stack: ['PHP', 'WordPress'],
          platform: ['WordPress']
        },
        {
          name: 'E-Commerce messenger bot & Facebook Campaign',
          image: '/febe.jpg',
          buttonText: 'View Details',
          link: '/works/febe',
          stack: ['PHP', 'Laravel', 'MySQL'],
          platform: ['Web']
        },
        {
          name: 'Social Marketing Suite',
          image: '/sociallit.jpg',
          buttonText: 'View Details',
          link: '/works/sociallit',
          stack: ['PHP', 'Laravel', 'MySQL'],
          platform: ['Web']
        },
        {
          name: 'Project Tracking System',
          image: 'https://camo.githubusercontent.com/2738e5f9f3a530fb0ec121fe6ec9fc451c3cf40a2f6c0cb524043bf54108b435/687474703a2f2f70726170706f2e6769746875622e696f2f696d672f776562706172742e706e67',
          buttonText: 'View Details',
          link: 'https://github.com/prappo/tracker',
          stack: ['Java', 'PHP', 'Laravel', 'MySQL', 'SQLite'],
          platform: ['Web', 'Android']
        },

        {
          name: 'Doctor appointment system',
          image: '/empty.png',
          buttonText: 'View Details',
          link: 'https://github.com/prappo/doctor',
          stack: ['PHP', 'Laravel'],
          platform: ['Web']
        },
        {
          name: 'Node.js & Socket.io based multiplayer game',
          image: 'https://raw.githubusercontent.com/prappo/ludo-game/master/public/assets/img/screenshots/game.png',
          buttonText: 'View Details',
          link: 'https://github.com/prappo/ludo-game',
          stack: ['Javascript', 'Node.js', 'Socket.io'],
          platform: ['Web']
        },
        {
          name: 'VOR software platform',
          image: '/empty.png',
          buttonText: 'View Details',
          link: 'https://github.com/prappo/vor',
          stack: ['PHP'],
          platform: ['Web']
        },
        {
          name: 'Drag and drop testimonial builder and management system',
          image: 'https://raw.githubusercontent.com/prappo/royal/gh-pages/documentation/assets/images/Testimonial1.gif',
          buttonText: 'View Details',
          link: 'https://github.com/prappo/royal',
          stack: ['PHP'],
          platform: ['Web']
        },
        {
          name: 'Online Dollar Buy & Sell',
          image: '/dollar.png',
          buttonText: 'View Details',
          link: 'https://onlinedollarbuysell.com/public/',
          stack: ['PHP', 'Laravel'],
          platform: ['Web']
        },


      ]
    }
  }
}
</script>