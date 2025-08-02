<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }} | Posts</Title>
    </Head>

    <div>
        <Loader v-if="state.isPageLoading" />

        <Breadcrumbs :pages="pages" />

        <div class="mt-4">
            <span class="text-3xl font-bold text-slate-800">Posts</span>
        </div>

        <Alert v-if="state.error" :message="state.error.message" />

        <div class="mt-4">
            <TablePosts :head="state.head" :body="state.body" />
            <PaginationFacebook v-if="state.body?.data?.length > 0" :data="state.body" @previous="previous"
                @next="next" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { facebookPageService } from '@/api/facebookPage/FacebookPageService'

const runtimeConfig = useRuntimeConfig()

const router = useRouter()
const uuid = String(router?.currentRoute?.value?.params?.uuid)

const route = useRoute()
const path = route.fullPath
const pageUrl = path.replace(`/${uuid}`, '')

const pages = [
    { name: 'Pages', href: pageUrl, current: false },
    { name: 'Posts', href: path, current: true },
]

definePageMeta({
    layout: 'main'
})

const state = reactive({
    isPageLoading: false,
    head: [
        {
            name: 'Post ID'
        },
        {
            name: 'Post'
        },
        {
            name: 'Date created'
        }
    ],
    body: [] as any,
    error: null as any
})

onMounted(() => {
    fetchPosts()
})

async function fetchPosts() {
    state.isPageLoading = true
    try {
        const response = await facebookPageService.getPagePosts(uuid)
        if (response.data) {
            state.body = response
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}

async function next(data: any) {
    state.isPageLoading = true
    try {
        let params = {
            next_url: data,
            cursor: state.body.paging.cursors.after
        }
        const response = await facebookPageService.getNextPagePosts(params)
        if (response.data) {
            state.body = response
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}

function previous() {
    fetchPosts()
}
</script>