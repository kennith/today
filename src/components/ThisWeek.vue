<template>
    <div class="text-center py-5" :class="thisWeekClass" id="this-week">
        <div class="fs-1 fw-bolder">
            {{ weekLabelBanner }}
        </div>
        <div class="fw-thin">
            Week {{ weekOfYear }}
        </div>

        <div>Next Week: {{ nextWeekLabel }}</div>
    </div>
</template>

<script setup>
import moment from 'moment';
import { onMounted, ref, computed } from 'vue';

let weekOfYear = moment().week();
let nextWeekOfYear = ref(weekOfYear.value + 1);
let nextWeekLabel = ref(weekLabel(nextWeekOfYear));

let changeWhenReload = ref('first');
let weekLabelBanner = ref(weekLabel(weekOfYear));

onMounted(() => {
    window.addEventListener('focus', () => {
        refreshData();
    });
})

const shouldHide = ref(true);

function refreshData() {
    shouldHide.value = false;
    weekOfYear = moment().week();
    changeWhenReload.value = (new Date().toString());
    weekLabelBanner.value = weekLabel(weekOfYear);
    nextWeekOfYear.value = weekOfYear + 1;
    nextWeekLabel.value = weekLabel(nextWeekOfYear.value);

    setTimeout(() => {
        shouldHide.value = true;
    }, 300)
}

function isDevelopmentweek(weekOfYear) {
    return weekOfYear % 3 !== 0;
}

function weekLabel(week) {
    if (isDevelopmentweek(week)) {
        return 'Development';
    }
    thisWe = 'something';

    return 'Planning';
}

let thisWeekClass = computed(() => ({
    'bg-success-subtle': isDevelopmentweek(weekOfYear) && shouldHide.value,
    'bg-primary-subtle': !isDevelopmentweek(weekOfYear) && shouldHide.value,
}));

let thisWe = 'test'


</script>
