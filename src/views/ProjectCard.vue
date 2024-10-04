<script setup>
const props = defineProps({
    project: Object
}
);
</script>

<template>
    <div>
        <div class="text-center">
            <h2 class="mb-3">
                <a :href="props.project.url" target="_blank" class="text-black link-underline link-underline-opacity-0">
                    {{ props.project.title }}
                </a>
            </h2>

            <a :href="props.project.githubUrl" target="_blank">
                <i class=" bi bi-github fs-3 text-black"></i>
            </a>
        </div>
    </div>
</template>
