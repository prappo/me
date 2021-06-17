<template>
  <div>
    <div id="me">My Image here</div>
    <IntroSection></IntroSection>
    <SkillsSection></SkillsSection>
  </div>
</template>

<script setup>
import IntroSection from "./components/IntroSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
</script>

<style>
#me {
  position: fixed;
  z-index: inherit;
}

section {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>

