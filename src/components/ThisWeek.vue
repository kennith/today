<template>
    <div class="text-center py-5" :class="backgroundColor()">
        <div class="fs-1 fw-bolder">
            {{ weekLabel(weekOfYear).toUpperCase() }}
        </div>
        <div class="fw-thin">
            Week {{ weekOfYear }}
        </div>

        <div>Next Week: {{ weekLabel(nextWeekOfYear) }}</div>
    </div>
</template>

<script setup>
import moment from 'moment';

const weekOfYear = moment().week();
const nextWeekOfYear = weekOfYear + 1;

function isDevelopmentweek(weekOfYear) {
    return weekOfYear % 3 !== 0;
}

function weekLabel(week) {
    if (isDevelopmentweek(week)) {
        return 'Development';
    }

    return 'Planning';
}

function backgroundColor() {
    if (isDevelopmentweek(weekOfYear)) {
        return 'bg-success-subtle';
    }

    return 'bg-primary-subtle';
}
</script>
