<script setup>
import ThisWeek from '../components/ThisWeek.vue'
import ProjectCard from '@/views/ProjectCard.vue';

const projectObjects = [
  { title: 'Habit Tracker', url: 'https://habit-tracker.kennith.dev', githubUrl: 'https://github.com/kennith/habit-tracker/' },
  { title: 'Today', url: 'https://today.kennith.dev', githubUrl: 'https://github.com/kennith/today/' },
];

</script>

<template>
  <main>
    <ThisWeek></ThisWeek>
    <div class="container my-3">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
        <ProjectCard v-for="(project, index) in projectObjects" v-bind:key="index" :project="project" class="col border p-5 m-1">
        </ProjectCard>
      </div>
    </div>
  </main>
</template>
