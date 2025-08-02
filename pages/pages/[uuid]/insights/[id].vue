<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }} | Post Insight</Title>
    </Head>

    <div>
        <Loader v-if="state.isPageLoading" />

        <Breadcrumbs :pages="pages" />

        <div class="mt-4">
            <span class="text-3xl font-bold text-slate-800">Post Insights</span>
        </div>
    </div>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()

const router = useRouter()
const uuid = String(router?.currentRoute?.value?.params?.uuid)

const router2 = useRouter()
const id = String(router2?.currentRoute?.value?.params?.id)

const route = useRoute()
const path = route.fullPath
const pageUrl = path.replace(`/${uuid}/insights/${id}`, '')
const postUrl = path.replace(`/insights/${id}`, '')

const pages = [
    { name: 'Pages', href: pageUrl, current: false },
    { name: 'Posts', href: postUrl, current: false },
    { name: 'Post Insights', href: path, current: true },
]

definePageMeta({
    layout: 'main'
})

const state = reactive({
    isPageLoading: false
})
</script>