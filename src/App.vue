<template>
  <div>
    
    <IntroSection></IntroSection>
    <SkillsSection></SkillsSection>
  </div>
</template>

<script setup>
import IntroSection from "./components/IntroSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
</script>

<style>
*{
  font-family: 'Rubik', sans-serif; 
}

section {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>

