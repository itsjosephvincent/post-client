<template>
    <main class="overflow-hidden rounded-lg bg-white shadow-sm">
        <div class="divide-y divide-white/5">
            <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <h2 class="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                    <p class="mt-1 text-base text-gray-400">Use a permanent address where you can receive mail.
                    </p>
                </div>

                <form @submit.prevent="submitUpdate" class="md:col-span-2">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <div class="flex">
                                <FormLabel for="firstname" label="First name" />
                                <span class="text-red-500">*</span>
                            </div>
                            <div class="mt-2">
                                <FormInput type="text" name="firstname" class="w-full" v-model="state.form.firstname" />
                                <FormError :error="v$?.form.firstname?.$errors[0]?.$message.toString()" />
                                <FormError :error="state.error?.errors?.form.firstname?.[0]" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <div class="flex">
                                <FormLabel for="lastname" label="Last name" />
                                <span class="text-red-500">*</span>
                            </div>
                            <div class="mt-2">
                                <FormInput type="text" name="lastname" class="w-full" v-model="state.form.lastname" />
                                <FormError :error="v$?.form.lastname?.$errors[0]?.$message.toString()" />
                                <FormError :error="state.error?.errors?.form.lastname?.[0]" />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <div class="flex">
                                <FormLabel for="email" label="Email address" />
                                <span class="text-red-500">*</span>
                            </div>
                            <div class="mt-2">
                                <FormInput type="email" name="email" class="w-full" v-model="state.form.email" />
                                <FormError :error="v$?.form.email?.$errors[0]?.$message.toString()" />
                                <FormError :error="state.error?.errors?.form.email?.[0]" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 flex">
                        <FormButton type="submit">Update account</FormButton>
                    </div>
                </form>
            </div>

            <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <h2 class="text-base/7 font-semibold text-gray-900">Change password</h2>
                    <p class="mt-1 text-base text-gray-400">Update your password associated with your account.
                    </p>
                </div>

                <form @submit.prevent="submitPassword" class="md:col-span-2">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                        <div class="col-span-full">
                            <Alert v-if="state.passwordError" :message="state.passwordError" />
                            <Alert v-if="state.error" :message="state.error.message" />
                        </div>
                        <div class="col-span-full">
                            <div class="flex">
                                <FormLabel for="current_password" label="Current password" />
                                <span class="text-red-500">*</span>
                            </div>
                            <div class="mt-2">
                                <FormInput type="password" name="current_password" class="w-full"
                                    v-model="state.passwordForm.currentPassword" />
                                <FormError :error="c$?.passwordForm.currentPassword?.$errors[0]?.$message.toString()" />
                                <FormError :error="state.error?.errors?.passwordForm.currentPassword?.[0]" />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <div class="flex">
                                <FormLabel for="new_password" label="New password" />
                                <span class="text-red-500">*</span>
                            </div>
                            <div class="mt-2">
                                <FormInput type="password" name="new_password" class="w-full"
                                    v-model="state.passwordForm.newPassword" />
                                <FormError :error="c$?.passwordForm.newPassword?.$errors[0]?.$message.toString()" />
                                <FormError :error="state.error?.errors?.passwordForm.newPassword?.[0]" />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <div class="flex">
                                <FormLabel for="confirm_password" label="Confirm new password" />
                                <span class="text-red-500">*</span>
                            </div>
                            <div class="mt-2">
                                <FormInput type="password" name="confirm_password" class="w-full"
                                    v-model="state.passwordForm.confirmPassword" />
                                <FormError :error="c$?.passwordForm.confirmPassword?.$errors[0]?.$message.toString()" />
                                <FormError :error="state.error?.errors?.passwordForm.confirmPassword?.[0]" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 flex">
                        <FormButton type="submit">Update password</FormButton>
                    </div>
                </form>
            </div>

            <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <h2 class="text-base/7 font-semibold text-gray-900">Social media</h2>
                    <p class="mt-1 text-base text-gray-400">
                        Get the data you need to make smarter decisions. Connect your social media accounts to
                        monitor the metrics that matter for your posts, helping you improve your content and
                        maximize your impact.
                    </p>
                </div>

                <div class="flex items-start md:col-span-2">
                    <FormButton @click="connect" class="flex items-center gap-x-1"
                        :disabled="props.user?.facebook_profile !== null">
                        <svg xmlns=" http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0,0,256,256">
                            <g fill-opacity="0" fill="#fffefe" fill-rule="nonzero" stroke="none" stroke-width="1"
                                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                                text-anchor="none" style="mix-blend-mode: normal">
                                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                            </g>
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path
                                    d="M128,240.64c-62.20935,0 -112.64,-50.43065 -112.64,-112.64v0c0,-62.20935 50.43065,-112.64 112.64,-112.64v0c62.20935,0 112.64,50.43065 112.64,112.64v0c0,62.20935 -50.43065,112.64 -112.64,112.64z"
                                    id="shape"></path>
                            </g>
                            <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <g transform="scale(5.12,5.12)">
                                    <path
                                        d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span v-if="props.user?.facebook_profile != null">Connected</span>
                        <span v-else>Connect</span>
                    </FormButton>
                </div>
            </div>

            <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <h2 class="text-base/7 font-semibold text-gray-900">Delete account</h2>
                    <p class="mt-1 text-base text-gray-400">No longer want to use our service? You can delete
                        your account here. This action is not reversible. All information related to this
                        account will be deleted permanently.</p>
                </div>

                <form class="flex items-start md:col-span-2">
                    <FormButton class="!bg-red-500">Yes, delete my account</FormButton>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const emit = defineEmits(['facebookAction', 'updateAccountAction', 'updatePasswordAction', 'errorMessage'])

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    error: {
        type: String,
        required: false
    },
    resetPassword: {
        type: Boolean,
        required: false
    }
})

const state = reactive({
    form: {
        firstname: props.user.firstname,
        lastname: props.user.lastname,
        email: props.user.email,
    },
    passwordForm: {
        currentPassword: null as any,
        newPassword: null as any,
        confirmPassword: null as any,
    },
    error: null as any,
    passwordError: null as any
})

watch(() => props.error, (newValue) => {
    state.error = newValue
})

watch(() => props.resetPassword, (newValue) => {
    if (newValue) {
        resetPasswordForm()
    }
})

const ruleOne = computed(() => {
    return {
        form: {
            firstname: {
                required: helpers.withMessage('This field is required.', required),
            },
            lastname: {
                required: helpers.withMessage('This field is required.', required),
            },
            email: {
                required: helpers.withMessage('This field is required.', required),
            },
        }
    }
})

const v$ = useVuelidate(ruleOne, state)

function submitUpdate() {
    v$.value.$validate()
    if (!v$.value.$error) {
        emit('updateAccountAction', state.form)
    }
}

const ruleTwo = computed(() => {
    return {
        passwordForm: {
            currentPassword: {
                required: helpers.withMessage('This field is required.', required),
            },
            newPassword: {
                required: helpers.withMessage('This field is required.', required),
            },
            confirmPassword: {
                required: helpers.withMessage('This field is required.', required),
            },
        }
    }
})

const c$ = useVuelidate(ruleTwo, state)

function submitPassword() {
    c$.value.$validate()
    if (!c$.value.$error) {
        if (state.passwordForm.newPassword !== state.passwordForm.confirmPassword) {
            state.passwordError = 'Passwords do not match.'
        } else {
            emit('updatePasswordAction', state.passwordForm)
            c$.value.$reset()
            state.error = null
        }
    }
}

function connect() {
    emit('facebookAction', true)
}

function resetPasswordForm() {
    state.passwordForm.currentPassword = null
    state.passwordForm.newPassword = null
    state.passwordForm.confirmPassword = null
}
</script>
