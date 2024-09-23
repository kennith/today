<template>
    <div class="text-center py-5 fs-1 fw-bolder" :class="backgroundColor()">
        {{ weekLabel() }} week
    </div>
</template>

<script setup>
import moment from 'moment';

const weekOfYear = moment().week();

function isDevelopmentweek() {
    return weekOfYear % 3 !== 0;
}

function weekLabel() {
    if (isDevelopmentweek()) {
        return 'Development';
    }

    return 'Planning';
}

function backgroundColor() {
    if (isDevelopmentweek()) {
        return 'bg-success-subtle';
    }

    return 'bg-primary-subtle';
}
</script>
