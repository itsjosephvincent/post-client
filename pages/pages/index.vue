<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }} | Pages</Title>
    </Head>

    <div>
        <Loader v-if="state.isPageLoading" />

        <Breadcrumbs :pages="pages" />

        <div class="mt-4">
            <span class="text-3xl font-bold text-slate-800">Pages</span>
        </div>

        <Alert v-if="state.error" :message="state.error.message" />

        <div class="mt-4">
            <TablePages :head="state.head" :body="state.body" />
            <Pagination v-if="state.body?.data?.length > 0" :data="state.body" @previous="previous()" @next="next()" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { facebookPageService } from '@/api/facebookPage/FacebookPageService'
const runtimeConfig = useRuntimeConfig()

let currentPage = 1

const route = useRoute()
const path = route.fullPath

definePageMeta({
    layout: 'main'
})

const pages = [{ name: 'Pages', href: path, current: true }]

const state = reactive({
    isPageLoading: false,
    error: null as any,
    head: [
        {
            name: 'Page ID'
        },
        {
            name: 'Name'
        }
    ],
    body: [] as any
})

onMounted(() => {
    fetchPages()
})

async function fetchPages() {
    state.isPageLoading = true
    try {
        let params = {
            page: currentPage
        }
        const response = await facebookPageService.getPages(params)
        if (response.data) {
            state.body = response
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}

async function previous() {
    currentPage--
    fetchPages()
}

async function next() {
    currentPage++
    fetchPages()
}
</script>