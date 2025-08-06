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

        <div class="grid grid-cols-3 mt-10 gap-x-4">
            <div>
                <Card :title="'Total Comments'" :data="state.statistics.total_comments" />
            </div>
            <div>
                <Card :title="'Total Reacts'" :data="state.statistics.total_reacts" />
            </div>
            <div>
                <Card :title="'Total Shares'" :data="'0'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { facebookPageService } from '@/api/facebookPage/FacebookPageService'

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
    isPageLoading: false,
    error: null as any,
    statistics: {
        total_comments: null as any,
        total_reacts: null as any
    }
})

onMounted(() => {
    fetchPostInsights()
    fetchPostReactInsights()
})

async function fetchPostInsights() {
    state.isPageLoading = true
    try {
        let params = {
            page_uuid: uuid,
            post_id: id
        }
        const response = await facebookPageService.getPostInsights(params)
        if (response.data) {
            state.statistics.total_comments = response.data.total_comments
        }
    } catch (error) {
        state.error = error;
    }
    state.isPageLoading = false
}

async function fetchPostReactInsights() {
    state.isPageLoading = true
    try {
        let params = {
            page_uuid: uuid,
            post_id: id
        }
        const response = await facebookPageService.getPostReactInsights(params)
        if (response.data) {
            state.statistics.total_reacts = response.data.total_reacts
        }
    } catch (error) {
        state.error = error;
    }
    state.isPageLoading = false
}
</script>