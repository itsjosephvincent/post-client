<template>
    <div>
        <TransitionRoot as="template" :show="state.sidebarOpen">
            <Dialog class="relative z-50 lg:hidden" @close="closeSideBar">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="-translate-x-full">
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="absolute top-0 left-full flex w-16 justify-center pt-5">
                                    <button type="button" class="-m-2.5 p-2.5" @click="closeSideBar">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>

                            <div
                                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <div class="flex h-16 shrink-0 items-center">
                                    <span class="text-white font-bold text-3xl">Post Metrics</span>
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <NuxtLink :href="item.href"
                                                        :class="[item.activeRouteNames.includes($route.name) ? 'bg-gray-400/20 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-base font-semibold']">
                                                        <component :is="item.icon" class="size-6 shrink-0"
                                                            aria-hidden="true" />
                                                        {{ item.name }}
                                                    </NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mt-auto">
                                            <NuxtLink to="/settings"
                                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-base font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                                                <Cog6ToothIcon class="size-6 shrink-0" aria-hidden="true" />
                                                Settings
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center justify-center">
                    <span class="text-white font-bold text-3xl">Post Metrics</span>
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                    <NuxtLink :href="item.href"
                                        :class="[item.activeRouteNames.includes($route.name) ? 'bg-gray-400/20 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-base font-semibold']">
                                        <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                                        {{ item.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-auto">
                            <NuxtLink to="/settings"
                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-base font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                                <Cog6ToothIcon class="size-6 shrink-0" aria-hidden="true" />
                                Settings
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div
                class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="openSideBar">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon class="size-6" aria-hidden="true" />
                </button>

                <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                <div class="flex flex-1 justify-end">
                    <Menu as="div" class="relative">
                        <MenuButton class="relative flex items-center">
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">Open user menu</span>
                            <img class="size-8 rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="" />
                            <span class="hidden lg:flex lg:items-center">
                                <span class="ml-4 text-base font-semibold text-gray-900" aria-hidden="true">
                                    {{ state.user.firstname }} {{ state.user.lastname }}
                                </span>
                                <ChevronDownIcon class="ml-2 size-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </MenuButton>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                <MenuItem>
                                <a @click="logout"
                                    class='block px-3 py-1 text-base leading-6 text-black hover:bg-gray-50 cursor-pointer'>
                                    Sign out
                                </a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    Cog6ToothIcon,
    HomeIcon,
    XMarkIcon,
    DocumentDuplicateIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { useUserStore } from '@/store/user'
import { authService } from '@/api/auth/AuthService'

const userStore = useUserStore()
const user = Object(userStore.getUser)

const navigation = [
    {
        name: 'Dashboard', href: '/dashboard', icon: HomeIcon, activeRouteNames: [
            'dashboard'
        ]
    },
    {
        name: 'Pages', href: '/pages', icon: DocumentDuplicateIcon, activeRouteNames: [
            'pages',
            'pages-uuid',
            'pages-uuid-insights-id',
        ]
    },
]

const state = reactive({
    sidebarOpen: false,
    user: user,
})

function closeSideBar() {
    state.sidebarOpen = false
}

function openSideBar() {
    state.sidebarOpen = true
}

async function logout() {
    try {
        const response = await authService.logout()
        if (response.message == 'Success.') {
            localStorage.removeItem('_token');
            userStore.resetUser()
            navigateTo('/')
        }
    } catch (error) {
        state.error = error
    }
}
</script>