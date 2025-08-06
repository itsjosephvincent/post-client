<template>
    <div>
        <div class="bg-gray-900 h-screen">
            <header class="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
                    <div class="flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>

                            <img src="/assets/img/praservices.jpg" alt="" class="h-24 rounded-full w-auto" />
                        </a>
                    </div>
                    <div class="flex gap-x-12 justify-ceter">
                        <a href="#services" class="text-sm/6 font-semibold text-white">Services</a>
                        <a href="#about-us" class="text-sm/6 font-semibold text-white">About Us</a>
                    </div>
                    <div class="flex flex-1 justify-end">
                        <a href="/contact-us"
                            class="text-sm/6 font-semibold py-1.5 rounded-lg px-2 bg-white text-black cursor-pointer">
                            Contact Us
                        </a>
                    </div>
                </nav>
            </header>

            <div class="relative h-screen isolate overflow-hidden pt-14">
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" class="absolute inset-0 -z-10 size-full object-cover" />
                <div class="absolute inset-0 bg-black/50 -z-10"></div>
                <div aria-hidden="true"
                    class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
                    </div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div class="text-center">
                            <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                                PRA Services
                            </h1>
                            <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                Actionable insights for your Facebook Pages — all in one place. From post performance to
                                audience engagement, our platform helps you track what matters most. Whether you're
                                analyzing reach, reactions, or comments, we deliver clear, reliable analytics to help
                                you grow smarter.
                            </p>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true"
                    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]">
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-900 py-24 sm:py-32 h-screen" id="services">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <p
                        class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                        All your Facebook analytics simplified in one place.
                    </p>
                    <p class="mt-6 text-lg/8 text-gray-300">
                        From post performance and engagement tracking to detailed reaction and comment breakdowns — our
                        platform gives you the insights you need to grow your Page with confidence.
                        We make analytics easy to understand and act on, so you can focus on content that truly connects
                        with your audience.
                    </p>
                </div>

                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div class="flex flex-col">
                            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 flex-none text-indigo-400">
                                    <path
                                        d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" />
                                </svg>
                                Real-Time Engagement Metrics
                            </dt>
                            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                                <p class="flex-auto">
                                    Instantly access key performance indicators like likes, comments, shares, and
                                    reactions across all your Page posts — all in real time.
                                </p>
                            </dd>
                        </div>

                        <div class="flex flex-col">
                            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 flex-none text-indigo-400">
                                    <path
                                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" />
                                </svg>
                                Admin-Only Page Access
                            </dt>
                            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                                <p class="flex-auto">
                                    We verify and connect only the Pages you manage. Your data stays secure, private,
                                    and visible only to you — no third-party access.
                                </p>
                            </dd>
                        </div>

                        <div class="flex flex-col">
                            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 flex-none text-indigo-400">
                                    <path
                                        d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" />
                                </svg>
                                Transparent, Data-Driven Decisions
                            </dt>
                            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                                <p class="flex-auto">
                                    No guessing. Our analytics make it easy to understand what content works, when your
                                    audience is active, and how to optimize your posts with confidence.
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>

            </div>
        </div>

        <div class="overflow-hidden bg-white py-32" id="about-us">
            <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">About us</h2>
                        <p class="mt-6 text-xl/8 text-gray-700">
                            At PRA Services, we’re committed to helping Facebook Page admins make smarter, data-driven
                            decisions.
                            With a streamlined dashboard and powerful insights from the Meta Graph API, we make it easy
                            to understand how your content performs — in real time.
                        </p>
                        <p class="mt-6 text-base/7 text-gray-600">
                            We specialize in tracking key engagement metrics like comments, reactions, shares, and reach
                            across all your posts.
                            Our platform is built on transparency, simplicity, and clarity — giving you the tools to
                            optimize your Facebook presence without the guesswork.
                            Whether you manage one Page or many, we’re here to support your strategy with meaningful,
                            actionable analytics.
                        </p>

                    </div>
                    <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                        </div>
                        <div
                            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img src="https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                            </div>
                            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                            </div>
                            <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img src="https://images.unsplash.com/photo-1608093310225-bb8260a85072?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="bg-gray-900">
            <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav aria-label="Footer" class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                    <a href="#services" class="text-gray-400 hover:text-white">Services</a>
                    <a href="#about-us" class="text-gray-400 hover:text-white">About Us</a>
                    <a href="/contact-us" class="text-gray-400 hover:text-white">Contact Us</a>
                    <a href="/privacy-policy" class="text-gray-400 hover:text-white">Privacy Policy</a>
                </nav>
                <p class="mt-10 text-center text-sm/6 text-gray-400">
                    &copy; 2025 PRA Services. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
</script>