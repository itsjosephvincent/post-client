<template>
    <div class="flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
        </div>

        <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
                <form class="space-y-6" @submit.prevent="register">
                    <div>
                        <div class="flex">
                            <FormLabel for="firstname" label="First name" />
                            <span class="text-red-500">*</span>
                        </div>
                        <div class="mt-2">
                            <FormInput type="text" name="firstname" class="w-full" v-model="state.firstname" />
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <FormLabel for="lastname" label="Last name" />
                            <span class="text-red-500">*</span>
                        </div>
                        <div class="mt-2">
                            <FormInput type="text" name="lastname" class="w-full" v-model="state.lastname" />
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <FormLabel for="email" label="Email address" />
                            <span class="text-red-500">*</span>
                        </div>
                        <div class="mt-2">
                            <FormInput type="email" name="email" class="w-full" v-model="state.email" />
                        </div>
                    </div>

                    <div>
                        <div class="flex">
                            <FormLabel for="password" label="Password" />
                            <span class="text-red-500">*</span>
                        </div>
                        <div class="mt-2">
                            <FormPassword name="password" class="w-full" v-model="state.password" />
                        </div>
                    </div>

                    <div>
                        <FormButton class="w-full">Register</FormButton>
                    </div>
                </form>

                <div>
                    <div class="relative mt-10">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-gray-200" />
                        </div>
                        <div class="relative flex justify-center text-sm/6 font-medium">
                            <span class="bg-white px-6 text-gray-900">Or</span>
                        </div>
                    </div>

                    <div class="mt-6 flex">
                        <FormButton @click="goToLogin" class="!bg-white hover:!bg-gray-50 w-full !text-gray-900 border">
                            Login
                        </FormButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { authService } from '@/api/auth/AuthService'
import { FormPassword } from '#components'

const state = reactive({
    firstname: null as any,
    lastname: null as any,
    email: null as any,
    password: null as any,
    error: null as any,
    isPageLoading: null as any,
})

const rules = computed(() => {
    return {
        firstname: {
            required: helpers.withMessage('This field is required.', required),
        },
        lastname: {
            required: helpers.withMessage('This field is required.', required),
        },
        email: {
            required: helpers.withMessage('This field is required.', required),
        },
        password: {
            required: helpers.withMessage('This field is required.', required),
        },
    }
})

const v$ = useVuelidate(rules, state)

function goToLogin() {
    navigateTo('/')
}
</script>