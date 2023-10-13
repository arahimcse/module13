<script setup>
import { ref, computed, watch } from 'vue'
import { userDetails } from '../store/userStore';
const vote = ref(null)
const birtYear = computed(() => {
    return new Date(userDetails.birthDate).getFullYear()

})

const electionAge = computed(() => {
    const currentYear = new Date().getFullYear()
    let age = currentYear - new Date(userDetails.birthDate).getFullYear()
    if (age >= 18) {
        return true
    } else {
        return false
    }
})

watch(userDetails,
    () => {
        if (electionAge.value) {
            vote.value = 'Eligible for voting'
        } else {
            vote.value = 'Not eligible for voting'
        }
    },
    { immediate: true },
    { deep: true }
)

</script>

<template>
    <!-- Snippet -->
    <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 p-4">
        <div class="h-full">
            <!-- Card -->
            <div class="max-w-sm mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <div class="flex flex-col h-full">
                    <!-- Card top -->
                    <div class="flex-grow p-5">
                        <div class="flex justify-between items-start">
                            <!-- Image + name -->
                            <header>
                                <div class="flex mb-2">
                                    <a class="relative inline-flex items-start mr-5" href="#0">
                                        <div class="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow"
                                            aria-hidden="true">
                                            <svg class="w-8 h-8 fill-current text-yellow-500" viewBox="0 0 32 32">
                                                <path
                                                    d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                                            </svg>
                                        </div>
                                        <img class="rounded-full" :src="userDetails.profileImage" width="100"
                                            height="100" />
                                    </a>
                                    <div class="mt-1 pr-1">
                                        <h2 class="text-xl leading-snug font-semibold">{{
                                            userDetails.name }}
                                        </h2>

                                        <div class="flex">
                                            <span>{{ userDetails.email }}</span>
                                        </div>
                                        <div class="flex">
                                            <span>{{ birtYear }}</span>
                                        </div>
                                        <div class="flex">
                                            <span>{{ vote }}</span>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <!-- Bio -->
                        <div class="mt-2">
                            <div class="text-sm">{{ userDetails.description }} </div>
                        </div>
                    </div>
                    <!-- Card footer -->
                    <div class="border-t border-gray-200">
                        <div class="flex divide-x divide-gray-200r">
                            <router-link
                                class="block flex-1 text-center text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-4 group"
                                to="/userdetail">
                                <div class="flex items-center justify-center">
                                    <svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-gray-500 flex-shrink-0 mr-2"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                                    </svg>
                                    <span>Edit Profile</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    font-family: 'Inter', sans-serif;
}

img {
    height: 80%;
}
</style>