<template>
    <div class="overflow-hidden rounded-lg bg-white shadow-sm">
        <div class="px-4 py-5 sm:p-6 flex flex-col">
            <div class="font-bold text-xl text-center">
                {{ props.title }}
            </div>
            <div class="text-center text-7xl">
                {{ props.data }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
})
</script>