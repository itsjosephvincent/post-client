<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }} | Login</Title>
    </Head>

    <div class="flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Loader v-if="state.isPageLoading" />
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
                <Alert v-if="state.error" :message="state.error.message" class="mb-2" />
                <form class="space-y-6" @submit.prevent="login">
                    <div>
                        <div class="flex">
                            <FormLabel for="email" label="Email address" />
                            <span class="text-red-500">*</span>
                        </div>
                        <div class="mt-2">
                            <FormInput type="email" name="email" class="w-full" v-model="state.email" />
                            <FormError :error="v$?.email?.$errors[0]?.$message.toString()" />
                            <FormError :error="state.error?.errors?.email?.[0]" />
                        </div>
                    </div>

                    <div>
                        <div class="flex">
                            <FormLabel for="password" label="Password" />
                            <span class="text-red-500">*</span>
                        </div>
                        <div class="mt-2">
                            <FormPassword name="password" class="w-full" v-model="state.password" />
                            <FormError :error="v$?.password?.$errors[0]?.$message.toString()" />
                            <FormError :error="state.error?.errors?.password?.[0]" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="text-sm/6">
                            <a href="/register" class="font-semibold text-gray-600 hover:text-gray-500">
                                Create account
                            </a>
                        </div>
                        <div class="text-sm/6">
                            <a href="#" class="font-semibold text-red-600 hover:text-red-500">Reset password</a>
                        </div>
                    </div>

                    <div>
                        <FormButton type="submit" class="w-full">Login</FormButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { useUserStore } from '@/store/user'
import { authService } from '@/api/auth/AuthService'

const runtimeConfig = useRuntimeConfig()
const userStore = useUserStore()

const state = reactive({
    email: null as any,
    password: null as any,
    error: null as any,
    isPageLoading: null as any,
})

const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('This field is required.', required),
        },
        password: {
            required: helpers.withMessage('This field is required.', required),
        },
    }
})

const v$ = useVuelidate(rules, state)

async function login() {
    v$.value.$validate()
    if (!v$.value.$error) {
        state.isPageLoading = true
        try {
            let params = {
                email: state.email,
                password: state.password
            }
            const response = await authService.login(params)
            if (response.data) {
                localStorage.setItem("_token", response.data.token)
                userStore.setUser(response.data.user)
                navigateTo('/dashboard')
            }
        } catch (error) {
            state.error = error
        }
    }
    state.isPageLoading = false
}
</script>