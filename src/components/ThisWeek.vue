<template>
    <div class="text-center py-5" :class="backgroundColor()">
        <div class="fs-1 fw-bolder">
            {{ weekLabel().toUpperCase() }}
        </div>
        <div class="fw-thin">
            Week {{ weekOfYear }}
        </div>
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
