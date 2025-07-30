<template>
    <Loader v-if="state.isPageLoading" />
</template>

<script setup lang="ts">
import { facebookService } from '@/api/facebook/FacebookService'

const route = useRoute()
const code = route.query.code as string
const error = route.query.error as string

const state = reactive({
    code: code,
    error: null as any,
    isPageLoading: false,
    facebookError: error ?? null as any
})

onMounted(() => {
    getToken()
})

async function getToken() {
    state.isPageLoading = true
    try {
        let params = {
            code: state.code
        }
        const response = await facebookService.generateToken(params)
        if (response.data) {
            navigateTo('/settings')
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}
</script>