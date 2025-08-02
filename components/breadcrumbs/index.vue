<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div>
                    <NuxtLink to="/dashboard" class="text-slate-800 hover:text-slate-500">
                        <HomeIcon class="size-5 shrink-0" aria-hidden="true" />
                        <span class="sr-only">Home</span>
                    </NuxtLink>
                </div>
            </li>
            <li v-for="page in props.pages" :key="page.name">
                <div class="flex items-center">
                    <ChevronRightIcon class="size-5 shrink-0 text-slate-400" aria-hidden="true" />
                    <NuxtLink :to="page.href" :class="[
                        page.current ? 'font-bold' : 'font-normal',
                        'ml-4 text-base text-slate-700 hover:text-slate-500']">
                        {{ page.name }}
                    </NuxtLink>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    pages: {
        type: Array,
        required: true
    }
})
</script>