<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }} | Dashboard</Title>
    </Head>

    <div>
        Hello
    </div>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()

definePageMeta({
    layout: 'main'
})

</script>