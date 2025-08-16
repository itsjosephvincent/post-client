<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }} | Settings</Title>
    </Head>

    <div>
        <Loader v-if="state.isPageLoading" />
        <ModuleSettings v-if="state.user" :user="state.user" :error="state.error" @facebookAction="connectFacebook"
            @updatePasswordAction="changePassword" @updateAccountAction="changeAccount"
            :resetPassword="state.resetPass" />
    </div>
</template>

<script setup lang="ts">
import { userService } from '@/api/user/UserService';
import { useAlert } from '@/composables/alert';

const runtimeConfig = useRuntimeConfig()

const { successAlert } = useAlert()

definePageMeta({
    layout: 'main'
})

const state = reactive({
    isPageLoading: false,
    user: null as any,
    error: null as any,
    resetPass: false
})

onMounted(() => {
    fetchCurrentUser()
})

async function fetchCurrentUser() {
    state.isPageLoading = true
    try {
        const response = await userService.getCurrentUser()
        if (response.data) {
            state.user = response.data
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}

async function connectFacebook() {
    const baseUri = 'https://www.facebook.com/v23.0/dialog/oauth';
    const params = {
        client_id: '1026426192691369',
        redirect_uri: 'https://praservices.online/settings/oauth',
        scope: 'public_profile,read_insights,pages_show_list,pages_read_engagement,pages_read_user_content,pages_manage_posts,pages_manage_engagement',
        response_type: 'code'
    };

    const queryString = new URLSearchParams(params).toString();
    const uri = `${baseUri}?${queryString}`;
    navigateTo(uri, {
        external: true
    })
}

async function changePassword(data: any) {
    state.isPageLoading = true
    try {

        let params = {
            password: data.newPassword,
            current_password: data.currentPassword
        }
        const response = await userService.updateUserPassword(params, state.user.uuid)
        if (response.data) {
            state.user = response.data
            state.resetPass = true
            successAlert('Success!', 'Password updated.')
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}

async function changeAccount(data: any) {
    state.isPageLoading = true
    try {

        let params = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email
        }
        const response = await userService.updateUser(params, state.user.uuid)
        if (response.data) {
            state.user = response.data
            successAlert('Success!', 'Account updated.')
        }
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}
</script>