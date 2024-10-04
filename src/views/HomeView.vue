<script setup>
import ThisWeek from '../components/ThisWeek.vue'
import ProjectCard from '@/views/ProjectCard.vue';

const projectObjects = [
  { title: 'Habit Tracker', url: 'https://habit-tracker.kennith.dev', githubUrl: 'https://github.com/kennith/habit-tracker/' },
  { title: 'Today', url: 'https://today.kennith.dev', githubUrl: 'https://github.com/kennith/today/' },
];

const columnCount = `row-cols-${projectObjects.length}`;
</script>

<template>
  <main>
    <ThisWeek></ThisWeek>
    <div class="container my-3">
      <div class="row" :class="columnCount">
        <div v-for="(project, index) in projectObjects" v-bind:key="index">
          <ProjectCard :project="project" class="col border  p-5"></ProjectCard>
        </div>
      </div>
    </div>
  </main>
</template>
