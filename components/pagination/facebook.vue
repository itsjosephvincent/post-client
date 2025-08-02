<template>
    <div class="mt-2 flex flex-row items-center gap-y-3 mb-2 sm:mb-0" v-if="props.data && props.data.paging">
        <div class="grow flex flex-row justify-start gap-x-3">
            <FormButton class="w-auto" type="button" v-if="props.data?.paging && props.data?.paging?.previous"
                @click="!(props.data.paging && props.data?.paging?.previous === null) && $emit('previous')">
                Back to Page 1
            </FormButton>
            <FormButton class="w-24" type="button" v-if="props.data.paging && props.data.paging?.next"
                @click="!(props.data.paging && props.data?.paging?.next === null) && $emit('next', props.data?.paging?.next)">
                Next
            </FormButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})
</script>